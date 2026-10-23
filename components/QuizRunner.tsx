"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, Check, Timer, Pause, Play, FlagOff, LayoutGrid } from "lucide-react";
import type { Question } from "@/lib/questions";
import ProgressTrack from "@/components/ProgressTrack";
import QuestionCard from "@/components/QuestionCard";
import QuizResult, { type QuizAnswer, type EndReason } from "@/components/QuizResult";
import { addAttempt } from "@/lib/storage";
import type { AttemptMode } from "@/lib/storage";
import { recordOutcome } from "@/lib/spacedRepetition";
import { PASS_MARK, recordAnswers, recordExamFinished } from "@/lib/progress";
import { celebrate } from "@/lib/celebrate";

export type RevealMode = "instant" | "end";

type QuizRunnerProps = {
  questions: Question[];
  title: string;
  subtitle: string;
  mode: AttemptMode;
  categorySlug?: string;
  timeLimitSeconds?: number;
  backHref?: string;
  /**
   * instant: her cevaptan sonra doğru/yanlış + açıklama (varsayılan).
   * end: gerçek sınav gibi; cevaplar değiştirilebilir, sonuçlar sınav sonunda.
   */
  reveal?: RevealMode;
};

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

export default function QuizRunner({
  questions,
  title,
  subtitle,
  mode,
  categorySlug,
  timeLimitSeconds,
  backHref = "/",
  reveal = "instant",
}: QuizRunnerProps) {
  const instant = reveal === "instant";
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(QuizAnswer | null)[]>(() => Array(questions.length).fill(null));
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSeconds ?? 0);
  const [endedEarly, setEndedEarly] = useState(false);
  const [paused, setPaused] = useState(false);
  const [combo, setCombo] = useState(0);
  const [showNavigator, setShowNavigator] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const savedRef = useRef(false);

  const timedOut = timeLimitSeconds !== undefined && timeLimitSeconds > 0 && secondsLeft <= 0;
  const finished = timedOut || endedEarly;
  const question = questions[step];
  const isLast = step === questions.length - 1;
  const answeredCount = answers.filter((a) => a !== null).length;
  const currentAnswer = answers[step];
  const locked = instant && currentAnswer !== null;

  const endReason: EndReason = timedOut ? "timeout" : answeredCount === questions.length ? "completed" : "manual";

  const scorePercent = useMemo(() => {
    if (questions.length === 0) return 0;
    // Puan TOPLAM soru üzerinden: boşlar gerçek sınavdaki gibi yanlış sayılır.
    return Math.round((answers.filter((a) => a?.correct).length / questions.length) * 100);
  }, [answers, questions.length]);

  // Geri sayım
  useEffect(() => {
    if (!timeLimitSeconds || finished || paused) return;
    const interval = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(interval);
  }, [timeLimitSeconds, finished, paused]);

  // Odak modu: soru çözerken alt menü ve footer gizlenir
  useEffect(() => {
    if (finished) return;
    document.body.setAttribute("data-quiz-active", "");
    return () => document.body.removeAttribute("data-quiz-active");
  }, [finished]);

  // Enter: sonraki soru
  useEffect(() => {
    if (finished || paused || currentAnswer === null || isLast) return;
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Enter") return;
      if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) return;
      setStep((s) => Math.min(questions.length - 1, s + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finished, paused, currentAnswer, isLast, questions.length]);

  // Sınav bittiğinde bir kez kaydet
  useEffect(() => {
    if (!finished || savedRef.current || answeredCount === 0) return;
    savedRef.current = true;

    const correctCount = answers.filter((a) => a?.correct).length;
    addAttempt({
      mode,
      categorySlug,
      // Kategori pratiğinde yalnızca çözülenler anlamlı; sınav/tekrarda toplam soru.
      total: mode === "category" ? answeredCount : questions.length,
      correct: correctCount,
      wrongQuestionIds: answers
        .map((a, i) => (a && !a.correct ? questions[i].id : null))
        .filter((id): id is string => id !== null),
    });

    let gained = 0;
    if (!instant) {
      // Gerçek sınav modu: tekrar sistemi ve XP sınav sonunda işlenir
      const answered: { correct: boolean }[] = [];
      answers.forEach((a, i) => {
        if (!a) return;
        recordOutcome(questions[i].id, a.correct);
        answered.push({ correct: a.correct });
      });
      gained += recordAnswers(answered);
    }
    const passed = scorePercent >= PASS_MARK;
    if (mode === "exam") {
      gained += recordExamFinished(passed);
      if (passed) celebrate({ kind: "pass", title: "Sınavı geçtin!", subtitle: `${scorePercent} puan · tebrikler` });
    }
    if (gained > 0) {
      // Effect içinde senkron setState yerine bir sonraki karede güncelle
      requestAnimationFrame(() => setXpGained((x) => x + gained));
    }
  }, [finished, answeredCount, answers, mode, categorySlug, questions, instant, scorePercent]);

  function handleSelect(index: number) {
    if (finished) return;
    if (instant && currentAnswer !== null) return;
    const isCorrect = index === question.correctIndex;
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = { selectedIndex: index, correct: isCorrect };
      return next;
    });

    if (instant) {
      const nextCombo = isCorrect ? combo + 1 : 0;
      setCombo(nextCombo);
      recordOutcome(question.id, isCorrect);
      const gained = recordAnswers([{ correct: isCorrect, combo: nextCombo }]);
      setXpGained((x) => x + gained);
    }
    if (currentAnswer === null) {
      fetch("/api/counter", { method: "POST" }).catch(() => {});
    }
  }

  function goTo(i: number) {
    setStep(Math.max(0, Math.min(questions.length - 1, i)));
    setShowNavigator(false);
  }

  function handleRestart() {
    savedRef.current = false;
    setStep(0);
    setAnswers(Array(questions.length).fill(null));
    setSecondsLeft(timeLimitSeconds ?? 0);
    setEndedEarly(false);
    setPaused(false);
    setCombo(0);
    setXpGained(0);
  }

  function handleFinishNow() {
    if (answeredCount === 0) return;
    const blank = questions.length - answeredCount;
    const confirmed = window.confirm(
      blank > 0
        ? `Sınavı şimdi bitirmek istediğine emin misin? ${blank} soru boş kalacak.`
        : "Sınavı bitirmek istediğine emin misin?"
    );
    if (confirmed) setEndedEarly(true);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeText = paused
    ? "Duraklatıldı"
    : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const answeredCorrect = currentAnswer?.correct ?? false;

  if (finished) {
    return (
      <div className="bg-paper">
        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-8">
          <QuizResult
            title={title}
            mode={mode}
            questions={questions}
            answers={answers}
            scorePercent={scorePercent}
            endReason={endReason}
            xpGained={xpGained}
            onRestart={handleRestart}
            backHref={backHref}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-6">
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
          <span className="text-xs font-extrabold text-ink-soft bg-surface border-2 border-line rounded-full px-2.5 py-1 truncate max-w-[45%]">
            {subtitle}
          </span>
          {question && (
            <span className={`text-xs font-extrabold rounded-full px-2.5 py-1 ${difficultyClass[question.difficulty]}`}>
              {difficultyLabel[question.difficulty]}
            </span>
          )}
          {instant && combo >= 3 && (
            <span className="text-xs font-extrabold rounded-full px-2.5 py-1 bg-sun-wash text-tangerine-ink animate-pop">
              {combo} seri
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
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Devam et" : "Duraklat"}
              className="w-8 h-8 flex items-center justify-center rounded-full text-ink-soft hover:bg-surface-alt hover:text-ink transition-colors cursor-pointer"
            >
              {paused ? <Play size={15} strokeWidth={2.6} /> : <Pause size={15} strokeWidth={2.6} />}
            </button>
          )}
          {questions.length > 10 && (
            <button
              type="button"
              onClick={() => setShowNavigator((s) => !s)}
              aria-expanded={showNavigator}
              aria-label="Soru listesi"
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                showNavigator ? "bg-primary-wash text-primary" : "text-ink-soft hover:bg-surface-alt hover:text-ink"
              }`}
            >
              <LayoutGrid size={15} strokeWidth={2.6} />
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

        {/* Soru listesi (gezgin) */}
        {showNavigator && (
          <div className="card bg-surface border-2 border-line rounded-3xl p-4 mb-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-display font-black text-[15px] text-ink">Sorular</span>
              <span className="text-xs font-bold text-ink-soft">
                {answeredCount} cevaplandı · {questions.length - answeredCount} boş
              </span>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
              {questions.map((q, i) => {
                const a = answers[i];
                let cls = "bg-surface-alt text-ink-soft";
                if (a) {
                  if (instant) cls = a.correct ? "bg-success text-white" : "bg-danger text-white";
                  else cls = "bg-primary text-white";
                }
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Soru ${i + 1}${a ? ", cevaplandı" : ", boş"}`}
                    aria-current={i === step ? "step" : undefined}
                    className={`h-9 rounded-xl text-[13px] font-extrabold tabular-nums cursor-pointer transition-transform hover:scale-105 ${cls} ${
                      i === step ? "ring-2 ring-offset-2 ring-ink ring-offset-surface" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {paused ? (
          <div className="card bg-surface border-2 border-line rounded-3xl p-8 sm:p-10 text-center">
            <span className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary-wash text-primary flex items-center justify-center">
              <Pause size={26} strokeWidth={2.6} />
            </span>
            <h2 className="font-display font-black text-2xl text-ink mb-2">Mola verdin</h2>
            <p className="text-ink-soft font-semibold mb-6">Süre durdu. Hazır olduğunda kaldığın yerden devam et.</p>
            <button
              type="button"
              onClick={() => setPaused(false)}
              className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-[15px] tracking-wide cursor-pointer"
            >
              <Play size={17} fill="currentColor" strokeWidth={0} />
              DEVAM ET
            </button>
          </div>
        ) : (
          question && (
            <>
              <QuestionCard
                key={question.id}
                question={question}
                selectedIndex={currentAnswer?.selectedIndex ?? null}
                onSelect={handleSelect}
                reveal={reveal}
              />

              {/* Alt bölüm: anlık modda cevaplanınca geri bildirim paneline dönüşür */}
              <div
                className={`sticky bottom-0 z-10 mt-6 -mx-4 sm:mx-0 px-4 sm:px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-5 rounded-t-3xl sm:rounded-3xl ${
                  !locked
                    ? "bg-paper/95 backdrop-blur-sm"
                    : answeredCorrect
                      ? "bg-success-wash animate-sheet-up"
                      : "bg-danger-wash animate-sheet-up"
                }`}
              >
                {locked && (
                  <div aria-live="polite" className="mb-4">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          answeredCorrect ? "bg-success text-[var(--color-on-success)]" : "bg-danger text-[var(--color-on-danger)]"
                        }`}
                      >
                        {answeredCorrect ? <Check size={18} strokeWidth={3.4} /> : <X size={18} strokeWidth={3.4} />}
                      </span>
                      <span
                        className={`font-display font-black text-xl ${answeredCorrect ? "text-success-ink" : "text-danger-ink"}`}
                      >
                        {answeredCorrect
                          ? combo >= 3
                            ? `Harika, ${combo} doğru üst üste!`
                            : "Harika, doğru!"
                          : "Doğru cevap: " + String.fromCharCode(65 + question.correctIndex)}
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
                    onClick={() => goTo(step - 1)}
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
                      {instant ? "TESTİ BİTİR" : "SINAVI BİTİR"}
                    </button>
                  ) : currentAnswer === null ? (
                    <button
                      type="button"
                      onClick={() => goTo(step + 1)}
                      className="btn-soft flex-1 rounded-2xl h-[52px] text-ink-soft text-[16px] tracking-wide cursor-pointer"
                    >
                      ATLA
                    </button>
                  ) : instant ? (
                    <button
                      type="button"
                      onClick={() => goTo(step + 1)}
                      autoFocus
                      className={`flex-1 rounded-2xl h-[52px] text-[16px] tracking-wide cursor-pointer ${
                        answeredCorrect ? "btn-success" : "btn-danger"
                      }`}
                    >
                      DEVAM ET
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => goTo(step + 1)}
                      className="btn-primary flex-1 rounded-2xl h-[52px] text-[16px] tracking-wide cursor-pointer flex items-center justify-center gap-2"
                    >
                      SONRAKİ
                      <ArrowRight size={18} strokeWidth={2.8} />
                    </button>
                  )}
                </div>
              </div>
            </>
          )
        )}
      </main>
    </div>
  );
}
