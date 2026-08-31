import Link from "next/link";
import { siteInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gold-400/20 bg-sepia-900/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="zellige-divider mb-8">
          <span className="zellige-star" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-lg gold-text">אשר כנפו</p>
          <p className="max-w-md text-sm leading-7 text-sepia-300">
            סופר וחוקר יהדות מרוקו — מתעד את מורשת יהודי צפון אפריקה למען
            הדורות הבאים.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href={siteInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sepia-300 hover:text-gold-300"
            >
              פייסבוק
            </a>
            <Link href="/contact" className="text-sepia-300 hover:text-gold-300">
              צור קשר
            </Link>
          </div>
          <p className="mt-6 text-xs text-sepia-400">
            © {new Date().getFullYear()} אשר כנפו. כל הזכויות שמורות.
          </p>
          <p className="text-[10px] text-sepia-500">v{siteInfo.version}</p>
        </div>
      </div>
    </footer>
  );
}
