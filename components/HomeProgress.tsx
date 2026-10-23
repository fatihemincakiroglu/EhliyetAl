"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCcw, ChevronRight } from "lucide-react";
import { getReadiness, getSolvedByCategory, type Readiness } from "@/lib/progress";
import { getDueQuestionIds } from "@/lib/spacedRepetition";

/* ---------------- Hazırlık halkası ---------------- */

function Ring({ percent, size = 84 }: { percent: number; size?: number }) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0 -rotate-90" aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-surface-alt)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={clamped >= 70 ? "var(--color-success)" : "var(--color-primary)"}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - clamped / 100)}
        style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
      />
    </svg>
  );
}

export function ReadinessCard({ totalQuestions }: { totalQuestions: number }) {
  const [readiness, setReadiness] = useState<Readiness>({ kind: "none" });
  const [solved, setSolved] = useState(0);

  useEffect(() => {
    setReadiness(getReadiness());
    setSolved(Object.values(getSolvedByCategory()).reduce((a, b) => a + b, 0));
  }, []);

  const percent =
    readiness.kind === "exam"
      ? readiness.lastScore
      : Math.round((solved / Math.max(1, totalQuestions)) * 100);

  return (
    <section className="card bg-surface border-2 border-line rounded-3xl p-5 flex items-center gap-4">
      <div className="relative">
        <Ring percent={percent} />
        <span className="absolute inset-0 flex items-center justify-center font-display font-black text-xl text-ink">
          %{percent}
        </span>
      </div>
      <div className="min-w-0 flex flex-col gap-0.5">
        <span className="text-[13px] font-bold text-ink-soft">Sınava hazırlık</span>
        {readiness.kind === "exam" ? (
          <>
            <span className="font-display font-black text-xl leading-tight text-ink">
              {readiness.pointsToPass > 0
                ? `Baraja ${readiness.pointsToPass} puan kaldı`
                : "Barajı geçiyorsun!"}
            </span>
            <span className="text-[13px] font-semibold text-ink-soft">
              Son deneme: {readiness.lastScore} / 100
            </span>
          </>
        ) : (
          <>
            <span className="font-display font-black text-xl leading-tight text-ink">
              {solved === 0 ? "Hadi başlayalım!" : "İlk denemeni çöz"}
            </span>
            <span className="text-[13px] font-semibold text-ink-soft">
              {solved} / {totalQuestions} soru çözüldü
            </span>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------- Tekrar zamanı ---------------- */

export function ReviewBanner() {
  const [due, setDue] = useState(0);

  useEffect(() => {
    setDue(getDueQuestionIds().length);
  }, []);

  if (due === 0) return null;

  return (
    <Link
      href="/tekrar"
      className="flex items-center gap-3 rounded-2xl bg-tangerine-wash px-4 py-3 hover:brightness-[0.98] transition"
    >
      <span className="w-9 h-9 rounded-xl bg-tangerine text-white flex items-center justify-center shrink-0">
        <RefreshCcw size={18} strokeWidth={2.6} />
      </span>
      <span className="flex-1 font-extrabold text-[15px] text-tangerine-ink">
        Tekrar zamanı: {due} soru seni bekliyor
      </span>
      <ChevronRight size={20} strokeWidth={2.6} className="text-tangerine-ink shrink-0" />
    </Link>
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
  const [solved, setSolved] = useState(0);

  useEffect(() => {
    setSolved(getSolvedByCategory()[slug] ?? 0);
  }, [slug]);

  const percent = Math.round((solved / Math.max(1, total)) * 100);

  return (
    <>
      <span
        className="block h-2 rounded-full bg-surface-alt overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={solved}
        aria-label="Çözülen soru"
      >
        <span
          className="block h-full rounded-full transition-[width] duration-500"
          style={{ width: `${percent}%`, background: color }}
        />
      </span>
      <span className="text-xs font-bold text-ink-soft">
        {solved} / {total} soru
      </span>
    </>
  );
}
