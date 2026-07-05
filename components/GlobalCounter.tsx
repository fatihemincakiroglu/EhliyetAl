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
    <div className="flex items-center gap-2 text-xs text-ink-soft font-data">
      <Users size={14} className="text-gold" />
      Bugün topluluk {count.toLocaleString("tr-TR")} soru çözdü
    </div>
  );
}
