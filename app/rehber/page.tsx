import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Wallet, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Ehliyet Sınavına Hazırlık Rehberi | EhliyetAl",
  description:
    "Ehliyet sınavı başvurusu, ücretler ve sınava hazırlık süreciyle ilgili güncel rehber makaleleri.",
  alternates: {
    canonical: "https://ehliyetal.net/rehber",
  },
};

const articles = [
  {
    href: "/rehber/ehliyet-sinavi-basvurusu-nasil-yapilir",
    title: "Ehliyet Sınavı Başvurusu Nasıl Yapılır?",
    description:
      "Sürücü kursuna kayıttan sınav sonucuna kadar adım adım başvuru süreci.",
    icon: ClipboardCheck,
  },
  {
    href: "/rehber/ehliyet-sinavi-ucretleri-2026",
    title: "2026 Ehliyet Sınavı Ücretleri Hakkında Bilinmesi Gerekenler",
    description:
      "Ehliyet sürecindeki ücret kalemleri ve güncel tutarları nereden öğrenebileceğin.",
    icon: Wallet,
  },
];

export default function RehberPage() {
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

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <BookOpen size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">
            Sınava Hazırlık Rehberi
          </h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Soru çözmenin yanında, sürecin idari kısmını da bilmek işini
          kolaylaştırır. Başvuru adımları ve ücret kalemleri hakkında kısa
          rehberler burada.
        </p>

        <div className="flex flex-col gap-3">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.href}
                href={article.href}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 hover:border-gold-soft hover:bg-gold-wash transition-colors"
              >
                <span className="rounded-lg bg-gold-wash p-2.5 text-gold shrink-0">
                  <Icon size={20} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-base text-ink">
                    {article.title}
                  </span>
                  <span className="block text-sm text-ink-soft">
                    {article.description}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/sozluk"
          className="mt-8 inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
        >
          Trafik Terimleri Sözlüğüne bak →
        </Link>
      </main>
    </div>
  );
}
