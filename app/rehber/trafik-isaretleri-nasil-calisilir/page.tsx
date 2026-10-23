import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Signpost, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://ehliyetal.net";
const PATH = "/rehber/trafik-isaretleri-nasil-calisilir";

export const metadata: Metadata = {
  title: "Trafik İşaretleri Sınav Sorularına Nasıl Çalışılır? | EhliyetAl",
  description:
    "Tehlike uyarı, trend ve bilgi işaretlerini karıştırmadan öğrenmenin yolları. Trafik işaretleri konusunda sınavda en çok yapılan hatalar ve çalışma yöntemi.",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const groups = [
  {
    title: "Tehlike Uyarı İşaretleri",
    color: "Kırmızı kenarlı, beyaz zeminli, üçgen",
    text: "Yol üzerinde ileride karşılaşılabilecek bir tehlikeyi önceden bildirir (viraj, kaygan yol, okul geçidi gibi). Şekil üçgen olduğu için diğer gruplardan kolayca ayırt edilir; sınavda şekli görür görmez 'bu bir uyarı' demeyi alışkanlık hâline getir.",
  },
  {
    title: "Trafik Tanzim (Yasaklama/Sınırlama) İşaretleri",
    color: "Kırmızı kenarlı, dairesel — bazıları mavi zeminli dairesel (zorunluluk)",
    text: "Bir davranışı yasaklar, sınırlar veya zorunlu kılar (hız sınırı, sollama yasağı, dönüş zorunluluğu gibi). Kırmızı çemberli daire genelde 'yasak', mavi zeminli daire ise genelde 'zorunluluk' anlamına gelir — bu ayrımı net kurman en çok karıştırılan noktadır.",
  },
  {
    title: "Bilgi İşaretleri",
    color: "Genellikle dikdörtgen veya kare, mavi/yeşil zemin",
    text: "Sürücüye yol, hizmet veya yer hakkında bilgi verir (otopark, hastane, otoyol girişi gibi). Yasaklayıcı ya da uyarıcı değil, yönlendirici ve bilgilendiricidir.",
  },
  {
    title: "Yatay İşaretlemeler (Yol Çizgileri)",
    color: "Yol yüzeyi üzerinde beyaz/sarı çizgiler",
    text: "Şerit ayrımı, duraklama/park yasağı alanları ve yaya geçitleri gibi bilgileri yol yüzerine çizerek verir. Levhalarla karıştırılmaması için ayrı bir başlık olarak çalışılması önerilir.",
  },
];

const mistakes = [
  "Kırmızı çemberli 'yasaklama' işaretleriyle mavi zeminli 'zorunluluk' işaretlerini karıştırmak.",
  "Üçgen tehlike uyarı işaretlerinin sadece 'dikkat' anlamına geldiğini, spesifik bir yasak getirmediğini unutmak.",
  "Yatay işaretlemeleri (yol çizgileri) düşey levhalarla aynı kategoride değerlendirmek.",
  "Şekli benzer ama anlamı farklı işaretleri (örneğin 'geçiş üstünlüğü' ile 'anayol' işaretleri) birbirine karıştırmak.",
];

export default function IsaretlerNasilCalisilirRehberi() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: "Trafik İşaretleri Çalışma Rehberi", item: `${SITE_URL}${PATH}` },
    ],
  };

  return (
    <div className="bg-paper">
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
            <Signpost size={18} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">
            Trafik İşaretleri Sınav Sorularına Nasıl Çalışılır?
          </h1>
        </div>

        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-8">
          Trafik işaretleri konusu ehliyet sınavında en çok soru gelen ve en
          çok karıştırılan konulardan biridir. Levhaları ezberlemek yerine
          gruplarına göre mantığını kavramak, sınavda hiç görmediğin bir
          işaretle karşılaştığında bile doğru tahmin yapmanı sağlar.
        </p>

        <h2 className="font-display font-black text-xl text-ink mb-4">
          İşaret Gruplarını Şekline Göre Ayır
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {groups.map((group) => (
            <div key={group.title} className="bg-surface border-2 border-line rounded-2xl p-4 sm:p-5">
              <p className="font-display font-extrabold text-[16px] text-ink mb-1">{group.title}</p>
              <p className="text-[13px] font-extrabold text-primary mb-2">
                {group.color}
              </p>
              <p className="text-[15px] font-medium text-ink-soft leading-relaxed">{group.text}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display font-black text-xl text-ink mb-4">
          Sınavda En Çok Yapılan Hatalar
        </h2>
        <ul className="text-[16px] font-medium text-ink leading-[1.7] space-y-2 mb-10 list-disc pl-5 marker:text-primary">
          {mistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <div className="bg-primary-wash rounded-2xl p-4 sm:p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">
            Çalışma yöntemi olarak önce şekli ve rengi kategorilendirmeyi
            öğren, sonra o kategori içindeki detayları ekle. Rastgele
            ezberlemek yerine bu sıralamayla ilerlemek kalıcılığı artırır.
          </p>
        </div>

        <Link
          href="/quiz/isaretler"
          className="btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink"
        >
          Trafik İşaretleri sorularını çözmeye başla →
        </Link>
      </main>
    </div>
  );
}
