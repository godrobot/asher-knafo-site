"use client";

import { useState } from "react";
import { britMagazine, type BritArticle } from "@/data/site";
import ArticleModal from "@/components/ArticleModal";

export default function BritArticles() {
  const [open, setOpen] = useState<BritArticle | null>(null);

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {britMagazine.articles.map((article) => (
          <button
            key={article.title}
            onClick={() => setOpen(article)}
            className="card-panel group flex flex-col p-6 text-right transition-transform hover:-translate-y-1"
          >
            <span className="text-xs tracking-widest text-gold-400">
              ברית {article.issue} · {article.category}
            </span>
            <h3 className="font-display mt-2 text-lg font-bold text-sepia-50 group-hover:text-gold-200">
              {article.title}
            </h3>
            <p className="mt-1 text-sm text-sepia-300">מאת {article.author}</p>
            <p className="mt-3 line-clamp-3 text-sm leading-7 text-sepia-300">
              {article.excerpt}
            </p>
            <span className="mt-4 text-xs text-gold-300 underline decoration-gold-400/40 underline-offset-4">
              קראו את המאמר ←
            </span>
          </button>
        ))}
      </div>
      {open ? <ArticleModal article={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
