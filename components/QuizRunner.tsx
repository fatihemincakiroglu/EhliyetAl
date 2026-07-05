"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, PartyPopper, AlertTriangle } from "lucide-react";
import type { Category } from "@/lib/questions";
import ProgressTrack from "@/components/ProgressTrack";
import QuestionCard from "@/components/QuestionCard";

type Answer = {
  questionIndex: number;
  selectedIndex: number;
  correct: boolean;
};

export default function QuizRunner({ category }: { category: Category }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const question = category.questions[step];
  const isLast = step === category.questions.length - 1;
  const finished = answers.length === category.questions.length;

  const scorePercent = useMemo(() => {
    if (answers.length === 0) return 0;
    const correctCount = answers.filter((a) => a.correct).length;
    return Math.round((correctCount / answers.length) * 100);
  }, [answers]);

  function handleSelect(index: number) {
    if (selected !== null) return;
    setSelected(index);
    setAnswers((prev) => [
      ...prev,
      {
        questionIndex: step,
        selectedIndex: index,
        correct: index === question.correctIndex,
      },
    ]);
  }

  function handleNext() {
    if (isLast) return;
    setStep((s) => s + 1);
    setSelected(null);
  }

  function handleRestart() {
    setStep(0);
    setSelected(null);
    setAnswers([]);
  }

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors"
          >
            <ArrowLeft size={16} />
            Kategoriler
          </Link>
          <span className="font-data text-xs uppercase tracking-wider text-gold">
            {category.shortName}
          </span>
        </div>

        {!finished && (
          <>
            <div className="mb-6 sm:mb-8">
              <ProgressTrack current={step} total={category.questions.length} />
            </div>
            <QuestionCard
              key={question.id}
              question={question}
              selectedIndex={selected}
              onSelect={handleSelect}
            />
            {selected !== null && (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isLast}
                  className="w-full sm:w-auto font-display text-sm tracking-wide uppercase rounded-full bg-ink text-paper px-6 py-3.5 sm:py-3 hover:bg-gold hover:text-ink transition-colors disabled:opacity-0 disabled:pointer-events-none"
                >
                  Sonraki Soru
                </button>
              </div>
            )}
            {selected !== null && isLast && (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="w-full sm:w-auto font-display text-sm tracking-wide uppercase rounded-full bg-gold text-ink px-6 py-3.5 sm:py-3 hover:bg-gold-soft transition-colors"
                >
                  Sonuçları Gör
                </button>
              </div>
            )}
          </>
        )}

        {finished && (
          <ResultScreen
            category={category}
            answers={answers}
            scorePercent={scorePercent}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}

function ResultScreen({
  category,
  answers,
  scorePercent,
  onRestart,
}: {
  category: Category;
  answers: Answer[];
  scorePercent: number;
  onRestart: () => void;
}) {
  const passed = scorePercent >= 70;
  const correctCount = answers.filter((a) => a.correct).length;
  const wrongAnswers = answers.filter((a) => !a.correct);

  return (
    <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8 text-center shadow-[0_1px_2px_rgba(18,24,43,0.04),0_8px_24px_rgba(18,24,43,0.05)]">
      <div
        className={`inline-flex items-center justify-center rounded-full p-3 mb-4 ${
          passed ? "bg-success-wash text-success" : "bg-danger-wash text-danger"
        }`}
      >
        {passed ? <PartyPopper size={28} /> : <AlertTriangle size={28} />}
      </div>

      <p className="font-data text-xs uppercase tracking-wider text-ink-soft mb-1">
        {category.name}
      </p>
      <h2 className="font-display text-4xl text-ink mb-1">%{scorePercent}</h2>
      <p className="text-ink-soft text-sm mb-6">
        {correctCount} / {category.questions.length} doğru cevap ·{" "}
        {passed ? "Geçtin, tebrikler!" : "Geçme puanı %70, tekrar dene."}
      </p>

      {wrongAnswers.length > 0 && (
        <div className="text-left mb-8">
          <p className="font-data text-[11px] uppercase tracking-wider text-gold mb-3">
            Tekrar gözden geçir
          </p>
          <ul className="flex flex-col gap-2">
            {wrongAnswers.map((a) => (
              <li
                key={a.questionIndex}
                className="text-sm text-ink-soft border border-line rounded-xl px-4 py-3 bg-paper"
              >
                {category.questions[a.questionIndex].text}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={onRestart}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full bg-ink text-paper px-6 py-3.5 sm:py-3 hover:bg-gold hover:text-ink transition-colors"
        >
          <RotateCcw size={16} />
          Tekrar Çöz
        </button>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full border border-line text-ink px-6 py-3.5 sm:py-3 hover:bg-gold-wash hover:border-gold-soft transition-colors"
        >
          Kategorilere Dön
        </Link>
      </div>
    </div>
  );
}
