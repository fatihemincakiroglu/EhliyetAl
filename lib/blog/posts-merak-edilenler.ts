import type { BlogPost } from "./types";

export const merakEdilenlerPosts: BlogPost[] = [
  {
    slug: "ehliyet-almanin-maliyeti-2026",
    title: "Ehliyet Almanın Maliyeti 2026: Hangi Kalemlerden Oluşur?",
    description:
      "Ehliyet alma sürecindeki masraf kalemleri: kurs ücreti, sınav harçları, sağlık raporu ve belge masrafları. Güncel tutarları nereden öğrenirsin?",
    category: "Merak Edilenler",
    icon: "Wallet",
    readingMinutes: 7,
    intro:
      "Ehliyet almak tek bir ödeme değil, birkaç kalemin toplamıdır. Bu kalemlerin ne olduğunu ve güncel tutarı nereden öğreneceğini açıklıyoruz.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Ehliyet almanın maliyeti, tek bir sabit rakam değildir; birbirinden bağımsız birkaç masraf kaleminin toplamıdır. Bu kalemler şehre, sürücü kursuna ve alınan ehliyet sınıfına göre değişir. Bu yazıda tek tek hangi masrafların çıkacağını açıklıyoruz; kesin tutarları ise neden buradan değil, güncel resmî kaynaklardan öğrenmen gerektiğini de anlatıyoruz.",
      },
      {
        type: "warning",
        text: "Ücretler her yıl değişir ve şehirden şehre, kurstan kursa farklılık gösterir. Bu yazıda kasıtlı olarak sabit bir rakam vermiyoruz; çünkü yanlış/eski bir tutar seni yanıltabilir. Güncel fiyatı mutlaka bulunduğun ildeki sürücü kurslarından teyit et.",
      },
      { type: "h2", text: "Masraf kalemleri" },
      {
        type: "h3",
        text: "1. Sürücü kursu ücreti",
      },
      {
        type: "p",
        text: "En büyük kalem genellikle budur. Teorik dersler ve direksiyon eğitimini kapsar. Kurslar arasında ciddi fiyat farkı olabilir; bazıları taksit imkânı sunar. Ehliyet sınıfı (B, A, C vb.) ücreti doğrudan etkiler.",
      },
      {
        type: "h3",
        text: "2. Sınav harçları",
      },
      {
        type: "p",
        text: "Yazılı (e-sınav) ve direksiyon sınavı için ödenen resmî harçlardır. Bir sınavdan kalıp tekrar girersen, tekrar sınav harcı ödemen gerekebilir. Bu yüzden ilk denemede geçmek, aynı zamanda maliyeti düşürür.",
      },
      {
        type: "h3",
        text: "3. Sağlık raporu",
      },
      {
        type: "p",
        text: "Sürücü olabilmek için sürücülüğe uygun olduğunu gösteren bir sağlık raporu alman gerekir. Bu, yetkili sağlık kuruluşlarından alınır ve ayrı bir masraf kalemidir.",
      },
      {
        type: "h3",
        text: "4. Belge ve basım masrafları",
      },
      {
        type: "p",
        text: "Sürücü belgesinin (kart) basımı, harç ve değerli kâğıt bedeli gibi kalemler de sürece dahildir. Bunlar görece küçük tutarlar olsa da toplam maliyete eklenir.",
      },
      { type: "h2", text: "Maliyeti düşürmenin yolları" },
      {
        type: "list",
        items: [
          "İlk denemede geçerek tekrar sınav harçlarından kaçın. İyi hazırlık, doğrudan tasarruf demektir.",
          "Birkaç kurstan fiyat al ve neyin dahil olduğunu (ders saati, direksiyon süresi) karşılaştır.",
          "Kampanya ve taksit seçeneklerini sor; dönem başlarında farklı fırsatlar olabilir.",
          "Sağlık raporu ve belge işlemlerini erkenden hallederek son dakika ek masraflarından kaçın.",
        ],
      },
      {
        type: "tip",
        text: "Bir kursun sunduğu fiyatı değerlendirirken sadece rakama değil, içeriğine bak: kaç saat direksiyon eğitimi veriliyor, sınava tekrar girişte destek var mı? En ucuz seçenek her zaman en hesaplı seçenek olmayabilir.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Ehliyet tam olarak kaç para?",
            a: "Sabit bir rakam vermek doğru olmaz; kurs ücreti, harçlar, sağlık raporu ve belge masrafları toplamıdır ve şehre, kursa, ehliyet sınıfına göre değişir. Güncel tutarı ilindeki kurslardan öğren.",
          },
          {
            q: "Sınavdan kalırsam ek ödeme yapar mıyım?",
            a: "Genellikle evet; tekrar girişte sınav harcını yeniden ödemen gerekebilir. Bu yüzden ilk denemede geçmek maliyet açısından da önemlidir.",
          },
        ],
      },
    ],
    related: [
      "surucu-kursuna-baslamadan-once-sorulmasi-gereken-sorular",
      "kac-kez-sinava-girebilirsiniz",
      "meb-ehliyet-sinav-sistemi-nasil-isliyor",
    ],
  },
  {
    slug: "kac-kez-sinava-girebilirsiniz",
    title: "Kaç Kez Sınava Girebilirsiniz? Ehliyet Sınavıyla İlgili Merak Edilenler",
    description:
      "Ehliyet sınavında kalınca ne olur, tekrar sınava girme hakkı, yazılı ve direksiyon arasındaki fark ve sık sorulan diğer sorular.",
    category: "Merak Edilenler",
    icon: "RotateCcw",
    readingMinutes: 7,
    intro:
      "Sınavdan kalınca ne oluyor, kaç kez girilebiliyor, süre sınırı var mı? En çok merak edilenleri topladık.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Ehliyet sürecine başlayan adayların en çok merak ettiği konulardan biri, sınavdan kalınması durumunda ne olacağıdır. 'Bir daha giremez miyim?', 'Baştan mı başlarım?' gibi endişeler yaygındır ama çoğu zaman gereksizdir. Bu yazıda sınav tekrarı ve ilgili merak edilenleri açıklıyoruz.",
      },
      { type: "h2", text: "Sınavdan kalınca ne olur?" },
      {
        type: "p",
        text: "Yazılı veya direksiyon sınavından kalmak sürecin sonu değildir. Belirlenen kurallar çerçevesinde tekrar sınava girme hakkın vardır. Yani ilk denemede geçemezsen, kursa yeniden baştan kayıt olman gerekmez; genellikle kalınan sınavı belirli hakların içinde tekrar edersin.",
      },
      {
        type: "warning",
        text: "Tekrar girme hakkının sayısı, süresi ve koşulları zamanla ve düzenlemelere göre değişebilir. Kendi durumun için en doğru ve güncel bilgiyi kayıtlı olduğun sürücü kursundan almalısın.",
      },
      { type: "h2", text: "Yazılı ve direksiyon ayrı ayrı değerlendirilir" },
      {
        type: "p",
        text: "Önemli bir nokta: yazılı ve direksiyon sınavları birbirinden bağımsızdır. Yazılıyı geçip direksiyondan kaldıysan, yazılıyı tekrar vermen gerekmez; sadece direksiyona yeniden girersin. Aynı şekilde direksiyona sıra gelmeden önce yazılıyı geçmen gerekir.",
      },
      { type: "h2", text: "Sık sorulan diğer sorular" },
      {
        type: "faq",
        items: [
          {
            q: "Sınavdan kalırsam kursa baştan mı kaydolurum?",
            a: "Hayır. Genellikle kalınan sınavı tekrar hakların içinde yeniden verirsin; tüm süreci baştan başlatman gerekmez. Ayrıntıyı kursundan teyit et.",
          },
          {
            q: "Yazılıyı geçtim ama direksiyondan kaldım, yazılıyı tekrar mı vereceğim?",
            a: "Hayır. İki sınav ayrıdır; yazılıyı geçtiysen sadece direksiyona yeniden girersin.",
          },
          {
            q: "Tekrar sınava girmek ücretli mi?",
            a: "Genellikle tekrar girişte sınav harcı yeniden ödenir. Bu da ilk denemede geçmenin maddi olarak da avantajlı olduğunu gösterir.",
          },
          {
            q: "Kaç kez girebileceğimin bir sınırı var mı?",
            a: "Tekrar hakları ve koşulları düzenlemelere göre belirlenir ve değişebilir. Güncel sınırı kursundan öğrenmen en doğrusudur.",
          },
        ],
      },
      {
        type: "tip",
        text: "Kalma ihtimalini stres kaynağı yapmak yerine, iyi hazırlanıp ilk denemeye odaklan. İyi bir hazırlık hem tekrar masrafından hem de zaman kaybından korur.",
      },
    ],
    related: [
      "meb-ehliyet-sinav-sistemi-nasil-isliyor",
      "ehliyet-almanin-maliyeti-2026",
      "ehliyet-sinavinda-basarisiz-olanlarin-ortak-hatalari",
    ],
  },
  {
    slug: "surucu-kursuna-baslamadan-once-sorulmasi-gereken-sorular",
    title: "Sürücü Kursuna Başlamadan Önce Sorulması Gereken Sorular",
    description:
      "Doğru sürücü kursunu seçmek için kayıt öncesi sorman gereken sorular: ücret kapsamı, direksiyon saati, eğitmen ve sınav desteği.",
    category: "Merak Edilenler",
    icon: "HelpCircle",
    readingMinutes: 6,
    intro:
      "Doğru kursu seçmek tüm süreci kolaylaştırır. Kayıt olmadan önce mutlaka sorman gereken sorular burada.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Sürücü kursu seçimi, ehliyet sürecinin belki de en belirleyici kararıdır. Yanlış bir seçim; gizli masraflar, yetersiz direksiyon eğitimi ve gereksiz stres olarak geri döner. Doğru kursu bulmak içinse, kayıt olmadan önce doğru soruları sormak yeterlidir. İşte sormadan imza atmaman gereken sorular.",
      },
      { type: "h2", text: "Ücret ve kapsam" },
      {
        type: "list",
        items: [
          "Verdiğiniz ücrete tam olarak neler dahil? Teorik dersler, direksiyon eğitimi, sınav harçları ayrı mı?",
          "Direksiyon eğitimi kaç saat? Ek saat gerekirse ücreti ne olur?",
          "Sınavdan kalırsam tekrar için ek ödeme veya destek durumu nedir?",
          "Taksit imkânı var mı, varsa koşulları neler?",
        ],
      },
      { type: "h2", text: "Eğitim kalitesi" },
      {
        type: "list",
        items: [
          "Direksiyon eğitimini kim veriyor, eğitmen deneyimi nasıl?",
          "Eğitim araçları güncel ve bakımlı mı? Otomatik/manuel seçeneği var mı?",
          "Teorik dersler yüz yüze mi, çevrim içi mi işleniyor?",
          "Ders ve direksiyon saatleri benim programıma uygun ayarlanabiliyor mu?",
        ],
      },
      { type: "h2", text: "Süreç ve destek" },
      {
        type: "list",
        items: [
          "Sınav dönemleri ve takvim hakkında beni nasıl bilgilendiriyorsunuz?",
          "Yazılı sınava hazırlık için deneme/kaynak desteği sağlıyor musunuz?",
          "Belge işlemlerinde (sağlık raporu, evrak) yönlendirme yapıyor musunuz?",
          "Önceki adayların memnuniyeti ve başarı durumu hakkında bilgi alabilir miyim?",
        ],
      },
      {
        type: "tip",
        text: "Cevapları sözlü almakla yetinme; ücrete neyin dahil olduğunu yazılı olarak (sözleşme/broşür) görmek, ileride 'bu dahil değildi' sürprizlerini önler.",
      },
      {
        type: "quote",
        text: "En ucuz kurs değil, sana en çok direksiyon zamanını ve en net bilgiyi veren kurs uzun vadede en hesaplısıdır.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Otomatik vitesli araçla eğitim almak dezavantaj mı?",
            a: "Sadece otomatik vitesle eğitim alırsan ehliyetin genellikle otomatik vitesle sınırlı olur. Manuel araç da kullanmak istiyorsan bunu kayıt öncesi sormalısın.",
          },
          {
            q: "Kurs seçerken en önemli kriter ne?",
            a: "Direksiyon eğitiminin süresi ve kalitesi ile ücrete neyin dahil olduğunun netliği. Bu ikisi netse çoğu sorun baştan çözülür.",
          },
        ],
      },
    ],
    related: [
      "ehliyet-almanin-maliyeti-2026",
      "meb-ehliyet-sinav-sistemi-nasil-isliyor",
      "yasa-gore-ehliyet-sinavi-farklari",
    ],
  },
  {
    slug: "yasa-gore-ehliyet-sinavi-farklari",
    title: "Yaşa Göre Ehliyet Sınavı: Gençler ve Yetişkinler İçin Farklar Var mı?",
    description:
      "Ehliyet sınavının içeriği yaşa göre değişir mi? Yaş şartları, öğrenme farkları ve farklı yaş gruplarına özel hazırlık ipuçları.",
    category: "Merak Edilenler",
    icon: "Users",
    readingMinutes: 7,
    intro:
      "Sınav herkes için aynı ama öğrenme biçimi yaşa göre değişebilir. Yaş şartlarını ve gruplara özel ipuçlarını ele alıyoruz.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Sık sorulan sorulardan biri de ehliyet sınavının yaşa göre değişip değişmediğidir. Kısa cevap: sınavın içeriği ve geçme kriteri herkes için aynıdır; 18 yaşındaki bir aday da 45 yaşındaki bir aday da aynı soru havuzundan, aynı kurallarla sınava girer. Ancak yaşa bağlı olarak değişen bazı şeyler vardır: belirli ehliyet sınıflarındaki yaş şartları ve öğrenme biçimi.",
      },
      { type: "h2", text: "Değişen tek şey: yaş şartları" },
      {
        type: "p",
        text: "Ehliyet almak için belirli bir yaşın üzerinde olmak gerekir ve bu yaş, alınmak istenen ehliyet sınıfına göre değişir. Örneğin otomobil (B sınıfı) için gereken asgari yaş ile ağır vasıta veya motosikletin bazı sınıfları için gereken yaş farklıdır. Bu bir 'sınav farkı' değil, bir 'başvuru şartı' farkıdır.",
      },
      {
        type: "warning",
        text: "Ehliyet sınıflarına göre asgari yaş şartları düzenlemelere tabidir. Almak istediğin sınıfın güncel yaş şartını resmî kaynaklardan veya sürücü kursundan teyit et.",
      },
      { type: "h2", text: "Öğrenme biçimi yaşa göre değişebilir" },
      {
        type: "p",
        text: "Sınav aynı olsa da, farklı yaş gruplarının öğrenme alışkanlıkları farklı olabilir. Bunu bilmek, herkesin kendi güçlü yanına göre çalışmasını sağlar.",
      },
      {
        type: "h3",
        text: "Genç adaylar (18-25)",
      },
      {
        type: "p",
        text: "Genç adaylar genelde dijital araçlara ve hızlı soru çözmeye yatkındır. Bu bir avantajdır ama tuzağı da vardır: hız uğruna soruyu tam okumadan işaretlemek. Gençler için öneri, hızlarını korurken 'değildir/yanlıştır' gibi tuzak kelimelere dikkat etmektir.",
      },
      {
        type: "h3",
        text: "Yetişkin ve ileri yaş adaylar",
      },
      {
        type: "p",
        text: "Daha ileri yaştaki adaylar bazen teknolojiye veya yoğun ezbere kendini uzak hissedebilir. Ancak bu grubun büyük avantajı hayat ve trafik deneyimidir; birçok kuralın mantığını zaten sezgisel olarak bilirler. Onlar için en iyi yol, kuralları soyut ezber yerine kendi deneyimleriyle ilişkilendirmek ve acele etmeden, düzenli tekrarla çalışmaktır.",
      },
      {
        type: "tip",
        text: "Yaşın ne olursa olsun kazanan yöntem aynı: kavramın mantığını anla, düzenli tekrar et ve yanlışlarına odaklan. Sınav yaşa göre kolaylaşmaz ya da zorlaşmaz; doğru çalışan herkes için geçilebilirdir.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Sınav soruları yaşa göre değişiyor mu?",
            a: "Hayır. Soru havuzu, geçme kriteri ve süre herkes için aynıdır. Değişen tek şey, ehliyet sınıfına bağlı asgari yaş şartlarıdır.",
          },
          {
            q: "İleri yaşta ehliyet almak zor mu?",
            a: "Zorunlu olarak değil. Deneyim büyük avantajdır; düzenli tekrar ve mantık odaklı çalışmayla her yaşta geçmek mümkündür.",
          },
        ],
      },
    ],
    related: [
      "surucu-kursuna-baslamadan-once-sorulmasi-gereken-sorular",
      "meb-ehliyet-sinav-sistemi-nasil-isliyor",
      "ehliyet-sinavini-ilk-denemede-gecmenin-10-altin-kurali",
    ],
  },
];
