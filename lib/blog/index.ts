import type { BlogPost, BlogCategory } from "./types";
import { sinavHazirligiPosts } from "./posts-sinav-hazirligi";
import { trafikIlkyardimPosts } from "./posts-trafik-ilkyardim";
import { direksiyonPosts } from "./posts-direksiyon";
import { merakEdilenlerPosts } from "./posts-merak-edilenler";
import { motivasyonPosts } from "./posts-motivasyon";

export type { BlogPost, BlogCategory, BlogBlock } from "./types";

/** Kategori sırası (liste sayfasındaki gösterim düzeni) */
export const CATEGORY_ORDER: BlogCategory[] = [
  "Sınav Hazırlığı",
  "Trafik ve İlk Yardım",
  "Direksiyon Sınavı",
  "Merak Edilenler",
  "Motivasyon",
];

export const blogPosts: BlogPost[] = [
  ...sinavHazirligiPosts,
  ...trafikIlkyardimPosts,
  ...direksiyonPosts,
  ...merakEdilenlerPosts,
  ...motivasyonPosts,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getPostsByCategory(): { category: BlogCategory; posts: BlogPost[] }[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    posts: blogPosts.filter((p) => p.category === category),
  })).filter((group) => group.posts.length > 0);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const related = (post.related ?? [])
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
  if (related.length >= limit) return related.slice(0, limit);
  // eksikse aynı kategoriden tamamla
  const fallback = blogPosts.filter(
    (p) => p.category === post.category && p.slug !== post.slug && !related.includes(p)
  );
  return [...related, ...fallback].slice(0, limit);
}
