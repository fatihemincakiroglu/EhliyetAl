/**
 * Sıkça Sorulan Sorular — tek kaynak.
 * Hem anasayfa altındaki SSS bölümü hem de /sss sayfası bu listeden beslenir;
 * FAQPage JSON-LD şeması da buradan üretilir.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    q: "Ehliyet sınavında kaç soru var?",
    a: "Ehliyet yazılı sınavında toplam 50 soru bulunur. Sorular derslere dağıtılır: yaklaşık 27 soru trafik ve çevre bilgisi, 13 soru ilk yardım ve 10 soru araç tekniği (motor) dersinden gelir. Sınav süresi 60 dakikadır.",
  },
  {
    q: "Ehliyet sınavı puanı nasıl hesaplanır?",
    a: "Sadece doğru cevaplarınız sayılır; yanlışlar dikkate alınmaz. Her soru eşit puandadır ve 100 puan üzerinden değerlendirme yapılır. Başarılı sayılmak için 100 üzerinden en az 70 puan almanız gerekir; bu da 50 soruda en az 35 doğru demektir.",
  },
  {
    q: "Ehliyet sınavında 3 yanlış 1 doğruyu götürüyor mu?",
    a: "Hayır. Ehliyet sınavında yanlış cevaplar net sayınızı etkilemez; yalnızca doğru cevaplarınız puanlanır. Bu nedenle emin olmadığınız sorularda bile boş bırakmak yerine mantıklı bir tahmin yapmak avantajlıdır.",
  },
  {
    q: "Ehliyet teori (yazılı) sınavına kaç kez girme hakkı var?",
    a: "Adaylar en fazla 4 yazılı ve 4 uygulama (direksiyon) sınavına girme hakkına sahiptir. Bu haklar zamanla değişebileceğinden güncel durumu sürücü kursunuzdan teyit etmeniz önerilir.",
  },
  {
    q: "Sınav süresi toplam kaç saattir?",
    a: "Yazılı sınav süresi toplam 60 dakikadır. Sınav saatini bir dakika bile geçirirseniz içeri alınmazsınız; bu nedenle sınav yerinizde en az 30 dakika önceden hazır bulunmanız önerilir.",
  },
  {
    q: "Ders saatlerinde ne kadar devamsızlık yapabilirim?",
    a: "Mazeretsiz olarak toplam ders saatlerinin en fazla %20'si kadar devamsızlık yapabilirsiniz. Bu sınırı aşmamak için ders takvimini kursunuzla birlikte takip edin.",
  },
  {
    q: "Sürücü belgemi almadan sürücü sertifikasıyla araç kullanabilir miyim?",
    a: "Hayır. Sürücü sertifikası tek başına araç kullanma hakkı vermez. Trafik Tescil Bürosuna başvurup sürücü belgenizi (ehliyet) aldıktan sonra araç kullanabilirsiniz.",
  },
  {
    q: "Yazılı ve direksiyon sınavı nerede yapılır?",
    a: "Yazılı sınav, yetkili makamlarca belirlenen okullarda yapılır. Direksiyon (uygulama) sınavı ise Millî Eğitim Müdürlüğü ve Trafik Şube Müdürlüğünün belirlediği güzergâhta gerçekleştirilir.",
  },
  {
    q: "Sürücü olur (sağlık) raporu nereden alınır?",
    a: "Sürücü olur raporunu aile hekiminizden ücretsiz alabilirsiniz. Aile hekiminizden alamadığınız durumlarda devlet hastanelerinden veya bu raporu vermeye yetkili özel hastanelerden temin edebilirsiniz.",
  },
  {
    q: "Sürücü sertifikamı aldıktan sonra ne kadar sürede Trafik Tescil Bürosuna başvurmalıyım?",
    a: "Sertifikalar alındığı tarihten itibaren 2 yıl geçerlidir. Sağlık raporu ise alındığı tarihten itibaren 1 yıl geçerlidir; süresi dolarsa eskisi çıkarılmadan dosyaya yeni bir rapor eklenir. Süreler değişebileceğinden güncel durumu resmî kaynaklardan doğrulayın.",
  },
  {
    q: "İlkokul mezunu olanlar sürücü belgesi alabilir mi?",
    a: "Evet, ilkokul mezunları sürücü belgesi alabilir. Ayrıca ilköğretim 6, 7 veya 8. sınıftan terk olanlar da başvurabilir. Eğitim durumuna bağlı güncel şartları kursunuzdan teyit etmeniz önerilir.",
  },
  {
    q: "Sürücü kursuna kayıt oldum, sınavda başarısız oldum; kurs değiştirebilir miyim?",
    a: "Hayır. Sürücü kurslarında örgün okullardaki gibi nakil (kurs değiştirme) uygulaması bulunmamaktadır.",
  },
  {
    q: "Ehliyetimi kaybettim, yenisini nasıl çıkarırım?",
    a: "Bulunduğunuz yerdeki Trafik Tescil Şube Müdürlüğüne başvurabilirsiniz. Genellikle şu belgeler istenir: dilekçe, nüfus cüzdanı aslı ve fotokopisi, belgede yoksa kan grubu beyanı, 2 adet fotoğraf ve sürücü belgesi kart ücreti. İşlem sırasında parmak izi de alınır. Ehliyet kaybının maddi cezası yoktur; yalnızca belge ücreti ödenir.",
  },
  {
    q: "Dosyamı aldım ama uzun süredir ehliyetimi çıkarmadım; yerime başkası başvurabilir mi?",
    a: "Hayır. Trafik Tescil Bürosuna başvuruyu şahsen, nüfus cüzdanınız ve diğer evraklarla birlikte kendiniz yapmalısınız; vekâletle veya başka biri aracılığıyla başvuru yapılamaz. Ayrıca dosyanın üzerinden uzun süre geçtiyse (örneğin 1 yıl) sağlık raporu gibi süresi dolan belgeleri yenilemeniz gerekebilir.",
  },
  {
    q: "Yeni sürücüler için aday (stajyer) sürücülük ne anlama gelir?",
    a: "İlk kez ehliyet alan sürücüler belirli bir süre aday sürücü olarak kabul edilir. Bu dönemde kırmızı ışık ihlali, hız sınırı aşımı ve alkollü araç kullanımı gibi durumlarda daha ağır yaptırımlar uygulanabilir; belirli ihlallerde belge iptal edilerek yeniden kursa yönlendirme söz konusu olabilir. Kurallar ve süreler mevzuata göre değişebileceğinden güncel bilgiyi resmî kaynaklardan teyit edin.",
  },
  {
    q: "Stajyer (aday) ehliyet ne kadar süre geçerlidir ve normale nasıl çevrilir?",
    a: "Aday sürücülük dönemi genel olarak 2 yıl sürer. Bu süre içinde kanunda belirtilen ağır ihlaller (tekrarlayan kırmızı ışık ve hız ihlali, alkollü/uyuşturucu etkisinde araç kullanma, asli kusurlu ölümlü/yaralanmalı kaza, belirli ceza puanının aşılması gibi) işlenmezse, süre sonunda belge normal sürücü belgesine çevrilir. Ağır ihlallerde ise belge iptal edilip yeniden kursa ve sınava yönlendirme söz konusu olabilir. Süreler ve şartlar mevzuata göre değişebileceğinden güncel durumu resmî kaynaklardan doğrulayın.",
  },
  {
    q: "E sınıfı ehliyetim var; TIR (çekici) kullanabilir miyim?",
    a: "Genel olarak E sınıfı ehliyeti sonradan almış sürücüler TIR (çekici) kullanamaz; çekici kullanmak için ilgili ağır vasıta sürücü belgesi sınıfına sahip olmak gerekir. Çok eski tarihli bazı belgeler için istisnalar olabilir. Ehliyet sınıfları ve sürüş yetkileri zamanla değiştiğinden, kendi belgenizin hangi araçları kapsadığını mutlaka resmî kaynaklardan veya Trafik Tescil biriminden teyit edin.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
