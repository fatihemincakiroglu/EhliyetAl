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
    <div className="card border-2 border-line rounded-3xl bg-surface overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 px-4 py-3.5 sm:px-5 text-left hover:bg-surface-alt transition-colors cursor-pointer"
      >
        <span className="w-9 h-9 rounded-xl bg-sun-wash flex items-center justify-center shrink-0"><Sparkles size={18} strokeWidth={2.4} className="text-sun" /></span>
        <span className="font-display font-extrabold text-[15px] text-ink flex-1">
          Günün Sorusu
        </span>
        {answered && (
          <span className="text-xs font-extrabold text-success bg-success-wash rounded-full px-2.5 py-1">çözüldü</span>
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
          <p className="font-display font-extrabold text-[17px] sm:text-lg leading-snug text-ink mb-4">
            {question.text}
          </p>
          <div className="flex flex-col gap-2">
            {question.options.map((option, i) => {
              const isCorrect = i === question.correctIndex;
              const isSelected = i === selected;
              let cls = "border-line bg-surface hover:border-primary-soft hover:bg-primary-wash";
              if (answered) {
                if (isCorrect) cls = "border-success bg-success-wash";
                else if (isSelected) cls = "border-danger bg-danger-wash";
                else cls = "border-line bg-surface opacity-55";
              }
              return (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => setSelected(i)}
                  className={`flex items-center justify-between gap-2 text-left rounded-2xl border-2 px-4 py-3 text-[15px] font-bold transition-colors cursor-pointer disabled:cursor-default ${cls}`}
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
            <p className="text-sm font-semibold text-ink-soft leading-relaxed mt-3">
              {question.explanation}
            </p>
          )}
          <Link
            href={`/quiz/${slug}`}
            className="inline-block mt-4 text-sm font-extrabold text-primary hover:underline underline-offset-2"
          >
            Bu kategoride daha fazla soru çöz →
          </Link>
        </div>
      )}
    </div>
  );
}
