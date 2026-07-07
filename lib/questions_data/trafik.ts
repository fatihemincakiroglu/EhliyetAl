import type { Category } from "../questions";

const category: Category = {
    slug: "trafik",
    name: "Trafik ve Çevre Bilgisi",
    shortName: "Trafik",
    description: "Trafik işaretleri, kurallar ve yol öncelikleri",
    questions: [
      {
        id: "trafik-1",
        text: "Kırmızı ışıkta bekleyen bir sürücü, ışık sarıya döndüğünde ne yapmalıdır?",
        options: [
          "Yeşile dönene kadar beklemeye devam etmelidir",
          "Hemen hızlanıp geçmelidir",
          "Kavşağı kontrol ederek yavaşça ilerlemelidir",
          "Korna çalarak diğer sürücüleri uyarmalıdır",
        ],
        correctIndex: 0,
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
          "Sadece gündüz saatlerinde sollama yasaktır",
          "Karşıdan araç geliyorsa sollama yapılmamalıdır",
          "Karşı araç uzaktaysa sorun oluşturmaz",
        ],
        correctIndex: 2,
        explanation:
          "Karşı yönden gelen trafiğin güvenliğini tehlikeye atacak şekilde sollama yapmak yasaktır ve kazalara yol açabilir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-4",
        text: "Emniyet şeridi (banket dışı acil şerit) hangi durumda kullanılabilir?",
        options: [
          "Trafik yoğunluğunda zaman kazanmak için",
          "Sürekli olarak hızlı gitmek isteyenler için",
          "Otoyollarda her zaman serbestçe kullanılabilir",
          "Sadece arıza veya acil durumlarda",
        ],
        correctIndex: 3,
        explanation:
          "Emniyet şeridi yalnızca arıza, kaza veya acil bir durumda kullanılabilir; trafik sıkışıklığını aşmak için kullanılamaz.",
        difficulty: "kolay",
      },
      {
        id: "trafik-5",
        text: "Dönel (göbekli) kavşaklarda geçiş önceliği genellikle kime aittir?",
        options: [
          "Kavşak içinde dönmekte olan araca",
          "Kavşağa yeni giren araca",
          "Sağdan gelen araca",
          "Büyük araçlara",
        ],
        correctIndex: 0,
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
        options: [
          "70",
          "90",
          "110",
          "130",
        ],
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
          "Sadece korna çalması yeterlidir",
          "Hız kesmeden hızlıca geçmelidir",
          "Sinyal vererek gireceği şeritteki araçların güvenle geçişini beklemelidir",
        ],
        correctIndex: 3,
        explanation:
          "Şerit değiştirmeden önce sinyal verilir ve gireceği şeritte seyreden araçların güvenle geçmesi beklenir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-9",
        text: "Takip mesafesi neye göre ayarlanmalıdır?",
        options: [
          "Hız, hava koşulları ve yol durumuna göre",
          "Sadece aracın modeline göre",
          "Öndeki aracın rengine göre",
          "Sadece gündüz-gece ayrımına göre",
        ],
        correctIndex: 0,
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
          "Sadece ders saatlerinde dikkat etmesi yeterlidir",
          "Hızını azaltıp dikkatli sürmelidir",
          "Levhayı görmezden gelebilir",
        ],
        correctIndex: 2,
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
          "Kaza yapanları uyarmadan geçmek",
          "Kendi güvenliğini sağlayarak uyarı işareti koymak ve gerekirse yardım çağırmak",
        ],
        correctIndex: 3,
        explanation:
          "Kaza yerine yaklaşan sürücü önce kendi güvenliğini sağlamalı, gerekiyorsa uyarı reflektörü koymalı ve yardım çağırmalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-13",
        text: "Sürücülerin dönüş yapmadan önce sinyal vermesinin temel amacı nedir?",
        options: [
          "Diğer sürücüleri ve yayaları niyeti hakkında bilgilendirmek",
          "Yasal bir zorunluluk olduğu için, başka amacı yoktur",
          "Aracın elektrik sistemini test etmek",
          "Trafik polislerine saygı göstermek",
        ],
        correctIndex: 0,
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
          "Kavşağa girmemeleri gerekir",
          "Kavşağa bir 'dur' işareti varmış gibi yaklaşıp dikkatli geçmelidir",
          "Sadece büyük araçlar öncelik kazanır",
        ],
        correctIndex: 2,
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
          "Hız sınırı bitti",
          "Park yapılabilir",
          "Tamamen dur, geçiş hakkı olanları kontrol et",
        ],
        correctIndex: 3,
        explanation:
          "Kırmızı sekizgen 'Dur' işaretidir; sürücü aracı tamamen durdurmalı, öncelikli yolu kontrol ettikten sonra güvenliyse hareket etmelidir.",
        difficulty: "kolay",
        visualId: "dur",
      },
      {
        id: "trafik-17",
        text: "Aşağıdaki işaret neyi bildirir?",
        options: [
          "Taşıt trafiğine kapalı yol / girişi olmayan yol",
          "Bisiklet yolu",
          "Girişi olan yol",
          "Otopark",
        ],
        correctIndex: 0,
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
      {
        id: "trafik-19",
        text: "Otoyolda aracı arızalanan bir sürücü ne yapmalıdır?",
        options: [
          "Aracı olduğu şeritte bırakıp yürüyerek yardım aramalıdır",
          "Aracı ortada bırakıp diğer sürücüleri elle yönlendirmelidir",
          "Aracı mümkünse emniyet şeridine çekip dörtlü ikaz ışıklarını yakmalı ve reflektör koymalıdır",
          "Sadece korna çalarak beklemelidir",
        ],
        correctIndex: 2,
        explanation:
          "Arızalanan araç mümkünse emniyet şeridine alınmalı, dörtlü ikaz ışıkları yakılmalı ve arkadan gelen araçları uyarmak için reflektör konulmalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-20",
        text: "Aksine bir düzenleme yoksa, kavşaklarda öncelikli yoldan gelmeyen bir sürücü nasıl davranmalıdır?",
        options: [
          "Hızını artırıp önce geçmeye çalışmalıdır",
          "Öncelik her zaman büyük araçtadır, ona göre davranmalıdır",
          "Kavşakta bulunan ilk araç geçer",
          "Öncelikli yoldaki araçlara yol vermelidir",
        ],
        correctIndex: 3,
        explanation:
          "Tali yoldan gelen sürücü, ana/öncelikli yoldan gelen araçlara geçiş hakkı vermek zorundadır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-21",
        text: "Sis, yoğun yağmur gibi görüşü azaltan hava koşullarında sürücü nasıl davranmalıdır?",
        options: [
          "Hızını azaltmalı, farları uygun şekilde kullanmalı ve takip mesafesini artırmalıdır",
          "Hızını artırıp bölgeden çabuk çıkmalıdır",
          "Dörtlü ikaz ışıklarını sürekli yakarak normal hızda gitmelidir",
          "Uzun farları sürekli açık tutmalıdır",
        ],
        correctIndex: 0,
        explanation:
          "Görüşün azaldığı hava koşullarında hız azaltılmalı, sis ışıkları uygun şekilde kullanılmalı ve takip mesafesi normalden fazla tutulmalıdır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-22",
        text: "Bir sürücünün araç kullanırken cep telefonuyla mesajlaşması hakkında ne söylenebilir?",
        options: [
          "Kısa mesajlar için sorun oluşturmaz",
          "Dikkati dağıtır ve tepki süresini uzatarak kaza riskini artırır",
          "Sadece kırmızı ışıkta yasaktır",
          "Sadece otoyolda yasaktır",
        ],
        correctIndex: 1,
        explanation:
          "Sürüş sırasında telefonla ilgilenmek dikkati yoldan ayırır, tepki süresini uzatır ve kaza riskini önemli ölçüde artırır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-23",
        text: "Bir kavşakta ışıklar yeşil olsa da kavşak içi araç yoğunluğundan dolayı karşıya geçilemeyecekse sürücü ne yapmalıdır?",
        options: [
          "Yeşil ışık yandığı için kavşağa girip beklemelidir",
          "Korna çalarak önündeki araçların ilerlemesini sağlamaya çalışmalıdır",
          "Kavşağın tıkanmasına neden olmamak için kavşağa girmemeli, dışarıda beklemelidir",
          "Karşı şeride geçerek ilerlemelidir",
        ],
        correctIndex: 2,
        explanation:
          "Işık yeşil olsa da kavşak içinde tıkanıklık oluşturacaksa sürücü kavşağa girmemeli, önündeki alanın açılmasını dışarıda beklemelidir.",
        difficulty: "zor",
      },
      {
        id: "trafik-24",
        text: "Bir aracın öndeki araçla aralarında bırakması gereken güvenli takip mesafesi neyle doğru orantılıdır?",
        options: [
          "Aracın rengiyle",
          "Sürücünün yaşıyla",
          "Gün içindeki saatle",
          "Aracın hızıyla",
        ],
        correctIndex: 3,
        explanation:
          "Hız arttıkça fren mesafesi de arttığından, güvenli takip mesafesi aracın hızıyla doğru orantılı şekilde artırılmalıdır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-25",
        text: "Yaya ve bisiklet yolu bulunan bir yolda motorlu taşıt sürücüsünün davranışı nasıl olmalıdır?",
        options: [
          "Yaya ve bisiklet yollarına girmemeli, bu alanları ihlal etmemelidir",
          "Bu yolları kısa süreliğine kullanabilir",
          "Sadece gece bu yolları kullanabilir",
          "Trafik sıkışıksa bu yolları kullanabilir",
        ],
        correctIndex: 0,
        explanation:
          "Yaya ve bisiklet yolları motorlu taşıtların kullanımına kapalıdır; bu alanlara girmek yayaların ve bisikletlilerin güvenliğini tehlikeye atar.",
        difficulty: "kolay",
      },
      {
        id: "trafik-26",
        text: "Aksine bir işaret yoksa, yerleşim yeri içinde otomobiller için azami hız sınırı saatte kaç kilometredir?",
        options: ["30 km", "50 km", "70 km", "90 km"],
        correctIndex: 1,
        explanation:
          "Trafik işaretiyle farklı bir sınır belirtilmediği sürece, yerleşim yeri içinde otomobiller için azami hız sınırı saatte 50 kilometredir.",
        difficulty: "orta",
      },
      {
        id: "trafik-27",
        text: "Emniyet kemiri takma zorunluluğu hakkında hangisi doğrudur?",
        options: [
          "Sadece şehirler arası yollarda zorunludur",
          "Sürücü ve tüm yolcular için, ön ve arka koltukta zorunludur",
          "Sadece ön koltuktakiler için zorunludur",
          "Sadece taksi ve ticari araçlarda zorunludur",
        ],
        correctIndex: 1,
        explanation:
          "Emniyet kemiri, araçtaki sürücü ve tüm yolcular için hem ön hem arka koltukta takılması zorunlu bir güvenlik önlemidir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-28",
        text: "Alkollü olarak araç kullanmakla ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
          "Özel araç sürücüleri için herhangi bir alkol sınırı yoktur",
          "Ticari araç, taksi ve toplu taşıma sürücülerinin alkollü olarak araç kullanması kesinlikle yasaktır",
          "Alkol sadece gece saatlerinde araç kullanmayı etkiler",
          "Az miktarda alkol araç kullanmayı hiçbir şekilde etkilemez",
        ],
        correctIndex: 1,
        explanation:
          "Ticari araç, taksi, minibüs ve toplu taşıma araçlarını kullanan sürücülerin kanlarında hiç alkol bulunmaması gerekir; bu sürücüler için alkollü araç kullanmak kesinlikle yasaktır.",
        difficulty: "orta",
      },
      {
        id: "trafik-29",
        text: "Siren çalarak yaklaşan bir ambulans veya itfaiye aracı fark eden sürücü ne yapmalıdır?",
        options: [
          "Hızını artırıp geçiş üstünlüğü olan aracın önüne geçmelidir",
          "Mümkün olan en kısa sürede yol vererek geçiş üstünlüğü tanımalıdır",
          "Kendi şeridinde olduğu sürece hızını değiştirmesine gerek yoktur",
          "Sadece kavşaklarda yol vermesi yeterlidir",
        ],
        correctIndex: 1,
        explanation:
          "Siren ve/veya ışıklı işaret kullanan ambulans, itfaiye gibi geçiş üstünlüğüne sahip araçlara diğer sürücüler mümkün olan en kısa sürede yol vermek zorundadır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-30",
        text: "Hemzemin geçitte (demiryolu geçidinde) ışıklı ikaz cihazı yanıp sönüyor veya bariyer inmeye başlamışsa sürücü ne yapmalıdır?",
        options: [
          "Bariyer tam kapanmadan hızla geçebilir",
          "Geçit tamamen açılana kadar geçidin önünde beklemelidir",
          "Sadece tren görünmüyorsa geçebilir",
          "Korna çalarak geçebilir",
        ],
        correctIndex: 1,
        explanation:
          "Işıklı ikaz cihazı yanıp sönerken veya bariyer inmeye başladığında sürücü kesinlikle geçide girmemeli, geçit tamamen açılıp güvenli hale gelene kadar beklemelidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-31",
        text: "Aşağıdaki yerlerden hangisinde sollama (öndeki aracı geçme) yapmak yasaktır?",
        options: [
          "Düz ve görüş mesafesi uzun kara yolunda",
          "Tünellerde, köprülerde ve dönemeçli kesimlerde",
          "Otoyolun sağ şeridinde seyrederken",
          "Şerit sayısı üçten fazla olan yollarda",
        ],
        correctIndex: 1,
        explanation:
          "Tüneller, köprüler, tepe üstleri ve dönemeçli (virajlı) kesimler gibi görüşün ve manevra alanının kısıtlı olduğu yerlerde sollama yapmak yasaktır.",
        difficulty: "orta",
      },
      {
        id: "trafik-32",
        text: "Bir kavşağa, yaya geçidine veya demiryolu geçidine olan yakınlığı nedeniyle park etmenin yasak olduğu asgari mesafe için genel kural nedir?",
        options: [
          "Bu tür yerlere 5 metreden daha yakına park edilemez",
          "Yaya geçitlerine istenildiği kadar yakın park edilebilir",
          "Sadece gece saatlerinde bu kural geçerlidir",
          "Kavşaklara yakın park etmenin bir sakıncası yoktur",
        ],
        correctIndex: 0,
        explanation:
          "Görüşü ve geçişi engellememek için kavşak, yaya geçidi ve demiryolu geçitlerine 5 metreden daha yakın mesafeye park etmek yasaktır.",
        difficulty: "zor",
      },
    ],
  };

export default category;
