import type { Metadata } from "next";
import { siteInfo } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "צור קשר | אשר כנפו",
  description:
    "יצירת קשר עם אשר כנפו — סופר וחוקר יהדות מרוקו, עורך כתב העת ברית — לשאלות, הרצאות ושיתופי פעולה.",
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
    </div>
  );
}
