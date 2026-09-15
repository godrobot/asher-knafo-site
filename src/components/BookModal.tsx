"use client";

import { useEffect } from "react";
import type { Book } from "@/data/site";
import BookCover from "./BookCover";
import LinkedText from "./LinkedText";
import { siteLinksExcept } from "@/lib/keyword-links";

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
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
        className="card-panel relative grid w-full max-w-2xl items-start gap-6 border-gold-400/30 p-8 sm:grid-cols-[144px_1fr] sm:p-10"
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
          className="mx-auto sm:mx-0"
          titleClassName="text-sm"
          width={144}
          height={216}
        />

        <div>
          <p className="text-xs tracking-widest text-gold-400">{book.year}</p>
          <h2
            id="book-modal-title"
            className="font-display mt-2 text-2xl font-bold text-sepia-50 sm:text-3xl"
          >
            {book.title}
          </h2>
          <p className="mt-1 text-xs uppercase tracking-wide text-sepia-300">
            {book.genre}
          </p>
          <div className="zellige-divider my-6 sm:justify-start">
            <span className="zellige-star" />
          </div>
          <p className="text-base leading-8 text-sepia-200">
            <LinkedText text={book.description} rules={siteLinksExcept(`/books#${book.slug}`)} />
          </p>

          {book.publisher || book.edition ? (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 border-t border-gold-400/15 pt-4 text-sm text-sepia-300">
              {book.publisher ? (
                <p>
                  <span className="text-sepia-300">הוצאה: </span>
                  {book.publisher}
                </p>
              ) : null}
              {book.edition ? (
                <p>
                  <span className="text-sepia-300">מהדורות: </span>
                  {book.edition}
                </p>
              ) : null}
            </div>
          ) : null}

          {book.adaptations ? (
            <p className="mt-3 text-sm leading-7 text-sepia-300">
              <LinkedText text={book.adaptations} rules={siteLinksExcept(`/books#${book.slug}`)} />
            </p>
          ) : null}

          {book.reviewQuotes && book.reviewQuotes.length > 0 ? (
            <div className="mt-6 space-y-4">
              {book.reviewQuotes.map((quote, i) => (
                <blockquote
                  key={i}
                  className="border-r-2 border-gold-400/40 pr-4 text-sm leading-7 text-sepia-200"
                >
                  <p className="italic">&rdquo;{quote.text}&ldquo;</p>
                  <footer className="mt-2 text-xs tracking-wide text-gold-400">
                    {quote.author}
                    {quote.source ? (
                      <span className="text-sepia-300"> · {quote.source}</span>
                    ) : null}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
