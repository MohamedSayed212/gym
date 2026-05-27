"use client";

import { useCallback, useState } from "react";
import { BookingModal } from "../components/BookingModal";
import { FeaturesSection } from "../components/FeaturesSection";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { PricingSection } from "../components/PricingSection";
import { StartJourneySection } from "../components/StartJourneySection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { useApp } from "../context/AppContext";

export default function HomePage() {
  const { content, isArabic, language } = useApp();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const closeModal = useCallback(() => setSelectedPackage(null), []);

  return (
    <>
      <Header />
      <main>
        <HeroSection content={content} isArabic={isArabic} />
        <FeaturesSection content={content} isArabic={isArabic} />
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
