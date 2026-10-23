"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid } from "lucide-react";
import { navItems } from "@/components/navItems";

export default function BottomNav() {
  const pathname = usePathname();

  const items = [
    ...navItems.map((item) => ({
      href: item.href,
      label: item.short,
      icon: item.icon,
      active:
        item.href === "/"
          ? pathname === "/"
          : pathname === item.href || pathname.startsWith(item.href + "/"),
    })),
    { href: "/menu", label: "Keşfet", icon: LayoutGrid, active: pathname === "/menu" },
  ];

  return (
    <nav
      aria-label="Alt menü"
      className="app-bottom-nav md:hidden fixed bottom-0 inset-x-0 z-30 bg-surface border-t-2 border-line flex items-stretch pb-[env(safe-area-inset-bottom)]"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={`flex-1 flex flex-col items-center justify-center gap-1 pt-2.5 pb-2 text-[11px] transition-colors ${
              item.active ? "text-primary font-extrabold" : "text-ink-soft font-bold"
            }`}
          >
            <span
              className={`flex items-center justify-center w-12 h-7 rounded-full transition-colors ${
                item.active ? "bg-primary-wash" : ""
              }`}
            >
              <Icon size={21} strokeWidth={item.active ? 2.6 : 2.2} />
            </span>
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
