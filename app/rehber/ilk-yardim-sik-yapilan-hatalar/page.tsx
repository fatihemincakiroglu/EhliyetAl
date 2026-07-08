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
            <HeartPulse size={18} />
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-ink">
            İlk Yardım Konusunda En Çok Yanlış Yapılan Sorular
          </h1>
        </div>

        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          İlk yardım, ehliyet sınavının en fazla detay içeren derslerinden
          biri. Adayların büyük kısmı benzer noktalarda hata yapıyor —
          bunları önceden bilmek, sınavda tuzağa düşmemeni sağlar.
        </p>

        <div className="flex flex-col gap-3 mb-10">
          {pitfalls.map((p, i) => (
            <div key={p.title} className="flex gap-4 bg-surface border border-line rounded-xl p-4">
              <span className="font-display text-xl text-gold shrink-0 w-8">{i + 1}</span>
              <div>
                <p className="font-display text-base text-ink mb-1">{p.title}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gold-wash border border-gold-soft/40 rounded-2xl p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            Bu hataların çoğu, adımları ezberlemek yerine mantığını anlamadan
            çalışmaktan kaynaklanır. Bir senaryoyu zihninde canlandırarak
            (&ldquo;önce ne yaparım, sonra ne yaparım&rdquo;) çalışmak kalıcılığı önemli
            ölçüde artırır.
          </p>
        </div>

        <Link
          href="/quiz/ilkyardim"
          className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
        >
          İlk Yardım sorularını çözmeye başla →
        </Link>
      </main>
    </div>
  );
}
