import type { Metadata } from "next";
import { poemSamples, poetryWorks } from "@/data/site";

export const metadata: Metadata = {
  title: "שירה | אשר כנפו — סופר וחוקר יהדות מרוקו",
  description:
    "שירתו של אשר כנפו: שירה מקורית, תרגומי שירה מצרפתית, ומחקר \"שירת האבנים\" — תיעוד הפיוטים והקינות שנחרתו על מצבות בתי העלמין היהודיים במוגדור, מרוקו.",
  keywords: [
    "שירת האבנים",
    "מהן אותן מלים",
    "שירה יהודית מרוקאית",
    "פיוטי מוגדור",
    "מצבות מוגדור",
    "Moroccan Jewish poetry",
  ],
};

export default function PoemsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">שירה</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          שירה
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sepia-300">
          אשר כנפו אל השירה מגיע בשלוש דרכים: ככותב, כמתרגם מצרפתית, וכחוקר —
          במפעל &rdquo;שירת האבנים&ldquo;, תיעוד מונומנטלי של הפיוטים שנחרתו
          על מצבות בתי העלמין היהודיים של מוגדור.
        </p>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <div className="space-y-8">
        {poetryWorks.map((w) => (
          <article key={w.slug} className="card-panel p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-2xl font-bold text-sepia-50">
                {w.title}
              </h2>
              <span className="text-xs tracking-widest text-gold-400">
                {w.year}
              </span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-sepia-400">
              {w.kind}
              {w.author ? ` · ${w.author}` : ""}
            </p>
            <p className="mt-4 text-base leading-8 text-sepia-200">
              {w.description}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-20">
        <div className="zellige-divider mb-10">
          <span className="zellige-star" />
        </div>
        <h2 className="font-display text-center text-2xl font-bold text-gold-300 sm:text-3xl">
          מבחר שורות
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sepia-300">
          כל קטע מיוחס במדויק למחברו — בין אם מדובר בפיוט היסטורי שתועד
          במחקר &rdquo;שירת האבנים&ldquo;, ובין אם בשירתו של בן המשפחה שאשר
          כנפו ערך והוציא לאור.
        </p>

        <div className="mt-10 space-y-8">
          {poemSamples.map((p) => (
            <blockquote
              key={p.title}
              className="card-panel border-r-2 border-gold-400/50 p-8"
            >
              <p className="font-display space-y-1 text-lg leading-10 text-sepia-100">
                {p.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <footer className="mt-5 text-sm text-gold-400">
                {p.title} — {p.author}
              </footer>
              <p className="mt-2 text-xs text-sepia-400">{p.context}</p>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
