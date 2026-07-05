"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems } from "@/components/navItems";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-surface/60 backdrop-blur sticky top-0 z-30">
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
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
