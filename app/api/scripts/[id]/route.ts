import { createClient } from "@supabase/supabase-js";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseKey);

const TABLE_NAME = "Scripts";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const user = await currentUser();

  if (!user || user?.id !== id) {
    return NextResponse.redirect('/sign-in');
  }

  try {
    let { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("id", id);
    console.log(data, error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "error" }));
  } finally {
  }
}

export async function POST(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const user = await currentUser();

  if (!user || user?.id !== id) {
    return NextResponse.redirect('/sign-in');
  }

  try {
    let { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({ ...(await request.json()) })
      .select();
    console.log(data, error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "error" }));
  } finally {
    console.log("finally");
  }
}

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect('/sign-in');
  }

  try {
    let { data, error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq("id", id)
      .eq("author", user?.id)
      .select();
    console.log(data, error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "error" }));
  } finally {
    console.log("finally");
  }
}


export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const user = await currentUser();

  if (!user || user?.id !== id) {
    return NextResponse.redirect('/sign-in');
  }
  
  try {
    let { data, error } = await supabase
      .from(TABLE_NAME)
      .update({ ...(await request.json()) })
      .eq("id", id)
      .select();
    console.log(data, error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "error" }));
  } finally {
    console.log("finally");
  }
}