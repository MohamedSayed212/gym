import Image from "next/image";
import { ArrowDown, CalendarCheck } from "lucide-react";
import { gymInfo } from "../lib/site-content";
import { motion } from "../lib/motion";

export function HeroSection({ content }) {
  return (
    <section
      id="home"
      className="hero-section relative isolate min-h-[calc(100svh-120px)] overflow-hidden bg-fitness-black"
    >
      <Image
        src={gymInfo.heroImage}
        alt="Strength training floor with weights and gym equipment"
        fill
        priority
        quality={95}
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
        className="relative mx-auto flex min-h-[calc(100svh-120px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="hero-copy-shell max-w-4xl space-y-4 text-left text-fitness-hero-text">
          <p className="hero-eyebrow inline-flex rounded-lg border px-4 py-2.5 text-sm font-extrabold text-fitness-orange backdrop-blur-xl">
            {content.hero.eyebrow}
          </p>
          <h1 className="hero-title max-w-4xl">
            {content.hero.title}
          </h1>
          <p className="hero-subtitle max-w-3xl text-lg font-medium leading-normal text-fitness-hero-muted">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#pricing"
              className="button-primary hero-primary-button min-h-14 px-7 text-base font-bold"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {content.hero.primary}
            </a>
            <a
              href="#about"
              className="button-secondary hero-secondary-button min-h-14 px-7 text-base font-bold"
            >
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
              {content.hero.secondary}
            </a>
          </div>
          <div className="grid max-w-4xl grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {content.hero.stats.map((stat) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                key={stat.label}
                className="hero-stat-card premium-card-hover rounded-lg px-5 py-5 sm:px-6"
              >
                <div className="hero-stat-value text-[2.2rem] font-extrabold text-fitness-orange sm:text-[2.45rem]">
                  {stat.value}
                </div>
                <div className="hero-stat-label mt-2.5 text-sm font-semibold leading-normal text-fitness-hero-muted">
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
