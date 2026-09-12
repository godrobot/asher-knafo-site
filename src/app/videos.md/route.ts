import { NextResponse } from "next/server";
import { siteInfo, videos } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// Plain-Markdown twin of /videos. See /llms.txt for the full site index.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${siteInfo.name} — סרטונים`);
  lines.push("");
  lines.push(`Source: ${SITE_URL}/videos`);
  lines.push("");

  const groups = Array.from(new Set(videos.map((v) => v.group)));
  for (const group of groups) {
    lines.push(`## ${group}`);
    lines.push("");
    for (const v of videos.filter((v) => v.group === group)) {
      lines.push(`- [${v.title}](${v.url}) — ${v.channel}`);
    }
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
