"use client";

import { useCallback, useEffect, useState } from "react";
import { BookingModal } from "../components/BookingModal";
import { CoachesSection } from "../components/CoachesSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { PricingSection } from "../components/PricingSection";
import { ScheduleSection } from "../components/ScheduleSection";
import { StartJourneySection } from "../components/StartJourneySection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { useApp } from "../context/AppContext";

export default function HomePage() {
  const { content, isArabic, language } = useApp();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const closeModal = useCallback(() => setSelectedPackage(null), []);

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
      <Header />
      <main>
        <HeroSection content={content} isArabic={isArabic} />
        <FeaturesSection content={content} isArabic={isArabic} />
        <ScheduleSection content={content} language={language} isArabic={isArabic} />
        <CoachesSection content={content} language={language} isArabic={isArabic} />
        <PricingSection
          content={content}
          language={language}
          isArabic={isArabic}
          onBook={setSelectedPackage}
        />
        <TestimonialsSection content={content} isArabic={isArabic} />
        <StartJourneySection content={content} isArabic={isArabic} />
      </main>
      <Footer content={content} isArabic={isArabic} />
      <FloatingWhatsAppButton />
      <BookingModal
        selectedPackage={selectedPackage}
        content={content}
        language={language}
        isArabic={isArabic}
        onClose={closeModal}
      />
    </>
  );
}
