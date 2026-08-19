"use client";

import { useState } from "react";
import { Clock, Timer, User } from "lucide-react";
import { motion } from "../lib/motion";
import { classSchedule, scheduleDays } from "../lib/site-content";

export function ScheduleSection({ content, language, isArabic, onBook }) {
  const [selectedDay, setSelectedDay] = useState("saturday");

  const classes = classSchedule[selectedDay] ?? [];
  const dayLabel = scheduleDays.find((day) => day.id === selectedDay)[language];

  return (
    <section
      id="schedule"
      className="section-light scroll-rise border-t border-fitness-border py-24 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="section-kicker">{content.schedule.eyebrow}</p>
          <h2 className="section-title mx-auto">{content.schedule.title}</h2>
          <p className="section-copy mx-auto">{content.schedule.description}</p>
        </div>

        {/* Day filters */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-2.5 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          {scheduleDays.map((day) => {
            const isActive = day.id === selectedDay;

            return (
              <button
                key={day.id}
                type="button"
                onClick={() => setSelectedDay(day.id)}
                className={`min-h-[44px] rounded-md px-5 text-sm font-semibold transition ${
                  isActive
                    ? "button-primary"
                    : "button-secondary text-fitness-muted hover:text-fitness-text"
                }`}
              >
                {day[language]}
              </button>
            );
          })}
        </div>

        {/* Class cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <article
              key={`${item.name}-${item.time}`}
              className={`premium-card premium-card-hover flex h-full flex-col rounded-lg px-6 py-6 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <div className={`flex items-start gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                <h3 className="text-xl font-extrabold text-fitness-text">{item.name}</h3>
                <span className="ml-auto rounded-sm bg-fitness-soft px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-fitness-orange">
                  {dayLabel}
                </span>
              </div>

              <dl className="mt-5 space-y-2.5 border-t border-fitness-border pt-5 text-sm text-fitness-muted">
                <div className={`flex items-center gap-2.5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <Clock className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                  <dd className="font-semibold text-fitness-text">{item.time}</dd>
                </div>
                <div className={`flex items-center gap-2.5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <Timer className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                  <dd>
                    {item.duration} {content.schedule.minutes}
                  </dd>
                </div>
                <div className={`flex items-center gap-2.5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <User className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
                  <dd>
                    {content.schedule.coachLabel} {item.coach[language]}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={() =>
                  onBook({ className: `${item.name} - ${dayLabel} ${item.time}` })
                }
                className="plan-button mt-6 min-h-[44px] w-full rounded-md px-5 text-[0.74rem] font-bold uppercase tracking-[0.08em]"
              >
                {content.schedule.book}
              </button>
            </article>
          ))}
        </div>

        {classes.length === 0 && (
          <p className="mt-10 text-center text-sm text-fitness-muted">
            {content.schedule.empty}
          </p>
        )}
      </motion.div>
    </section>
  );
}
