import { NextResponse } from "next/server";
import { books, editorialWorks, siteInfo } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// Plain-Markdown twin of /books. See /llms.txt for the full site index.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${siteInfo.name} — ספרים`);
  lines.push("");
  lines.push(`Source: ${SITE_URL}/books`);
  lines.push("");

  lines.push("## יצירה מקורית");
  lines.push("");
  for (const b of books) {
    lines.push(`### ${b.title} (${b.year})`);
    lines.push("");
    lines.push(`*${b.genre}*`);
    lines.push("");
    lines.push(b.description);
    lines.push("");
    if (b.publisher) lines.push(`הוצאה: ${b.publisher}`);
    if (b.edition) lines.push(`מהדורה: ${b.edition}`);
    if (b.adaptations) lines.push(`עיבודים: ${b.adaptations}`);
    if (b.reviewQuotes?.length) {
      lines.push("");
      lines.push("ביקורות:");
      for (const q of b.reviewQuotes) {
        lines.push(`> "${q.text}" — ${q.author}${q.source ? `, ${q.source}` : ""}`);
      }
    }
    lines.push("");
  }

  lines.push("## תרגומים ועריכה");
  lines.push("");
  for (const w of editorialWorks) {
    lines.push(
      `- **${w.title}**${w.originalTitle ? ` (${w.originalTitle})` : ""}, ${w.year} — ${w.role}${w.author ? ` מאת ${w.author}` : ""}: ${w.description}`
    );
  }
  lines.push("");

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
