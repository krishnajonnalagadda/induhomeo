import { MetadataRoute } from "next";
import { getConditionSlugs } from "@/lib/conditions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drindushomeopathy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const conditionSlugs = getConditionSlugs();
  const conditionUrls = conditionSlugs.map((slug) => ({
    url: `${baseUrl}/conditions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/womens-health`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/childrens-health`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/conditions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...conditionUrls,
  ];
}
