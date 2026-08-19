import { Check } from "lucide-react";
import { packages } from "../lib/site-content";
import { motion } from "../lib/motion";

export function PricingSection({ content, language, isArabic, onBook }) {
  return (
    <section
      id="pricing"
      className="section-contrast scroll-rise border-t border-fitness-border py-24 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <p className="section-kicker">{content.pricing.eyebrow}</p>
          <h2 className="editorial-title mx-auto">{content.pricing.title}</h2>
          <p className="section-copy mx-auto">{content.pricing.description}</p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {packages.map((plan) => {
            const planContent = plan[language];

            return (
              <article
                key={plan.id}
                className={`plan-card relative flex h-full flex-col rounded-2xl p-8 ${
                  plan.featured ? "plan-card-featured lg:-translate-y-3" : ""
                } ${isArabic ? "text-right" : "text-left"}`}
              >
                {plan.featured && (
                  <span
                    className={`plan-badge absolute -top-3 rounded-full px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white ${
                      isArabic ? "right-8" : "left-8"
                    }`}
                  >
                    {content.pricing.popular}
                  </span>
                )}

                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fitness-subtle">
                  {planContent.duration}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-fitness-text">
                  {planContent.name}
                </h3>

                <div className="mt-6 text-[2.75rem] font-extrabold leading-none tracking-tight text-fitness-text">
                  {plan.price}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-fitness-muted">
                  {planContent.description}
                </p>

                <ul className="mt-8 space-y-3.5 border-t border-fitness-border pt-8">
                  {planContent.perks.map((perk) => (
                    <li
                      key={perk}
                      className={`flex gap-3 text-sm text-fitness-text ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-fitness-orange"
                        aria-hidden="true"
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    onClick={() => onBook(plan)}
                    className={`min-h-[50px] w-full rounded-md text-[0.78rem] font-bold uppercase tracking-[0.1em] ${
                      plan.featured ? "button-primary" : "plan-button"
                    }`}
                  >
                    {content.pricing.book}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
