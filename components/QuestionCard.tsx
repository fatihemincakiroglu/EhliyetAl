"use client";

import { useEffect, useState } from "react";
import { Check, X, Volume2, VolumeX, Flag } from "lucide-react";
import type { Question } from "@/lib/questions";
import { signRegistry } from "@/components/TrafficSigns";

type QuestionCardProps = {
  question: Question;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

const difficultyLabel: Record<Question["difficulty"], string> = {
  kolay: "Kolay",
  orta: "Orta",
  zor: "Zor",
};

const difficultyClass: Record<Question["difficulty"], string> = {
  kolay: "bg-success-wash text-success",
  orta: "bg-gold-wash text-gold",
  zor: "bg-danger-wash text-danger",
};

export default function QuestionCard({
  question,
  selectedIndex,
  onSelect,
}: QuestionCardProps) {
  const answered = selectedIndex !== null;
  const [speaking, setSpeaking] = useState(false);
  const SignComponent = question.visualId ? signRegistry[question.visualId] : undefined;

  useEffect(() => {
    setSpeaking(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, [question.id]);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (answered) return;
      const key = e.key.toLowerCase();
      const letterMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
      const numberMap: Record<string, number> = { "1": 0, "2": 1, "3": 2, "4": 3 };
      const index = letterMap[key] ?? numberMap[key];
      if (index !== undefined && index < question.options.length) {
        onSelect(index);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [answered, question.options.length, onSelect]);

  function toggleSpeak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(
      `${question.text}. Seçenekler: ${question.options
        .map((o, i) => `${String.fromCharCode(65 + i)}: ${o}`)
        .join(". ")}`
    );
    utterance.lang = "tr-TR";
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return (
    <div className="sticker-card bg-surface border-2 rounded-2xl p-5 sm:p-8">
      <div className="flex items-center justify-between gap-3 mb-4">
        <span
          className={`font-data text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${difficultyClass[question.difficulty]}`}
        >
          {difficultyLabel[question.difficulty]}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:iletisim@ehliyetal.net?subject=${encodeURIComponent(
              `Soru hatası bildirimi (${question.id})`
            )}&body=${encodeURIComponent(
              `Soru: ${question.text}\n\nBu soruda gördüğüm hata/öneri:\n`
            )}`}
            className="hidden sm:flex items-center gap-1.5 text-xs text-ink-soft hover:text-danger transition-colors"
          >
            <Flag size={13} />
            <span>Hata bildir</span>
          </a>
          <button
            type="button"
            onClick={toggleSpeak}
            aria-label={speaking ? "Okumayı durdur" : "Soruyu sesli oku"}
            className="flex items-center gap-1.5 text-xs text-ink-soft hover:text-gold transition-colors"
          >
            {speaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span className="hidden sm:inline">{speaking ? "Durdur" : "Dinle"}</span>
          </button>
        </div>
      </div>

      {SignComponent && (
        <div className="flex justify-center mb-5">
          <SignComponent size={96} />
        </div>
      )}

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

      <p className="mt-3 text-[11px] text-ink-soft/70 font-data hidden sm:block">
        Klavye kısayolu: A/B/C/D veya 1/2/3/4 tuşlarıyla cevapla
      </p>

      {answered && (
        <div className="mt-6 pt-5 border-t border-line" aria-live="polite">
          <p className="font-data text-[11px] uppercase tracking-wider text-gold mb-1.5">
            Açıklama
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">
            <span className="sr-only">
              {selectedIndex === question.correctIndex ? "Doğru cevap. " : "Yanlış cevap. "}
            </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
