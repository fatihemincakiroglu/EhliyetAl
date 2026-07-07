import type { MetadataRoute } from "next";
import { categories } from "@/lib/questions";

const SITE_URL = "https://ehliyetal.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sinav",
    "/sozluk",
    "/isaretler",
    "/rehber",
    "/rehber/ehliyet-sinavi-ucretleri-2026",
    "/rehber/ehliyet-sinavi-basvurusu-nasil-yapilir",
    "/ara",
    "/iletisim",
    "/menu",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${SITE_URL}/quiz/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
