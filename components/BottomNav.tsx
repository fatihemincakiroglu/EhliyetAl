"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoreHorizontal } from "lucide-react";
import { navItems } from "@/components/navItems";

export default function BottomNav() {
  const pathname = usePathname();
  const moreActive = pathname === "/menu";

  return (
    <nav className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-surface border-t border-line flex items-stretch">
      {navItems.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-body transition-colors ${
              active ? "text-gold" : "text-ink-soft"
            }`}
          >
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            <span>{item.label.replace("Simülasyonu", "").trim()}</span>
          </Link>
        );
      })}
      <Link
        href="/menu"
        className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-body transition-colors ${
          moreActive ? "text-gold" : "text-ink-soft"
        }`}
      >
        <MoreHorizontal size={20} strokeWidth={moreActive ? 2.5 : 2} />
        <span>Daha Fazla</span>
      </Link>
    </nav>
  );
}
