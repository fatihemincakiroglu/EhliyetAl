"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Trophy } from "lucide-react";
import { scenarios } from "@/lib/scenarios";

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
      <div className="min-h-screen bg-paper">
        <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
          <div className="premium-card rounded-2xl border border-line bg-surface p-6 sm:p-8 text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-wash text-gold mb-4">
              <Trophy size={28} />
            </span>
            <h1 className="font-display text-2xl sm:text-3xl text-ink mb-2">
              Senaryolar Tamamlandı!
            </h1>
            <p className="text-ink-soft text-sm mb-6">
              {scenarios.length} senaryonun {correctCount} tanesini doğru
              yanıtladın. (%{acc})
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={restart}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-display text-white hover:brightness-95 transition"
              >
                <RotateCcw size={18} /> Baştan Başla
              </button>
              <Link
                href="/pratik-oyunlar"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 font-display text-ink hover:bg-gold-wash transition"
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
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-6 sm:py-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-display text-ink">
            Senaryo {current + 1} / {scenarios.length}
          </span>
          <span className="text-xs text-ink-soft">{scenario.rule}</span>
        </div>

        <div className="h-1.5 w-full rounded-full bg-line/50 mb-6 overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${(current / scenarios.length) * 100}%` }}
          />
        </div>

        <h1 className="font-display text-xl sm:text-2xl text-ink mb-4">
          {scenario.title}
        </h1>

        {/* Sahne */}
        <div className="rounded-2xl border border-line bg-surface p-4 mb-5 max-w-sm mx-auto">
          <Scene />
        </div>

        <p className="text-ink text-sm sm:text-base leading-relaxed mb-5">
          {scenario.question}
        </p>

        {/* Şıklar */}
        <div className="flex flex-col gap-2.5 mb-5">
          {scenario.options.map((opt, i) => {
            const isChosen = selected === i;
            const isRight = i === scenario.correctIndex;
            let cls = "border-line bg-surface hover:bg-gold-wash text-ink";
            if (answered) {
              if (isRight) cls = "border-success bg-success-wash text-ink";
              else if (isChosen) cls = "border-danger bg-danger-wash text-ink";
              else cls = "border-line bg-surface text-ink-soft opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={`premium-card rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors flex items-center gap-3 ${cls}`}
              >
                <span className="flex-1">{opt}</span>
                {answered && isRight && (
                  <CheckCircle2 size={18} className="text-success shrink-0" />
                )}
                {answered && isChosen && !isRight && (
                  <XCircle size={18} className="text-danger shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Açıklama */}
        {answered && (
          <div
            className={`rounded-xl border p-4 mb-5 ${
              isCorrect
                ? "border-success bg-success-wash"
                : "border-gold-soft bg-gold-wash"
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Lightbulb size={16} className="text-gold" />
              <span className="font-display text-sm text-ink">
                {isCorrect ? "Doğru!" : "Doğru cevap"}
              </span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">
              {scenario.explanation}
            </p>
          </div>
        )}

        {answered && (
          <button
            onClick={handleNext}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-display text-white hover:brightness-95 transition"
          >
            {current + 1 >= scenarios.length ? "Sonuçları Gör" : "Sonraki Senaryo"}
          </button>
        )}
      </main>
    </div>
  );
}
