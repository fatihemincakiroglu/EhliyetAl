"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Flame, Target, Trophy, Zap, PartyPopper, Info } from "lucide-react";
import {
  CELEBRATE_EVENT,
  isBigCelebration,
  type Celebration,
  type CelebrationKind,
} from "@/lib/celebrate";

type Toast = Celebration & { id: number };

const ICONS: Record<CelebrationKind, typeof Flame> = {
  combo: Zap,
  goal: Target,
  level: Trophy,
  pass: PartyPopper,
  streak: Flame,
  info: Info,
};

const TONE: Record<CelebrationKind, { bg: string; fg: string }> = {
  combo: { bg: "var(--color-sun)", fg: "#2b1d00" },
  goal: { bg: "var(--color-success)", fg: "var(--color-on-success)" },
  level: { bg: "var(--color-primary)", fg: "#fff" },
  pass: { bg: "var(--color-success)", fg: "var(--color-on-success)" },
  streak: { bg: "var(--color-tangerine)", fg: "#2b1300" },
  info: { bg: "var(--color-ink)", fg: "var(--color-paper)" },
};

const CONFETTI_COLORS = ["#2f5bea", "#ff7a00", "#14915a", "#d92d4b", "#ffc20e", "#6c47d9"];

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

/** Tek seferlik, kütüphanesiz konfeti (~1.6 sn). */
function fireConfetti(canvas: HTMLCanvasElement) {
  if (prefersReducedMotion()) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const pieces = Array.from({ length: 140 }, () => ({
    x: w / 2 + (Math.random() - 0.5) * w * 0.3,
    y: h * 0.35,
    vx: (Math.random() - 0.5) * 14,
    vy: -Math.random() * 15 - 6,
    size: 6 + Math.random() * 6,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    shape: Math.random() > 0.5 ? "rect" : "circle",
  }));

  const start = performance.now();
  const duration = 1800;
  function frame(t: number) {
    const elapsed = t - start;
    ctx!.clearRect(0, 0, w, h);
    const fade = Math.max(0, 1 - Math.max(0, elapsed - duration + 500) / 500);
    for (const p of pieces) {
      p.vy += 0.45;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx!.save();
      ctx!.globalAlpha = fade;
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rot);
      ctx!.fillStyle = p.color;
      if (p.shape === "rect") ctx!.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
      else {
        ctx!.beginPath();
        ctx!.arc(0, 0, p.size / 2.4, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.restore();
    }
    if (elapsed < duration) requestAnimationFrame(frame);
    else ctx!.clearRect(0, 0, w, h);
  }
  requestAnimationFrame(frame);
}

export default function Celebrations() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const idRef = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  useEffect(() => {
    function onCelebrate(e: Event) {
      const detail = (e as CustomEvent<Celebration>).detail;
      if (!detail) return;
      const id = ++idRef.current;
      setToasts((t) => [...t.slice(-2), { ...detail, id }]);
      window.setTimeout(() => dismiss(id), isBigCelebration(detail.kind) ? 3800 : 2200);
      if (isBigCelebration(detail.kind) && canvasRef.current) fireConfetti(canvasRef.current);
    }
    window.addEventListener(CELEBRATE_EVENT, onCelebrate);
    return () => window.removeEventListener(CELEBRATE_EVENT, onCelebrate);
  }, [dismiss]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 w-full h-full pointer-events-none z-[60]"
      />
      <div
        aria-live="polite"
        className="fixed top-20 inset-x-0 z-[61] flex flex-col items-center gap-2 px-4 pointer-events-none"
      >
        {toasts.map((t) => {
          const Icon = ICONS[t.kind];
          const tone = TONE[t.kind];
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => dismiss(t.id)}
              className="pointer-events-auto animate-toast-in flex items-center gap-3 rounded-2xl pl-3 pr-5 py-2.5 sticker-card cursor-pointer max-w-sm"
              style={{ background: tone.bg, color: tone.fg }}
            >
              <span className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center shrink-0">
                <Icon size={20} strokeWidth={2.6} />
              </span>
              <span className="text-left">
                <span className="block font-display font-black text-[15px] leading-tight">{t.title}</span>
                {t.subtitle && <span className="block text-[13px] font-bold opacity-90">{t.subtitle}</span>}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
