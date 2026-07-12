"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Timer, Flame, Trophy, RotateCcw, Play } from "lucide-react";
import { signs, type SignEntry } from "@/lib/signs";
import { signRegistry } from "@/components/TrafficSigns";

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
    if (timeLeft <= 0) {
      handleAnswer(null);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft, answered, handleAnswer]);

  // Intro ekranı
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-paper">
        <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
          <div className="premium-card rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-wash px-3 py-1 text-xs font-medium text-gold mb-4">
              <Timer size={13} /> Hız Oyunu
            </span>
            <h1 className="font-display text-2xl sm:text-3xl text-ink mb-3">
              Trafik İşareti Tanıma Oyunu
            </h1>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              {TOTAL_ROUNDS} işaret gösterilir; her biri için yalnızca{" "}
              <strong className="text-ink">{ROUND_SECONDS} saniyen</strong> var.
              Ne kadar hızlı doğru cevaplarsan o kadar çok puan. Seriyi
              bozmadan devam et, en yüksek skoru yakala!
            </p>
            <ul className="text-sm text-ink-soft space-y-1.5 mb-8">
              <li>• Doğru cevap: 100 puan + kalan her saniye için 20 bonus</li>
              <li>• Üst üste doğru: seri (streak) yükselir</li>
              <li>• Süre biterse veya yanlışta seri sıfırlanır</li>
            </ul>
            <button
              onClick={start}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-display text-white hover:brightness-95 transition"
            >
              <Play size={18} /> Oyunu Başlat
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
      <div className="min-h-screen bg-paper">
        <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
          <div className="premium-card rounded-2xl border border-line bg-surface p-6 sm:p-8 text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-wash text-gold mb-4">
              <Trophy size={28} />
            </span>
            <h1 className="font-display text-2xl sm:text-3xl text-ink mb-2">
              Oyun Bitti!
            </h1>
            <p className="text-ink-soft text-sm mb-6">
              {rounds.length} işaretten {correctCount} tanesini doğru bildin.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="rounded-xl bg-paper border border-line py-4">
                <div className="font-display text-2xl text-ink">{score}</div>
                <div className="text-xs text-ink-soft mt-1">Puan</div>
              </div>
              <div className="rounded-xl bg-paper border border-line py-4">
                <div className="font-display text-2xl text-ink">%{accuracy}</div>
                <div className="text-xs text-ink-soft mt-1">Başarı</div>
              </div>
              <div className="rounded-xl bg-paper border border-line py-4">
                <div className="font-display text-2xl text-ink">{bestStreak}</div>
                <div className="text-xs text-ink-soft mt-1">En İyi Seri</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={start}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-display text-white hover:brightness-95 transition"
              >
                <RotateCcw size={18} /> Tekrar Oyna
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

  // Oyun ekranı
  const SignComp = signRegistry[round.sign.visualId];
  const progress = ((current) / rounds.length) * 100;

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-6 sm:py-10">
        {/* Üst bar: skor + seri */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-display text-ink">
            {current + 1} / {rounds.length}
          </span>
          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gold-wash px-2.5 py-1 text-xs font-medium text-gold">
                <Flame size={13} /> {streak}
              </span>
            )}
            <span className="font-display text-ink text-sm">{score} puan</span>
          </div>
        </div>

        {/* İlerleme çubuğu */}
        <div className="h-1.5 w-full rounded-full bg-line/50 mb-6 overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Geri sayım */}
        <div className="flex items-center justify-center mb-6">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full font-display text-xl transition-colors ${
              timeLeft <= 1
                ? "bg-danger-wash text-danger"
                : "bg-surface border border-line text-ink"
            }`}
            aria-label={`${timeLeft} saniye kaldı`}
          >
            {timeLeft}
          </div>
        </div>

        {/* İşaret */}
        <div className="flex items-center justify-center mb-8">
          <div className="rounded-2xl bg-surface border border-line p-8">
            <SignComp size={120} />
          </div>
        </div>

        {/* Şıklar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {round.options.map((opt) => {
            const isChosen = answered === opt.code;
            const isCorrect = opt.code === round.sign.code;
            const showState = answered !== null;

            let cls =
              "border-line bg-surface hover:bg-gold-wash text-ink";
            if (showState) {
              if (isCorrect) {
                cls = "border-success bg-success-wash text-ink";
              } else if (isChosen) {
                cls = "border-danger bg-danger-wash text-ink";
              } else {
                cls = "border-line bg-surface text-ink-soft opacity-60";
              }
            }

            return (
              <button
                key={opt.code}
                onClick={() => handleAnswer(opt)}
                disabled={answered !== null}
                className={`premium-card rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${cls}`}
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
