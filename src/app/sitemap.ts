import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lucasgabriel-site.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/#o-problema`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/#a-solucao`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/#os-5-pilares`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/#como-funciona`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/#para-quem`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/#sobre`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
  ];
}
