import type { Metadata } from "next";
import Image from "next/image";
import { academicContribution, bio, siteInfo } from "@/data/site";
import Awards from "@/components/Awards";

export const metadata: Metadata = {
  title: "אודות | אשר כנפו — סופר וחוקר יהדות מרוקו",
  description:
    "קורות חייו של אשר כנפו: מוגדור, עלייה ארצה, ייסוד זיו המערב והתזמורת האנדלוסית הישראלית, ותיעוד מורשת יהודי מרוקו וצפון אפריקה.",
  keywords: [
    "אשר כנפו ביוגרפיה",
    "מוגדור אסאווירה",
    "זיו המערב",
    "תזמורת אנדלוסית ישראלית",
    "Asher Knafo biography",
  ],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">קורות חיים</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          אודות אשר כנפו
        </h1>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <div className="mb-14 flex justify-center">
        <div className="arch-frame relative aspect-square w-48 overflow-hidden sm:w-56">
          <Image
            src={siteInfo.aboutImage}
            alt="אשר כנפו"
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>
      </div>

      <article className="space-y-6">
        {bio.paragraphs.map((p, i) => (
          <p key={i} className="text-base leading-8 text-sepia-200">
            {p}
          </p>
        ))}
      </article>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="card-panel p-6 text-center">
          <p className="font-display text-3xl font-bold gold-text">1935</p>
          <p className="mt-2 text-sm text-sepia-300">נולד באסאוירה (מוגדור)</p>
        </div>
        <div className="card-panel p-6 text-center">
          <p className="font-display text-3xl font-bold gold-text">1951</p>
          <p className="mt-2 text-sm text-sepia-300">עלייה ארצה</p>
        </div>
        <div className="card-panel p-6 text-center">
          <p className="font-display text-3xl font-bold gold-text">1977</p>
          <p className="mt-2 text-sm text-sepia-300">
            ייסוד &rdquo;זיו המערב&ldquo;
          </p>
        </div>
      </div>

      <section className="mt-20">
        <div className="zellige-divider mb-10">
          <span className="zellige-star" />
        </div>
        <h2 className="font-display text-center text-2xl font-bold text-gold-300 sm:text-3xl">
          {academicContribution.heading}
        </h2>
        <article className="mx-auto mt-8 max-w-3xl space-y-6">
          {academicContribution.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-8 text-sepia-200">
              {p}
            </p>
          ))}
        </article>
      </section>

      <div className="mt-20">
        <Awards />
      </div>
    </div>
  );
}
