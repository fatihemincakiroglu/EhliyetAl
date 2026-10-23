"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Trophy } from "lucide-react";
import { scenarios } from "@/lib/scenarios";
import { recordAnswers } from "@/lib/progress";

export default function ScenariosClient() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const scenario = scenarios[current];
  const Scene = scenario.scene;
  const answered = selected !== null;
  const isCorrect = selected === scenario.correctIndex;

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (i === scenario.correctIndex) setCorrectCount((c) => c + 1);
    recordAnswers([{ correct: i === scenario.correctIndex }]);
  };

  const handleNext = () => {
    if (current + 1 >= scenarios.length) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
  };

  if (finished) {
    const acc = Math.round((correctCount / scenarios.length) * 100);
    return (
      <div className="bg-paper">
        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
          <div className="card bg-surface border-2 border-line rounded-3xl p-6 sm:p-8 text-center">
            <span className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-sun-wash text-sun mb-4 animate-pop">
              <Trophy size={32} strokeWidth={2.3} />
            </span>
            <h1 className="font-display font-black text-[28px] sm:text-3xl text-ink mb-1">
              Senaryolar Tamamlandı!
            </h1>
            <p className="text-ink-soft font-semibold mb-6">
              {scenarios.length} senaryonun {correctCount} tanesini doğru
              yanıtladın. (%{acc})
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={restart}
                className="btn-primary rounded-2xl h-[52px] flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
              >
                <RotateCcw size={18} strokeWidth={2.8} /> BAŞTAN BAŞLA
              </button>
              <Link
                href="/pratik-oyunlar"
                className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px]"
              >
                Diğer Oyunlar
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-4 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-success transition-[width] duration-300"
              style={{ width: `${(current / scenarios.length) * 100}%` }}
            />
          </div>
          <span className="font-display font-black text-[15px] text-ink tabular-nums">
            {current + 1}/{scenarios.length}
          </span>
        </div>
        <span className="inline-block text-xs font-extrabold text-ink-soft bg-surface border-2 border-line rounded-full px-2.5 py-1 mb-4">
          Senaryo {current + 1} · {scenario.rule}
        </span>

        <h1 className="font-display font-black text-[21px] sm:text-2xl leading-snug text-ink mb-4">
          {scenario.title}
        </h1>

        {/* Sahne */}
        <div className="card rounded-3xl border-2 border-line bg-surface p-4 mb-5 max-w-sm mx-auto">
          <Scene />
        </div>

        <p className="text-ink font-bold text-[15px] sm:text-base leading-relaxed mb-5">{scenario.question}</p>

        {/* Şıklar */}
        <div className="flex flex-col gap-3 mb-5">
          {scenario.options.map((opt, i) => {
            const isChosen = selected === i;
            const isRight = i === scenario.correctIndex;
            let cls = "border-line bg-surface text-ink hover:border-primary-soft hover:bg-primary-wash";
            let shadow = "var(--color-line)";
            if (answered) {
              if (isRight) {
                cls = "border-success bg-success-wash text-success-ink animate-pop";
                shadow = "var(--color-success)";
              } else if (isChosen) {
                cls = "border-danger bg-danger-wash text-danger-ink animate-pop";
                shadow = "var(--color-danger)";
              } else cls = "border-line bg-surface text-ink-soft opacity-60";
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={answered}
                style={{ boxShadow: `0 3px 0 0 ${shadow}` }}
                className={`rounded-2xl border-2 px-4 py-3.5 min-h-[52px] text-left text-[15px] font-bold transition-colors flex items-center gap-3 cursor-pointer disabled:cursor-default ${cls}`}
              >
                <span className="flex-1">{opt}</span>
                {answered && isRight && <CheckCircle2 size={20} strokeWidth={2.6} className="text-success shrink-0" />}
                {answered && isChosen && !isRight && <XCircle size={20} strokeWidth={2.6} className="text-danger shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Açıklama + devam */}
        {answered && (
          <div
            aria-live="polite"
            className={`rounded-3xl p-4 sm:p-5 animate-sheet-up ${isCorrect ? "bg-success-wash" : "bg-danger-wash"}`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Lightbulb size={18} strokeWidth={2.6} className={isCorrect ? "text-success" : "text-danger"} />
              <span className={`font-display font-black text-lg ${isCorrect ? "text-success-ink" : "text-danger-ink"}`}>
                {isCorrect ? "Doğru!" : "Doğru cevap"}
              </span>
            </div>
            <p className={`text-[15px] font-semibold leading-relaxed mb-4 ${isCorrect ? "text-success-ink" : "text-danger-ink"}`}>
              {scenario.explanation}
            </p>
            <button
              type="button"
              onClick={handleNext}
              className={`w-full rounded-2xl h-[52px] text-[16px] tracking-wide cursor-pointer ${isCorrect ? "btn-success" : "btn-danger"}`}
            >
              {current + 1 >= scenarios.length ? "SONUÇLARI GÖR" : "SONRAKİ SENARYO"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
