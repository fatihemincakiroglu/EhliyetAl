import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Timer, Route, GitFork } from "lucide-react";

export const metadata: Metadata = {
  title: "Pratik Oyunlar — Trafik İşareti ve Senaryo Oyunları | EhliyetAl",
  description:
    "Ehliyet sınavına oyunla hazırlan! Trafik işareti tanıma hız oyunu, 'bu durumda ne yaparsın?' senaryoları ve animasyonlu geçiş hakkı şemaları. Ücretsiz ve eğlenceli.",
  alternates: {
    canonical: "https://ehliyetal.net/pratik-oyunlar",
  },
};

const games = [
  {
    href: "/pratik-oyunlar/isaret-tanima",
    title: "Trafik İşareti Tanıma",
    desc: "İşaret gösterilir, 3 saniyede doğru anlamını seç. Puan topla, seriyi bozma!",
    icon: Timer,
    tag: "Hız Oyunu",
    color: "var(--color-cat-isaretler)",
    wash: "var(--color-cat-isaretler-wash)",
  },
  {
    href: "/pratik-oyunlar/senaryolar",
    title: "Bu Durumda Ne Yaparsın?",
    desc: "Gerçek trafik senaryolarında doğru kararı ver. Kavşak, yaya, öncelik…",
    icon: Route,
    tag: "Senaryo",
    color: "var(--color-cat-trafik)",
    wash: "var(--color-cat-trafik-wash)",
  },
  {
    href: "/pratik-oyunlar/gecis-hakki",
    title: "Geçiş Hakkı Şemaları",
    desc: "Öncelik kurallarını animasyonlu şemalarla öğren. En çok yanılınan konu.",
    icon: GitFork,
    tag: "Öğretici",
    color: "var(--color-cat-motor)",
    wash: "var(--color-cat-motor-wash)",
  },
];

export default function PratikOyunlarPage() {
  return (
    <div className="bg-paper">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-2">
          Pratik Oyunlar
        </h1>
        <p className="text-ink-soft font-semibold leading-relaxed mb-6">
          Ezber yerine oyunla öğren. Hızlı işaret tanıma, gerçek trafik
          senaryoları ve animasyonlu geçiş hakkı şemalarıyla sınavda en çok
          zorlanılan konuları eğlenerek pekiştir.
        </p>

        <div className="flex flex-col gap-3">
          {games.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.href}
                href={g.href}
                className="card bg-surface border-2 border-line rounded-3xl p-4 sm:p-5 flex items-center gap-4"
              >
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: g.wash, color: g.color }}
                >
                  <Icon size={28} strokeWidth={2.3} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
                    <span className="font-display font-black text-lg leading-tight text-ink">{g.title}</span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[11px] font-extrabold"
                      style={{ background: g.wash, color: g.color }}
                    >
                      {g.tag}
                    </span>
                  </span>
                  <span className="block text-sm font-semibold text-ink-soft leading-snug">{g.desc}</span>
                </span>
                <ChevronRight size={22} strokeWidth={2.5} className="shrink-0 text-ink-soft" />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
