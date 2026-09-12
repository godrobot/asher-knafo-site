import type { Metadata } from "next";
import VideosList from "@/components/VideosList";

export const metadata: Metadata = {
  title: "סרטונים | אשר כנפו — סופר וחוקר יהדות מרוקו",
  description:
    "קטעי וידאו הקשורים לאשר כנפו ולפועלו — מטעם משרד החינוך, אגודת הסופרות והסופרים העברים בישראל, ותאטרון קדם.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400">מסך ובמה</p>
        <h1 className="font-display mt-3 text-4xl font-black gold-text sm:text-5xl">
          סרטונים
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sepia-300">
          קטעי וידאו הקשורים לאשר כנפו ולפועלו.
        </p>
        <div className="zellige-divider mt-8">
          <span className="zellige-star" />
        </div>
      </header>

      <VideosList />
    </div>
  );
}
