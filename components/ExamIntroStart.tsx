"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, ListChecks, Target, Shuffle, Play, GraduationCap, Zap } from "lucide-react";
import type { Question } from "@/lib/questions";
import QuizRunner, { type RevealMode } from "@/components/QuizRunner";

type ExamIntroStartProps = {
  eyebrow: string;
  title: string;
  description: string;
  questions: Question[];
  quizTitle: string;
  quizSubtitle: string;
  distributionLabel: string;
  backHref: string;
};

const MODES: { value: RevealMode; title: string; hint: string; icon: typeof Zap }[] = [
  {
    value: "end",
    title: "Gerçek sınav",
    hint: "Cevaplar sonda açıklanır, cevabını değiştirebilirsin",
    icon: GraduationCap,
  },
  {
    value: "instant",
    title: "Öğrenme modu",
    hint: "Her sorudan sonra doğru cevap ve açıklama",
    icon: Zap,
  },
];

export default function ExamIntroStart({
  eyebrow,
  title,
  description,
  questions,
  quizTitle,
  quizSubtitle,
  distributionLabel,
  backHref,
}: ExamIntroStartProps) {
  const [started, setStarted] = useState(false);
  const [reveal, setReveal] = useState<RevealMode>("end");

  if (started) {
    return (
      <QuizRunner
        questions={questions}
        title={quizTitle}
        subtitle={quizSubtitle}
        mode="exam"
        timeLimitSeconds={60 * 60}
        backHref={backHref}
        reveal={reveal}
      />
    );
  }

  const facts = [
    { icon: ListChecks, value: `${questions.length}`, label: "Soru" },
    { icon: Clock, value: "60 dk", label: "Süre" },
    { icon: Target, value: "70", label: "Geçme puanı" },
    { icon: Shuffle, value: distributionLabel, label: "Konu dağılımı" },
  ];

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-8 sm:pt-8">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-5"
        >
          <ArrowLeft size={16} strokeWidth={2.6} />
          Geri dön
        </Link>

        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-7">
          <p className="text-[13px] font-extrabold text-primary mb-1">{eyebrow}</p>
          <h1 className="font-display font-black text-2xl sm:text-3xl leading-tight text-ink mb-2">{title}</h1>
          <p className="text-ink-soft font-semibold leading-relaxed mb-5">{description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-surface-alt p-3">
                <f.icon size={18} strokeWidth={2.4} className="text-primary mb-1.5" />
                <p className="font-display font-black text-lg leading-tight text-ink truncate">{f.value}</p>
                <p className="text-xs font-bold text-ink-soft">{f.label}</p>
              </div>
            ))}
          </div>

          <fieldset className="mb-6">
            <legend className="text-[13px] font-extrabold text-ink mb-2.5">Sınav modu</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MODES.map((m) => {
                const active = reveal === m.value;
                return (
                  <label
                    key={m.value}
                    className={`flex items-start gap-3 rounded-2xl border-2 p-3.5 cursor-pointer transition-colors ${
                      active ? "border-primary bg-primary-wash" : "border-line bg-surface hover:border-primary-soft"
                    }`}
                  >
                    <input
                      type="radio"
                      name="reveal"
                      value={m.value}
                      checked={active}
                      onChange={() => setReveal(m.value)}
                      className="sr-only"
                    />
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        active ? "bg-primary text-white" : "bg-surface-alt text-ink-soft"
                      }`}
                    >
                      <m.icon size={18} strokeWidth={2.4} />
                    </span>
                    <span>
                      <span className="block font-extrabold text-[15px] text-ink">{m.title}</span>
                      <span className="block text-[13px] font-semibold text-ink-soft leading-snug">{m.hint}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <ul className="text-sm font-semibold text-ink-soft space-y-1.5 mb-6 list-disc pl-5">
            <li>Her soruda 4 seçenek vardır, yalnızca biri doğrudur.</li>
            <li>Boş bırakılan sorular yanlış sayılır; süre dolunca sınav otomatik biter.</li>
            <li>Sonuç ekranında konu bazlı analiz ve tüm cevapların açıklamaları seni bekler.</li>
          </ul>

          <button
            type="button"
            onClick={() => setStarted(true)}
            className="btn-primary w-full rounded-2xl h-14 flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
          >
            <Play size={18} fill="currentColor" strokeWidth={0} />
            SINAVI BAŞLAT
          </button>
        </section>
      </main>
    </div>
  );
}
