"use client";

import Link from "next/link";
import { Dumbbell, Languages, Menu, Moon, Sun, X } from "lucide-react";

import { useState } from "react";
import { useApp } from "../context/AppContext";
import { gymInfo } from "../lib/site-content";

export function Header() {
  const { content, isArabic, theme, toggleTheme, toggleLanguage } = useApp();

  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/#home", label: content.nav.home },
    { href: "/#about", label: content.nav.about },
    { href: "/#pricing", label: content.nav.pricing },
    { href: "/#reviews", label: content.nav.reviews },
    { href: "/admin", label: content.nav.admin },
  ];

  return (
    <>
      <header className="nav-shell sticky inset-x-0 top-0 z-50 border-b border-fitness-border backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3">
            <span className="button-primary flex h-10 w-10 items-center justify-center p-0">
              <Dumbbell className="h-4 w-4" />
            </span>

            <span className="text-lg font-extrabold text-fitness-text sm:text-xl">
              {gymInfo.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden items-center gap-1.5 lg:flex ${
              isArabic ? "lg:flex-row-reverse" : ""
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3.5 py-2 text-sm font-semibold text-fitness-muted transition hover:bg-fitness-soft hover:text-fitness-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <button onClick={toggleLanguage} className="icon-button h-11 gap-2 px-4 text-sm font-semibold">
              <Languages className="h-4 w-4" />
              <span>{isArabic ? "EN" : "AR"}</span>
            </button>

            <button onClick={toggleTheme} className="icon-button h-11 w-11 p-0">
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <Link
              href="/#pricing"
              className="button-primary min-h-11 px-5 text-sm font-bold"
            >
              {content.nav.join}
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(true)}
            className="icon-button flex h-11 w-11 items-center justify-center p-0 lg:hidden"
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
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-fitness-text transition hover:bg-fitness-soft"
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
          <Link
            href="/#pricing"
            onClick={() => setOpen(false)}
            className="button-primary mt-6 flex min-h-12 w-full items-center justify-center text-sm font-bold"
          >
            {content.nav.join}
          </Link>
        </div>
      </div>
    </>
  );
}
