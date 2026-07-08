import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "2026 Ehliyet Sınavı Ücretleri Hakkında Bilinmesi Gerekenler | EhliyetAl",
  description:
    "Ehliyet alma sürecindeki ücret kalemleri nelerdir, güncel tutarları nereden öğrenebilirsin?",
  alternates: {
    canonical: "https://ehliyetal.net/rehber/ehliyet-sinavi-ucretleri-2026",
  },
};

const feeCategories = [
  {
    title: "Sürücü kursu ücreti",
    text: "Kayıt olunan kursun teorik ve direksiyon eğitimi için belirlediği ücrettir. Kurstan kursa, ile göre ve ehliyet sınıfına (B, A2, vb.) göre değişiklik gösterebilir.",
  },
  {
    title: "Sınav ücreti",
    text: "Teorik ve uygulamalı (direksiyon) sınavlara girmek için ödenen resmi ücrettir. Bu tutar her yıl güncellenir.",
  },
  {
    title: "Sürücü belgesi (ehliyet) harcı ve damga vergisi",
    text: "Sınavları başarıyla tamamlayan adayın sürücü belgesini alabilmesi için ödediği resmi harç ve vergi kalemleridir.",
  },
  {
    title: "Sağlık raporu ücreti",
    text: "Başvuru sürecinde istenen sürücü sağlık raporu için hastane veya yetkili sağlık kuruluşuna ödenen ücrettir.",
  },
];

const faqCommon = [
  {
    q: "Ehliyet ücretleri illere göre farklı mı?",
    a: "Resmi sınav ve harç ücretleri Türkiye genelinde standarttır. Değişen kısım genellikle sürücü kursunun kendi eğitim ücretidir; bu da kurstan kursa ve bazen ile göre farklılık gösterebilir.",
  },
  {
    q: "Kurs ücretini taksitle ödeyebilir miyim?",
    a: "Çoğu sürücü kursu taksit seçenekleri sunar. Taksit sayısı ve şartları kurstan kursa değiştiği için kayıt öncesi yazılı olarak netleştirmen önemlidir.",
  },
  {
    q: "Sınavı geçemezsem tekrar ücret öder miyim?",
    a: "Sınav tekrar ücretleri ve kursun sunduğu ek eğitim ücretleri kurstan kursa değişir. Kayıt sözleşmende bu durumun nasıl ele alındığını kontrol etmen faydalı olur.",
  },
];

export default function UcretlerRehberi() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCommon.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/rehber"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <h1 className="font-display text-3xl text-ink mb-4">
          2026 Ehliyet Sınavı Ücretleri Hakkında Bilinmesi Gerekenler
        </h1>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          Ehliyet alma sürecinin birden fazla ücret kalemi vardır ve bu
          tutarlar her yıl güncellenir. Kesin ve güncel rakam vermek yerine,
          hangi kalemlerle karşılaşacağını ve doğru tutarı nereden
          öğrenebileceğini anlatalım.
        </p>

        <div className="bg-danger-wash border border-danger/30 rounded-2xl p-5 mb-8 flex gap-3">
          <AlertTriangle size={20} className="text-danger shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            Ücretler zamanla değiştiği ve bölgeye/kursa göre farklılık
            gösterebildiği için burada sabit bir tutar paylaşmıyoruz. Güncel ve
            kesin rakamlar için e-Devlet üzerindeki ilgili hizmeti veya
            kayıtlı olacağın sürücü kursunu kontrol etmen en sağlıklısı.
          </p>
        </div>

        <h2 className="font-display text-xl text-ink mb-4">
          Karşılaşabileceğin ücret kalemleri
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {feeCategories.map((fee) => (
            <div
              key={fee.title}
              className="bg-surface border border-line rounded-xl p-4"
            >
              <p className="font-display text-base text-ink mb-1">
                {fee.title}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                {fee.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-xl text-ink mb-4">
          Güncel tutarı nereden öğrenebilirsin?
        </h2>
        <ul className="text-sm text-ink-soft space-y-2 mb-10 list-disc list-inside">
          <li>e-Devlet üzerindeki Millî Eğitim Bakanlığı sürücü kursu/sınav hizmetleri sayfası</li>
          <li>Kayıt olacağın sürücü kursunun güncel fiyat listesi</li>
          <li>İl/ilçe millî eğitim müdürlüğü duyuruları</li>
        </ul>

        <a
          href="https://www.turkiye.gov.tr/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors mb-10"
        >
          e-Devlet&apos;i ziyaret et <ExternalLink size={14} />
        </a>

        <p className="text-sm text-ink-soft leading-relaxed mb-10">
          Ücretleri öğrendikten sonra sıradaki adım, teorik sınava iyi
          hazırlanmak. <Link href="/sinav" className="text-gold hover:underline">Sınav simülasyonunu</Link> deneyerek
          ne kadar hazır olduğunu görebilirsin.
        </p>

        <h2 className="font-display text-xl text-ink mb-4">Sıkça Sorulan Sorular</h2>
        <div className="flex flex-col gap-3">
          {faqCommon.map((item) => (
            <details
              key={item.q}
              className="group bg-surface border border-line rounded-xl p-4 open:border-gold-soft"
            >
              <summary className="cursor-pointer font-display text-sm text-ink list-none flex items-center justify-between gap-3">
                {item.q}
                <span className="text-gold shrink-0 transition-transform group-open:rotate-45 font-display text-xl">
                  +
                </span>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
