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
  return (
    <header className="sticky top-0 z-50 border-b border-gold-400/20 bg-sepia-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
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

        <nav className="flex md:hidden items-center gap-4 text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sepia-200 hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
