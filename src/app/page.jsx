"use client";

import { useEffect } from "react";
import { CoachesSection } from "../components/CoachesSection";
import { FaqSection } from "../components/FaqSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { PromoBanner } from "../components/PromoBanner";
import { PricingSection } from "../components/PricingSection";
import { ScheduleSection } from "../components/ScheduleSection";
import { StartJourneySection } from "../components/StartJourneySection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { useApp } from "../context/AppContext";

export default function HomePage() {
  const { content, isArabic, language, openBooking } = useApp();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".scroll-rise"));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PromoBanner />
      <Header />
      <main>
        <HeroSection content={content} isArabic={isArabic} onBook={openBooking} />
        <FeaturesSection content={content} isArabic={isArabic} />
        <ScheduleSection
          content={content}
          language={language}
          isArabic={isArabic}
          onBook={openBooking}
        />
        <CoachesSection content={content} language={language} isArabic={isArabic} />
        <PricingSection
          content={content}
          language={language}
          isArabic={isArabic}
          onBook={openBooking}
        />
        <TestimonialsSection content={content} isArabic={isArabic} />
        <FaqSection content={content} isArabic={isArabic} />
        <StartJourneySection content={content} isArabic={isArabic} onBook={openBooking} />
      </main>
      <Footer content={content} isArabic={isArabic} />
      <FloatingWhatsAppButton />
    </>
  );
}
