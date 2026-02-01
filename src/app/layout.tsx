import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import de from "@/locales/de.json";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: de.metadata.title,
    template: `%s | ${de.metadata.title}`,
  },
  description: de.metadata.description,
  applicationName: de.site.name,
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
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/bad/badewanne.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: de.metadata.title,
    description: de.metadata.description,
    images: ["/images/bad/badewanne.png"],
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
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: de.impressum.company,
    description: de.metadata.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: de.impressum.address.line1,
      postalCode: de.impressum.address.line2.split(" ")[0],
      addressLocality: de.impressum.address.line2.split(" ").slice(1).join(" "),
      addressCountry: "DE",
    },
    telephone: de.impressum.phone,
    email: de.impressum.email,
  };

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    jsonLd.url = process.env.NEXT_PUBLIC_SITE_URL;
  }

  return (
    <html lang="de" suppressHydrationWarning={true}>
      <body className={`${manrope.variable} ${fraunces.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
