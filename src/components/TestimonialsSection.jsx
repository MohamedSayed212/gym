import { Quote, Star } from "lucide-react";

export function TestimonialsSection({ content }) {
  return (
    <section id="reviews" className="bg-[#f6f3ed] py-20 dark:bg-[#11100e] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
            {content.testimonials.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#171412] dark:text-white sm:text-5xl">
            {content.testimonials.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.testimonials.reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-lg border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <Quote className="h-8 w-8 text-orange-700 dark:text-orange-300" aria-hidden="true" />
                <div className="flex text-amber-500" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-[#332d28] dark:text-stone-200">{review.quote}</p>
              <div className="mt-8 border-t border-black/10 pt-5 dark:border-white/10">
                <p className="font-black text-[#171412] dark:text-white">{review.name}</p>
                <p className="mt-1 text-sm font-semibold text-[#6f6259] dark:text-stone-400">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
