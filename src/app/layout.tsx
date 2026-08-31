import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-url";

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
  jobTitle: "סופר וחוקר",
  url: SITE_URL,
  sameAs: ["https://facebook.com/1339880709198479"],
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
