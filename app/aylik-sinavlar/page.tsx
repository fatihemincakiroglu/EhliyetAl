import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
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
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <h1 className="font-display text-3xl text-ink mb-2">
          Aylık Ehliyet Sınavları
        </h1>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Yıllara ve aylara göre düzenlenmiş deneme sınavları. Her ay, trafik,
          motor, ilk yardım ve çevre konularından oluşan 50 soruluk, 60 dakikalık
          ve %70 geçme barajlı, birbirinden farklı bir set sunar. Aynı ayı her
          çözdüğünde aynı sorularla karşılaşır, gelişimini takip edebilirsin.
        </p>

        {groups.map(({ year, exams }) => (
          <section key={year} className="mb-10">
            <h2 className="font-display text-xl text-ink mb-3">
              {year} Ehliyet Sınavları
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exams.map((exam) => (
                <Link
                  key={exam.href}
                  href={exam.href}
                  className="premium-card group flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 hover:bg-gold-wash transition-colors"
                >
                  <span className="rounded-lg bg-sun-wash p-2.5 text-ink shrink-0">
                    <CalendarDays size={20} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display text-base text-ink">
                      {exam.year} {exam.monthName} Ehliyet Sınavı
                    </span>
                    <span className="block text-xs text-ink-soft">
                      50 soru · 60 dakika
                    </span>
                  </span>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
