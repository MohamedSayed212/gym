import Image from "next/image";
import { ArrowDown, CalendarCheck } from "lucide-react";
import { gymInfo } from "../lib/site-content";

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
      <div className="relative mx-auto flex min-h-[calc(100svh-120px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="hero-copy-shell max-w-4xl text-fitness-hero-text">
          <p className="hero-eyebrow fade-up mb-7 inline-flex rounded-lg border px-4 py-2.5 text-sm font-extrabold text-fitness-orange backdrop-blur-xl">
            {content.hero.eyebrow}
          </p>
          <h1 className="hero-title fade-up-delay max-w-4xl">
            {content.hero.title}
          </h1>
          <p className="hero-subtitle fade-up-late mt-7 max-w-3xl font-medium text-fitness-hero-muted">
            {content.hero.subtitle}
          </p>
          <div className="fade-up-late mt-11 flex flex-col gap-4 sm:flex-row">
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
          <div className="fade-up-late mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {content.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="hero-stat-card premium-card-hover rounded-lg px-5 py-5 sm:px-6"
              >
                <div className="hero-stat-value text-[2.2rem] font-extrabold text-fitness-orange sm:text-[2.45rem]">
                  {stat.value}
                </div>
                <div className="hero-stat-label mt-2.5 text-sm font-semibold text-fitness-hero-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
