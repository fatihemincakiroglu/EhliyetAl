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
    ],
  };

export default category;
