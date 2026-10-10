import type { Metadata } from "next";
import { siteUrl } from "./constants";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + "/"),
  title: {
    default: "Firma Andreas Mucha | Handwerk in Lichtenberg",
    template: "%s | Firma Andreas Mucha",
  },
  description:
    "Heizung, Bad und Sanitär, Haustechnik, Dacharbeiten und Kesselwartung: Firma Andreas Mucha aus Lichtenberg. Nehmen Sie persönlich Kontakt auf.",
  alternates: { canonical: siteUrl + "/" },
  openGraph: {
    title: "Firma Andreas Mucha – Handwerk aus Lichtenberg",
    description:
      "Heizung, Bad, Haustechnik, Dach und Kesselwartung. Persönlicher Kontakt für Ihr Vorhaben.",
    url: siteUrl + "/",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: siteUrl + "/images/optimized/bad-960.webp",
        width: 960,
        height: 720,
        alt: "Badprojekt der Firma Andreas Mucha",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#hauptinhalt">
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
