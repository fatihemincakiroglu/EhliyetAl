import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Wallet,
  ClipboardCheck,
  MapPin,
  Search,
  CalendarDays,
  Signpost,
  HeartPulse,
} from "lucide-react";

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
    tone: "trafik",
  },
  {
    href: "/rehber/ehliyet-sinavi-ucretleri-2026",
    title: "2026 Ehliyet Sınavı Ücretleri Hakkında Bilinmesi Gerekenler",
    description:
      "Ehliyet sürecindeki ücret kalemleri ve güncel tutarları nereden öğrenebileceğin.",
    icon: Wallet,
    tone: "cevre",
  },
  {
    href: "/rehber/il",
    title: "İle Göre Ehliyet Sınavı Rehberi",
    description:
      "İlini seç; sürücü kursu süreci ve ilgili çalışma testlerine hızlıca ulaş.",
    icon: MapPin,
    tone: "isaretler",
  },
  {
    href: "/rehber/ehliyet-sinavi-sonuc-sorgulama",
    title: "Ehliyet Sınavı Sonucu Nasıl Öğrenilir?",
    description:
      "e-Devlet ve sürücü kursu üzerinden sınav sonucunu sorgulama yöntemleri.",
    icon: Search,
    tone: "motor",
  },
  {
    href: "/rehber/ehliyet-sinavi-tarihleri-2026",
    title: "2026 Ehliyet Sınavı Ne Zaman?",
    description:
      "Sınav dönemleri nasıl belirlenir, güncel takvimi nereden takip edersin?",
    icon: CalendarDays,
    tone: "trafik",
  },
  {
    href: "/rehber/trafik-isaretleri-nasil-calisilir",
    title: "Trafik İşaretlerine Nasıl Çalışılır?",
    description:
      "İşaret gruplarını mantığıyla ayırt etme ve sınavda en çok yapılan hatalar.",
    icon: Signpost,
    tone: "isaretler",
  },
  {
    href: "/rehber/ilk-yardim-sik-yapilan-hatalar",
    title: "İlk Yardımda En Çok Yanlış Yapılan Sorular",
    description: "Adayların en sık karıştırdığı ilk yardım kavramları.",
    icon: HeartPulse,
    tone: "ilkyardim",
  },
];

export default function RehberPage() {
  return (
    <div className="bg-paper">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-12 h-12 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <BookOpen size={24} strokeWidth={2.3} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">
            Sınava Hazırlık Rehberi
          </h1>
        </div>
        <p className="text-ink-soft font-semibold text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8">
          Soru çözmenin yanında, sürecin idari kısmını da bilmek işini
          kolaylaştırır. Başvuru adımları ve ücret kalemleri hakkında kısa
          rehberler burada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.href}
                href={article.href}
                className="card group flex items-start gap-4 rounded-3xl border-2 border-line bg-surface p-4 sm:p-5"
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `var(--color-cat-${article.tone}-wash)`,
                    color: `var(--color-cat-${article.tone})`,
                  }}
                >
                  <Icon size={21} strokeWidth={2.3} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display font-extrabold text-[16px] leading-snug text-ink">
                    {article.title}
                  </span>
                  <span className="block text-sm font-semibold text-ink-soft mt-1 leading-relaxed">
                    {article.description}
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

        <Link
          href="/sozluk"
          className="mt-8 btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink"
        >
          Trafik Terimleri Sözlüğüne bak
          <ArrowRight size={17} strokeWidth={2.6} />
        </Link>
      </main>
    </div>
  );
}
