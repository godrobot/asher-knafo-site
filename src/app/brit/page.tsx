import type { Metadata } from "next";
import { britMagazine } from "@/data/site";
import BritArticles from "./BritArticles";

export const metadata: Metadata = {
  title: "ברית | כתב העת של יהודי מרוקו — אשר כנפו",
  description:
    "\"ברית\" — כתב העת הדו־לשוני של יהודי מרוקו, בעריכת אשר כנפו: מאמרי מחקר, זכרונות, שירה ותיעוד קהילתי מקהילות היהודים במרוקו, בלמעלה מארבעים גיליונות.",
  keywords: [
    "כתב עת ברית",
    "יהדות מרוקו",
    "קהילות יהודי מרוקו",
    "מוגדור אסאווירה",
    "Moroccan Jewish journal",
  ],
};

export default function BritPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">כתב עת</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          {britMagazine.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sepia-300">
          {britMagazine.subtitle}
        </p>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <div className="card-panel p-8 sm:p-10">
        <p className="text-base leading-8 text-sepia-200">
          {britMagazine.description}
        </p>

        <div className="mt-10 border-t border-gold-400/15 pt-8">
          <p className="mb-4 text-xs tracking-widest text-gold-400">
            גיליונות לדוגמה
          </p>
          <div className="flex flex-wrap gap-3">
            {britMagazine.pastIssues.map((issue) => (
              <span
                key={issue.number}
                className="rounded-full border border-gold-400/25 px-4 py-1.5 text-sm text-sepia-200"
              >
                ברית {issue.number} — {issue.focus}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 rounded-lg border border-gold-400/25 bg-sepia-950/40 p-6 text-center sm:flex-row sm:justify-between sm:text-right">
          <div>
            <p className="text-xs tracking-widest text-gold-400">
              הגיליון האחרון
            </p>
            <p className="font-display mt-1 text-xl font-bold text-sepia-50">
              ברית {britMagazine.latestIssue.number} — {britMagazine.latestIssue.focus}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="zellige-divider mb-10">
          <span className="zellige-star" />
        </div>
        <h2 className="font-display text-center text-2xl font-bold text-gold-300 sm:text-3xl">
          מאמרים מתוך הגיליונות
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sepia-300">
          לחצו על מאמר כדי לקרוא תקציר מורחב שלו. הטקסטים המלאים רואים אור
          בגיליונות המודפסים של כתב העת.
        </p>

        <BritArticles />

        <div className="mt-14 border-t border-gold-400/15 pt-10">
          <p className="mb-4 text-center text-xs tracking-widest text-gold-400">
            עוד מתוך תוכן העניינים של גיליון {britMagazine.latestIssue.number}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {britMagazine.sampleArticles.map((article) => (
              <span
                key={article.title}
                className="rounded-full border border-gold-400/25 px-4 py-1.5 text-sm text-sepia-200"
                title={article.author}
              >
                {article.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
