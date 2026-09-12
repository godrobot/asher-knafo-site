import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-url";
import { siteInfo } from "@/data/site";

const title = "אשר כנפו | סופר וחוקר יהדות מרוקו";
const description =
  "האתר הרשמי של אשר כנפו — סופר, חוקר יהדות מרוקו ומורשת יהודי צפון אפריקה (Moroccan Jews). ספרים, שירה, כתב העת ברית, ותיעוד היסטורי של קהילות יהודי מרוקו ומוגדור-אסאווירה.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s",
  },
  description,
  keywords: [
    "אשר כנפו",
    "Asher Knafo",
    "יהדות מרוקו",
    "יהודי מרוקו",
    "Moroccan Jews",
    "Moroccan Jewish heritage",
    "Morocco Jewish history research",
    "מוגדור",
    "אסאווירה",
    "Mogador Essaouira",
    "כתב עת ברית",
    "שירת האבנים",
    "הכינור ואני",
    "התינוק מאופראן",
    // Phrases a journalist, producer, or researcher looking for an
    // interview subject might actually search for.
    "Moroccan Jews expert",
    "Moroccan Jewish heritage expert",
    "expert on Moroccan Jewish history",
    "North African Jewish heritage researcher",
    "Mogador Essaouira Jewish history expert",
    "Moroccan Jewish cemetery inscriptions researcher",
  ],
  authors: [{ name: "אשר כנפו" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "אשר כנפו",
    title,
    description,
    url: SITE_URL,
    images: [{ url: "/images/hero-asher-reading.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-asher-reading.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "אשר כנפו",
  alternateName: "Asher Knafo",
  description:
    "סופר וחוקר יהדות מרוקו, עורך כתב העת הדו־לשוני ברית ומייסד זיו המערב — האגודה לשימור מורשת יהדות צפון אפריקה.",
  birthDate: "1935-09-16",
  birthPlace: {
    "@type": "Place",
    name: "מוגדור (אסאווירה), מרוקו",
  },
  nationality: "Israeli",
  jobTitle: "סופר וחוקר יהדות מרוקו (Writer and Researcher of Moroccan Jewish Heritage)",
  // Explicit subject-matter tags — helps search engines and AI assistants
  // surface this profile for journalists/producers researching these
  // specific topics, e.g. someone searching "Moroccan Jews expert" for an
  // interview subject.
  knowsAbout: [
    "Moroccan Jewish history",
    "Moroccan Jewish heritage",
    "North African Jewish heritage",
    "Jewish community of Mogador (Essaouira)",
    "Moroccan Jewish cemetery inscriptions",
    "Sephardic and Moroccan Jewish culture",
  ],
  url: SITE_URL,
  // Linking these here helps search engines connect this Person entity to
  // the same person's existing profiles elsewhere (useful for Knowledge
  // Graph-style entity resolution) — same reasoning that made adding the
  // Wikipedia link to the About page worthwhile.
  sameAs: [
    "https://facebook.com/1339880709198479",
    siteInfo.wikipediaUrl,
    siteInfo.linkedinUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
