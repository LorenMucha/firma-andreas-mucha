import type { Metadata } from "next";
import ImpressumPage from "./Impressum";
import de from "@/locales/de.json";

export const metadata: Metadata = {
  title: `Impressum | ${de.metadata.title}`,
  description: `${de.impressum.company} – Impressum und rechtliche Angaben.`,
};

export default function Page() {
  return <ImpressumPage />;
}
