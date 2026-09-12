import Link from "next/link";
import type { ReactNode } from "react";

export type LinkRule = { match: string; href: string };

// Renders `text` as plain text, except that each occurrence of a rule's
// `match` substring becomes an internal <Link> to its `href`. Rules are
// applied left-to-right through the string (earliest match wins at each
// step), so a single paragraph can link several different keywords to
// several different pages. Used to add real, relevant internal links
// between pages (e.g. mentioning "שירת האבנים" in the About page links to
// the Poems page) without hand-splitting every paragraph into JSX.
export default function LinkedText({
  text,
  rules,
  className,
}: {
  text: string;
  rules: LinkRule[];
  className?: string;
}) {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliestIndex = -1;
    let earliestRule: LinkRule | null = null;

    for (const rule of rules) {
      const idx = remaining.indexOf(rule.match);
      if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
        earliestIndex = idx;
        earliestRule = rule;
      }
    }

    if (!earliestRule) {
      nodes.push(remaining);
      break;
    }

    if (earliestIndex > 0) {
      nodes.push(remaining.slice(0, earliestIndex));
    }
    nodes.push(
      <Link
        key={`lk-${key++}`}
        href={earliestRule.href}
        className={
          className ??
          "text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-200"
        }
      >
        {earliestRule.match}
      </Link>
    );
    remaining = remaining.slice(earliestIndex + earliestRule.match.length);
  }

  return <>{nodes}</>;
}
