import { NextResponse } from "next/server";
import { pressArticles, siteInfo } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// Plain-Markdown twin of /press. See /llms.txt for the full site index.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${siteInfo.name} — בעיתונות`);
  lines.push("");
  lines.push(`Source: ${SITE_URL}/press`);
  lines.push("");
  lines.push(
    "כתבות עיתונות ומגזינים אמיתיות על אשר כנפו ופועלו (לא כתובות על ידו) — עם קישור למקור, תאריך, ומובאה מדויקת מגוף הכתבה."
  );
  lines.push("");

  for (const a of pressArticles) {
    lines.push(`## ${a.title}`);
    lines.push("");
    lines.push(`${a.outlet}${a.author ? ` — ${a.author}` : ""}, ${a.date}`);
    lines.push("");
    lines.push(a.description);
    lines.push("");
    lines.push(`> ${a.quote}`);
    lines.push("");
    lines.push(`מקור: ${a.url}`);
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
