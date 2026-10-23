import { Gauge, Wrench, HeartPulse, Leaf, Signpost, type LucideIcon } from "lucide-react";

export type CategoryTheme = {
  icon: LucideIcon;
  /** Ana ton (ikon, ilerleme çubuğu) */
  color: string;
  /** Açık zemin (ikon kutusu) */
  wash: string;
};

const themes: Record<string, CategoryTheme> = {
  trafik: { icon: Gauge, color: "var(--color-cat-trafik)", wash: "var(--color-cat-trafik-wash)" },
  motor: { icon: Wrench, color: "var(--color-cat-motor)", wash: "var(--color-cat-motor-wash)" },
  ilkyardim: { icon: HeartPulse, color: "var(--color-cat-ilkyardim)", wash: "var(--color-cat-ilkyardim-wash)" },
  cevre: { icon: Leaf, color: "var(--color-cat-cevre)", wash: "var(--color-cat-cevre-wash)" },
  isaretler: { icon: Signpost, color: "var(--color-cat-isaretler)", wash: "var(--color-cat-isaretler-wash)" },
};

export function getCategoryTheme(slug: string | undefined): CategoryTheme {
  return (slug && themes[slug]) || themes.trafik;
}
