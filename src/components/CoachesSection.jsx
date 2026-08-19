import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { motion } from "../lib/motion";
import { coaches } from "../lib/site-content";

export function CoachesSection({ content, language, isArabic }) {
  return (
    <section
      id="coaches"
      className="section-dark scroll-rise border-t border-fitness-border py-24 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="section-kicker">{content.coaches.eyebrow}</p>
          <h2 className="section-title mx-auto">{content.coaches.title}</h2>
          <p className="section-copy mx-auto">{content.coaches.description}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => {
            const profile = coach[language];

            return (
              <motion.article
                whileHover={{ y: -4 }}
                key={coach.id}
                className={`premium-card flex h-full flex-col overflow-hidden rounded-lg transition ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={`${profile.name} - ${profile.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="text-xl font-extrabold text-fitness-text">{profile.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-fitness-orange">{profile.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-fitness-muted">{profile.bio}</p>

                  <div
                    className={`mt-auto flex items-center gap-2 border-t border-fitness-border pt-5 text-xs font-semibold text-fitness-subtle ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                    <span>{profile.badge}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
