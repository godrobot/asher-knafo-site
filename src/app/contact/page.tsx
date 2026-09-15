import type { Metadata } from "next";
import { siteInfo } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "צור קשר | אשר כנפו",
  description:
    "יצירת קשר עם אשר כנפו — סופר וחוקר יהדות מרוקו, עורך כתב העת ברית — לשאלות, הרצאות ושיתופי פעולה. Available for media interviews on Moroccan Jewish history and heritage.",
  keywords: [
    "Moroccan Jews expert interview",
    "Moroccan Jewish heritage expert contact",
    "יצירת קשר אשר כנפו",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">בואו נדבר</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          צור קשר
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sepia-300">
          לשאלות, שיתופי פעולה, הרצאות או מידע על הספרים וכתב העת ברית —
          נשמח לשמוע מכם.
        </p>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <ContactForm />

      <div className="mt-10 flex flex-col items-center gap-2 text-sm text-sepia-300">
        <p>ניתן גם ליצור קשר ישירות דרך הפייסבוק:</p>
        <a
          href={siteInfo.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-300 hover:text-gold-200"
        >
          עמוד הפייסבוק
        </a>
      </div>

      {/* A plain-language note for journalists/producers/researchers who
          land here looking for an interview subject — real, honest framing
          of his actual credentials (40+ years of independent research,
          editor of "Brit", the tombstone-inscription research), in both
          Hebrew and English so it's findable by English-language search
          too (e.g. "Moroccan Jews expert", "Moroccan Jewish heritage
          expert for interview"). */}
      <section className="mt-14 border-t border-gold-400/15 pt-10 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">לעיתונאים וחוקרים</p>
        <h2 lang="en" className="font-display mt-2 text-xl font-bold text-sepia-50">
          For Journalists &amp; Researchers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-sepia-300">
          אשר כנפו זמין לראיונות ולפניות מהתקשורת בנושאי יהדות מרוקו, קהילת
          מוגדור-אסאווירה ומורשת יהודי צפון אפריקה — לרבות מחקרו על כתובות
          בתי הקברות היהודיים (&rdquo;שירת האבנים&ldquo;) ועריכתו את כתב העת
          &rdquo;ברית&ldquo;.
        </p>
        <p
          dir="ltr"
          lang="en"
          className="mx-auto mt-3 max-w-xl text-sm leading-7 text-sepia-300"
        >
          Asher Knafo — a Moroccan Jewish heritage expert and independent
          researcher — is available for interviews and media inquiries on
          Moroccan Jewish history, the Jewish community of Mogador
          (Essaouira), and North African Jewish heritage, including his
          research on Jewish cemetery inscriptions (&ldquo;Shirat
          HaAvanim&rdquo;) and his editorship of the Moroccan Jewish journal
          &ldquo;Brit.&rdquo;
        </p>
      </section>
    </div>
  );
}
