"use client";

import { MessageCircle } from "lucide-react";
import { gymInfo } from "../lib/site-content";
import { useApp } from "../context/AppContext";

export function FloatingWhatsAppButton() {
  const { content } = useApp();

  return (
    <a
      href={gymInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={content.nav.whatsapp}
      className="fixed bottom-5 right-5 z-[65] inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(16,185,129,0.35)] transition duration-200 hover:-translate-y-1 hover:bg-emerald-400"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span>{content.nav.whatsapp}</span>
    </a>
  );
}
