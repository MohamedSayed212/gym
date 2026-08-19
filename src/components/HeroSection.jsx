import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "../lib/motion";
import { gymInfo } from "../lib/site-content";

export function HeroSection({ content, isArabic }) {
  return (
    <section
      id="home"
      className="hero-section relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-fitness-black"
    >
      <Image
        src={gymInfo.heroImage}
        alt="Strength training floor with weights and gym equipment"
        fill
        priority
        sizes="100vw"
        className="hero-image-treatment object-cover object-center"
      />
      <div className="hero-overlay-main absolute inset-0" />
      <div className="hero-overlay-depth absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div
          className={`hero-copy-shell flex w-full max-w-[46rem] flex-col gap-5 text-fitness-hero-text ${
            isArabic
              ? "ml-auto items-end text-right"
              : "mr-auto items-start text-left"
          }`}
        >
          <p className="hero-eyebrow inline-flex rounded-md border px-3.5 py-1.5 backdrop-blur-md">
            {content.hero.eyebrow}
          </p>

          <h1 className={`hero-title ${isArabic ? "max-w-[24ch]" : "max-w-[16ch]"}`}>
            {content.hero.title}
          </h1>

          <p
            className={`hero-subtitle ${
              isArabic ? "max-w-[37rem]" : "max-w-[40rem]"
            }`}
          >
            {content.hero.subtitle}
          </p>

          <div
            className={`flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row ${
              isArabic ? "sm:flex-row-reverse" : ""
            }`}
          >
            <a
              href="#pricing"
              className="button-primary hero-primary-button min-h-[52px] rounded-md px-8 text-[0.82rem] font-bold uppercase tracking-[0.1em] sm:min-h-[54px] sm:px-9 sm:text-sm"
            >
              {content.hero.primary}
            </a>
            <a
              href="#about"
              className="hero-ghost-button group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-md px-8 text-[0.82rem] font-bold uppercase tracking-[0.1em] sm:min-h-[54px] sm:px-9 sm:text-sm"
            >
              {content.hero.secondary}
              <ArrowDown
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <div
            className={`hero-stat-strip mt-4 flex w-full flex-col gap-y-5 pt-7 sm:flex-row sm:items-center ${
              isArabic ? "sm:flex-row-reverse" : ""
            }`}
          >
            {content.hero.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 ${index > 0 ? "hero-stat-divider" : ""} ${
                  isArabic ? "text-right sm:pr-0" : "text-left"
                }`}
              >
                <div className="hero-stat-value text-[1.75rem] font-extrabold leading-none tracking-tight sm:text-[2rem]">
                  {stat.value}
                </div>
                <div className="hero-stat-label mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
