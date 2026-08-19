"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export function FaqSection({ content, isArabic }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="section-light scroll-rise border-t border-fitness-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className={isArabic ? "text-right lg:order-2" : "text-left"}>
            <p className="section-kicker">{content.faq.eyebrow}</p>
            <h2 className="editorial-title mt-5">{content.faq.title}</h2>
            <p className="section-copy mt-6">{content.faq.description}</p>
          </div>

          <div className={`divide-y divide-fitness-border border-y border-fitness-border ${isArabic ? "lg:order-1" : ""}`}>
            {content.faq.items.map((item, index) => {
              const isExpanded = openIndex === index;

              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isExpanded ? -1 : index)}
                      aria-expanded={isExpanded}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className={`faq-trigger flex w-full items-center gap-5 py-6 ${
                        isArabic ? "flex-row-reverse text-right" : "text-left"
                      }`}
                    >
                      <span className="flex-1 text-base font-bold text-fitness-text sm:text-lg">
                        {item.q}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-fitness-orange transition-transform duration-300 ${
                          isExpanded ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    hidden={!isExpanded}
                    className={isArabic ? "text-right" : "text-left"}
                  >
                    <p className="pb-6 text-sm leading-relaxed text-fitness-muted sm:text-[0.95rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
