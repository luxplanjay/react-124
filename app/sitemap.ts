import { getPosts } from "@/lib/api";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getPosts();

  const postUrls = data.posts.map((post) => ({
    url: `https://localhost:3000/posts/${post.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://localhost:3000",
      lastModified: new Date(),
    },
    {
      url: "https://localhost:3000/posts",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
