import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: "https://www.izky.dev",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.izky.dev/blog",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.izky.dev/projects",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.izky.dev/blog/me",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.izky.dev/projects/calculizky",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.izky.dev/projects/dividizky",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.izky.dev/projects/bitacorizky",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.izky.dev/projects/planizky",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
