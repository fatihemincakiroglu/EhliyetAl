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
    <div className="min-h-screen bg-paper">
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
            <Signpost size={18} />
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-ink">
            Trafik İşaretleri Sınav Sorularına Nasıl Çalışılır?
          </h1>
        </div>

        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          Trafik işaretleri konusu ehliyet sınavında en çok soru gelen ve en
          çok karıştırılan konulardan biridir. Levhaları ezberlemek yerine
          gruplarına göre mantığını kavramak, sınavda hiç görmediğin bir
          işaretle karşılaştığında bile doğru tahmin yapmanı sağlar.
        </p>

        <h2 className="font-display text-lg text-ink mb-4">
          İşaret Gruplarını Şekline Göre Ayır
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {groups.map((group) => (
            <div key={group.title} className="bg-surface border border-line rounded-xl p-4">
              <p className="font-display text-base text-ink mb-1">{group.title}</p>
              <p className="text-xs text-gold font-data uppercase tracking-wide mb-2">
                {group.color}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">{group.text}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-lg text-ink mb-4">
          Sınavda En Çok Yapılan Hatalar
        </h2>
        <ul className="text-sm text-ink-soft space-y-2 mb-10 list-disc list-inside">
          {mistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <div className="bg-gold-wash border border-gold-soft/40 rounded-2xl p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            Çalışma yöntemi olarak önce şekli ve rengi kategorilendirmeyi
            öğren, sonra o kategori içindeki detayları ekle. Rastgele
            ezberlemek yerine bu sıralamayla ilerlemek kalıcılığı artırır.
          </p>
        </div>

        <Link
          href="/quiz/isaretler"
          className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
        >
          Trafik İşaretleri sorularını çözmeye başla →
        </Link>
      </main>
    </div>
  );
}
