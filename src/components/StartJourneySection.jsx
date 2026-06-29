import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "../lib/motion";
import { gymInfo } from "../lib/site-content";

export function StartJourneySection({ content, isArabic }) {
  return (
    <section className="section-dark scroll-rise border-t border-fitness-border py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="premium-card rounded-lg p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Left — heading + CTAs */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <p className="section-kicker">{content.journey.eyebrow}</p>
              <h2 className="section-title mt-3 max-w-xl">
                {content.journey.title}
              </h2>
              <p className="section-copy mt-4">
                {content.journey.description}
              </p>
              <div
                className={`mt-8 flex flex-wrap gap-3 ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <a href="#pricing" className="button-primary min-h-[48px] px-6 text-sm font-bold">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {content.journey.primaryCta}
                </a>
                <a
                  href={gymInfo.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary min-h-[48px] px-6 text-sm font-semibold"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {content.journey.secondaryCta}
                </a>
              </div>
            </div>

            {/* Right — points list */}
            <div className="grid gap-2.5">
              {content.journey.points.map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center gap-3 rounded-md px-4 py-3.5 text-sm font-medium text-fitness-text ${
                    isArabic ? "flex-row-reverse text-right" : "text-left"
                  }`}
                  style={{
                    background: "var(--fitness-soft)",
                    border: "1px solid var(--fitness-border)",
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                  {point}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
