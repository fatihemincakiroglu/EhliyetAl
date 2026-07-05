"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems, moreItems } from "@/components/navItems";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold-soft to-transparent" />
      <header className="border-b border-line bg-surface/70 backdrop-blur sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="EhliyetAl ana sayfa">
            <Image
              src="/logo.png"
              alt="EhliyetAl"
              width={300}
              height={92}
              className="h-7 sm:h-8 w-auto object-contain object-left"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden sm:flex items-center gap-1.5">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body transition-colors ${
                      active
                        ? "bg-gold-wash text-gold"
                        : "text-ink-soft hover:text-ink hover:bg-surface-alt"
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </Link>
                );
              })}
              <details className="relative group">
                <summary className="list-none flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-body text-ink-soft hover:text-ink hover:bg-surface-alt transition-colors cursor-pointer select-none">
                  Daha Fazla
                  <ChevronDown size={14} />
                </summary>
                <div className="absolute right-0 top-full mt-2 w-56 bg-surface border border-line rounded-xl shadow-lg p-1.5 z-40">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-soft hover:text-ink hover:bg-surface-alt transition-colors"
                      >
                        <Icon size={15} className="text-gold" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </details>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
