import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Timer, Route, GitFork } from "lucide-react";

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
  },
  {
    href: "/pratik-oyunlar/senaryolar",
    title: "Bu Durumda Ne Yaparsın?",
    desc: "Gerçek trafik senaryolarında doğru kararı ver. Kavşak, yaya, öncelik…",
    icon: Route,
    tag: "Senaryo",
  },
  {
    href: "/pratik-oyunlar/gecis-hakki",
    title: "Geçiş Hakkı Şemaları",
    desc: "Öncelik kurallarını animasyonlu şemalarla öğren. En çok yanılınan konu.",
    icon: GitFork,
    tag: "Öğretici",
  },
];

export default function PratikOyunlarPage() {
  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Ana sayfaya dön
        </Link>

        <h1 className="font-display text-3xl text-ink mb-2">Pratik Oyunlar</h1>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
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
                className="premium-card group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-5 hover:bg-gold-wash transition-colors"
              >
                <span className="rounded-lg bg-gold-wash p-3 text-gold shrink-0">
                  <Icon size={24} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 mb-0.5">
                    <span className="font-display text-lg text-ink">
                      {g.title}
                    </span>
                    <span className="rounded-full bg-sun-wash px-2 py-0.5 text-[10px] font-medium text-ink">
                      {g.tag}
                    </span>
                  </span>
                  <span className="block text-sm text-ink-soft">{g.desc}</span>
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
                />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
