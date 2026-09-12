import type { Metadata } from "next";
import Image from "next/image";
import { editorialWorks } from "@/data/site";
import BooksList from "@/components/BooksList";

export const metadata: Metadata = {
  title: "ספרים | אשר כנפו — סופר וחוקר יהדות מרוקו",
  description:
    "רשימת ספריו של אשר כנפו: רומנים היסטוריים, זיכרונות, הומור עממי ומחקר על יהדות מרוקו — הכינור ואני, התינוק מאופראן, חתונה במוגדור, שירת האבנים ועוד.",
  keywords: [
    "ספרי אשר כנפו",
    "הכינור ואני",
    "התינוק מאופראן",
    "חתונה במוגדור",
    "שירת האבנים",
    "רומנים על יהודי מרוקו",
    "Asher Knafo books",
  ],
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">יצירה ספרותית</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          ספרים
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sepia-300">
          רומנים, ספרי מחקר וסיפורת עממית — כתיבה הנפרשת על פני יותר משני
          עשורים, ומתעדת את עולמם של יהודי מרוקו. לשירתו של אשר כנפו הוקדש
          עמוד נפרד.
        </p>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <BooksList />

      <section className="mt-20">
        <div className="zellige-divider mb-10">
          <span className="zellige-star" />
        </div>
        <h2 className="font-display text-center text-2xl font-bold text-gold-300 sm:text-3xl">
          עריכה ותרגום
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sepia-300">
          לצד כתיבתו המקורית, אשר כנפו תרגם מצרפתית ועודכן מפעלים ספרותיים של
          בני משפחתו ושל חוקרים אחרים.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {editorialWorks.map((w) => (
            <article
              key={w.slug}
              className="card-panel flex gap-5 p-6"
            >
              {w.cover ? (
                <div className="arch-frame relative h-32 w-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src={w.cover}
                    alt={`עטיפת הספר ${w.title}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div>
                <span className="text-xs tracking-widest text-gold-400">
                  {w.role} · {w.year}
                </span>
                <h3 className="font-display mt-1 text-lg font-bold text-sepia-50">
                  {w.title}
                </h3>
                {w.author ? (
                  <p className="mt-1 text-xs text-sepia-400">מאת {w.author}</p>
                ) : null}
                <p className="mt-3 text-sm leading-7 text-sepia-300">
                  {w.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
