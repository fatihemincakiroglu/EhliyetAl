"use client";

import { useEffect, useState } from "react";
import { getStreak } from "@/lib/progress";

export function FlameIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--color-tangerine)" aria-hidden="true">
      <path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-6 1-9.5z" />
    </svg>
  );
}

/** Art arda çalışılan gün sayısı rozeti. Seri yoksa hiç görünmez. */
export default function StreakBadge() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setStreak(getStreak());
  }, []);

  if (streak < 1) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-tangerine-wash text-tangerine-ink font-extrabold text-sm px-3 py-1.5"
      title={`${streak} gündür art arda çalışıyorsun`}
    >
      <FlameIcon />
      {streak} gün
    </span>
  );
}
