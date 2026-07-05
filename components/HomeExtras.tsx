"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCcw, ListChecks } from "lucide-react";
import { getCategoryStats, getWrongQuestionIds, type CategoryStat } from "@/lib/storage";

export function CategoryBadge({ slug }: { slug: string }) {
  const [stat, setStat] = useState<CategoryStat | null>(null);

  useEffect(() => {
    const stats = getCategoryStats([slug]);
    setStat(stats[slug]);
  }, [slug]);

  if (!stat || stat.attempts === 0) return null;

  return (
    <span className="font-data text-[11px] text-gold shrink-0">
      En iyi: %{stat.bestPercent}
    </span>
  );
}

export function QuickLinks() {
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    setWrongCount(getWrongQuestionIds().length);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-10">
      <Link
        href="/sinav"
        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-display tracking-wide uppercase text-ink hover:border-gold-soft hover:bg-gold-wash transition-colors"
      >
        <ListChecks size={16} />
        Sınav Simülasyonu
      </Link>
      {wrongCount > 0 && (
        <Link
          href="/tekrar"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gold text-ink px-5 py-3 text-sm font-display tracking-wide uppercase hover:bg-gold-soft transition-colors"
        >
          <RefreshCcw size={16} />
          Yanlışları Tekrar Çöz ({wrongCount})
        </Link>
      )}
    </div>
  );
}
