import Link from "next/link";
import {
  AtSign,
  Clock3,
  Dumbbell,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { gymInfo } from "../lib/site-content";
import { motion } from "../lib/motion";

export function Footer({ content, isArabic }) {
  const contactItems = [
    {
      icon: MapPin,
      href: gymInfo.mapsLink,
      label: content.footer.location,
      value: gymInfo.address,
      external: true,
    },
    {
      icon: MessageCircle,
      href: gymInfo.whatsappLink,
      label: content.footer.whatsapp,
      value: gymInfo.phone,
      external: true,
    },
    {
      icon: AtSign,
      href: gymInfo.instagramLink,
      label: content.footer.instagram,
      value: "@ironpulsegym.eg",
      external: true,
    },
  ];

  return (
    <footer className="section-band border-t border-fitness-border py-12 text-fitness-text">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <div className="grid gap-4">
            <div
              className={`premium-card rounded-lg p-6 sm:p-7 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`flex items-center gap-3 ${
                  isArabic ? "flex-row-reverse justify-end" : ""
                }`}
              >
                <span className="button-primary flex h-9 w-9 shrink-0 items-center justify-center p-0">
                  <Dumbbell className="h-4 w-4" aria-hidden="true" />
                </span>
                <h2 className="text-lg font-extrabold sm:text-xl">{gymInfo.name}</h2>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-fitness-muted">
                {content.footer.text}
              </p>
              <p className="mt-5 text-base font-semibold text-fitness-text">
                {content.footer.ctaTitle}
              </p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-fitness-muted">
                {content.footer.ctaText}
              </p>

              <div
                className={`mt-6 flex flex-wrap gap-2.5 ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <a
                  href={gymInfo.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary min-h-[42px] px-5 text-sm font-bold"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {content.nav.whatsapp}
                </a>
                <Link
                  href="/#pricing"
                  className="button-secondary min-h-[42px] px-5 text-sm font-semibold"
                >
                  {content.nav.join}
                </Link>
              </div>
            </div>

            {/* Hours card */}
            <div className="premium-card rounded-lg p-5 sm:p-6">
              <div
                className={`flex items-center gap-3 ${
                  isArabic ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <Clock3 className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                <p className="text-sm font-semibold text-fitness-text">
                  {content.features.hoursLabel}
                </p>
              </div>
              <div className="mt-4 grid gap-1.5 text-sm text-fitness-muted">
                {content.features.hours.map((line) => (
                  <p
                    key={line}
                    className={`rounded-md border border-fitness-border bg-fitness-soft px-4 py-2.5 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="grid gap-4">
            {/* Contact links */}
            <div className="premium-card rounded-lg p-5 sm:p-6">
              <div className="grid gap-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className={`flex items-start gap-3 rounded-md border border-fitness-border bg-fitness-soft px-4 py-3 text-sm transition hover:border-fitness-border/60 hover:bg-fitness-card ${
                        isArabic ? "flex-row-reverse text-right" : "text-left"
                      }`}
                    >
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-fitness-subtle"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-fitness-subtle">
                          {item.label}
                        </span>
                        <span className="[direction:ltr] [unicode-bidi:isolate] text-fitness-muted">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map card */}
            <div className="premium-card rounded-lg p-5 sm:p-6">
              <div
                className={`mb-4 flex items-center gap-3 ${
                  isArabic ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-fitness-text">
                    {content.footer.mapTitle}
                  </p>
                  <p className="text-xs text-fitness-subtle">{content.footer.mapHint}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-md border border-fitness-border">
                <iframe
                  title={content.footer.mapTitle}
                  src="https://maps.google.com/maps?q=18%20El%20Nasr%20Road%2C%20New%20Maadi%2C%20Cairo&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[180px] w-full border-0 sm:h-[200px] lg:h-[220px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-fitness-border pt-5 text-xs text-fitness-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            {gymInfo.name} © {new Date().getFullYear()} • {content.footer.rights}
          </p>
          <p className="[direction:ltr] [unicode-bidi:isolate]">
            <Phone className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
            {gymInfo.phone}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
