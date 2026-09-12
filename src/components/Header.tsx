"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/books", label: "ספרים" },
  { href: "/poems", label: "שירה" },
  { href: "/brit", label: "ברית" },
  { href: "/videos", label: "סרטונים" },
  { href: "/press", label: "בעיתונות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-400/20 bg-sepia-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <span className="zellige-star !h-6 !w-6 !mx-0 transition-transform group-hover:rotate-45" />
          <span className="font-display text-xl md:text-2xl font-bold gold-text tracking-wide">
            אשר כנפו
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-sepia-200 transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-gold-300 transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gold-300 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gold-300 transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col border-t border-gold-400/20 bg-sepia-950/95 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold-400/10 py-3 text-sm tracking-wide text-sepia-200 last:border-b-0 hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
