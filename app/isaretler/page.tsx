import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Signpost } from "lucide-react";
import * as Signs from "@/components/TrafficSigns";

export const metadata: Metadata = {
  title: "Trafik İşaretleri Rehberi | EhliyetAl",
  description:
    "Tehlike uyarı, trafik tanzim, bilgi ve park işaretlerinin anlamları — görsellerle anlatılan trafik işaretleri rehberi.",
  alternates: {
    canonical: "https://ehliyetal.net/isaretler",
  },
};

type SignEntry = {
  code: string;
  name: string;
  meaning: string;
  visualId: keyof typeof Signs.signRegistry;
};

const groups: { title: string; intro: string; signs: SignEntry[] }[] = [
  {
    title: "Tehlike Uyarı İşaretleri",
    intro:
      "Kırmızı kenarlı, beyaz zeminli üçgen şeklindedirler. Sürücüyü ileride karşılaşacağı bir tehlikeye karşı önceden uyarır.",
    signs: [
      {
        code: "T-1a",
        name: "Sağa Tehlikeli Viraj",
        meaning: "İleride sağa dönen tehlikeli bir viraj bulunduğunu bildirir; hız önceden azaltılmalıdır.",
        visualId: "tehlikeliVirajSag",
      },
      {
        code: "T-8",
        name: "Kaygan Yol",
        meaning: "Yol yüzeyinin ıslak, yağlı veya buzlu olabileceğini, ani manevralardan kaçınılması gerektiğini bildirir.",
        visualId: "kayganYol",
      },
      {
        code: "T-11",
        name: "Yaya Geçidi",
        meaning: "İleride bir yaya geçidi bulunduğunu, yayalara karşı dikkatli olunması gerektiğini bildirir.",
        visualId: "yayaGecidi",
      },
      {
        code: "T-12",
        name: "Okul Geçidi",
        meaning: "Okul bölgesine yaklaşıldığını, çocukların ani hareketlerine karşı yavaşlanması gerektiğini bildirir.",
        visualId: "okulGecidiUyari",
      },
      {
        code: "T-21",
        name: "Kontrolsüz Kavşak",
        meaning: "Işık veya öncelik levhası bulunmayan bir kavşağa yaklaşıldığını bildirir; hız azaltılmalıdır.",
        visualId: "kontrolsuzKavsak",
      },
      {
        code: "T-24",
        name: "Dönel Kavşak",
        meaning: "İleride göbekli (dönel) bir kavşak bulunduğunu bildirir.",
        visualId: "donelKavsakUyari",
      },
    ],
  },
  {
    title: "Trafik Tanzim İşaretleri",
    intro:
      "Genellikle dairesel şekildedirler; kırmızı kenarlı olanlar bir yasağı, mavi zeminli olanlar ise bir zorunluluğu (mecburiyeti) bildirir. Dur ve Yol Ver işaretleri şekilleriyle diğerlerinden ayrılır.",
    signs: [
      {
        code: "TT-1",
        name: "Yol Ver",
        meaning: "Sürücünün kavşakta öncelikli yoldaki araçlara geçiş hakkı vermesi gerektiğini bildirir.",
        visualId: "yolVer",
      },
      {
        code: "TT-2",
        name: "Dur",
        meaning: "Aracın tamamen durdurulmasını ve öncelikli yolun kontrol edilmesini zorunlu kılar.",
        visualId: "dur",
      },
      {
        code: "TT-4",
        name: "Girişi Olmayan Yol",
        meaning: "O yöne araçla girişin yasak olduğunu bildirir; genellikle tek yönlü yolların ters istikametinde bulunur.",
        visualId: "girisYok",
      },
      {
        code: "TT-19",
        name: "Taşıt Giremez",
        meaning: "Her türlü taşıtın (motorlu ve motorsuz) o yola girişinin yasak olduğunu bildirir.",
        visualId: "tasitGiremez",
      },
      {
        code: "TT-26a",
        name: "Sağa Dönülmez",
        meaning: "Bulunulan kavşakta sağa dönüşün yasak olduğunu bildirir.",
        visualId: "sagaDonulmez",
      },
      {
        code: "TT-27",
        name: "Öndeki Taşıtı Geçmek Yasaktır",
        meaning: "O yol kesiminde sollama (öndeki aracı geçme) yapılmasının yasak olduğunu bildirir.",
        visualId: "ondekiTasitiGecmekYasak",
      },
      {
        code: "TT-29a",
        name: "Azami Hız Sınırlaması",
        meaning: "Üzerinde belirtilen değerin, o yol kesimindeki en yüksek (azami) hız sınırı olduğunu bildirir.",
        visualId: "azamiHiz",
      },
      {
        code: "TT-32",
        name: "Bütün Yasaklama ve Kısıtlamaların Sonu",
        meaning: "O noktaya kadar geçerli olan tüm yasak ve kısıtlamaların sona erdiğini bildirir.",
        visualId: "tumYasaklarSonu",
      },
      {
        code: "TT-35a",
        name: "Sağa Mecburi Yön",
        meaning: "Sürücünün o noktada mecburen sağa doğru ilerlemesi gerektiğini bildirir.",
        visualId: "sagaMecburiYon",
      },
      {
        code: "TT-38a",
        name: "Mecburi Bisiklet Yolu",
        meaning: "O yol kesiminin bisikletliler tarafından mecburen kullanılması gereken bir bisiklet yolu olduğunu bildirir.",
        visualId: "mecburiBisikletYolu",
      },
    ],
  },
  {
    title: "Bilgi İşaretleri",
    intro:
      "Genellikle mavi zeminli kare veya dikdörtgen şekildedirler. Sürücüye yol, hizmet veya tesislerle ilgili bilgi verir; bir yasak veya zorunluluk içermezler.",
    signs: [
      {
        code: "B-14a",
        name: "Yaya Geçidi (Bilgi)",
        meaning: "Yaklaşılan yerde bir yaya geçidi bulunduğunu bilgi amaçlı bildirir.",
        visualId: "bilgiYayaGecidi",
      },
      {
        code: "B-15",
        name: "Hastane",
        meaning: "Yakında bir hastane bulunduğunu ve gerektiğinde bu yöne yönlenilebileceğini bildirir.",
        visualId: "hastane",
      },
      {
        code: "B-16a",
        name: "Tek Yönlü Yol",
        meaning: "Bulunulan yolun sadece ok yönünde tek yönlü olarak kullanılabildiğini bildirir.",
        visualId: "tekYonluYol",
      },
      {
        code: "B-18",
        name: "Otoyol Başlangıcı",
        meaning: "Aracın bir otoyola girmek üzere olduğunu bildirir; otoyollarda farklı hız ve kullanım kuralları geçerlidir.",
        visualId: "otoyolBaslangic",
      },
      {
        code: "B-22",
        name: "Durak",
        meaning: "Toplu taşıma araçlarının yolcu bindirip indirdiği durak noktasını bildirir.",
        visualId: "durak",
      },
    ],
  },
  {
    title: "Durma ve Park Etme İşaretleri",
    intro:
      "Mavi zeminli 'P' harfi ve kırmızı çapraz çizgilerle, aracın nerede park edilebileceğini veya edilemeyeceğini bildirir.",
    signs: [
      {
        code: "P-3a",
        name: "Park Yeri",
        meaning: "O bölgede araç park edilebilecek bir park yeri bulunduğunu bildirir.",
        visualId: "parkYeri",
      },
      {
        code: "P-1",
        name: "Park Etmek Yasaktır",
        meaning: "O bölgede park etmenin yasak olduğunu, ancak kısa süreli duraklamanın serbest olduğunu bildirir.",
        visualId: "parkYasak",
      },
      {
        code: "P-2",
        name: "Duraklamak ve Park Etmek Yasaktır",
        meaning: "O bölgede hem duraklamanın hem de park etmenin tamamen yasak olduğunu bildirir.",
        visualId: "duraklamaParkYasak",
      },
    ],
  },
];

export default function IsaretlerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Trafik İşaretleri Rehberi",
    hasDefinedTerm: groups.flatMap((g) =>
      g.signs.map((s) => ({
        "@type": "DefinedTerm",
        name: `${s.code} ${s.name}`,
        description: s.meaning,
      }))
    ),
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
            <Signpost size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">
            Trafik İşaretleri Rehberi
          </h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-4">
          Karayolları Genel Müdürlüğü'nün resmi standardına göre trafik
          işaretleri dört ana grupta toplanır: tehlike uyarı, trafik tanzim,
          bilgi ve park/durma işaretleri. Aşağıda en sık karşılaşılan ve
          sınavda çıkan işaretlerin anlamlarını, kendi çizdiğimiz basit
          gösterimlerle bulabilirsin.
        </p>
        <p className="text-xs text-ink-soft/70 leading-relaxed mb-10">
          Not: Buradaki işaret çizimleri, resmi levhaların şekil ve renk
          standardını temel alan orijinal, sadeleştirilmiş gösterimlerdir;
          resmi kurumların yayımladığı afiş veya belgelerin kopyası değildir.
        </p>

        {groups.map((group) => (
          <div key={group.title} className="mb-12">
            <h2 className="font-display text-xl text-ink mb-2">
              {group.title}
            </h2>
            <p className="text-sm text-ink-soft leading-relaxed mb-5">
              {group.intro}
            </p>
            <div className="flex flex-col gap-3">
              {group.signs.map((sign) => {
                const SignIcon = Signs.signRegistry[sign.visualId];
                return (
                  <div
                    key={sign.code}
                    className="flex items-center gap-4 bg-surface border border-line rounded-xl p-4"
                  >
                    <div className="shrink-0">
                      <SignIcon size={56} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-data text-[10px] uppercase tracking-wide text-gold">
                        {sign.code}
                      </p>
                      <p className="font-display text-base text-ink mb-1">
                        {sign.name}
                      </p>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {sign.meaning}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <Link
          href="/quiz/isaretler"
          className="inline-flex items-center gap-2 font-display text-sm tracking-wide uppercase rounded-full gold-gradient text-white px-6 py-3 hover:bg-gold-soft transition-colors"
        >
          İşaret sorularını çöz
          <ArrowRight size={16} />
        </Link>
      </main>
    </div>
  );
}
