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
        <Link
          href="/rehber"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <CalendarDays size={18} />
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-ink">
            2026 Ehliyet Sınavı Ne Zaman?
          </h1>
        </div>

        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          Ehliyet sınavlarının kesin ve tek bir tarihi yoktur — sınavlar yıl
          içinde birden fazla dönemde, il/ilçe millî eğitim müdürlüklerinin
          planlamasına göre yapılır. Bu sayfada tarih sürecinin nasıl
          işlediğini ve doğru bilgiye nereden ulaşacağını anlatıyoruz.
        </p>

        <div className="bg-danger-wash border border-danger/30 rounded-2xl p-5 mb-8 flex gap-3">
          <AlertTriangle size={20} className="text-danger shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            Burada sabit bir tarih listesi paylaşmıyoruz çünkü sınav takvimi
            ile ilçeye, kontenjana ve döneme göre değişir. Kesin tarih için tek
            güvenilir kaynak, kayıtlı olduğun sürücü kursu ve e-Devlet&apos;tir.
          </p>
        </div>

        <h2 className="font-display text-lg text-ink mb-3">
          Sınav Tarihi Süreci Nasıl İşler?
        </h2>
        <ul className="text-sm text-ink-soft space-y-2 mb-10 list-disc list-inside">
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
              className="text-gold hover:underline"
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

        <h2 className="font-display text-lg text-ink mb-3">
          Güncel Tarihi Nereden Öğrenebilirsin?
        </h2>
        <ul className="text-sm text-ink-soft space-y-2 mb-8 list-disc list-inside">
          <li>Kayıtlı olduğun sürücü kursunun bilgilendirmeleri</li>
          <li>e-Devlet üzerindeki ilgili başvuru ve sınav hizmeti ekranı</li>
          <li>İl/ilçe millî eğitim müdürlüğünün resmî duyuruları</li>
        </ul>

        <a
          href="https://www.turkiye.gov.tr/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors mb-10"
        >
          e-Devlet&apos;i ziyaret et <ExternalLink size={14} />
        </a>

        <h2 className="font-display text-lg text-ink mb-4">Sıkça Sorulan Sorular</h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqItems.map((item) => (
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

        <p className="text-sm text-ink-soft leading-relaxed">
          Sınav tarihini beklerken zamanını en verimli şekilde kullanmak
          istersen,{" "}
          <Link href="/sinav" className="text-gold hover:underline">
            deneme sınavı çöz
          </Link>{" "}
          ve hazırlığını ölç.
        </p>
      </main>
    </div>
  );
}
