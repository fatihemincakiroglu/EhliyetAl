"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { RefreshCcw, ChevronRight, XCircle, Sparkles, Settings2, Snowflake } from "lucide-react";
import { useStoreVersion } from "@/lib/clientStore";
import {
  GOAL_OPTIONS,
  getCategoryProgress,
  getDailyGoal,
  getLevel,
  getReadiness,
  getStreakInfo,
  getToday,
  getWeakSuggestion,
  getWrongBoxIds,
  setDailyGoal,
} from "@/lib/progress";
import { getDueQuestionIds } from "@/lib/spacedRepetition";
import { categories } from "@/lib/questions";
import { getCategoryTheme } from "@/components/categoryTheme";

/* ---------------- Halka ---------------- */

export function Ring({
  percent,
  size = 72,
  stroke = 9,
  color,
  children,
}: {
  percent: number;
  size?: number;
  stroke?: number;
  color: string;
  children?: React.ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <span className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-surface-alt)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - clamped / 100)}
          style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">{children}</span>
    </span>
  );
}

/* ---------------- Durum kartı: hazırlık + günlük hedef + seviye ---------------- */

export function StatusCard({ totalQuestions }: { totalQuestions: number }) {
  const v = useStoreVersion();
  const [editingGoal, setEditingGoal] = useState(false);

  const data = useMemo(() => {
    if (v === 0) return null;
    const progress = getCategoryProgress();
    return {
      readiness: getReadiness(),
      seen: Object.values(progress).reduce((a, s) => a + s.seen, 0),
      today: getToday(),
      goal: getDailyGoal(),
      level: getLevel(),
      streak: getStreakInfo(),
    };
  }, [v]);

  const readiness = data?.readiness ?? { kind: "none" as const };
  const seen = data?.seen ?? 0;
  const today = data?.today.answered ?? 0;
  const goal = data?.goal ?? 20;
  const level = data?.level;
  const streak = data?.streak;

  const readinessPercent =
    readiness.kind === "exam" ? readiness.lastScore : Math.round((seen / Math.max(1, totalQuestions)) * 100);
  const goalPercent = Math.round((today / goal) * 100);
  const goalDone = today >= goal;

  return (
    <section className="card bg-surface border-2 border-line rounded-3xl p-4 sm:p-5">
      <div className="grid grid-cols-2 gap-3">
        {/* Hazırlık */}
        <div className="flex items-center gap-3 min-w-0">
          <Ring
            percent={readinessPercent}
            color={readinessPercent >= 70 ? "var(--color-success)" : "var(--color-primary)"}
          >
            <span className="font-display font-black text-base text-ink">%{readinessPercent}</span>
          </Ring>
          <span className="min-w-0">
            <span className="block text-xs font-bold text-ink-soft">Hazırlık</span>
            <span className="block font-display font-black text-[15px] leading-tight text-ink">
              {readiness.kind === "exam"
                ? readiness.pointsToPass > 0
                  ? `Baraja ${readiness.pointsToPass} puan`
                  : "Barajı geçtin!"
                : seen === 0
                  ? "Hadi başla!"
                  : "Deneme çöz"}
            </span>
            <span className="block text-xs font-semibold text-ink-soft truncate">
              {readiness.kind === "exam" ? `Son: ${readiness.lastScore} puan` : `${seen}/${totalQuestions} soru`}
            </span>
          </span>
        </div>

        {/* Günlük hedef */}
        <div className="flex items-center gap-3 min-w-0">
          <Ring percent={goalPercent} color={goalDone ? "var(--color-success)" : "var(--color-tangerine)"}>
            <span className="font-display font-black text-base text-ink">{today}</span>
          </Ring>
          <span className="min-w-0">
            <span className="block text-xs font-bold text-ink-soft">Bugün</span>
            <span className="block font-display font-black text-[15px] leading-tight text-ink">
              {goalDone ? "Hedef tamam!" : `${goal - today} soru kaldı`}
            </span>
            <button
              type="button"
              onClick={() => setEditingGoal((e) => !e)}
              aria-expanded={editingGoal}
              className="inline-flex items-center gap-1 text-xs font-bold text-ink-soft hover:text-primary cursor-pointer"
            >
              Hedef: {goal}
              <Settings2 size={12} strokeWidth={2.6} />
            </button>
          </span>
        </div>
      </div>

      {editingGoal && (
        <div className="mt-3 flex items-center gap-2 flex-wrap" role="group" aria-label="Günlük hedef seç">
          <span className="text-xs font-bold text-ink-soft mr-1">Günlük hedef:</span>
          {GOAL_OPTIONS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => {
                setDailyGoal(g);
                setEditingGoal(false);
              }}
              aria-pressed={g === goal}
              className={`rounded-full px-3 py-1.5 text-sm font-extrabold border-2 cursor-pointer transition-colors ${
                g === goal
                  ? "bg-primary border-primary text-white"
                  : "bg-surface border-line text-ink hover:border-primary-soft"
              }`}
            >
              {g} soru
            </button>
          ))}
        </div>
      )}

      {/* Seviye */}
      <div className="mt-4 pt-4 border-t-2 border-line">
        <div className="flex items-baseline justify-between gap-2 mb-1.5">
          <span className="text-[13px] font-extrabold text-ink truncate">
            Seviye {level?.level ?? 1} · {level?.name ?? "Acemi Sürücü"}
          </span>
          <span className="text-xs font-bold text-ink-soft shrink-0 tabular-nums">
            {level?.nextMin != null ? `${level.xp} / ${level.nextMin} XP` : `${level?.xp ?? 0} XP`}
          </span>
        </div>
        <span className="block h-2.5 rounded-full bg-surface-alt overflow-hidden">
          <span
            className="block h-full rounded-full bg-primary transition-[width] duration-500"
            style={{ width: `${level?.percent ?? 0}%` }}
          />
        </span>
        {streak && streak.streak > 0 && (
          <p className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-ink-soft">
            <Snowflake size={13} strokeWidth={2.6} className="text-primary shrink-0" />
            {streak.freezeAvailable
              ? "Seri kurtarıcın hazır: bu hafta bir gün kaçırsan da serin bozulmaz."
              : "Bu haftanın seri kurtarıcısı kullanıldı. Yarın da çalışmayı unutma!"}
          </p>
        )}
      </div>
    </section>
  );
}

/* ---------------- Eylem satırları: tekrar, yanlışlar, zayıf konu ---------------- */

function ActionRow({
  href,
  icon,
  bg,
  fg,
  iconBg,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  bg: string;
  fg: string;
  iconBg: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:brightness-[0.98] transition"
      style={{ background: bg, color: fg }}
    >
      <span
        className="w-9 h-9 rounded-xl text-white flex items-center justify-center shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </span>
      <span className="flex-1 min-w-0 font-extrabold text-[15px] leading-snug">{children}</span>
      <ChevronRight size={20} strokeWidth={2.6} className="shrink-0" />
    </Link>
  );
}

export function ActionRows() {
  const v = useStoreVersion();
  const data = useMemo(() => {
    if (v === 0) return null;
    return { due: getDueQuestionIds().length, wrong: getWrongBoxIds().length, weak: getWeakSuggestion() };
  }, [v]);

  if (!data) return null;
  const { due, wrong, weak } = data;
  const weakCat = weak ? categories.find((c) => c.slug === weak.slug) : undefined;
  const weakTheme = weak ? getCategoryTheme(weak.slug) : undefined;

  if (!due && !wrong && !weak) return null;

  return (
    <div className="flex flex-col gap-2.5">
      {due > 0 && (
        <ActionRow
          href="/tekrar"
          icon={<RefreshCcw size={18} strokeWidth={2.6} />}
          bg="var(--color-tangerine-wash)"
          fg="var(--color-tangerine-ink)"
          iconBg="var(--color-tangerine)"
        >
          Tekrar zamanı: {due} soru seni bekliyor
        </ActionRow>
      )}
      {weak && weakCat && weakTheme && (
        <ActionRow
          href={`/quiz/${weak.slug}?tur=hizli`}
          icon={<Sparkles size={18} strokeWidth={2.6} />}
          bg="var(--color-primary-wash)"
          fg="var(--color-ink)"
          iconBg={weakTheme.color}
        >
          {weak.kind === "weak" ? (
            <>
              {weakCat.shortName}&apos;da isabetin %{weak.accuracy}.{" "}
              <span className="font-bold text-ink-soft">10 soruluk hızlı tur?</span>
            </>
          ) : (
            <>
              {weakCat.shortName}: {weak.total - weak.seen} soru hiç çözülmedi.{" "}
              <span className="font-bold text-ink-soft">Hızlı tur?</span>
            </>
          )}
        </ActionRow>
      )}
      {wrong > 0 && (
        <ActionRow
          href="/yanlislarim"
          icon={<XCircle size={18} strokeWidth={2.6} />}
          bg="var(--color-danger-wash)"
          fg="var(--color-danger-ink)"
          iconBg="var(--color-danger)"
        >
          Yanlışlarım: {wrong} soru
        </ActionRow>
      )}
    </div>
  );
}

/* ---------------- Kategori ilerlemesi ---------------- */

export function CategoryProgress({
  slug,
  total,
  color,
}: {
  slug: string;
  total: number;
  color: string;
}) {
  const v = useStoreVersion();
  const stat = useMemo(() => (v === 0 ? null : getCategoryProgress()[slug]), [v, slug]);
  const seen = stat?.seen ?? 0;
  const percent = Math.round((seen / Math.max(1, total)) * 100);

  return (
    <>
      <span
        className="block h-2 rounded-full bg-surface-alt overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={seen}
        aria-label="Çözülen soru"
      >
        <span
          className="block h-full rounded-full transition-[width] duration-500"
          style={{ width: `${percent}%`, background: color }}
        />
      </span>
      <span className="flex justify-between gap-2 text-xs font-bold text-ink-soft whitespace-nowrap">
        <span>
          {seen}/{total} soru
        </span>
        {stat?.accuracy != null && (
          <span className={stat.accuracy >= 70 ? "text-success" : "text-danger"}>%{stat.accuracy}</span>
        )}
      </span>
    </>
  );
}
