import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog/articles";

const BASE_URL = "https://otaout.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

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

  const articlePages: MetadataRoute.Sitemap = slugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog/${slug}`,
          en: `${BASE_URL}/en/blog/${slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog/${slug}`,
          en: `${BASE_URL}/en/blog/${slug}`,
        },
      },
    },
  ]);

  return [...staticPages, ...articlePages];
}
