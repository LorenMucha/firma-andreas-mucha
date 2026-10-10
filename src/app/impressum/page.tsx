import type { Metadata } from "next";
import { siteUrl } from "../constants";
import ImpressumPage from "./Impressum";
export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: siteUrl + "/impressum/" },
};
export default ImpressumPage;
