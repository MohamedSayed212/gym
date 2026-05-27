import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "../lib/motion";
import { gymInfo } from "../lib/site-content";

export function StartJourneySection({ content, isArabic }) {
  return (
    <section className="section-dark scroll-rise border-t border-fitness-border py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="premium-card rounded-lg p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className={isArabic ? "text-right" : "text-left"}>
              <p className="section-kicker">{content.journey.eyebrow}</p>
              <h2 className="section-title mt-3 max-w-3xl text-[clamp(1.9rem,3.8vw,2.9rem)]">
                {content.journey.title}
              </h2>
              <p className="section-copy mt-4 max-w-2xl">
                {content.journey.description}
              </p>
              <div
                className={`mt-6 flex flex-wrap gap-3 ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <a href="#pricing" className="button-primary min-h-12 px-5 text-sm font-bold">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {content.journey.primaryCta}
                </a>
                <a
                  href={gymInfo.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary min-h-12 px-5 text-sm font-semibold"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {content.journey.secondaryCta}
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {content.journey.points.map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-lg border border-fitness-border bg-fitness-soft px-4 py-3 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className={`flex items-center gap-2 text-sm font-semibold text-fitness-text ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 text-fitness-orange" aria-hidden="true" />
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
