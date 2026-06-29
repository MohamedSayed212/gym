import { Star } from "lucide-react";
import { motion } from "../lib/motion";

export function TestimonialsSection({ content, isArabic }) {
  const reviews = content.testimonials.reviews;

  const initialsForName = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("");

  return (
    <section id="reviews" className="section-contrast scroll-rise border-t border-fitness-border py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          {/* Heading column */}
          <div
            className={`max-w-xl space-y-4 ${isArabic ? "text-right lg:order-2" : "text-left"}`}
          >
            <p className="section-kicker">{content.testimonials.eyebrow}</p>
            <h2 className="section-title max-w-2xl">{content.testimonials.title}</h2>
            <p className="section-copy">{content.testimonials.description ?? ""}</p>
          </div>

          {/* Reviews column */}
          <div className={`flex flex-col gap-4 ${isArabic ? "lg:order-1" : ""}`}>
            {reviews.map((review, index) => {
              const isFeatured = index === 0;

              return (
                <motion.article
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={review.name}
                  className={`rounded-lg border border-fitness-border bg-fitness-card ${
                    isFeatured
                      ? "px-7 py-8 sm:px-8"
                      : "px-6 py-6"
                  } ${isArabic ? "text-right" : "text-left"}`}
                  style={{
                    boxShadow: isFeatured
                      ? "0 4px 20px rgba(0,0,0,0.22)"
                      : "var(--fitness-premium-shadow)",
                  }}
                >
                  {/* Stars */}
                  <div className={`flex gap-1 text-fitness-orange ${isArabic ? "justify-end" : ""}`} aria-label="Five star review">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`fill-current ${isFeatured ? "h-4 w-4" : "h-3.5 w-3.5"}`} aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className={`mt-4 text-fitness-text ${
                      isFeatured
                        ? "text-lg font-medium leading-relaxed"
                        : "text-sm leading-relaxed text-fitness-muted"
                    }`}
                  >
                    {review.quote}
                  </p>

                  {/* Author */}
                  <div
                    className={`mt-5 flex items-center gap-3 border-t border-fitness-border pt-5 ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className={`flex shrink-0 items-center justify-center rounded-full bg-fitness-soft font-bold text-fitness-text ring-1 ring-fitness-border ${
                        isFeatured ? "h-11 w-11 text-base" : "h-9 w-9 text-xs"
                      }`}
                    >
                      {initialsForName(review.name)}
                    </span>
                    <div>
                      <p className={`font-semibold text-fitness-text ${isFeatured ? "text-base" : "text-sm"}`}>
                        {review.name}
                      </p>
                      <p className="mt-0.5 text-xs text-fitness-subtle">{review.role}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
