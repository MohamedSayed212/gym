import { NextResponse } from "next/server";
import {
  createSupabaseAdminClient,
  isSupabaseAdminConfigured,
} from "../../../../lib/supabase-admin";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = process.env.ADMIN_DASHBOARD_PASSWORD || "gym1234";
const ALLOWED_STATUSES = new Set(["Pending", "Paid Cash"]);

function isAuthorized(request) {
  const providedPassword = request.headers.get("x-admin-password");
  return providedPassword === ADMIN_PASSWORD;
}

function normalizeId(rawId) {
  const id =
    typeof rawId === "number"
      ? String(rawId)
      : typeof rawId === "string"
        ? rawId.trim()
        : "";

  if (!id || !/^\d+$/.test(id)) {
    return null;
  }

  return Number(id);
}

export async function GET(request) {
  console.log("[api/admin/leads] GET request received");

  if (!isAuthorized(request)) {
    console.warn("[api/admin/leads] unauthorized GET request");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured) {
    console.error("[api/admin/leads] missing Supabase admin env variables");
    return NextResponse.json(
      { error: "Supabase admin environment variables are missing." },
      { status: 500 },
    );
  }

  try {
    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("leads")
      .select("id,name,phone,package_type,status,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[api/admin/leads] GET Supabase error", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, leads: data ?? [] });
  } catch (error) {
    console.error("[api/admin/leads] unexpected GET error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(request) {
  console.log("[api/admin/leads] PATCH request received");

  if (!isAuthorized(request)) {
    console.warn("[api/admin/leads] unauthorized PATCH request");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured) {
    console.error("[api/admin/leads] missing Supabase admin env variables");
    return NextResponse.json(
      { error: "Supabase admin environment variables are missing." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const id = normalizeId(body.id);
    const status =
      typeof body.status === "string" ? body.status.trim() : "";

    if (!id) {
      return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
    }

    if (!ALLOWED_STATUSES.has(status)) {
      return NextResponse.json(
        { error: "Status must be either Pending or Paid Cash." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select("id,name,phone,package_type,status,created_at")
      .single();

    if (error) {
      console.error("[api/admin/leads] PATCH Supabase error", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: data });
  } catch (error) {
    console.error("[api/admin/leads] unexpected PATCH error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  console.log("[api/admin/leads] DELETE request received");

  if (!isAuthorized(request)) {
    console.warn("[api/admin/leads] unauthorized DELETE request");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured) {
    console.error("[api/admin/leads] missing Supabase admin env variables");
    return NextResponse.json(
      { error: "Supabase admin environment variables are missing." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const id = normalizeId(body.id);

    if (!id) {
      return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
    }

    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id)
      .select("id");

    if (error) {
      console.error("[api/admin/leads] DELETE Supabase error", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data?.length) {
      return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, id: data[0].id });
  } catch (error) {
    console.error("[api/admin/leads] unexpected DELETE error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
