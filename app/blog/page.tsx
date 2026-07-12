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
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <Newspaper size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">Blog</h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Sınav hazırlığından direksiyon taktiklerine, ilk yardımdan yeni
          sürücü tavsiyelerine kadar ehliyet yolculuğunun her aşaması için
          rehber yazılar.
        </p>

        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <section key={group.category}>
              <h2 className="font-data text-xs uppercase tracking-[0.15em] text-gold mb-3">
                {group.category}
              </h2>
              <div className="flex flex-col gap-3">
                {group.posts.map((post) => {
                  const Icon = icons[post.icon] ?? Newspaper;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-4 rounded-2xl border border-line bg-surface px-5 py-4 hover:border-gold-soft hover:bg-gold-wash transition-colors"
                    >
                      <span className="rounded-lg bg-gold-wash p-2.5 text-gold shrink-0">
                        <Icon size={20} />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-display text-base text-ink">
                          {post.title}
                        </span>
                        <span className="block text-sm text-ink-soft mt-0.5">
                          {post.intro}
                        </span>
                        <span className="mt-2 flex items-center gap-1.5 font-data text-[11px] text-ink-soft/80">
                          <Clock size={12} />
                          {post.readingMinutes} dk okuma
                        </span>
                      </span>
                      <ArrowRight
                        size={18}
                        className="shrink-0 mt-1 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
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
          className="mt-10 inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
        >
          Hazırlık Rehberine de bak →
        </Link>
      </main>
    </div>
  );
}
