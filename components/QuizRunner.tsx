"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  Check,
  RotateCcw,
  Share2,
  Timer,
  Download,
  Pause,
  Play,
  FlagOff,
} from "lucide-react";
import type { Question } from "@/lib/questions";
import ProgressTrack from "@/components/ProgressTrack";
import QuestionCard from "@/components/QuestionCard";
import { addAttempt } from "@/lib/storage";
import type { AttemptMode } from "@/lib/storage";
import { recordOutcome } from "@/lib/spacedRepetition";
import { markActiveToday } from "@/lib/progress";

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

  // Odak modu: soru çözerken alt menü ve footer gizlenir
  useEffect(() => {
    if (finished) return;
    document.body.setAttribute("data-quiz-active", "");
    return () => document.body.removeAttribute("data-quiz-active");
  }, [finished]);

  // Enter: cevaplandıysa sonraki soruya geç
  useEffect(() => {
    if (finished || paused || currentAnswer === null || isLast) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Enter" && !(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLAnchorElement)) {
        setStep((s) => Math.min(questions.length - 1, s + 1));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finished, paused, currentAnswer, isLast, questions.length]);

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
    markActiveToday();
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

  const timeText = paused
    ? "Duraklatıldı"
    : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const answeredCorrect = currentAnswer?.correct ?? false;

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-6">
        {!finished && (
          <>
            {/* Üst bar: çık · ilerleme · sayaç */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={backHref}
                aria-label="Testten çık"
                className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full text-ink-soft hover:bg-surface-alt hover:text-ink transition-colors shrink-0"
              >
                <X size={24} strokeWidth={2.8} />
              </Link>
              <ProgressTrack done={answeredCount} total={questions.length} />
              <span className="font-display font-black text-[15px] text-ink tabular-nums shrink-0">
                {step + 1}/{questions.length}
              </span>
            </div>

            {/* Bilgi satırı */}
            <div className="mt-3 mb-5 sm:mb-7 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold text-ink-soft bg-surface border-2 border-line rounded-full px-2.5 py-1 truncate max-w-[55%]">
                {subtitle}
              </span>
              {question && (
                <span className={`text-xs font-extrabold rounded-full px-2.5 py-1 ${difficultyClass[question.difficulty]}`}>
                  {difficultyLabel[question.difficulty]}
                </span>
              )}
              <span className="flex-1" />
              {timeLimitSeconds !== undefined && (
                <span
                  className={`flex items-center gap-1 text-[13px] font-extrabold tabular-nums ${
                    secondsLeft < 60 ? "text-danger" : "text-ink-soft"
                  }`}
                  aria-label={`Kalan süre ${timeText}`}
                >
                  <Timer size={15} strokeWidth={2.6} />
                  {timeText}
                </span>
              )}
              {timeLimitSeconds !== undefined && (
                <button
                  type="button"
                  onClick={handleTogglePause}
                  aria-label={paused ? "Devam et" : "Duraklat"}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-ink-soft hover:bg-surface-alt hover:text-ink transition-colors cursor-pointer"
                >
                  {paused ? <Play size={15} strokeWidth={2.6} /> : <Pause size={15} strokeWidth={2.6} />}
                </button>
              )}
              {answeredCount > 0 && (
                <button
                  type="button"
                  onClick={handleFinishNow}
                  className="flex items-center gap-1 text-[13px] font-extrabold text-ink-soft hover:text-danger transition-colors cursor-pointer"
                >
                  <FlagOff size={15} strokeWidth={2.6} />
                  Bitir
                </button>
              )}
            </div>
          </>
        )}

        {!finished && paused && (
          <div className="card bg-surface border-2 border-line rounded-3xl p-8 sm:p-10 text-center">
            <span className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary-wash text-primary flex items-center justify-center">
              <Pause size={26} strokeWidth={2.6} />
            </span>
            <h2 className="font-display font-black text-2xl text-ink mb-2">Mola verdin</h2>
            <p className="text-ink-soft font-semibold mb-6">
              Süre durdu. Hazır olduğunda kaldığın yerden devam et.
            </p>
            <button
              type="button"
              onClick={handleTogglePause}
              className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-[15px] tracking-wide cursor-pointer"
            >
              <Play size={17} fill="currentColor" strokeWidth={0} />
              DEVAM ET
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

            {/* Alt bölüm: cevaplanınca geri bildirim paneline dönüşür */}
            <div
              className={`sticky bottom-0 z-10 mt-6 -mx-4 sm:mx-0 px-4 sm:px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-5 rounded-t-3xl sm:rounded-3xl ${
                currentAnswer === null
                  ? "bg-paper/95 backdrop-blur-sm"
                  : answeredCorrect
                    ? "bg-success-wash animate-sheet-up"
                    : "bg-danger-wash animate-sheet-up"
              }`}
            >
              {currentAnswer !== null && (
                <div aria-live="polite" className="mb-4">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${
                        answeredCorrect ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {answeredCorrect ? <Check size={18} strokeWidth={3.4} /> : <X size={18} strokeWidth={3.4} />}
                    </span>
                    <span
                      className={`font-display font-black text-xl ${
                        answeredCorrect ? "text-success-ink" : "text-danger-ink"
                      }`}
                    >
                      {answeredCorrect ? "Harika, doğru!" : "Doğru cevap: " + String.fromCharCode(65 + question.correctIndex)}
                    </span>
                  </div>
                  <p
                    className={`text-[15px] font-semibold leading-relaxed ${
                      answeredCorrect ? "text-success-ink" : "text-danger-ink"
                    }`}
                  >
                    {question.explanation}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={step === 0}
                  aria-label="Önceki soru"
                  className="btn-soft rounded-2xl h-[52px] px-4 sm:px-5 flex items-center justify-center gap-2 text-ink text-[15px] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft size={19} strokeWidth={2.8} />
                  <span className="hidden sm:inline">Önceki</span>
                </button>

                {isLast ? (
                  <button
                    type="button"
                    onClick={handleFinishNow}
                    disabled={answeredCount === 0}
                    className="btn-primary flex-1 rounded-2xl h-[52px] text-[16px] tracking-wide disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    TESTİ BİTİR
                  </button>
                ) : currentAnswer === null ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-soft flex-1 rounded-2xl h-[52px] text-ink-soft text-[16px] tracking-wide cursor-pointer"
                  >
                    ATLA
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    autoFocus
                    className={`flex-1 rounded-2xl h-[52px] text-[16px] tracking-wide cursor-pointer ${
                      answeredCorrect ? "btn-success" : "btn-danger"
                    }`}
                  >
                    DEVAM ET
                  </button>
                )}
              </div>
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

const difficultyLabel: Record<Question["difficulty"], string> = {
  kolay: "Kolay",
  orta: "Orta",
  zor: "Zor",
};

const difficultyClass: Record<Question["difficulty"], string> = {
  kolay: "bg-success-wash text-success-ink",
  orta: "bg-sun-wash text-tangerine-ink",
  zor: "bg-danger-wash text-danger-ink",
};

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
    <div className="flex flex-col gap-5">
      <section className="card bg-surface border-2 border-line rounded-3xl p-6 sm:p-8 text-center">
        <p className="text-[13px] font-extrabold text-ink-soft mb-4">{title}</p>
        <div
          className={`mx-auto w-36 h-36 rounded-full flex flex-col items-center justify-center mb-4 ${
            passed ? "bg-success-wash" : "bg-danger-wash"
          }`}
        >
          <span className={`font-display font-black text-5xl leading-none ${passed ? "text-success-ink" : "text-danger-ink"}`}>
            {scorePercent}
          </span>
          <span className={`text-sm font-extrabold mt-1 ${passed ? "text-success-ink" : "text-danger-ink"}`}>
            / 100
          </span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-ink mb-1">
          {passed ? "Geçtin, tebrikler!" : "Bu sefer olmadı"}
        </h2>
        <p className="text-ink-soft font-semibold">
          {endReasonLabel[endReason]} · {passed ? "Baraj 70, sen geçtin." : `Baraja ${70 - scorePercent} puan kaldı.`}
        </p>

        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="rounded-2xl bg-success-wash p-3">
            <p className="font-display font-black text-2xl text-success-ink">{correctCount}</p>
            <p className="text-xs font-extrabold text-success-ink mt-0.5">Doğru</p>
          </div>
          <div className="rounded-2xl bg-danger-wash p-3">
            <p className="font-display font-black text-2xl text-danger-ink">{wrongCount}</p>
            <p className="text-xs font-extrabold text-danger-ink mt-0.5">Yanlış</p>
          </div>
          <div className="rounded-2xl bg-surface-alt p-3">
            <p className="font-display font-black text-2xl text-ink-soft">{blankCount}</p>
            <p className="text-xs font-extrabold text-ink-soft mt-0.5">Boş</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onRestart}
            className="btn-primary rounded-2xl h-[52px] flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
          >
            <RotateCcw size={18} strokeWidth={2.8} />
            TEKRAR ÇÖZ
          </button>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-sm cursor-pointer"
            >
              <Share2 size={16} strokeWidth={2.6} />
              {shareStatus === "copied" ? "Kopyalandı" : "Paylaş"}
            </button>
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-sm cursor-pointer"
            >
              <Download size={16} strokeWidth={2.6} />
              PDF
            </button>
            <Link
              href={backHref}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-sm"
            >
              Çıkış
            </Link>
          </div>
        </div>
      </section>

      {wrongQuestions.length > 0 && (
        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6">
          <h3 className="font-display font-black text-lg text-ink mb-3">
            Tekrar gözden geçir ({wrongQuestions.length})
          </h3>
          <ul className="flex flex-col gap-2">
            {wrongQuestions.map((q) => (
              <li
                key={q.id}
                className="text-[15px] font-semibold text-ink rounded-2xl bg-danger-wash/60 px-4 py-3"
              >
                {q.text}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
