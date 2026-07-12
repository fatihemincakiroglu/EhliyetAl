import type { MetadataRoute } from "next";
import { categories, FIXED_EXAM_COUNT } from "@/lib/questions";
import { provinces, provincePath } from "@/lib/provinces";
import { getAllMonthlyExams } from "@/lib/monthlyExams";

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
    "/rehber/ehliyet-sinavi-sonuc-sorgulama",
    "/rehber/ehliyet-sinavi-tarihleri-2026",
    "/rehber/trafik-isaretleri-nasil-calisilir",
    "/rehber/ilk-yardim-sik-yapilan-hatalar",
    "/rehber/il",
    "/ara",
    "/iletisim",
    "/menu",
    "/aylik-sinavlar",
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
    url: `${SITE_URL}${provincePath(province)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const monthlyExamRoutes = getAllMonthlyExams().map((exam) => ({
    url: `${SITE_URL}${exam.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...fixedExamRoutes, ...provinceRoutes, ...monthlyExamRoutes];
}
