import type { Category } from "../questions";

const category: Category = {
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
          "Önce fotoğraf çekmek, sonra yardım çağırmak",
          "Önce olay yerinin güvenliğini sağlamak, sonra yaralıyı değerlendirmek",
          "Sadece yardım çağırıp beklemek",
        ],
        correctIndex: 2,
        explanation:
          "İlk yardımda öncelik her zaman olay yerinin güvenliğini sağlamaktır; ardından yaralı değerlendirilir ve gerekirse yardım çağrılır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-2",
        text: "Bir kazazedenin bilincinin açık olup olmadığını anlamak için ilk adım nedir?",
        options: [
          "Doğrudan suni solunum yapmak",
          "Yaralıyı sarsarak uyandırmaya çalışmak",
          "Hemen kalp masajına başlamak",
          "Sesli seslenmek ve hafifçe omzuna dokunarak tepki almaya çalışmak",
        ],
        correctIndex: 3,
        explanation:
          "Bilinç kontrolü, kazazedeye sesli seslenerek ve hafifçe dokunarak tepki alınıp alınmadığının değerlendirilmesiyle yapılır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-3",
        text: "Atardamar (arter) kanamasının ayırt edici özelliği nedir?",
        options: [
          "Açık renkli kanın kalp atımlarıyla uyumlu şekilde fışkırarak akması",
          "Koyu renkli ve sızıntı şeklinde akması",
          "Hiç kanamaması",
          "Sadece yüzeysel olması",
        ],
        correctIndex: 0,
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
          "Bölgeye hemen diş macunu sürülmelidir",
          "Bölge serin (soğuk olmayan) akan suyla soğutulmalıdır",
          "Bölge sıkıca sarılıp hava almaması sağlanmalıdır",
        ],
        correctIndex: 2,
        explanation:
          "Hafif yanıklarda bölge, doku hasarını azaltmak için birkaç dakika serin akan suyla soğutulmalıdır; buz doğrudan uygulanmamalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-6",
        text: "Solunum yolu tamamen tıkanmış, konuşamayan bir yetişkine hangi ilk yardım uygulaması yapılır?",
        options: [
          "Sırtına hafifçe vurmak yeterlidir",
          "Su içirmeye çalışmak",
          "Bekleyip kendiliğinden geçmesini beklemek",
          "Heimlich manevrası (karına baskı uygulama)",
        ],
        correctIndex: 3,
        explanation:
          "Tam solunum yolu tıkanıklığında Heimlich manevrası uygulanarak karına ani baskılarla yabancı cismin çıkarılması hedeflenir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-7",
        text: "Şokun belirtilerinden biri aşağıdakilerden hangisidir?",
        options: [
          "Nabzın hızlı ve zayıf olması, ciltin soluk ve soğuk olması",
          "Cildin sıcak ve kuru olması",
          "Vücut sıcaklığının belirgin şekilde artması",
          "Solunumun yavaşlayıp derinleşmesi",
        ],
        correctIndex: 0,
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
          "10 masaj, 5 solunum",
          "30 masaj, 2 solunum",
          "5 masaj, 5 solunum",
        ],
        correctIndex: 2,
        explanation:
          "Yetişkinlerde temel yaşam desteği, 30 kalp masajı ve ardından 2 yapay solunum şeklinde döngüsel olarak uygulanır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-10",
        text: "Omurga yaralanması şüphesi olan bir kazazedeye yaklaşımda en önemli kural nedir?",
        options: [
          "Hızlıca oturtulmalıdır",
          "Ayağa kaldırılıp yürütülmelidir",
          "Bacakları çekilerek düzeltilmelidir",
          "Kesinlikle gerekmedikçe hareket ettirilmemelidir",
        ],
        correctIndex: 3,
        explanation:
          "Omurga yaralanması şüphesinde kazazede, ek zarar oluşmaması için gerekmedikçe kesinlikle hareket ettirilmemelidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-11",
        text: "Sara nöbeti geçiren bir kişiye ilk yardım sırasında yapılmaması gereken nedir?",
        options: [
          "Kişiyi zorla tutup hareketlerini durdurmaya çalışmak",
          "Çevredeki tehlikeli eşyaları uzaklaştırmak",
          "Nöbet bitene kadar yanında beklemek",
          "Başının altına yumuşak bir şey koymak",
        ],
        correctIndex: 0,
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
          "Aracın plakası",
          "Olayın yeri ve durumun kısa özeti",
          "Hava durumu",
        ],
        correctIndex: 2,
        explanation:
          "Acil çağrıda en önemli bilgi, ekiplerin doğru yere yönlendirilebilmesi için olayın yeri ve kısa bir durum özetidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-14",
        text: "Burun kanaması olan bir kişiye ilk yardım nasıl yapılmalıdır?",
        options: [
          "Baş geriye doğru itilmelidir",
          "Kişi sırtüstü yatırılmalıdır",
          "Burna doğrudan sıcak su uygulanmalıdır",
          "Baş hafifçe öne eğilip burun kanatları birkaç dakika sıkılmalıdır",
        ],
        correctIndex: 3,
        explanation:
          "Burun kanamasında baş hafifçe öne eğilir ve burun kanatları birkaç dakika sıkılarak kanamanın durması beklenir; baş geriye itilirse kan boğaza kaçabilir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-15",
        text: "Bir kazazedede iç kanama şüphesi olduğunda gözlenebilecek genel belirtilerden biri hangisidir?",
        options: [
          "Aşırı susuzluk hissi ile birlikte soluk ve nemli cilt",
          "Cildin sıcak ve kızarık olması",
          "Nabzın yavaş ve güçlü olması",
          "Solunumun yavaşça derinleşmesi",
        ],
        correctIndex: 0,
        explanation:
          "İç kanamada kan kaybına bağlı olarak aşırı susuzluk hissi, soluk ve nemli cilt, hızlı ve zayıf nabız gibi belirtiler görülür.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-16",
        text: "Elektrik çarpması geçiren bir kişiye yaklaşırken ilk yardımcının önceliği ne olmalıdır?",
        options: [
          "Hemen kişiye dokunup çekmek",
          "Akım kaynağını kesmek veya kişiyle akım arasındaki bağlantıyı güvenli şekilde kesmek",
          "Kişiye su dökmek",
          "Kişiyi sarsarak uyandırmaya çalışmak",
        ],
        correctIndex: 1,
        explanation:
          "Elektrik çarpmasında önce akım kaynağı kesilmeli veya kişiyle temas güvenli bir yöntemle kesilmelidir; aksi hâlde ilk yardımcı da çarpılabilir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-17",
        text: "Zehirlenme şüphesi olan bilinci açık bir kişiye ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Hemen kusturulmaya çalışılmalıdır",
          "Bol miktarda süt içirilmelidir",
          "Ne yuttuğu belirlenmeye çalışılmalı ve tıbbi yardım çağrılmalıdır",
          "Kendiliğinden geçmesi beklenmelidir",
        ],
        correctIndex: 2,
        explanation:
          "Zehirlenme şüphesinde kişiyi kusturmaya çalışmak zararlı olabilir; ne yutulduğu belirlenmeli ve vakit kaybetmeden tıbbi yardım çağrılmalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-18",
        text: "Sıcak çarpması (güneş çarpması) belirtisi gösteren bir kişiye ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Güneşte bırakılıp dinlenmesi sağlanmalıdır",
          "Sıcak bir şeyler içirilmelidir",
          "Hemen ayağa kaldırılıp yürütülmelidir",
          "Serin bir yere alınmalı, giysileri gevşetilmeli ve vücudu serinletilmelidir",
        ],
        correctIndex: 3,
        explanation:
          "Sıcak çarpmasında kişi serin bir ortama alınmalı, giysileri gevşetilmeli ve vücut sıcaklığını düşürmek için serinletilmelidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-19",
        text: "Diş kırılması veya düşmesi durumunda ilk yardım olarak ne yapılabilir?",
        options: [
          "Diş bulunabiliyorsa süt veya tükürükte saklanarak en yakın sağlık kuruluşuna gidilmelidir",
          "Diş tamamen atılmalıdır, önemi yoktur",
          "Diş ovularak temizlenmelidir",
          "Diş güneşte kurutulmalıdır",
        ],
        correctIndex: 0,
        explanation:
          "Düşen diş, kökü tutmadan süt gibi bir sıvı içinde saklanarak mümkün olan en kısa sürede diş hekimine ya da sağlık kuruluşuna götürülmelidir.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-20",
        text: "Kazazedenin bilinç durumu değerlendirilirken hangi basit yöntem kullanılır?",
        options: [
          "Sadece nabız sayılır",
          "Sesli seslenme ve hafif dokunmaya verilen tepkiye bakılır",
          "Sadece göz rengine bakılır",
          "Sadece vücut sıcaklığı ölçülür",
        ],
        correctIndex: 1,
        explanation:
          "Bilinç değerlendirmesinde kazazedeye sesli seslenilir ve hafifçe dokunularak tepki verip vermediği gözlemlenir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-21",
        text: "Bir kazazedenin boğuluyor gibi öksürdüğü ama hâlâ konuşabildiği durumda ilk yardımcı ne yapmalıdır?",
        options: [
          "Hemen Heimlich manevrası uygulamalıdır",
          "Sırtına sert vurmalıdır",
          "Öksürerek kendi çıkarmasına izin vermeli ve yakından gözlemlemelidir",
          "Ağzına elini sokup cismi çıkarmaya çalışmalıdır",
        ],
        correctIndex: 2,
        explanation:
          "Kazazede hâlâ öksürebiliyor ve konuşabiliyorsa hava yolu tam tıkanmamıştır; kendi öksürerek çıkarmasına izin verilip yakından gözlemlenmelidir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-22",
        text: "Donma (soğuk ısırması) şüphesi olan bir bölgeye ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Bölge sert şekilde ovuşturulmalıdır",
          "Bölgeye doğrudan sıcak su dökülmelidir",
          "Bölge hareket ettirilerek kan dolaşımı zorlanmalıdır",
          "Bölge kademeli olarak ve ovmadan ılık suyla ısıtılmalıdır",
        ],
        correctIndex: 3,
        explanation:
          "Donmuş bölge ovuşturulmadan, kademeli olarak ılık suyla (sıcak değil) ısıtılmalı ve tıbbi yardım aranmalıdır.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-23",
        text: "Bilinci kapalı ama solunumu ve nabzı olan bir kazazedeye neden koma pozisyonu verilir?",
        options: [
          "Hava yolunun açık kalmasını ve kusmuk gibi sıvıların solunum yoluna kaçmasını önlemek için",
          "Daha rahat uyuması için",
          "Vücut ısısını artırmak için",
          "Kan basıncını düşürmek için",
        ],
        correctIndex: 0,
        explanation:
          "Koma pozisyonu, dilin veya kusmuğun hava yolunu tıkamasını önleyerek solunumun güvenli şekilde sürmesini sağlar.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-24",
        text: "Bir kaza sonrası kazazedenin yanında bulunan ilk yardımcının sakin kalması neden önemlidir?",
        options: [
          "Yalnızca görüntü açısından önemlidir",
          "Doğru kararlar verebilmek ve kazazedeyi de sakinleştirebilmek için önemlidir",
          "Hiçbir önemi yoktur",
          "Sadece kameraya iyi görünmek içindir",
        ],
        correctIndex: 1,
        explanation:
          "Sakin kalan bir ilk yardımcı daha doğru kararlar alabilir, uygulamaları düzgün yapabilir ve kazazedenin de paniğini azaltabilir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-25",
        text: "Araç içinde sıkışmış ve hareket ettirilmesi riskli olan bir kazazedeyle ilgili ilk yardımcının önceliği ne olmalıdır?",
        options: [
          "Zorla dışarı çekmek",
          "Kazazedeyi oturur pozisyona geçirmek",
          "Hayati tehlike yoksa profesyonel ekip gelene kadar kazazedeyi olduğu gibi bırakıp güvenliğini sağlamak",
          "Kazazedeye su içirmek",
        ],
        correctIndex: 2,
        explanation:
          "Hayati tehlike (yangın, patlama vb.) yoksa, sıkışmış bir kazazedeyi zorla çıkarmak ek yaralanmalara yol açabilir; profesyonel ekip beklenmelidir.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-26",
        text: "Kalp krizi geçirdiğinden şüphelenilen bilinci açık bir kişide en sık görülen belirtilerden biri hangisidir?",
        options: [
          "Göğüste baskı hissi, sıkışma veya kola/çeneye yayılan ağrı",
          "Sadece hafif baş dönmesi",
          "Ellerde geçici uyuşma dışında hiçbir belirti olmaz",
          "Yalnızca ayak bileklerinde şişlik",
        ],
        correctIndex: 0,
        explanation:
          "Kalp krizinde tipik belirti; göğüste baskı, sıkışma veya ağırlık hissiyle birlikte kola, çeneye ya da sırta yayılabilen ağrıdır. Bu durumda vakit kaybetmeden 112 aranmalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-27",
        text: "Turnike uygulaması hangi durumda başvurulan bir yöntemdir?",
        options: [
          "Her türlü küçük kesikte rutin olarak uygulanır",
          "Basınç uygulamasıyla durdurulamayan, hayatı tehdit eden şiddetli bir kanamada, son çare olarak uygulanır",
          "Sadece burun kanamalarında kullanılır",
          "Kırık şüphesi olan her bölgeye uygulanır",
        ],
        correctIndex: 1,
        explanation:
          "Turnike, doğrudan basınçla durdurulamayan ve hayatı tehdit eden şiddetli uzuv kanamalarında son çare olarak, kanama noktasının yukarısına uygulanan bir yöntemdir.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-28",
        text: "İkinci derece bir yanıkta (kızarıklık, şiddetli ağrı ve su toplaması ile birlikte) ilk yardım olarak ne yapılmalıdır?",
        options: [
          "Su toplanan kabarcıklar hemen patlatılmalıdır",
          "Bölge serin (ılık-soğuk) suyla soğutulmalı, kabarcıklar patlatılmamalı ve temiz bir örtüyle kapatılmalıdır",
          "Bölgeye doğrudan buz uygulanmalıdır",
          "Yanık bölgesine diş macunu veya yağ sürülmelidir",
        ],
        correctIndex: 1,
        explanation:
          "İkinci derece yanıklarda bölge serin akan suyla soğutulmalı, su toplanan kabarcıklar enfeksiyon riskine karşı patlatılmamalı ve temiz, yapışmayan bir örtüyle kapatılıp tıbbi yardım alınmalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-29",
        text: "Açık kırık ile kapalı kırık arasındaki temel fark nedir?",
        options: [
          "Açık kırıkta kemik ucu deriyi delerek dışarı çıkmıştır, kapalı kırıkta deri bütünlüğü bozulmamıştır",
          "Açık kırık sadece kollarda, kapalı kırık sadece bacaklarda olur",
          "İkisi arasında ilk yardım açısından fark yoktur",
          "Kapalı kırıkta kanama açık kırıktan daha fazladır",
        ],
        correctIndex: 0,
        explanation:
          "Açık kırıkta kemik ucu deriyi yırtarak dışarı çıkar ve enfeksiyon riski yüksektir; kapalı kırıkta ise deri bütünlüğü korunur. Açık kırıklarda yara üzerine doğrudan baskı yapılmamalı, çevresi temiz bezle korunmalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-30",
        text: "Arı sokması sonrası kişide yaygın kızarıklık, yüzde şişlik ve nefes almada zorluk gelişirse bu durum ne olabilir?",
        options: [
          "Basit ve önemsiz bir deri tahrişi",
          "Hayatı tehdit edebilecek alerjik reaksiyon (anafilaksi) belirtisi",
          "Sadece güneş çarpması belirtisi",
          "Kesinlikle kan şekeri düşüklüğü",
        ],
        correctIndex: 1,
        explanation:
          "Sokma sonrası yaygın kızarıklık, yüzde/boğazda şişlik ve nefes darlığı, hayatı tehdit edebilen anafilaksi (şiddetli alerjik reaksiyon) belirtisi olabilir; vakit kaybetmeden 112 aranmalıdır.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-31",
        text: "Aşırı soğuğa maruz kalan bir kişide görülebilecek hipotermi (vücut ısısının aşırı düşmesi) belirtilerinden biri hangisidir?",
        options: [
          "Aşırı terleme ve vücut sıcaklığının yükselmesi",
          "Titreme, uyuşukluk, konuşma bozukluğu ve bilinç bulanıklığı",
          "Sadece ellerde hafif kızarıklık",
          "Nabzın belirgin şekilde hızlanması ve ateş basması",
        ],
        correctIndex: 1,
        explanation:
          "Hipotermide vücut ısısı düştükçe titreme, uyuşukluk, konuşma bozukluğu ve bilinç bulanıklığı görülebilir; kişi sıcak ve kuru bir ortama alınmalı, ıslak giysiler çıkarılmalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-32",
        text: "Kanayan bir yaraya ilk yardım uygulanırken en öncelikli ve etkili yöntem hangisidir?",
        options: [
          "Yara üzerine temiz bir bezle doğrudan ve sürekli baskı uygulamak",
          "Yarayı hemen suyla ovarak temizlemek",
          "Kanamanın kendiliğinden durmasını beklemek",
          "Yara üzerine toz veya krem sürmek",
        ],
        correctIndex: 0,
        explanation:
          "Çoğu kanamada ilk ve en etkili yöntem, yara üzerine temiz bir bez veya gazlı bezle doğrudan ve kesintisiz baskı uygulamaktır; bu kan kaybını yavaşlatır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-33",
        text: "Bilinci kapalı, solunumu ve nabzı olmayan bir kazazede tespit edildiğinde ilk yardımcının önceliği ne olmalıdır?",
        options: [
          "Kazazedeyi sarsarak uyandırmaya çalışmak",
          "112'yi aramak ve gecikmeden kalp masajına (temel yaşam desteğine) başlamak",
          "Kazazedeye su içirmeye çalışmak",
          "Sadece yardım gelene kadar beklemek, hiçbir müdahalede bulunmamak",
        ],
        correctIndex: 1,
        explanation:
          "Solunumu ve nabzı olmayan bir kazazedede zaman hayati önem taşır; 112 aranmalı ve gecikmeden kalp masajı ile temel yaşam desteğine (CPR) başlanmalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-34",
        text: "Aşağıdakilerden hangisi ilk yardımcıda bulunması gereken özelliklerdendir?",
        options: [
          "Telaşlı ve tedirgin olması",
          "İletişim becerilerinin zayıf olması",
          "Önce kendi güvenliğini düşünmeden hareket etmesi",
          "İnsan vücudu ile ilgili temel bilgilere sahip olması",
        ],
        correctIndex: 3,
        explanation:
          "İlk yardımcının insan vücudu ile ilgili temel bilgilere sahip olması, doğru ve güvenli müdahale yapabilmesi için gereklidir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-35",
        text: "Kazazedeye sözlü uyaranla ya da hafifçe omzuna dokunarak 'iyi misiniz?' diye sorularak hangi değerlendirme yapılır?",
        options: [
          "Dolaşım",
          "Bilinç durumu",
          "Solunum",
          "Hava yolu açıklığı",
        ],
        correctIndex: 1,
        explanation:
          "Sözlü uyaran ve hafif dokunuşla kazazedenin verdiği tepki, bilinç durumunun değerlendirilmesini sağlar.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-36",
        text: "Uygulama basamakları 'bir el alına yerleştirilir, diğer elin iki parmağı çene kemiğinin üzerine konur, alından bastırılıp çeneden kaldırılarak baş geriye itilir' olan ve hava yolunu açmak için kullanılan pozisyon hangisidir?",
        options: [
          "Şok pozisyonu",
          "Yarı oturuş pozisyonu",
          "Baş geri-çene yukarı pozisyonu",
          "Yarı yüzükoyun-yan pozisyon",
        ],
        correctIndex: 2,
        explanation:
          "Bu basamaklar baş geri-çene yukarı pozisyonuna aittir; dilin geriye kaçmasını önleyerek hava yolunu açar.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-37",
        text: "Yetişkin bir kazazedenin solunum yapıp yapmadığı bak-dinle-hisset yöntemiyle kaç saniye süreyle kontrol edilir?",
        options: [
          "10",
          "20",
          "30",
          "40",
        ],
        correctIndex: 0,
        explanation:
          "Yetişkinde solunum kontrolü bak-dinle-hisset yöntemiyle en fazla 10 saniye süreyle yapılır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-38",
        text: "Aşağıdaki durumların hangisinde kazazedeye Heimlich Manevrası uygulanır?",
        options: [
          "Kan şekeri düştüğünde",
          "Solunum yolu tam tıkandığında",
          "Kanaması olduğunda",
          "Kalbi durduğunda",
        ],
        correctIndex: 1,
        explanation:
          "Heimlich manevrası, solunum yolunun yabancı cisimle tam tıkandığı durumlarda uygulanır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-39",
        text: "Aşağıdakilerden hangisi atardamar kanamalarının özelliğidir?",
        options: [
          "Kanamanın sızıntı şeklinde olması",
          "Kanın koyu renkli akması",
          "Açık renkli kanın kalp atımlarıyla uyumlu, kesik kesik akması",
          "Kanamanın fışkırmadan akması",
        ],
        correctIndex: 2,
        explanation:
          "Atardamar kanamasında açık kırmızı renkli kan, kalp atımlarıyla uyumlu olarak fışkırır tarzda kesik kesik akar.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-40",
        text: "Aşağıdakilerden hangisi dış kanamalarda yapılan hatalı bir ilk yardım uygulamasıdır?",
        options: [
          "Kanayan bölgeyi kalp seviyesinin üstüne kaldırmak",
          "Kanayan yer üzerine temiz bir bezle bastırmak",
          "Uzuv kopması yoksa ilk uygulama olarak turnike uygulamak",
          "Kanayan yere en yakın basınç noktasına baskı uygulamak",
        ],
        correctIndex: 2,
        explanation:
          "Turnike yalnızca uzuv kopması gibi zorunlu durumlarda uygulanır; dış kanamada ilk uygulama olarak turnike hatalıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-41",
        text: "Aşağıdakilerden hangisi delici karın yaralanması olan kazazedeye yapılması gereken ilk yardım uygulamalarından biri değildir?",
        options: [
          "Bilinç kontrolünün yapılması",
          "Yaşam bulgularının sık sık izlenmesi",
          "Dışarı çıkan organların içeri sokulmaya çalışılması",
          "Bilinci yerinde ise sırtüstü, bacaklar bükülü yatırılması",
        ],
        correctIndex: 2,
        explanation:
          "Dışarı çıkan organlar asla içeri sokulmaya çalışılmaz; üzeri temiz nemli bezle örtülerek korunur.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-42",
        text: "Aşağıdakilerden hangisi çıkıklarda yapılması gereken ilk yardım uygulamasıdır?",
        options: [
          "Çıkığı yerine oturtmaya çalışmak",
          "Eklemi düzelttikten sonra tespit etmek",
          "Çıkık bölgeye kuvvetli masaj yapmak",
          "Bölgenin nabzını, deri rengini ve ısısını kontrol etmek",
        ],
        correctIndex: 3,
        explanation:
          "Çıkıkta eklem oynatılmadan tespit edilir ve dolaşımın sürdüğünden emin olmak için nabız, deri rengi ve ısı kontrol edilir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-43",
        text: "Beyne giden kan akışının azalması sonucu oluşan kısa süreli, yüzeysel ve geçici bilinç kaybına ne ad verilir?",
        options: [
          "Koma",
          "Bayılma",
          "Sara krizi",
          "Ateşli havale",
        ],
        correctIndex: 1,
        explanation:
          "Beyne giden kan akışının geçici azalmasıyla oluşan kısa süreli bilinç kaybına bayılma denir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-44",
        text: "Kaza sonrası solunum durması, yangın veya patlama tehlikesi varsa kazazedenin omuriliğine zarar vermeden araçtan çıkarılmasında kullanılan teknik hangisidir?",
        options: [
          "Rentek manevrası",
          "İtfaiyeci yöntemi ile omuzda taşıma",
          "Ayak bileklerinden sürükleme",
          "Koltuk altından tutarak sürükleme",
        ],
        correctIndex: 0,
        explanation:
          "Acil ve tehlikeli durumlarda omuriliğe zarar vermeden hızlı çıkarmak için Rentek manevrası kullanılır.",
        difficulty: "zor",
      },
      {
        id: "ilkyardim-45",
        text: "Aşağıdakilerden hangisi ilk yardımın öncelikli amaçlarındandır?",
        options: [
          "Kazazedenin tedavi edilmesi",
          "Hayati tehlikenin ortadan kaldırılması ve yaşamsal fonksiyonların sürdürülmesi",
          "Trafikteki kaza sayısını azaltmak",
          "Sağlık personelinin başarısını artırmak",
        ],
        correctIndex: 1,
        explanation:
          "İlk yardımın öncelikli amacı yaşamı korumak, hayati tehlikeyi gidermek ve yaşamsal fonksiyonların sürmesini sağlamaktır; tedavi değildir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-46",
        text: "Aşağıdakilerden hangisi solunum sistemi organlarındandır?",
        options: [
          "Kalp",
          "Akciğerler",
          "Pankreas",
          "Böbrekler",
        ],
        correctIndex: 1,
        explanation:
          "Akciğerler solunum sisteminin temel organıdır; gaz alışverişi burada gerçekleşir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-47",
        text: "'Kaza sonuçlarının ağırlaşmasını önlemek için olay yerinin değerlendirilmesi' işlemi aşağıdakilerden hangisini kapsar?",
        options: [
          "Koruma",
          "Bildirme",
          "Kurtarma",
          "Tedavi etme",
        ],
        correctIndex: 0,
        explanation:
          "Olay yerini değerlendirip ek tehlikeleri önlemeye yönelik önlemler almak ilk yardımın 'koruma' aşamasıdır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-48",
        text: "Aşağıdakilerden hangisi kalp durmasının belirtilerindendir?",
        options: [
          "Aşırı hareketlilik",
          "Bilincin açık olması",
          "Kalp atımının olmaması",
          "Hızlı ve yüzeysel solunum",
        ],
        correctIndex: 2,
        explanation:
          "Kalp durmasında nabız ve kalp atımı alınamaz; bilinç kapalıdır ve solunum yoktur.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-49",
        text: "Solunum yolu yabancı cisimle tıkanan kazazede öksürüyor, nefes alabiliyor ve konuşabiliyorsa bu kazazedede ne olduğu düşünülür?",
        options: [
          "Koma",
          "Kısmi (kısmen) tıkanma",
          "Tam tıkanma",
          "Solunum durması",
        ],
        correctIndex: 1,
        explanation:
          "Öksürebilen, konuşabilen ve nefes alabilen kazazedede kısmi tıkanma vardır; öksürmeye teşvik edilir, Heimlich uygulanmaz.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-50",
        text: "Aşağıdakilerden hangisi şok belirtilerinden biri değildir?",
        options: [
          "Huzursuzluk",
          "Baş dönmesi",
          "Dudak çevresinde morarma",
          "Ciltte ısı artışı, kızarıklık ve kuruluk",
        ],
        correctIndex: 3,
        explanation:
          "Şokta cilt soğuk, soluk ve nemlidir; ısı artışı ve kızarıklık şok belirtisi değildir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-51",
        text: "Burun kanaması olan kazazedeye yapılması gereken ilk yardım uygulaması hangisidir?",
        options: [
          "Burun kanatlarının 5 dakika süreyle sıkılması",
          "Başın geriye itilmesi",
          "Sırtüstü yatırılması",
          "Yüzüstü yatırılması",
        ],
        correctIndex: 0,
        explanation:
          "Burun kanamasında baş hafif öne eğilir ve burun kanatları 5 dakika süreyle sıkılır; baş geriye itilmez.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-52",
        text: "Aşağıdakilerden hangisi delici göğüs yaralanmalarında yapılan doğru bir ilk yardım uygulamasıdır?",
        options: [
          "Ayakları yüksekte tutup yüzüstü yatırmak",
          "Bilinci açıksa yarı oturur duruma getirmek",
          "Ağızdan ılık içecek vermek",
          "Batan cismi çıkarmak",
        ],
        correctIndex: 1,
        explanation:
          "Delici göğüs yaralanmasında bilinci açık kazazede yarı oturur pozisyona getirilir; batan cisim çıkarılmaz, ağızdan bir şey verilmez.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-53",
        text: "Aşağıdakilerden hangisi burkulmalarda yapılması gereken ilk yardım uygulamasıdır?",
        options: [
          "Sıkıştırıcı bir bandajla burkulan eklemin tespit edilmesi",
          "Bölgenin vücut seviyesinden aşağıya indirilmesi",
          "Burkulan eklem yüzeyinin sürekli hareket ettirilmesi",
          "Turnike uygulanması",
        ],
        correctIndex: 0,
        explanation:
          "Burkulmada eklem sıkıştırıcı bandajla tespit edilir, yukarı kaldırılır ve soğuk uygulanır; hareket ettirilmez.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-54",
        text: "Koma durumundaki kazazedeye aşağıdaki pozisyonlardan hangisi verilmelidir?",
        options: [
          "Şok pozisyonu",
          "Sırtüstü yatış pozisyonu",
          "Yarı yüzükoyun-yan pozisyon (koma pozisyonu)",
          "Baş geride yarı oturuş pozisyonu",
        ],
        correctIndex: 2,
        explanation:
          "Bilinci kapalı ancak solunumu olan kazazedeye, kusmukla boğulmayı önlemek için yarı yüzükoyun-yan (koma) pozisyonu verilir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-55",
        text: "Yetişkinlerde temel yaşam desteğinin 1 turunda yapılan kalp masajı ve suni solunum sayıları hangisinde doğru verilmiştir?",
        options: [
          "10 masaj - 1 solunum",
          "20 masaj - 1 solunum",
          "30 masaj - 2 solunum",
          "40 masaj - 2 solunum",
        ],
        correctIndex: 2,
        explanation:
          "Yetişkinde temel yaşam desteği 30 kalp masajı ve 2 suni solunum şeklinde uygulanır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-56",
        text: "İlk değerlendirmesi yapılan kazazedenin bilinci kapalı ve solunumu yoksa hangi ilk yardım uygulaması yapılmalıdır?",
        options: [
          "Temel yaşam desteği uygulanmalıdır",
          "Yarı yüzükoyun-yan pozisyon verilmelidir",
          "Vücudu ıslak çarşafla sarılmalıdır",
          "Sırtına vurulmalıdır",
        ],
        correctIndex: 0,
        explanation:
          "Bilinci kapalı ve solunumu olmayan kazazedeye derhal temel yaşam desteği (kalp masajı ve suni solunum) uygulanır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-57",
        text: "Bir travma sonucu deri ya da mukozanın bütünlüğünün bozulmasına ne ad verilir?",
        options: [
          "Şok",
          "Yara",
          "Koma",
          "Tıkanma",
        ],
        correctIndex: 1,
        explanation:
          "Travma sonucu deri veya mukoza bütünlüğünün bozulmasına yara denir.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-58",
        text: "Açık kırık için 'deri bütünlüğü bozulmuştur' ve 'kanama ve enfeksiyon tehlikesi yoktur' ifadeleri için ne söylenebilir?",
        options: [
          "I. doğru, II. yanlış",
          "I. yanlış, II. doğru",
          "Her ikisi de doğru",
          "Her ikisi de yanlış",
        ],
        correctIndex: 0,
        explanation:
          "Açık kırıkta deri bütünlüğü bozulmuştur (doğru), ancak bu nedenle kanama ve enfeksiyon tehlikesi vardır; ikinci ifade yanlıştır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-59",
        text: "Hayat kurtarma zincirinin 2. halkası aşağıdakilerden hangisidir?",
        options: [
          "İlaçla tedavi",
          "Hasar tespiti",
          "Olay yerinde temel yaşam desteği",
          "Hastanede ileri yaşam desteği",
        ],
        correctIndex: 2,
        explanation:
          "Hayat kurtarma zincirinin 2. halkası olay yerinde ilk yardımcı tarafından yapılan temel yaşam desteğidir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-60",
        text: "112 Acil Yardım Servisi aranırken aşağıdakilerden hangisi doğrudur?",
        options: [
          "Olayın tanımını yapmaktan kaçınmak",
          "Kimin, hangi numaradan aradığını bildirmemek",
          "Sakin olmak ya da sakin bir kişinin aramasını sağlamak",
          "Yapılan ilk yardımı sağlık personelinden gizlemek",
        ],
        correctIndex: 2,
        explanation:
          "112 aranırken sakin olunmalı, olay net anlatılmalı; sakin biri arayarak bilgilerin doğru iletilmesi sağlanmalıdır.",
        difficulty: "kolay",
      },
      {
        id: "ilkyardim-61",
        text: "Aşağıdakilerden hangisi toplardamar kanamasına ait bir özelliktir?",
        options: [
          "Kesik kesik akması",
          "Kalp atımlarıyla uyumlu akması",
          "Koyu kırmızı renkteki kanın sürekli akması",
          "Parlak kırmızı kanın fışkırması",
        ],
        correctIndex: 2,
        explanation:
          "Toplardamar (ven) kanamasında koyu kırmızı renkli kan sızıntı şeklinde sürekli akar.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-62",
        text: "Baş ve yüzdeki ağır kanamalarda hangi basınç noktasına baskı uygulanır?",
        options: [
          "Kasık",
          "Koltuk altı",
          "Şah damarı (boyun)",
          "Köprücük kemiği üzeri",
        ],
        correctIndex: 2,
        explanation:
          "Baş ve yüz bölgesindeki ağır kanamalarda şah (şahdamarı/boyun) damarı basınç noktasına baskı uygulanır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-63",
        text: "Dokular üzerinde çekme etkisi ile meydana gelen yaralara ne ad verilir?",
        options: [
          "Ezikli yaralar",
          "Delici yaralar",
          "Parçalı yaralar",
          "Kesik yaralar",
        ],
        correctIndex: 2,
        explanation:
          "Dokuların çekilerek kopması sonucu oluşan yaralara parçalı yaralar denir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-64",
        text: "Taş, yumruk ya da sopa gibi etkenlerin şiddetli çarpması ile oluşan yaralara ne ad verilir?",
        options: [
          "Kesik yaralar",
          "Ezikli yaralar",
          "Delici yaralar",
          "Parçalı yaralar",
        ],
        correctIndex: 1,
        explanation:
          "Künt ve şiddetli darbelerle oluşan yaralara ezikli yaralar denir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-65",
        text: "Sağlıklı yetişkin bir kişinin dakikadaki solunum sayısı kaçtır?",
        options: [
          "10-18",
          "12-20",
          "14-22",
          "16-24",
        ],
        correctIndex: 1,
        explanation:
          "Sağlıklı bir yetişkinde normal solunum sayısı dakikada 12-20 arasındadır.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-66",
        text: "Kalbi durmuş olan bir kazazedede aşağıdaki belirtilerden hangisi gözlenir?",
        options: [
          "Göz bebeklerinin genişlemesi",
          "Solunumun yüzeyselleşmesi",
          "Kan basıncının artması",
          "Nabzın yavaşlaması",
        ],
        correctIndex: 0,
        explanation:
          "Kalp durmasında beyne kan gitmediğinden göz bebekleri genişler (ışığa tepkisizleşir).",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-67",
        text: "Beyindeki hücrelerin kontrol edilemeyen, ani, aşırı ve anormal deşarjlarına bağlı olarak ortaya çıkan duruma ne denir?",
        options: [
          "Şok",
          "Diyabet",
          "Hipertansiyon",
          "Sara krizi (Epilepsi)",
        ],
        correctIndex: 3,
        explanation:
          "Beyin hücrelerinin ani ve anormal elektriksel deşarjı sonucu ortaya çıkan duruma sara krizi (epilepsi) denir.",
        difficulty: "orta",
      },
      {
        id: "ilkyardim-68",
        text: "Dıştan veya içten etki eden kuvvetlerle kemik dokusunun anatomik bütünlüğünün bozulmasına ne denir?",
        options: [
          "Kırık",
          "Çıkık",
          "Donma",
          "Burkulma",
        ],
        correctIndex: 0,
        explanation:
          "Kemiğin bütünlüğünün ve devamlılığının bozulmasına kırık denir.",
        difficulty: "kolay",
      },
    ],
  };

export default category;
