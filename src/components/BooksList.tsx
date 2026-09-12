"use client";

import { useState } from "react";
import { books, type Book } from "@/data/site";
import BookCover from "./BookCover";
import BookModal from "./BookModal";

export default function BooksList() {
  const [open, setOpen] = useState<Book | null>(null);

  return (
    <>
      <div className="space-y-8">
        {books.map((book) => (
          <button
            key={book.slug}
            id={book.slug}
            onClick={() => setOpen(book)}
            className="card-panel group grid scroll-mt-24 items-start gap-6 p-8 text-right transition-transform hover:-translate-y-1 sm:grid-cols-[128px_1fr]"
          >
            <BookCover
              book={book}
              className="mx-auto sm:mx-0"
              titleClassName="text-xs"
              width={128}
              height={192}
            />
            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-display text-2xl font-bold text-sepia-50 group-hover:text-gold-200">
                  {book.title}
                </h2>
                <span className="text-xs tracking-widest text-gold-400">
                  {book.year}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-sepia-400">
                {book.genre}
              </p>
              <p className="mt-4 line-clamp-3 text-base leading-8 text-sepia-200">
                {book.description}
              </p>
              <span className="mt-4 inline-block text-xs text-gold-300 underline decoration-gold-400/40 underline-offset-4">
                קראו עוד ←
              </span>
            </div>
          </button>
        ))}
      </div>
      {open ? <BookModal book={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
