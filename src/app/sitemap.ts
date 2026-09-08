import type { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lucasgabriell.com.br";
  const posts = await getAllPosts(true);
  const categories = await getAllCategories();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  for (const post of posts) {
    routes.push({
      url: `${baseUrl}/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const cat of categories) {
    routes.push({
      url: `${baseUrl}/categoria/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return routes;
}
