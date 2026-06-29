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
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="section-kicker">{content.pricing.eyebrow}</p>
          <h2 className="section-title mx-auto">{content.pricing.title}</h2>
          <p className="section-copy mx-auto">{content.pricing.description}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {packages.map((plan) => {
            const planContent = plan[language];

            if (plan.featured) {
              return (
                <motion.article
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  key={plan.id}
                  className={`relative flex h-full flex-col overflow-hidden rounded-lg px-7 py-8 transition lg:-translate-y-2 lg:py-9 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                  style={{
                    background: "linear-gradient(160deg, #1e1e1e 0%, #181818 100%)",
                    border: "1px solid #303030",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.36), 0 2px 8px rgba(0,0,0,0.24)",
                  }}
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E85D04] via-[#F97316] to-[#E85D04]" />

                  {/* Popular badge */}
                  <div className={`absolute top-5 ${isArabic ? "left-6" : "right-6"}`}>
                    <span className="rounded-sm bg-fitness-orange px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white">
                      {content.pricing.popular}
                    </span>
                  </div>

                  <div className={`flex items-start gap-4 pt-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-fitness-subtle">
                        {planContent.duration}
                      </p>
                      <h3 className="text-2xl font-extrabold text-fitness-text">
                        {planContent.name}
                      </h3>
                    </div>
                    <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-fitness-orange text-white">
                      <Flame className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-7 text-[2.5rem] font-extrabold leading-none tracking-tight text-fitness-text">
                    {plan.price}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fitness-muted">
                    {planContent.description}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-fitness-border pt-7">
                    {planContent.perks.map((perk) => (
                      <li
                        key={perk}
                        className={`flex gap-3 text-sm font-medium text-fitness-text ${
                          isArabic ? "flex-row-reverse" : ""
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
                    className="button-primary mt-auto pt-7 min-h-[48px] w-full px-5 text-sm font-bold"
                    style={{ marginTop: "auto", paddingTop: 0 }}
                  >
                    <Ticket className="h-4 w-4" aria-hidden="true" />
                    {content.pricing.book}
                  </button>
                </motion.article>
              );
            }

            /* Starter & Elite — clean flat cards */
            return (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -3 }}
                key={plan.id}
                className={`premium-card relative flex h-full flex-col rounded-lg px-6 py-7 transition ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {/* Subtle top accent line */}
                <div className={`absolute inset-x-0 top-0 h-px ${plan.accentLine}`} />

                <div className={`flex items-start gap-4 pt-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-fitness-subtle">
                      {planContent.duration}
                    </p>
                    <h3 className="text-2xl font-extrabold text-fitness-text">
                      {planContent.name}
                    </h3>
                  </div>
                  <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-fitness-soft text-fitness-orange">
                    <Flame className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-7 text-[2.5rem] font-extrabold leading-none tracking-tight text-fitness-text">
                  {plan.price}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fitness-muted">
                  {planContent.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-fitness-border pt-7">
                  {planContent.perks.map((perk) => (
                    <li
                      key={perk}
                      className={`flex gap-3 text-sm font-medium text-fitness-text ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fitness-muted" aria-hidden="true" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    onClick={() => onBook(plan)}
                    className="button-secondary min-h-[48px] w-full px-5 text-sm font-semibold"
                  >
                    <Ticket className="h-4 w-4" aria-hidden="true" />
                    {content.pricing.book}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
