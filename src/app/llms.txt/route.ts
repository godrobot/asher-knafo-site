import { NextResponse } from "next/server";
import {
  awards,
  books,
  editorialWorks,
  poetryWorks,
  pressArticles,
  siteInfo,
  videos,
} from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

// llms.txt — a machine-readable index for LLMs and AI research agents,
// following the convention at https://llmstxt.org/. It gives a compact,
// English-language map of the site (name, summary, and links to every
// section) plus links to the clean-markdown twin of each page
// (see the *.md route handlers) so an agent doesn't have to parse HTML/CSS
// to get the real content. Regenerated on every request straight from
// src/data/site.ts, so it can never drift out of sync with the live site.
export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];

  lines.push("# Asher Knafo (אשר כנפו)");
  lines.push("");
  lines.push(
    `> ${siteInfo.tagline}. Official website documenting the history and folk culture of Moroccan and North African Jewry — books, poetry, the bilingual journal "Brit" (ברית), and the tombstone-poetry research project "Shirat HaAvanim" (שירת האבנים).`
  );
  lines.push("");
  lines.push(
    "Asher Knafo (b. 1935, Essaouira/Mogador, Morocco) is an Israeli writer, educator and independent researcher of Moroccan Jewish heritage. He founded \"Ziv HaMaarav\" (the association for preserving North African Jewish heritage), which led to the founding of the Israeli Andalusian Orchestra; has edited the bilingual (Hebrew/French) journal \"Brit\" since 1982, now past 40 issues; and, with Dr. Shalom Eldar, spent roughly a decade documenting and deciphering over a thousand Hebrew tombstone inscriptions in the two Jewish cemeteries of Mogador, published as \"Shirat HaAvanim\" (2023). The site is in Hebrew (RTL); this file and the linked .md files summarize it in English for machine readers, but the linked pages themselves are the authoritative Hebrew source.",
  );
  lines.push("");

  lines.push("## Primary pages");
  lines.push("");
  lines.push(`- [Home](${SITE_URL}/): overview and introduction.`);
  lines.push(
    `- [About / Biography](${SITE_URL}/about) — plain text: [about.md](${SITE_URL}/about.md): full biography, life timeline, and academic contribution (the "Brit" journal and the "Shirat HaAvanim" research project).`
  );
  lines.push(
    `- [Books](${SITE_URL}/books) — plain text: [books.md](${SITE_URL}/books.md): ${books.length} original literary works (historical novels, memoir, folk humor, research) plus ${editorialWorks.length} translated/edited volumes.`
  );
  lines.push(
    `- [Poetry](${SITE_URL}/poems) — plain text: [poems.md](${SITE_URL}/poems.md): ${poetryWorks.length} works — original poetry, poetry translations, and the "Shirat HaAvanim" tombstone-poetry research.`
  );
  lines.push(
    `- [Brit journal](${SITE_URL}/brit) — plain text: [brit.md](${SITE_URL}/brit.md): the bilingual Hebrew/French journal on Moroccan Jewish communities that Asher Knafo has edited since 1982.`
  );
  lines.push(
    `- [Press coverage](${SITE_URL}/press) — plain text: [press.md](${SITE_URL}/press.md): ${pressArticles.length} real, verified press articles about Asher Knafo (not written by him), with outlet, date, source URL, and a verbatim excerpt from each.`
  );
  lines.push(
    `- [Videos](${SITE_URL}/videos) — plain text: [videos.md](${SITE_URL}/videos.md): ${videos.length} real YouTube videos featuring or about Asher Knafo.`
  );
  lines.push(`- [Contact](${SITE_URL}/contact): contact form for inquiries.`);
  lines.push("");

  lines.push("## Key facts");
  lines.push("");
  lines.push("- Born: 1935, Essaouira (Mogador), Morocco.");
  lines.push("- Immigrated to Israel: 1951.");
  lines.push(
    '- Founder (1977) of "Ziv HaMaarav" (זיו המערב), the association for preserving North African Jewish heritage, whose activity led to the founding of the Israeli Andalusian Orchestra (1994).'
  );
  lines.push(
    '- Editor since 1982 of "Brit" (ברית), the bilingual Hebrew/French journal of Moroccan Jewry, now past 40 issues.'
  );
  lines.push(
    `- With Dr. Shalom Eldar, authored "Shirat HaAvanim" (שירת האבנים, 2023) — documentation and decipherment of over a thousand Hebrew tombstone inscriptions in the Jewish cemeteries of Mogador, some dating to 1764.`
  );
  for (const award of awards.slice(0, 4)) {
    lines.push(`- ${award.year}: ${award.name} (${award.body}).`);
  }
  lines.push(
    `- Wikipedia (Hebrew): ${siteInfo.wikipediaUrl}`
  );
  lines.push("");

  lines.push("## Notes for automated agents");
  lines.push("");
  lines.push(
    "- All content is real and independently sourced (family archive, Asher Knafo's own CV/bibliography, and verified third-party press coverage) — nothing on this site is fabricated or AI-generated as fact."
  );
  lines.push(
    "- The .md files linked above mirror each page's real text content as plain Markdown, generated directly from the same data source as the live pages, for easier parsing than the rendered HTML."
  );
  lines.push(`- Canonical domain: ${SITE_URL}`);

  return lines.join("\n") + "\n";
}

export function GET() {
  return new NextResponse(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
