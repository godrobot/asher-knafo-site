import { books, editorialWorks, poetryWorks } from "@/data/site";
import type { LinkRule } from "@/components/LinkedText";

// Central place for internal-linking rules, generated straight from the
// site's own data (book/poem/editorial-work titles → their real page
// anchor) so a link can never point at a title that's been renamed or
// removed. Order matters: LinkedText resolves ties by rule order, so more
// specific/primary targets are listed first — see the dedup logic below.

export const bookLinks: LinkRule[] = books.map((b) => ({
  match: b.title,
  href: `/books#${b.slug}`,
}));
const bookTitles = new Set(books.map((b) => b.title));

// Editorial works (translations/edited volumes) get their own anchor on
// the Books page (see the `id={w.slug}` added there) — skip any title
// that's already an original book (shouldn't happen, but keeps ties clean).
export const editorialLinks: LinkRule[] = editorialWorks
  .filter((w) => !bookTitles.has(w.title))
  .map((w) => ({ match: w.title, href: `/books#${w.slug}` }));
const editorialTitles = new Set(editorialWorks.map((w) => w.title));

// A few works are cross-listed (e.g. "שירת האבנים" is both a published book
// and a poetry-research entry, "סודות נלחשים" is both an editorial work and
// a poem-page entry) — when a title already links from Books, don't add a
// second, conflicting rule for the same exact title from Poems.
export const poemLinks: LinkRule[] = poetryWorks
  .filter((w) => !bookTitles.has(w.title) && !editorialTitles.has(w.title))
  .map((w) => ({ match: w.title, href: `/poems#${w.slug}` }));

// Manual entries for phrasing that doesn't exactly match a title field, and
// for concepts (not "works") that still deserve a link.
export const yachinBioPhrase: LinkRule = {
  match: "יכין: על משנתו החינוכית ערכית של רבי יוסף כנאפו",
  href: "/books#yachin",
};
// Matches the quoted form only ("ברית") so it never catches the unrelated
// publisher name "אות ברית קודש".
export const britLink: LinkRule = { match: '"ברית"', href: "/brit" };

// The full combined set — safe to use on any page that isn't itself one of
// the linked targets (an About-page paragraph, a press write-up, etc).
export const siteLinks: LinkRule[] = [
  yachinBioPhrase,
  ...bookLinks,
  ...editorialLinks,
  ...poemLinks,
  britLink,
];

// Use on a page that itself hosts one of the anchors (Books, Poems) to
// avoid a pointless link from an item's own text back to itself.
export function siteLinksExcept(href: string): LinkRule[] {
  return siteLinks.filter((r) => r.href !== href);
}
