import Image from "next/image";
import { motion } from "../lib/motion";
import { gymInfo } from "../lib/site-content";

export function FeaturesSection({ content, isArabic }) {
  const media = [
    {
      image: gymInfo.equipmentImage,
      alt: "Iron Pulse Gym strength training floor",
      title: content.features.equipmentTitle,
      text: content.features.equipmentText,
      index: "01",
    },
    {
      image: gymInfo.trainerImage,
      alt: "Coach guiding a member through a lift",
      title: content.features.trainerTitle,
      text: content.features.trainerText,
      index: "02",
    },
  ];

  return (
    <section
      id="about"
      className="section-dark scroll-rise border-t border-fitness-border py-24 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left — editorial headline, copy, spec list */}
          <div className={isArabic ? "text-right lg:order-2" : "text-left"}>
            <p className="section-kicker">{content.features.eyebrow}</p>

            <h2 className="editorial-title mt-5">{content.features.title}</h2>

            <p className="section-copy mt-6">{content.features.description}</p>

            <dl className="mt-10">
              {content.features.specs.map((spec) => (
                <div
                  key={spec.label}
                  className={`spec-row flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6 ${
                    isArabic ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <dt className="w-full text-[0.68rem] font-bold uppercase tracking-[0.16em] text-fitness-orange sm:w-40 sm:shrink-0">
                    {spec.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-fitness-muted">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — photography cards */}
          <div className={`flex flex-col gap-4 ${isArabic ? "lg:order-1" : ""}`}>
            {media.map((item) => (
              <article
                key={item.title}
                className="media-card group relative min-h-[300px] flex-1 overflow-hidden rounded-2xl border border-fitness-border sm:min-h-[340px]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 p-7 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-fitness-orange">
                    {item.index}
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.82rem] leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
