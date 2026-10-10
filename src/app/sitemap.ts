import type { MetadataRoute } from "next";
import { siteUrl } from "./constants";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/impressum/", "/datenschutz/"].map((path) => ({
    url: siteUrl + path,
  }));
}
