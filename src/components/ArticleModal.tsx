"use client";

import { useEffect } from "react";
import type { BritArticle } from "@/data/site";
import LinkedText from "./LinkedText";
import { siteLinks } from "@/lib/keyword-links";

export default function ArticleModal({
  article,
  onClose,
}: {
  article: BritArticle;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="card-panel relative w-full max-w-2xl border-gold-400/30 p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="סגור"
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors hover:bg-gold-400/10"
        >
          ✕
        </button>
        <p className="text-xs tracking-widest text-gold-400">
          ברית {article.issue} · {article.category}
        </p>
        <h2 className="font-display mt-3 text-2xl font-bold text-sepia-50 sm:text-3xl">
          {article.title}
        </h2>
        <p className="mt-2 text-sm text-sepia-400">מאת {article.author}</p>
        <div className="zellige-divider my-6">
          <span className="zellige-star" />
        </div>
        <div className="space-y-4">
          {article.body.map((p, i) => (
            <p key={i} className="text-base leading-8 text-sepia-200">
              <LinkedText text={p} rules={siteLinks} />
            </p>
          ))}
        </div>
        <p className="mt-8 border-t border-gold-400/15 pt-4 text-xs leading-6 text-sepia-500">
          {"התקציר המורחב שלעיל נכתב עבור אתר זה ומיועד להמחיש את תוכן המאמר; הטקסט המלא רואה אור בגיליון " +
            article.issue +
            ' של כתב העת "ברית".'}
        </p>
      </div>
    </div>
  );
}
