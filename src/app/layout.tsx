import type { Metadata } from "next";
import "./globals.css";
import de from "@/locales/de.json";
import { siteConfig } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: de.metadata.title,
    template: `%s | ${de.metadata.title}`,
  },
  description: de.metadata.description,
  applicationName: de.site.name,
  authors: [{ name: de.impressum.ownerName }],
  creator: de.impressum.ownerName,
  publisher: de.impressum.company,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: de.metadata.title,
    description: de.metadata.description,
    siteName: de.site.name,
    url: siteConfig.siteUrl,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/dach/kupfer.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: de.metadata.title,
    description: de.metadata.description,
    images: ["/images/dach/kupfer.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const postalCode = de.impressum.address.line2.split(" ")[0];
  const locality = de.impressum.address.line2.split(" ").slice(1).join(" ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Plumber", "HVACBusiness", "RoofingContractor"],
        "@id": `${siteConfig.siteUrl}/#business`,
        name: de.impressum.company,
        description: de.metadata.description,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phoneHref,
        email: siteConfig.email,
        image: [
          `${siteConfig.siteUrl}/images/dach/kupfer.png`,
          `${siteConfig.siteUrl}/images/bad/badewanne.png`,
          `${siteConfig.siteUrl}/images/heizung/therme.png`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: de.impressum.address.line1,
          postalCode,
          addressLocality: locality,
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.coordinates.lat,
          longitude: siteConfig.coordinates.lon,
        },
        areaServed: "Lichtenberg und Umgebung",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: [
            { "@type": "OfferCatalog", name: de.sections.bad.title },
            { "@type": "OfferCatalog", name: de.sections.heizung.title },
            { "@type": "OfferCatalog", name: de.sections.haustechnik.title },
            { "@type": "OfferCatalog", name: de.sections.dach.title },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: de.impressum.company,
        description: de.metadata.description,
        inLanguage: "de-DE",
      },
    ],
  };

  return (
    <html lang="de" suppressHydrationWarning={true}>
      <body>
        <a href="#hauptinhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
