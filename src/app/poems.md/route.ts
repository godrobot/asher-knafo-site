import { NextResponse } from "next/server";
import { poemSamples, poetryWorks, siteInfo } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// Plain-Markdown twin of /poems. See /llms.txt for the full site index.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${siteInfo.name} — שירה`);
  lines.push("");
  lines.push(`Source: ${SITE_URL}/poems`);
  lines.push("");

  lines.push("## יצירות");
  lines.push("");
  for (const w of poetryWorks) {
    lines.push(`### ${w.title} (${w.year})`);
    lines.push("");
    lines.push(`*${w.kind}*${w.author ? ` — ${w.author}` : ""}`);
    lines.push("");
    lines.push(w.description);
    lines.push("");
  }

  lines.push("## מבחר שירים");
  lines.push("");
  for (const s of poemSamples) {
    lines.push(`### ${s.title} — ${s.author}`);
    lines.push("");
    lines.push(`_${s.context}_`);
    lines.push("");
    for (const line of s.lines) lines.push(line + "  ");
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
