import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { moreItems } from "@/components/navItems";

export const metadata: Metadata = {
  title: "Menü | EhliyetAl",
  description: "Soru ara, sözlük, hazırlık rehberi ve iletişim sayfalarına buradan ulaş.",
};

export default function MenuPage() {
  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-5">Keşfet</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {moreItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="card bg-surface border-2 border-line rounded-2xl px-4 py-3 flex items-center gap-3 min-h-[60px]"
              >
                <span className="w-10 h-10 rounded-xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
                  <Icon size={20} strokeWidth={2.4} />
                </span>
                <span className="flex-1 font-extrabold text-[15px] text-ink">{item.label}</span>
                <ChevronRight size={20} strokeWidth={2.5} className="shrink-0 text-ink-soft" />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
