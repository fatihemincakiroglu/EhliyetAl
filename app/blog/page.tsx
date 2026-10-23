import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  Trophy,
  AlertTriangle,
  ClipboardList,
  Car,
  Signpost,
  HeartPulse,
  Lightbulb,
  Wind,
  SquareParking,
  Eye,
  Wallet,
  RotateCcw,
  HelpCircle,
  Users,
  TrendingDown,
  Sparkles,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getPostsByCategory } from "@/lib/blog";

const SITE_URL = "https://ehliyetal.net";

export const metadata: Metadata = {
  title: "Ehliyet Sınavı Blog: Hazırlık İpuçları ve Rehberler | EhliyetAl",
  description:
    "Ehliyet sınavına hazırlık ipuçları, direksiyon sınavı taktikleri, ilk yardım ve trafik konuları ile yeni sürücüler için rehber yazılar.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const icons: Record<string, LucideIcon> = {
  Trophy,
  AlertTriangle,
  ClipboardList,
  Car,
  Signpost,
  HeartPulse,
  Lightbulb,
  Wind,
  SquareParking,
  Eye,
  Wallet,
  RotateCcw,
  HelpCircle,
  Users,
  TrendingDown,
  Sparkles,
};

export default function BlogPage() {
  const groups = getPostsByCategory();

  return (
    <div className="bg-paper">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-12 h-12 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <Newspaper size={24} strokeWidth={2.3} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl text-ink">Blog</h1>
        </div>
        <p className="text-ink-soft font-semibold text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8">
          Sınav hazırlığından direksiyon taktiklerine, ilk yardımdan yeni
          sürücü tavsiyelerine kadar ehliyet yolculuğunun her aşaması için
          rehber yazılar.
        </p>

        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <section key={group.category}>
              <h2 className="font-display font-black text-lg text-ink mb-3">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {group.posts.map((post) => {
                  const Icon = icons[post.icon] ?? Newspaper;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="card group flex items-start gap-4 rounded-3xl border-2 border-line bg-surface p-4 sm:p-5"
                    >
                      <span className="w-11 h-11 rounded-xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
                        <Icon size={21} strokeWidth={2.3} />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-display font-extrabold text-[16px] leading-snug text-ink">
                          {post.title}
                        </span>
                        <span className="block text-sm font-semibold text-ink-soft mt-1 leading-relaxed line-clamp-2">
                          {post.intro}
                        </span>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-ink-soft">
                          <Clock size={13} strokeWidth={2.4} />
                          {post.readingMinutes} dk okuma
                        </span>
                      </span>
                      <ArrowRight
                        size={18}
                        strokeWidth={2.5}
                        className="shrink-0 mt-1 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <Link
          href="/rehber"
          className="mt-10 btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink"
        >
          Hazırlık Rehberine de bak
          <ArrowRight size={17} strokeWidth={2.6} />
        </Link>
      </main>
    </div>
  );
}
