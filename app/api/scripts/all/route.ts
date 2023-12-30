import { createClient } from "@supabase/supabase-js";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseKey);

const TABLE_NAME = "Scripts";

export async function GET(
  request: Request,
) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect('/sign-in');
  }

  try {
    let { data, error } = await supabase
      .from(TABLE_NAME)
      .select(`*, Authors("*")`)
      .order("created_at", { ascending: false });
    console.log(data, error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "error" }));
  } finally {
  }
}
