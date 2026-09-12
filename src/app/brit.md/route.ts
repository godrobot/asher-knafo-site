import { NextResponse } from "next/server";
import { britMagazine, siteInfo } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// Plain-Markdown twin of /brit. See /llms.txt for the full site index.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${siteInfo.name} — ${britMagazine.title}: ${britMagazine.subtitle}`);
  lines.push("");
  lines.push(`Source: ${SITE_URL}/brit`);
  lines.push("");
  lines.push(britMagazine.description);
  lines.push("");
  lines.push(
    `הגיליון האחרון: מס' ${britMagazine.latestIssue.number} — ${britMagazine.latestIssue.focus}`
  );
  lines.push("");

  lines.push("## גיליונות נבחרים");
  lines.push("");
  for (const issue of britMagazine.pastIssues) {
    lines.push(`- גיליון ${issue.number}: ${issue.focus}`);
  }
  lines.push("");

  lines.push("## מאמרים נבחרים מתוך הגיליון האחרון");
  lines.push("");
  for (const a of britMagazine.articles) {
    lines.push(`### ${a.title} — ${a.author} (גיליון ${a.issue}, ${a.category})`);
    lines.push("");
    lines.push(a.excerpt);
    lines.push("");
    for (const p of a.body) lines.push(p, "");
  }

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
