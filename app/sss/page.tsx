import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
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
    <div className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <div className="flex items-center gap-4 mb-3">
          <span className="w-14 h-14 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <HelpCircle size={28} strokeWidth={2.4} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">
            Sıkça Sorulan Sorular
          </h1>
        </div>
        <p className="text-ink-soft font-semibold leading-relaxed mb-7">
          Ehliyet sınavı ve süreciyle ilgili en çok merak edilen soruları
          derledik. Sınav puanından sağlık raporuna, sınav hakkından belge
          işlemlerine kadar aklına takılanların cevabı burada.
        </p>

        <div className="flex flex-col gap-2.5 mb-8">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group card rounded-2xl border-2 border-line bg-surface open:border-primary-soft"
            >
              <summary className="flex items-center justify-between gap-3 p-4 min-h-14 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-extrabold text-[15px] sm:text-base text-ink leading-snug">
                {item.q}
                <ChevronDown
                  size={20}
                  strokeWidth={2.6}
                  className="text-ink-soft shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="px-4 pb-4 -mt-1 text-[15px] font-semibold text-ink-soft leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div
          className="rounded-3xl bg-primary text-white p-6 text-center"
          style={{ boxShadow: "0 4px 0 0 var(--color-primary-deep)" }}
        >
          <p className="font-display font-black text-xl mb-4">
            Hazırlığa başlamaya ne dersin?
          </p>
          <Link
            href="/sinav"
            className="inline-flex items-center gap-2 min-h-12 rounded-2xl bg-white text-primary px-6 font-extrabold text-[15px] hover:bg-white/90 transition-colors"
          >
            Deneme sınavı çöz
            <ArrowRight size={18} strokeWidth={2.6} />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/rehber"
            className="card flex items-center justify-between gap-3 rounded-2xl border-2 border-line bg-surface px-4 min-h-14 font-extrabold text-ink hover:text-primary"
          >
            Hazırlık Rehberi
            <ArrowRight size={18} strokeWidth={2.6} className="text-ink-soft" />
          </Link>
          <Link
            href="/blog"
            className="card flex items-center justify-between gap-3 rounded-2xl border-2 border-line bg-surface px-4 min-h-14 font-extrabold text-ink hover:text-primary"
          >
            Blog yazıları
            <ArrowRight size={18} strokeWidth={2.6} className="text-ink-soft" />
          </Link>
        </div>
      </main>
    </div>
  );
}
