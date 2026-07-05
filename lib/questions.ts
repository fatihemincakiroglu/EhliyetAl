export type Question = {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  questions: Question[];
};

export const categories: Category[] = [
  {
    slug: "trafik",
    name: "Trafik ve Çevre Bilgisi",
    shortName: "Trafik",
    description: "Trafik işaretleri, kurallar ve yol öncelikleri",
    questions: [
      {
        id: "trafik-1",
        text: "Aşağıdakilerden hangisi \"Dur\" işaretinin bulunduğu yerde sürücünün yapması gereken davranışlardandır?",
        options: [
          "Yavaşlayıp yoluna devam etmek",
          "Tamamen durup, geçiş hakkı olan yolu kontrol ederek devam etmek",
          "Sadece gece durmak",
          "Öndeki araç geçtikten hemen sonra hızlanmak",
        ],
        correctIndex: 1,
        explanation:
          "Dur işareti bulunan yerde araç tamamen durdurulur, geçiş önceliği olan yol kontrol edilir ve güvenli olduğunda harekete geçilir.",
      },
      {
        id: "trafik-2",
        text: "Şehir içi karayolunda, aksine bir işaret yoksa azami hız sınırı otomobiller için kaç km/saattir?",
        options: ["50", "70", "90", "110"],
        correctIndex: 0,
        explanation:
          "Yerleşim yeri içinde aksi işaretlenmediği sürece otomobiller için azami hız 50 km/saattir.",
      },
      {
        id: "trafik-3",
        text: "Kavşaklarda geçiş önceliği ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
          "Büyük araçlar her zaman önceliklidir",
          "Işıklı ve işaretli kavşaklarda trafik işaretleri geçerlidir",
          "Sağdan gelen araç her zaman önceliklidir",
          "Hızlı giden araç önceliklidir",
        ],
        correctIndex: 1,
        explanation:
          "Kavşaklarda öncelik kuralı olarak önce trafik ışıkları ve işaret levhaları dikkate alınır; işaret yoksa sağdan gelen aracın geçiş önceliği vardır.",
      },
      {
        id: "trafik-4",
        text: "Sürücülerin yaya geçidine yaklaşırken davranışı nasıl olmalıdır?",
        options: [
          "Hızını artırıp geçmeli",
          "Yayaların geçişini gözeterek yavaşlamalı, gerekirse durmalı",
          "Korna çalarak yayaları uyarıp geçmeli",
          "Sadece kırmızı ışıkta durmalı",
        ],
        correctIndex: 1,
        explanation:
          "Yaya geçidine yaklaşan sürücü yavaşlamalı, yaya varsa geçişini tamamlamasını beklemelidir.",
      },
      {
        id: "trafik-5",
        text: "Aşağıdakilerden hangisi trafik kazalarının en önemli nedenlerinden biridir?",
        options: [
          "Aracın rengi",
          "Sürücü hataları ve kurallara uyulmaması",
          "Yolun geniş olması",
          "Aracın yeni model olması",
        ],
        correctIndex: 1,
        explanation:
          "Trafik kazalarının büyük çoğunluğu sürücü hatalarından, hız ihlallerinden ve kurallara uyulmamasından kaynaklanır.",
      },
    ],
  },
  {
    slug: "motor",
    name: "Motor ve Araç Bilgisi",
    shortName: "Motor",
    description: "Araç mekaniği, bakım ve teknik bilgiler",
    questions: [
      {
        id: "motor-1",
        text: "Motor yağının başlıca görevi nedir?",
        options: [
          "Yakıtı temizlemek",
          "Motor parçaları arasındaki sürtünmeyi azaltmak",
          "Aracı hızlandırmak",
          "Lastiklerin ömrünü uzatmak",
        ],
        correctIndex: 1,
        explanation:
          "Motor yağı, hareketli parçalar arasında sürtünmeyi azaltarak aşınmayı önler ve motoru soğutmaya yardımcı olur.",
      },
      {
        id: "motor-2",
        text: "Fren sisteminde hidrolik yağın azalması hangi soruna yol açabilir?",
        options: [
          "Aracın daha az yakıt tüketmesi",
          "Fren pedalının boşa basması ve fren mesafesinin uzaması",
          "Direksiyonun ağırlaşması",
          "Farların sönmesi",
        ],
        correctIndex: 1,
        explanation:
          "Hidrolik yağ eksikliği fren basıncını düşürür, pedal boşa basar ve fren mesafesi uzayarak güvenlik riski oluşur.",
      },
      {
        id: "motor-3",
        text: "Lastik hava basıncının gerekenden düşük olması neye neden olur?",
        options: [
          "Yakıt tüketiminin azalmasına",
          "Yol tutuşunun bozulmasına ve yakıt tüketiminin artmasına",
          "Frenleme mesafesinin kısalmasına",
          "Lastik ömrünün uzamasına",
        ],
        correctIndex: 1,
        explanation:
          "Düşük hava basıncı yol tutuşunu olumsuz etkiler, yakıt tüketimini artırır ve lastiğin erken aşınmasına yol açar.",
      },
      {
        id: "motor-4",
        text: "Aracın soğutma suyu eksikliği devam ederse ne olabilir?",
        options: [
          "Motor performansı artar",
          "Motor aşırı ısınarak ciddi arızalara yol açabilir",
          "Klima daha iyi çalışır",
          "Yakıt tüketimi azalır",
        ],
        correctIndex: 1,
        explanation:
          "Soğutma suyu eksikliği motorun aşırı ısınmasına, hatta motorun kilitlenmesine kadar giden ciddi arızalara neden olabilir.",
      },
      {
        id: "motor-5",
        text: "Aküyle ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
          "Akü sadece farları çalıştırır",
          "Akü, motor çalışırken elektrik sistemine ve marş motoruna enerji sağlar",
          "Akünün bakımı gerekmez",
          "Akü sadece yazın kullanılır",
        ],
        correctIndex: 1,
        explanation:
          "Akü, aracın elektrik sistemine güç sağlar ve özellikle motorun ilk çalıştırılmasında marş motorunu besler.",
      },
    ],
  },
  {
    slug: "ilkyardim",
    name: "İlk Yardım",
    shortName: "İlk Yardım",
    description: "Kaza sonrası müdahale ve temel yaşam desteği",
    questions: [
      {
        id: "ilkyardim-1",
        text: "Trafik kazası sonrası ilk yardımda öncelik nedir?",
        options: [
          "Yaralıyı hemen araçtan çıkarmak",
          "Olay yerinin güvenliğini sağlamak ve yardım çağırmak",
          "Yaralıya su içirmek",
          "Kaza yapan araçları hemen çekmek",
        ],
        correctIndex: 1,
        explanation:
          "İlk yardımda öncelik, olay yerini güvenli hale getirmek ve gerekli sağlık ekiplerini haberdar etmektir.",
      },
      {
        id: "ilkyardim-2",
        text: "Bilinci kapalı ama solunumu olan bir yaralıya hangi pozisyon verilmelidir?",
        options: [
          "Yüzüstü pozisyon",
          "Koma (yan yatış) pozisyonu",
          "Baş aşağı pozisyon",
          "Oturur pozisyon",
        ],
        correctIndex: 1,
        explanation:
          "Bilinci kapalı ama solunumu olan kişiye, hava yolunun açık kalmasını sağlamak için koma pozisyonu verilir.",
      },
      {
        id: "ilkyardim-3",
        text: "Kanamalı bir yarada ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Yara üzerine doğrudan ve temiz bir bezle bastırmak",
          "Yarayı suyla yıkayıp açıkta bırakmak",
          "Kanamayı görmezden gelmek",
          "Yaraya toz veya krem sürmek",
        ],
        correctIndex: 0,
        explanation:
          "Kanamayı durdurmak için yara üzerine temiz bir bezle doğrudan ve sürekli baskı uygulanmalıdır.",
      },
      {
        id: "ilkyardim-4",
        text: "Kalp ve solunumu durmuş bir kişiye yapılan dış kalp masajı hangi amaçla uygulanır?",
        options: [
          "Kişiyi uyandırmak için",
          "Beyne ve hayati organlara kan akışını sağlamak için",
          "Ağrıyı azaltmak için",
          "Nabzı yükseltmek için",
        ],
        correctIndex: 1,
        explanation:
          "Dış kalp masajı, kalbin durduğu durumlarda beyne ve diğer hayati organlara kan akışını sürdürmeyi amaçlar.",
      },
      {
        id: "ilkyardim-5",
        text: "Kırık şüphesi olan bir bölgeye ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Bölge hareket ettirilerek kontrol edilmelidir",
          "Bölge sabitlenerek hareketsiz hale getirilmelidir",
          "Bölgeye masaj yapılmalıdır",
          "Bölge sıcak suyla ovulmalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Kırık şüphesinde bölge oynatılmadan, uygun bir malzemeyle sabitlenerek hareketsiz hale getirilmelidir.",
      },
    ],
  },
  {
    slug: "cevre",
    name: "Trafik Adabı ve Çevre Bilinci",
    shortName: "Çevre",
    description: "Sürücü davranışları, çevre bilinci ve sorumluluk",
    questions: [
      {
        id: "cevre-1",
        text: "Egzoz gazı emisyonlarının çevreye etkisi ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
          "Hiçbir etkisi yoktur",
          "Hava kirliliğine ve çevre kirliliğine katkıda bulunur",
          "Sadece gürültü kirliliğine neden olur",
          "Sadece yakıt tüketimini etkiler",
        ],
        correctIndex: 1,
        explanation:
          "Egzoz gazları hava kirliliğine katkıda bulunur, bu nedenle araçların düzenli bakımı çevre açısından önemlidir.",
      },
      {
        id: "cevre-2",
        text: "Trafikte diğer sürücülere karşı saygılı davranış aşağıdakilerden hangisidir?",
        options: [
          "Sürekli korna çalmak",
          "Şerit değiştirirken sinyal vermek ve önceliğe saygı göstermek",
          "Hızlı ve ani manevralar yapmak",
          "Uzun far yakarak diğer sürücüleri rahatsız etmek",
        ],
        correctIndex: 1,
        explanation:
          "Sinyal vermek ve önceliğe saygı göstermek, trafik adabının ve güvenli sürüşün temel gereklerindendir.",
      },
      {
        id: "cevre-3",
        text: "Aracın gereksiz yere rölantide çalıştırılmasının çevreye etkisi nedir?",
        options: [
          "Çevreye olumlu katkı sağlar",
          "Gereksiz yakıt tüketimi ve emisyona neden olur",
          "Motor ömrünü uzatır",
          "Hiçbir etkisi yoktur",
        ],
        correctIndex: 1,
        explanation:
          "Gereksiz rölanti çalıştırma, yakıtın boşa harcanmasına ve gereksiz emisyon oluşumuna yol açar.",
      },
      {
        id: "cevre-4",
        text: "Sürücülerin yayalara ve engelli bireylere karşı davranışı nasıl olmalıdır?",
        options: [
          "Önceliklerini görmezden gelmek",
          "Öncelik tanımak ve güvenli geçişlerini sağlamak",
          "Korna çalarak uyarmak",
          "Hızlanarak geçmek",
        ],
        correctIndex: 1,
        explanation:
          "Yayalara, özellikle engelli ve yaşlı bireylere öncelik tanımak trafik adabının önemli bir parçasıdır.",
      },
      {
        id: "cevre-5",
        text: "Atık motor yağı gibi zararlı maddeler nasıl bertaraf edilmelidir?",
        options: [
          "Toprağa veya suya dökülerek",
          "Yetkili toplama merkezlerine teslim edilerek",
          "Çöp kutusuna atılarak",
          "Yakılarak",
        ],
        correctIndex: 1,
        explanation:
          "Atık motor yağı gibi zararlı maddeler çevreye zarar vermemesi için yetkili toplama merkezlerine teslim edilmelidir.",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
