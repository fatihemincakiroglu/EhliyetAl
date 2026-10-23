import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Shuffle, FileCheck2, CalendarDays } from "lucide-react";
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
    <div className="bg-paper">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-2">
          Ehliyet Deneme Sınavı
        </h1>
        <p className="text-ink-soft font-semibold leading-relaxed mb-6">
          Her deneme sınavı 50 soru, 60 dakika ve %70 geçme barajıyla gerçek
          sınav formatındadır. Numaralı denemeler sabit sorulardan oluşur —
          sonuçlarını karşılaştırabilirsin. Sınırsız pratikte ise her seferinde
          yeni bir karışım seni bekler.
        </p>

        <Link
          href="/sinav/pratik"
          className="btn-primary group rounded-3xl px-5 py-5 flex items-center gap-4 mb-3"
        >
          <span className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <Shuffle size={24} strokeWidth={2.4} />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-display font-black text-xl leading-tight">Sınırsız Pratik</span>
            <span className="block text-[13px] font-bold text-white/90">
              Her seferinde yeniden karıştırılmış 50 soru
            </span>
          </span>
          <ChevronRight size={22} strokeWidth={2.6} className="shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/aylik-sinavlar"
          className="card bg-surface border-2 border-line rounded-2xl px-4 py-3 flex items-center gap-3 mb-8"
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "var(--color-cat-trafik-wash)", color: "var(--color-cat-trafik)" }}
          >
            <CalendarDays size={20} strokeWidth={2.4} />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-extrabold text-[15px] text-ink">Aylık Sınavlar</span>
            <span className="block text-[13px] font-semibold text-ink-soft">Ay ay derlenmiş denemeler</span>
          </span>
          <ChevronRight size={20} strokeWidth={2.5} className="text-ink-soft shrink-0" />
        </Link>

        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-display font-black text-lg text-ink">Sabit Deneme Sınavları</h2>
          <span className="text-[13px] font-bold text-ink-soft">{FIXED_EXAM_COUNT} sınav</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {exams.map((no) => (
            <Link
              key={no}
              href={`/sinav/${no}`}
              className="card bg-surface border-2 border-line rounded-[20px] p-4 flex flex-col gap-2.5"
            >
              <span className="flex items-center justify-between">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-sun-wash)", color: "var(--color-tangerine-ink)" }}
                >
                  <FileCheck2 size={20} strokeWidth={2.4} />
                </span>
                <span className="font-display font-black text-2xl text-ink-soft/40 tabular-nums">{no}</span>
              </span>
              <span>
                <span className="block font-display font-extrabold text-[15px] leading-tight text-ink">
                  Deneme Sınavı {no}
                </span>
                <span className="block text-xs font-bold text-ink-soft mt-0.5">50 soru · 60 dakika</span>
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
