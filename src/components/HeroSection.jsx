import Image from "next/image";
import { ArrowDown, CalendarCheck } from "lucide-react";
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
              className="button-primary hero-primary-button min-h-[52px] px-7 text-sm font-semibold sm:min-h-[54px] sm:px-8 sm:text-base"
            >
              <CalendarCheck className="h-4.5 w-4.5" aria-hidden="true" />
              {content.hero.primary}
            </a>
            <a
              href="#about"
              className="hero-secondary-button-clean inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md px-7 text-sm font-semibold text-white transition sm:min-h-[54px] sm:px-8 sm:text-base"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              {content.hero.secondary}
            </a>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 pt-2">
            {content.hero.stats.map((stat) => (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                key={stat.label}
                className="hero-stat-card-readable rounded-md border px-4 py-4"
              >
                <div className="hero-stat-value text-2xl font-bold sm:text-[1.75rem]">
                  {stat.value}
                </div>
                <div className="hero-stat-label mt-1.5 text-xs leading-snug sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
