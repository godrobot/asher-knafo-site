"use client";

import { useState } from "react";
import { pressArticles, type PressArticle } from "@/data/site";
import PressModal from "./PressModal";

export default function PressList() {
  const [open, setOpen] = useState<PressArticle | null>(null);

  return (
    <>
      <div className="space-y-8">
        {pressArticles.map((article) => (
          <button
            key={article.url}
            onClick={() => setOpen(article)}
            className="card-panel group block w-full p-8 text-right transition-transform hover:-translate-y-1"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-xs uppercase tracking-widest text-gold-400">
                {article.outlet}
              </p>
              <span className="text-xs tracking-widest text-gold-400">
                {article.date}
              </span>
            </div>
            <h2 className="font-display mt-2 text-xl font-bold text-sepia-50 group-hover:text-gold-200 sm:text-2xl">
              {article.title}
            </h2>
            <p className="mt-4 line-clamp-2 text-base leading-8 text-sepia-200">
              {article.description}
            </p>
            <span className="mt-4 inline-block text-xs text-gold-300 underline decoration-gold-400/40 underline-offset-4">
              קראו עוד ←
            </span>
          </button>
        ))}
      </div>
      {open ? <PressModal article={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
