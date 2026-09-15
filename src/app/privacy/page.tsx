import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | אשר כנפו",
  description:
    "מדיניות הפרטיות של אתר אשר כנפו — אילו פרטים נאספים בטופס יצירת הקשר, לשם מה הם משמשים, והיכן הם מאוחסנים.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">פרטיות</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          מדיניות פרטיות
        </h1>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <div className="card-panel space-y-6 p-8 text-sm leading-7 text-sepia-200">
        <p>
          מדיניות זו מסבירה אילו פרטים אישיים נאספים באתר זה, לשם מה הם
          משמשים, והיכן הם מאוחסנים, בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981
          ותיקוניו.
        </p>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            אילו פרטים נאספים
          </h2>
          <p className="mt-2">
            האתר אינו משתמש בעוגיות (cookies), בכלי מעקב או בכלי אנליטיקס
            מכל סוג. הפרטים היחידים שנאספים הם אלה שאתם מוסרים ביוזמתכם
            דרך{" "}
            <Link
              href="/contact"
              className="text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
            >
              טופס יצירת הקשר
            </Link>
            : שם מלא, כתובת דוא&quot;ל, ותוכן ההודעה שכתבתם.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            כיצד נעשה שימוש בפרטים
          </h2>
          <p className="mt-2">
            הפרטים שנמסרים בטופס נשלחים כהודעת דוא&quot;ל ישירות אלינו, לצורך
            מענה לפנייתכם בלבד. לצורך המשלוח הטכני של ההודעה, אנו נעזרים
            בשירות הדוא&quot;ל של Gmail (Google) — כלומר תוכן ההודעה עובר
            דרך שרתי הדוא&quot;ל של גוגל בדרך אליו. הפרטים אינם נמכרים,
            אינם מועברים לצדדים שלישיים לצורך שיווק, ואינם משמשים לכל
            מטרה מלבד מענה לפנייתכם.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            שמירת מידע
          </h2>
          <p className="mt-2">
            הודעות שמתקבלות בטופס יצירת הקשר נשמרות בתיבת הדוא&quot;ל שלנו
            למשך הזמן הדרוש לשם מענה לפנייה ומעקב אחריה, ואינן מאוחסנות
            במאגר מידע נפרד באתר.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-sepia-50">
            הזכויות שלכם
          </h2>
          <p className="mt-2">
            אתם רשאים לבקש בכל עת לעיין בפרטים שמסרתם, לתקן אותם או למחוק
            אותם — פשוט צרו קשר{" "}
            <Link
              href="/contact"
              className="text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
            >
              דרך טופס יצירת הקשר
            </Link>
            .
          </p>
        </div>

        <p className="border-t border-gold-400/15 pt-4 text-xs text-sepia-300">
          מדיניות זו עודכנה לאחרונה בספטמבר 2026.
        </p>
      </div>
    </div>
  );
}
