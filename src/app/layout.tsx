import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import de from "@/locales/de.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: de.metadata.title,
  description: de.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
