import Link from "next/link";
import { Clock3, Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import { gymInfo } from "../lib/site-content";

export function Footer({ content }) {
  const isArabic = content.nav.home === "الرئيسية";

  return (
    <footer className="section-band border-t border-fitness-border py-14 text-fitness-text">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-start ${
            isArabic ? "lg:[direction:rtl]" : "lg:[direction:ltr]"
          }`}
        >
          {/* BRAND SIDE */}
          <div
            className={`flex flex-col gap-6 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {/* LOGO + NAME */}
            <div
              className={`flex items-center gap-3 ${
                isArabic ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
              }`}
            >
              <span className="button-primary flex h-12 w-12 shrink-0 items-center justify-center p-0">
                <Dumbbell className="h-5 w-5" aria-hidden="true" />
              </span>

              <h2 className="text-2xl font-bold text-fitness-text">
                {gymInfo.name}
              </h2>
            </div>

            {/* TEXT */}
            <p
              dir={isArabic ? "rtl" : "ltr"}
              className={`max-w-xl text-base font-normal leading-8 text-fitness-muted ${
                isArabic ? "ml-auto text-right" : "mr-auto text-left"
              }`}
            >
              {content.footer.text}
            </p>

            {/* BUTTON */}
            <div className={isArabic ? "ml-auto" : "mr-auto"}>
              <Link
                href="/#pricing"
                className="button-primary flex min-h-11 min-w-[10rem] items-center justify-center px-6 text-sm font-semibold"
              >
                {content.nav.join}
              </Link>
            </div>
          </div>

          {/* CONTACT CARD */}
          <div className="[direction:ltr] rounded-3xl border border-fitness-border bg-fitness-card p-6 shadow-sm">
            <div className="space-y-0 text-sm font-normal text-fitness-muted">
              <div className="flex items-center justify-between gap-5 border-b border-fitness-border py-4 first:pt-0">
                <span className="[direction:ltr] [unicode-bidi:isolate]">
                  {gymInfo.address}
                </span>

                <MapPin className="h-5 w-5 shrink-0 text-fitness-orange" />
              </div>

              <a
                href={`tel:${gymInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-between gap-5 border-b border-fitness-border py-4 transition hover:text-fitness-text"
              >
                <span className="[direction:ltr] [unicode-bidi:isolate]">
                  {gymInfo.phone}
                </span>

                <Phone className="h-5 w-5 shrink-0 text-fitness-orange" />
              </a>

              <a
                href={`mailto:${gymInfo.email}`}
                className="flex items-center justify-between gap-5 py-4 last:pb-0 transition hover:text-fitness-text"
              >
                <span className="[direction:ltr] [unicode-bidi:isolate]">
                  {gymInfo.email}
                </span>

                <Mail className="h-5 w-5 shrink-0 text-fitness-orange" />
              </a>
            </div>
          </div>
        </div>

        {/* HOURS */}
        <div className="mt-8 rounded-3xl border border-fitness-border bg-fitness-card p-6 shadow-sm">
          <div
            className={`grid gap-5 lg:grid-cols-[260px_1fr_1fr] lg:items-center ${
              isArabic ? "lg:[direction:rtl]" : "lg:[direction:ltr]"
            }`}
          >
            <div
              className={`flex items-center gap-3 ${
                isArabic ? "justify-start flex-row" : "justify-start flex-row"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fitness-orange/10 text-fitness-orange">
                <Clock3 className="h-5 w-5" />
              </span>

              <p className="text-lg font-bold text-fitness-orange">
                {content.features.hoursLabel}
              </p>
            </div>

            {content.features.hours.map((line) => (
              <div
                key={line}
                dir={isArabic ? "rtl" : "ltr"}
                className="border-t border-fitness-border pt-4 text-sm font-normal leading-7 text-fitness-muted lg:border-s lg:border-t-0 lg:ps-6 lg:pt-0"
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-3 border-t border-fitness-border pt-5 text-sm font-normal text-fitness-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>{gymInfo.name}</p>

          <p className="[direction:ltr] [unicode-bidi:isolate]">
            {gymInfo.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
