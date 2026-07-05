"use client";

import { Check, X } from "lucide-react";
import type { Question } from "@/lib/questions";

type QuestionCardProps = {
  question: Question;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

export default function QuestionCard({
  question,
  selectedIndex,
  onSelect,
}: QuestionCardProps) {
  const answered = selectedIndex !== null;

  return (
    <div className="bg-surface border border-line rounded-2xl p-5 sm:p-8 shadow-[0_1px_2px_rgba(18,24,43,0.04),0_8px_24px_rgba(18,24,43,0.05)]">
      <h2 className="font-display text-xl sm:text-2xl leading-snug text-ink mb-6">
        {question.text}
      </h2>

      <div className="flex flex-col gap-2.5 sm:gap-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctIndex;
          const isSelected = index === selectedIndex;

          let stateClasses =
            "border-line bg-surface hover:border-gold-soft hover:bg-gold-wash";

          if (answered) {
            if (isCorrect) {
              stateClasses = "border-success bg-success-wash";
            } else if (isSelected && !isCorrect) {
              stateClasses = "border-danger bg-danger-wash";
            } else {
              stateClasses = "border-line bg-surface opacity-45";
            }
          }

          return (
            <button
              key={index}
              type="button"
              disabled={answered}
              onClick={() => onSelect(index)}
              className={`group flex items-center justify-between gap-3 text-left rounded-xl border px-4 py-3.5 sm:py-4 font-body text-sm sm:text-base transition-colors ${stateClasses} disabled:cursor-default`}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="font-data text-xs text-ink-soft shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-ink">{option}</span>
              </span>
              {answered && isCorrect && (
                <Check size={18} className="shrink-0 text-success" />
              )}
              {answered && isSelected && !isCorrect && (
                <X size={18} className="shrink-0 text-danger" />
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-6 pt-5 border-t border-line">
          <p className="font-data text-[11px] uppercase tracking-wider text-gold mb-1.5">
            Açıklama
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
