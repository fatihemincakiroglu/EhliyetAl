import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CalendarDays } from "lucide-react";
import { getMonthlyExamsByYear } from "@/lib/monthlyExams";

export const metadata: Metadata = {
  title: "Aylık Ehliyet Sınavları — 2025 & 2026 Deneme Sınavları | EhliyetAl",
  description:
    "Yıllara ve aylara göre düzenlenmiş ehliyet deneme sınavları. 2026 Ocak, 2025 Kasım ve daha fazlası — her ay farklı sorularla 50 soruluk, 60 dakikalık ücretsiz deneme sınavı.",
  alternates: {
    canonical: "https://ehliyetal.net/aylik-sinavlar",
  },
};

export default function AylikSinavlarPage() {
  const groups = getMonthlyExamsByYear();

  return (
    <div className="bg-paper">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-2">
          Aylık Ehliyet Sınavları
        </h1>
        <p className="text-ink-soft font-semibold leading-relaxed mb-8">
          Yıllara ve aylara göre düzenlenmiş deneme sınavları. Her ay, trafik,
          motor, ilk yardım ve çevre konularından oluşan 50 soruluk, 60 dakikalık
          ve %70 geçme barajlı, birbirinden farklı bir set sunar. Aynı ayı her
          çözdüğünde aynı sorularla karşılaşır, gelişimini takip edebilirsin.
        </p>

        {groups.map(({ year, exams }) => (
          <section key={year} className="mb-8">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="font-display font-black text-xl text-ink">{year} Ehliyet Sınavları</h2>
              <span className="text-[13px] font-bold text-ink-soft">{exams.length} sınav</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exams.map((exam) => (
                <Link
                  key={exam.href}
                  href={exam.href}
                  className="card bg-surface border-2 border-line rounded-2xl px-4 py-3.5 flex items-center gap-3"
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-cat-trafik-wash)", color: "var(--color-cat-trafik)" }}
                  >
                    <CalendarDays size={20} strokeWidth={2.4} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-extrabold text-[15px] text-ink leading-tight">
                      {exam.year} {exam.monthName} Ehliyet Sınavı
                    </span>
                    <span className="block text-xs font-bold text-ink-soft mt-0.5">50 soru · 60 dakika</span>
                  </span>
                  <ChevronRight size={20} strokeWidth={2.5} className="text-ink-soft shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
