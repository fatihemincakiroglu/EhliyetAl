import { signRegistry } from "@/components/TrafficSigns";

export type SignCategory =
  | "Tehlike Uyarı"
  | "Trafik Tanzim"
  | "Bilgi"
  | "Park";

export type SignEntry = {
  code: string;
  name: string;
  meaning: string;
  visualId: keyof typeof signRegistry;
  category: SignCategory;
};

export const signs: SignEntry[] = [
  // --- Tehlike Uyarı İşaretleri ---
  {
    code: "T-1a",
    name: "Sağa Tehlikeli Viraj",
    meaning:
      "İleride sağa dönen tehlikeli bir viraj bulunduğunu bildirir; hız önceden azaltılmalıdır.",
    visualId: "tehlikeliVirajSag",
    category: "Tehlike Uyarı",
  },
  {
    code: "T-8",
    name: "Kaygan Yol",
    meaning:
      "Yol yüzeyinin ıslak, yağlı veya buzlu olabileceğini, ani manevralardan kaçınılması gerektiğini bildirir.",
    visualId: "kayganYol",
    category: "Tehlike Uyarı",
  },
  {
    code: "T-11",
    name: "Yaya Geçidi",
    meaning:
      "İleride bir yaya geçidi bulunduğunu, yayalara karşı dikkatli olunması gerektiğini bildirir.",
    visualId: "yayaGecidi",
    category: "Tehlike Uyarı",
  },
  {
    code: "T-12",
    name: "Okul Geçidi",
    meaning:
      "Okul bölgesine yaklaşıldığını, çocukların ani hareketlerine karşı yavaşlanması gerektiğini bildirir.",
    visualId: "okulGecidiUyari",
    category: "Tehlike Uyarı",
  },
  {
    code: "T-21",
    name: "Kontrolsüz Kavşak",
    meaning:
      "Işık veya öncelik levhası bulunmayan bir kavşağa yaklaşıldığını bildirir; hız azaltılmalıdır.",
    visualId: "kontrolsuzKavsak",
    category: "Tehlike Uyarı",
  },
  {
    code: "T-24",
    name: "Dönel Kavşak",
    meaning: "İleride göbekli (dönel) bir kavşak bulunduğunu bildirir.",
    visualId: "donelKavsakUyari",
    category: "Tehlike Uyarı",
  },
  // --- Trafik Tanzim İşaretleri ---
  {
    code: "TT-1",
    name: "Yol Ver",
    meaning:
      "Sürücünün kavşakta öncelikli yoldaki araçlara geçiş hakkı vermesi gerektiğini bildirir.",
    visualId: "yolVer",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-2",
    name: "Dur",
    meaning:
      "Aracın tamamen durdurulmasını ve öncelikli yolun kontrol edilmesini zorunlu kılar.",
    visualId: "dur",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-4",
    name: "Girişi Olmayan Yol",
    meaning:
      "O yöne araçla girişin yasak olduğunu bildirir; genellikle tek yönlü yolların ters istikametinde bulunur.",
    visualId: "girisYok",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-19",
    name: "Taşıt Giremez",
    meaning:
      "Her türlü taşıtın (motorlu ve motorsuz) o yola girişinin yasak olduğunu bildirir.",
    visualId: "tasitGiremez",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-26a",
    name: "Sağa Dönülmez",
    meaning: "Bulunulan kavşakta sağa dönüşün yasak olduğunu bildirir.",
    visualId: "sagaDonulmez",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-27",
    name: "Öndeki Taşıtı Geçmek Yasaktır",
    meaning:
      "O yol kesiminde sollama (öndeki aracı geçme) yapılmasının yasak olduğunu bildirir.",
    visualId: "ondekiTasitiGecmekYasak",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-29a",
    name: "Azami Hız Sınırlaması",
    meaning:
      "Üzerinde belirtilen değerin, o yol kesimindeki en yüksek (azami) hız sınırı olduğunu bildirir.",
    visualId: "azamiHiz",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-32",
    name: "Bütün Yasaklama ve Kısıtlamaların Sonu",
    meaning:
      "O noktaya kadar geçerli olan tüm yasak ve kısıtlamaların sona erdiğini bildirir.",
    visualId: "tumYasaklarSonu",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-35a",
    name: "Sağa Mecburi Yön",
    meaning:
      "Sürücünün o noktada mecburen sağa doğru ilerlemesi gerektiğini bildirir.",
    visualId: "sagaMecburiYon",
    category: "Trafik Tanzim",
  },
  {
    code: "TT-38a",
    name: "Mecburi Bisiklet Yolu",
    meaning:
      "O yol kesiminin bisikletliler tarafından mecburen kullanılması gereken bir bisiklet yolu olduğunu bildirir.",
    visualId: "mecburiBisikletYolu",
    category: "Trafik Tanzim",
  },
  // --- Bilgi İşaretleri ---
  {
    code: "B-14a",
    name: "Yaya Geçidi (Bilgi)",
    meaning: "Yaklaşılan yerde bir yaya geçidi bulunduğunu bilgi amaçlı bildirir.",
    visualId: "bilgiYayaGecidi",
    category: "Bilgi",
  },
  {
    code: "B-15",
    name: "Hastane",
    meaning:
      "Yakında bir hastane bulunduğunu ve gerektiğinde bu yöne yönlenilebileceğini bildirir.",
    visualId: "hastane",
    category: "Bilgi",
  },
  {
    code: "B-16a",
    name: "Tek Yönlü Yol",
    meaning:
      "Bulunulan yolun sadece ok yönünde tek yönlü olarak kullanılabildiğini bildirir.",
    visualId: "tekYonluYol",
    category: "Bilgi",
  },
  {
    code: "B-18",
    name: "Otoyol Başlangıcı",
    meaning:
      "Aracın bir otoyola girmek üzere olduğunu bildirir; otoyollarda farklı hız ve kullanım kuralları geçerlidir.",
    visualId: "otoyolBaslangic",
    category: "Bilgi",
  },
  {
    code: "B-22",
    name: "Durak",
    meaning:
      "Toplu taşıma araçlarının yolcu bindirip indirdiği durak noktasını bildirir.",
    visualId: "durak",
    category: "Bilgi",
  },
  // --- Durma ve Park Etme İşaretleri ---
  {
    code: "P-3a",
    name: "Park Yeri",
    meaning: "O bölgede araç park edilebilecek bir park yeri bulunduğunu bildirir.",
    visualId: "parkYeri",
    category: "Park",
  },
  {
    code: "P-1",
    name: "Park Etmek Yasaktır",
    meaning:
      "O bölgede park etmenin yasak olduğunu, ancak kısa süreli duraklamanın serbest olduğunu bildirir.",
    visualId: "parkYasak",
    category: "Park",
  },
  {
    code: "P-2",
    name: "Duraklamak ve Park Etmek Yasaktır",
    meaning:
      "O bölgede hem duraklamanın hem de park etmenin tamamen yasak olduğunu bildirir.",
    visualId: "duraklamaParkYasak",
    category: "Park",
  },
];

export function getSignByVisualId(visualId: string): SignEntry | undefined {
  return signs.find((s) => s.visualId === visualId);
}
