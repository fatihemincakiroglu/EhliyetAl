"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useStoreVersion } from "@/lib/clientStore";
import { getLevel, getStreakInfo } from "@/lib/progress";

export function FlameIcon({ size = 16, muted = false }: { size?: number; muted?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={muted ? "var(--color-ink-soft)" : "var(--color-tangerine)"}
      aria-hidden="true"
    >
      <path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-6 1-9.5z" />
    </svg>
  );
}

export function BoltIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--color-primary)" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

/** Header'daki seri + XP rozetleri. Veri yoksa görünmez. */
export default function StreakBadge() {
  const v = useStoreVersion();
  const data = useMemo(() => {
    if (v === 0) return null;
    return { streak: getStreakInfo(), level: getLevel() };
  }, [v]);

  if (!data) return null;
  const { streak, level } = data;

  return (
    <Link href="/istatistik" className="flex items-center gap-2" aria-label="İlerlemen">
      {level.xp > 0 && (
        <span
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary-wash text-primary font-extrabold text-sm px-3 py-1.5"
          title={`${level.name} · ${level.xp} XP`}
        >
          <BoltIcon />
          {level.xp} XP
        </span>
      )}
      {streak.streak > 0 && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-extrabold text-sm px-3 py-1.5 ${
            streak.todayDone ? "bg-tangerine-wash text-tangerine-ink" : "bg-surface-alt text-ink-soft"
          }`}
          title={
            streak.todayDone
              ? `${streak.streak} gündür art arda çalışıyorsun`
              : `Serin ${streak.streak} gün. Bugün çalışarak devam ettir!`
          }
        >
          <FlameIcon muted={!streak.todayDone} />
          {streak.streak} gün
        </span>
      )}
    </Link>
  );
}
