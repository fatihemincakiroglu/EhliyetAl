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
      {
        id: "trafik-33",
        text: "Kamu hizmeti yapan yolcu taşıtlarının yolcu bindirip indirmeleri veya duraklamaları için yatay ve düşey işaretlerle belirlenmiş yere ne ad verilir?",
        options: [
          "Garaj",
          "Durak",
          "Otopark",
          "Park yeri",
        ],
        correctIndex: 1,
        explanation:
          "Toplu taşıma araçlarının yolcu indirip bindirdiği, işaretlerle belirlenmiş yere durak denir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-34",
        text: "Trafik kuruluşunca uyuşturucu veya uyarıcı madde kullandığı tespit edilen sürücüye aşağıdaki işlemlerden hangisi uygulanır?",
        options: [
          "Sürücü belgesi 5 yıl süreyle geçici olarak geri alınır",
          "Sadece şehir içinde araç sürmesine izin verilir",
          "Sürücü belgesi 6 ay geri alınır",
          "Sadece para cezası verilir",
        ],
        correctIndex: 0,
        explanation:
          "Uyuşturucu/uyarıcı madde kullanarak araç kullanan sürücünün belgesi 5 yıl süreyle geçici olarak geri alınır.",
        difficulty: "orta",
      },
      {
        id: "trafik-35",
        text: "Aksine bir işaret bulunmadıkça otoyolda minibüs ve otobüsler için azami hız saatte kaç kilometredir?",
        options: [
          "80",
          "90",
          "100",
          "110",
        ],
        correctIndex: 2,
        explanation:
          "Otoyolda aksine işaret yoksa minibüs ve otobüsler için azami hız saatte 100 km'dir.",
        difficulty: "orta",
      },
      {
        id: "trafik-36",
        text: "Arkadan çarpma şeklindeki trafik kazalarının en önemli sebebi aşağıdakilerden hangisidir?",
        options: [
          "Öndeki aracın durması",
          "Öndeki aracın yavaşlaması",
          "Görüş mesafesinin kötü olması",
          "Takip mesafesi kurallarına uyulmaması",
        ],
        correctIndex: 3,
        explanation:
          "Arkadan çarpma kazalarının en önemli nedeni takip mesafesi kuralına uyulmamasıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-37",
        text: "Manevra yapacak sürücü aşağıdakilerden hangisini yapmalıdır?",
        options: [
          "Ön, arka ve yanlardaki trafiği kontrol etmeli",
          "İşaret verdiği anda hemen manevraya başlamalı",
          "Manevraya başladıktan sonra işaret vermeli",
          "Manevra bitmeden işaret vermeyi bırakmalı",
        ],
        correctIndex: 0,
        explanation:
          "Manevradan önce sürücü ön, arka ve yanlardaki trafiği kontrol etmeli, uygun işareti verdikten sonra manevraya başlamalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-38",
        text: "Geçiş üstünlüğüne sahip araç sürücüsü bu hakkı kullanırken aşağıdakilerden hangisine dikkat etmek zorundadır?",
        options: [
          "Hız sınırlamasına",
          "Trafik yasaklarına",
          "Çevreyi rahatsız etmemeye",
          "Can ve mal güvenliğini tehlikeye sokmamaya",
        ],
        correctIndex: 3,
        explanation:
          "Geçiş üstünlüğü kullanılırken temel şart, can ve mal güvenliğini tehlikeye atmamaktır.",
        difficulty: "orta",
      },
      {
        id: "trafik-39",
        text: "Geceleyin görüşün yeterli olmadığı bir kavşağa yaklaşan sürücü gelişini nasıl haber vermelidir?",
        options: [
          "Birkaç defa selektör yaparak",
          "Acil uyarı ışıklarını yakarak",
          "Birkaç defa korna çalarak",
          "Dönüş ışıklarını yakarak",
        ],
        correctIndex: 0,
        explanation:
          "Gece görüşün kısıtlı olduğu kavşaklarda sürücü, uzağı-yakını gösteren ışıklarla birkaç kez selektör yaparak gelişini haber verir.",
        difficulty: "orta",
      },
      {
        id: "trafik-40",
        text: "Park hâlindeki araca çarpan sürücünün aşağıdakilerden hangisini yapması yanlıştır?",
        options: [
          "Aracın sahibini bulamazsa yazılı bilgi bırakması",
          "Zarar fazla değilse olay yerinden uzaklaşması",
          "Zarar verdiği aracın sahibini bulması",
          "Trafik görevlisine haber vermesi",
        ],
        correctIndex: 1,
        explanation:
          "Zarar az bile olsa olay yerinden uzaklaşmak yanlıştır; sürücü sahibini bulmalı, bulamazsa iletişim bilgisi bırakmalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-41",
        text: "Aşağıdakilerden hangisi Karayolları Trafik Kanunu'na göre sürücü olabilmenin şartlarından biri değildir?",
        options: [
          "Bir meslek sahibi olmak",
          "Belirli bir eğitim seviyesine sahip olmak",
          "Kullanacağı araca göre belirli bir yaşın üzerinde olmak",
          "Sürücülüğe uygun olduğunu gösterir sağlık raporu almak",
        ],
        correctIndex: 0,
        explanation:
          "Sürücü olmak için meslek sahibi olma şartı yoktur; yaş, eğitim ve sağlık şartları aranır.",
        difficulty: "orta",
      },
      {
        id: "trafik-42",
        text: "Trafik zabıtası veya yetkililerce, araçla ilgili belgelerin alınması ve aracın belirli bir yere çekilerek trafikten alıkonulmasına ne denir?",
        options: [
          "Trafik suçu",
          "Trafik terörü",
          "Trafik kusuru",
          "Trafikten men",
        ],
        correctIndex: 3,
        explanation:
          "Aracın belge alınarak trafikten alıkonulmasına trafikten men denir.",
        difficulty: "orta",
      },
      {
        id: "trafik-43",
        text: "Öndeki aracın güvenle takip edildiği uzaklığa ne denir?",
        options: [
          "Takip mesafesi",
          "Geçiş mesafesi",
          "Görüş mesafesi",
          "İntikal mesafesi",
        ],
        correctIndex: 0,
        explanation:
          "Öndeki aracı güvenle izlemek için bırakılan uzaklığa takip mesafesi denir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-44",
        text: "Aşağıdaki hâllerin hangisinde sürücü araç kullanmaktan men edilir?",
        options: [
          "Taşıma sınırının üstünde yolcu almışsa",
          "Taşıma sınırının üstünde yük yüklemişse",
          "Uyuşturucu madde alarak araç kullanıyorsa",
          "Zorunlu mali sorumluluk sigortasını yaptırmamışsa",
        ],
        correctIndex: 2,
        explanation:
          "Uyuşturucu madde etkisinde araç kullanan sürücü derhal araç kullanmaktan men edilir.",
        difficulty: "orta",
      },
      {
        id: "trafik-45",
        text: "Ölümle sonuçlanan trafik kazalarına asli kusurlu olarak sebep veren sürücülerin belgeleri ilgili mahkeme tarafından kaç yıl süreyle geri alınır?",
        options: [
          "1",
          "2",
          "3",
          "4",
        ],
        correctIndex: 0,
        explanation:
          "Ölümlü kazaya asli kusurlu olarak sebep olan sürücünün belgesi mahkemece 1 yıl süreyle geri alınır.",
        difficulty: "orta",
      },
      {
        id: "trafik-46",
        text: "Belgelerinde aksine bir hüküm yoksa şehirler arası bölünmüş kara yolunda tehlikeli madde taşıyan araçların azami hızı saatte kaç kilometredir?",
        options: [
          "40",
          "50",
          "60",
          "70",
        ],
        correctIndex: 0,
        explanation:
          "Tehlikeli madde taşıyan araçların şehirler arası bölünmüş yoldaki azami hızı saatte 40 km'dir.",
        difficulty: "orta",
      },
      {
        id: "trafik-47",
        text: "Bir kavşakta sağa dönecek sürücünün aşağıdakilerden hangisini yapması yanlıştır?",
        options: [
          "Hızını azaltması",
          "Dönüş işareti vermesi",
          "Geniş bir kavisle dönmesi",
          "Sağ şeride veya dönüş izni verilen şeride girmesi",
        ],
        correctIndex: 2,
        explanation:
          "Sağa dönüşte dar bir kavisle dönülür; geniş kavisle dönmek karşı ve yan trafiği tehlikeye atar, yanlıştır.",
        difficulty: "orta",
      },
      {
        id: "trafik-48",
        text: "Yaya yolu ayrılmamış kara yolunda, taşıt yolu kenarı ile şev başı arasında kalan ve olağan olarak yayaların kullanacağı, zorunlu hâllerde araçların faydalanabileceği bölüme ne denir?",
        options: [
          "Banket",
          "Şerit",
          "Platform",
          "Kavşak ortak alanı",
        ],
        correctIndex: 0,
        explanation:
          "Taşıt yolu kenarında yayaların kullandığı, zorunlu hâlde araçların da yararlanabileceği bölüme banket denir.",
        difficulty: "orta",
      },
      {
        id: "trafik-49",
        text: "Bir arızadan dolayı çekilen araçlarla ilgili olarak aşağıdakilerden hangisi uyulması gereken şartlardan biri değildir?",
        options: [
          "Çekilen aracın ağırlığının, çeken aracın taşıma sınırından az olması",
          "İki araç arasındaki açıklığın 10 metre olması",
          "Çekilen aracın sürücü yönetiminde olması",
          "Her iki aracın da boş (yüksüz) olması",
        ],
        correctIndex: 1,
        explanation:
          "Çekilen ve çeken araç arasındaki açıklık 5 metreyi geçmemelidir; 10 metre şart olarak yanlıştır.",
        difficulty: "orta",
      },
      {
        id: "trafik-50",
        text: "Aşağıdakilerden hangisi geçiş üstünlüğüne sahip araçlardandır?",
        options: [
          "İtfaiye aracı",
          "Motosiklet",
          "Tarım traktörü",
          "Toplu taşıma aracı",
        ],
        correctIndex: 0,
        explanation:
          "İtfaiye, ambulans, polis gibi araçlar görev hâlinde geçiş üstünlüğüne sahiptir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-51",
        text: "Park edilen araç için aşağıdakilerden hangisinin yapılmasına gerek yoktur?",
        options: [
          "El freninin çekilmesi",
          "Motorun durdurulması",
          "Acil uyarı ışıklarının yakılması",
          "Yol eğimliyse uygun vitese takılması",
        ],
        correctIndex: 2,
        explanation:
          "Park eden araçta el freni çekilir, motor durdurulur, eğimde vitese takılır; acil uyarı (dörtlü) ışıkların sürekli yanması gerekmez.",
        difficulty: "orta",
      },
      {
        id: "trafik-52",
        text: "Geceleyin önündeki aracı geçmek isteyen sürücü, bu araçla yan yana gelinceye kadar hangi ışıkları kullanmalıdır?",
        options: [
          "Sis ışıklarını",
          "Acil uyarı ışıklarını",
          "Uzağı gösteren ışıkları",
          "Yakını gösteren ışıkları",
        ],
        correctIndex: 2,
        explanation:
          "Gece geçiş yaparken öndeki araçla yan yana gelene kadar uzağı gösteren (uzun) farlar kullanılır, yan yana gelince kısa fara geçilir.",
        difficulty: "orta",
      },
      {
        id: "trafik-53",
        text: "Öndeki taşıtı geçmenin yasak olduğu durumlardan biri aşağıdakilerden hangisidir?",
        options: [
          "Kara yolunun geçişe uygun ve boş olması",
          "Öndeki aracın yavaşlaması",
          "Kullanılacak şeridin görüşe kapalı ve karşıdan trafik için tehlikeli olması",
          "Arkadan başka aracın gelmemesi",
        ],
        correctIndex: 2,
        explanation:
          "Kullanılacak şeridin görüşe kapalı olması ve karşıdan gelen trafik için tehlike yaratması durumunda geçme yasaktır.",
        difficulty: "orta",
      },
      {
        id: "trafik-54",
        text: "Kavşağa yaklaşan sürücü, trafik ışığının aralıklarla kırmızı yanıp söndüğünü fark ederse nasıl davranmalıdır?",
        options: [
          "Durmalı, ilk geçiş hakkını kendisi kullanmalı",
          "Hızını sabit tutmalı, kontrollü geçmeli",
          "Hızını azaltmalı, durmadan geçmeli",
          "Durmalı, ilk geçiş hakkını diğer yönden gelen araçlara vermeli",
        ],
        correctIndex: 3,
        explanation:
          "Aralıklarla yanıp sönen kırmızı ışık 'DUR' anlamındadır; sürücü durmalı ve diğer yönden gelen araçlara yol vermelidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-55",
        text: "Kara yollarında araç kullanan bir sürücünün aşağıdakilerden hangisini yapması yasaktır?",
        options: [
          "Daralan yolda yüklü araçlara geçiş kolaylığı sağlaması",
          "Kavşaklarda ve demir yolu geçitlerinde öndeki aracı geçmesi",
          "Yayalara geçiş hakkı vermesi",
          "Geçiş üstünlüğü olan araca yol açması",
        ],
        correctIndex: 1,
        explanation:
          "Kavşaklarda, demir yolu geçitlerinde ve bunlara yaklaşırken öndeki aracı geçmek yasaktır.",
        difficulty: "orta",
      },
      {
        id: "trafik-56",
        text: "Sürücüler araçlarının hızını neye göre ayarlamak zorundadır?",
        options: [
          "Yalnız aracın yük ve teknik özelliğine",
          "Yalnız görüş, yol, hava ve trafik durumuna",
          "Yalnız aracın cinsine uygun hız sınırlamalarına",
          "Aracın yük/teknik özelliği, yol-hava-trafik durumu ve hız sınırlamalarının tümüne",
        ],
        correctIndex: 3,
        explanation:
          "Hız; aracın özelliği, yol-hava-trafik durumu ve geçerli hız sınırlarının hepsine göre ayarlanmalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-57",
        text: "2918 sayılı Karayolları Trafik Kanunu'na göre ilk defa sürücü belgesi alanlar belgenin alındığı tarihten itibaren kaç yıl aday sürücü sayılır?",
        options: [
          "2",
          "3",
          "5",
          "10",
        ],
        correctIndex: 0,
        explanation:
          "İlk kez veya yeniden belge alanlar 2 yıl süreyle aday sürücü kabul edilir.",
        difficulty: "orta",
      },
      {
        id: "trafik-58",
        text: "Aşağıdaki araçlardan hangisinde takograf bulundurulması zorunludur?",
        options: [
          "Otomobil",
          "Traktör",
          "Motosiklet",
          "Otobüs",
        ],
        correctIndex: 3,
        explanation:
          "Otobüs, kamyon, çekici gibi araçlarda takograf bulundurulması zorunludur.",
        difficulty: "orta",
      },
      {
        id: "trafik-59",
        text: "Trafik kuralı ihlalinden geriye doğru bir yıl içinde toplam 100 ceza puanını ilk kez aşan sürücünün belgesi kaç ay süreyle geri alınır?",
        options: [
          "2",
          "3",
          "6",
          "7",
        ],
        correctIndex: 0,
        explanation:
          "Bir yıl içinde ilk kez 100 ceza puanını aşan sürücünün belgesi 2 ay süreyle geri alınır.",
        difficulty: "orta",
      },
      {
        id: "trafik-60",
        text: "Sürücünün aşağıdakilerden hangisini yapması kural ihlali sayılır?",
        options: [
          "Üç şeritli iki yönlü yolda sağ şeritten gitmesi",
          "Aracın cinsine ve hızına uygun şeridi kullanması",
          "Geçme, dönme gibi mecburi hâller dışında şerit değiştirmesi",
          "Şerit değiştirmeden önce gireceği şeritteki araçları beklemesi",
        ],
        correctIndex: 2,
        explanation:
          "Mecburi hâller dışında gereksiz yere şerit değiştirmek (slalom) kural ihlalidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-61",
        text: "Kara Yolları Trafik Kanunu'na göre 'M, A1, A2, A, B1, B, BE, F ve G' sınıfı sürücü belgeleri kaç yıl süreyle geçerlidir?",
        options: [
          "10",
          "15",
          "20",
          "25",
        ],
        correctIndex: 0,
        explanation:
          "Bu sınıf sürücü belgeleri 10 yıl süreyle geçerlidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-62",
        text: "Kaza anında araç dışına fırlama riskini azaltmak için araçlarda bulunan güvenlik sistemi hangisidir?",
        options: [
          "ASR",
          "ABS",
          "Emniyet kemeri",
          "Hava yastığı",
        ],
        correctIndex: 2,
        explanation:
          "Emniyet kemeri, kaza anında sürücü ve yolcuyu araçta tutarak dışarı fırlamayı önler.",
        difficulty: "kolay",
      },
      {
        id: "trafik-63",
        text: "Aşağıdakilerden hangisi trafik kazalarının en önemli sebebidir?",
        options: [
          "Trafik görevlisi sayısının yetersiz olması",
          "Uyarı işaretlerinin yetersiz olması",
          "Sürücülerin kurallara uymaması",
          "Yolların bakımsız olması",
        ],
        correctIndex: 2,
        explanation:
          "Trafik kazalarının en önemli sebebi sürücülerin trafik kurallarına uymamasıdır.",
        difficulty: "kolay",
      },
      {
        id: "trafik-64",
        text: "Otoyolda 120 km/saat hızla seyreden bir otomobil sürücüsü, önündeki araçla arasında en az kaç metre mesafe bırakmalıdır?",
        options: [
          "30",
          "40",
          "50",
          "60",
        ],
        correctIndex: 3,
        explanation:
          "Takip mesafesi en az hızın yarısı kadar metre olmalıdır: 120 km/s için en az 60 metre.",
        difficulty: "orta",
      },
      {
        id: "trafik-65",
        text: "Bir aracın güvenle taşıyabileceği en çok yük ağırlığına veya yolcu ve hizmetli sayısına ne denir?",
        options: [
          "Gabari",
          "Taşıma sınırı",
          "Dingil ağırlığı",
          "Azami ağırlık",
        ],
        correctIndex: 1,
        explanation:
          "Aracın güvenle taşıyabileceği en çok yük veya yolcu miktarına taşıma sınırı denir.",
        difficulty: "orta",
      },
      {
        id: "trafik-66",
        text: "Yayaların ve araç kullananların diğerlerine göre yolu kullanma sırasındaki önceliğine ne ad verilir?",
        options: [
          "Okul geçidi",
          "Geçiş hakkı",
          "Yaya geçidi",
          "Geçiş üstünlüğü",
        ],
        correctIndex: 1,
        explanation:
          "Yolu kullanmadaki önceliğe geçiş hakkı denir.",
        difficulty: "kolay",
      },
      {
        id: "trafik-67",
        text: "Araçların bir mülke girip çıkması için yapılmış olan, kara yoluna bağlanan ve kara yolu sınır çizgisi içinde kalan yola ne ad verilir?",
        options: [
          "Şerit",
          "Banket",
          "Geçiş yolu",
          "Bağlantı yolu",
        ],
        correctIndex: 2,
        explanation:
          "Bir mülke giriş-çıkış için kara yoluna bağlanan bölüme geçiş yolu denir.",
        difficulty: "orta",
      },
      {
        id: "trafik-68",
        text: "Taşıt yollarını veya yol bölümlerini birbirinden ayıran, bir taraftaki taşıtların diğer tarafa geçmesini engelleyen yapı veya tertibata ne denir?",
        options: [
          "Ada",
          "Ayırıcı",
          "Şerit",
          "Banket",
        ],
        correctIndex: 1,
        explanation:
          "İki yönü birbirinden ayıran ve karşıya geçişi engelleyen yapıya ayırıcı (refüj) denir.",
        difficulty: "orta",
      },
      {
        id: "trafik-69",
        text: "Konvoy hâlinde yavaş seyreden araçların arasındaki mesafe ne kadar olmalıdır?",
        options: [
          "Araç uzunluğunun üç katı kadar",
          "Trafik ve yol durumuna göre istenildiği kadar",
          "Aracın teknik özelliklerinin gerektirdiği kadar",
          "Kendilerini geçmek isteyen araçların güvenle girebilecekleri kadar",
        ],
        correctIndex: 3,
        explanation:
          "Konvoyda araçlar arası mesafe, geçmek isteyen araçların güvenle girebileceği kadar olmalıdır.",
        difficulty: "orta",
      },
      {
        id: "trafik-70",
        text: "Ticari amaçla yük veya yolcu taşıyan belirli araçların şoförleri, 24 saatlik süre içinde toplam kaç saatten fazla araç süremez?",
        options: [
          "6",
          "7",
          "8",
          "9",
        ],
        correctIndex: 3,
        explanation:
          "Belirtilen ticari araç şoförleri 24 saatte toplam 9 saatten fazla araç kullanamaz.",
        difficulty: "orta",
      },
      {
        id: "trafik-71",
        text: "Aksine bir işaret yoksa otobüslerin otoyoldaki azami hızı saatte kaç kilometredir?",
        options: [
          "80",
          "90",
          "100",
          "110",
        ],
        correctIndex: 2,
        explanation:
          "Otobüslerin otoyolda aksine işaret yoksa azami hızı saatte 100 km'dir.",
        difficulty: "orta",
      },
      {
        id: "trafik-72",
        text: "Tehlikeli madde taşıyan araç sürücüsü, yerleşim yeri dışında 60 km/s hızla giderken önündeki araçla arasında en az kaç metre mesafe bırakmalıdır?",
        options: [
          "20",
          "30",
          "40",
          "50",
        ],
        correctIndex: 1,
        explanation:
          "Takip mesafesi hızın yarısı kadar metredir: 60 km/s için en az 30 metre.",
        difficulty: "orta",
      },
      {
        id: "trafik-73",
        text: "Sürücü belgesinin geri alınma süresi içinde araç kullandığı tespit edilenlere hangi işlem uygulanır?",
        options: [
          "İdari para cezası verilir",
          "6 ay hapis cezası verilir",
          "Süresiz araç kullanmaktan men edilir",
          "Hiçbir işlem yapılmaz",
        ],
        correctIndex: 0,
        explanation:
          "Belgesi geri alınmışken araç kullanan sürücüye idari para cezası uygulanır.",
        difficulty: "orta",
      },
      {
        id: "trafik-74",
        text: "Kara Yolları Trafik Kanunu'na göre 'C1, C1E, C, CE, D1, D1E, D ve DE' sınıfı sürücü belgeleri kaç yıl süreyle geçerlidir?",
        options: [
          "2",
          "5",
          "7",
          "10",
        ],
        correctIndex: 1,
        explanation:
          "Bu ağır araç sınıfı sürücü belgeleri 5 yıl süreyle geçerlidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-75",
        text: "Satın alınan veya gümrükten çekilen aracın yeni tescilinin yapılabilmesi için aşağıdakilerden hangisinin yaptırılması zorunludur?",
        options: [
          "Mali sorumluluk sigortasının",
          "Araç teknik muayenesinin",
          "Servis bakımlarının",
          "Kasko sigortasının",
        ],
        correctIndex: 0,
        explanation:
          "Yeni tescil için zorunlu mali sorumluluk (trafik) sigortasının yaptırılması gerekir.",
        difficulty: "orta",
      },
      {
        id: "trafik-76",
        text: "Otomobil, minibüs, otobüs, kamyon, çekici ve tehlikeli madde taşıyan araçların hepsinde bulundurulması zorunlu olan teçhizat hangisidir?",
        options: [
          "Koruma başlığı",
          "Hız sınırlayıcı cihaz",
          "Yangın söndürme cihazı",
          "Çocuk bağlama sistemleri",
        ],
        correctIndex: 2,
        explanation:
          "Bu araçların tümünde yangın söndürme cihazı bulundurulması zorunludur.",
        difficulty: "orta",
      },
      {
        id: "trafik-77",
        text: "Aracına LPG sistemi taktıran bir kişi, bu durumu kaç gün içinde ilgili kuruluşa bildirmek zorundadır?",
        options: [
          "30",
          "40",
          "50",
          "60",
        ],
        correctIndex: 0,
        explanation:
          "LPG sistemi taktıran kişi, durumu 30 gün içinde ilgili kuruluşa bildirmek zorundadır.",
        difficulty: "orta",
      },
      {
        id: "trafik-78",
        text: "Trafik zabıtası, işaret levhası ve ışıklı işaret bulunmayan kontrolsüz kavşaklarda aşağıdakilerden hangisi yanlıştır?",
        options: [
          "Tali yoldan gelenin ana yoldakine yol vermesi",
          "Dönüş yapanın doğru geçen araca yol vermesi",
          "Bütün sürücülerin geçiş üstünlüğü olan araca yol vermesi",
          "Motorlu araçlardan sağdakinin soldan gelene yol vermesi",
        ],
        correctIndex: 3,
        explanation:
          "Kontrolsüz kavşakta motorlu araçlardan SOLDAKİ, SAĞDAN gelene yol verir; ifade tersten verildiği için yanlıştır.",
        difficulty: "orta",
      },
      {
        id: "trafik-79",
        text: "Yerleşim yeri dışındaki kara yollarında geceleri seyrederken, aydınlatılmamış tünellere girerken ve benzeri hâllerde hangi ışıkların yakılması mecburidir?",
        options: [
          "Sis ışıklarının",
          "Park ışıklarının",
          "Yakını gösteren ışıkların",
          "Uzağı gösteren ışıkların",
        ],
        correctIndex: 3,
        explanation:
          "Yerleşim yeri dışında geceleri ve aydınlatmasız tünellerde uzağı gösteren (uzun) farların yakılması mecburidir.",
        difficulty: "orta",
      },
      {
        id: "trafik-80",
        text: "Araçların her yılın 1 Aralık ile 1 Nisan tarihleri arasında (yük ve yolcu taşımalarında) kullanması zorunlu olan aşağıdakilerden hangisidir?",
        options: [
          "Kış lastiği",
          "Yaz lastiği",
          "Polen filtresi",
          "Cam suyu antifrizi",
        ],
        correctIndex: 0,
        explanation:
          "1 Aralık - 1 Nisan arası ticari yük/yolcu taşıyan araçlarda kış lastiği kullanımı zorunludur.",
        difficulty: "orta",
      },
      {
        id: "trafik-81",
        text: "Aşağıdakilerden hangisi trafik kazasında sürücünün asli kusurlu sayılacağı durumlardan biri değildir?",
        options: [
          "Kurallara uygun park etmiş araçlara çarpmak",
          "Geçme yasağı olan yerden geçmek",
          "Kavşaklarda geçiş önceliğine uymak",
          "Arkadan çarpmak",
        ],
        correctIndex: 2,
        explanation:
          "Geçiş önceliğine UYMAK kusur değildir; asli kusur, geçiş önceliğine uymamaktır.",
        difficulty: "orta",
      },
      {
        id: "trafik-82",
        text: "Aşağıdaki yakıtlardan hangisini kullanan araçların kapalı otoparka kabul edilmesi yasaktır?",
        options: [
          "LPG",
          "Benzin",
          "Motorin",
          "Biyodizel",
        ],
        correctIndex: 0,
        explanation:
          "LPG havadan ağır olduğu ve kapalı ortamda birikip patlama riski taşıdığı için LPG'li araçlar kapalı otoparka kabul edilmez.",
        difficulty: "orta",
      },
      {
        id: "trafik-83",
        text: "Yaralı veya acil hasta taşıyan özel araç sürücüleri geçiş üstünlüğü hakkını nasıl kullanabilir?",
        options: [
          "Eskort eşliğinde",
          "Seyyar tepe lambası taktırarak",
          "Sesli ve ışıklı işaretler vererek",
          "Araçlarında gözcü bulundurarak",
        ],
        correctIndex: 2,
        explanation:
          "Yaralı/acil hasta taşıyan özel araç sürücüsü, korna ve farlarla sesli ve ışıklı işaretler vererek geçiş üstünlüğünü kullanabilir.",
        difficulty: "orta",
      },
      {
        id: "trafik-84",
        text: "Aşağıdakilerden hangisi otoyolda yapılabilecek davranışlardandır?",
        options: [
          "Geri gitmek",
          "Geriye dönmek",
          "Zorunluluk dışında park etmek",
          "Hızına uygun şeritte gitmek",
        ],
        correctIndex: 3,
        explanation:
          "Otoyolda geri gitmek, dönmek ve park etmek yasaktır; sürücü hızına uygun şeritte seyretmelidir.",
        difficulty: "orta",
      },
    ],
  };

export default category;
