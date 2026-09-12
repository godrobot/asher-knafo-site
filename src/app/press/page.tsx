import type { Metadata } from "next";
import Link from "next/link";
import PressList from "@/components/PressList";

export const metadata: Metadata = {
  title: "בעיתונות | אשר כנפו — סופר וחוקר יהדות מרוקו",
  description:
    "כתבות עיתונות ומגזינים על אשר כנפו ופועלו — מ-Ynet, כאן דרום אשדוד, אשדודי, אשדודס ו-Tenoua.",
  alternates: { canonical: "/press", types: { "text/markdown": "/press.md" } },
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">בתקשורת</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          בעיתונות
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sepia-300">
          אשר כנפו בכתבות עיתונות לאורך השנים — ובהן סיקור מפעל המחקר{" "}
          <Link
            href="/poems#shirat-haavanim-poems"
            className="text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
          >
            &rdquo;שירת האבנים&ldquo;
          </Link>{" "}
          ושל כתב העת{" "}
          <Link
            href="/brit"
            className="text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
          >
            &rdquo;ברית&ldquo;
          </Link>
          .
        </p>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <PressList />
    </div>
  );
}
