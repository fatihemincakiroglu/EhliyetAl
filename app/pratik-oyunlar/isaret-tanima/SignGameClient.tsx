"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Timer, Flame, Trophy, RotateCcw, Play } from "lucide-react";
import { signs, type SignEntry } from "@/lib/signs";
import { signRegistry } from "@/components/TrafficSigns";
import { recordAnswers } from "@/lib/progress";

const ROUND_SECONDS = 3;
const TOTAL_ROUNDS = 12;
const OPTIONS_PER_ROUND = 4;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Round = {
  sign: SignEntry;
  options: SignEntry[];
};

function buildRounds(): Round[] {
  const picks = shuffle(signs).slice(0, TOTAL_ROUNDS);
  return picks.map((sign) => {
    const distractors = shuffle(signs.filter((s) => s.code !== sign.code)).slice(
      0,
      OPTIONS_PER_ROUND - 1
    );
    return { sign, options: shuffle([sign, ...distractors]) };
  });
}

type Phase = "intro" | "playing" | "done";

export default function SignGameClient() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [rounds, setRounds] = useState<Round[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [answered, setAnswered] = useState<string | null>(null);

  const round = rounds[current];

  const start = useCallback(() => {
    setRounds(buildRounds());
    setCurrent(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectCount(0);
    setTimeLeft(ROUND_SECONDS);
    setAnswered(null);
    setPhase("playing");
  }, []);

  const next = useCallback(() => {
    setAnswered(null);
    setTimeLeft(ROUND_SECONDS);
    setCurrent((c) => {
      if (c + 1 >= rounds.length) {
        setPhase("done");
        return c;
      }
      return c + 1;
    });
  }, [rounds.length]);

  const handleAnswer = useCallback(
    (choice: SignEntry | null) => {
      if (answered) return;
      const correct = choice?.code === round.sign.code;
      setAnswered(choice ? choice.code : "__timeout__");
      recordAnswers([{ correct }]);

      if (correct) {
        // Hızlı cevap daha çok puan: kalan saniye başına bonus
        const speedBonus = Math.max(0, timeLeft) * 20;
        const gained = 100 + speedBonus;
        setScore((s) => s + gained);
        setCorrectCount((c) => c + 1);
        setStreak((st) => {
          const ns = st + 1;
          setBestStreak((b) => Math.max(b, ns));
          return ns;
        });
      } else {
        setStreak(0);
      }

      setTimeout(next, 1100);
    },
    [answered, round, timeLeft, next]
  );

  // Geri sayım
  useEffect(() => {
    if (phase !== "playing" || answered) return;
    // Süre bitişi zamanlayıcı geri çağrısında işlenir (effect gövdesinde setState yok)
    const t = setTimeout(() => {
      if (timeLeft <= 1) {
        setTimeLeft(0);
        handleAnswer(null);
      } else {
        setTimeLeft((v) => v - 1);
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft, answered, handleAnswer]);

  // Intro ekranı
  if (phase === "intro") {
    return (
      <div className="bg-paper">
        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
          <div className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tangerine-wash px-3 py-1 text-[13px] font-extrabold text-tangerine-ink mb-4">
              <Timer size={14} strokeWidth={2.6} /> Hız Oyunu
            </span>
            <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-3">
              Trafik İşareti Tanıma Oyunu
            </h1>
            <p className="text-ink-soft font-semibold leading-relaxed mb-5">
              {TOTAL_ROUNDS} işaret gösterilir; her biri için yalnızca{" "}
              <strong className="text-ink font-extrabold">{ROUND_SECONDS} saniyen</strong> var.
              Ne kadar hızlı doğru cevaplarsan o kadar çok puan. Seriyi
              bozmadan devam et, en yüksek skoru yakala!
            </p>
            <ul className="text-sm font-semibold text-ink-soft space-y-1.5 mb-6 list-disc pl-5">
              <li>Doğru cevap: 100 puan + kalan her saniye için 20 bonus</li>
              <li>Üst üste doğru: seri (streak) yükselir</li>
              <li>Süre biterse veya yanlışta seri sıfırlanır</li>
            </ul>
            <button
              type="button"
              onClick={start}
              className="btn-primary w-full rounded-2xl h-14 flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
            >
              <Play size={18} fill="currentColor" strokeWidth={0} /> OYUNU BAŞLAT
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Sonuç ekranı
  if (phase === "done") {
    const accuracy = Math.round((correctCount / rounds.length) * 100);
    return (
      <div className="bg-paper">
        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
          <div className="card bg-surface border-2 border-line rounded-3xl p-6 sm:p-8 text-center">
            <span className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-sun-wash text-sun mb-4 animate-pop">
              <Trophy size={32} strokeWidth={2.3} />
            </span>
            <h1 className="font-display font-black text-[28px] sm:text-3xl text-ink mb-1">Oyun Bitti!</h1>
            <p className="text-ink-soft font-semibold mb-6">
              {rounds.length} işaretten {correctCount} tanesini doğru bildin.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="rounded-2xl bg-primary-wash py-4">
                <div className="font-display font-black text-2xl text-primary tabular-nums">{score}</div>
                <div className="text-xs font-extrabold text-primary mt-0.5">Puan</div>
              </div>
              <div className="rounded-2xl bg-success-wash py-4">
                <div className="font-display font-black text-2xl text-success-ink">%{accuracy}</div>
                <div className="text-xs font-extrabold text-success-ink mt-0.5">Başarı</div>
              </div>
              <div className="rounded-2xl bg-tangerine-wash py-4">
                <div className="font-display font-black text-2xl text-tangerine-ink">{bestStreak}</div>
                <div className="text-xs font-extrabold text-tangerine-ink mt-0.5">En İyi Seri</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={start}
                className="btn-primary rounded-2xl h-[52px] flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
              >
                <RotateCcw size={18} strokeWidth={2.8} /> TEKRAR OYNA
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

  // Oyun ekranı
  const SignComp = signRegistry[round.sign.visualId];
  const progress = (current / rounds.length) * 100;

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        {/* Üst bar: ilerleme + skor + seri */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-4 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-success transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-display font-black text-[15px] text-ink tabular-nums">
            {current + 1}/{rounds.length}
          </span>
        </div>
        <div className="flex items-center justify-between mb-5">
          <span className="font-display font-black text-lg text-ink tabular-nums">{score} puan</span>
          {streak > 1 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-tangerine-wash px-3 py-1 text-sm font-extrabold text-tangerine-ink animate-pop">
              <Flame size={15} strokeWidth={2.6} /> {streak} seri
            </span>
          )}
        </div>

        {/* Geri sayım */}
        <div className="flex items-center justify-center mb-5">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-full font-display font-black text-2xl transition-colors ${
              timeLeft <= 1 ? "bg-danger text-[var(--color-on-danger)]" : "bg-surface border-2 border-line text-ink"
            }`}
            aria-label={`${timeLeft} saniye kaldı`}
          >
            {timeLeft}
          </div>
        </div>

        {/* İşaret */}
        <div className="flex items-center justify-center mb-6">
          <div className="card rounded-3xl bg-surface border-2 border-line p-7">
            <SignComp size={128} />
          </div>
        </div>

        {/* Şıklar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {round.options.map((opt) => {
            const isChosen = answered === opt.code;
            const isCorrect = opt.code === round.sign.code;
            const showState = answered !== null;

            let cls = "border-line bg-surface text-ink hover:border-primary-soft hover:bg-primary-wash";
            let shadow = "var(--color-line)";
            if (showState) {
              if (isCorrect) {
                cls = "border-success bg-success-wash text-success-ink animate-pop";
                shadow = "var(--color-success)";
              } else if (isChosen) {
                cls = "border-danger bg-danger-wash text-danger-ink animate-pop";
                shadow = "var(--color-danger)";
              } else {
                cls = "border-line bg-surface text-ink-soft opacity-60";
              }
            }

            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleAnswer(opt)}
                disabled={answered !== null}
                style={{ boxShadow: `0 3px 0 0 ${shadow}` }}
                className={`rounded-2xl border-2 px-4 py-3.5 min-h-[52px] text-left text-[15px] font-bold transition-colors cursor-pointer disabled:cursor-default ${cls}`}
              >
                {opt.name}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
