"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { getTheme, setTheme } from "@/lib/storage";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setThemeState(next);
  }

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Karanlık temaya geç" : "Açık temaya geç"}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-line bg-surface text-ink-soft hover:text-gold hover:border-gold-soft transition-colors"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
