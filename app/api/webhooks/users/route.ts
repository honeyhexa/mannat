//ignore typescript
// @ts-nocheck
import type { User } from "@clerk/nextjs/api";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseKey);

const TABLE_NAME = "Authors";

type UnwantedKeys =
  | "emailAddresses"
  | "firstName"
  | "lastName"
  | "primaryEmailAddressId"
  | "primaryPhoneNumberId"
  | "phoneNumbers";

interface UserInterface extends Omit<User, UnwantedKeys> {
  email_addresses: {
    email_address: string;
    id: string;
  }[];
  primary_email_address_id: string;
  first_name: string;
  last_name: string;
  primary_phone_number_id: string;
  phone_numbers: {
    phone_number: string;
    id: string;
  }[];
}

const webhookSecret: string = process.env.WEBHOOK_SECRET || "";

export async function POST(req) {
  const payload = await req.json();
  const payloadString = JSON.stringify(payload);
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");
  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    console.log("svixId", svixId);
    console.log("svixIdTimeStamp", svixIdTimeStamp);
    console.log("svixSignature", svixSignature);
    return new Response("Error occured", {
      status: 400,
    });
  }
  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;
  try {
    evt = wh.verify(payloadString, svixHeaders) as Event;
  } catch (_) {
    console.log("error");
    return new Response("Error occured", {
      status: 400,
    });
  }
  const { id } = evt.data;
  // Handle the webhook
  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { email_addresses, primary_email_address_id } = evt.data;
    const emailObject = email_addresses?.find((email) => {
      return email.id === primary_email_address_id;
    });
    if (!emailObject) {
      return new Response("Error locating user", {
        status: 400,
      });
    }

    try {
      let { data, error } = await supabase
        .from(TABLE_NAME)
        .insert({
          id,
          user_name:
            emailObject?.email_address?.split?.("@")?.[0] ??
            emailObject?.email_address,
          full_name: `${evt.data.first_name} ${evt.data.last_name}`,
          email: emailObject.email_address,
        })
        .select();
      console.log(data, error);

      // Notify Mannat Signup using Telegram Bot
      fetch(
        "https://api.telegram.org/bot" +
          process.env.TELEGRAM_BOT_TOKEN +
          "/sendMessage",
        {
          method: "POST",
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID_MANNAT_SIGNUP,
            text: `New user ${evt.data.first_name} ${evt.data.last_name} with Email: ${emailObject?.email_address} just signed up!`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return new Response(JSON.stringify(data));
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({ error: "error" }));
    } finally {
      console.log(`User ${id} was ${eventType}`);
    }
  }
  return new Response("", {
    status: 201,
  });
}

type Event = {
  data: UserInterface;
  object: "event";
  type: EventType;
};

type EventType = "user.created" | "user.updated" | "*";
