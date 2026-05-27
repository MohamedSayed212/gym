import Image from "next/image";
import { ArrowDown, CalendarCheck } from "lucide-react";
import { motion } from "../lib/motion";
import { gymInfo } from "../lib/site-content";

export function HeroSection({ content, isArabic }) {
  return (
    <section
      id="home"
      className="hero-section relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-fitness-black"
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
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fitness-orange to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto flex min-h-[calc(100svh-112px)] max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div
          className={`hero-copy-shell flex w-full max-w-[44rem] flex-col space-y-4 text-fitness-hero-text ${
            isArabic
              ? "ml-auto items-end text-right"
              : "mr-auto items-start text-left"
          }`}
        >
          <p className="hero-eyebrow inline-flex rounded-lg border px-4 py-2 text-xs font-bold text-fitness-orange backdrop-blur-xl sm:text-sm">
            {content.hero.eyebrow}
          </p>
          <h1 className={`hero-title ${isArabic ? "max-w-[22ch]" : "max-w-[18ch]"}`}>
            {content.hero.title}
          </h1>
          <p
            className={`hero-subtitle text-base font-medium leading-normal text-fitness-hero-muted sm:text-lg ${
              isArabic ? "max-w-[37rem]" : "max-w-[40rem]"
            }`}
          >
            {content.hero.subtitle}
          </p>
          <div
            className={`flex w-full flex-col gap-3 pt-3 sm:w-auto sm:flex-row ${
              isArabic ? "sm:flex-row-reverse" : ""
            }`}
          >
            <a
              href="#pricing"
              className="button-primary hero-primary-button min-h-13 px-6 text-sm font-semibold sm:min-h-14 sm:px-7 sm:text-base"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {content.hero.primary}
            </a>
            <a
              href="#about"
              className="hero-secondary-button-clean inline-flex min-h-13 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold text-white transition sm:min-h-14 sm:px-7 sm:text-base"
            >
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
              {content.hero.secondary}
            </a>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 pt-3 sm:grid-cols-3">
            {content.hero.stats.map((stat) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                key={stat.label}
                className="hero-stat-card-readable premium-card-hover rounded-lg border px-4 py-4 sm:px-5"
              >
                <div className="hero-stat-value text-[1.95rem] font-bold text-fitness-orange sm:text-[2.25rem]">
                  {stat.value}
                </div>
                <div className="hero-stat-label mt-2 text-xs font-medium leading-normal text-fitness-hero-muted sm:text-sm">
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
