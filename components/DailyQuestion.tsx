"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Check, X, ChevronDown } from "lucide-react";
import { categories, getAllQuestions, type Question } from "@/lib/questions";

const categorySlugByQuestionId = new Map<string, string>();
for (const c of categories) {
  for (const q of c.questions) {
    categorySlugByQuestionId.set(q.id, c.slug);
  }
}

function getTodayIndex(total: number) {
  const now = new Date();
  const dayNumber = Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000
  );
  return dayNumber % total;
}

export default function DailyQuestion() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const all = getAllQuestions();
    const index = getTodayIndex(all.length);
    setQuestion(all[index]);
  }, []);

  if (!question) return null;

  const slug = categorySlugByQuestionId.get(question.id) ?? "trafik";
  const answered = selected !== null;

  return (
    <div className="border border-line rounded-2xl bg-surface overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-2 px-4 py-3 sm:px-5 text-left hover:bg-gold-wash transition-colors"
      >
        <Sparkles size={16} className="text-gold shrink-0" />
        <span className="font-display text-sm text-ink flex-1">
          Günün Sorusu
        </span>
        {answered && (
          <span className="font-data text-[11px] text-ink-soft">çözüldü</span>
        )}
        <ChevronDown
          size={16}
          className={`shrink-0 text-ink-soft transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-5 sm:px-5 pt-1">
          <p className="font-display text-base sm:text-lg text-ink mb-4">
            {question.text}
          </p>
          <div className="flex flex-col gap-2">
            {question.options.map((option, i) => {
              const isCorrect = i === question.correctIndex;
              const isSelected = i === selected;
              let cls = "border-line bg-paper hover:border-gold-soft";
              if (answered) {
                if (isCorrect) cls = "border-success bg-success-wash";
                else if (isSelected) cls = "border-danger bg-danger-wash";
                else cls = "border-line bg-paper opacity-50";
              }
              return (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => setSelected(i)}
                  className={`flex items-center justify-between gap-2 text-left rounded-lg border px-3.5 py-2.5 text-sm transition-colors ${cls}`}
                >
                  <span className="text-ink">{option}</span>
                  {answered && isCorrect && (
                    <Check size={15} className="text-success shrink-0" />
                  )}
                  {answered && isSelected && !isCorrect && (
                    <X size={15} className="text-danger shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
          {answered && (
            <p className="text-xs text-ink-soft leading-relaxed mt-3">
              {question.explanation}
            </p>
          )}
          <Link
            href={`/quiz/${slug}`}
            className="inline-block mt-4 text-xs font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
          >
            Bu kategoride daha fazla soru çöz →
          </Link>
        </div>
      )}
    </div>
  );
}
