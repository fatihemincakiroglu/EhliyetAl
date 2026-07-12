"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems, moreItems } from "@/components/navItems";

export default function Header() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Rota değişince menüyü kapat (bir öğeye tıklanınca)
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

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
    <>
      <header className="bg-navy sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="EhliyetAl ana sayfa"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded border-2 border-gold text-gold font-display font-bold text-xs shrink-0">
              EA
            </span>
            <span className="font-display font-semibold text-base sm:text-lg tracking-tight text-white">
              Ehliyet<span className="text-gold">Al</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden sm:flex items-center gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-body transition-colors ${
                      active
                        ? "bg-gold text-white"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={15} />
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
                  className="flex items-center gap-1 px-3 py-1.5 rounded text-sm font-body text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer select-none"
                >
                  Daha Fazla
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {moreOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 w-56 bg-surface border border-line rounded-lg shadow-lg p-1.5 z-40"
                  >
                    {moreItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setMoreOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded text-sm text-ink-soft hover:text-ink hover:bg-surface-alt transition-colors"
                        >
                          <Icon size={15} className="text-gold" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>
            <ThemeToggle />
          </div>
        </div>
        <div className="h-[3px] hazard-stripe" />
      </header>
    </>
  );
}
