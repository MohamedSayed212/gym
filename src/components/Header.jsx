"use client";

import Link from "next/link";
import { Dumbbell, Languages, Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";
import { gymInfo } from "../lib/site-content";

export function Header() {
  const { content, theme, toggleTheme, toggleLanguage, isArabic } = useApp();

  const navItems = [
    { href: "/#home", label: content.nav.home },
    { href: "/#about", label: content.nav.about },
    { href: "/#pricing", label: content.nav.pricing },
    { href: "/#reviews", label: content.nav.reviews },
    { href: "/admin", label: content.nav.admin },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f6f3ed]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#11100e]/88">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="flex min-w-0 items-center gap-3" aria-label={gymInfo.name}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#171412] text-orange-400 shadow-premium dark:bg-white dark:text-[#171412]">
            <Dumbbell className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate text-base font-black uppercase tracking-[0.12em] text-[#171412] dark:text-white">
            {gymInfo.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#534942] transition hover:bg-black/5 hover:text-[#171412] dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            title={content.nav.language}
            aria-label={content.nav.language}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-black/10 bg-white/75 px-3 text-sm font-bold text-[#171412] transition hover:border-orange-500 hover:text-orange-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-orange-400 dark:hover:text-orange-300"
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            <span>{isArabic ? "EN" : "AR"}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            title={content.nav.theme}
            aria-label={content.nav.theme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white/75 text-[#171412] transition hover:border-orange-500 hover:text-orange-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-orange-400 dark:hover:text-orange-300"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>
          <Link
            href="/#pricing"
            className="hidden rounded-lg bg-orange-600 px-4 py-2 text-sm font-black text-white shadow-premium transition hover:bg-orange-500 sm:inline-flex"
          >
            {content.nav.join}
          </Link>
        </div>
      </div>
    </header>
  );
}
