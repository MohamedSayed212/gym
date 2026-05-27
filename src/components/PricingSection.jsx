import { Check, Flame, Ticket } from "lucide-react";
import { packages } from "../lib/site-content";
import { motion } from "../lib/motion";

export function PricingSection({ content, language, isArabic, onBook }) {
  return (
    <section id="pricing" className="section-dark scroll-rise border-t border-fitness-border py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="section-kicker">{content.pricing.eyebrow}</p>
          <h2 className="section-title mx-auto max-w-3xl">{content.pricing.title}</h2>
          <p className="section-copy mx-auto leading-normal">{content.pricing.description}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {packages.map((plan) => {
            const planContent = plan[language];

            return (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                key={plan.id}
                className={`group premium-card premium-card-hover relative flex h-full flex-col rounded-lg px-6 py-6 transition hover:shadow-[0_24px_54px_rgba(255,77,0,0.2)] sm:px-7 ${
                  plan.featured
                    ? "border-fitness-orange/70 lg:-translate-y-2"
                    : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-lg bg-gradient-to-r ${plan.accent}`} />
                {plan.featured ? (
                  <div className="absolute end-6 top-5 rounded-full border border-fitness-orange/30 bg-fitness-orange/10 px-3 py-1 text-[0.72rem] font-bold text-fitness-orange">
                    {content.pricing.popular}
                  </div>
                ) : null}
                <div
                  className={`flex items-start justify-between gap-4 pt-4 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-fitness-orange">
                      {planContent.duration}
                    </p>
                    <h3 className="text-[1.75rem] font-extrabold leading-normal text-fitness-text">
                      {planContent.name}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-fitness-orange/12 text-fitness-orange ring-1 ring-fitness-orange/20">
                    <Flame className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className={`mt-7 text-[2.65rem] font-extrabold leading-none text-fitness-text ${isArabic ? "text-right" : "text-left"}`}>
                  {plan.price}
                </div>
                <p className={`mt-4 text-sm leading-normal text-fitness-muted ${isArabic ? "text-right" : "text-left"}`}>
                  {planContent.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {planContent.perks.map((perk) => (
                    <li
                      key={perk}
                      className={`flex gap-3 text-sm font-medium leading-normal text-fitness-text ${
                        isArabic ? "flex-row-reverse text-right" : "text-left"
                      }`}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onBook(plan)}
                  className="button-primary mt-7 min-h-12 w-full px-5 text-sm font-bold shadow-[0_16px_30px_rgba(255,77,0,0.22)] transition hover:shadow-[0_22px_36px_rgba(255,77,0,0.3)]"
                >
                  <Ticket className="h-5 w-5" aria-hidden="true" />
                  {content.pricing.book}
                </button>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
