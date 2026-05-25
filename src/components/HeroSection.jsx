import Image from "next/image";
import { ArrowDown, CalendarCheck } from "lucide-react";
import { gymInfo } from "../lib/site-content";

export function HeroSection({ content }) {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden pt-16">
      <Image
        src={gymInfo.heroImage}
        alt="Strength training floor with weights and gym equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-orange-950/55" />
      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-orange-200 backdrop-blur">
            {content.hero.eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
            {content.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-4 text-base font-black text-white shadow-premium transition hover:bg-orange-500"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {content.hero.primary}
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
              {content.hero.secondary}
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {content.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black text-orange-300 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-stone-300">
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
