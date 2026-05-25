import { Check, Flame, Ticket } from "lucide-react";
import { packages } from "../lib/site-content";

export function PricingSection({ content, language, onBook }) {
  return (
    <section id="pricing" className="bg-[#ebe4d8] py-20 dark:bg-[#181512] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
            {content.pricing.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#171412] dark:text-white sm:text-5xl">
            {content.pricing.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5b514a] dark:text-stone-300">{content.pricing.description}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((plan) => {
            const planContent = plan[language];

            return (
              <article
                key={plan.id}
                className={`relative rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:bg-white/[0.06] ${
                  plan.featured
                    ? "border-orange-500 dark:border-orange-400"
                    : "border-black/10 dark:border-white/10"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute start-6 top-0 -translate-y-1/2 rounded-lg bg-orange-600 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                    {content.pricing.popular}
                  </div>
                ) : null}
                <div className={`mb-6 h-2 rounded-lg bg-gradient-to-r ${plan.accent}`} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-700 dark:text-orange-300">
                      {planContent.duration}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-[#171412] dark:text-white">{planContent.name}</h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#171412] text-orange-300 dark:bg-white dark:text-[#171412]">
                    <Flame className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6 text-4xl font-black text-[#171412] dark:text-white">{plan.price}</div>
                <p className="mt-4 min-h-16 text-sm leading-6 text-[#5b514a] dark:text-stone-300">
                  {planContent.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {planContent.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 text-sm font-semibold text-[#332d28] dark:text-stone-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onBook(plan)}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#171412] px-5 py-4 text-base font-black text-white transition hover:bg-orange-600 dark:bg-white dark:text-[#171412] dark:hover:bg-orange-300"
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
