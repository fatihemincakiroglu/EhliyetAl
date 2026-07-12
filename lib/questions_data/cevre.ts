import type { Category } from "../questions";

const category: Category = {
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
          "Motorun ömrünü uzatır",
          "Yakıt tasarrufu sağlar",
          "Gereksiz yakıt tüketimine ve hava kirliliğine katkıda bulunur",
        ],
        correctIndex: 3,
        explanation:
          "Gereksiz yere rölantide çalıştırılan motor, hem yakıtı boşa harcar hem de gereksiz emisyon salınımına neden olur.",
        difficulty: "kolay",
      },
      {
        id: "cevre-2",
        text: "Katalitik konvertörün araçtaki görevi nedir?",
        options: [
          "Egzoz gazındaki zararlı bileşenleri daha az zararlı hâle dönüştürmek",
          "Motor yağını temizlemek",
          "Aracın hızını artırmak",
          "Lastik ömrünü uzatmak",
        ],
        correctIndex: 0,
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
          "Yakıt tüketimini artırır",
          "Hiçbir çevresel faydası yoktur",
          "Kişi başına düşen egzoz emisyonunu ve trafik yoğunluğunu azaltır",
          "Sadece maliyeti düşürür, çevreyle ilgisi yoktur",
        ],
        correctIndex: 2,
        explanation:
          "Toplu taşıma, aynı yolculuğu daha az araçla yaparak kişi başına düşen emisyonu ve trafik yoğunluğunu azaltır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-5",
        text: "Şerit değiştirirken sinyal vermek trafikte hangi değere örnektir?",
        options: [
          "Bencillik",
          "Rekabetçilik",
          "Hız tutkusu",
          "Diğer sürücülere karşı saygı ve öngörülebilirlik",
        ],
        correctIndex: 3,
        explanation:
          "Sinyal vermek, diğer sürücülere niyetinizi önceden bildirerek trafikte saygılı ve öngörülebilir bir davranış sergilemektir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-6",
        text: "Korna kullanımıyla ilgili trafik adabına uygun davranış hangisidir?",
        options: [
          "Sadece tehlikeyi önlemek gibi gerekli durumlarda korna kullanmak",
          "Sürekli ve gereksiz yere korna çalmak",
          "Öfke anlarında korna çalmak",
          "Trafik sıkışıklığında sürekli korna çalmak",
        ],
        correctIndex: 0,
        explanation:
          "Korna, yalnızca bir tehlikeyi önlemek veya uyarmak gibi gerçekten gerekli durumlarda kullanılmalı, gereksiz gürültü kirliliğine yol açılmamalıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-7",
        text: "Bir sürücünün aracını park ederken diğer yol kullanıcılarına saygılı davranışı nasıl olmalıdır?",
        options: [
          "Sadece kendi işine bakması yeterlidir",
          "Görüşü kapatacak veya manevra engeli oluşturacak yerlere park etmemelidir",
          "Engelli park yerlerine gerektiğinde park edebilir",
          "Yaya geçidine yakın park etmesi sorun değildir",
        ],
        correctIndex: 1,
        explanation:
          "Sorumlu bir sürücü, park ederken diğer araçların ve yayaların görüşünü kapatmayacak ve manevra yapmasını zorlaştırmayacak şekilde davranır.",
        difficulty: "orta",
      },
      {
        id: "cevre-8",
        text: "Yayaya öncelik vermek trafikte hangi değerin bir göstergesidir?",
        options: [
          "Bencillik",
          "Aceleci davranış",
          "Empati ve karşılıklı saygı",
          "Kural ihlali",
        ],
        correctIndex: 2,
        explanation:
          "Yayaya öncelik vermek, sürücünün kendisini yayanın yerine koyarak gösterdiği empati ve saygının bir yansımasıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-9",
        text: "Motorlu taşıt egzozundan çıkan zararlı gazların insan sağlığına etkisi nedir?",
        options: [
          "Hiçbir sağlık etkisi yoktur",
          "Sadece bitkileri etkiler",
          "Sadece gece saatlerinde etkilidir",
          "Solunum yolu rahatsızlıklarına ve hava kirliliğine katkıda bulunabilir",
        ],
        correctIndex: 3,
        explanation:
          "Egzoz gazlarındaki zararlı bileşenler hava kirliliğine katkıda bulunur ve uzun vadede solunum yolu rahatsızlıklarına yol açabilir.",
        difficulty: "orta",
      },
      {
        id: "cevre-10",
        text: "Trafikte 'road rage' olarak bilinen sürücü öfkesiyle karşılaşan bir sürücünün en doğru tepkisi nedir?",
        options: [
          "Sakin kalıp tartışmadan uzaklaşmak",
          "Aynı şekilde agresif tepki vermek",
          "Aracını durdurup tartışmaya girmek",
          "Diğer sürücüyü takip etmek",
        ],
        correctIndex: 0,
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
          "Daha ucuz olmaları",
          "Kullanım sırasında egzoz emisyonu üretmemeleri",
          "Daha az bakım gerektirmeleri",
        ],
        correctIndex: 2,
        explanation:
          "Elektrikli araçlar kullanım sırasında egzoz gazı salmadıkları için yerel hava kirliliğine katkıları içten yanmalı araçlara göre daha azdır.",
        difficulty: "orta",
      },
      {
        id: "cevre-13",
        text: "Trafikte diğer sürücülerin hatalarına karşı hoşgörülü davranmanın faydası nedir?",
        options: [
          "Sürücüyü zayıf gösterir",
          "Hiçbir faydası yoktur",
          "Sadece zaman kaybettirir",
          "Trafik güvenliğini ve genel atmosferi olumlu etkiler",
        ],
        correctIndex: 3,
        explanation:
          "Küçük hatalara karşı hoşgörülü olmak, gerginliği azaltarak trafik ortamının genel güvenliğine ve huzuruna katkı sağlar.",
        difficulty: "kolay",
      },
      {
        id: "cevre-14",
        text: "Aracını uzun süre kullanmayacak bir sürücünün çevre bilincine uygun davranışı hangisidir?",
        options: [
          "Aracı gereksiz yere çalıştırmamak",
          "Motoru sürekli rölantide çalıştırmak",
          "Farları sürekli açık bırakmak",
          "Klimayı sürekli çalışır durumda bırakmak",
        ],
        correctIndex: 0,
        explanation:
          "Kullanılmayacak bir aracı gereksiz yere çalıştırmamak, hem yakıt israfını hem de gereksiz emisyonu önler.",
        difficulty: "kolay",
      },
      {
        id: "cevre-15",
        text: "Sürücülerin kurallara sadece ceza almamak için değil, gerçekten benimseyerek uyması neyi gösterir?",
        options: [
          "Sadece korkuyla hareket edildiğini",
          "Trafik adabının içselleştirildiğini",
          "Kuralların gereksiz olduğunu",
          "Kişisel bir tercih olmadığını",
        ],
        correctIndex: 1,
        explanation:
          "Kuralların ceza kaygısıyla değil güvenlik bilinciyle benimsenmesi, sürücünün trafik adabını gerçek anlamda içselleştirdiğini gösterir.",
        difficulty: "zor",
      },
      {
        id: "cevre-16",
        text: "Sürücünün trafikte başka bir sürücünün hatasına karşı sabırlı olması hangi değerle ilişkilidir?",
        options: [
          "Bencillik",
          "İnatlaşma",
          "Hoşgörü",
          "Kayıtsızlık",
        ],
        correctIndex: 2,
        explanation:
          "Başkalarının hatalarına karşı sabırlı ve anlayışlı olmak, trafik adabının temel değerlerinden biri olan hoşgörüyle ilişkilidir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-17",
        text: "Bir sürücünün aracını her zaman kurallara uygun şekilde park etmesi, engelli veya yaşlı bireyler için neden önemlidir?",
        options: [
          "Hiçbir önemi yoktur",
          "Sadece estetik bir kaygıdır",
          "Sadece park cezası almamak içindir",
          "Onların güvenli ve engelsiz hareket edebilmesini sağlar",
        ],
        correctIndex: 3,
        explanation:
          "Kurallara uygun park etmek, özellikle engelli ve yaşlı bireylerin kaldırım ve geçitlerde güvenle hareket edebilmesini sağlar.",
        difficulty: "kolay",
      },
      {
        id: "cevre-18",
        text: "Trafikte 'defansif sürüş' kavramı neyi ifade eder?",
        options: [
          "Olası riskleri önceden tahmin ederek dikkatli ve hazırlıklı sürüş yapmak",
          "Sürekli agresif ve hızlı sürüş yapmak",
          "Sadece kurallara uymadan sürüş yapmak",
          "Sadece gece sürüş yapmak",
        ],
        correctIndex: 0,
        explanation:
          "Defansif sürüş, diğer sürücülerin olası hatalarını ve yol risklerini önceden tahmin ederek buna göre hazırlıklı ve temkinli sürmektir.",
        difficulty: "orta",
      },
      {
        id: "cevre-19",
        text: "Bir sürücünün aracını düzenli yıkatması dışında, çevreye duyarlı araç bakımı için önerilen davranış nedir?",
        options: [
          "Aracı sokakta suyla serbestçe yıkamak",
          "Yağ ve kimyasal değişimlerini yetkili servislerde yaptırmak",
          "Yıkama suyunu doğrudan kanalizasyona akıtmak",
          "Hiçbir bakım yapmamak",
        ],
        correctIndex: 1,
        explanation:
          "Yağ ve kimyasal değişimlerinin yetkili servislerde yapılması, bu maddelerin çevreye kontrolsüz şekilde yayılmasını önler.",
        difficulty: "orta",
      },
      {
        id: "cevre-20",
        text: "Trafikte 'empati' kurmak ne anlama gelir?",
        options: [
          "Sadece kendi çıkarını düşünmek",
          "Diğer sürücüleri görmezden gelmek",
          "Kendini diğer yol kullanıcılarının yerine koyup onların durumunu anlamaya çalışmak",
          "Sadece hız yapmak",
        ],
        correctIndex: 2,
        explanation:
          "Trafikte empati, kendini yaya, bisikletli veya diğer sürücülerin yerine koyarak onların ihtiyaç ve risklerini anlamaya çalışmaktır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-21",
        text: "Aracını yıkarken kullanılan suyun ve kimyasalların doğrudan toprağa veya dereye karışması neye yol açabilir?",
        options: [
          "Hiçbir etkisi olmaz",
          "Bitkilerin daha hızlı büyümesini sağlar",
          "Sadece kötü koku oluşturur",
          "Su kaynaklarının ve toprağın kirlenmesine yol açabilir",
        ],
        correctIndex: 3,
        explanation:
          "Araç yıkama kimyasalları ve yağ kalıntıları, kontrolsüz şekilde doğaya karıştığında su kaynaklarını ve toprağı kirletebilir.",
        difficulty: "orta",
      },
      {
        id: "cevre-22",
        text: "Sürücülerin trafikte birbirlerine karşı gösterdiği nezaketin toplumsal faydası nedir?",
        options: [
          "Trafik kültürünün gelişmesine ve kaza riskinin azalmasına katkı sağlar",
          "Hiçbir faydası yoktur",
          "Sadece bireysel bir tercihtir, toplumu etkilemez",
          "Yalnızca zaman kaybettirir",
        ],
        correctIndex: 0,
        explanation:
          "Sürücüler arasındaki nezaket ve saygı, genel trafik kültürünün gelişmesine ve kaza riskinin azalmasına toplumsal düzeyde katkı sağlar.",
        difficulty: "kolay",
      },
      {
        id: "cevre-23",
        text: "Bir sürücünün trafikte 'sorumluluk sahibi' olması ne anlama gelir?",
        options: [
          "Sadece kendi aracının bakımını yapması",
          "Davranışlarının başkalarına olan etkisini düşünerek hareket etmesi",
          "Trafik kurallarını gerektiğinde görmezden gelmesi",
          "Sadece hız sınırına uyması",
        ],
        correctIndex: 1,
        explanation:
          "Sorumluluk sahibi bir sürücü, kendi davranışlarının diğer yol kullanıcılarına olan etkisini düşünerek hareket eder.",
        difficulty: "orta",
      },
      {
        id: "cevre-24",
        text: "Trafikte 'öngörülü sürücü' olmak neyi gerektirir?",
        options: [
          "Sadece kendi şeridine bakmak",
          "Sadece hızlı tepki vermek",
          "Yol, hava ve diğer araçların olası hareketlerini önceden değerlendirip ona göre davranmak",
          "Diğer sürücülerin ne yapacağını hiç düşünmemek",
        ],
        correctIndex: 2,
        explanation:
          "Öngörülü bir sürücü, yol koşullarını ve diğer araçların olası hareketlerini önceden değerlendirerek ani durumlara hazırlıklı olur.",
        difficulty: "zor",
      },
      {
        id: "cevre-25",
        text: "Sürücülerin trafikte çevreye ve topluma duyarlı davranışlar sergilemesinin uzun vadeli faydası nedir?",
        options: [
          "Sadece kişisel imaj kazanmak",
          "Hiçbir uzun vadeli faydası yoktur",
          "Sadece yakıt tasarrufu sağlamak",
          "Daha güvenli, sürdürülebilir ve yaşanabilir bir trafik ortamı oluşmasına katkı sağlamak",
        ],
        correctIndex: 3,
        explanation:
          "Çevreye ve topluma duyarlı sürücü davranışları, uzun vadede daha güvenli ve sürdürülebilir bir trafik ortamının oluşmasına katkı sağlar.",
        difficulty: "orta",
      },
      {
        id: "cevre-26",
        text: "Ani hızlanma ve ani frenlemeden kaçınarak sabit ve dengeli bir hızda sürüş yapmanın (eko sürüş) faydası nedir?",
        options: [
          "Yakıt tüketimini ve zararlı emisyonları azaltır",
          "Sadece aracın performansını artırır, çevreyle ilgisi yoktur",
          "Yakıt tüketimini artırır ama aracı korur",
          "Hiçbir etkisi yoktur",
        ],
        correctIndex: 0,
        explanation:
          "Ani hızlanma ve frenlemeler daha fazla yakıt tüketimine ve daha fazla zararlı gaz salınımına yol açar; dengeli ve öngörülü sürüş hem yakıt tasarrufu sağlar hem de emisyonu azaltır.",
        difficulty: "orta",
      },
      {
        id: "cevre-27",
        text: "Aracın egzoz sistemini standart dışı, gürültülü çıkacak şekilde değiştirmek (modifiye etmek) neden sakıncalıdır?",
        options: [
          "Sadece aracın görünümünü bozar, başka sakıncası yoktur",
          "Gürültü kirliliğine yol açar ve mevzuata aykırıdır",
          "Yakıt tüketimini azaltır, bu yüzden çevreye faydalıdır",
          "Trafik kurallarıyla hiçbir ilgisi yoktur",
        ],
        correctIndex: 1,
        explanation:
          "Standart dışı egzoz sistemleri aşırı gürültü üreterek gürültü kirliliğine yol açar; bu hem çevredeki insanları rahatsız eder hem de trafik mevzuatına aykırıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-28",
        text: "Aynı güzergaha giden kişilerin tek bir araçla birlikte seyahat etmesi (araç paylaşımı) çevresel açıdan neden faydalıdır?",
        options: [
          "Yoldaki toplam araç sayısını azaltarak trafik yoğunluğunu ve emisyonu düşürür",
          "Yakıt tüketimini artırır",
          "Trafik kazalarını artırır",
          "Çevresel açıdan hiçbir etkisi yoktur",
        ],
        correctIndex: 0,
        explanation:
          "Araç paylaşımı, aynı güzergahta seyreden araç sayısını azaltarak hem trafik yoğunluğunu hem de toplam yakıt tüketimi ve emisyon miktarını düşürür.",
        difficulty: "kolay",
      },
      {
        id: "cevre-29",
        text: "Engelli bireyler için ayrılmış park yerini engelli kartı olmadan kullanan bir sürücünün davranışı nasıl değerlendirilir?",
        options: [
          "Sorun teşkil etmez, herkes kullanabilir",
          "Toplumsal duyarlılık ve sorumluluk açısından uygunsuz bir davranıştır",
          "Sadece boşsa kullanılabilir, kural ihlali sayılmaz",
          "Yalnızca gece saatlerinde uygunsuzdur",
        ],
        correctIndex: 1,
        explanation:
          "Engelliler için ayrılmış park yerlerini hak sahibi olmadan kullanmak, hem kurallara hem de gerçekten ihtiyacı olan bireylere karşı toplumsal sorumluluğa aykırı bir davranıştır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-30",
        text: "Hız limitlerine uymanın yakıt tüketimi ve emisyon açısından etkisi nedir?",
        options: [
          "Hız limitlerine uymanın yakıt tüketimiyle hiçbir ilgisi yoktur",
          "Aşırı yüksek hızlarda hava direnci arttığından yakıt tüketimi ve emisyon da artar",
          "Yüksek hız her zaman daha az yakıt tüketimi sağlar",
          "Sadece motor gücünü etkiler, yakıtla ilgisi yoktur",
        ],
        correctIndex: 1,
        explanation:
          "Hız arttıkça hava direnci de arttığından motor daha fazla efor harcar; bu da yakıt tüketimini ve zararlı gaz salınımını artırır. Hız limitlerine uymak yakıt tasarrufuna da katkı sağlar.",
        difficulty: "orta",
      },
      {
        id: "cevre-31",
        text: "Bisiklet yolu bulunan bir caddede motorlu taşıtını bu yola park eden bir sürücünün davranışı hakkında ne söylenebilir?",
        options: [
          "Kısa süreliğine park etmek sorun oluşturmaz",
          "Bisikletlilerin güvenli geçişini engellediği için hem kural ihlali hem de saygısızca bir davranıştır",
          "Bisiklet yolları sadece gündüz kullanıldığı için gece park edilebilir",
          "Trafik kuralları bisiklet yollarını kapsamaz",
        ],
        correctIndex: 1,
        explanation:
          "Bisiklet yoluna park etmek, bisikletlileri motorlu trafiğe çıkmaya zorlayarak güvenliklerini tehlikeye atar; bu hem bir kural ihlali hem de diğer yol kullanıcılarına saygısızlıktır.",
        difficulty: "orta",
      },
      {
        id: "cevre-32",
        text: "Geçerli sürücü belgesi olmayan bir kişiye aracını kullandıran sürücünün bu davranışı nasıl değerlendirilir?",
        options: [
          "Küçük bir iyilik olduğu için sorun teşkil etmez",
          "Hem kendisinin hem de toplumun güvenliğini riske atan sorumsuz bir davranıştır",
          "Sadece kısa mesafelerde yapılırsa sakıncası yoktur",
          "Trafik güvenliğiyle ilgisi olmayan kişisel bir tercihtir",
        ],
        correctIndex: 1,
        explanation:
          "Ehliyeti olmayan bir kişiye araç kullandırmak, o kişinin trafik kurallarını ve güvenli sürüş bilgisini yeterince bilmiyor olabileceği anlamına gelir; bu hem kanunen hem de güvenlik açısından ciddi bir sorumsuzluktur.",
        difficulty: "orta",
      },
      {
        id: "cevre-33",
        text: "Aracın bagajında veya üzerinde gereksiz yere ağır yük taşımanın çevresel etkisi nedir?",
        options: [
          "Hiçbir etkisi yoktur, araç ağırlığı yakıt tüketimini etkilemez",
          "Aracın ağırlığı arttıkça yakıt tüketimi ve emisyon da artar",
          "Yakıt tüketimini azaltır",
          "Sadece lastik ömrünü uzatır",
        ],
        correctIndex: 1,
        explanation:
          "Araç ağırlığı arttıkça motorun harcaması gereken enerji de arttığından yakıt tüketimi ve buna bağlı emisyon miktarı yükselir; gereksiz yüklerden kaçınmak hem ekonomik hem çevresel açıdan faydalıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-34",
        text: "Alkol en çok beyin hücrelerini etkiler ve merkezi sinir sisteminde olumsuz etki yapar. Buna göre aşağıdakilerden hangisi bu durumun sonuçlarındandır?",
        options: [
          "Karar verme ve kendini kontrol yeteneğinin azalması",
          "Yollarda tehdit unsuru oluşumunun azalması",
          "Kaza yapma riskinin azalması",
          "Sürüş yeteneğinin artması",
        ],
        correctIndex: 0,
        explanation:
          "Alkol, karar verme ve kendini kontrol etme yeteneğini azaltarak kaza riskini artırır.",
        difficulty: "orta",
      },
      {
        id: "cevre-35",
        text: "Aşağıdakilerden hangisi atıkların çevreye verdiği zararlardan biri değildir?",
        options: [
          "Kötü koku yayması",
          "Çirkin görünüm arz etmesi",
          "Hastalık taşıyan zararlıların üremesine sebep olması",
          "Toplanıp işlenerek tekrar kullanılabilir hâle getirilmesi",
        ],
        correctIndex: 3,
        explanation:
          "Atıkların geri dönüştürülüp tekrar kullanılması bir zarar değil, çevreye faydalı bir uygulamadır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-36",
        text: "Sürücü, trafikteki bir kural ihlalinde kendisinin ya da sevdiklerinin canını tehlikeye attığının farkında olmalıdır. Bu farkındalığı kazanmak için ne yapılmalıdır?",
        options: [
          "Her kuralın altında yatan güvenlik gerekçelerinin sorgulanıp öğrenilmesi",
          "İhlalin sonucunda sadece maddi ceza olduğunun düşünülmesi",
          "Karşılıklı saygının öncelikle başkalarından beklenmesi",
          "Kızgın ve yarışmacı motivasyonla araç kullanılması",
        ],
        correctIndex: 0,
        explanation:
          "Kuralların güvenlik gerekçelerini sorgulayıp öğrenmek, sürücüde gerçek bir farkındalık ve içselleştirme sağlar.",
        difficulty: "orta",
      },
      {
        id: "cevre-37",
        text: "Sürücünün trafikte hangi davranışı diğer sürücülerin dikkatinin dağılmasına ya da paniğe kapılmalarına sebep olabilir?",
        options: [
          "Davranışlarının sonuçlarını düşünerek hareket etmesi",
          "Sürekli şerit değiştirerek (slalom) araç kullanması",
          "Trafik kurallarının bilincinde olması",
          "Davranışlarının sorumluluğunu üstlenmesi",
        ],
        correctIndex: 1,
        explanation:
          "Sürekli şerit değiştirmek (slalom) diğer sürücülerin dikkatini dağıtır ve panik yaratır.",
        difficulty: "orta",
      },
      {
        id: "cevre-38",
        text: "Ters yönden gelen sürücüye 'Bu sokak tek yönlü, herhalde girişteki levhayı görmediniz, lütfen dikkatli olun.' diyen bir sürücü hangi değere uygun davranmıştır?",
        options: [
          "İnatlaşmaya",
          "Aşırı tepki göstermeye",
          "Kaba ve saldırgan davranmaya",
          "Trafik kültüründe birbirini uyarmaya",
        ],
        correctIndex: 3,
        explanation:
          "Nazik ve yapıcı biçimde uyarı yapmak, trafik kültüründe birbirini uyarma değerine uygun davranıştır.",
        difficulty: "orta",
      },
      {
        id: "cevre-39",
        text: "Geçilmekte olan araç sürücüsünün yavaşlayıp geçen araca kolaylık sağlaması durumu trafikte hangi değerle ifade edilir?",
        options: [
          "Bencillik",
          "İnatlaşmak",
          "Diğergamlık",
          "Sorumsuzluk",
        ],
        correctIndex: 2,
        explanation:
          "Başkasına kolaylık sağlamak, kendinden çok başkasını düşünmek diğergamlık değeridir.",
        difficulty: "orta",
      },
      {
        id: "cevre-40",
        text: "Trafikte öfke duygusuna kapılan sürücülerde aşağıdakilerden hangisinin görülme olasılığı diğerlerine göre daha fazladır?",
        options: [
          "Dikkatin dağılması",
          "Kural ihlallerinin azalması",
          "Direksiyon hâkimiyetinin artması",
          "Kazaya karışma olasılığının azalması",
        ],
        correctIndex: 0,
        explanation:
          "Öfke, dikkati dağıtır ve kaza riskini artırır; diğer seçenekler öfkenin olumlu olmayan gerçeğiyle çelişir.",
        difficulty: "orta",
      },
      {
        id: "cevre-41",
        text: "Aşağıdakilerden hangisi çevre kirliliğini önleyici tedbirlerden biri değildir?",
        options: [
          "Kısa mesafeli yerlere yürüyerek gidilmesi",
          "İniş eğimli yollarda motorun durdurulması",
          "Trafiğin yoğun olmadığı yolların seçilmesi",
          "Mümkün olduğunca toplu taşıma kullanılması",
        ],
        correctIndex: 1,
        explanation:
          "İniş eğimli yolda motoru durdurmak fren ve direksiyon desteğini kaybettirir; güvenlik açısından yanlıştır ve çevre tedbiri değildir.",
        difficulty: "orta",
      },
      {
        id: "cevre-42",
        text: "Aşağıdakilerden hangisi trafikte çevreyi korumaya yönelik davranıştır?",
        options: [
          "Sigara izmaritlerinin araç dışına atılması",
          "Motor yağı, asit vb. maddelerin toprağa dökülmesi",
          "Dökülecek, tozacak şekilde yük taşınması",
          "Zorunluluk dışında korna çalmaktan uzak durulması",
        ],
        correctIndex: 3,
        explanation:
          "Gereksiz korna çalmaktan kaçınmak gürültü kirliliğini azaltır ve çevreyi korur.",
        difficulty: "kolay",
      },
      {
        id: "cevre-43",
        text: "Trafik adabı; trafik içinde sorumluluk, yardımlaşma, tahammül, saygı, fedakârlık, sabır gibi değerlere sahip olabilme yetisidir. Bu tanıma göre boş bırakılan kavram hangisidir?",
        options: [
          "Beden dili",
          "Konuşma üslubu",
          "Trafik adabı",
          "Trafikte hak ihlali",
        ],
        correctIndex: 2,
        explanation:
          "Tanımı yapılan kavram trafik adabıdır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-44",
        text: "Aşağıdakilerden hangisi sorumluluk duygusuna sahip bir sürücünün özelliğidir?",
        options: [
          "Trafik kurallarını önemsemeden araç kullanması",
          "Davranışlarının sonuçlarını düşünerek hareket etmesi",
          "Sevdiklerinin hayatını tehlikeye atmaktan çekinmemesi",
          "Kendi yetkisindeki olayı başkalarının üstlenmesini beklemesi",
        ],
        correctIndex: 1,
        explanation:
          "Sorumluluk sahibi sürücü, davranışlarının olası sonuçlarını düşünerek hareket eder.",
        difficulty: "kolay",
      },
      {
        id: "cevre-45",
        text: "Aracını park ettikten sonra durduğu yerin diğer yol kullanıcıları için görme veya manevra engeli oluşturup oluşturmadığını kontrol eden sürücü hangi değere uygun davranmıştır?",
        options: [
          "Empati",
          "Tahammül",
          "Beden dili",
          "Konuşma üslubu",
        ],
        correctIndex: 0,
        explanation:
          "Kendini diğer yol kullanıcılarının yerine koyarak park yerini kontrol etmek empati değeridir.",
        difficulty: "orta",
      },
      {
        id: "cevre-46",
        text: "Aşağıdakilerden hangisi öfkenin vücutta ortaya çıkardığı fizyolojik tepkilerden biri değildir?",
        options: [
          "Yüzün kızarması",
          "Kaşların çatılması",
          "Yumrukların sıkılması",
          "Kontrollü davranılması",
        ],
        correctIndex: 3,
        explanation:
          "Kontrollü davranmak öfkenin fizyolojik bir tepkisi değil, öfke yönetiminin bir sonucudur.",
        difficulty: "orta",
      },
      {
        id: "cevre-47",
        text: "'- - - -; trafik içinde sorumluluk, yardımlaşma, tahammül, saygı, fedakârlık, sabır gibi değerlere sahip olabilme yetisidir.' Boş bırakılan yere hangisi yazılmalıdır?",
        options: [
          "Beden dili",
          "Konuşma üslubu",
          "Trafik adabı",
          "Trafikte hak ihlali",
        ],
        correctIndex: 2,
        explanation:
          "Bu değerlere sahip olabilme yetisi trafik adabı olarak tanımlanır.",
        difficulty: "kolay",
      },
      {
        id: "cevre-48",
        text: "Trafik içinde hatalı davranış sergileyen bir sürücüye nezaket ve saygı çerçevesinde uyarı yapılması neyi azaltır?",
        options: [
          "Trafikteki araç sayısını",
          "Sürücünün ve diğerlerinin kaza yapma riskini",
          "Yayaların yaya geçidi kullanma oranını",
          "Diğer sürücülerin kurallara uyma yüzdesini",
        ],
        correctIndex: 1,
        explanation:
          "Hatalı sürücüyü nazikçe uyarmak, hem o sürücünün hem diğerlerinin kaza yapma riskini azaltır.",
        difficulty: "orta",
      },
      {
        id: "cevre-49",
        text: "Aracını kaldırıma park eden sürücü yayaların araç yoluna çıkmasına neden olur. Oysa - - - - düzeyi yüksek bir sürücü kendini yayanın yerine koyar ve kaldırıma park etmez. Boşluğa hangisi gelmelidir?",
        options: [
          "öfke",
          "empati",
          "bencillik",
          "sorumsuzluk",
        ],
        correctIndex: 1,
        explanation:
          "Kendini yayanın yerine koyabilme empati düzeyinin yüksekliğini gösterir.",
        difficulty: "orta",
      },
      {
        id: "cevre-50",
        text: "Aşağıdakilerden hangisi trafik ortamında sürücülerin en fazla ihtiyaç duyacağı değerlerdendir?",
        options: [
          "Öfke",
          "Hoşgörü",
          "İnatlaşma",
          "Aşırı tepki",
        ],
        correctIndex: 1,
        explanation:
          "Güvenli ve huzurlu trafik ortamı için en çok ihtiyaç duyulan değer hoşgörüdür.",
        difficulty: "kolay",
      },
      {
        id: "cevre-51",
        text: "'Hiçbir toplum 24 saat trafik zabıtası tarafından denetlenemez. Toplum yararına kesintisiz denetim - - - - ile mümkündür.' Boşluğa hangisi gelmelidir?",
        options: [
          "trafik adabı",
          "trafik cezası",
          "trafik terörü",
          "trafik müfettişi",
        ],
        correctIndex: 0,
        explanation:
          "Kesintisiz iç denetim, bireylerin trafik adabını içselleştirmesiyle mümkün olur.",
        difficulty: "orta",
      },
      {
        id: "cevre-52",
        text: "Karlı havada zincir takmaya çalışan bir sürücünün sorununa daha deneyimli başka bir sürücünün çözüm bulması hangi temel değere sahip olunduğunu gösterir?",
        options: [
          "Trafik kültüründe birbirini uyarma",
          "Kendini eleştirme",
          "Yardımlaşma",
          "İnatlaşma",
        ],
        correctIndex: 2,
        explanation:
          "Zorda kalan bir sürücüye yardım etmek yardımlaşma değerini gösterir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-53",
        text: "Öfke yönetiminin amaçlarından biri aşağıdakilerden hangisidir?",
        options: [
          "Öfkeyi bastırmak ya da yok etmek",
          "Kızgınlığa yol açan olayları değiştirmek",
          "İçsel ve dışsal tepkilerde kontrolsüz davranmak",
          "Öfkenin yol açtığı duygusal ve fizyolojik tepkileri azaltmak",
        ],
        correctIndex: 3,
        explanation:
          "Öfke yönetiminin amacı öfkeyi yok etmek değil, yol açtığı duygusal ve fizyolojik tepkileri azaltıp kontrol edebilmektir.",
        difficulty: "orta",
      },
      {
        id: "cevre-54",
        text: "Kendinden çok başkalarını düşünen, başkalarının iyiliği için fedakârlık yapan, özgeci davranış aşağıdakilerden hangisiyle tanımlanır?",
        options: [
          "Bencillik",
          "Saldırganlık",
          "Diğergamlık",
          "Sorumsuzluk",
        ],
        correctIndex: 2,
        explanation:
          "Kendinden çok başkasını düşünen, özgeci davranış diğergamlık olarak tanımlanır.",
        difficulty: "orta",
      },
      {
        id: "cevre-55",
        text: "Bir olay ya da durumda, karşımızdaki kişi hakkında yargıda bulunmadan önce kendimizi onun yerine koyarak durumu onun gibi yaşamamıza ne denir?",
        options: [
          "Öfke",
          "Empati",
          "Bastırma",
          "Engellenme",
        ],
        correctIndex: 1,
        explanation:
          "Kendini karşıdakinin yerine koyup durumu onun gibi hissetmeye empati denir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-56",
        text: "Kırmızı ışıkta beklerken ışık sarıya döner dönmez önündeki araca korna çalan, yeşili 1 saniye bile bekleyemeyen sürücü hangi temel değere sahip değildir?",
        options: [
          "Öfke",
          "İnatlaşma",
          "Sabır",
          "Aşırı tepki",
        ],
        correctIndex: 2,
        explanation:
          "Bu davranış sürücünün sabır değerine sahip olmadığını gösterir.",
        difficulty: "orta",
      },
      {
        id: "cevre-57",
        text: "Aşağıdakilerden hangisi trafikte bireye yapılan hak ihlallerindendir?",
        options: [
          "Aşırı hız yapmaktan kaçınılması",
          "Geçiş önceliğine sahip araçlara yol verilmesi",
          "Trafikte sürücülerin tek başına olmadığının düşünülmesi",
          "Engeli olmadığı hâlde engelliler için ayrılmış yere park edilmesi",
        ],
        correctIndex: 3,
        explanation:
          "Engelli olmadığı hâlde engelli park yerine park etmek, bireyin hakkının ihlalidir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-58",
        text: "Trafik kazası geçiren kişiler için 'canlarına zarar gelmese bile psikolojik olarak zarar görürler' ve 'bu bozuk psikoloji ailelerine ve topluma olumsuz yansır' ifadeleri için ne söylenebilir?",
        options: [
          "I. doğru, II. yanlış",
          "I. yanlış, II. doğru",
          "Her ikisi de doğru",
          "Her ikisi de yanlış",
        ],
        correctIndex: 2,
        explanation:
          "Kaza kişide psikolojik hasar bırakır ve bu durum aileye/topluma da olumsuz yansır; her iki ifade de doğrudur.",
        difficulty: "orta",
      },
      {
        id: "cevre-59",
        text: "Aşağıdakilerden hangisi trafik kazalarının topluma verdiği zararlardan biri değildir?",
        options: [
          "Üretim ve refah kayıplarının yaşanması",
          "Kara yollarının zamanından önce yıpranması",
          "Uzun vadede kalkınmaya olumlu etki yapması",
          "Açılan davalarla yargıda iş yükünün artması",
        ],
        correctIndex: 2,
        explanation:
          "Kazaların kalkınmaya olumlu etkisi olmaz; aksine ekonomik ve toplumsal kayıplara yol açar.",
        difficulty: "orta",
      },
      {
        id: "cevre-60",
        text: "Trafik adabı için 'denetim ve ceza korkusuyla yazılı kurallara uymak' ve 'yazılı olmayan, karşılıklı anlayış ve empati gerektiren davranışları alışkanlık hâline getirmek' ifadeleri için ne söylenebilir?",
        options: [
          "I. doğru, II. yanlış",
          "I. yanlış, II. doğru",
          "Her ikisi de doğru",
          "Her ikisi de yanlış",
        ],
        correctIndex: 1,
        explanation:
          "Trafik adabı ceza korkusuyla değil, karşılıklı anlayış ve empatiye dayalı davranışların alışkanlığa dönüşmesidir; bu nedenle I yanlış, II doğrudur.",
        difficulty: "orta",
      },
      {
        id: "cevre-61",
        text: "Ailesiyle yolculuk yapan bir sürücü hız limitlerini aşarak ailesinin hayatını tehlikeye attığında trafikte hangi temel değeri yerine getirmemiş olur?",
        options: [
          "Hırçınlık",
          "Sorumluluk",
          "Bencillik",
          "Hoşnutsuzluk",
        ],
        correctIndex: 1,
        explanation:
          "Sevdiklerinin canını riske atmak, sürücünün sorumluluk değerini yerine getirmediğini gösterir.",
        difficulty: "orta",
      },
      {
        id: "cevre-62",
        text: "Yoğun trafikte bir dizi hâlinde giden sürücülerin önüne geçip trafiği daha da sıkıştırarak yoluna devam etmeyen sürücü hangi özelliğe sahiptir?",
        options: [
          "Bencil",
          "Sorumsuz",
          "Görgü seviyesi düşük",
          "Empati düzeyi yüksek",
        ],
        correctIndex: 3,
        explanation:
          "Başkalarını düşünüp trafiği sıkıştırmaktan kaçınmak, empati düzeyi yüksek bir sürücünün davranışıdır.",
        difficulty: "orta",
      },
      {
        id: "cevre-63",
        text: "Seyir hâlindeki sürücünün yaptığı bir hatadan dolayı eliyle veya yüz ifadesiyle diğer sürücülerden özür dilemesi hangisinin kullanıldığına örnektir?",
        options: [
          "Beden dilinin",
          "Bencilliğin",
          "İnatlaşmanın",
          "Tahammülsüzlüğün",
        ],
        correctIndex: 0,
        explanation:
          "El ve yüz ifadesiyle özür dilemek beden dilinin olumlu kullanımına örnektir.",
        difficulty: "orta",
      },
      {
        id: "cevre-64",
        text: "Trafik psikologlarına göre insan nasıl yaşarsa öyle araç kullanır. Buna göre stresle olumlu baş etme konusunda sorun yaşayan sürücülerin genel olarak hangi değere sahip olmadığı söylenir?",
        options: [
          "Sabır",
          "Öfke",
          "Bencillik",
          "İnatlaşma",
        ],
        correctIndex: 0,
        explanation:
          "Stresle baş edemeyen sürücüler genellikle sabır değerinden yoksundur.",
        difficulty: "orta",
      },
      {
        id: "cevre-65",
        text: "Aracı arıza yaptığı için yolda kalan ve trafiği aksatan bir sürücüye yoldan geçen başka bir sürücünün durup çözüm bulması hangi temel değere örnektir?",
        options: [
          "Yardımlaşmaya",
          "Öfke duygusuna",
          "Bencil davranmaya",
          "Aşırı tepki göstermeye",
        ],
        correctIndex: 0,
        explanation:
          "Yolda kalan sürücüye durup yardım etmek yardımlaşma değerine örnektir.",
        difficulty: "kolay",
      },
      {
        id: "cevre-66",
        text: "Öndeki araç yol kenarına park etmeye çalışırken arkadan gelen aracın onu beklemesi trafikte hangi değere sahip olunduğunu gösterir?",
        options: [
          "Öfke",
          "Sabır",
          "İnatlaşma",
          "Aşırı tepki",
        ],
        correctIndex: 1,
        explanation:
          "Park etmeye çalışan aracı beklemek sabır değerini gösterir.",
        difficulty: "kolay",
      },
    ],
  };

export default category;
