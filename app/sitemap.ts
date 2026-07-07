import type { MetadataRoute } from "next";
import { categories, FIXED_EXAM_COUNT } from "@/lib/questions";
import { provinces } from "@/lib/provinces";

const SITE_URL = "https://ehliyetal.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sinav",
    "/sinav/pratik",
    "/sozluk",
    "/isaretler",
    "/rehber",
    "/rehber/ehliyet-sinavi-ucretleri-2026",
    "/rehber/ehliyet-sinavi-basvurusu-nasil-yapilir",
    "/rehber/il",
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

  const fixedExamRoutes = Array.from({ length: FIXED_EXAM_COUNT }, (_, i) => ({
    url: `${SITE_URL}/sinav/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const provinceRoutes = provinces.map((province) => ({
    url: `${SITE_URL}/rehber/il/${province.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...fixedExamRoutes, ...provinceRoutes];
}
