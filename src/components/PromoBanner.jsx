"use client";

import { useEffect, useState } from "react";
import { X, Zap } from "lucide-react";
import { useApp } from "../context/AppContext";
import { packages } from "../lib/site-content";

// Fixed offer deadline so every visitor sees the same countdown.
const OFFER_DEADLINE = new Date("2026-09-30T23:59:59+02:00").getTime();

function getRemaining() {
  const diff = OFFER_DEADLINE - Date.now();

  if (diff <= 0) {
    return null;
  }

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function PromoBanner() {
  const { content, isArabic, openBooking } = useApp();
  const [dismissed, setDismissed] = useState(false);
  // undefined = not measured yet (server render), null = expired, object = live
  const [remaining, setRemaining] = useState(undefined);

  // Starts only after mount so server and client markup always match.
  useEffect(() => {
    setRemaining(getRemaining());

    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (dismissed) {
    return null;
  }

  const t = content.promo;
  const featured = packages.find((item) => item.featured);

  const units = remaining
    ? [
        { value: remaining.days, label: t.days },
        { value: remaining.hours, label: t.hours },
        { value: remaining.minutes, label: t.minutes },
        { value: remaining.seconds, label: t.seconds },
      ]
    : [];

  return (
    <div className="promo-banner relative z-[60]">
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-x-5 gap-y-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:px-8 ${
          isArabic ? "lg:flex-row-reverse" : ""
        }`}
      >
        <p
          className={`flex items-center gap-2 text-center text-[0.78rem] font-semibold leading-snug text-white lg:text-start ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <Zap className="h-4 w-4 shrink-0 animate-pulse" aria-hidden="true" />
          <span>{t.text}</span>
        </p>

        <div
          className={`flex items-center gap-3 lg:ms-auto ${isArabic ? "flex-row-reverse lg:me-auto lg:ms-0" : ""}`}
        >
          {remaining && (
            <div className={`flex items-center gap-1.5 ${isArabic ? "flex-row-reverse" : ""}`} dir="ltr">
              {units.map((unit) => (
                <span key={unit.label} className="promo-countdown-unit">
                  {String(unit.value).padStart(2, "0")}
                  <span className="promo-countdown-label">{unit.label}</span>
                </span>
              ))}
            </div>
          )}

          {remaining === null && (
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/70">
              {t.expired}
            </span>
          )}

          <button
            type="button"
            onClick={() =>
              openBooking({
                planId: featured?.id,
                planName: `${featured?.en.name} - ${featured?.en.duration}`,
              })
            }
            className="promo-cta"
          >
            {t.cta}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label={t.dismiss}
        className={`absolute top-1/2 hidden -translate-y-1/2 rounded-md p-1.5 text-white/70 transition hover:bg-white/15 hover:text-white sm:block ${
          isArabic ? "left-3" : "right-3"
        }`}
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
