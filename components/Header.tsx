"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Home, ListChecks } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Ana Sayfa", icon: Home },
    { href: "/sinav", label: "Sınav Simülasyonu", icon: ListChecks },
    { href: "/istatistik", label: "İstatistikler", icon: BarChart3 },
  ];

  return (
    <header className="border-b border-line bg-surface/60 backdrop-blur sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display italic text-lg text-ink">
          Ehliyet<span className="text-gold">Al</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-body transition-colors ${
                  active
                    ? "bg-gold-wash text-gold"
                    : "text-ink-soft hover:text-ink hover:bg-surface-alt"
                }`}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
