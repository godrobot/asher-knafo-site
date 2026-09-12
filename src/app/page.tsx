import Link from "next/link";
import Image from "next/image";
import { awards, bio, books, britMagazine, siteInfo } from "@/data/site";
import FeaturedVideos from "@/components/FeaturedVideos";

export default function Home() {
  const featuredBooks = books.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-pattern opacity-40" />
        <div className="absolute -top-40 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-28">
          <div className="flex-1 text-center md:text-right">
            <p className="mb-4 text-sm tracking-[0.3em] text-gold-300">
              סופר · חוקר · מורשת יהדות מרוקו
            </p>
            <h1 className="font-display text-4xl font-black leading-tight gold-text sm:text-5xl md:text-6xl">
              אשר כנפו
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-sepia-200 md:mx-0">
              {siteInfo.tagline}. מתעד בכתיבתו את עולמם של יהודי מרוקו —
              זיכרונות, מנהגים, הומור עממי ותולדות קהילות — למען הדורות הבאים.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/books"
                className="rounded-full border border-gold-400 bg-gold-400/10 px-8 py-3 text-sm font-medium tracking-wide text-gold-200 transition-colors hover:bg-gold-400 hover:text-sepia-950"
              >
                לספרים
              </Link>
              <Link
                href="/about"
                className="rounded-full px-8 py-3 text-sm font-medium tracking-wide text-sepia-200 transition-colors hover:text-gold-300"
              >
                קרא עוד אודותיו ←
              </Link>
            </div>
          </div>

          <div className="relative w-56 flex-shrink-0 sm:w-64 md:w-72">
            <div className="arch-frame relative aspect-[3/4] overflow-hidden">
              <Image
                src={siteInfo.heroImage}
                alt="אשר כנפו קורא מתוך אחד מספריו"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sepia-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-3 -z-10 rounded-[999px] border border-gold-400/25" />
          </div>
        </div>

        <div className="zellige-divider">
          <span className="zellige-star" />
        </div>
      </section>

      {/* Featured videos */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">
            סרטונים נבחרים
          </h2>
          <p className="mt-3 text-sepia-300">מתוך אירועי ההוקרה והתיעוד</p>
        </div>

        <FeaturedVideos />

        <div className="mt-12 text-center">
          <Link
            href="/videos"
            className="rounded-full border border-gold-400/50 px-8 py-3 text-sm text-gold-300 transition-colors hover:bg-gold-400/10"
          >
            כל הסרטונים
          </Link>
        </div>
      </section>

      {/* Short bio */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">
          קורות חיים בקצרה
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-sepia-200">
          {bio.short}
        </p>
        <Link
          href="/about"
          className="mt-6 inline-block text-sm text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
        >
          הביוגרפיה המלאה ←
        </Link>
      </section>

      {/* Featured books */}
      <section className="border-t border-gold-400/10 bg-sepia-900/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">
              מתוך היצירה הספרותית
            </h2>
            <p className="mt-3 text-sepia-300">רומנים, מחקר וסיפורת עממית — כתיבה שנפרשת על פני יותר משני עשורים</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBooks.map((book) => (
              <Link
                key={book.slug}
                href={`/books#${book.slug}`}
                className="card-panel group flex flex-col p-6 transition-transform hover:-translate-y-1"
              >
                <span className="text-xs tracking-widest text-gold-400">
                  {book.year}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold text-sepia-50 group-hover:text-gold-200">
                  {book.title}
                </h3>
                <p className="mt-2 text-xs text-sepia-400">{book.genre}</p>
                <p className="mt-4 line-clamp-4 text-sm leading-7 text-sepia-300">
                  {book.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/books"
              className="rounded-full border border-gold-400/50 px-8 py-3 text-sm text-gold-300 transition-colors hover:bg-gold-400/10"
            >
              כל הספרים
            </Link>
          </div>
        </div>
      </section>

      {/* Awards teaser */}
      <section className="border-t border-gold-400/10 bg-sepia-900/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">
              פרסים והוקרה
            </h2>
            <p className="mt-3 text-sepia-300">
              הכרה רשמית בתרומתו למחקר, לחינוך ולשימור מורשת יהדות צפון
              אפריקה
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.slice(0, 3).map((award) => (
              <div key={award.name} className="card-panel p-6">
                <span className="text-xs tracking-widest text-gold-400">
                  {award.year}
                </span>
                <h3 className="font-display mt-2 text-lg font-bold text-sepia-50">
                  {award.name}
                </h3>
                <p className="mt-1 text-sm text-sepia-400">{award.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="rounded-full border border-gold-400/50 px-8 py-3 text-sm text-gold-300 transition-colors hover:bg-gold-400/10"
            >
              עוד על מפעל המחקר והתיעוד
            </Link>
          </div>
        </div>
      </section>

      {/* Brit magazine teaser */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="card-panel grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <span className="text-xs tracking-widest text-gold-400">
              כתב עת · עריכה
            </span>
            <h2 className="font-display mt-3 text-2xl font-bold text-sepia-50 sm:text-3xl">
              {britMagazine.title} — {britMagazine.subtitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sepia-300">
              {britMagazine.description}
            </p>
          </div>
          <Link
            href="/brit"
            className="whitespace-nowrap rounded-full border border-gold-400 bg-gold-400/10 px-8 py-3 text-center text-sm font-medium text-gold-200 transition-colors hover:bg-gold-400 hover:text-sepia-950"
          >
            אל כתב העת
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="zellige-divider mb-8">
          <span className="zellige-star" />
        </div>
        <blockquote className="font-display text-xl italic leading-9 text-sepia-200 sm:text-2xl">
          &rdquo;הכינור הוא ככל הנראה אלגוריה לדבר לא מושג — התקווה, הכמיהה,
          האכזבה וההתחדשות של דור שלם שעזב את מרוקו והגיע לארץ הקודש.&ldquo;
        </blockquote>
        <p className="mt-4 text-sm text-gold-400">מתוך &rdquo;הכינור ואני&ldquo;</p>
      </section>
    </div>
  );
}
