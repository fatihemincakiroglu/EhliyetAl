"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, ChevronDown, type LucideIcon } from "lucide-react";
import { categories, getAllQuestions, getQuestionCategorySlug, type Question } from "@/lib/questions";
import { useStoreVersion } from "@/lib/clientStore";
import QuizRunner from "@/components/QuizRunner";
import { getCategoryTheme } from "@/components/categoryTheme";
import type { AttemptMode } from "@/lib/storage";

const questionById = new Map(getAllQuestions().map((q) => [q.id, q]));

/**
 * Bir soru kümesini (yanlışlar, tekrar edilecekler…) gösteren ve çözdüren
 * ortak sayfa. Küme depodan canlı okunur; çözmeye başlarken anlık görüntüsü
 * alınır ki test sırasında liste kaymasın.
 */
export default function QuestionSetPage({
  readIds,
  title,
  description,
  icon: Icon,
  tone,
  quizTitle,
  mode,
  emptyTitle,
  emptyText,
  emptyExtra,
  startLabel,
}: {
  readIds: () => string[];
  title: string;
  description: string;
  icon: LucideIcon;
  tone: { bg: string; fg: string; solid: string };
  quizTitle: string;
  mode: AttemptMode;
  emptyTitle: string;
  emptyText: string;
  emptyExtra?: React.ReactNode;
  startLabel: string;
}) {
  const v = useStoreVersion();
  const [filter, setFilter] = useState<string>("all");
  const [session, setSession] = useState<Question[] | null>(null);

  const all = useMemo(() => {
    if (v === 0) return null;
    return readIds()
      .map((id) => questionById.get(id))
      .filter((q): q is Question => Boolean(q));
    // readIds sabit bir modül fonksiyonu; v değişince yeniden okunur
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const q of all ?? []) {
      const slug = getQuestionCategorySlug(q.id) ?? "trafik";
      m[slug] = (m[slug] ?? 0) + 1;
    }
    return m;
  }, [all]);

  const visible = useMemo(
    () => (all ?? []).filter((q) => filter === "all" || getQuestionCategorySlug(q.id) === filter),
    [all, filter]
  );

  if (session) {
    return (
      <QuizRunner
        questions={session}
        title={quizTitle}
        subtitle={`${session.length} soru`}
        mode={mode}
        backHref="/"
      />
    );
  }

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-8 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-5"
        >
          <ArrowLeft size={16} strokeWidth={2.6} />
          Ana sayfa
        </Link>

        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-7 mb-5">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: tone.bg, color: tone.solid }}
            >
              <Icon size={28} strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <h1 className="font-display font-black text-2xl sm:text-3xl leading-tight text-ink">{title}</h1>
              <p className="text-[13px] font-extrabold" style={{ color: tone.fg }}>
                {all === null ? "…" : `${all.length} soru`}
              </p>
            </div>
          </div>
          <p className="text-ink-soft font-semibold leading-relaxed">{description}</p>

          {all !== null && all.length === 0 && (
            <div className="mt-5 rounded-2xl bg-success-wash p-5 text-center">
              <p className="font-display font-black text-xl text-success-ink mb-1">{emptyTitle}</p>
              <p className="text-sm font-semibold text-success-ink">{emptyText}</p>
              {emptyExtra}
            </div>
          )}

          {all !== null && all.length > 0 && (
            <>
              <div className="flex flex-wrap gap-2 mt-5 mb-5" role="group" aria-label="Konu filtresi">
                <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
                  Tümü ({all.length})
                </FilterChip>
                {categories
                  .filter((c) => counts[c.slug])
                  .map((c) => (
                    <FilterChip key={c.slug} active={filter === c.slug} onClick={() => setFilter(c.slug)}>
                      {c.shortName} ({counts[c.slug]})
                    </FilterChip>
                  ))}
              </div>
              <button
                type="button"
                onClick={() => setSession([...visible])}
                disabled={visible.length === 0}
                className="btn-primary w-full rounded-2xl h-14 flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer disabled:opacity-40"
              >
                <Play size={18} fill="currentColor" strokeWidth={0} />
                {startLabel} ({visible.length})
              </button>
            </>
          )}
        </section>

        {visible.length > 0 && (
          <ul className="flex flex-col gap-2.5">
            {visible.map((q) => {
              const theme = getCategoryTheme(getQuestionCategorySlug(q.id));
              const CatIcon = theme.icon;
              return (
                <li key={q.id}>
                  <details className="group card rounded-2xl border-2 border-line bg-surface">
                    <summary className="flex items-start gap-3 p-3.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: theme.wash, color: theme.color }}
                      >
                        <CatIcon size={16} strokeWidth={2.4} />
                      </span>
                      <span className="flex-1 text-[15px] font-bold text-ink leading-snug">{q.text}</span>
                      <ChevronDown
                        size={18}
                        strokeWidth={2.6}
                        className="text-ink-soft shrink-0 mt-1 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="px-3.5 pb-4">
                      <p className="rounded-xl bg-success-wash text-success-ink text-sm font-bold px-3 py-2 mb-2">
                        {String.fromCharCode(65 + q.correctIndex)}) {q.options[q.correctIndex]}
                      </p>
                      <p className="text-sm font-semibold text-ink-soft leading-relaxed">{q.explanation}</p>
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-1.5 text-sm font-extrabold border-2 cursor-pointer transition-colors ${
        active ? "bg-ink border-ink text-paper" : "bg-surface border-line text-ink-soft hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
