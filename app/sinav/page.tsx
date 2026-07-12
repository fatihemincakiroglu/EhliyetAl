import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shuffle, FileCheck2 } from "lucide-react";
import { FIXED_EXAM_COUNT } from "@/lib/questions";

export const metadata: Metadata = {
  title: "Ehliyet Deneme Sınavı — Ücretsiz Çöz | EhliyetAl",
  description:
    "Gerçek sınav formatında 50 soruluk, 60 dakikalık ehliyet deneme sınavlarını ücretsiz çöz. 5 sabit deneme sınavı veya sınırsız karışık pratikle kendini test et.",
  alternates: {
    canonical: "https://ehliyetal.net/sinav",
  },
};

export default function SinavHubPage() {
  const exams = Array.from({ length: FIXED_EXAM_COUNT }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <h1 className="font-display text-3xl text-ink mb-2">
          Ehliyet Deneme Sınavı
        </h1>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Her deneme sınavı 50 soru, 60 dakika ve %70 geçme barajıyla gerçek
          sınav formatındadır. Numaralı denemeler sabit sorulardan oluşur —
          sonuçlarını karşılaştırabilirsin. Sınırsız pratikte ise her seferinde
          yeni bir karışım seni bekler.
        </p>

        <Link
          href="/sinav/pratik"
          className="premium-card group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-5 mb-8 hover:bg-gold-wash transition-colors"
        >
          <span className="rounded-lg bg-gold-wash p-2.5 text-gold shrink-0">
            <Shuffle size={22} />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-display text-lg text-ink">
              Sınırsız Pratik
            </span>
            <span className="block text-sm text-ink-soft">
              Her seferinde yeniden karıştırılmış 50 soru
            </span>
          </span>
          <ArrowRight
            size={18}
            className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
          />
        </Link>

        <h2 className="font-display text-lg text-ink mb-3">
          Sabit Deneme Sınavları
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exams.map((no) => (
            <Link
              key={no}
              href={`/sinav/${no}`}
              className="premium-card group flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 hover:bg-gold-wash transition-colors"
            >
              <span className="rounded-lg bg-sun-wash p-2.5 text-ink shrink-0">
                <FileCheck2 size={20} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-display text-base text-ink">
                  Deneme Sınavı {no}
                </span>
                <span className="block text-xs text-ink-soft">50 soru · 60 dakika</span>
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
