// Central place for the site's public URL, used for canonical links,
// Open Graph tags, JSON-LD, and the sitemap. This used to fall back to the
// raw Vercel deployment URL because NEXT_PUBLIC_SITE_URL was never set —
// which meant every page told browsers/apps that its "real" address was
// the vercel.app one, so sharing the site (Chrome's share sheet, link
// previews, etc.) surfaced that URL instead of the custom domain. Now that
// asherknafo.com is live, that's the correct default.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asherknafo.com";
