"use client";

import { useEffect } from "react";
import type { PressArticle } from "@/data/site";
import LinkedText from "./LinkedText";
import { siteLinks } from "@/lib/keyword-links";

export default function PressModal({
  article,
  onClose,
}: {
  article: PressArticle;
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
        role="dialog"
        aria-modal="true"
        aria-labelledby="press-modal-title"
        className="card-panel relative w-full max-w-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="סגור"
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors hover:bg-gold-400/10"
        >
          ✕
        </button>

        <div className="flex flex-col gap-2 pl-12 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-xs uppercase tracking-widest text-gold-400">
            {article.outlet}
          </p>
          <span className="text-xs tracking-widest text-gold-400">
            {article.date}
          </span>
        </div>
        <h2
          id="press-modal-title"
          className="font-display mt-2 max-w-[calc(100%-3rem)] text-xl font-bold text-sepia-50 sm:text-2xl"
        >
          {article.title}
        </h2>

        <div className="zellige-divider my-6 sm:justify-start">
          <span className="zellige-star" />
        </div>

        <p className="text-base leading-8 text-sepia-200">
          <LinkedText text={article.description} rules={siteLinks} />
        </p>

        <p className="mt-6 text-xs uppercase tracking-widest text-gold-400">
          מתוך הכתבה
        </p>
        <blockquote className="mt-2 border-r-2 border-gold-400/40 pr-4 text-base italic leading-8 text-sepia-100">
          &rdquo;{article.quote}&ldquo;
          {article.author ? (
            <footer className="mt-2 text-xs not-italic tracking-wide text-gold-400">
              — {article.author}, {article.outlet}
            </footer>
          ) : (
            <footer className="mt-2 text-xs not-italic tracking-wide text-gold-400">
              — מתוך הכתבה ב{article.outlet}
            </footer>
          )}
        </blockquote>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-xs text-gold-300 underline decoration-gold-400/40 underline-offset-4"
        >
          קראו את הכתבה המלאה באתר המקור ←
        </a>
      </div>
    </div>
  );
}
