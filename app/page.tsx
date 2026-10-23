import Link from "next/link";
import type { Metadata } from "next";
import { Play, MapPin, Gamepad2, CalendarDays, ChevronRight } from "lucide-react";
import { categories } from "@/lib/questions";
import { getCategoryTheme } from "@/components/categoryTheme";
import { StatusCard, ActionRows, CategoryProgress } from "@/components/HomeProgress";
import DailyQuestion from "@/components/DailyQuestion";
import HomeStatusBar from "@/components/HomeStatusBar";
import SeoContent from "@/components/SeoContent";

export const metadata: Metadata = {
  title: "Ehliyet Sınavı Soruları 2026 | Çıkmış Ehliyet Sınavları",
  description:
    "2026 ehliyet sınavı sorularını ve çıkmış ehliyet sınavlarını ücretsiz çöz! Trafik, ilk yardım, motor bilgisi soruları ve deneme sınavlarıyla hazırlan.",
  alternates: {
    canonical: "https://ehliyetal.net/",
  },
};

const extraLinks = [
  {
    href: "/pratik-oyunlar",
    label: "Pratik Oyunlar",
    hint: "İşaret tanıma, geçiş hakkı",
    icon: Gamepad2,
    color: "var(--color-cat-motor)",
    wash: "var(--color-cat-motor-wash)",
  },
  {
    href: "/aylik-sinavlar",
    label: "Aylık Sınavlar",
    hint: "Ay ay derlenmiş denemeler",
    icon: CalendarDays,
    color: "var(--color-cat-trafik)",
    wash: "var(--color-cat-trafik-wash)",
  },
  {
    href: "/rehber/il",
    label: "İl Rehberi",
    hint: "İline özel hazırlık",
    icon: MapPin,
    color: "var(--color-cat-cevre)",
    wash: "var(--color-cat-cevre-wash)",
  },
];

export default function Home() {
  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  return (
    <div className="bg-paper">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <header className="mb-5 sm:mb-7">
          <h1 className="font-display font-black text-[26px] sm:text-4xl leading-tight text-ink">
            Ehliyet Sınavı Soruları (2026)
          </h1>
          <p className="mt-1.5 text-ink-soft font-semibold text-[15px] sm:text-base max-w-xl">
            {totalQuestions} soruyla trafik, motor, ilk yardım ve çevre konularını çalış;
            her sorudan sonra açıklamayı hemen gör.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:grid-rows-[auto_1fr] lg:items-start">
          {/* Sol: durum + birincil eylem */}
          <div className="flex flex-col gap-4">
            <StatusCard totalQuestions={totalQuestions} />

            <Link
              href="/sinav"
              className="btn-primary group rounded-3xl px-5 py-5 flex items-center justify-between gap-4"
            >
              <span className="flex flex-col gap-0.5">
                <span className="font-display font-black text-[21px] leading-tight">
                  Deneme Sınavı Başlat
                </span>
                <span className="text-[13px] font-bold text-white/90">
                  50 soru · 60 dakika · baraj 70
                </span>
              </span>
              <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <Play size={22} fill="currentColor" strokeWidth={0} className="ml-0.5" />
              </span>
            </Link>

            <ActionRows />

            <div className="hidden lg:block">
              <DailyQuestion />
            </div>
          </div>

          {/* Sağ: konular */}
          <section aria-labelledby="konular" className="lg:row-span-2">
            <div className="flex items-baseline justify-between mb-3">
              <h2 id="konular" className="font-display font-black text-lg text-ink">
                Konuya göre çalış
              </h2>
              <span className="text-[13px] font-bold text-ink-soft">{totalQuestions} soru</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category, i) => {
                const theme = getCategoryTheme(category.slug);
                const Icon = theme.icon;
                const isLastOdd = i === categories.length - 1 && categories.length % 2 === 1;
                return (
                  <Link
                    key={category.slug}
                    href={`/quiz/${category.slug}`}
                    className={`card bg-surface border-2 border-line rounded-[20px] p-4 flex flex-col gap-2.5 ${
                      isLastOdd ? "col-span-2" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: theme.wash, color: theme.color }}
                      >
                        <Icon size={21} strokeWidth={2.3} />
                      </span>
                      {isLastOdd && (
                        <span className="font-display font-extrabold text-[15px] leading-tight text-ink">
                          {category.name}
                        </span>
                      )}
                    </span>
                    {!isLastOdd && (
                      <span className="font-display font-extrabold text-[15px] leading-tight text-ink min-h-[2.5em]">
                        {category.name}
                      </span>
                    )}
                    <CategoryProgress
                      slug={category.slug}
                      total={category.questions.length}
                      color={theme.color}
                    />
                  </Link>
                );
              })}
            </div>

          </section>

          {/* Ek bağlantılar: mobilde konuların altında, masaüstünde sol sütunda */}
          <div className="flex flex-col gap-2.5 lg:col-start-1">
            {extraLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card bg-surface border-2 border-line rounded-2xl px-4 py-3 flex items-center gap-3"
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.wash, color: item.color }}
                  >
                    <Icon size={18} strokeWidth={2.3} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-extrabold text-[15px] text-ink">{item.label}</span>
                    <span className="block text-[13px] font-semibold text-ink-soft truncate">
                      {item.hint}
                    </span>
                  </span>
                  <ChevronRight size={20} strokeWidth={2.5} className="text-ink-soft shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <DailyQuestion />
        </div>

        <div className="mt-6">
          <HomeStatusBar />
        </div>
      </main>

      <SeoContent />
    </div>
  );
}
