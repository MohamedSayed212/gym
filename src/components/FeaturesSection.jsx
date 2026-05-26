import Image from "next/image";
import { Clock3, MapPin, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { gymInfo } from "../lib/site-content";
import { motion } from "../lib/motion";

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
          <div className={`space-y-10 text-left ${isArabic ? "lg:order-2" : ""}`}>
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">{content.features.eyebrow}</p>
              <h2 className="section-title max-w-3xl">{content.features.title}</h2>
              <p className="section-copy leading-normal">{content.features.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  key={item.label}
                  className={`premium-card premium-card-hover rounded-lg p-6 ${
                    index === details.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-fitness-orange/12 text-fitness-orange ring-1 ring-fitness-orange/20">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="mt-5 space-y-3">
                    <h3 className="text-lg font-bold leading-normal text-fitness-text">{item.label}</h3>
                    <div className="space-y-2 text-sm leading-normal text-fitness-muted">
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

          <div className={`grid gap-5 sm:grid-cols-2 lg:pt-6 ${isArabic ? "lg:order-1" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="premium-card premium-card-hover relative min-h-[360px] overflow-hidden rounded-lg sm:min-h-[540px]"
            >
              <Image
                src={gymInfo.equipmentImage}
                alt="Gym member training with dumbbells"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="media-caption-overlay absolute inset-x-0 bottom-0 h-2/3" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-left text-fitness-text">
                <ShieldCheck className="h-7 w-7 text-fitness-orange" aria-hidden="true" />
                <h3 className="text-[1.7rem] font-extrabold leading-normal">
                  {content.features.equipmentTitle}
                </h3>
                <p className="max-w-sm text-sm leading-normal text-fitness-muted">
                  {content.features.equipmentText}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="premium-card premium-card-hover relative min-h-[340px] overflow-hidden rounded-lg sm:mt-10 sm:min-h-[500px]"
            >
              <Image
                src={gymInfo.trainerImage}
                alt="Personal trainer coaching a gym session"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="media-caption-overlay absolute inset-x-0 bottom-0 h-2/3" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-left text-fitness-text">
                <Sparkles className="h-7 w-7 text-fitness-orange" aria-hidden="true" />
                <h3 className="text-[1.7rem] font-extrabold leading-normal">
                  {content.features.trainerTitle}
                </h3>
                <p className="max-w-sm text-sm leading-normal text-fitness-muted">
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
