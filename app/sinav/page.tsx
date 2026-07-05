"use client";

import { useMemo } from "react";
import { getAllQuestions } from "@/lib/questions";
import QuizRunner from "@/components/QuizRunner";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SinavPage() {
  const questions = useMemo(() => {
    const all = getAllQuestions();
    return shuffle(all).slice(0, Math.min(50, all.length));
  }, []);

  return (
    <QuizRunner
      questions={questions}
      title="Gerçek Sınav Simülasyonu"
      subtitle="Karışık"
      mode="exam"
      timeLimitSeconds={60 * 60}
      backHref="/"
    />
  );
}
