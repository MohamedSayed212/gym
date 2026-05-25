import { NextResponse } from "next/server";
import { createSupabaseAdminClient, isSupabaseAdminConfigured } from "../../../../lib/supabase-admin";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = "gym1234";

function isAuthorized(request) {
  return request.headers.get("x-admin-password") === ADMIN_PASSWORD;
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function missingConfig() {
  return NextResponse.json({ error: "Supabase admin environment variables are missing." }, { status: 500 });
}

export async function GET(request) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  if (!isSupabaseAdminConfigured) {
    return missingConfig();
  }

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("leads")
    .select("id,name,phone,package_type,status,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data ?? [] });
}

export async function PATCH(request) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  if (!isSupabaseAdminConfigured) {
    return missingConfig();
  }

  const body = await request.json().catch(() => ({}));

  if (!body.id) {
    return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("leads")
    .update({ status: "Paid Cash" })
    .eq("id", body.id)
    .select("id,name,phone,package_type,status,created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ lead: data });
}
