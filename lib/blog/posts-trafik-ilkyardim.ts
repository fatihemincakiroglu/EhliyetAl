import type { BlogPost } from "./types";

export const trafikIlkyardimPosts: BlogPost[] = [
  {
    slug: "trafik-isaretleri-akilda-kalici-anlatim",
    title: "Trafik İşaretleri: Akılda Kalıcı Anlatım ve Ayırt Etme Yöntemleri",
    description:
      "Trafik işaret gruplarını renk ve şekil mantığıyla ayırt etme; tehlike, yasak ve bilgi işaretlerini kalıcı biçimde öğrenme rehberi.",
    category: "Trafik ve İlk Yardım",
    icon: "Signpost",
    readingMinutes: 9,
    intro:
      "İşaretleri tek tek ezberlemek yerine renk ve şekil mantığını öğren; yüzlerce işareti birkaç kurala indir.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Trafik işaretleri, ilk bakışta ezberlenmesi imkânsız gibi görünen kalabalık bir grup gibi durur. Oysa işaretler rastgele tasarlanmamıştır; renk ve şekilleri bir mantığa göre seçilmiştir. Bu mantığı bir kez kavradığında, hiç görmediğin bir işaretin bile ne anlama geldiğini büyük olasılıkla tahmin edebilirsin.",
      },
      { type: "h2", text: "Önce şekle ve renge bak" },
      {
        type: "p",
        text: "İşaretin ne söylediğini anlamak için çoğu zaman detayına bakmana gerek bile yoktur; şekli ve rengi sana grubunu söyler. Grubu bildiğinde işaretin 'niyeti' netleşir.",
      },
      {
        type: "list",
        items: [
          "Üçgen (genelde kırmızı çerçeveli, ucu yukarı): Tehlike uyarı işaretleri. 'Dikkat et, önünde şu var' der. Örnek: kaygan yol, okul geçidi, viraj.",
          "Daire, kırmızı çerçeveli: Yasaklama ve kısıtlama. 'Bunu yapamazsın' der. Örnek: girişi olmayan yol, park yasağı, hız sınırı.",
          "Daire, mavi zemin: Mecburiyet (emir). 'Bunu yapmak zorundasın' der. Örnek: mecburi yön, mecburi asgari hız.",
          "Kare/dikdörtgen, mavi zemin: Bilgi işaretleri. 'Şurada şu var' der. Örnek: park yeri, hastane, otoyol bilgisi.",
          "Ters üçgen (ucu aşağı) ve sekizgen: Özel iki işaret. Ters üçgen 'yol ver', sekizgen (DUR) 'mutlaka dur' demektir.",
        ],
      },
      {
        type: "tip",
        text: "Kısaca: üçgen uyarır, kırmızı daire yasaklar, mavi daire emreder, mavi kare bilgilendirir. Bu dört cümle işaretlerin büyük kısmını sınıflandırmana yeter.",
      },
      { type: "h2", text: "Karıştırılan işaret çiftleri" },
      {
        type: "p",
        text: "Sınavda en çok kafa karıştıran şey, birbirine benzeyen işaretlerdir. Bunları yan yana çalışmak, farkı zihnine kazır.",
      },
      {
        type: "list",
        items: [
          "'Yol ver' (ters üçgen) ile 'Dur' (sekizgen): İkisi de öncelik verdirir ama 'Dur' mutlaka tam duruş ister, 'yol ver' uygunsa geçmene izin verir.",
          "'Girişi olmayan yol' (kırmızı zemin, beyaz yatay çizgi) ile 'Taşıt trafiğine kapalı yol' (kırmızı çerçeveli boş daire): İlki tek yönlü yolun ters ağzıdır, ikincisi hiçbir taşıtın giremeyeceğini söyler.",
          "Tehlikeli viraj uyarısı (üçgen) ile mecburi yön (mavi daire): Biri 'dikkat, viraj var' der, diğeri 'bu yöne döneceksin' der.",
        ],
      },
      { type: "h2", text: "Kalıcı öğrenmenin yolu" },
      {
        type: "p",
        text: "İşaretleri liste hâlinde ezberlemek yerine, onları gerçek yol deneyiminle ilişkilendir. Sokakta yürürken veya yolcu koltuğunda giderken gördüğün işaretleri 'bu hangi grup, ne diyor?' diye içinden yanıtla. Bu, pasif ezberi aktif tanımaya çevirir ve sınavda işaret görselini anında sınıflandırmanı sağlar.",
      },
      {
        type: "warning",
        text: "İşaretin sadece rengine güvenip şeklini atlarsan yanılabilirsin. Örneğin hem uyarı hem yasak işaretlerinde kırmızı vardır; ayrımı yapan şey şekildir (üçgen mi daire mi).",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kaç trafik işareti ezberlemem gerekiyor?",
            a: "Tek tek saymak yerine grup mantığını öğrenmek daha verimli. Dört-beş grup kuralını kavradığında yüzlerce işareti sınıflandırabilirsin.",
          },
          {
            q: "İşaretleri en hızlı nasıl öğrenirim?",
            a: "Renk-şekil mantığıyla gruplayarak ve gerçek hayatta gördüklerini zihninde sınıflandırarak. Ardından soru çözerek pekiştir.",
          },
        ],
      },
    ],
    related: [
      "trafik-kurallarini-ezberlemeden-ogrenmenin-yollari",
      "en-cok-yanilinan-20-soru",
      "ilkyardim-sikca-sorulan-sorular",
    ],
  },
  {
    slug: "ilkyardim-sikca-sorulan-sorular",
    title: "İlk Yardım Dersinde Sıkça Sorulan Sorular ve Cevapları",
    description:
      "Ehliyet sınavının ilk yardım bölümünde en sık sorulan konular; temel yaşam desteği, kanama, kırık ve pozisyonlar hakkında net cevaplar.",
    category: "Trafik ve İlk Yardım",
    icon: "HeartPulse",
    readingMinutes: 10,
    intro:
      "İlk yardım en çok detay içeren ders. En sık sorulan konuları net, akılda kalıcı cevaplarla topladık.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "İlk yardım, ehliyet sınavının hem hayat kurtaran hem de en çok detay barındıran dersidir. Sıralamalar, sayılar ve kavram ayrımları burada yoğunlaşır. Aşağıda en sık sorulan konuları soru-cevap mantığıyla topladık; her birini bir senaryo gibi zihninde canlandırırsan kalıcılığı artar.",
      },
      { type: "h2", text: "Temel kavramlar ve sıralama" },
      {
        type: "faq",
        items: [
          {
            q: "İlk yardımın öncelikli amacı nedir?",
            a: "Yaşamı korumak, durumun kötüleşmesini önlemek ve iyileşmeyi kolaylaştırmaktır. 'Tedavi etmek' ilk yardımın amacı değildir; tedavi sağlık personelinin işidir.",
          },
          {
            q: "Olay yerinde ilk ne yapılır?",
            a: "Önce olay yeri güvenliği sağlanır (kendini ve kazazedeyi ek tehlikeden korumak), sonra 112 aranır ve ardından ilk yardım uygulanır. Sıralama sık sorulur.",
          },
          {
            q: "Bilinç nasıl değerlendirilir?",
            a: "Kazazedeye sözlü uyaran verilerek ve hafifçe omzuna dokunularak 'iyi misiniz?' diye sorulur; verdiği tepki bilinç durumunu gösterir.",
          },
        ],
      },
      { type: "h2", text: "Temel yaşam desteği (TYD)" },
      {
        type: "faq",
        items: [
          {
            q: "Yetişkinde kalp masajı ve suni solunum oranı kaçtır?",
            a: "30 kalp masajı + 2 suni solunum. Bu oran bir tur oluşturur ve tekrarlanır.",
          },
          {
            q: "Solunum kaç saniye kontrol edilir?",
            a: "Bak-dinle-hisset yöntemiyle en fazla 10 saniye. 20 veya 30 saniye diyen şıklar tuzaktır.",
          },
          {
            q: "Hava yolunu açmak için hangi pozisyon verilir?",
            a: "Boyun travması yoksa baş geri-çene yukarı pozisyonu. Bu, dilin geriye kaçıp hava yolunu tıkamasını önler.",
          },
        ],
      },
      { type: "h2", text: "Kanamalar" },
      {
        type: "list",
        items: [
          "Atardamar kanaması: açık kırmızı, kalp atımıyla uyumlu, fışkırır tarzda ve kesik kesik akar. En tehlikelisidir.",
          "Toplardamar kanaması: koyu kırmızı, sürekli ve sızıntı şeklinde akar.",
          "Dış kanamada önce temiz bezle basınç uygulanır. Durmuyorsa basınç noktasına baskı yapılır. Turnike son çaredir ve genellikle uzuv kopmasında uygulanır.",
          "Burun kanamasında baş hafif ÖNE eğilir, burun kanatları 5 dakika sıkılır. Baş geriye itilmez.",
        ],
      },
      {
        type: "warning",
        text: "Turnike ilk hamle değildir. Sınavda 'kanamada ilk ne yapılır?' sorusunun cevabı basınç uygulamaktır; turnike ancak basınçla durmayan ciddi durumların adımıdır.",
      },
      { type: "h2", text: "Kırık, çıkık, burkulma ve pozisyonlar" },
      {
        type: "list",
        items: [
          "Kırık/çıkık şüphesinde bölge gereksiz hareket ettirilmez; olduğu gibi sabitlenir ve tıbbi yardım beklenir.",
          "Bilinci kapalı ama solunumu olan kazazedeye koma (yarı yüzükoyun-yan) pozisyonu verilir; sırtüstü bırakılmaz.",
          "Şok pozisyonunda kazazede sırtüstü yatırılır, ayaklar hafif yukarı kaldırılır.",
          "Delici karın yaralanmasında dışarı çıkan organ içeri sokulmaz; delici göğüs/karın yarasında batan cisim çıkarılmaz.",
        ],
      },
      {
        type: "tip",
        text: "İlk yardımı 'ezberlenecek liste' değil, 'başımdan geçen bir senaryo' gibi çalış: karşımda biri var, önce ne yaparım, sonra ne yaparım? Bu yöntem sıralama sorularında hata payını ciddi biçimde düşürür.",
      },
    ],
    related: [
      "en-cok-yanilinan-20-soru",
      "trafik-isaretleri-akilda-kalici-anlatim",
      "ehliyet-sinavini-ilk-denemede-gecmenin-10-altin-kurali",
    ],
  },
  {
    slug: "trafik-kurallarini-ezberlemeden-ogrenmenin-yollari",
    title: "Trafik Kurallarını Ezberlemeden Öğrenmenin Yolları",
    description:
      "Trafik kurallarını ezberlemek yerine mantığını kavrayarak kalıcı öğrenme yöntemleri; takip mesafesi, geçiş hakkı ve hız kuralları örnekleriyle.",
    category: "Trafik ve İlk Yardım",
    icon: "Lightbulb",
    readingMinutes: 8,
    intro:
      "Kuralları ezberlemek yerine 'neden böyle?' diye sor. Mantığını anladığın kuralı bir daha unutmazsın.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Trafik kuralları, ilk bakışta akılda tutulması zor bir sayılar ve istisnalar yığını gibi görünür. Ama neredeyse her kuralın altında tek bir ortak amaç yatar: güvenlik. Bu amacı merkeze aldığında, kuralları ezberlemek yerine 'anlamak' mümkün hâle gelir ve anlaşılan bilgi çok daha kalıcıdır.",
      },
      { type: "h2", text: "Her kuralın altındaki 'neden'i ara" },
      {
        type: "p",
        text: "Bir kuralı öğrenirken 'bu neden var?' diye sormak, onu hafızana kazımanın en güçlü yoludur. Birkaç örnek üzerinden görelim.",
      },
      {
        type: "h3",
        text: "Takip mesafesi neden hızın yarısı kadar metre?",
      },
      {
        type: "p",
        text: "Çünkü hız arttıkça hem tepki mesafen hem fren mesafen uzar. Öndeki araç aniden durursa, ona çarpmadan durabilmen için yeterli boşluğa ihtiyacın vardır. 'Hızın yarısı kadar metre' bu güvenli boşluğun pratik bir ölçüsüdür. Bu mantığı kurduğunda 90 için 45, 100 için 50 metreyi ayrıca ezberlemene gerek kalmaz.",
      },
      {
        type: "h3",
        text: "Kontrolsüz kavşakta neden sağdaki geçer?",
      },
      {
        type: "p",
        text: "Işık ve levha yoksa bir öncelik kuralına ihtiyaç vardır; herkes aynı anda geçmeye kalkarsa kaza olur. 'Sağdaki önce geçer' kuralı, herkesin üzerinde anlaştığı basit ve öngörülebilir bir düzendir. Amaç adalet değil, kaosun önüne geçmektir.",
      },
      {
        type: "h3",
        text: "Kavşakta ve tepe üstünde neden geçme yasak?",
      },
      {
        type: "p",
        text: "Çünkü buralarda görüşün kısıtlıdır. Karşıdan geleni göremeden sollamaya kalkmak, doğrudan kafa kafaya çarpışma riski demektir. Kural 'keyfi' değil, göremediğin bir tehlikeye karşı seni koruyor.",
      },
      { type: "h2", text: "Kuralları hikâyeleştir" },
      {
        type: "p",
        text: "Soyut bir kuralı, zihninde küçük bir sahneye çevir. 'Yağmurlu havada hız düşürülür' kuralını, ıslak yolda frene bastığında kayan bir araç olarak canlandır. Görsel ve olaylı hâle getirilen bilgi, kuru bir cümleye göre çok daha kolay hatırlanır.",
      },
      {
        type: "tip",
        text: "Yolcu koltuğunda giderken sürücünün her hareketini içinden gerekçelendir: 'şimdi neden yavaşladı, neden sinyal verdi, neden bu şeride geçti?' Bu alışkanlık, kuralları teoriden gerçeğe taşır.",
      },
      { type: "h2", text: "Soru çözerek pekiştir" },
      {
        type: "p",
        text: "Mantığını anladığın kuralı soru çözerek test et. Yanlış yaptığın her soru, mantığında bir boşluk olduğunu gösterir; o boşluğu kapat. Böylece ezber değil, gerçek bir anlama üzerine inşa edersin ve sınavda sorunun cümlesi değişse bile doğru cevabı bulursun.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Sayı içeren kuralları da ezbersiz öğrenebilir miyim?",
            a: "Çoğunu evet. Örneğin takip mesafesini 'hızın yarısı' mantığıyla tek bir kurala indirgeyebilirsin. Bazı sabit değerler için yine de kısa tekrar gerekir ama mantık, tekrar ihtiyacını azaltır.",
          },
          {
            q: "Ezber mi anlama mı daha hızlı?",
            a: "Kısa vadede ezber hızlı görünür ama çabuk unutulur. Anlama biraz daha zaman alır fakat kalıcıdır ve farklı sorulan sorularda seni yanıltmaz.",
          },
        ],
      },
    ],
    related: [
      "trafik-isaretleri-akilda-kalici-anlatim",
      "en-cok-yanilinan-20-soru",
      "ehliyet-sinavini-ilk-denemede-gecmenin-10-altin-kurali",
    ],
  },
];
