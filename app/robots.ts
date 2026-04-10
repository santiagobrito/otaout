import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/aviso-legal",
          "/privacidad",
          "/cookies",
          "/en/aviso-legal",
          "/en/privacidad",
          "/en/cookies",
        ],
      },
    ],
    sitemap: "https://otaout.com/sitemap.xml",
  };
}
