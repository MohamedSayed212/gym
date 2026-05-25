import Image from "next/image";
import { Clock3, MapPin, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { gymInfo } from "../lib/site-content";

export function FeaturesSection({ content }) {
  const details = [
    {
      icon: MapPin,
      label: content.features.addressLabel,
      text: gymInfo.address,
    },
    {
      icon: Clock3,
      label: content.features.hoursLabel,
      text: content.features.hours.join(" | "),
    },
    {
      icon: UsersRound,
      label: content.features.trainersLabel,
      text: content.features.trainers,
    },
  ];

  return (
    <section id="about" className="bg-[#f6f3ed] py-20 dark:bg-[#11100e] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
              {content.features.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-[#171412] dark:text-white sm:text-5xl">
              {content.features.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5b514a] dark:text-stone-300">
              {content.features.description}
            </p>

            <div className="mt-8 grid gap-4">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-[#171412] dark:text-white">{item.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#5b514a] dark:text-stone-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-premium sm:min-h-[520px]">
              <Image
                src={gymInfo.equipmentImage}
                alt="Gym member training with dumbbells"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-white">
                <ShieldCheck className="h-7 w-7 text-orange-300" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-black">{content.features.equipmentTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">{content.features.equipmentText}</p>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-premium sm:mt-12 sm:min-h-[520px]">
              <Image
                src={gymInfo.trainerImage}
                alt="Personal trainer coaching a gym session"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-white">
                <Sparkles className="h-7 w-7 text-amber-300" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-black">{content.features.trainerTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">{content.features.trainerText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
