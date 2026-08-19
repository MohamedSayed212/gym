"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  MessageCircle,
  Phone,
  Target,
  User,
  X,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { classSchedule, gymInfo, packages } from "../lib/site-content";

const EGYPT_PHONE_REGEX = /^01\d{9}$/;

const GOAL_KEYS = ["fatLoss", "muscleGain", "boxingHiit", "general"];

export function LeadBookingModal() {
  const { booking, closeBooking, content, language, isArabic } = useApp();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [goal, setGoal] = useState("fatLoss");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isOpen = Boolean(booking);
  const t = content.booking;

  // Every plan and class the visitor can pick from, in the active language.
  const planOptions = [
    content.booking.freeTrial,
    ...packages.map((item) => `${item[language].name} - ${item[language].duration}`),
    ...Object.values(classSchedule)
      .flat()
      .map((item) => item.name)
      .filter((value, index, all) => all.indexOf(value) === index),
  ];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setName("");
    setPhone("");
    setGoal("fatLoss");
    setStatus("idle");
    setError("");
    setPlan(booking.planName || booking.className || content.booking.freeTrial);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeBooking();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, booking, closeBooking, content.booking.freeTrial]);

  if (!isOpen) {
    return null;
  }

  function validate() {
    const cleanPhone = phone.replace(/\D/g, "");

    if (!name.trim() || !cleanPhone) {
      setError(t.required);
      return null;
    }

    if (!EGYPT_PHONE_REGEX.test(cleanPhone)) {
      setError(t.invalidPhone);
      return null;
    }

    setError("");
    return cleanPhone;
  }

  async function saveLead(cleanPhone) {
    // Supabase is optional here - the WhatsApp handoff must work regardless.
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: cleanPhone, packageType: plan }),
      });
    } catch (requestError) {
      console.error("[LeadBookingModal] lead save failed", requestError);
    }
  }

  async function handleWhatsApp(event) {
    event.preventDefault();

    const cleanPhone = validate();
    if (!cleanPhone) return;

    setStatus("sending");
    await saveLead(cleanPhone);

    const message = [
      `Hi ${gymInfo.name}, I want to book:`,
      `Name: ${name.trim()}`,
      `Phone: ${cleanPhone}`,
      `Plan: ${plan}`,
      `Goal: ${t.goals[goal]}`,
    ].join("\n");

    window.open(
      `https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setStatus("success");
  }

  async function handleSave(event) {
    event.preventDefault();

    const cleanPhone = validate();
    if (!cleanPhone) return;

    setStatus("sending");
    await saveLead(cleanPhone);
    setStatus("success");
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label={t.close}
        onClick={closeBooking}
        className="modal-backdrop absolute inset-0 h-full w-full cursor-default"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className={`modal-panel relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl p-7 sm:rounded-2xl ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <button
          type="button"
          onClick={closeBooking}
          aria-label={t.close}
          className={`nav-ghost-button absolute top-5 h-9 w-9 p-0 ${isArabic ? "left-5" : "right-5"}`}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-fitness-orange/15 text-fitness-orange">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-fitness-text">{t.toastTitle}</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-fitness-muted">{t.toastText}</p>
            <button
              type="button"
              onClick={closeBooking}
              className="button-primary mt-8 min-h-[48px] w-full rounded-md text-[0.78rem] font-bold uppercase tracking-[0.1em]"
            >
              {t.closeSuccess}
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsApp} className="space-y-5">
            <div>
              <p className="section-kicker">{content.pricing.eyebrow}</p>
              <h2 id="booking-title" className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-fitness-text">
                {t.title}
              </h2>
            </div>

            <label className="block">
              <span className="form-label">{t.nameLabel}</span>
              <span className="form-field mt-2">
                <User className="h-4 w-4 shrink-0 text-fitness-subtle" aria-hidden="true" />
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t.namePlaceholder}
                  className="form-input"
                />
              </span>
            </label>

            <label className="block">
              <span className="form-label">{t.phoneLabel}</span>
              <span className="form-field mt-2">
                <Phone className="h-4 w-4 shrink-0 text-fitness-subtle" aria-hidden="true" />
                <input
                  type="tel"
                  inputMode="numeric"
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="form-input"
                />
              </span>
            </label>

            <label className="block">
              <span className="form-label">{t.planLabel}</span>
              <span className="form-field form-field-select mt-2">
                <select
                  value={plan}
                  onChange={(event) => setPlan(event.target.value)}
                  className="form-input form-select"
                >
                  {planOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none h-4 w-4 shrink-0 text-fitness-subtle" aria-hidden="true" />
              </span>
            </label>

            <label className="block">
              <span className="form-label">{t.goalLabel}</span>
              <span className="form-field form-field-select mt-2">
                <Target className="h-4 w-4 shrink-0 text-fitness-subtle" aria-hidden="true" />
                <select
                  value={goal}
                  onChange={(event) => setGoal(event.target.value)}
                  className="form-input form-select"
                >
                  {GOAL_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {t.goals[key]}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none h-4 w-4 shrink-0 text-fitness-subtle" aria-hidden="true" />
              </span>
            </label>

            {error && (
              <p role="alert" className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="button-whatsapp min-h-[52px] w-full rounded-md text-[0.78rem] font-bold uppercase tracking-[0.1em] disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              )}
              {t.whatsappSubmit}
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={status === "sending"}
              className="plan-button min-h-[46px] w-full rounded-md text-[0.74rem] font-bold uppercase tracking-[0.08em] disabled:opacity-60"
            >
              {t.saveSubmit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
