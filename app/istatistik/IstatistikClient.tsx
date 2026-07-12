"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Target, RefreshCcw, Trash2 } from "lucide-react";
import { categories } from "@/lib/questions";
import {
  getOverallStats,
  getCategoryStats,
  getWeakCategories,
  clearHistory,
  type OverallStats,
  type CategoryStat,
} from "@/lib/storage";
import { computeBadges, type Badge } from "@/lib/badges";

const categorySlugs = categories.map((c) => c.slug);
const categoryLabel: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.slug, c.name])
);

export default function IstatistikClient() {
  const [ready, setReady] = useState(false);
  const [overall, setOverall] = useState<OverallStats | null>(null);
  const [catStats, setCatStats] = useState<Record<string, CategoryStat>>({});
  const [weakCategories, setWeakCategories] = useState<CategoryStat[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);

  function load() {
    setOverall(getOverallStats(categorySlugs));
    setCatStats(getCategoryStats(categorySlugs));
    setWeakCategories(getWeakCategories(categorySlugs, 2));
    setBadges(computeBadges(categorySlugs));
    setReady(true);
  }

  useEffect(() => {
    load();
  }, []);

  function handleReset() {
    if (typeof window !== "undefined" && window.confirm("Tüm istatistiklerin silinsin mi?")) {
      clearHistory();
      load();
    }
  }

  if (!ready || !overall) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <p className="text-ink-soft text-sm font-data">Yükleniyor...</p>
      </div>
    );
  }

  const hasData = overall.totalAttempts > 0;

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <h1 className="font-display text-3xl text-ink mb-2">İstatistikler</h1>
        <p className="text-ink-soft text-sm mb-8">
          İlerlemen bu cihazda saklanır ve sadece sen görebilirsin.
        </p>

        {!hasData && (
          <div className="bg-surface border border-line rounded-2xl p-8 text-center mb-8">
            <p className="text-ink-soft text-sm">
              Henüz hiç soru çözmedin. Bir kategoriye başlayarak istatistiklerini
              görmeye başla.
            </p>
          </div>
        )}

        {hasData && (
          <>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-surface border border-line rounded-2xl p-4 text-center">
                <p className="font-display text-2xl text-ink">
                  {overall.totalQuestionsSolved}
                </p>
                <p className="text-[11px] text-ink-soft font-data uppercase tracking-wide mt-1">
                  Çözülen Soru
                </p>
              </div>
              <div className="bg-surface border border-line rounded-2xl p-4 text-center">
                <p className="font-display text-2xl text-ink">%{overall.averagePercent}</p>
                <p className="text-[11px] text-ink-soft font-data uppercase tracking-wide mt-1">
                  Ortalama Başarı
                </p>
              </div>
              <div className="bg-surface border border-line rounded-2xl p-4 text-center">
                <p className="font-display text-2xl text-ink">{overall.totalAttempts}</p>
                <p className="text-[11px] text-ink-soft font-data uppercase tracking-wide mt-1">
                  Deneme
                </p>
              </div>
            </div>

            {weakCategories.length > 0 && (
              <>
                <h2 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
                  <Target size={18} className="text-gold" />
                  Sana Özel Öneriler
                </h2>
                <div className="flex flex-col gap-3 mb-8">
                  {weakCategories.map((stat) => (
                    <div
                      key={stat.slug}
                      className="bg-gold-wash border border-gold-soft/40 rounded-2xl p-4"
                    >
                      <p className="text-sm text-ink mb-3">
                        <span className="font-display text-gold">
                          {categoryLabel[stat.slug]}
                        </span>{" "}
                        konusunda en iyi sonucun %{stat.bestPercent}. Bu
                        konudan birkaç tur daha çözerek ilerleyebilirsin.
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        <Link
                          href={`/quiz/${stat.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wide rounded-full gold-gradient text-white px-4 py-2 hover:bg-gold-soft transition-colors"
                        >
                          Konudan Çalış <ArrowRight size={12} />
                        </Link>
                        <Link
                          href="/tekrar"
                          className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wide rounded-full border border-gold-soft/60 text-ink px-4 py-2 hover:bg-surface transition-colors"
                        >
                          <RefreshCcw size={12} />
                          Yanlışlarını Tekrar Et
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 className="font-display text-lg text-ink mb-3">Kategori İlerlemesi</h2>
            <div className="flex flex-col gap-3 mb-10">
              {categorySlugs.map((slug) => {
                const stat = catStats[slug];
                return (
                  <div
                    key={slug}
                    className="bg-surface border border-line rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ink font-body">
                        {categoryLabel[slug]}
                      </span>
                      <span className="font-data text-xs text-ink-soft">
                        {stat.attempts > 0 ? `En iyi: %${stat.bestPercent}` : "Henüz çözülmedi"}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gold transition-all duration-500"
                        style={{ width: `${stat.bestPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <h2 className="font-display text-lg text-ink mb-3 flex items-center gap-2">
          <Award size={18} className="text-gold" />
          Rozetler
        </h2>
        <div className="grid grid-cols-2 gap-3 mb-10">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`border rounded-xl p-4 ${
                badge.earned
                  ? "border-gold-soft bg-gold-wash"
                  : "border-line bg-surface opacity-50"
              }`}
            >
              <p
                className={`font-display text-sm mb-1 ${
                  badge.earned ? "text-gold" : "text-ink"
                }`}
              >
                {badge.title}
              </p>
              <p className="text-xs text-ink-soft leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

        {hasData && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 text-xs text-ink-soft hover:text-danger transition-colors font-data"
          >
            <Trash2 size={14} />
            İstatistikleri sıfırla
          </button>
        )}
      </main>
    </div>
  );
}
