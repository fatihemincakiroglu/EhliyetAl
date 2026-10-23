"use client";

import { Moon, Sun } from "lucide-react";
import { getTheme, setTheme } from "@/lib/storage";
import { useStoreVersion } from "@/lib/clientStore";

export default function ThemeToggle() {
  // setTheme depoyu bildirdiği için v değişir ve buton yeniden çizilir
  const v = useStoreVersion();
  const theme = v === 0 ? null : getTheme();

  if (theme === null) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Karanlık temaya geç" : "Açık temaya geç"}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border-2 border-line text-ink hover:border-primary-soft hover:text-primary transition-colors cursor-pointer"
    >
      {theme === "light" ? <Moon size={17} strokeWidth={2.2} /> : <Sun size={17} strokeWidth={2.2} />}
    </button>
  );
}
