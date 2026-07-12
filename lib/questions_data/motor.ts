import type { Category } from "../questions";

const category: Category = {
    slug: "motor",
    name: "Motor ve Araç Bilgisi",
    shortName: "Motor",
    description: "Araç mekaniği, bakım ve teknik bilgiler",
    questions: [
      {
        id: "motor-1",
        text: "Lastiklerin güvenli kullanım için sahip olması gereken asgari diş derinliği ne kadardır?",
        options: [
          "0,5 mm",
          "1,6 mm",
          "3 mm",
          "5 mm",
        ],
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
          "Aküyü şarj etmek",
          "Yakıt basıncını ayarlamak",
          "Krank milinin hareketini eksantrik mile aktararak supapların doğru zamanda açılmasını sağlamak",
        ],
        correctIndex: 3,
        explanation:
          "Triger kayışı, krank milinden aldığı hareketi eksantrik miline ileterek supapların doğru zamanlamada çalışmasını sağlar.",
        difficulty: "zor",
      },
      {
        id: "motor-4",
        text: "Motor yağının düzenli aralıklarla değiştirilmemesi neye yol açabilir?",
        options: [
          "Motor parçalarının aşırı aşınmasına ve arızalanmasına",
          "Motorun daha sessiz çalışmasına",
          "Yakıt tüketiminin azalmasına",
          "Aracın hızının artmasına",
        ],
        correctIndex: 0,
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
          "Farların çalışması ihtiyacını",
          "Motor gücünü farklı hız ve tork oranlarında tekerleklere iletme ihtiyacını",
          "Yakıtın temizlenmesi ihtiyacını",
        ],
        correctIndex: 2,
        explanation:
          "Şanzıman, motorun ürettiği gücü farklı vites oranlarıyla tekerleklere aktararak aracın değişen hız ve yük ihtiyaçlarını karşılar.",
        difficulty: "orta",
      },
      {
        id: "motor-7",
        text: "Debriyaj (kavrama) sisteminin temel görevi nedir?",
        options: [
          "Motoru tamamen durdurmak",
          "Frenleme gücünü artırmak",
          "Yakıt tüketimini ölçmek",
          "Vites değiştirilirken motor gücünü geçici olarak kesmek",
        ],
        correctIndex: 3,
        explanation:
          "Debriyaj, vites değiştirme anında motorun gücünü geçici olarak şanzımandan ayırarak yumuşak bir geçiş sağlar.",
        difficulty: "kolay",
      },
      {
        id: "motor-8",
        text: "Radyatörün araçtaki temel işlevi nedir?",
        options: [
          "Motorun ürettiği ısıyı dış ortama vererek soğutma suyunu soğutmak",
          "Motor yağını temizlemek",
          "Egzoz gazlarını filtrelemek",
          "Aracın elektrik ihtiyacını karşılamak",
        ],
        correctIndex: 0,
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
          "Motor performansının artmasına",
          "Karşı yönden gelen sürücülerin gözünü kamaştırmasına veya yetersiz aydınlatmaya",
          "Lastik aşınmasının azalmasına",
        ],
        correctIndex: 2,
        explanation:
          "Yanlış ayarlanmış farlar, karşı yönden gelen sürücüleri kamaştırabilir veya sürücünün kendi görüş mesafesini kısaltabilir.",
        difficulty: "kolay",
      },
      {
        id: "motor-11",
        text: "Silecek lastiklerinin değiştirilmesi gerektiğini gösteren belirti hangisidir?",
        options: [
          "Sesinin çok sessiz olması",
          "Yeni araçlarda daha hızlı hareket etmesi",
          "Kışın daha yavaş çalışması",
          "Camda çizik bırakması veya iz yapmadan temizlememesi",
        ],
        correctIndex: 3,
        explanation:
          "Silecek lastiği sertleştiğinde veya yıprandığında camı iz bırakmadan temizleyemez ya da çizik oluşturabilir; bu değişim zamanı gelmiş demektir.",
        difficulty: "kolay",
      },
      {
        id: "motor-12",
        text: "Yakıt filtresinin görevi nedir?",
        options: [
          "Yakıt içindeki kir ve yabancı maddeleri temizleyerek motoru korumak",
          "Motor yağını soğutmak",
          "Egzoz gazını temizlemek",
          "Aracın hızını artırmak",
        ],
        correctIndex: 0,
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
          "Motor yağını temizlemek",
          "Lastik basıncını ayarlamak",
          "Yanma sonucu oluşan gazları güvenli şekilde dışarı atmak ve gürültüyü azaltmak",
          "Aküyü şarj etmek",
        ],
        correctIndex: 2,
        explanation:
          "Egzoz sistemi, yanma sonucu oluşan gazları araçtan güvenli şekilde uzaklaştırır ve motor gürültüsünü azaltır.",
        difficulty: "kolay",
      },
      {
        id: "motor-15",
        text: "Kış aylarında motor soğutma suyuna antifriz eklenmesinin temel sebebi nedir?",
        options: [
          "Motorun daha hızlı çalışmasını sağlamak",
          "Yakıt tüketimini artırmak",
          "Egzoz dumanını azaltmak",
          "Soğutma suyunun donmasını önleyerek motor bloğunun çatlamasını engellemek",
        ],
        correctIndex: 3,
        explanation:
          "Antifriz, düşük sıcaklıklarda soğutma suyunun donmasını önler; donma sırasında oluşan genleşme motor bloğunu çatlatabilir.",
        difficulty: "orta",
      },
      {
        id: "motor-16",
        text: "Direksiyon simidinde sürüş sırasında hissedilen titreme neyin belirtisi olabilir?",
        options: [
          "Lastik balans veya rot ayarının bozuk olmasının",
          "Yakıt seviyesinin düşük olmasının",
          "Farların iyi çalıştığının",
          "Aracın yeni yıkanmış olduğunun",
        ],
        correctIndex: 0,
        explanation:
          "Direksiyonda hissedilen titreme genellikle lastik balansının veya rot ayarının bozulduğunu gösterir ve kontrol ettirilmesi gerekir.",
        difficulty: "orta",
      },
      {
        id: "motor-17",
        text: "Aracın gösterge panelinde yağ basıncı ikaz lambası yanarsa ne yapılmalıdır?",
        options: [
          "Önemsemeden yola devam edilmelidir",
          "Araç güvenli bir şekilde durdurulmalı ve kontrol ettirilmelidir",
          "Sadece hız azaltılıp devam edilmelidir",
          "Klima kapatılıp devam edilmelidir",
        ],
        correctIndex: 1,
        explanation:
          "Yağ basıncı ikazı ciddi bir motor arızasına işaret edebilir; araç güvenli bir yerde durdurulup kontrol ettirilmelidir.",
        difficulty: "kolay",
      },
      {
        id: "motor-18",
        text: "Klimanın araç motoruna ekstra yük bindirmesi hangi durumda daha belirgin hissedilir?",
        options: [
          "Araç dururken",
          "Aracın farları kapalıyken",
          "Düşük devirde giderken ani hızlanma istendiğinde",
          "Aracın camları açıkken",
        ],
        correctIndex: 2,
        explanation:
          "Klima kompresörü motora ek yük bindirir; bu yük özellikle düşük devirde ani hızlanma istenildiğinde daha fark edilir olur.",
        difficulty: "zor",
      },
      {
        id: "motor-19",
        text: "Bir aracın periyodik bakımlarının düzenli yapılmasının en önemli faydası nedir?",
        options: [
          "Aracın rengini korumak",
          "Sigorta maliyetini düşürmek",
          "Sadece yakıt deposunu büyütmek",
          "Beklenmedik arızaları önceden tespit edip önlemek",
        ],
        correctIndex: 3,
        explanation:
          "Düzenli periyodik bakım, küçük sorunların büyük ve maliyetli arızalara dönüşmeden tespit edilip giderilmesini sağlar.",
        difficulty: "kolay",
      },
      {
        id: "motor-20",
        text: "Aracın camlarında buğulanma olduğunda en etkili çözüm genellikle hangisidir?",
        options: [
          "Klima veya havalandırmayı kullanarak iç-dış sıcaklık farkını azaltmak",
          "Camları tamamen kapatıp beklemek",
          "Cam sileceklerini çalıştırmak",
          "Farları söndürmek",
        ],
        correctIndex: 0,
        explanation:
          "Buğulanma iç ve dış sıcaklık/nem farkından kaynaklanır; klima veya havalandırma bu farkı azaltarak camı hızla açar.",
        difficulty: "orta",
      },
      {
        id: "motor-21",
        text: "Motor devrini gösteren göstergeye ne ad verilir?",
        options: [
          "Hız göstergesi",
          "Takometre (devir göstergesi)",
          "Yakıt göstergesi",
          "Kilometre sayacı",
        ],
        correctIndex: 1,
        explanation:
          "Takometre, motorun dakikadaki devir sayısını (RPM) gösteren göstergedir ve vites değiştirme zamanlamasında yol gösterir.",
        difficulty: "kolay",
      },
      {
        id: "motor-22",
        text: "Aracın uzun süre güneş altında kapalı kalması sonrası lastik hava basıncı nasıl değişir?",
        options: [
          "Değişmez",
          "Sıcaklık artışıyla lastik içindeki hava basıncı azalır",
          "Sıcaklık artışıyla lastik içindeki hava basıncı artar",
          "Sadece ön lastiklerde değişir",
        ],
        correctIndex: 2,
        explanation:
          "Sıcaklık arttıkça lastik içindeki hava genişler ve basınç artar; bu yüzden basınç kontrolleri hava soğukken yapılmalıdır.",
        difficulty: "zor",
      },
      {
        id: "motor-23",
        text: "Aracın periyodik muayenesinin (istasyon muayenesi) temel amacı nedir?",
        options: [
          "Aracın rengini kontrol etmek",
          "Sadece vergi tahsil etmek",
          "Aracın hızını artırmak",
          "Araçların trafik güvenliği açısından teknik olarak uygun durumda olup olmadığını denetlemek",
        ],
        correctIndex: 3,
        explanation:
          "Periyodik muayene, araçların fren, egzoz, lastik ve emniyet sistemleri gibi unsurlarının trafiğe uygun olup olmadığını denetler.",
        difficulty: "orta",
      },
      {
        id: "motor-24",
        text: "Bir aracın viraja hızlı girmesi sırasında lastiklerin yol tutuşunu kaybetmesi durumuna ne denir?",
        options: [
          "Savrulma / kayma (patinaj)",
          "Aquaplaning",
          "Rejeneratif frenleme",
          "Turbo lag",
        ],
        correctIndex: 0,
        explanation:
          "Aracın virajda tutunma sınırını aşması sonucu lastiklerin kayması, sürücünün araç üzerindeki kontrolünü kaybetmesine yol açabilir.",
        difficulty: "orta",
      },
      {
        id: "motor-25",
        text: "Yağmurlu havada yüksek hızda su birikintisi üzerinden geçen bir aracın lastiklerinin yolla teması kaybedip su üzerinde kaymasına ne ad verilir?",
        options: [
          "Debriyaj kayması",
          "Aquaplaning (su kayması)",
          "Turbo gecikmesi",
          "Fren sertleşmesi",
        ],
        correctIndex: 1,
        explanation:
          "Aquaplaning, lastiklerin su tabakasını yeterince atamayıp yol yüzeyiyle temasını kaybetmesi sonucu oluşan tehlikeli bir kaymadır; yağışlı havalarda hız kesmek bu riski azaltır.",
        difficulty: "zor",
      },
      {
        id: "motor-26",
        text: "Hava filtresinin motor için temel görevi nedir?",
        options: [
          "Yakıtı temizlemek",
          "Motora giren havadaki toz ve partikülleri temizlemek",
          "Motor yağını soğutmak",
          "Egzoz gazlarını filtrelemek",
        ],
        correctIndex: 1,
        explanation:
          "Hava filtresi, yanma odasına giren havayı toz ve kirden arındırarak motorun temiz hava ile daha verimli ve uzun ömürlü çalışmasını sağlar.",
        difficulty: "kolay",
      },
      {
        id: "motor-27",
        text: "Aracın çalışması sırasında aküyü şarj eden parça hangisidir?",
        options: ["Alternatör", "Radyatör", "Termostat", "Yakıt pompası"],
        correctIndex: 0,
        explanation:
          "Alternatör, motor çalışırken mekanik enerjiyi elektrik enerjisine çevirerek aküyü şarj eder ve aracın elektrik sistemini besler.",
        difficulty: "orta",
      },
      {
        id: "motor-28",
        text: "Lastik hava basıncı en doğru şekilde ne zaman kontrol edilmelidir?",
        options: [
          "Uzun bir yolculuktan hemen sonra, lastikler sıcakken",
          "Lastikler soğukken, tercihen araç birkaç saat hareket etmemişken",
          "Sadece yaz aylarında",
          "Lastik basıncı hiçbir zaman değişmez, kontrol gerekmez",
        ],
        correctIndex: 1,
        explanation:
          "Sürüş sırasında ısınan hava genleştiği için basınç yanıltıcı şekilde yüksek çıkar; doğru ölçüm için lastiklerin soğuk olduğu zamanlarda kontrol yapılmalıdır.",
        difficulty: "orta",
      },
      {
        id: "motor-29",
        text: "El freninin (park freni) temel kullanım amacı nedir?",
        options: [
          "Yüksek hızda ani durmak için kullanılır",
          "Aracı park halindeyken sabit tutmak ve yokuşta geri kaymasını önlemek içindir",
          "Motoru soğutmak için kullanılır",
          "Sadece yarış araçlarında bulunur",
        ],
        correctIndex: 1,
        explanation:
          "El freni, aracı park halindeyken sabitlemek ve özellikle yokuş yukarı veya yokuş aşağı park edilen araçların kaymasını önlemek için kullanılır; ani duruşlarda ana fren sistemi kullanılmalıdır.",
        difficulty: "kolay",
      },
      {
        id: "motor-30",
        text: "Gösterge panelinde motor arıza (check engine) lambası yandığında sürücü ne yapmalıdır?",
        options: [
          "Lambayı görmezden gelip sürüşe devam edebilir",
          "Aracı olabildiğince kısa sürede bir yetkili serviste kontrol ettirmelidir",
          "Sadece yakıt deposunu doldurması yeterlidir",
          "Aküyü söküp takması sorunu çözer",
        ],
        correctIndex: 1,
        explanation:
          "Motor arıza lambası, motor yönetim sisteminde bir sorun algılandığını gösterir; ciddi arızaları önlemek için aracın en kısa sürede yetkili serviste kontrol ettirilmesi gerekir.",
        difficulty: "kolay",
      },
      {
        id: "motor-31",
        text: "ESP (Elektronik Stabilite Programı) aracın hangi durumda sürücüye yardımcı olur?",
        options: [
          "Yakıt tüketimini azaltmak için",
          "Ani manevra veya kaygan zeminde aracın savrulmasını/kontrolden çıkmasını azaltmak için",
          "Klimanın daha soğuk çalışmasını sağlamak için",
          "Radyo sesini otomatik ayarlamak için",
        ],
        correctIndex: 1,
        explanation:
          "ESP, tekerleklerin dönüş hızlarını ve direksiyon açısını sürekli izleyerek ani manevra veya kaygan zeminde aracın savrulmasını algılar ve gerekli tekerleklere fren uygulayarak kontrolü korumaya yardımcı olur.",
        difficulty: "zor",
      },
      {
        id: "motor-32",
        text: "Fren yapıldığında metalik bir gıcırtı sesi geliyorsa bu genellikle neyin belirtisidir?",
        options: [
          "Yakıt filtresinin tıkandığının",
          "Fren balatalarının aşınıp değişim zamanının geldiğinin",
          "Akünün boşaldığının",
          "Lastik basıncının düşük olduğunun",
        ],
        correctIndex: 1,
        explanation:
          "Fren sırasında duyulan metalik gıcırtı, çoğu zaman fren balatalarının aşınma sınırına yaklaştığını ve kısa süre içinde değiştirilmesi gerektiğini gösterir.",
        difficulty: "orta",
      },
      {
        id: "motor-33",
        text: "Aşağıdakilerden hangisi yakıt tüketimini artıran etkenlerden biridir?",
        options: [
          "Lastiklerin önerilen basınçta şişirilmiş olması",
          "Lastik hava basıncının düşük olması",
          "Periyodik bakımların zamanında yapılması",
          "Aracın gereksiz yükten arındırılmış olması",
        ],
        correctIndex: 1,
        explanation:
          "Düşük lastik hava basıncı yuvarlanma direncini artırır, bu da motorun daha fazla efor harcamasına ve yakıt tüketiminin artmasına neden olur.",
        difficulty: "orta",
      },
      {
        id: "motor-34",
        text: "Aşağıdakilerden hangisi araçlarda gücün kaynağıdır?",
        options: [
          "Şaft",
          "Motor",
          "Tekerlek",
          "Vites kutusu",
        ],
        correctIndex: 1,
        explanation:
          "Araçta gücü üreten kaynak motordur; diğer organlar bu gücü aktarır veya kullanır.",
        difficulty: "kolay",
      },
      {
        id: "motor-35",
        text: "Aşağıdakilerden hangisi buji ile ateşlemeli motorların yakıtıdır?",
        options: [
          "Benzin",
          "Motorin",
          "Antifriz",
          "Gaz yağı",
        ],
        correctIndex: 0,
        explanation:
          "Buji ile ateşlemeli (benzinli) motorların yakıtı benzindir.",
        difficulty: "kolay",
      },
      {
        id: "motor-36",
        text: "Yakıt içerisinde toz, su veya pislik varsa motor nasıl çalışır?",
        options: [
          "Yüksek devirde",
          "Zengin karışımla",
          "Yüksek performansla",
          "Düzensiz, tekleyerek",
        ],
        correctIndex: 3,
        explanation:
          "Kirli veya sulu yakıt yanmayı bozar; motor düzensiz çalışır ve tekler.",
        difficulty: "orta",
      },
      {
        id: "motor-37",
        text: "Kışın motor soğutma suyunun donmasını önlemek için soğutma suyuna aşağıdakilerden hangisi karıştırılmalıdır?",
        options: [
          "Asit",
          "Antifriz",
          "Saf su",
          "Motor yağı",
        ],
        correctIndex: 1,
        explanation:
          "Soğutma suyuna antifriz karıştırılarak donma ve ayrıca korozyon önlenir.",
        difficulty: "kolay",
      },
      {
        id: "motor-38",
        text: "Aşağıdakilerden hangisi elektrik devresindeki sigortanın görevidir?",
        options: [
          "Aküyü şarj etmek",
          "Bujilere giden akımı yükseltmek",
          "Kısa devre olduğunda sistemi korumak",
          "Endüksiyon bobinine giden akımı yükseltmek",
        ],
        correctIndex: 2,
        explanation:
          "Sigorta, aşırı akım/kısa devre durumunda eriyerek elektrik devresini ve donanımı korur.",
        difficulty: "orta",
      },
      {
        id: "motor-39",
        text: "Seyir hâlindeyken araçtan sürekli yakıt kokusu gelmesi durumunda ne yapılmalıdır?",
        options: [
          "Açık camlar kapatılır",
          "Önemsenmez, yola devam edilir",
          "Lastiklerin hava basıncı kontrol edilir",
          "Trafik kurallarına uyarak durulur ve kontak kapatılır",
        ],
        correctIndex: 3,
        explanation:
          "Yakıt kokusu yangın riskidir; güvenli şekilde durulmalı ve kontak kapatılmalıdır.",
        difficulty: "orta",
      },
      {
        id: "motor-40",
        text: "Araçlarda yakıt tasarrufu sağlamak için aşağıdakilerden hangisi yapılmalıdır?",
        options: [
          "Termostat çıkartılmalı",
          "Eskimiş bujiler değiştirilmeli",
          "Lastiklerin hava basıncı indirilmeli",
          "Motor yüksek devirde çalıştırılmalı",
        ],
        correctIndex: 1,
        explanation:
          "Eskimiş bujilerin değiştirilmesi verimli yanma sağlar ve yakıt tasarrufu getirir.",
        difficulty: "orta",
      },
      {
        id: "motor-41",
        text: "Aşağıdakilerden hangisi aracı istenilen yöne sevk eder?",
        options: [
          "Marş sistemi",
          "Yağlama sistemi",
          "Direksiyon sistemi",
          "Aydınlatma sistemi",
        ],
        correctIndex: 2,
        explanation:
          "Aracı istenilen yöne yönlendiren sistem direksiyon sistemidir.",
        difficulty: "kolay",
      },
      {
        id: "motor-42",
        text: "İçten yanmalı motorlarda aşağıdaki yakıtlardan hangileri kullanılır?",
        options: [
          "Yalnız LPG",
          "Yalnız benzin",
          "Benzin ve motorin",
          "LPG, benzin ve motorin",
        ],
        correctIndex: 3,
        explanation:
          "İçten yanmalı motorlarda LPG, benzin ve motorin yakıt olarak kullanılabilir.",
        difficulty: "orta",
      },
      {
        id: "motor-43",
        text: "Motorlu araçlarda motorun yağ seviyesini kontrol etmeye yarayan, özel işaretleri bulunan parçaya ne ad verilir?",
        options: [
          "Yağdanlık",
          "Yağ çubuğu",
          "Yağ filtresi",
          "Yağ pompası",
        ],
        correctIndex: 1,
        explanation:
          "Motor yağ seviyesi, üzerinde asgari-azami işaretleri bulunan yağ çubuğu ile kontrol edilir.",
        difficulty: "kolay",
      },
      {
        id: "motor-44",
        text: "Aracın elektrik devresinde akım yüksek olduğunda eriyerek güvenliği sağlayan parça hangisidir?",
        options: [
          "Akü",
          "Platin",
          "Sigorta",
          "Alternatör",
        ],
        correctIndex: 2,
        explanation:
          "Akım aşırı yükseldiğinde eriyerek devreyi koruyan parça sigortadır.",
        difficulty: "kolay",
      },
      {
        id: "motor-45",
        text: "Kriko ile aracı kaldırırken tekerleklere takoz konulmasının nedeni aşağıdakilerden hangisidir?",
        options: [
          "Aracın motorunu çalıştırabilmek",
          "Aracın hareket etmesini engellemek",
          "Yakıtın buharlaşmasını engellemek",
          "Motorun sarsıntısız çalışmasını sağlamak",
        ],
        correctIndex: 1,
        explanation:
          "Takoz, kriko ile kaldırma sırasında aracın kaymasını/hareket etmesini engelleyerek güvenliği sağlar.",
        difficulty: "orta",
      },
      {
        id: "motor-46",
        text: "Motor hareketinin vites kutusuna iletilmesini sağlayan sistem aşağıdakilerden hangisidir?",
        options: [
          "Marş",
          "Şarj",
          "Ateşleme",
          "Kavrama (debriyaj)",
        ],
        correctIndex: 3,
        explanation:
          "Motordan gelen hareketi vites kutusuna ileten/kesen sistem kavrama (debriyaj) sistemidir.",
        difficulty: "orta",
      },
      {
        id: "motor-47",
        text: "'Emme zamanında silindire alınan temiz hava sıkıştırılır, kızgın havanın üstüne yakıt püskürtülür ve yanma başlar.' Bu çalışma prensibi hangi motora aittir?",
        options: [
          "Benzinli",
          "Dizel",
          "Elektrikli",
          "Buharlı",
        ],
        correctIndex: 1,
        explanation:
          "Havanın sıkıştırılıp üzerine yakıt püskürtülerek tutuşması dizel motorun çalışma prensibidir.",
        difficulty: "orta",
      },
      {
        id: "motor-48",
        text: "Dizel motor kullanan bir araca yanlışlıkla benzin konulması durumunda aşağıdakilerden hangisi uygundur?",
        options: [
          "Aracın düşük hızda sürülmesi",
          "Yakıt deposunun boşaltılması",
          "Aracın yüksek devirde kullanılması",
          "Lastik basınçlarının düşürülmesi",
        ],
        correctIndex: 1,
        explanation:
          "Dizel motora benzin konulursa motor çalıştırılmadan depo boşaltılmalıdır; aksi hâlde motor zarar görür.",
        difficulty: "orta",
      },
      {
        id: "motor-49",
        text: "Aracın çok uzun süre kullanılmadan bekletilmesi sonucunda aşağıdakilerden hangileri meydana gelebilir?",
        options: [
          "Yalnız motor yağının özelliğini kaybetmesi",
          "Akü şarjının azalması ve fren balatalarının azalması",
          "Akü şarjının azalması ve motor yağının özelliğini kaybetmesi",
          "Akü şarjı azalması, fren balatası azalması ve motor yağının bozulması",
        ],
        correctIndex: 2,
        explanation:
          "Uzun süre bekleyen araçta akü boşalır ve motor yağı özelliğini kaybeder; fren balatası ise kullanımla aşınır, beklemekle azalmaz.",
        difficulty: "orta",
      },
      {
        id: "motor-50",
        text: "Aşağıdakilerden hangisi frenleme mesafesinin artmasına neden olur?",
        options: [
          "Yakıt seviyesinin düşmesi",
          "Balata yüzeyinin kuru olması",
          "Lastik diş derinliklerinin azalması",
          "Motor yağı değişiminin geciktirilmesi",
        ],
        correctIndex: 2,
        explanation:
          "Lastik diş derinliği azaldıkça yol tutuşu düşer ve frenleme mesafesi artar.",
        difficulty: "orta",
      },
      {
        id: "motor-51",
        text: "Motor hareketinin diferansiyele iletilmesini sağlayan güç aktarma organı aşağıdakilerden hangisidir?",
        options: [
          "Şaft",
          "Diferansiyel",
          "Aks",
          "Vites kutusu",
        ],
        correctIndex: 0,
        explanation:
          "Vites kutusundan aldığı hareketi diferansiyele ileten güç aktarma organı şafttır.",
        difficulty: "orta",
      },
      {
        id: "motor-52",
        text: "Marş yapıldığında gösterge ışıkları yanıyor ancak marş motoru dönmüyorsa problem aşağıdakilerden hangisi olabilir?",
        options: [
          "Yakıt bitmiştir",
          "Batarya (akü) zayıflamıştır",
          "Lastik basınçları düşüktür",
          "Motor yağ seviyesi azalmıştır",
        ],
        correctIndex: 1,
        explanation:
          "Işıklar yanıyor ama marş motoru dönmüyorsa akü, marş motorunu çevirecek gücü sağlayamıyordur (akü zayıf).",
        difficulty: "orta",
      },
      {
        id: "motor-53",
        text: "Marşa basıldığında motor dönüyor ancak çalışmıyorsa ilk olarak aşağıdakilerden hangisi kontrol edilmelidir?",
        options: [
          "Bujiler",
          "Akü suyu",
          "Motor yağ seviyesi",
          "Depodaki yakıt seviyesi",
        ],
        correctIndex: 3,
        explanation:
          "Motor dönüp çalışmıyorsa ilk olarak yakıtın bitip bitmediği (depo seviyesi) kontrol edilir.",
        difficulty: "orta",
      },
      {
        id: "motor-54",
        text: "Periyodik bakımda aşağıdakilerden hangisinin değiştirilmemesi araç motorunun çalışmasını olumsuz etkiler?",
        options: [
          "Polen filtresinin",
          "Yağ filtresinin",
          "Araç lastiklerinin",
          "Cam sileceklerinin",
        ],
        correctIndex: 1,
        explanation:
          "Yağ filtresi değişmezse yağ kirlenir ve motorun çalışmasını olumsuz etkiler; diğerleri motor çalışmasını doğrudan etkilemez.",
        difficulty: "orta",
      },
      {
        id: "motor-55",
        text: "Araçta yanmış bir sigortayı daha yüksek amperli bir sigortayla değiştirmek ya da telle sarmak neye neden olabilir?",
        options: [
          "Bujinin daha iyi ateşlemesine",
          "Farların daha canlı yanmasına",
          "Akünün daha çabuk bitmesine",
          "Elektrik tesisatının yanmasına",
        ],
        correctIndex: 3,
        explanation:
          "Yüksek amperli sigorta veya tel, aşırı akımda devreyi kesmez; bu durum elektrik tesisatının yanmasına yol açar.",
        difficulty: "orta",
      },
      {
        id: "motor-56",
        text: "Radyatördeki su miktarının azalması aşağıdakilerden hangisine neden olur?",
        options: [
          "Motorun hararet yapmasına",
          "Motor devrinin yükselmesine",
          "Klimanın düzensiz çalışmasına",
          "Akünün kısa zamanda bitmesine",
        ],
        correctIndex: 0,
        explanation:
          "Soğutma suyu azalırsa motor yeterince soğutulamaz ve hararet (aşırı ısınma) yapar.",
        difficulty: "orta",
      },
      {
        id: "motor-57",
        text: "Aşağıdakilerden hangisi diferansiyelin görevlerinden biri değildir?",
        options: [
          "Yakıt tasarrufu sağlamak",
          "Tekerleklere güç ve tork dağıtmak",
          "Şafttan gelen torku artırarak akslara iletmek",
          "Virajda dış tekerleğin iç tekerlekten fazla dönmesini sağlamak",
        ],
        correctIndex: 0,
        explanation:
          "Diferansiyel güç/tork dağıtır ve virajda tekerleklerin farklı hızda dönmesini sağlar; yakıt tasarrufu görevi değildir.",
        difficulty: "orta",
      },
      {
        id: "motor-58",
        text: "Benzinli bir motorda buji hangi zamanın sonunda ateşleme yapar?",
        options: [
          "İş",
          "Egzoz",
          "Emme",
          "Sıkıştırma",
        ],
        correctIndex: 3,
        explanation:
          "Benzinli motorda buji, sıkıştırma zamanının sonunda ateşleme yaparak iş zamanını başlatır.",
        difficulty: "orta",
      },
      {
        id: "motor-59",
        text: "Yağ eksilten bir araçta periyodik yağ değişimi yerine sürekli eksik yağı tamamlayarak devam etmek neye neden olur?",
        options: [
          "Yağ ömrünün artmasına",
          "Yakıt tüketiminin azalmasına",
          "Bakım masrafının azalmasına",
          "Yağın çamurlaşarak motora zarar vermesine",
        ],
        correctIndex: 3,
        explanation:
          "Eski yağ üzerine sürekli ekleme yapmak yağın çamurlaşmasına ve motorun zarar görmesine yol açar.",
        difficulty: "orta",
      },
      {
        id: "motor-60",
        text: "Hararet yapmış bir motorda radyatör suyu çok sıcak değilse aşağıdakilerden hangisinin arızalı olduğu düşünülür?",
        options: [
          "Fan müşirinin",
          "Termostatın",
          "Fan sigortasının",
          "Klima kompresörünün",
        ],
        correctIndex: 1,
        explanation:
          "Motor ısınmış ama radyatör suyu soğuksa, suyun dolaşımını açan termostat açılmıyordur (arızalıdır).",
        difficulty: "zor",
      },
      {
        id: "motor-61",
        text: "Lastik değişiminden sonra balans ayarı yapılmaması aşağıdakilerden hangisine neden olur?",
        options: [
          "Aracın daha fazla yakıt tüketmesine",
          "Frenleme performansının artmasına",
          "Lastik basıncının kendiliğinden azalmasına",
          "Belirli bir hızdan sonra direksiyonun titremesine",
        ],
        correctIndex: 3,
        explanation:
          "Balans ayarı yapılmazsa tekerlek dengesizliği belli bir hızdan sonra direksiyonda titreme yapar.",
        difficulty: "orta",
      },
      {
        id: "motor-62",
        text: "Aşağıdakilerden hangileri antifrizin görevlerindendir?",
        options: [
          "Yalnız soğutma suyunun donmasını engellemek",
          "Soğutma suyunun donmasını ve motorun verimli çalışmasını engellemek",
          "Motorun verimli çalışmasını ve korozyonu önlemek",
          "Donmayı önlemek, verimli çalışmayı sağlamak ve pas/korozyonu önlemek",
        ],
        correctIndex: 3,
        explanation:
          "Antifriz donmayı önler, motorun uygun sıcaklıkta verimli çalışmasına yardımcı olur ve pas/korozyonu engeller.",
        difficulty: "orta",
      },
      {
        id: "motor-63",
        text: "Soğutma suyunun çıkış veya girişine yerleştirilen ve soğutma suyu sıcaklığını belirli seviyede tutan parça hangisidir?",
        options: [
          "Buji",
          "Enjektör",
          "Su pompası",
          "Termostat",
        ],
        correctIndex: 3,
        explanation:
          "Soğutma suyu sıcaklığını ayarlayan parça termostattır.",
        difficulty: "orta",
      },
      {
        id: "motor-64",
        text: "Araç motorunun çalışması için ilk hareketi veren sistem aşağıdakilerden hangisidir?",
        options: [
          "Marş sistemi",
          "Yağlama sistemi",
          "Yakıt sistemi",
          "Ateşleme sistemi",
        ],
        correctIndex: 0,
        explanation:
          "Motora ilk dönme hareketini veren sistem marş sistemidir.",
        difficulty: "kolay",
      },
      {
        id: "motor-65",
        text: "Motor yağının zamanında değiştirilmemesi aşağıdakilerden hangisine neden olur?",
        options: [
          "Motorun verimli çalışmasına",
          "Aracın daha yavaş gitmesine",
          "Akünün daha çabuk bitmesine",
          "Motordaki aşıntıların artmasına",
        ],
        correctIndex: 3,
        explanation:
          "Zamanında değişmeyen yağ yağlama özelliğini kaybeder ve motordaki aşınma (aşıntı) artar.",
        difficulty: "orta",
      },
      {
        id: "motor-66",
        text: "Taşıtlardaki süspansiyon sisteminin görevi aşağıdakilerden hangisidir?",
        options: [
          "Yakıt tüketimini azaltmak",
          "Aracın dönüşlerini sağlamak",
          "Akünün şarj olmasını sağlamak",
          "Titreşimleri, salınımları ve ani şokları sönümlemek",
        ],
        correctIndex: 3,
        explanation:
          "Süspansiyon sistemi yoldan gelen titreşim, salınım ve şokları sönümleyerek sürüş konforu ve güvenliği sağlar.",
        difficulty: "orta",
      },
      {
        id: "motor-67",
        text: "Çalışan parçalarda sürtünmeye bağlı olarak meydana gelen aşınmayı azaltan madde hangisidir?",
        options: [
          "Antifriz",
          "Motor yağı",
          "Hidrolik yağı",
          "Akü elektroliti",
        ],
        correctIndex: 1,
        explanation:
          "Motor yağı, hareketli parçalar arasında yağ filmi oluşturarak sürtünme ve aşınmayı azaltır.",
        difficulty: "kolay",
      },
      {
        id: "motor-68",
        text: "Motordan gelen sıcak suyu ince petekler aracılığıyla soğutan parçaya ne denir?",
        options: [
          "Amortisör",
          "Radyatör",
          "Alternatör",
          "Distribütör",
        ],
        correctIndex: 1,
        explanation:
          "Motordan gelen sıcak soğutma suyunu peteklerinde soğutan parça radyatördür.",
        difficulty: "kolay",
      },
      {
        id: "motor-69",
        text: "Süspansiyon sisteminde bulunan ve yay salınım süresini kısaltan parça aşağıdakilerden hangisidir?",
        options: [
          "Şaft",
          "Volan",
          "Kavrama",
          "Amortisör",
        ],
        correctIndex: 3,
        explanation:
          "Yayların salınımını sönümleyip süresini kısaltan parça amortisördür.",
        difficulty: "orta",
      },
      {
        id: "motor-70",
        text: "Araç gösterge panelinde 'ABS' uyarı ışığının yanması hangi sistemde arıza olduğunu belirtir?",
        options: [
          "Fren",
          "Yakıt",
          "Yağlama",
          "Soğutma",
        ],
        correctIndex: 0,
        explanation:
          "ABS uyarı ışığı, kilitlenmeyi önleyici fren sisteminde arıza olduğunu gösterir.",
        difficulty: "orta",
      },
      {
        id: "motor-71",
        text: "Motoru çalıştırırken marş durumunda marş motoru dönmüyorsa sorun aşağıdakilerden hangisinden kaynaklanmış olabilir?",
        options: [
          "Akünün boşalmasından",
          "Akünün tam şarjlı olmasından",
          "Hava filtresinin kirlenmesinden",
          "Akü kutup başlarının sıkı olmasından",
        ],
        correctIndex: 0,
        explanation:
          "Marş motoru dönmüyorsa muhtemel neden akünün boşalmış (zayıf) olmasıdır.",
        difficulty: "orta",
      },
      {
        id: "motor-72",
        text: "Fren pedalına basıldığında fren lambaları yanmıyorsa sebebi aşağıdakilerden hangisidir?",
        options: [
          "Flaşör arızalıdır",
          "Distribütör arızalıdır",
          "Fren müşiri arızalıdır",
          "Geri vites müşiri arızalıdır",
        ],
        correctIndex: 2,
        explanation:
          "Fren lambalarını fren müşiri (anahtarı) çalıştırır; lambalar yanmıyorsa fren müşiri arızalıdır.",
        difficulty: "orta",
      },
      {
        id: "motor-73",
        text: "Yaz aylarında kış lastiklerinin kullanılması aşağıdakilerden hangisine neden olur?",
        options: [
          "Aracın maksimum hızının artmasına",
          "Lastiklerin daha çabuk aşınmasına",
          "Fren sisteminin arızalanmasına",
          "Yakıt tüketiminin azalmasına",
        ],
        correctIndex: 1,
        explanation:
          "Yumuşak yapılı kış lastikleri sıcak havada daha çabuk aşınır.",
        difficulty: "orta",
      },
    ],
  };

export default category;
