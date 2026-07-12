"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  PartyPopper,
  AlertTriangle,
  Share2,
  Timer,
  Download,
  Pause,
  Play,
  FlagOff,
  ListChecks,
  CheckCircle2,
} from "lucide-react";
import type { Question } from "@/lib/questions";
import ProgressTrack from "@/components/ProgressTrack";
import QuestionCard from "@/components/QuestionCard";
import { addAttempt } from "@/lib/storage";
import type { AttemptMode } from "@/lib/storage";
import { recordOutcome } from "@/lib/spacedRepetition";

type Answer = {
  selectedIndex: number;
  correct: boolean;
};

type EndReason = "completed" | "timeout" | "manual";

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
  const [answers, setAnswers] = useState<(Answer | null)[]>(
    () => Array(questions.length).fill(null)
  );
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSeconds ?? 0);
  const [timedOut, setTimedOut] = useState(false);
  const [endedEarly, setEndedEarly] = useState(false);
  const [paused, setPaused] = useState(false);
  const [saved, setSaved] = useState(false);

  const question = questions[step];
  const isLast = step === questions.length - 1;
  const finished = timedOut || endedEarly;
  const answeredCount = answers.filter((a) => a !== null).length;
  const currentAnswer = answers[step];

  const endReason: EndReason = timedOut
    ? "timeout"
    : answeredCount === questions.length
      ? "completed"
      : "manual";

  useEffect(() => {
    if (!timeLimitSeconds || finished || paused) return;
    if (secondsLeft <= 0) {
      setTimedOut(true);
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLimitSeconds, secondsLeft, finished, paused]);

  const scorePercent = useMemo(() => {
    if (questions.length === 0) return 0;
    const correctCount = answers.filter((a) => a?.correct).length;
    // Puan, yanıtlanan değil TOPLAM soru sayısı üzerinden hesaplanır;
    // boş bırakılan sorular gerçek sınavdaki gibi yanlış sayılır.
    return Math.round((correctCount / questions.length) * 100);
  }, [answers, questions.length]);

  useEffect(() => {
    if (finished && !saved && answeredCount > 0) {
      // Sınav (exam) ve tekrar (review) modunda başarı, gerçek sınavdaki
      // gibi TOPLAM soru üzerinden ölçülür; boşlar yanlış sayılır.
      // Serbest kategori pratiğinde ise yalnızca çözülen sorulardaki
      // isabet oranı anlamlı olduğu için yanıtlanan sayı kaydedilir.
      const totalForStats =
        mode === "category" ? answeredCount : questions.length;
      addAttempt({
        mode,
        categorySlug,
        total: totalForStats,
        correct: answers.filter((a) => a?.correct).length,
        wrongQuestionIds: answers
          .map((a, i) => (a && !a.correct ? questions[i].id : null))
          .filter((id): id is string => id !== null),
      });
      setSaved(true);
    }
  }, [finished, saved, answeredCount, answers, mode, categorySlug, questions]);

  function handleSelect(index: number) {
    if (currentAnswer !== null) return;
    const isCorrect = index === question.correctIndex;
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = { selectedIndex: index, correct: isCorrect };
      return next;
    });
    recordOutcome(question.id, isCorrect);
    fetch("/api/counter", { method: "POST" }).catch(() => {});
  }

  function handlePrev() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleNext() {
    setStep((s) => Math.min(questions.length - 1, s + 1));
  }

  function handleRestart() {
    setStep(0);
    setAnswers(Array(questions.length).fill(null));
    setSecondsLeft(timeLimitSeconds ?? 0);
    setTimedOut(false);
    setEndedEarly(false);
    setPaused(false);
    setSaved(false);
  }

  function handleFinishNow() {
    if (answeredCount === 0) return;
    const blank = questions.length - answeredCount;
    const confirmed = window.confirm(
      blank > 0
        ? `Sınavı şimdi bitirmek istediğine emin misin? ${blank} soru boş kalacak.`
        : "Sınavı bitirmek istediğine emin misin?"
    );
    if (confirmed) {
      setEndedEarly(true);
    }
  }

  function handleTogglePause() {
    setPaused((p) => !p);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href={backHref}
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-4 w-fit"
        >
          <ArrowLeft size={16} />
          Geri
        </Link>

        {!finished && (
          <div className="premium-card bg-surface border border-line rounded-2xl p-4 sm:p-5 mb-5">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
              <div>
                <p className="font-data text-[10px] uppercase tracking-wider text-gold mb-0.5">
                  {subtitle}
                </p>
                <h1 className="font-display text-base sm:text-lg text-ink">{title}</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-ink-soft" title="Toplam soru">
                  <ListChecks size={15} />
                  <span className="font-data text-xs sm:text-sm">{questions.length}</span>
                </div>
                <div className="flex items-center gap-1.5 text-ink-soft" title="Cevaplanan">
                  <CheckCircle2 size={15} />
                  <span className="font-data text-xs sm:text-sm">{answeredCount}</span>
                </div>
                {timeLimitSeconds !== undefined && (
                  <div
                    className={`flex items-center gap-1.5 font-data text-xs sm:text-sm ${
                      secondsLeft < 60 ? "text-danger" : "text-ink-soft"
                    }`}
                  >
                    <Timer size={15} />
                    <span>
                      {paused
                        ? "Duraklatıldı"
                        : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
                    </span>
                  </div>
                )}
                {timeLimitSeconds !== undefined && (
                  <button
                    type="button"
                    onClick={handleTogglePause}
                    aria-label={paused ? "Devam et" : "Duraklat"}
                    className="flex items-center justify-center w-7 h-7 rounded-full text-ink-soft hover:bg-surface-alt hover:text-ink transition-colors"
                  >
                    {paused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                )}
                {answeredCount > 0 && (
                  <button
                    type="button"
                    onClick={handleFinishNow}
                    className="flex items-center gap-1.5 font-data text-xs text-ink-soft hover:text-danger transition-colors"
                  >
                    <FlagOff size={14} />
                    <span className="hidden sm:inline">Bitir</span>
                  </button>
                )}
              </div>
            </div>
            <ProgressTrack current={step} total={questions.length} />
          </div>
        )}

        {!finished && paused && (
          <div className="premium-card bg-surface border border-line rounded-2xl p-10 text-center">
            <Pause size={28} className="mx-auto mb-4 text-gold" />
            <h2 className="font-display text-xl text-ink mb-2">Sınav Duraklatıldı</h2>
            <p className="text-ink-soft text-sm mb-6">
              Süre durdu. Devam etmeye hazır olduğunda aşağıdaki butona bas.
            </p>
            <button
              type="button"
              onClick={handleTogglePause}
              className="btn-hard inline-flex items-center gap-2 font-display text-sm tracking-wide rounded-xl gold-gradient text-white px-6 py-3.5 transition-colors"
            >
              <Play size={16} />
              Devam Et
            </button>
          </div>
        )}

        {!finished && !paused && question && (
          <>
            <QuestionCard
              key={question.id}
              question={question}
              selectedIndex={currentAnswer?.selectedIndex ?? null}
              onSelect={handleSelect}
            />

            <div className="flex items-center justify-between gap-3 mt-5">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 0}
                className="btn-hard-outline flex items-center gap-2 font-display text-sm tracking-wide rounded-xl border border-line text-ink bg-surface px-5 py-3 hover:bg-surface-alt transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface"
              >
                <ArrowLeft size={16} />
                Önceki
              </button>

              {isLast ? (
                <button
                  type="button"
                  onClick={handleFinishNow}
                  disabled={answeredCount === 0}
                  className="btn-hard flex items-center gap-2 font-display text-sm tracking-wide rounded-xl gold-gradient text-white px-6 py-3 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Testi Bitir
                  <FlagOff size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-hard flex items-center gap-2 font-display text-sm tracking-wide rounded-xl gold-gradient text-white px-6 py-3 transition-colors"
                >
                  Sonraki
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </>
        )}

        {finished && (
          <ResultScreen
            title={title}
            answers={answers}
            totalQuestions={questions.length}
            scorePercent={scorePercent}
            endReason={endReason}
            wrongQuestions={answers
              .map((a, i) => (a && !a.correct ? questions[i] : null))
              .filter((q): q is Question => q !== null)}
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
  endReason,
  wrongQuestions,
  onRestart,
  backHref,
}: {
  title: string;
  answers: (Answer | null)[];
  totalQuestions: number;
  scorePercent: number;
  endReason: EndReason;
  wrongQuestions: Question[];
  onRestart: () => void;
  backHref: string;
}) {
  const passed = scorePercent >= 70;
  const correctCount = answers.filter((a) => a?.correct).length;
  const answeredCount = answers.filter((a) => a !== null).length;
  const wrongCount = answeredCount - correctCount;
  const blankCount = totalQuestions - answeredCount;
  const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");

  const endReasonLabel: Record<EndReason, string> = {
    completed: "Tüm sorular tamamlandı",
    timeout: "Süre doldu",
    manual: "Sınav erken bitirildi",
  };

  async function handleShare() {
    const text = `EhliyetAl'da "${title}" testinde %${scorePercent} aldım! (${correctCount}/${totalQuestions} doğru)`;
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
    doc.text(`Dogru: ${correctCount}  Yanlis: ${wrongCount}  Bos: ${blankCount}`, 20, 53);
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
    <div className="premium-card bg-surface border border-line rounded-2xl p-6 sm:p-8 text-center">
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
      <p className="text-ink-soft text-sm mb-1">{endReasonLabel[endReason]}</p>
      <p className="text-ink-soft text-sm mb-6">
        {passed ? "Geçtin, tebrikler!" : "Geçme puanı %70, tekrar dene."}
      </p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="rounded-xl border border-line bg-success-wash p-3">
          <p className="font-display text-xl text-success">{correctCount}</p>
          <p className="text-[10px] text-ink-soft font-data uppercase tracking-wide mt-0.5">
            Doğru
          </p>
        </div>
        <div className="rounded-xl border border-line bg-danger-wash p-3">
          <p className="font-display text-xl text-danger">{wrongCount}</p>
          <p className="text-[10px] text-ink-soft font-data uppercase tracking-wide mt-0.5">
            Yanlış
          </p>
        </div>
        <div className="rounded-xl border border-line bg-surface-alt p-3">
          <p className="font-display text-xl text-ink-soft">{blankCount}</p>
          <p className="text-[10px] text-ink-soft font-data uppercase tracking-wide mt-0.5">
            Boş
          </p>
        </div>
      </div>

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
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide btn-hard rounded-xl bg-ink text-white px-6 py-3.5 sm:py-3 hover:bg-ink/90 transition-colors"
        >
          <RotateCcw size={16} />
          Tekrar Çöz
        </button>
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide btn-hard-outline rounded-xl border border-line text-ink bg-surface px-6 py-3.5 sm:py-3 hover:bg-surface-alt transition-colors"
        >
          <Share2 size={16} />
          {shareStatus === "copied" ? "Kopyalandı!" : "Paylaş"}
        </button>
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide btn-hard-outline rounded-xl border border-line text-ink bg-surface px-6 py-3.5 sm:py-3 hover:bg-surface-alt transition-colors"
        >
          <Download size={16} />
          PDF İndir
        </button>
        <Link
          href={backHref}
          className="flex items-center justify-center gap-2 font-display text-sm tracking-wide btn-hard-outline rounded-xl border border-line text-ink bg-surface px-6 py-3.5 sm:py-3 hover:bg-surface-alt transition-colors"
        >
          Geri Dön
        </Link>
      </div>
    </div>
  );
}
