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
    text: "Kayıt olunan kursun teorik ve direksiyon eğitimi için belirlediği ücrettir. Kurstan kursa, ilden ile ve ehliyet sınıfına (B, A2, vb.) göre değişiklik gösterebilir.",
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
    a: "Resmi sınav ve harç ücretleri Türkiye genelinde standarttır. Değişen kısım genellikle sürücü kursunun kendi eğitim ücretidir; bu da kurstan kursa ve bazen ilden ile farklılık gösterebilir.",
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
    <div className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <Link
          href="/rehber"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-6 min-h-11"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-4">
          2026 Ehliyet Sınavı Ücretleri Hakkında Bilinmesi Gerekenler
        </h1>
        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-8">
          Ehliyet alma sürecinin birden fazla ücret kalemi vardır ve bu
          tutarlar her yıl güncellenir. Kesin ve güncel rakam vermek yerine,
          hangi kalemlerle karşılaşacağını ve doğru tutarı nereden
          öğrenebileceğini anlatalım.
        </p>

        <div className="bg-danger-wash rounded-2xl p-4 sm:p-5 mb-8 flex gap-3">
          <AlertTriangle size={20} className="text-danger shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">
            Ücretler zamanla değiştiği ve bölgeye/kursa göre farklılık
            gösterebildiği için burada sabit bir tutar paylaşmıyoruz. Güncel ve
            kesin rakamlar için e-Devlet üzerindeki ilgili hizmeti veya
            kayıtlı olacağın sürücü kursunu kontrol etmen en sağlıklısı.
          </p>
        </div>

        <h2 className="font-display font-black text-[22px] sm:text-2xl leading-tight text-ink mb-4">
          Karşılaşabileceğin ücret kalemleri
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {feeCategories.map((fee) => (
            <div
              key={fee.title}
              className="bg-surface border-2 border-line rounded-2xl p-4 sm:p-5"
            >
              <p className="font-display font-extrabold text-[16px] text-ink mb-1">
                {fee.title}
              </p>
              <p className="text-[15px] font-medium text-ink-soft leading-relaxed">
                {fee.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-display font-black text-[22px] sm:text-2xl leading-tight text-ink mb-4">
          Güncel tutarı nereden öğrenebilirsin?
        </h2>
        <ul className="text-[16px] font-medium text-ink leading-[1.7] space-y-2 mb-10 list-disc pl-5 marker:text-primary">
          <li>e-Devlet üzerindeki Millî Eğitim Bakanlığı sürücü kursu/sınav hizmetleri sayfası</li>
          <li>Kayıt olacağın sürücü kursunun güncel fiyat listesi</li>
          <li>İl/ilçe millî eğitim müdürlüğü duyuruları</li>
        </ul>

        <a
          href="https://www.turkiye.gov.tr/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink mb-10"
        >
          e-Devlet&apos;i ziyaret et <ExternalLink size={14} />
        </a>

        <p className="text-[16px] font-medium text-ink leading-[1.75] mb-10">
          Ücretleri öğrendikten sonra sıradaki adım, teorik sınava iyi
          hazırlanmak. <Link href="/sinav" className="font-bold text-primary underline-offset-2 hover:underline">Sınav simülasyonunu</Link> deneyerek
          ne kadar hazır olduğunu görebilirsin.
        </p>

        <h2 className="font-display font-black text-[22px] sm:text-2xl leading-tight text-ink mb-4">Sıkça Sorulan Sorular</h2>
        <div className="flex flex-col gap-3">
          {faqCommon.map((item) => (
            <details
              key={item.q}
              className="group bg-surface border-2 border-line rounded-2xl open:border-primary-soft"
            >
              <summary className="cursor-pointer font-display font-extrabold text-[16px] text-ink list-none flex items-center justify-between gap-3 p-4 min-h-14 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="w-8 h-8 rounded-lg bg-surface-alt text-primary flex items-center justify-center shrink-0 transition-transform group-open:rotate-45 font-display font-black text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-[15px] font-medium text-ink-soft leading-relaxed px-4 pb-4 -mt-1">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
