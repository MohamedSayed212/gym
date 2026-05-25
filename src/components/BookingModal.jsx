"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Phone, User, X } from "lucide-react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

export function BookingModal({ selectedPackage, content, language, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const isOpen = Boolean(selectedPackage);
  const planContent = selectedPackage ? selectedPackage[language] : null;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setName("");
    setPhone("");
    setStatus("idle");
    setMessage("");

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!selectedPackage) {
    return null;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone) {
      setStatus("error");
      setMessage(content.booking.required);
      return;
    }

    if (!isSupabaseConfigured) {
      setStatus("error");
      setMessage(content.booking.missingConfig);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: trimmedName,
          phone: trimmedPhone,
          package_type: selectedPackage.packageType,
          status: "Pending",
        },
      ]);

      if (error) {
        setStatus("error");
        setMessage(content.booking.error);
        return;
      }
    } catch {
      setStatus("error");
      setMessage(content.booking.error);
      return;
    }

    setStatus("success");
    setMessage(content.booking.success);
    setName("");
    setPhone("");
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg rounded-lg border border-white/10 bg-[#f6f3ed] p-6 shadow-premium dark:bg-[#171412] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-700 dark:text-orange-300">
              {content.booking.packageLabel}
            </p>
            <h2 id="booking-title" className="mt-2 text-3xl font-black text-[#171412] dark:text-white">
              {content.booking.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            title={content.booking.close}
            aria-label={content.booking.close}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white text-[#171412] transition hover:border-orange-500 hover:text-orange-700 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/[0.06]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-black text-[#171412] dark:text-white">{planContent.name}</p>
              <p className="mt-1 text-sm font-semibold text-[#5b514a] dark:text-stone-300">{planContent.duration}</p>
            </div>
            <p className="text-xl font-black text-orange-700 dark:text-orange-300">{selectedPackage.price}</p>
          </div>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-800 dark:text-emerald-200">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            <p className="mt-3 text-base font-bold leading-7">{message}</p>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm font-black text-[#171412] dark:text-white">{content.booking.nameLabel}</span>
              <span className="mt-2 flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 focus-within:border-orange-500 dark:border-white/10 dark:bg-white/[0.06]">
                <User className="h-5 w-5 shrink-0 text-orange-700 dark:text-orange-300" aria-hidden="true" />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={content.booking.namePlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-[#171412] outline-none placeholder:text-[#8b8078] dark:text-white dark:placeholder:text-stone-500"
                  autoComplete="name"
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-black text-[#171412] dark:text-white">{content.booking.phoneLabel}</span>
              <span className="mt-2 flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 focus-within:border-orange-500 dark:border-white/10 dark:bg-white/[0.06]">
                <Phone className="h-5 w-5 shrink-0 text-orange-700 dark:text-orange-300" aria-hidden="true" />
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={content.booking.phonePlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-[#171412] outline-none placeholder:text-[#8b8078] dark:text-white dark:placeholder:text-stone-500"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </span>
            </label>

            {message ? (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm font-semibold text-red-800 dark:text-red-200">
                {message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-4 text-base font-black text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
              {status === "loading" ? content.booking.submitting : content.booking.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
