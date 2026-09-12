"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  // Scroll to the very top whenever the route actually changes. Doing this
  // in an effect (rather than in the link's onClick) avoids a browser
  // scroll-anchoring quirk: closing the mobile menu and loading the new
  // page happen almost simultaneously, and the browser tries to preserve
  // the pre-click scroll offset through that layout shift, landing partway
  // down the new page instead of at the top. Running after the route
  // change has committed sidesteps that entirely.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold-400/20 bg-sepia-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={closeMenu}
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
        <nav className="fixed inset-x-0 top-[65px] z-40 flex max-h-[calc(100dvh-65px)] flex-col overflow-y-auto border-t border-gold-400/20 bg-sepia-950/95 px-6 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
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
