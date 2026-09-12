"use client";

import { useEffect } from "react";
import type { Video } from "@/data/site";

export default function VideoModal({
  video,
  onClose,
}: {
  video: Video;
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
        className="card-panel relative w-full max-w-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="סגור"
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors hover:bg-gold-400/10"
        >
          ✕
        </button>

        <p className="text-xs tracking-widest text-gold-400">{video.channel}</p>
        <h2 className="font-display mt-2 text-xl font-bold text-sepia-50 sm:text-2xl">
          {video.title}
        </h2>

        <div className="zellige-divider my-6 sm:justify-start">
          <span className="zellige-star" />
        </div>

        <div className="arch-frame relative aspect-video w-full overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-xs text-gold-300 underline decoration-gold-400/40 underline-offset-4"
        >
          צפייה ביוטיוב ←
        </a>
      </div>
    </div>
  );
}
