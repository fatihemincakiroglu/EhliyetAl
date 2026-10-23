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
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
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
    <div>
      <div className={`flex gap-4 mb-5 ${SignComponent ? "flex-col sm:flex-row sm:items-center" : ""}`}>
        {SignComponent && (
          <div className="self-center sm:self-auto shrink-0 rounded-2xl bg-surface border-2 border-line p-2.5">
            <SignComponent size={84} />
          </div>
        )}
        <h2 className="font-display font-black text-[21px] sm:text-2xl leading-snug text-ink">
          {question.text}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctIndex;
          const isSelected = index === selectedIndex;
          const letter = String.fromCharCode(65 + index);

          let state = "border-line bg-surface text-ink hover:border-primary-soft hover:bg-primary-wash";
          let shadow = "var(--color-line)";
          let badge = "border-2 border-line text-ink-soft group-hover:border-primary-soft group-hover:text-primary";

          if (answered) {
            if (isCorrect) {
              state = "border-success bg-success-wash text-success-ink animate-pop";
              shadow = "var(--color-success)";
              badge = "bg-success text-white";
            } else if (isSelected) {
              state = "border-danger bg-danger-wash text-danger-ink animate-pop";
              shadow = "var(--color-danger)";
              badge = "bg-danger text-white";
            } else {
              state = "border-line bg-surface text-ink-soft opacity-60";
            }
          }

          return (
            <button
              key={index}
              type="button"
              disabled={answered}
              onClick={() => onSelect(index)}
              style={{ boxShadow: `0 3px 0 0 ${shadow}` }}
              className={`group flex items-center gap-3 text-left rounded-2xl border-2 px-3.5 py-3 sm:px-4 sm:py-3.5 text-[15px] sm:text-base font-bold transition-[background-color,border-color,transform,box-shadow] duration-100 active:translate-y-[3px] active:!shadow-none disabled:active:translate-y-0 cursor-pointer disabled:cursor-default ${state}`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-[10px] font-black text-sm shrink-0 transition-colors ${badge}`}
              >
                {answered && isCorrect ? (
                  <Check size={17} strokeWidth={3.2} />
                ) : answered && isSelected ? (
                  <X size={17} strokeWidth={3.2} />
                ) : (
                  letter
                )}
              </span>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-[13px] font-bold text-ink-soft">
        <span className="hidden sm:inline">Kısayol: A–D veya 1–4 ile cevapla{answered ? ", Enter ile devam et" : ""}</span>
        <span className="flex items-center gap-4 ml-auto">
          <button
            type="button"
            onClick={toggleSpeak}
            aria-label={speaking ? "Okumayı durdur" : "Soruyu sesli oku"}
            className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
          >
            {speaking ? <VolumeX size={16} strokeWidth={2.4} /> : <Volume2 size={16} strokeWidth={2.4} />}
            {speaking ? "Durdur" : "Dinle"}
          </button>
          <a
            href={`mailto:iletisim@ehliyetal.net?subject=${encodeURIComponent(
              `Soru hatası bildirimi (${question.id})`
            )}&body=${encodeURIComponent(
              `Soru: ${question.text}\n\nBu soruda gördüğüm hata/öneri:\n`
            )}`}
            className="flex items-center gap-1.5 hover:text-danger transition-colors"
          >
            <Flag size={15} strokeWidth={2.4} />
            Hata bildir
          </a>
        </span>
      </div>
    </div>
  );
}
