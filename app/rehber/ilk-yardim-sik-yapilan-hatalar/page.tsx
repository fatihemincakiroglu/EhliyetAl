import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HeartPulse, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://ehliyetal.net";
const PATH = "/rehber/ilk-yardim-sik-yapilan-hatalar";

export const metadata: Metadata = {
  title: "İlk Yardım Konusunda En Çok Yanlış Yapılan Sorular | EhliyetAl",
  description:
    "Ehliyet sınavının ilk yardım bölümünde adayların en sık karıştırdığı kavramlar ve doğru çalışma yöntemi.",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const pitfalls = [
  {
    title: "Temel yaşam desteği sırasını karıştırmak",
    text: "Bilinç kontrolü, yardım çağırma, hava yolu açma ve göğüs basısı adımlarının sırasını karıştırmak sınavda en sık yapılan hatalardan biridir. Adımları hep aynı sırayla tekrar ederek çalışmak ezberi kalıcı hâle getirir.",
  },
  {
    title: "'Turnike' ile 'basınç uygulama' yöntemini karıştırmak",
    text: "Kanama kontrolünde önce basınç uygulanır; turnike ancak basınçla durmayan ciddi kanamalarda ve doğru teknikle uygulanan bir sonraki adımdır. Bu ikisinin ne zaman kullanılacağını ayrı ayrı çalışmak gerekir.",
  },
  {
    title: "Kırık şüphesinde hareket ettirme hatası",
    text: "Kırık veya çıkık şüphesi olan bir bölgeyi gereksiz yere hareket ettirmek sınavda 'yanlış' olarak işaretlenen klasik bir davranıştır. Doğru yaklaşım bölgeyi sabitleyip tıbbi yardım beklemektir.",
  },
  {
    title: "Bilinci kapalı ama solunumu olan kişiye yanlış pozisyon vermek",
    text: "Bilinci kapalı, solunumu olan bir kişiye koma pozisyonu (yan yatış) verilmesi gerekirken sırt üstü bırakılması sık yapılan bir hatadır; bu durum soluk yolunun tıkanma riskini artırır.",
  },
  {
    title: "Trafik kazasında aracı ilk kimin/neyin yapması gerektiğini karıştırmak",
    text: "Kaza yerinde önce güvenli alan oluşturma ve 112'yi arama, sonra ilk yardım uygulaması sırasının karıştırılması, sınavda öncelik sorularında yanlış cevaplara yol açar.",
  },
];

export default function IlkYardimHatalarRehberi() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: "İlk Yardım Sık Hatalar", item: `${SITE_URL}${PATH}` },
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
            <HeartPulse size={18} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">
            İlk Yardım Konusunda En Çok Yanlış Yapılan Sorular
          </h1>
        </div>

        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-8">
          İlk yardım, ehliyet sınavının en fazla detay içeren derslerinden
          biri. Adayların büyük kısmı benzer noktalarda hata yapıyor —
          bunları önceden bilmek, sınavda tuzağa düşmemeni sağlar.
        </p>

        <div className="flex flex-col gap-3 mb-10">
          {pitfalls.map((p, i) => (
            <div key={p.title} className="flex gap-4 bg-surface border-2 border-line rounded-2xl p-4 sm:p-5">
              <span className="w-9 h-9 rounded-xl bg-primary text-white font-display font-black text-base flex items-center justify-center shrink-0">{i + 1}</span>
              <div>
                <p className="font-display font-extrabold text-[16px] text-ink mb-1">{p.title}</p>
                <p className="text-[15px] font-medium text-ink-soft leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-wash rounded-2xl p-4 sm:p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">
            Bu hataların çoğu, adımları ezberlemek yerine mantığını anlamadan
            çalışmaktan kaynaklanır. Bir senaryoyu zihninde canlandırarak
            (&ldquo;önce ne yaparım, sonra ne yaparım&rdquo;) çalışmak kalıcılığı önemli
            ölçüde artırır.
          </p>
        </div>

        <Link
          href="/quiz/ilkyardim"
          className="btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink"
        >
          İlk Yardım sorularını çözmeye başla →
        </Link>
      </main>
    </div>
  );
}
