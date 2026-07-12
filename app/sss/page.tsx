import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { faqItems, faqSchema } from "@/lib/faq";

const SITE_URL = "https://ehliyetal.net";
const PATH = "/sss";

export const metadata: Metadata = {
  title: "Ehliyet Sınavı Hakkında Sıkça Sorulan Sorular | EhliyetAl",
  description:
    "Ehliyet sınavı kaç soru, puan nasıl hesaplanır, kaç kez sınava girilir, sağlık raporu nereden alınır? Ehliyet süreciyle ilgili en çok sorulan soruların cevapları.",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Sıkça Sorulan Sorular", item: `${SITE_URL}${PATH}` },
  ],
};

export default function SssPage() {
  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <HelpCircle size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">
            Sıkça Sorulan Sorular
          </h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Ehliyet sınavı ve süreciyle ilgili en çok merak edilen soruları
          derledik. Sınav puanından sağlık raporuna, sınav hakkından belge
          işlemlerine kadar aklına takılanların cevabı burada.
        </p>

        <div className="flex flex-col gap-3 mb-10">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group bg-surface border border-line rounded-xl p-4 open:border-gold-soft"
            >
              <summary className="cursor-pointer font-display text-base text-ink list-none flex items-center justify-between gap-3">
                {item.q}
                <span className="text-gold shrink-0 transition-transform group-open:rotate-45 font-display text-xl">
                  +
                </span>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="rounded-2xl gold-gradient text-white p-6 text-center">
          <p className="font-display text-lg mb-3">
            Hazırlığa başlamaya ne dersin?
          </p>
          <Link
            href="/sinav"
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 px-5 py-2.5 font-display text-sm transition-colors"
          >
            Deneme sınavı çöz
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/rehber"
            className="text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
          >
            Hazırlık Rehberi →
          </Link>
          <Link
            href="/blog"
            className="text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
          >
            Blog yazıları →
          </Link>
        </div>
      </main>
    </div>
  );
}
