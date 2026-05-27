import { NextResponse } from "next/server";
import {
  createSupabaseAdminClient,
  isSupabaseAdminConfigured,
} from "../../../lib/supabase-admin";

export const dynamic = "force-dynamic";
const EGYPT_PHONE_REGEX = /^01\d{9}$/;

export async function POST(request) {
  console.log("[api/leads] POST request received");

  try {
    if (!isSupabaseAdminConfigured) {
      console.error("[api/leads] missing Supabase admin env variables");

      return NextResponse.json(
        {
          error:
            "Supabase is not configured. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
        },
        { status: 500 },
      );
    }

    const body = await request.json().catch(() => ({}));

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const packageType = body.packageType?.trim();
    const normalizedPhone = phone?.replace(/\D/g, "");

    if (!name || !phone || !packageType) {
      console.warn("[api/leads] validation failed", {
        hasName: Boolean(name),
        hasPhone: Boolean(phone),
        hasPackageType: Boolean(packageType),
      });

      return NextResponse.json(
        { error: "Name, phone, and package type are required." },
        { status: 400 },
      );
    }

    if (!EGYPT_PHONE_REGEX.test(normalizedPhone)) {
      return NextResponse.json(
        { error: "Phone number must start with 01 and be exactly 11 digits." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        phone: normalizedPhone,
        package_type: packageType,
        status: "Pending",
      })
      .select("id,name,phone,package_type,status,created_at")
      .single();

    if (error) {
      console.error("[api/leads] Supabase insert error", error);

      const message =
        typeof error.message === "string" &&
        error.message.toLowerCase().includes("fetch failed")
          ? "Could not reach Supabase. Verify NEXT_PUBLIC_SUPABASE_URL is valid and reachable."
          : error.message;

      return NextResponse.json({ error: message }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: data }, { status: 201 });
  } catch (error) {
    console.error("[api/leads] unexpected error", error);

    return NextResponse.json(
      { error: "Unexpected server error while creating lead." },
      { status: 500 },
    );
  }
}
