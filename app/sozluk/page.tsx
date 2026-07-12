import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Trafik Terimleri Sözlüğü | EhliyetAl",
  description:
    "Ehliyet sınavına hazırlananlar için trafik, motor ve ilk yardım terimlerinin kısa ve anlaşılır açıklamalarını içeren sözlük.",
  alternates: {
    canonical: "https://ehliyetal.net/sozluk",
  },
};

const terms = [
  {
    term: "Banket",
    definition:
      "Yaya yolu ayrılmamış kara yolunda, taşıt yolu kenarı ile hendek arasında kalan, genellikle yayaların ve zorunlu hâllerde araçların kullanabileceği bölüm.",
  },
  {
    term: "Duraklama",
    definition:
      "Trafik zorunluluğu nedeniyle veya kısa süreliğine, sürücünün araç başında kalarak aracı geçici olarak durdurması.",
  },
  {
    term: "Durma",
    definition:
      "Trafik zorunluluğu bulunmadığı hâlde, yolcu veya yük alma-verme gibi nedenlerle aracın bırakılması.",
  },
  {
    term: "Emniyet Şeridi",
    definition:
      "Otoyollarda ve bazı bölünmüş yollarda, yalnızca arıza veya acil durumlarda kullanılmak üzere ayrılmış en sağdaki şerit.",
  },
  {
    term: "Fren Mesafesi",
    definition:
      "Frene basıldığı andan itibaren aracın tamamen durmasına kadar kat edilen yol; hız, yol yüzeyi ve lastik durumuna göre değişir.",
  },
  {
    term: "Gabari",
    definition:
      "Bir kara yolunun taşıyabileceği araçların yükseklik, genişlik ve uzunluk gibi sınırlarını belirleyen ölçü.",
  },
  {
    term: "Geçiş Üstünlüğü",
    definition:
      "Görev hâlindeki ambulans, itfaiye gibi araçların, can ve mal güvenliğini tehlikeye atmamak şartıyla trafik kısıtlamalarına bağlı olmadan hareket edebilme hakkı.",
  },
  {
    term: "Hemzemin Geçit",
    definition:
      "Bir kara yolu ile demir yolunun aynı seviyede kesiştiği geçiş noktası.",
  },
  {
    term: "Kavşak",
    definition:
      "İki veya daha fazla kara yolunun kesişmesi veya birleşmesiyle oluşan ortak alan.",
  },
  {
    term: "Öncelikli Yol",
    definition:
      "Bir kavşakta, kesişen diğer yollara göre geçiş hakkına sahip olan ana yol.",
  },
  {
    term: "Refüj",
    definition:
      "Kara yolunun gidiş ve geliş yönlerini birbirinden ayıran, genellikle yükseltilmiş veya bitkilendirilmiş bölüm.",
  },
  {
    term: "Sollama",
    definition:
      "Bir aracın, önünde aynı yönde seyreden başka bir aracı geçmesi işlemi.",
  },
  {
    term: "Şerit",
    definition:
      "Bir kara yolunun, bir dizi taşıtın güvenli şekilde seyredebileceği şekilde bölünmüş bölümlerinden her biri.",
  },
  {
    term: "Takip Mesafesi",
    definition:
      "Bir aracın, önündeki aracı güvenli şekilde takip edebilmesi için bırakması gereken mesafe.",
  },
  {
    term: "Tali Yol",
    definition:
      "Bir kavşakta, ana/öncelikli yola bağlanan ve geçiş önceliği bulunmayan yol.",
  },
  {
    term: "ABS",
    definition:
      "Ani frenlemelerde tekerleklerin kilitlenmesini önleyerek direksiyon hâkimiyetinin korunmasını sağlayan elektronik fren sistemi.",
  },
  {
    term: "Aquaplaning",
    definition:
      "Yağmurlu havada, lastiklerin su tabakasını yeterince atamaması sonucu yol yüzeyiyle temasını kaybederek kayması.",
  },
  {
    term: "Debriyaj (Kavrama)",
    definition:
      "Vites değiştirilirken motorun gücünü geçici olarak şanzımandan ayıran mekanik sistem.",
  },
  {
    term: "Katalitik Konvertör",
    definition:
      "Egzoz gazındaki zararlı bileşenleri kimyasal reaksiyonlarla daha az zararlı hâle dönüştüren parça.",
  },
  {
    term: "Triger Kayışı",
    definition:
      "Krank milinin hareketini eksantrik mile ileterek supapların doğru zamanlamada açılıp kapanmasını sağlayan kayış.",
  },
  {
    term: "Heimlich Manevrası",
    definition:
      "Solunum yolu tamamen tıkanmış bir kişide, karın bölgesine uygulanan ani baskılarla yabancı cismin çıkarılmasını amaçlayan ilk yardım tekniği.",
  },
  {
    term: "Koma Pozisyonu",
    definition:
      "Bilinci kapalı ama solunumu olan bir kazazedeye, hava yolunun açık kalması için verilen yan yatış pozisyonu.",
  },
  {
    term: "Temel Yaşam Desteği",
    definition:
      "Kalbi durmuş bir kişiye, hayati organların kan akışını sürdürmek amacıyla uygulanan kalp masajı ve yapay solunum bütünü.",
  },
  {
    term: "Turnike",
    definition:
      "Uzuv kopması gibi ciddi kanamalarda, kan akışını tamamen durdurmak için uygulanan boğucu sargı yöntemi.",
  },
  {
    term: "Trafik Adabı",
    definition:
      "Trafik ortamında sorumluluk, saygı, hoşgörü ve fedakârlık gibi değerlere sahip olabilme yetisi.",
  },
];

export default function SozlukPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Trafik Terimleri Sözlüğü",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <BookOpen size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">
            Trafik Terimleri Sözlüğü
          </h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-10">
          Ehliyet sınavına çalışırken sık karşılaşacağın trafik, motor ve ilk
          yardım terimlerinin kısa açıklamaları. Bir terimi anlamadan
          ezberlemek yerine, ne anlama geldiğini öğrenerek çalışman soruları
          çok daha kolay çözmeni sağlar.
        </p>

        <div className="flex flex-col gap-3">
          {terms.map((t) => (
            <div
              key={t.term}
              className="bg-surface border border-line rounded-xl p-4"
            >
              <p className="font-display text-base text-gold mb-1">{t.term}</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                {t.definition}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/quiz/trafik"
            className="flex-1 text-center rounded-full border border-line px-5 py-3 text-sm font-display uppercase tracking-wide text-ink hover:bg-gold-wash hover:border-gold-soft transition-colors"
          >
            Trafik sorularını çöz
          </Link>
          <Link
            href="/rehber"
            className="flex-1 text-center rounded-full border border-line px-5 py-3 text-sm font-display uppercase tracking-wide text-ink hover:bg-gold-wash hover:border-gold-soft transition-colors"
          >
            Hazırlık rehberine git
          </Link>
        </div>
      </main>
    </div>
  );
}
