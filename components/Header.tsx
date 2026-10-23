"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import StreakBadge from "@/components/StreakBadge";
import LogoMark from "@/components/LogoMark";
import { navItems, moreItems } from "@/components/navItems";

export default function Header() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Rota değişince menüyü kapat (render sırasında önceki yolla karşılaştırarak)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMoreOpen(false);
  }

  // Dışarı tıklayınca ve Esc'e basınca kapat
  useEffect(() => {
    if (!moreOpen) return;
    function onPointerDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  return (
    <header className="app-header sticky top-0 z-30 bg-surface/90 backdrop-blur-md border-b-2 border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="EhliyetAl ana sayfa"
        >
          <LogoMark size={34} />
          <span className="font-display font-black text-xl tracking-tight text-ink">
            EhliyetAl
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Ana menü">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[15px] font-extrabold transition-colors ${
                  active
                    ? "bg-primary-wash text-primary"
                    : "text-ink-soft hover:text-ink hover:bg-surface-alt"
                }`}
              >
                <Icon size={18} strokeWidth={2.3} />
                {item.label}
              </Link>
            );
          })}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-[15px] font-extrabold text-ink-soft hover:text-ink hover:bg-surface-alt transition-colors cursor-pointer select-none"
            >
              Daha Fazla
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {moreOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-64 bg-surface border-2 border-line rounded-2xl sticker-card p-2 z-40"
              >
                {moreItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[15px] font-bold text-ink hover:bg-surface-alt transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg bg-primary-wash text-primary flex items-center justify-center shrink-0">
                        <Icon size={16} strokeWidth={2.3} />
                      </span>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <StreakBadge />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}
