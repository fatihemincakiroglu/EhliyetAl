import type { Category } from "../questions";

const category: Category = {
    slug: "isaretler",
    name: "Trafik İşaretleri",
    shortName: "İşaretler",
    description: "Tehlike uyarı, tanzim, bilgi ve park işaretlerinin anlamları",
    questions: [
      {
        id: "isaretler-1",
        text: "Gösterilen işaret hangi anlama gelir?",
        options: [
          "Aracı tamamen durdur, öncelikli yolu kontrol et",
          "Yavaşla, dikkatli geç",
          "Park yapılabilir",
          "Hız sınırı bitti",
        ],
        correctIndex: 0,
        explanation:
          "Kırmızı sekizgen şeklindeki bu işaret 'Dur' işaretidir; araç tamamen durdurulmalı ve öncelikli yol kontrol edilmelidir.",
        difficulty: "kolay",
        visualId: "dur",
      },
      {
        id: "isaretler-2",
        text: "Gösterilen üçgen uyarı işareti neyi bildirir?",
        options: [
          "Okul geçidi",
          "Yaya geçidi",
          "Bisiklet geçebilir",
          "Hayvan geçebilir",
        ],
        correctIndex: 1,
        explanation:
          "Kırmızı kenarlı üçgen içinde yaya figürü bulunan bu işaret, yaklaşılan bölgede yaya geçidi olduğunu bildirir.",
        difficulty: "kolay",
        visualId: "yayaGecidi",
      },
      {
        id: "isaretler-3",
        text: "İçinde iki figür bulunan bu üçgen uyarı işareti neyi bildirir?",
        options: [
          "Yaya geçidi",
          "Gençlik kampı",
          "Okul geçidi",
          "Yürüyüş başlangıcı",
        ],
        correctIndex: 2,
        explanation:
          "Bu işaret okul geçidini bildirir; sürücüler bu bölgede çocukların ani hareketlerine karşı dikkatli olmalıdır.",
        difficulty: "kolay",
        visualId: "okulGecidiUyari",
      },
      {
        id: "isaretler-4",
        text: "Üzerinde çarpı (X) bulunan üçgen uyarı işareti neyi bildirir?",
        options: [
          "Kontrollü demiryolu geçidi",
          "Dönel kavşak",
          "Trafik sıkışıklığı",
          "Kontrolsüz kavşak",
        ],
        correctIndex: 3,
        explanation:
          "Bu işaret, öncelik levhası veya ışık bulunmayan bir kontrolsüz kavşağa yaklaşıldığını bildirir; sürücü hızını azaltıp dikkatli olmalıdır.",
        difficulty: "orta",
        visualId: "kontrolsuzKavsak",
      },
      {
        id: "isaretler-5",
        text: "İçinde dönen ok bulunan üçgen uyarı işareti neyi bildirir?",
        options: [
          "Dönel kavşağa yaklaşıldığı",
          "Kontrollü demiryolu geçidi",
          "U dönüşü yasağı",
          "Trafik sıkışıklığı",
        ],
        correctIndex: 0,
        explanation:
          "Bu işaret, ileride bir dönel (göbekli) kavşak bulunduğunu ve sürücünün buna göre hazırlıklı olması gerektiğini bildirir.",
        difficulty: "orta",
        visualId: "donelKavsakUyari",
      },
      {
        id: "isaretler-6",
        text: "İçinde kıvrımlı bir çizgi bulunan üçgen uyarı işareti neyi bildirir?",
        options: [
          "Gevşek malzemeli zemin",
          "Kaygan yol",
          "Düşük banket",
          "Gizli buzlanma",
        ],
        correctIndex: 1,
        explanation:
          "Bu işaret, yol yüzeyinin kaygan olabileceğini bildirir; sürücü hızını azaltmalı ve ani manevralardan kaçınmalıdır.",
        difficulty: "orta",
        visualId: "kayganYol",
      },
      {
        id: "isaretler-7",
        text: "İçinde sağa kıvrılan bir ok bulunan üçgen uyarı işareti neyi bildirir?",
        options: [
          "Sağdan ana yola giriş",
          "Sağa mecburi yön",
          "Sağa tehlikeli viraj",
          "Sağa dönülmez",
        ],
        correctIndex: 2,
        explanation:
          "Bu üçgen uyarı işareti, ileride sağa doğru tehlikeli bir viraj bulunduğunu bildirir; hız önceden azaltılmalıdır.",
        difficulty: "orta",
        visualId: "tehlikeliVirajSag",
      },
      {
        id: "isaretler-8",
        text: "Ters üçgen şeklindeki bu işaret hangi anlama gelir?",
        options: [
          "Dur, tamamen durmak zorunludur",
          "Girişi olmayan yol",
          "Sollama yasağı",
          "Yol ver, öncelikli yoldaki araçlara geçiş hakkı ver",
        ],
        correctIndex: 3,
        explanation:
          "Kırmızı kenarlı, beyaz zeminli ters üçgen 'Yol Ver' işaretidir; sürücü öncelikli yoldaki araçlara geçiş hakkı vermelidir.",
        difficulty: "kolay",
        visualId: "yolVer",
      },
      {
        id: "isaretler-9",
        text: "Kırmızı daire içinde beyaz yatay çizgi bulunan işaret neyi bildirir?",
        options: [
          "Girişi olmayan yol / taşıtla girilmesi yasak yön",
          "Taşıt trafiğine kapalı yol",
          "Park etmek yasaktır",
          "Azami hız sınırlaması",
        ],
        correctIndex: 0,
        explanation:
          "Bu işaret, o yöne araçla girişin yasak olduğunu bildirir; genellikle tek yönlü yolların ters istikametinde görülür.",
        difficulty: "kolay",
        visualId: "girisYok",
      },
      {
        id: "isaretler-10",
        text: "Kırmızı kenarlı, içi beyaz daire şeklindeki bu işaret neyi bildirir?",
        options: [
          "Motorlu taşıt giremez",
          "Taşıt giremez (tüm araçlar için)",
          "Bisiklet giremez",
          "Yaya giremez",
        ],
        correctIndex: 1,
        explanation:
          "Bu işaret her türlü taşıtın girişinin yasak olduğu yerlerde kullanılır.",
        difficulty: "orta",
        visualId: "tasitGiremez",
      },
      {
        id: "isaretler-11",
        text: "Üzerinde sağa dönen ok ve çapraz kırmızı çizgi bulunan bu işaret neyi bildirir?",
        options: [
          "Sağa mecburi yön",
          "Sağdan gidiniz",
          "Sağa dönülmez",
          "Sağa tehlikeli viraj",
        ],
        correctIndex: 2,
        explanation:
          "Kırmızı çapraz çizgi, o kavşakta sağa dönüşün yasak olduğunu bildirir.",
        difficulty: "orta",
        visualId: "sagaDonulmez",
      },
      {
        id: "isaretler-12",
        text: "İçinde iki araç figürü bulunan kırmızı kenarlı daire işareti neyi bildirir?",
        options: [
          "Takip mesafesi kuralı",
          "Trafik sıkışıklığı",
          "İki yönlü trafik",
          "Öndeki taşıtı geçmek yasaktır",
        ],
        correctIndex: 3,
        explanation:
          "Bu işaret, o yol kesiminde öndeki taşıtın geçilmesinin (sollamanın) yasak olduğunu bildirir.",
        difficulty: "orta",
        visualId: "ondekiTasitiGecmekYasak",
      },
      {
        id: "isaretler-13",
        text: "İçinde bir rakam bulunan kırmızı kenarlı beyaz daire işareti neyi bildirir?",
        options: [
          "Azami hız sınırlaması",
          "Asgari hız zorunluluğu",
          "Şerit numarası",
          "Kavşak numarası",
        ],
        correctIndex: 0,
        explanation:
          "Bu işaret, üzerinde yazan değeri saatteki kilometre olarak azami (en yüksek) hız sınırı olarak belirler.",
        difficulty: "kolay",
        visualId: "azamiHiz",
      },
      {
        id: "isaretler-14",
        text: "Üzerinde birkaç çapraz gri çizgi bulunan beyaz daire işareti neyi bildirir?",
        options: [
          "Hız sınırlaması başlangıcı",
          "Bütün yasaklama ve kısıtlamaların sonu",
          "Geçme yasağı başlangıcı",
          "Dönüş yasağı",
        ],
        correctIndex: 1,
        explanation:
          "Bu işaret, o noktaya kadar geçerli olan tüm yasaklama ve kısıtlamaların sona erdiğini bildirir.",
        difficulty: "zor",
        visualId: "tumYasaklarSonu",
      },
      {
        id: "isaretler-15",
        text: "Mavi zemin üzerinde beyaz sağa dönen ok bulunan daire işareti neyi bildirir?",
        options: [
          "Sağa dönülmez",
          "Sağa tehlikeli viraj",
          "Sağa mecburi yön",
          "Sağdan ana yola giriş",
        ],
        correctIndex: 2,
        explanation:
          "Mavi zeminli, beyaz ok işaretli bu levha, sürücünün mecburen sağa doğru ilerlemesi gerektiğini bildirir.",
        difficulty: "kolay",
        visualId: "sagaMecburiYon",
      },
      {
        id: "isaretler-16",
        text: "Mavi zemin üzerinde bisiklet sembolü bulunan daire işareti neyi bildirir?",
        options: [
          "Bisiklet giremez",
          "Bisiklet geçebilir (uyarı)",
          "Bisiklet kiralama noktası",
          "Mecburi bisiklet yolu",
        ],
        correctIndex: 3,
        explanation:
          "Bu işaret, o yol kesiminin bisikletliler tarafından mecburen kullanılması gereken bir bisiklet yolu olduğunu bildirir.",
        difficulty: "orta",
        visualId: "mecburiBisikletYolu",
      },
      {
        id: "isaretler-17",
        text: "Mavi kare zemin üzerinde beyaz yaya figürü bulunan işaret neyi bildirir?",
        options: [
          "Yaya geçidi olduğunu bilgi olarak bildirir",
          "Yaya giremez",
          "Yaya bölgesi başlangıcı",
          "Okul geçidi",
        ],
        correctIndex: 0,
        explanation:
          "Bu mavi bilgi işareti, yaklaşılan yerde bir yaya geçidi bulunduğunu bilgi amaçlı bildirir (üçgen uyarı işaretinden farklı olarak yasal bir bilgilendirmedir).",
        difficulty: "orta",
        visualId: "bilgiYayaGecidi",
      },
      {
        id: "isaretler-18",
        text: "Mavi kare zemin üzerinde beyaz 'H' harfine benzer artı işareti bulunan levha neyi bildirir?",
        options: [
          "İlk yardım istasyonu",
          "Hastane",
          "Eczane",
          "Telefon",
        ],
        correctIndex: 1,
        explanation:
          "Bu bilgi işareti, yakında bir hastane bulunduğunu ve gerektiğinde bu yöne yönlenilebileceğini bildirir.",
        difficulty: "kolay",
        visualId: "hastane",
      },
      {
        id: "isaretler-19",
        text: "Mavi kare zemin üzerinde yol ve tünel benzeri sembol bulunan levha neyi bildirir?",
        options: [
          "Tünel",
          "Motorlu taşıt yolu başlangıcı",
          "Otoyol başlangıcı",
          "Bölünmüş yol öncesi",
        ],
        correctIndex: 2,
        explanation:
          "Bu bilgi işareti, aracın bir otoyola girmek üzere olduğunu bildirir; otoyollarda farklı hız ve kullanım kuralları geçerlidir.",
        difficulty: "orta",
        visualId: "otoyolBaslangic",
      },
      {
        id: "isaretler-20",
        text: "Mavi kare zemin üzerinde beyaz bir dikdörtgen ve iki daire (tekerlek benzeri) bulunan levha neyi bildirir?",
        options: [
          "Otogar",
          "Park yeri",
          "Servis alanı",
          "Durak",
        ],
        correctIndex: 3,
        explanation:
          "Bu bilgi işareti, toplu taşıma araçlarının yolcu bindirip indirdiği durak noktasını bildirir.",
        difficulty: "kolay",
        visualId: "durak",
      },
      {
        id: "isaretler-21",
        text: "Mavi dikdörtgen zemin üzerinde tek yönü gösteren ok bulunan levha neyi bildirir?",
        options: [
          "Tek yönlü yol",
          "Mecburi yön",
          "Şerit sayısı",
          "Otoyol çıkışı",
        ],
        correctIndex: 0,
        explanation:
          "Bu bilgi işareti, bulunulan yolun sadece ok yönünde tek yönlü olarak kullanılabildiğini bildirir.",
        difficulty: "kolay",
        visualId: "tekYonluYol",
      },
      {
        id: "isaretler-22",
        text: "Mavi kare zemin üzerinde beyaz 'P' harfi bulunan işaret neyi bildirir?",
        options: [
          "Park etmek yasaktır",
          "Park yeri",
          "Duraklamak yasaktır",
          "Polis noktası",
        ],
        correctIndex: 1,
        explanation:
          "Mavi zeminli 'P' harfi, o bölgede araç park edilebilecek bir park yeri olduğunu bildiren bilgi işaretidir.",
        difficulty: "kolay",
        visualId: "parkYeri",
      },
      {
        id: "isaretler-23",
        text: "Üzerinde 'P' harfi ve çapraz kırmızı çizgi bulunan mavi daire işareti neyi bildirir?",
        options: [
          "Park yeri (bilgi)",
          "Duraklamak ve park etmek yasaktır",
          "Park etmek yasaktır",
          "Sadece duraklama serbest",
        ],
        correctIndex: 2,
        explanation:
          "Mavi zemin üzerinde 'P' harfi ve tek çapraz kırmızı çizgi, o bölgede park etmenin yasak olduğunu, ancak kısa süreli duraklamanın serbest olduğunu bildirir.",
        difficulty: "zor",
        visualId: "parkYasak",
      },
      {
        id: "isaretler-24",
        text: "Üzerinde 'P' harfi ve çift çapraz kırmızı çizgi bulunan mavi daire işareti neyi bildirir?",
        options: [
          "Sadece park etmek yasaktır",
          "Sadece duraklamak yasaktır",
          "Park yeri bilgi işareti",
          "Duraklamak ve park etmek her ikisi de yasaktır",
        ],
        correctIndex: 3,
        explanation:
          "Çift çapraz çizgi, o bölgede hem duraklamanın hem de park etmenin tamamen yasak olduğunu bildirir.",
        difficulty: "zor",
        visualId: "duraklamaParkYasak",
      },
    ],
  };

export default category;
