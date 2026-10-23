"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function GlobalCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    fetch("/api/counter")
      .then((res) => res.json())
      .then((data) => {
        setEnabled(Boolean(data.enabled));
        setCount(data.count ?? 0);
      })
      .catch(() => {
        setEnabled(false);
      });
  }, []);

  if (!enabled || count === null || count === 0) return null;

  return (
    <div className="inline-flex items-center gap-2 min-h-11 rounded-full bg-surface-alt px-4 text-[13px] font-extrabold text-ink-soft">
      <Users size={15} strokeWidth={2.6} className="text-primary" />
      Bugün topluluk {count.toLocaleString("tr-TR")} soru çözdü
    </div>
  );
}
