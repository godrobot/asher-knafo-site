"use client";

import { useState } from "react";
import { videos, type Video } from "@/data/site";
import VideoModal from "./VideoModal";

// Group videos by their `group` label, preserving each group's first
// appearance order and the order of videos within it.
function groupVideos(list: Video[]) {
  const order: string[] = [];
  const byGroup = new Map<string, Video[]>();
  for (const v of list) {
    if (!byGroup.has(v.group)) {
      byGroup.set(v.group, []);
      order.push(v.group);
    }
    byGroup.get(v.group)!.push(v);
  }
  return order.map((group) => ({ group, items: byGroup.get(group)! }));
}

export default function VideosList() {
  const [open, setOpen] = useState<Video | null>(null);
  const sections = groupVideos(videos);

  return (
    <>
      <div className="space-y-16">
        {sections.map(({ group, items }) => (
          <section key={group}>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-display whitespace-nowrap text-xl font-bold text-gold-300 sm:text-2xl">
                {group}
              </h2>
              <span className="h-px flex-1 bg-gold-400/20" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((video) => (
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
                    <p className="mt-2 text-xs tracking-wide text-sepia-300">
                      {video.channel}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      {open ? <VideoModal video={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
