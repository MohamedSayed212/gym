import Image from "next/image";
import {
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { motion } from "../lib/motion";
import { gymInfo } from "../lib/site-content";

export function FeaturesSection({ content, isArabic }) {
  const details = [
    {
      icon: MapPin,
      label: content.features.addressLabel,
      text: gymInfo.address,
    },
    {
      icon: Clock3,
      label: content.features.hoursLabel,
      text: content.features.hours,
    },
    {
      icon: UsersRound,
      label: content.features.trainersLabel,
      text: content.features.trainers,
    },
  ];

  return (
    <section
      id="about"
      className="section-light scroll-rise border-t border-fitness-border py-24 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          {/* Left column — copy + info cards */}
          <div
            className={`space-y-10 ${isArabic ? "text-right lg:order-2" : "text-left"}`}
          >
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">{content.features.eyebrow}</p>
              <h2 className="section-title max-w-3xl">
                {content.features.title}
              </h2>
              <p className="section-copy">
                {content.features.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {details.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={item.label}
                  className={`rounded-lg border border-fitness-border bg-fitness-card px-5 py-5 ${
                    index === details.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-fitness-soft text-fitness-orange">
                    <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-fitness-subtle">
                      {item.label}
                    </h3>
                    <div className="space-y-1 text-sm leading-relaxed text-fitness-text">
                      {Array.isArray(item.text) ? (
                        item.text.map((line) => <p key={line}>{line}</p>)
                      ) : (
                        <p>{item.text}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column — images */}
          <div
            className={`grid gap-4 sm:grid-cols-2 lg:pt-6 ${isArabic ? "lg:order-1" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[360px] overflow-hidden rounded-lg border border-fitness-border sm:min-h-[540px]"
            >
              <Image
                src={gymInfo.equipmentImage}
                alt="Modern gym equipment and dumbbells"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/28 to-transparent" />
              <div
                className={`absolute inset-x-0 bottom-0 space-y-2 p-6 text-white ${isArabic ? "text-right" : "text-left"}`}
              >
                <ShieldCheck
                  className={`h-6 w-6 text-fitness-orange ${isArabic ? "mr-0 ml-auto" : ""}`}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold leading-snug">
                  {content.features.equipmentTitle}
                </h3>
                <p className="max-w-sm text-[0.82rem] leading-relaxed text-white/76">
                  {content.features.equipmentText}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[340px] overflow-hidden rounded-lg border border-fitness-border sm:mt-10 sm:min-h-[500px]"
            >
              <Image
                src={gymInfo.trainerImage}
                alt="Coach guiding a member during training"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/28 to-transparent" />
              <div
                className={`absolute inset-x-0 bottom-0 space-y-2 p-6 text-white ${isArabic ? "text-right" : "text-left"}`}
              >
                <Sparkles
                  className={`h-6 w-6 text-fitness-orange ${isArabic ? "mr-0 ml-auto" : ""}`}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold leading-snug">
                  {content.features.trainerTitle}
                </h3>
                <p className="max-w-sm text-[0.82rem] leading-relaxed text-white/76">
                  {content.features.trainerText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
