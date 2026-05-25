"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary } from "../lib/site-content";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("gym-language");
    const savedTheme = window.localStorage.getItem("gym-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("gym-language", language);
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("gym-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      theme,
      isArabic: language === "ar",
      content: dictionary[language],
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "ar" : "en")),
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [language, theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
