import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { books, editorialWorks } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";
import BooksList from "@/components/BooksList";
import LinkedText from "@/components/LinkedText";
import { siteLinksExcept } from "@/lib/keyword-links";

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
  alternates: { canonical: "/books", types: { "text/markdown": "/books.md" } },
};

// Structured data so search engines and AI answer engines can read the
// book catalog directly (author, genre, year) rather than only inferring
// it from rendered card text.
const booksJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: books.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Book",
      name: b.title,
      author: { "@type": "Person", name: "אשר כנפו", alternateName: "Asher Knafo" },
      datePublished: b.year,
      genre: b.genre,
      description: b.description,
      ...(b.publisher ? { publisher: { "@type": "Organization", name: b.publisher } } : {}),
      url: `${SITE_URL}/books`,
    },
  })),
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(booksJsonLd) }}
      />
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">יצירה ספרותית</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          ספרים
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sepia-300">
          רומנים, ספרי מחקר וסיפורת עממית — כתיבה הנפרשת על פני יותר משני
          עשורים, ומתעדת את עולמם של יהודי מרוקו. ל
          <Link
            href="/poems"
            className="text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
          >
            שירתו
          </Link>{" "}
          של אשר כנפו הוקדש עמוד נפרד.
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
              id={w.slug}
              className="card-panel flex scroll-mt-24 gap-5 p-6"
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
                  <LinkedText text={w.description} rules={siteLinksExcept(`/books#${w.slug}`)} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
