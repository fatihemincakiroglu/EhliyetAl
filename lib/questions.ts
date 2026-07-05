export type Difficulty = "kolay" | "orta" | "zor";

export type Question = {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
  visualId?: string;
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
        text: "Kırmızı ışıkta bekleyen bir sürücü, ışık sarıya döndüğünde ne yapmalıdır?",
        options: [
          "Hemen hızlanıp geçmelidir",
          "Yeşile dönene kadar beklemeye devam etmelidir",
          "Kavşağı kontrol ederek yavaşça ilerlemelidir",
          "Korna çalarak diğer sürücüleri uyarmalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Sarı ışık, kırmızıdan yeşile geçişin hazırlığıdır; araç hâlâ durmuş durumdayken sürücü yeşil yanana kadar beklemelidir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-2",
        text: "Yaya geçidine yaklaşan bir sürücünün davranışı nasıl olmalıdır?",
        options: [
          "Hızını artırarak geçitten önce geçmelidir",
          "Yavaşlamalı ve geçmek isteyen yaya varsa durmalıdır",
          "Sadece okul bölgesindeyse yavaşlamalıdır",
          "Yayalar geçidin dışındaysa dikkate almamalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Yaya geçitlerine yaklaşırken her zaman yavaşlanır ve geçiş yapmak isteyen yayalara öncelik verilir.",
        difficulty: "kolay",
        visualId: "yayaGecidi",
      },
      {
        id: "trafik-3",
        text: "Karşı yönden araç geliyorsa sürücünün sollama yapması hakkında ne söylenebilir?",
        options: [
          "Hız yeterince yüksekse sollama yapılabilir",
          "Karşıdan araç geliyorsa sollama yapılmamalıdır",
          "Sadece gündüz saatlerinde sollama yasaktır",
          "Karşı araç uzaktaysa sorun oluşturmaz",
        ],
        correctIndex: 1,
        explanation:
          "Karşı yönden gelen trafiğin güvenliğini tehlikeye atacak şekilde sollama yapmak yasaktır ve kazalara yol açabilir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-4",
        text: "Emniyet şeridi (banket dışı acil şerit) hangi durumda kullanılabilir?",
        options: [
          "Trafik yoğunluğunda zaman kazanmak için",
          "Sadece arıza veya acil durumlarda",
          "Sürekli olarak hızlı gitmek isteyenler için",
          "Otoyollarda her zaman serbestçe kullanılabilir",
        ],
        correctIndex: 1,
        explanation:
          "Emniyet şeridi yalnızca arıza, kaza veya acil bir durumda kullanılabilir; trafik sıkışıklığını aşmak için kullanılamaz.",
        difficulty: "kolay",
      },
      {
        id: "trafik-5",
        text: "Dönel (göbekli) kavşaklarda geçiş önceliği genellikle kime aittir?",
        options: [
          "Kavşağa yeni giren araca",
          "Kavşak içinde dönmekte olan araca",
          "Sağdan gelen araca",
          "Büyük araçlara",
        ],
        correctIndex: 1,
        explanation:
          "Dönel kavşaklarda öncelik, kavşak içinde hâlihazırda dönmekte olan araçlara aittir; dışarıdan girecek araçlar onlara yol vermelidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-6",
        text: "Bir sürücü sağa dönüş yaparken nasıl bir kavis izlemelidir?",
        options: [
          "Geniş bir kavisle dönmelidir",
          "Dar bir kavisle, sağ şeride yakın dönmelidir",
          "Kavis önemli değildir, hız önemlidir",
          "Karşı şeride taşarak dönmelidir",
        ],
        correctIndex: 1,
        explanation:
          "Sağa dönüşlerde dar bir kavis izlenerek sağ şeride yakın şekilde dönülmesi, karşı şeride taşmayı önler.",
        difficulty: "orta",
      },
      {
        id: "trafik-7",
        text: "Şehirler arası bölünmüş kara yolunda, aksine işaret yoksa otomobiller için azami hız sınırı saatte kaç kilometredir?",
        options: ["70", "90", "110", "130"],
        correctIndex: 2,
        explanation:
          "Bölünmüş şehirler arası kara yollarında otomobiller için azami hız sınırı, aksi işaretlenmedikçe saatte 110 kilometredir.",
        difficulty: "orta",
      },
      {
        id: "trafik-8",
        text: "Bir sürücü şerit değiştirmeden önce ne yapmalıdır?",
        options: [
          "Doğrudan şerit değiştirip sonra sinyal vermelidir",
          "Sinyal vererek gireceği şeritteki araçların güvenle geçişini beklemelidir",
          "Sadece korna çalması yeterlidir",
          "Hız kesmeden hızlıca geçmelidir",
        ],
        correctIndex: 1,
        explanation:
          "Şerit değiştirmeden önce sinyal verilir ve gireceği şeritte seyreden araçların güvenle geçmesi beklenir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-9",
        text: "Takip mesafesi neye göre ayarlanmalıdır?",
        options: [
          "Sadece aracın modeline göre",
          "Hız, hava koşulları ve yol durumuna göre",
          "Öndeki aracın rengine göre",
          "Sadece gündüz-gece ayrımına göre",
        ],
        correctIndex: 1,
        explanation:
          "Güvenli takip mesafesi; aracın hızı, yolun durumu ve hava koşulları dikkate alınarak ayarlanmalıdır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-10",
        text: "'Duraklama' ile 'durma' arasındaki temel fark nedir?",
        options: [
          "İkisi de aynı anlama gelir",
          "Duraklama kısa süreli, araçtan inilmeyen bir mola; durma ise trafik zorunluluğu dışında aracın bırakılmasıdır",
          "Durma sadece gece için geçerlidir",
          "Duraklama yalnızca otoyollarda yasaktır",
        ],
        correctIndex: 1,
        explanation:
          "Duraklama, kısa süreli ve sürücünün araç başında kaldığı bir mola iken; durma, trafik zorunluluğu olmadan aracın bırakılmasıdır.",
        difficulty: "zor",
      },
      {
        id: "trafik-11",
        text: "Okul geçidi levhasını gören bir sürücü nasıl davranmalıdır?",
        options: [
          "Hızını artırarak bölgeden hızla uzaklaşmalıdır",
          "Hızını azaltıp dikkatli sürmelidir",
          "Sadece ders saatlerinde dikkat etmesi yeterlidir",
          "Levhayı görmezden gelebilir",
        ],
        correctIndex: 1,
        explanation:
          "Okul geçidi levhası görüldüğünde çocukların ani hareketlerine karşı hız azaltılmalı ve dikkatli sürülmelidir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-12",
        text: "Trafik kazası sonrası, kazaya karışmayan bir sürücünün olay yerine yaklaşırken önceliği ne olmalıdır?",
        options: [
          "Hemen olay yerinden hızla uzaklaşmak",
          "Fotoğraf çekmek için durmak",
          "Kendi güvenliğini sağlayarak uyarı işareti koymak ve gerekirse yardım çağırmak",
          "Kaza yapanları uyarmadan geçmek",
        ],
        correctIndex: 2,
        explanation:
          "Kaza yerine yaklaşan sürücü önce kendi güvenliğini sağlamalı, gerekiyorsa uyarı reflektörü koymalı ve yardım çağırmalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-13",
        text: "Sürücülerin dönüş yapmadan önce sinyal vermesinin temel amacı nedir?",
        options: [
          "Yasal bir zorunluluk olduğu için, başka amacı yoktur",
          "Diğer sürücüleri ve yayaları niyeti hakkında bilgilendirmek",
          "Aracın elektrik sistemini test etmek",
          "Trafik polislerine saygı göstermek",
        ],
        correctIndex: 1,
        explanation:
          "Sinyal vermek, diğer yol kullanıcılarını sürücünün manevra niyeti konusunda önceden bilgilendirerek kazaları önler.",
        difficulty: "kolay",
      },
      {
        id: "trafik-14",
        text: "İki yönlü, tek şeritli bir yolda öndeki aracı geçmek isteyen sürücü hangi şartı sağlamalıdır?",
        options: [
          "Sadece kendi şeridinde hızlanmalıdır",
          "Karşı yönden gelen trafiği net görebilmeli ve güvenli mesafe olmalıdır",
          "Öndeki araç izin verene kadar beklemelidir",
          "Sadece gündüz saatlerinde geçebilir",
        ],
        correctIndex: 1,
        explanation:
          "Sollama yapılmadan önce karşı yöndeki trafiğin net görülebilmesi ve güvenli bir mesafenin bulunması gerekir.",
        difficulty: "orta",
      },
      {
        id: "trafik-15",
        text: "Bir kavşakta trafik ışıkları arızalı ve hiçbir görevli yoksa sürücüler nasıl davranmalıdır?",
        options: [
          "Kavşağı olduğu gibi geçebilirler",
          "Kavşağa bir 'dur' işareti varmış gibi yaklaşıp dikkatli geçmelidir",
          "Kavşağa girmemeleri gerekir",
          "Sadece büyük araçlar öncelik kazanır",
        ],
        correctIndex: 1,
        explanation:
          "Işıklar çalışmıyorsa sürücüler kavşağa dur işareti varmış gibi yaklaşmalı, diğer araçları kontrol ederek dikkatli geçmelidir.",
        difficulty: "zor",
        visualId: "dur",
      },
      {
        id: "trafik-16",
        text: "Aşağıdaki işaret hangi anlama gelir?",
        options: [
          "Yavaşla, yol ver",
          "Tamamen dur, geçiş hakkı olanları kontrol et",
          "Hız sınırı bitti",
          "Park yapılabilir",
        ],
        correctIndex: 1,
        explanation:
          "Kırmızı sekizgen 'Dur' işaretidir; sürücü aracı tamamen durdurmalı, öncelikli yolu kontrol ettikten sonra güvenliyse hareket etmelidir.",
        difficulty: "kolay",
        visualId: "dur",
      },
      {
        id: "trafik-17",
        text: "Aşağıdaki işaret neyi bildirir?",
        options: [
          "Bisiklet yolu",
          "Girişi olan yol",
          "Taşıt trafiğine kapalı yol / girişi olmayan yol",
          "Otopark",
        ],
        correctIndex: 2,
        explanation:
          "Kırmızı daire içinde beyaz yatay çizgi, o yola araç girişinin yasak olduğunu bildirir.",
        difficulty: "orta",
        visualId: "girisYok",
      },
      {
        id: "trafik-18",
        text: "Şekildeki kavşak senaryosunda, dönel kavşağa aynı anda üç yönden araç yaklaşıyor. Geçiş önceliği nasıl belirlenir?",
        options: [
          "En hızlı giden araç geçer",
          "Kavşak içinde zaten dönmekte olan araçlara öncelik verilir, dışarıdakiler bekler",
          "Sağdan gelen araç her zaman öncelik kazanır",
          "Kim önce korna çalarsa o geçer",
        ],
        correctIndex: 1,
        explanation:
          "Dönel kavşaklarda, kavşağa yeni giren araçlar, kavşak içinde hâlihazırda dönmekte olan araçlara yol vermek zorundadır.",
        difficulty: "zor",
        visualId: "kavsakSenaryo",
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
        text: "Lastiklerin güvenli kullanım için sahip olması gereken asgari diş derinliği ne kadardır?",
        options: ["0,5 mm", "1,6 mm", "3 mm", "5 mm"],
        correctIndex: 1,
        explanation:
          "Türkiye'de lastikler için kabul edilen asgari diş derinliği 1,6 milimetredir; bunun altına inen lastikler yol tutuşunu ciddi biçimde azaltır.",
        difficulty: "orta",
      },
      {
        id: "motor-2",
        text: "Fren hidroliğinin azalması sürücüyü nasıl etkiler?",
        options: [
          "Fren pedalı daha sert basar",
          "Fren mesafesi kısalır",
          "Fren pedalı boşa basar ve fren mesafesi uzar",
          "Hiçbir etkisi yoktur",
        ],
        correctIndex: 2,
        explanation:
          "Fren hidroliği azaldığında sistemdeki basınç düşer, pedal boşa basar ve fren mesafesi güvensiz şekilde uzar.",
        difficulty: "kolay",
      },
      {
        id: "motor-3",
        text: "Triger (zamanlama) kayışının görevi nedir?",
        options: [
          "Motor yağını soğutmak",
          "Krank milinin hareketini eksantrik mile aktararak supapların doğru zamanda açılmasını sağlamak",
          "Aküyü şarj etmek",
          "Yakıt basıncını ayarlamak",
        ],
        correctIndex: 1,
        explanation:
          "Triger kayışı, krank milinden aldığı hareketi eksantrik miline ileterek supapların doğru zamanlamada çalışmasını sağlar.",
        difficulty: "zor",
      },
      {
        id: "motor-4",
        text: "Motor yağının düzenli aralıklarla değiştirilmemesi neye yol açabilir?",
        options: [
          "Motorun daha sessiz çalışmasına",
          "Yakıt tüketiminin azalmasına",
          "Motor parçalarının aşırı aşınmasına ve arızalanmasına",
          "Aracın hızının artmasına",
        ],
        correctIndex: 2,
        explanation:
          "Eskiyen motor yağı, sürtünmeyi azaltma görevini yerine getiremez ve bu da motor parçalarının erken aşınmasına neden olur.",
        difficulty: "kolay",
      },
      {
        id: "motor-5",
        text: "Aküde en sık görülen sorunlardan biri olan kutup başlarındaki beyaz-yeşilimsi birikinti neyin belirtisidir?",
        options: [
          "Akünün tam dolu olduğunun",
          "Sülfatlaşma veya korozyon oluştuğunun",
          "Akünün yeni değiştirildiğinin",
          "Şarj sisteminin mükemmel çalıştığının",
        ],
        correctIndex: 1,
        explanation:
          "Kutup başlarındaki birikinti genellikle sülfatlaşma veya korozyondur; bu, akünün şarj olma ve güç verme kapasitesini azaltır.",
        difficulty: "orta",
      },
      {
        id: "motor-6",
        text: "Şanzıman (vites kutusu) aracın hangi ihtiyacını karşılar?",
        options: [
          "Aracı soğutma ihtiyacını",
          "Motor gücünü farklı hız ve tork oranlarında tekerleklere iletme ihtiyacını",
          "Farların çalışması ihtiyacını",
          "Yakıtın temizlenmesi ihtiyacını",
        ],
        correctIndex: 1,
        explanation:
          "Şanzıman, motorun ürettiği gücü farklı vites oranlarıyla tekerleklere aktararak aracın değişen hız ve yük ihtiyaçlarını karşılar.",
        difficulty: "orta",
      },
      {
        id: "motor-7",
        text: "Debriyaj (kavrama) sisteminin temel görevi nedir?",
        options: [
          "Motoru tamamen durdurmak",
          "Vites değiştirilirken motor gücünü geçici olarak kesmek",
          "Frenleme gücünü artırmak",
          "Yakıt tüketimini ölçmek",
        ],
        correctIndex: 1,
        explanation:
          "Debriyaj, vites değiştirme anında motorun gücünü geçici olarak şanzımandan ayırarak yumuşak bir geçiş sağlar.",
        difficulty: "kolay",
      },
      {
        id: "motor-8",
        text: "Radyatörün araçtaki temel işlevi nedir?",
        options: [
          "Motor yağını temizlemek",
          "Motorun ürettiği ısıyı dış ortama vererek soğutma suyunu soğutmak",
          "Egzoz gazlarını filtrelemek",
          "Aracın elektrik ihtiyacını karşılamak",
        ],
        correctIndex: 1,
        explanation:
          "Radyatör, motoru dolaşan soğutma suyunun taşıdığı ısıyı dış ortama aktararak motorun aşırı ısınmasını önler.",
        difficulty: "kolay",
      },
      {
        id: "motor-9",
        text: "ABS (kilitlenmeyi önleyici fren sistemi) sürücüye ne gibi bir avantaj sağlar?",
        options: [
          "Fren mesafesini her koşulda kısaltır",
          "Ani frenlemede tekerleklerin kilitlenmesini önleyerek direksiyon hâkimiyetinin korunmasını sağlar",
          "Yakıt tüketimini azaltır",
          "Lastik ömrünü uzatır",
        ],
        correctIndex: 1,
        explanation:
          "ABS, ani ve sert frenlemelerde tekerleklerin kilitlenmesini önler; bu sayede sürücü direksiyon hâkimiyetini kaybetmez.",
        difficulty: "orta",
      },
      {
        id: "motor-10",
        text: "Far ayarının doğru yapılmamış olması hangi soruna yol açabilir?",
        options: [
          "Yakıt tüketiminin azalmasına",
          "Karşı yönden gelen sürücülerin gözünü kamaştırmasına veya yetersiz aydınlatmaya",
          "Motor performansının artmasına",
          "Lastik aşınmasının azalmasına",
        ],
        correctIndex: 1,
        explanation:
          "Yanlış ayarlanmış farlar, karşı yönden gelen sürücüleri kamaştırabilir veya sürücünün kendi görüş mesafesini kısaltabilir.",
        difficulty: "kolay",
      },
      {
        id: "motor-11",
        text: "Silecek lastiklerinin değiştirilmesi gerektiğini gösteren belirti hangisidir?",
        options: [
          "Camda çizik bırakması veya iz yapmadan temizlememesi",
          "Sesinin çok sessiz olması",
          "Yeni araçlarda daha hızlı hareket etmesi",
          "Kışın daha yavaş çalışması",
        ],
        correctIndex: 0,
        explanation:
          "Silecek lastiği sertleştiğinde veya yıprandığında camı iz bırakmadan temizleyemez ya da çizik oluşturabilir; bu değişim zamanı gelmiş demektir.",
        difficulty: "kolay",
      },
      {
        id: "motor-12",
        text: "Yakıt filtresinin görevi nedir?",
        options: [
          "Motor yağını soğutmak",
          "Yakıt içindeki kir ve yabancı maddeleri temizleyerek motoru korumak",
          "Egzoz gazını temizlemek",
          "Aracın hızını artırmak",
        ],
        correctIndex: 1,
        explanation:
          "Yakıt filtresi, yakıt içindeki kir ve yabancı parçacıkları tutarak bunların motora ve enjektörlere zarar vermesini engeller.",
        difficulty: "orta",
      },
      {
        id: "motor-13",
        text: "Turbo (turboşarj) sistemi bir motora ne kazandırır?",
        options: [
          "Daha az hava alarak yakıt tasarrufu sağlar",
          "Egzoz gazının enerjisini kullanarak motora daha fazla hava basıp gücünü artırır",
          "Motoru tamamen sessizleştirir",
          "Fren sistemini güçlendirir",
        ],
        correctIndex: 1,
        explanation:
          "Turbo, egzozdan çıkan gazın enerjisini kullanarak motora normalden fazla hava basar; bu da yanmayı ve gücü artırır.",
        difficulty: "zor",
      },
      {
        id: "motor-14",
        text: "Egzoz sisteminin araçtaki temel görevlerinden biri nedir?",
        options: [
          "Yanma sonucu oluşan gazları güvenli şekilde dışarı atmak ve gürültüyü azaltmak",
          "Motor yağını temizlemek",
          "Lastik basıncını ayarlamak",
          "Aküyü şarj etmek",
        ],
        correctIndex: 0,
        explanation:
          "Egzoz sistemi, yanma sonucu oluşan gazları araçtan güvenli şekilde uzaklaştırır ve motor gürültüsünü azaltır.",
        difficulty: "kolay",
      },
      {
        id: "motor-15",
        text: "Kış aylarında motor soğutma suyuna antifriz eklenmesinin temel sebebi nedir?",
        options: [
          "Motorun daha hızlı çalışmasını sağlamak",
          "Soğutma suyunun donmasını önleyerek motor bloğunun çatlamasını engellemek",
          "Yakıt tüketimini artırmak",
          "Egzoz dumanını azaltmak",
        ],
        correctIndex: 1,
        explanation:
          "Antifriz, düşük sıcaklıklarda soğutma suyunun donmasını önler; donma sırasında oluşan genleşme motor bloğunu çatlatabilir.",
        difficulty: "orta",
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
        text: "Bir trafik kazası sonrası ilk yardımcının izlemesi gereken en doğru sıralama hangisidir?",
        options: [
          "Doğrudan yaralıyı kaldırmak, sonra çevreyi kontrol etmek",
          "Önce olay yerinin güvenliğini sağlamak, sonra yaralıyı değerlendirmek",
          "Önce fotoğraf çekmek, sonra yardım çağırmak",
          "Sadece yardım çağırıp beklemek",
        ],
        correctIndex: 1,
        explanation:
          "İlk yardımda öncelik her zaman olay yerinin güvenliğini sağlamaktır; ardından yaralı değerlendirilir ve gerekirse yardım çağrılır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-2",
        text: "Bir kazazedenin bilincinin açık olup olmadığını anlamak için ilk adım nedir?",
        options: [
          "Doğrudan suni solunum yapmak",
          "Sesli seslenmek ve hafifçe omzuna dokunarak tepki almaya çalışmak",
          "Yaralıyı sarsarak uyandırmaya çalışmak",
          "Hemen kalp masajına başlamak",
        ],
        correctIndex: 1,
        explanation:
          "Bilinç kontrolü, kazazedeye sesli seslenerek ve hafifçe dokunarak tepki alınıp alınmadığının değerlendirilmesiyle yapılır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-3",
        text: "Atardamar (arter) kanamasının ayırt edici özelliği nedir?",
        options: [
          "Koyu renkli ve sızıntı şeklinde akması",
          "Açık renkli kanın kalp atımlarıyla uyumlu şekilde fışkırarak akması",
          "Hiç kanamaması",
          "Sadece yüzeysel olması",
        ],
        correctIndex: 1,
        explanation:
          "Atardamar kanamalarında kan açık kırmızı renklidir ve kalp atımlarıyla eş zamanlı olarak fışkırarak akar.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-4",
        text: "Kırık şüphesi olan bir bölgeye ilk yardım uygulanırken nelere dikkat edilmelidir?",
        options: [
          "Bölge düzeltilmeye çalışılmalıdır",
          "Bölge hareket ettirilmeden olduğu gibi sabitlenmelidir",
          "Bölgeye masaj yapılmalıdır",
          "Bölge sıcak suyla yıkanmalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Kırık şüphesinde bölge oynatılmadan, bulunduğu pozisyonda uygun bir malzemeyle sabitlenmelidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-5",
        text: "Birinci derece (hafif) bir yanıkta ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Yanık bölgesine buz doğrudan uygulanmalıdır",
          "Bölge serin (soğuk olmayan) akan suyla soğutulmalıdır",
          "Bölgeye hemen diş macunu sürülmelidir",
          "Bölge sıkıca sarılıp hava almaması sağlanmalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Hafif yanıklarda bölge, doku hasarını azaltmak için birkaç dakika serin akan suyla soğutulmalıdır; buz doğrudan uygulanmamalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-6",
        text: "Solunum yolu tamamen tıkanmış, konuşamayan bir yetişkine hangi ilk yardım uygulaması yapılır?",
        options: [
          "Heimlich manevrası (karına baskı uygulama)",
          "Sırtına hafifçe vurmak yeterlidir",
          "Su içirmeye çalışmak",
          "Bekleyip kendiliğinden geçmesini beklemek",
        ],
        correctIndex: 0,
        explanation:
          "Tam solunum yolu tıkanıklığında Heimlich manevrası uygulanarak karına ani baskılarla yabancı cismin çıkarılması hedeflenir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-7",
        text: "Şokun belirtilerinden biri aşağıdakilerden hangisidir?",
        options: [
          "Cildin sıcak ve kuru olması",
          "Nabzın hızlı ve zayıf olması, ciltin soluk ve soğuk olması",
          "Vücut sıcaklığının belirgin şekilde artması",
          "Solunumun yavaşlayıp derinleşmesi",
        ],
        correctIndex: 1,
        explanation:
          "Şok durumunda nabız hızlı ve zayıflar, cilt soğuk, soluk ve nemli hâle gelir; bu belirtiler acil müdahale gerektirir.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-8",
        text: "Bayılan (kısa süreli bilinç kaybı yaşayan) bir kişiye ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Hemen ayağa kaldırılmalıdır",
          "Sırtüstü yatırılıp bacakları hafifçe yükseltilmelidir",
          "Yüzüne soğuk su dökülmelidir",
          "Ağzından bir şeyler içirilmelidir",
        ],
        correctIndex: 1,
        explanation:
          "Bayılan kişi sırtüstü yatırılıp bacakları hafifçe yükseltilerek beyne kan akışının artması sağlanır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-9",
        text: "Yetişkinlerde uygulanan temel yaşam desteğinde kalp masajı ile suni solunum oranı nasıldır?",
        options: [
          "15 masaj, 1 solunum",
          "30 masaj, 2 solunum",
          "10 masaj, 5 solunum",
          "5 masaj, 5 solunum",
        ],
        correctIndex: 1,
        explanation:
          "Yetişkinlerde temel yaşam desteği, 30 kalp masajı ve ardından 2 yapay solunum şeklinde döngüsel olarak uygulanır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-10",
        text: "Omurga yaralanması şüphesi olan bir kazazedeye yaklaşımda en önemli kural nedir?",
        options: [
          "Hızlıca oturtulmalıdır",
          "Kesinlikle gerekmedikçe hareket ettirilmemelidir",
          "Ayağa kaldırılıp yürütülmelidir",
          "Bacakları çekilerek düzeltilmelidir",
        ],
        correctIndex: 1,
        explanation:
          "Omurga yaralanması şüphesinde kazazede, ek zarar oluşmaması için gerekmedikçe kesinlikle hareket ettirilmemelidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-11",
        text: "Sara nöbeti geçiren bir kişiye ilk yardım sırasında yapılmaması gereken nedir?",
        options: [
          "Çevredeki tehlikeli eşyaları uzaklaştırmak",
          "Kişiyi zorla tutup hareketlerini durdurmaya çalışmak",
          "Nöbet bitene kadar yanında beklemek",
          "Başının altına yumuşak bir şey koymak",
        ],
        correctIndex: 1,
        explanation:
          "Sara nöbeti sırasında kişi zorla tutulmamalı veya hareketleri durdurulmaya çalışılmamalıdır; bu yaralanmaya yol açabilir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-12",
        text: "Göze yabancı cisim kaçtığında ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Göz ovuşturularak cismin çıkması sağlanmalıdır",
          "Göz ovuşturulmadan bol suyla ve nazikçe yıkanmalıdır",
          "Göze doğrudan basınç uygulanmalıdır",
          "Cisim parmakla çıkarılmaya çalışılmalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Göze kaçan yabancı cisimlerde göz asla ovuşturulmamalı; bol temiz suyla nazikçe yıkanarak cismin çıkması sağlanmalıdır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-13",
        text: "112'yi arayan bir kişinin vermesi gereken en öncelikli bilgi nedir?",
        options: [
          "Kendi adı ve soyadı",
          "Olayın yeri ve durumun kısa özeti",
          "Aracın plakası",
          "Hava durumu",
        ],
        correctIndex: 1,
        explanation:
          "Acil çağrıda en önemli bilgi, ekiplerin doğru yere yönlendirilebilmesi için olayın yeri ve kısa bir durum özetidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-14",
        text: "Burun kanaması olan bir kişiye ilk yardım nasıl yapılmalıdır?",
        options: [
          "Baş geriye doğru itilmelidir",
          "Baş hafifçe öne eğilip burun kanatları birkaç dakika sıkılmalıdır",
          "Kişi sırtüstü yatırılmalıdır",
          "Burna doğrudan sıcak su uygulanmalıdır",
        ],
        correctIndex: 1,
        explanation:
          "Burun kanamasında baş hafifçe öne eğilir ve burun kanatları birkaç dakika sıkılarak kanamanın durması beklenir; baş geriye itilirse kan boğaza kaçabilir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-15",
        text: "Bir kazazedede iç kanama şüphesi olduğunda gözlenebilecek genel belirtilerden biri hangisidir?",
        options: [
          "Cildin sıcak ve kızarık olması",
          "Aşırı susuzluk hissi ile birlikte soluk ve nemli cilt",
          "Nabzın yavaş ve güçlü olması",
          "Solunumun yavaşça derinleşmesi",
        ],
        correctIndex: 1,
        explanation:
          "İç kanamada kan kaybına bağlı olarak aşırı susuzluk hissi, soluk ve nemli cilt, hızlı ve zayıf nabız gibi belirtiler görülür.",
        difficulty: "zor",
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
        text: "Trafikte boşta (rölantide) uzun süre çalıştırılan bir motor çevreye nasıl bir etki yapar?",
        options: [
          "Herhangi bir olumsuz etkisi yoktur",
          "Gereksiz yakıt tüketimine ve hava kirliliğine katkıda bulunur",
          "Motorun ömrünü uzatır",
          "Yakıt tasarrufu sağlar",
        ],
        correctIndex: 1,
        explanation:
          "Gereksiz yere rölantide çalıştırılan motor, hem yakıtı boşa harcar hem de gereksiz emisyon salınımına neden olur.",
        difficulty: "kolay",
      },
      {
        id: "cevre-2",
        text: "Katalitik konvertörün araçtaki görevi nedir?",
        options: [
          "Motor yağını temizlemek",
          "Egzoz gazındaki zararlı bileşenleri daha az zararlı hâle dönüştürmek",
          "Aracın hızını artırmak",
          "Lastik ömrünü uzatmak",
        ],
        correctIndex: 1,
        explanation:
          "Katalitik konvertör, egzoz gazındaki zararlı kimyasalları kimyasal reaksiyonlarla daha az zararlı bileşenlere dönüştürerek çevre kirliliğini azaltır.",
        difficulty: "orta",
      },
      {
        id: "cevre-3",
        text: "Egzoz emisyon muayenesinin temel amacı nedir?",
        options: [
          "Aracın hızını ölçmek",
          "Araçların çevreye verdiği zararlı gaz miktarının belirli sınırlar içinde kalmasını sağlamak",
          "Sadece resmi bir formalite olarak yapılmaktadır",
          "Lastik basıncını kontrol etmek",
        ],
        correctIndex: 1,
        explanation:
          "Egzoz emisyon muayenesi, araçların çevreye saldığı zararlı gazların kabul edilebilir sınırlar içinde kalmasını denetler.",
        difficulty: "kolay",
      },
      {
        id: "cevre-4",
        text: "Toplu taşıma araçlarını tercih etmenin çevresel açıdan faydası nedir?",
        options: [
          "Kişi başına düşen egzoz emisyonunu ve trafik yoğunluğunu azaltır",
          "Yakıt tüketimini artırır",
          "Hiçbir çevresel faydası yoktur",
          "Sadece maliyeti düşürür, çevreyle ilgisi yoktur",
        ],
        correctIndex: 0,
        explanation:
          "Toplu taşıma, aynı yolculuğu daha az araçla yaparak kişi başına düşen emisyonu ve trafik yoğunluğunu azaltır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-5",
        text: "Şerit değiştirirken sinyal vermek trafikte hangi değere örnektir?",
        options: [
          "Bencillik",
          "Diğer sürücülere karşı saygı ve öngörülebilirlik",
          "Rekabetçilik",
          "Hız tutkusu",
        ],
        correctIndex: 1,
        explanation:
          "Sinyal vermek, diğer sürücülere niyetinizi önceden bildirerek trafikte saygılı ve öngörülebilir bir davranış sergilemektir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-6",
        text: "Korna kullanımıyla ilgili trafik adabına uygun davranış hangisidir?",
        options: [
          "Sürekli ve gereksiz yere korna çalmak",
          "Sadece tehlikeyi önlemek gibi gerekli durumlarda korna kullanmak",
          "Öfke anlarında korna çalmak",
          "Trafik sıkışıklığında sürekli korna çalmak",
        ],
        correctIndex: 1,
        explanation:
          "Korna, yalnızca bir tehlikeyi önlemek veya uyarmak gibi gerçekten gerekli durumlarda kullanılmalı, gereksiz gürültü kirliliğine yol açılmamalıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-7",
        text: "Bir sürücünün aracını park ederken diğer yol kullanıcılarına saygılı davranışı nasıl olmalıdır?",
        options: [
          "Görüşü kapatacak veya manevra engeli oluşturacak yerlere park etmemelidir",
          "Sadece kendi işine bakması yeterlidir",
          "Engelli park yerlerine gerektiğinde park edebilir",
          "Yaya geçidine yakın park etmesi sorun değildir",
        ],
        correctIndex: 0,
        explanation:
          "Sorumlu bir sürücü, park ederken diğer araçların ve yayaların görüşünü kapatmayacak ve manevra yapmasını zorlaştırmayacak şekilde davranır.",
        difficulty: "orta",
      },
      {
        id: "cevre-8",
        text: "Yayaya öncelik vermek trafikte hangi değerin bir göstergesidir?",
        options: ["Bencillik", "Empati ve karşılıklı saygı", "Aceleci davranış", "Kural ihlali"],
        correctIndex: 1,
        explanation:
          "Yayaya öncelik vermek, sürücünün kendisini yayanın yerine koyarak gösterdiği empati ve saygının bir yansımasıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-9",
        text: "Motorlu taşıt egzozundan çıkan zararlı gazların insan sağlığına etkisi nedir?",
        options: [
          "Hiçbir sağlık etkisi yoktur",
          "Solunum yolu rahatsızlıklarına ve hava kirliliğine katkıda bulunabilir",
          "Sadece bitkileri etkiler",
          "Sadece gece saatlerinde etkilidir",
        ],
        correctIndex: 1,
        explanation:
          "Egzoz gazlarındaki zararlı bileşenler hava kirliliğine katkıda bulunur ve uzun vadede solunum yolu rahatsızlıklarına yol açabilir.",
        difficulty: "orta",
      },
      {
        id: "cevre-10",
        text: "Trafikte 'road rage' olarak bilinen sürücü öfkesiyle karşılaşan bir sürücünün en doğru tepkisi nedir?",
        options: [
          "Aynı şekilde agresif tepki vermek",
          "Sakin kalıp tartışmadan uzaklaşmak",
          "Aracını durdurup tartışmaya girmek",
          "Diğer sürücüyü takip etmek",
        ],
        correctIndex: 1,
        explanation:
          "Agresif bir sürücüyle karşılaşıldığında sakin kalmak ve tartışmadan uzaklaşmak, olası bir kazayı veya çatışmayı önler.",
        difficulty: "orta",
      },
      {
        id: "cevre-11",
        text: "Atık motor yağı ve benzeri kimyasalların çevreye zarar vermeden bertaraf edilmesi nasıl sağlanır?",
        options: [
          "Kanalizasyona veya toprağa dökülerek",
          "Yetkili toplama merkezlerine teslim edilerek",
          "Çöp kutusuna atılarak",
          "Yakılarak",
        ],
        correctIndex: 1,
        explanation:
          "Atık motor yağı gibi zararlı maddeler, çevreye zarar vermemesi için mutlaka yetkili toplama merkezlerine teslim edilmelidir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-12",
        text: "Elektrikli araçların içten yanmalı araçlara göre başlıca çevresel avantajı nedir?",
        options: [
          "Daha hızlı olmaları",
          "Kullanım sırasında egzoz emisyonu üretmemeleri",
          "Daha ucuz olmaları",
          "Daha az bakım gerektirmeleri",
        ],
        correctIndex: 1,
        explanation:
          "Elektrikli araçlar kullanım sırasında egzoz gazı salmadıkları için yerel hava kirliliğine katkıları içten yanmalı araçlara göre daha azdır.",
        difficulty: "orta",
      },
      {
        id: "cevre-13",
        text: "Trafikte diğer sürücülerin hatalarına karşı hoşgörülü davranmanın faydası nedir?",
        options: [
          "Trafik güvenliğini ve genel atmosferi olumlu etkiler",
          "Sürücüyü zayıf gösterir",
          "Hiçbir faydası yoktur",
          "Sadece zaman kaybettirir",
        ],
        correctIndex: 0,
        explanation:
          "Küçük hatalara karşı hoşgörülü olmak, gerginliği azaltarak trafik ortamının genel güvenliğine ve huzuruna katkı sağlar.",
        difficulty: "kolay",
      },
      {
        id: "cevre-14",
        text: "Aracını uzun süre kullanmayacak bir sürücünün çevre bilincine uygun davranışı hangisidir?",
        options: [
          "Motoru sürekli rölantide çalıştırmak",
          "Aracı gereksiz yere çalıştırmamak",
          "Farları sürekli açık bırakmak",
          "Klimayı sürekli çalışır durumda bırakmak",
        ],
        correctIndex: 1,
        explanation:
          "Kullanılmayacak bir aracı gereksiz yere çalıştırmamak, hem yakıt israfını hem de gereksiz emisyonu önler.",
        difficulty: "kolay",
      },
      {
        id: "cevre-15",
        text: "Sürücülerin kurallara sadece ceza almamak için değil, gerçekten benimseyerek uyması neyi gösterir?",
        options: [
          "Trafik adabının içselleştirildiğini",
          "Sadece korkuyla hareket edildiğini",
          "Kuralların gereksiz olduğunu",
          "Kişisel bir tercih olmadığını",
        ],
        correctIndex: 0,
        explanation:
          "Kuralların ceza kaygısıyla değil güvenlik bilinciyle benimsenmesi, sürücünün trafik adabını gerçek anlamda içselleştirdiğini gösterir.",
        difficulty: "zor",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getAllQuestions(): Question[] {
  return categories.flatMap((c) => c.questions);
}

export function getQuestionCategorySlug(questionId: string): string | undefined {
  return categories.find((c) => c.questions.some((q) => q.id === questionId))?.slug;
}
