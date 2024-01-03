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
  const searchParams = new URL(request.url).searchParams;
  const pageSize: number = Number(searchParams.get("pageSize")) || 4;
  const page: number = Number(searchParams.get('page')) ?? 0;

  const from = page * pageSize;
  const to = from + pageSize - 1;

  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect('/sign-in');
  }

  try {
    let { data, error } = await supabase
      .from(TABLE_NAME)
      .select(`*, Authors("*")`)
      .range(from, to)
      .order("created_at", { ascending: false });
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "error" }));
  } finally {
  }
}
