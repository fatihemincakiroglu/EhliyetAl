"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  RotateCcw,
  PartyPopper,
  AlertTriangle,
  Share2,
  Timer,
  Download,
} from "lucide-react";
import type { Question } from "@/lib/questions";
import ProgressTrack from "@/components/ProgressTrack";
import QuestionCard from "@/components/QuestionCard";
import { addAttempt } from "@/lib/storage";
import type { AttemptMode } from "@/lib/storage";
import { recordOutcome } from "@/lib/spacedRepetition";

type Answer = {
  questionIndex: number;
  selectedIndex: number;
  correct: boolean;
};

type QuizRunnerProps = {
  questions: Question[];
  title: string;
  subtitle: string;
  mode: AttemptMode;
  categorySlug?: string;
  timeLimitSeconds?: number;
  backHref?: string;
};

export default function QuizRunner({
  questions,
  title,
  subtitle,
  mode,
  categorySlug,
  timeLimitSeconds,
  backHref = "/",
}: QuizRunnerProps) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSeconds ?? 0);
  const [timedOut, setTimedOut] = useState(false);
  const [saved, setSaved] = useState(false);

  const question = questions[step];
  const isLast = step === questions.length - 1;
  const finished = answers.length === questions.length || timedOut;

  useEffect(() => {
    if (!timeLimitSeconds || finished) return;
    if (secondsLeft <= 0) {
      setTimedOut(true);
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLimitSeconds, secondsLeft, finished]);

  const scorePercent = useMemo(() => {
    if (answers.length === 0) return 0;
    const correctCount = answers.filter((a) => a.correct).length;
    return Math.round((correctCount / answers.length) * 100);
  }, [answers]);

  useEffect(() => {
    if (finished && !saved && answers.length > 0) {
      addAttempt({
        mode,
        categorySlug,
        total: answers.length,
        correct: answers.filter((a) => a.correct).length,
        wrongQuestionIds: answers
          .filter((a) => !a.correct)
          .map((a) => questions[a.questionIndex].id),
      });
      setSaved(true);
    }
  }, [finished, saved, answers, mode, categorySlug, questions]);

  function handleSelect(index: number) {
    if (selected !== null) return;
    const isCorrect = index === question.correctIndex;
    setSelected(index);
    setAnswers((prev) => [
      ...prev,
      {
        questionIndex: step,
        selectedIndex: index,
        correct: isCorrect,
      },
    ]);
    recordOutcome(question.id, isCorrect);
    fetch("/api/counter", { method: "POST" }).catch(() => {});
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
    setSecondsLeft(timeLimitSeconds ?? 0);
    setTimedOut(false);
    setSaved(false);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <div className="flex items-center justify-between mb-2">
          <Link
            href={backHref}
            className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors"
          >
            <ArrowLeft size={16} />
            Geri
          </Link>
          <span className="font-data text-xs uppercase tracking-wider text-gold">
            {subtitle}
          </span>
        </div>
        <h1 className="font-display text-lg sm:text-xl text-ink mb-6">{title}</h1>

        {timeLimitSeconds !== undefined && !finished && (
          <div
            className={`flex items-center gap-2 mb-6 font-data text-sm ${
              secondsLeft < 60 ? "text-danger" : "text-ink-soft"
            }`}
          >
            <Timer size={16} />
            <span>
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")} kaldı
            </span>
          </div>
        )}

        {!finished && question && (
          <>
            <div className="mb-6 sm:mb-8">
              <ProgressTrack current={step} total={questions.length} />
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
                  className="w-full sm:w-auto font-display text-sm tracking-wide uppercase rounded-full gold-gradient text-ink px-6 py-3.5 sm:py-3 hover:bg-gold-soft transition-colors"
                >
                  Sonuçları Gör
                </button>
              </div>
            )}
          </>
        )}

        {finished && (
          <ResultScreen
            title={title}
            answers={answers}
            totalQuestions={questions.length}
            scorePercent={scorePercent}
            timedOut={timedOut && answers.length < questions.length}
            wrongQuestions={answers
              .filter((a) => !a.correct)
              .map((a) => questions[a.questionIndex])}
            onRestart={handleRestart}
            backHref={backHref}
          />
        )}
      </main>
    </div>
  );
}

function ResultScreen({
  title,
  answers,
  totalQuestions,
  scorePercent,
  timedOut,
  wrongQuestions,
  onRestart,
  backHref,
}: {
  title: string;
  answers: Answer[];
  totalQuestions: number;
  scorePercent: number;
  timedOut: boolean;
  wrongQuestions: Question[];
  onRestart: () => void;
  backHref: string;
}) {
  const passed = scorePercent >= 70;
  const correctCount = answers.filter((a) => a.correct).length;
  const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");

  async function handleShare() {
    const text = `EhliyetAl'da "${title}" testinde %${scorePercent} aldım! (${correctCount}/${answers.length} doğru)`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // user cancelled or share failed, fall back to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setShareStatus("copied");
        setTimeout(() => setShareStatus("idle"), 2000);
      } catch {
        // ignore
      }
    }
  }

  async function handleDownloadPdf() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const dateStr = new Date().toLocaleDateString("tr-TR");

    doc.setFontSize(18);
    doc.text("EhliyetAl - Sinav Sonucu", 20, 20);

    doc.setFontSize(11);
    doc.text(`Test: ${title}`, 20, 32);
    doc.text(`Tarih: ${dateStr}`, 20, 39);
    doc.text(`Puan: %${scorePercent}`, 20, 46);
    doc.text(`Dogru: ${correctCount} / ${answers.length}`, 20, 53);
    doc.text(`Sonuc: ${passed ? "Gectin" : "Gecemedin, tekrar dene"}`, 20, 60);

    let y = 74;
    if (wrongQuestions.length > 0) {
      doc.setFontSize(13);
      doc.text("Tekrar gozden gecirilecek sorular:", 20, y);
      y += 8;
      doc.setFontSize(10);
      for (const q of wrongQuestions) {
        const lines: string[] = doc.splitTextToSize(`- ${q.text}`, 170);
        for (const line of lines) {
          if (y > 280) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, 20, y);
          y += 6;
        }
        y += 2;
      }
    }

    doc.setFontSize(9);
    doc.text("ehliyetal.net", 20, 290);

    doc.save(`ehliyetal-sonuc-${dateStr.replace(/\./g, "-")}.pdf`);
  }

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
        {title}
      </p>
      <h2 className="font-display text-4xl text-ink mb-1">%{scorePercent}</h2>
      <p className="text-ink-soft text-sm mb-1">
        {correctCount} / {answers.length} doğru cevap
        {timedOut ? ` (süre doldu, ${totalQuestions - answers.length} soru cevapsız kaldı)` : ""}
      </p>
      <p className="text-ink-soft text-sm mb-6">
        {passed ? "Geçtin, tebrikler!" : "Geçme puanı %70, tekrar dene."}
      </p>

      {wrongQuestions.length > 0 && (
        <div className="text-left mb-8">
          <p className="font-data text-[11px] uppercase tracking-wider text-gold mb-3">
            Tekrar gözden geçir
          </p>
          <ul className="flex flex-col gap-2">
            {wrongQuestions.map((q) => (
              <li
                key={q.id}
                className="text-sm text-ink-soft border border-line rounded-xl px-4 py-3 bg-paper"
              >
                {q.text}
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
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full border border-line text-ink px-6 py-3.5 sm:py-3 hover:bg-gold-wash hover:border-gold-soft transition-colors"
        >
          <Share2 size={16} />
          {shareStatus === "copied" ? "Kopyalandı!" : "Paylaş"}
        </button>
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full border border-line text-ink px-6 py-3.5 sm:py-3 hover:bg-gold-wash hover:border-gold-soft transition-colors"
        >
          <Download size={16} />
          PDF İndir
        </button>
        <Link
          href={backHref}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase rounded-full border border-line text-ink px-6 py-3.5 sm:py-3 hover:bg-gold-wash hover:border-gold-soft transition-colors"
        >
          Geri Dön
        </Link>
      </div>
    </div>
  );
}
