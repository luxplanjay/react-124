import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://localhost:3000",
      lastModified: new Date(),
    },
  ];
}
