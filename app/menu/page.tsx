import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { moreItems } from "@/components/navItems";

export const metadata: Metadata = {
  title: "Menü | EhliyetAl",
  description: "Soru ara, sözlük, hazırlık rehberi ve iletişim sayfalarına buradan ulaş.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Ana sayfaya dön
        </Link>

        <h1 className="font-display text-3xl text-ink mb-8">Daha Fazla</h1>

        <div className="flex flex-col gap-3">
          {moreItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="premium-card group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 hover:border-gold-soft hover:bg-gold-wash transition-colors"
              >
                <span className="rounded-lg bg-gold-wash p-2.5 text-gold shrink-0">
                  <Icon size={20} />
                </span>
                <span className="flex-1 font-display text-base text-ink">
                  {item.label}
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
                />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
