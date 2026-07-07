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
    ],
  };

export default category;
