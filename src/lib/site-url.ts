// Central place for the site's public URL, used for canonical links,
// Open Graph tags, JSON-LD, and the sitemap. Set NEXT_PUBLIC_SITE_URL in
// the Vercel project once a custom domain is attached; until then this
// falls back to the current deployment URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://asher-knafo-site-merav-knafos-projects.vercel.app";
