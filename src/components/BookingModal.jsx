"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, Phone, User, X } from "lucide-react";
import { gymInfo } from "../lib/site-content";

const EGYPT_PHONE_REGEX = /^01\d{9}$/;

export function BookingModal({
  selectedPackage,
  content,
  language,
  isArabic,
  onClose,
}) {
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

    if (typeof window === "undefined") {
      console.error("[BookingModal] submit called outside browser context");
      return;
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const normalizedPhone = trimmedPhone.replace(/\D/g, "");

    if (!trimmedName || !trimmedPhone) {
      setStatus("error");
      setMessage(content.booking.required);
      return;
    }

    if (!EGYPT_PHONE_REGEX.test(normalizedPhone)) {
      setStatus("error");
      setMessage(content.booking.invalidPhone);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      console.log("[BookingModal] submitting lead", {
        packageType: selectedPackage.packageType,
      });

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          phone: normalizedPhone,
          packageType: selectedPackage.packageType,
        }),
      });

      const rawText = await response.text();
      let data = {};

      if (rawText) {
        try {
          data = JSON.parse(rawText);
        } catch {
          data = { error: rawText };
        }
      }

      if (!response.ok) {
        console.error("[BookingModal] API error", {
          status: response.status,
          data,
        });

        setStatus("error");
        setMessage(response.status >= 500 ? content.booking.error : data.error || content.booking.error);
        return;
      }

      setStatus("success");
      setMessage(content.booking.success);

      setName("");
      setPhone("");
    } catch (error) {
      console.error("[BookingModal] submit failed", error);

      setStatus("error");
      setMessage(content.booking.error);
    }
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
        <div
          className={`flex items-start justify-between gap-4 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <div className={isArabic ? "text-right" : "text-left"}>
            <p className="section-kicker">{content.booking.packageLabel}</p>

            <h2
              id="booking-title"
              className="mt-3 text-[2.15rem] font-extrabold leading-tight text-fitness-text"
            >
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
          <div
            className={`flex items-center justify-between gap-4 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <div className={isArabic ? "text-right" : "text-left"}>
              <p className="text-xl font-extrabold text-fitness-text">
                {planContent.name}
              </p>

              <p className="mt-1 text-sm font-medium text-fitness-subtle">
                {planContent.duration}
              </p>
            </div>

            <p className="text-2xl font-extrabold text-fitness-orange">
              {selectedPackage.price}
            </p>
          </div>
        </div>

        {status === "success" ? (
          <div className="mt-6 space-y-4 rounded-lg border border-emerald-500/35 bg-emerald-500/10 p-5 text-emerald-700 dark:text-emerald-200">
            <CheckCircle2 className={`h-7 w-7 ${isArabic ? "mr-0 ml-auto" : ""}`} aria-hidden="true" />

            <div className={isArabic ? "text-right" : "text-left"}>
              <p className="text-lg font-bold">{content.booking.successTitle}</p>
              <p className="mt-2 text-sm font-medium leading-7">{message}</p>
              <p className="mt-1 text-sm font-medium leading-7">
                {content.booking.successDetails}
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 ${
                isArabic ? "justify-end" : "justify-start"
              }`}
            >
              <a
                href={gymInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="button-primary min-h-11 px-4 text-sm font-bold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {content.booking.whatsappFollowup}
              </a>
              <button
                type="button"
                onClick={onClose}
                className="button-secondary min-h-11 px-4 text-sm font-semibold"
              >
                {content.booking.closeSuccess}
              </button>
            </div>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span
                className={`block text-sm font-semibold text-fitness-text ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {content.booking.nameLabel}
              </span>

              <span className="mt-2 flex items-center gap-3 rounded-lg border border-fitness-border bg-fitness-input px-4 py-4 transition focus-within:border-fitness-orange">
                <User
                  className="h-5 w-5 shrink-0 text-fitness-orange"
                  aria-hidden="true"
                />

                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={content.booking.namePlaceholder}
                  className={`min-w-0 flex-1 bg-transparent text-fitness-text outline-none placeholder:text-fitness-subtle ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                  autoComplete="name"
                />
              </span>
            </label>

            <label className="block">
              <span
                className={`block text-sm font-semibold text-fitness-text ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {content.booking.phoneLabel}
              </span>

              <span className="mt-2 flex items-center gap-3 rounded-lg border border-fitness-border bg-fitness-input px-4 py-4 transition focus-within:border-fitness-orange">
                <Phone
                  className="h-5 w-5 shrink-0 text-fitness-orange"
                  aria-hidden="true"
                />

                <input
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value.replace(/\D/g, "").slice(0, 11))
                  }
                  placeholder={content.booking.phonePlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-left text-fitness-text outline-none placeholder:text-fitness-subtle [direction:ltr] [unicode-bidi:isolate]"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="01[0-9]{9}"
                  maxLength={11}
                />
              </span>
            </label>

            {message ? (
              <p
                className={`rounded-lg border border-red-500/35 bg-red-500/10 p-3 text-sm font-bold text-red-700 dark:text-red-200 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="button-primary min-h-14 w-full px-5 text-base font-bold disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              )}

              {status === "loading"
                ? content.booking.submitting
                : content.booking.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
