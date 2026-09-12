import { NextResponse } from "next/server";
import {
  academicContribution,
  awards,
  bio,
  siteInfo,
  timelineMilestones,
} from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// Plain-Markdown twin of /about, generated from the same data source, so
// LLMs and other text-based agents can read the real biography without
// parsing HTML/CSS. See /llms.txt for the full site index.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${siteInfo.name} — אודות`);
  lines.push("");
  lines.push(`Source: ${SITE_URL}/about`);
  lines.push("");
  for (const p of bio.paragraphs) lines.push(p, "");

  lines.push("## ציוני דרך");
  lines.push("");
  for (const m of timelineMilestones) lines.push(`- **${m.year}** — ${m.label}`);
  lines.push("");

  lines.push(`## ${academicContribution.heading}`);
  lines.push("");
  for (const p of academicContribution.paragraphs) lines.push(p, "");

  lines.push("## פרסים והוקרה");
  lines.push("");
  for (const a of awards) {
    lines.push(`- **${a.year} — ${a.name}** (${a.body})${a.description ? `: ${a.description}` : ""}`);
  }
  lines.push("");

  lines.push(`הערך על אשר כנפו בוויקיפדיה: ${siteInfo.wikipediaUrl}`);

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
