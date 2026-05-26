import Link from "next/link";
import { Clock3, Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import { gymInfo } from "../lib/site-content";
import { motion } from "../lib/motion";

export function Footer({ content, isArabic }) {
  const contactItems = [
    {
      icon: MapPin,
      href: null,
      value: gymInfo.address,
    },
    {
      icon: Phone,
      href: `tel:${gymInfo.phone.replace(/\s/g, "")}`,
      value: gymInfo.phone,
    },
    {
      icon: Mail,
      href: `mailto:${gymInfo.email}`,
      value: gymInfo.email,
    },
  ];

  return (
    <footer className="section-band border-t border-fitness-border py-14 text-fitness-text">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className={`space-y-6 text-left ${isArabic ? "lg:order-2" : ""}`}>
            <div className={`flex items-center gap-3 ${isArabic ? "justify-end" : "justify-start"}`}>
              <span className="button-primary flex h-12 w-12 shrink-0 items-center justify-center p-0">
                <Dumbbell className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-bold text-fitness-text">{gymInfo.name}</h2>
            </div>
            <p className="max-w-xl text-base leading-normal text-fitness-muted">
              {content.footer.text}
            </p>
            <div className={`flex ${isArabic ? "justify-end" : "justify-start"}`}>
              <Link
                href="/#pricing"
                className="button-primary min-h-12 px-6 text-sm font-bold"
              >
                {content.nav.join}
              </Link>
            </div>
          </div>

          <div className={`grid gap-5 sm:grid-cols-2 ${isArabic ? "lg:order-1" : ""}`}>
            <div className="premium-card rounded-lg p-6">
              <div className="space-y-4 text-left">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const contentNode = (
                    <div className="flex items-start gap-3 rounded-lg border border-fitness-border bg-fitness-soft px-4 py-4 text-left text-sm text-fitness-muted">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-fitness-orange" aria-hidden="true" />
                      <span className="[direction:ltr] [unicode-bidi:isolate]">{item.value}</span>
                    </div>
                  );

                  if (!item.href) {
                    return <div key={item.value}>{contentNode}</div>;
                  }

                  return (
                    <a key={item.value} href={item.href} className="block transition hover:text-fitness-text">
                      {contentNode}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="premium-card rounded-lg p-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-fitness-orange/12 text-fitness-orange ring-1 ring-fitness-orange/20">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-lg font-bold text-fitness-text">{content.features.hoursLabel}</p>
                </div>
                <div className="space-y-3 text-sm leading-normal text-fitness-muted">
                  {content.features.hours.map((line) => (
                    <p key={line} className="rounded-lg border border-fitness-border bg-fitness-soft px-4 py-4">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-fitness-border pt-5 text-left text-sm text-fitness-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>{gymInfo.name}</p>
          <p className="[direction:ltr] [unicode-bidi:isolate]">
            {gymInfo.address}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
