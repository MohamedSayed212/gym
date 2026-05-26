import { Check, Flame, Ticket } from "lucide-react";
import { packages } from "../lib/site-content";

export function PricingSection({ content, language, onBook }) {
  return (
    <section id="pricing" className="section-dark scroll-rise border-t border-fitness-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">{content.pricing.eyebrow}</p>
          <h2 className="section-title mx-auto mt-4 max-w-3xl">{content.pricing.title}</h2>
          <p className="section-copy mx-auto mt-5">{content.pricing.description}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {packages.map((plan) => {
            const planContent = plan[language];

            return (
              <article
                key={plan.id}
                className={`premium-card premium-card-hover relative flex h-full flex-col rounded-lg px-6 py-6 sm:px-7 ${
                  plan.featured
                    ? "border-fitness-orange/70 lg:-translate-y-2"
                    : ""
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-lg bg-gradient-to-r ${plan.accent}`} />
                {plan.featured ? (
                  <div className="absolute end-6 top-5 rounded-full border border-fitness-orange/30 bg-fitness-orange/10 px-3 py-1 text-[0.72rem] font-bold text-fitness-orange">
                    {content.pricing.popular}
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-fitness-orange">
                      {planContent.duration}
                    </p>
                    <h3 className="mt-2 text-[1.75rem] font-extrabold leading-tight text-fitness-text">
                      {planContent.name}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-fitness-orange/12 text-fitness-orange ring-1 ring-fitness-orange/20">
                    <Flame className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-7 text-[2.65rem] font-extrabold leading-none text-fitness-text">
                  {plan.price}
                </div>
                <p className="mt-4 text-sm leading-6 text-fitness-muted">
                  {planContent.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {planContent.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 text-sm font-medium leading-6 text-fitness-text">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onBook(plan)}
                  className="button-primary mt-7 min-h-12 w-full px-5 text-sm font-bold"
                >
                  <Ticket className="h-5 w-5" aria-hidden="true" />
                  {content.pricing.book}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
