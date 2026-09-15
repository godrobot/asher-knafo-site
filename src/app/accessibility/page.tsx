import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "הצהרת נגישות | אשר כנפו",
  description:
    "הצהרת נגישות עבור אתר אשר כנפו — המאמצים לנגישות שננקטו באתר, מגבלות ידועות, ודרכי פנייה בנושאי נגישות.",
  alternates: { canonical: "/accessibility" },
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">נגישות</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          הצהרת נגישות
        </h1>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <div className="card-panel space-y-6 p-8 text-sm leading-7 text-sepia-200">
        <p>
          אתר זה שואף לאפשר לכלל הגולשים, לרבות אנשים עם מוגבלות, להשתמש בו
          בנוחות ובעצמאות. אנו פועלים להנגשת האתר בהתאם לחוק שוויון זכויות
          לאנשים עם מוגבלות, התשנ&quot;ח-1998, ולתקנות שוויון זכויות לאנשים
          עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013, תוך שאיפה
          לעמידה בדרישות תקן ישראלי 5568 (המבוסס על הנחיות
          WCAG 2.0 ברמה AA).
        </p>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            מה נעשה באתר
          </h2>
          <p className="mt-2">
            בין היתר: מבנה כותרות היררכי וסמנטי בכל עמוד, טקסט חלופי (alt)
            לכל תמונה, תמיכה מלאה בעברית מימין לשמאל (RTL), ניווט מלא
            באמצעות מקלדת, שמירה על אינדיקציות מיקוד (focus) גלויות
            לרכיבים בני-לחיצה, קישור &quot;דלג לתוכן הראשי&quot; למשתמשי
            מקלדת וקוראי מסך, חלוניות (מודלים) המסומנות כראוי לקוראי מסך
            ונסגרות גם באמצעות מקש Escape, הודעות סטטוס בטופס יצירת הקשר
            המוקראות אוטומטית לקוראי מסך, וניגודיות צבעים שנבדקה ותוקנה
            בהתאם לדרישות תקן ישראלי 5568 בכל הטקסטים באתר.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            מגבלות ידועות
          </h2>
          <p className="mt-2">
            האתר לא עבר בדיקת נגישות פורמלית על ידי גורם מוסמך חיצוני, ולכן
            איננו יכולים להצהיר על עמידה מלאה ומוסמכת בתקן. אנו ממשיכים
            לשפר את נגישות האתר על בסיס שוטף, ומקבלים בברכה כל הערה שתסייע
            לנו להמשיך ולשפר.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            פנייה בנושאי נגישות
          </h2>
          <p className="mt-2">
            נתקלתם בבעיית נגישות באתר, או שיש לכם הצעה לשיפור? אתם מוזמנים
            לפנות אלינו דרך{" "}
            <Link
              href="/contact"
              className="text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
            >
              עמוד יצירת הקשר
            </Link>
            , ונשמח לטפל בפנייה.
          </p>
        </div>

        <p className="border-t border-gold-400/15 pt-4 text-xs text-sepia-300">
          הצהרה זו עודכנה לאחרונה בספטמבר 2026.
        </p>
      </div>
    </div>
  );
}
