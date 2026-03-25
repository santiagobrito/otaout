import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/blog/articles";

const BASE_URL = "https://otaout.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const allArticles = getAllArticles();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: BASE_URL,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: BASE_URL,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog`,
          en: `${BASE_URL}/en/blog`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog`,
          en: `${BASE_URL}/en/blog`,
        },
      },
    },
  ];

  const articlePages: MetadataRoute.Sitemap = allArticles.flatMap((article) => [
    {
      url: `${BASE_URL}/blog/${article.slug.es}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog/${article.slug.es}`,
          en: `${BASE_URL}/en/blog/${article.slug.en}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog/${article.slug.en}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog/${article.slug.es}`,
          en: `${BASE_URL}/en/blog/${article.slug.en}`,
        },
      },
    },
  ]);

  return [...staticPages, ...articlePages];
}
