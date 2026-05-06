import type { MetadataRoute } from "next";
import { siteConfig } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
