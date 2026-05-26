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
      className="modal-backdrop fixed inset-0 z-[70] flex items-center justify-center px-4 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="premium-card w-full max-w-lg rounded-lg p-6 shadow-premium sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="text-left">
            <p className="section-kicker">{content.booking.packageLabel}</p>
            <h2 id="booking-title" className="mt-3 text-[2.15rem] font-extrabold leading-tight text-fitness-text">
              {content.booking.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            title={content.booking.close}
            aria-label={content.booking.close}
            className="icon-button h-11 w-11 shrink-0 p-0"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-7 rounded-lg border border-fitness-border bg-fitness-soft p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-xl font-extrabold text-fitness-text">{planContent.name}</p>
              <p className="mt-1 text-sm font-medium text-fitness-subtle">{planContent.duration}</p>
            </div>
            <p className="text-2xl font-extrabold text-fitness-orange">{selectedPackage.price}</p>
          </div>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-emerald-500/35 bg-emerald-500/10 p-5 text-emerald-700 dark:text-emerald-200">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            <p className="mt-3 text-left text-base font-bold leading-7">{message}</p>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="block text-left text-sm font-semibold text-fitness-text">{content.booking.nameLabel}</span>
              <span className="mt-2 flex items-center gap-3 rounded-lg border border-fitness-border bg-fitness-input px-4 py-4 transition focus-within:border-fitness-orange">
                <User className="h-5 w-5 shrink-0 text-fitness-orange" aria-hidden="true" />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={content.booking.namePlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-left text-fitness-text outline-none placeholder:text-fitness-subtle"
                  autoComplete="name"
                />
              </span>
            </label>

            <label className="block">
              <span className="block text-left text-sm font-semibold text-fitness-text">{content.booking.phoneLabel}</span>
              <span className="mt-2 flex items-center gap-3 rounded-lg border border-fitness-border bg-fitness-input px-4 py-4 transition focus-within:border-fitness-orange">
                <Phone className="h-5 w-5 shrink-0 text-fitness-orange" aria-hidden="true" />
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={content.booking.phonePlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-left text-fitness-text outline-none placeholder:text-fitness-subtle"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </span>
            </label>

            {message ? (
              <p className="rounded-lg border border-red-500/35 bg-red-500/10 p-3 text-left text-sm font-bold text-red-700 dark:text-red-200">
                {message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="button-primary min-h-14 w-full px-5 text-base font-bold disabled:cursor-not-allowed disabled:opacity-70"
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
