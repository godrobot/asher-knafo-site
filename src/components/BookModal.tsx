"use client";

import { useEffect } from "react";
import type { Book } from "@/data/site";
import BookCover from "./BookCover";

export default function BookModal({
  book,
  onClose,
}: {
  book: Book;
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
        className="card-panel relative grid w-full max-w-2xl gap-6 border-gold-400/30 p-8 sm:grid-cols-[auto_1fr] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="סגור"
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors hover:bg-gold-400/10"
        >
          ✕
        </button>

        <BookCover
          book={book}
          className="mx-auto h-56 w-36 flex-shrink-0 sm:mx-0"
          titleClassName="text-sm"
        />

        <div>
          <p className="text-xs tracking-widest text-gold-400">{book.year}</p>
          <h2 className="font-display mt-2 text-2xl font-bold text-sepia-50 sm:text-3xl">
            {book.title}
          </h2>
          <p className="mt-1 text-xs uppercase tracking-wide text-sepia-400">
            {book.genre}
          </p>
          <div className="zellige-divider my-6 sm:justify-start">
            <span className="zellige-star" />
          </div>
          <p className="text-base leading-8 text-sepia-200">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}
