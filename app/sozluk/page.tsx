import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

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
    <div className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <div className="flex items-center gap-4 mb-3">
          <span className="w-14 h-14 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <BookOpen size={28} strokeWidth={2.4} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">
            Trafik Terimleri Sözlüğü
          </h1>
        </div>
        <p className="text-ink-soft font-semibold leading-relaxed mb-7">
          Ehliyet sınavına çalışırken sık karşılaşacağın trafik, motor ve ilk
          yardım terimlerinin kısa açıklamaları. Bir terimi anlamadan
          ezberlemek yerine, ne anlama geldiğini öğrenerek çalışman soruları
          çok daha kolay çözmeni sağlar.
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {terms.map((t) => (
            <div key={t.term} className="card bg-surface border-2 border-line rounded-2xl p-4">
              <dt className="font-display font-black text-[17px] text-primary mb-1">{t.term}</dt>
              <dd className="text-[15px] font-semibold text-ink-soft leading-relaxed">{t.definition}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/quiz/trafik"
            className="btn-primary rounded-2xl min-h-12 flex items-center justify-center gap-2 px-5 text-[15px]"
          >
            Trafik sorularını çöz
            <ArrowRight size={18} strokeWidth={2.6} />
          </Link>
          <Link
            href="/rehber"
            className="btn-soft rounded-2xl min-h-12 flex items-center justify-center gap-2 px-5 text-[15px] text-ink"
          >
            Hazırlık rehberine git
          </Link>
        </div>
      </main>
    </div>
  );
}
