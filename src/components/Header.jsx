"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dumbbell, Languages, Menu, Moon, Sun, X } from "lucide-react";

import { useState } from "react";
import { useApp } from "../context/AppContext";
import { gymInfo } from "../lib/site-content";

export function Header() {
  const { content, isArabic, theme, toggleTheme, toggleLanguage, openBooking } =
    useApp();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/#home", label: content.nav.home },
    { href: "/#about", label: content.nav.about },
    { href: "/#schedule", label: content.nav.schedule },
    { href: "/#coaches", label: content.nav.coaches },
    { href: "/#pricing", label: content.nav.pricing },
  ];

  const handleAnchorClick = (event, href, shouldCloseMenu = false) => {
    if (!href.startsWith("/#")) {
      if (shouldCloseMenu) {
        setOpen(false);
      }
      return;
    }

    event.preventDefault();

    const sectionId = href.replace("/#", "");
    const target = document.getElementById(sectionId);

    if (shouldCloseMenu) {
      setOpen(false);
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
      return;
    }

    // If we're on another page like /admin, navigate client-side to keep app state.
    router.push(href);
  };

  return (
    <>
      <header className="nav-shell sticky inset-x-0 top-0 z-50 border-b border-fitness-border backdrop-blur-xl">
        <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/#home"
            onClick={(event) => handleAnchorClick(event, "/#home")}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-fitness-orange p-0 text-white">
              <Dumbbell className="h-[18px] w-[18px]" />
            </span>

            <span className="text-[1.05rem] font-extrabold uppercase leading-none tracking-[-0.01em] text-fitness-text sm:text-[1.15rem]">
              {gymInfo.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden items-center justify-center gap-8 lg:flex ${
              isArabic ? "lg:flex-row-reverse" : ""
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
                className="nav-link text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-fitness-muted transition-colors hover:text-fitness-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center justify-end gap-1.5 lg:flex">
            <button
              onClick={toggleLanguage}
              aria-label={content.nav.language}
              className="nav-ghost-button h-9 gap-1.5 px-2.5 text-[0.72rem] font-bold uppercase tracking-[0.1em]"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{isArabic ? "EN" : "AR"}</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label={content.nav.theme}
              className="nav-ghost-button h-9 w-9 p-0"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                openBooking({ planName: content.booking.freeTrial })
              }
              className="button-primary ml-2.5 min-h-[42px] rounded-md px-5 text-[0.78rem] font-bold uppercase tracking-[0.08em]"
            >
              {content.nav.join}
            </button>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="nav-ghost-button col-start-3 ml-auto flex h-10 w-10 items-center justify-center p-0 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transition ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 h-full w-[85%] max-w-[340px] bg-fitness-card p-6 shadow-2xl transition-all duration-300 ${
            open ? "right-0" : "-right-full"
          }`}
        >
          {/* Top */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="button-primary flex h-11 w-11 items-center justify-center p-0">
                <Dumbbell className="h-5 w-5" />
              </span>

              <span className="text-lg font-bold">{gymInfo.name}</span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="icon-button h-10 w-10 p-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href, true)}
                className="rounded-md px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] text-fitness-text transition hover:bg-fitness-soft"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="icon-button flex h-11 flex-1 items-center justify-center gap-2"
            >
              <Languages className="h-4 w-4" />
              <span>{isArabic ? "EN" : "AR"}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="icon-button flex h-11 w-11 items-center justify-center p-0"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openBooking({ planName: content.booking.freeTrial });
            }}
            className="button-primary mt-6 flex min-h-12 w-full items-center justify-center rounded-md text-sm font-bold uppercase tracking-[0.08em]"
          >
            {content.nav.join}
          </button>
        </div>
      </div>
    </>
  );
}
