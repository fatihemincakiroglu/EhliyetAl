import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Gauge, Wrench, HeartPulse, Leaf } from "lucide-react";
import { categories } from "@/lib/questions";
import { CategoryBadge, QuickLinks } from "@/components/HomeExtras";
import SeoContent from "@/components/SeoContent";

export const metadata: Metadata = {
  title: "Ehliyet Sınavı Soruları 2026 | Çıkmış Ehliyet Sınavları",
  description:
    "2026 ehliyet sınavı sorularını ve çıkmış ehliyet sınavlarını ücretsiz çöz! Trafik, ilk yardım, motor bilgisi soruları ve deneme sınavlarıyla hazırlan.",
  alternates: {
    canonical: "https://ehliyetal.net/",
  },
};

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  trafik: Gauge,
  motor: Wrench,
  ilkyardim: HeartPulse,
  cevre: Leaf,
};

export default function Home() {
  const totalQuestions = categories.reduce(
    (sum, c) => sum + c.questions.length,
    0
  );

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-3xl mx-auto px-5 sm:px-6 py-12 sm:py-20">
        <div className="mb-3 font-data text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold">
          Sınav Hazırlık
        </div>
        <p className="font-display italic text-2xl sm:text-3xl text-gold mb-2">
          EhliyetAl
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-4">
          Ehliyet Sınavı Soruları (2026)
        </h1>
        <p className="text-ink-soft text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
          Gerçek sınav formatında {totalQuestions} soruyla trafik, motor,
          ilkyardım ve çevre konularını çalış. Her sorudan hemen sonra doğru
          cevabın açıklamasını gör.
        </p>

        <QuickLinks />

        <div className="flex flex-col gap-3">
          {categories.map((category, i) => {
            const Icon = icons[category.slug] ?? Gauge;
            return (
              <Link
                key={category.slug}
                href={`/quiz/${category.slug}`}
                className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-line bg-surface px-4 py-4 sm:px-6 sm:py-5 shadow-[0_1px_2px_rgba(18,24,43,0.04)] transition-colors hover:border-gold-soft hover:bg-gold-wash"
              >
                <span className="font-data text-xs text-ink-soft w-5 sm:w-6 shrink-0 hidden sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-lg bg-gold-wash p-2.5 text-gold shrink-0">
                  <Icon size={20} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-base sm:text-lg text-ink truncate">
                    {category.name}
                  </span>
                  <span className="block text-xs sm:text-sm text-ink-soft truncate">
                    {category.description}
                  </span>
                </span>
                <CategoryBadge slug={category.slug} />
                <span className="font-data text-xs text-ink-soft shrink-0 hidden sm:block">
                  {category.questions.length} soru
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
                />
              </Link>
            );
          })}
        </div>

        <p className="mt-12 sm:mt-14 text-xs text-ink-soft/70 font-data">
          100 üzerinden 70 puan sınavı geçmek için gereken puandır.
        </p>
      </main>

      <SeoContent />
    </div>
  );
}
