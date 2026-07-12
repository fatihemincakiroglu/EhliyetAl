import type { LucideIcon } from "lucide-react";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "warning"; text: string }
  | { type: "quote"; text: string }
  | { type: "faq"; items: { q: string; a: string }[] };

export type BlogCategory =
  | "Sınav Hazırlığı"
  | "Trafik ve İlk Yardım"
  | "Direksiyon Sınavı"
  | "Merak Edilenler"
  | "Motivasyon";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  /** lucide-react ikon adı (string olarak; sayfada eşlenir) */
  icon: string;
  /** yaklaşık okuma süresi, dakika */
  readingMinutes: number;
  /** liste ve kart için kısa giriş */
  intro: string;
  blocks: BlogBlock[];
  /** ilgili yazı slug'ları */
  related?: string[];
  /** son güncelleme (ISO) */
  updated: string;
}

export type IconMap = Record<string, LucideIcon>;
