import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, CalendarDays, ExternalLink } from "lucide-react";

const SITE_URL = "https://ehliyetal.net";
const PATH = "/rehber/ehliyet-sinavi-tarihleri-2026";

export const metadata: Metadata = {
  title: "2026 Ehliyet Sınavı Ne Zaman? Sınav Dönemleri | EhliyetAl",
  description:
    "Ehliyet sınavları yılda kaç dönem yapılır, tarihler nasıl belirlenir ve güncel sınav takvimini nereden takip edebilirsin? Adım adım anlat.",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const faqItems = [
  {
    q: "Ehliyet sınavları yılda kaç kez yapılır?",
    a: "Teorik sınavlar, sürücü kursuna kayıt olan aday sayısına ve il/ilçe millî eğitim müdürlüğünün planlamasına bağlı olarak yıl içinde birden fazla dönemde düzenlenir. Büyük illerde dönem sayısı genellikle daha fazladır.",
  },
  {
    q: "Sınav tarihimi nasıl öğrenirim?",
    a: "Sınav tarihin, kayıtlı olduğun sürücü kursu tarafından bildirilir. Ayrıca e-Devlet üzerindeki başvuru ekranından da sınav dönemine dair bilgiye ulaşabilirsin.",
  },
  {
    q: "Sınav başvurusunu ne zaman yapmalıyım?",
    a: "Teorik eğitimini tamamladıktan hemen sonra kursun seni sınav başvurusuna yönlendirir. Başvuru son tarihlerini kaçırmamak için kursunla düzenli iletişimde kalman önemlidir.",
  },
  {
    q: "Sınav tarihi değişebilir mi?",
    a: "Evet, resmi tatiller, kontenjan yoğunluğu veya idari kararlar nedeniyle tarihlerde değişiklik olabilir. Güncel takvimi kursundan veya il/ilçe millî eğitim müdürlüğünden teyit etmen en sağlıklısı.",
  },
];

export default function TarihlerRehberi() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: "Sınav Tarihleri", item: `${SITE_URL}${PATH}` },
    ],
  };

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
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <Link
          href="/rehber"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-6 min-h-11"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-12 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <CalendarDays size={18} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">
            2026 Ehliyet Sınavı Ne Zaman?
          </h1>
        </div>

        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-8">
          Ehliyet sınavlarının kesin ve tek bir tarihi yoktur — sınavlar yıl
          içinde birden fazla dönemde, il/ilçe millî eğitim müdürlüklerinin
          planlamasına göre yapılır. Bu sayfada tarih sürecinin nasıl
          işlediğini ve doğru bilgiye nereden ulaşacağını anlatıyoruz.
        </p>

        <div className="bg-danger-wash rounded-2xl p-4 sm:p-5 mb-8 flex gap-3">
          <AlertTriangle size={20} className="text-danger shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">
            Burada sabit bir tarih listesi paylaşmıyoruz çünkü sınav takvimi
            ile ilçeye, kontenjana ve döneme göre değişir. Kesin tarih için tek
            güvenilir kaynak, kayıtlı olduğun sürücü kursu ve e-Devlet&apos;tir.
          </p>
        </div>

        <h2 className="font-display font-black text-xl text-ink mb-3">
          Sınav Tarihi Süreci Nasıl İşler?
        </h2>
        <ul className="text-[16px] font-medium text-ink leading-[1.7] space-y-2 mb-10 list-disc pl-5 marker:text-primary">
          <li>
            Teorik eğitimini tamamlayan adaylar kursun belirlediği dönemde
            sınav başvurusuna yönlendirilir.
          </li>
          <li>
            İl/ilçe millî eğitim müdürlüğü, o dönemki başvuru sayısına göre
            sınav tarihini ve merkezini belirler.
          </li>
          <li>
            Sınav sonucu genellikle birkaç gün ila birkaç hafta içinde
            açıklanır; süreç detayları için{" "}
            <Link
              href="/rehber/ehliyet-sinavi-sonuc-sorgulama"
              className="font-bold text-primary underline-offset-2 hover:underline"
            >
              sonuç sorgulama rehberine
            </Link>{" "}
            bakabilirsin.
          </li>
          <li>
            Teorik sınavı geçen adaylar direksiyon eğitimi ve ardından
            uygulamalı sınav için yeni bir tarih planına dahil olur.
          </li>
        </ul>

        <h2 className="font-display font-black text-xl text-ink mb-3">
          Güncel Tarihi Nereden Öğrenebilirsin?
        </h2>
        <ul className="text-[16px] font-medium text-ink leading-[1.7] space-y-2 mb-8 list-disc pl-5 marker:text-primary">
          <li>Kayıtlı olduğun sürücü kursunun bilgilendirmeleri</li>
          <li>e-Devlet üzerindeki ilgili başvuru ve sınav hizmeti ekranı</li>
          <li>İl/ilçe millî eğitim müdürlüğünün resmî duyuruları</li>
        </ul>

        <a
          href="https://www.turkiye.gov.tr/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink mb-10"
        >
          e-Devlet&apos;i ziyaret et <ExternalLink size={14} />
        </a>

        <h2 className="font-display font-black text-xl text-ink mb-4">Sıkça Sorulan Sorular</h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqItems.map((item) => (
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

        <p className="text-[15px] font-medium text-ink-soft leading-relaxed">
          Sınav tarihini beklerken zamanını en verimli şekilde kullanmak
          istersen,{" "}
          <Link href="/sinav" className="font-bold text-primary underline-offset-2 hover:underline">
            deneme sınavı çöz
          </Link>{" "}
          ve hazırlığını ölç.
        </p>
      </main>
    </div>
  );
}
