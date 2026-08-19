"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionary } from "../lib/site-content";
import { LeadBookingModal } from "../components/LeadBookingModal";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [isArabic, setIsArabic] = useState(false);
  const [theme, setTheme] = useState("dark");
  // { planId?, planName?, className? } - null means the booking modal is closed
  const [booking, setBooking] = useState(null);

  const openBooking = useCallback((payload = {}) => setBooking(payload), []);
  const closeBooking = useCallback(() => setBooking(null), []);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("gym-language");
    const savedTheme = window.localStorage.getItem("gym-theme");

    setIsArabic(savedLanguage === "ar");

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = isArabic ? "ar" : "en";
    root.dir = "ltr";
    window.localStorage.setItem("gym-language", isArabic ? "ar" : "en");
  }, [isArabic]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    window.localStorage.setItem("gym-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language: isArabic ? "ar" : "en",
      theme,
      isArabic,
      content: dictionary[isArabic ? "ar" : "en"],
      toggleLanguage: () => setIsArabic((current) => !current),
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      booking,
      openBooking,
      closeBooking,
    }),
    [isArabic, theme, booking, openBooking, closeBooking],
  );

  return (
    <AppContext.Provider value={value}>
      {children}
      <LeadBookingModal />
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
