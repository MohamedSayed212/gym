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
    <footer className="section-band border-t border-fitness-border py-16 text-fitness-text">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className={`premium-card rounded-lg p-6 sm:p-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`flex items-center gap-3 ${
                isArabic ? "flex-row-reverse justify-end" : ""
              }`}
            >
              <span className="button-primary flex h-10 w-10 shrink-0 items-center justify-center p-0">
                <Dumbbell className="h-4 w-4" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-extrabold sm:text-2xl">{gymInfo.name}</h2>
            </div>

            <p className="mt-4 max-w-xl text-base leading-normal text-fitness-muted">
              {content.footer.text}
            </p>
            <p className="mt-4 text-lg font-bold text-fitness-text">
              {content.footer.ctaTitle}
            </p>
            <p className="mt-1 max-w-xl text-sm leading-normal text-fitness-muted">
              {content.footer.ctaText}
            </p>

            <div
              className={`mt-6 flex flex-wrap gap-3 ${
                isArabic ? "justify-end" : "justify-start"
              }`}
            >
              <a
                href={gymInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="button-primary min-h-11 px-5 text-sm font-bold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {content.nav.whatsapp}
              </a>
              <Link
                href="/#pricing"
                className="button-secondary min-h-11 px-5 text-sm font-semibold"
              >
                {content.nav.join}
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="premium-card rounded-lg p-6">
              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className={`flex items-start gap-3 rounded-lg border border-fitness-border bg-fitness-soft px-4 py-3 text-sm transition hover:border-fitness-orange/40 ${
                        isArabic ? "flex-row-reverse text-right" : "text-left"
                      }`}
                    >
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-fitness-orange"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-wide text-fitness-subtle">
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

            <div className="premium-card rounded-lg p-6">
              <div
                className={`flex items-center gap-3 ${
                  isArabic ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fitness-orange/12 text-fitness-orange ring-1 ring-fitness-orange/20">
                  <Clock3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-base font-bold text-fitness-text">
                  {content.features.hoursLabel}
                </p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-fitness-muted">
                {content.features.hours.map((line) => (
                  <p
                    key={line}
                    className={`rounded-lg border border-fitness-border bg-fitness-soft px-4 py-3 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-fitness-border pt-5 text-sm text-fitness-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            {gymInfo.name} © {new Date().getFullYear()} • {content.footer.rights}
          </p>
          <p className="[direction:ltr] [unicode-bidi:isolate]">
            <Phone className="mr-1 inline h-4 w-4" aria-hidden="true" />
            {gymInfo.phone}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
