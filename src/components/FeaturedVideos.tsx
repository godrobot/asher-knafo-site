"use client";

import { useState } from "react";
import { videos, type Video } from "@/data/site";
import VideoModal from "./VideoModal";

// A small hand-picked selection of videos featured on the home page —
// currently the 90th-birthday tribute event and the AI tribute video.
const FEATURED_IDS = ["7nqeMUswJ-0", "IvPH8TdjcZc"];

export default function FeaturedVideos() {
  const [open, setOpen] = useState<Video | null>(null);
  const featured = videos.filter((v) => FEATURED_IDS.includes(v.id));

  if (featured.length === 0) return null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((video) => (
          <button
            key={video.id}
            onClick={() => setOpen(video)}
            className="card-panel group flex flex-col overflow-hidden text-right transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-sepia-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/50 bg-sepia-950/70 text-gold-200">
                  ▶
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-sepia-50 group-hover:text-gold-200">
                {video.title}
              </h3>
              <p className="mt-2 text-xs tracking-wide text-sepia-400">
                {video.channel}
              </p>
            </div>
          </button>
        ))}
      </div>
      {open ? <VideoModal video={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
