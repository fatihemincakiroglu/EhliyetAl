import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Smartphone, Building2, MonitorSmartphone } from "lucide-react";

const SITE_URL = "https://ehliyetal.net";
const PATH = "/rehber/ehliyet-sinavi-sonuc-sorgulama";

export const metadata: Metadata = {
  title: "Ehliyet Sınavı Sonucu Nasıl Öğrenilir? | EhliyetAl",
  description:
    "Teorik ehliyet sınavı sonucunu e-Devlet üzerinden veya sürücü kursu aracılığıyla nasıl sorgulayacağını adım adım öğren.",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const methods = [
  {
    icon: MonitorSmartphone,
    title: "e-Devlet üzerinden sorgulama",
    text: "e-Devlet Kapısı'na giriş yaptıktan sonra Millî Eğitim Bakanlığı'na bağlı 'Sürücü Kursu Sınav Sonuçları' veya ilgili sınav sonuç hizmetini arayarak sonucunu görebilirsin. Sorgulama için T.C. kimlik numaran ve e-Devlet şifren yeterlidir.",
  },
  {
    icon: Building2,
    title: "Sürücü kursu üzerinden öğrenme",
    text: "Kayıtlı olduğun sürücü kursu, sınav sonuçları açıklandığında adayları genellikle telefon, SMS veya kurs panosu üzerinden bilgilendirir. Kursunla iletişimde kalman en hızlı yöntemlerden biridir.",
  },
  {
    icon: Smartphone,
    title: "MEBBİS / il millî eğitim müdürlüğü duyuruları",
    text: "Bazı dönemlerde sonuçlar, il/ilçe millî eğitim müdürlüğünün resmî web sitesi veya duyuru panolarında da paylaşılır. Bölgene ait güncel duyuruları takip etmek faydalı olur.",
  },
];

const faqItems = [
  {
    q: "Ehliyet sınavı sonucu ne zaman açıklanır?",
    a: "Sonuç açıklama süresi sınav dönemine ve il/ilçe millî eğitim müdürlüğünün iş yoğunluğuna göre değişir. Genellikle sınavdan birkaç gün ila birkaç hafta içinde açıklanır; kesin tarih için kayıtlı olduğun kursu takip etmen gerekir.",
  },
  {
    q: "e-Devlet'te sonucumu göremiyorum, ne yapmalıyım?",
    a: "Sonuçlar henüz sisteme işlenmemiş olabilir. Bir süre bekledikten sonra tekrar dene; sorun devam ederse kayıtlı olduğun sürücü kursuyla veya il/ilçe millî eğitim müdürlüğüyle iletişime geç.",
  },
  {
    q: "Teorik sınavı geçtim, sırada ne var?",
    a: "Teorik sınavı geçtikten sonra direksiyon (uygulamalı) eğitimine ve ardından uygulamalı sınava başvurursun. Süreç kursun yönlendirmesiyle devam eder.",
  },
  {
    q: "Sınavı geçemedim, tekrar ne zaman girebilirim?",
    a: "Başarısız olunan sınav hakkı için yeniden sınava girme süreci ve tarihleri il/ilçe millî eğitim müdürlüğü tarafından belirlenir. Kursun sana yeni sınav dönemi hakkında bilgi verecektir.",
  },
];

export default function SonucSorgulamaRehberi() {
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
      { "@type": "ListItem", position: 3, name: "Sınav Sonucu Sorgulama", item: `${SITE_URL}${PATH}` },
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

        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-4">
          Ehliyet Sınavı Sonucu Nasıl Öğrenilir?
        </h1>
        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-8">
          Teorik sınava girdikten sonra sonucunu öğrenmenin birkaç yolu var.
          İşte en sık kullanılan üç yöntem:
        </p>

        <div className="flex flex-col gap-3 mb-10">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className="flex gap-4 bg-surface border-2 border-line rounded-2xl p-4 sm:p-5"
              >
                <span className="w-11 h-11 rounded-xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display font-extrabold text-[16px] text-ink mb-1">
                    {method.title}
                  </p>
                  <p className="text-[15px] font-medium text-ink-soft leading-relaxed">
                    {method.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-wash rounded-2xl p-4 sm:p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">
            EhliyetAl sonuç sorgulama hizmeti sunmaz; bu sayfa yalnızca resmî
            kanalları nasıl kullanacağını anlatan bir yönlendirmedir. Kesin
            sonucunu yalnızca e-Devlet veya sürücü kursun üzerinden
            öğrenebilirsin.
          </p>
        </div>

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
          Sınava tekrar hazırlanman gerekiyorsa,{" "}
          <Link href="/sinav" className="font-bold text-primary underline-offset-2 hover:underline">
            deneme sınavı çözerek
          </Link>{" "}
          veya{" "}
          <Link href="/tekrar" className="font-bold text-primary underline-offset-2 hover:underline">
            yanlışlarını tekrar ederek
          </Link>{" "}
          eksiklerini kapatabilirsin.
        </p>
      </main>
    </div>
  );
}
