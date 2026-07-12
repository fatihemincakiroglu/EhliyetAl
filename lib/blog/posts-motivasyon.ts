import type { BlogPost } from "./types";

export const motivasyonPosts: BlogPost[] = [
  {
    slug: "ehliyet-sinavinda-basarisiz-olanlarin-ortak-hatalari",
    title: "Ehliyet Sınavında Başarısız Olanların Ortak Hataları",
    description:
      "Ehliyet sınavında kalan adayların tekrar eden ortak hataları ve bu hatalardan nasıl kaçınılacağına dair pratik öneriler.",
    category: "Motivasyon",
    icon: "TrendingDown",
    readingMinutes: 8,
    intro:
      "Kalanların hikâyesi şaşırtıcı derecede benzer. Aynı hataları önceden bilmek, onları tekrarlamamanın en kolay yolu.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Ehliyet sınavında başarısız olan adayların hikâyeleri şaşırtıcı derecede benzerdir. Genellikle bilgi eksikliğinden değil, birkaç tekrar eden davranıştan kaybederler. İyi haber şu: bu hataların hepsi önlenebilir. Başkalarının düştüğü tuzakları önceden bilmek, onları tekrarlamamanın en kolay yoludur.",
      },
      { type: "h2", text: "1. Son güne bırakmak" },
      {
        type: "p",
        text: "En yaygın hata budur. Sınavdan bir gece önce tüm konuları tek seferde çalışmaya çalışmak, beyni bilgiyle doldurur ama kalıcı hâle getirmez. Ertesi gün, çalışılan pek çok şey uçup gider. Düzenli ve aralıklı çalışma, gece yarısı maratonundan her zaman üstündür.",
      },
      { type: "h2", text: "2. Sadece doğru yaptığı soruları çözmek" },
      {
        type: "p",
        text: "Birçok aday, iyi bildiği konularda soru çözerek 'çalışıyorum' hissi yaşar ama zayıf olduğu konulardan kaçar. Bu, kendini iyi hissettiren ama işe yaramayan bir tuzaktır. Gerçek ilerleme, yanlış yapılan sorulara dönüp onları anlamakla gelir.",
      },
      {
        type: "tip",
        text: "Konfor alanından çık: en sevmediğin, en çok yanıldığın dersi ilk sıraya al. Zorlandığın yer, en çok puan kazanabileceğin yerdir.",
      },
      { type: "h2", text: "3. Soruyu tam okumamak" },
      {
        type: "p",
        text: "'Aşağıdakilerden hangisi yapılmaz?' sorusunu 'yapılır' diye okuyup doğru bildiği hâlde yanlış işaretlemek, kalan adayların ortak dramıdır. Olumsuz ifadeler (değildir, yanlıştır, yapılmaz) tuzaktır ve acele okuyanı yakalar.",
      },
      { type: "h2", text: "4. İlk yardımı erteleyip yüzeysel geçmek" },
      {
        type: "p",
        text: "İlk yardım detaylı olduğu için birçok aday onu 'sona bırakır' ve yeterince çalışmaz. Oysa sınavda ciddi puan bu dersten gelir. Sıralama ve sayı içeren bu konuları senaryo canlandırarak çalışmamak, kolayca kaybedilen puanlar demektir.",
      },
      { type: "h2", text: "5. Panik ve özgüven eksikliği" },
      {
        type: "p",
        text: "Bazı adaylar aslında hazırdır ama sınav anında panik onları ele geçirir; bildikleri soruları bile yanlış yaparlar. Yetersiz uyku, aç karnına sınava girmek ve 'ya kalırsam' düşüncesine kapılmak paniği besler. Hazırlığın kadar zihinsel durumun da sonucu etkiler.",
      },
      {
        type: "quote",
        text: "Sınavda kalan çoğu aday bilmediği için değil, bildiğini gösteremediği için kalır. Fark, hazırlıkta değil, hazırlığı sınav anına taşıyabilmektedir.",
      },
      { type: "h2", text: "Hatalardan nasıl kaçınılır?" },
      {
        type: "list",
        items: [
          "Çalışmayı güne yay; her gün az ama düzenli çalış.",
          "Yanlışlarını biriktir ve tekrar tekrar onlara dön.",
          "Her soruyu, özellikle olumsuz ifadeleri, sonuna kadar oku.",
          "İlk yardımı senaryo canlandırarak ciddiyetle çalış.",
          "Sınav öncesi iyi uyu, hafif bir şeyler ye ve erken git.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Bir kez kaldım, yine kalır mıyım diye korkuyorum. Ne yapmalıyım?",
            a: "İlk denemende hangi konularda yanlış yaptığını çıkar ve bir sonraki hazırlığını tamamen o zayıf noktalara odakla. Kalmak bir bitiş değil, nerede eksiğin olduğunu gösteren bir harita olabilir.",
          },
          {
            q: "Hazırım ama panikliyorum, bu normal mi?",
            a: "Çok yaygın. Deneme sınavını gerçek koşullarda (60 dakika, tek oturuş) çözmek ve nefes teknikleri, sınav anındaki paniği belirgin biçimde azaltır.",
          },
        ],
      },
    ],
    related: [
      "ehliyet-sinavini-ilk-denemede-gecmenin-10-altin-kurali",
      "en-cok-yanilinan-20-soru",
      "sinavi-gectikten-sonra-yeni-suruculer-icin-ilk-adimlar",
    ],
  },
  {
    slug: "sinavi-gectikten-sonra-yeni-suruculer-icin-ilk-adimlar",
    title: "Sınavı Geçtikten Sonra: Yeni Sürücüler İçin İlk Adımlar",
    description:
      "Ehliyeti aldıktan sonra yeni sürücülerin dikkat etmesi gerekenler: aday sürücülük dönemi, güvenli sürüş alışkanlıkları ve öz güven kazanma.",
    category: "Motivasyon",
    icon: "Sparkles",
    readingMinutes: 7,
    intro:
      "Ehliyet cebinde ama asıl öğrenme şimdi başlıyor. Yeni sürücüler için ilk günlerin rehberi.",
    updated: "2026-01-15",
    blocks: [
      {
        type: "p",
        text: "Tebrikler; sınavları geçip ehliyetini aldın. Ama deneyimli her sürücünün bildiği bir gerçek var: asıl öğrenme, ehliyeti aldıktan sonra başlar. Sürücü kursu sana temel becerileri kazandırır; gerçek ustalık ise trafikte geçirdiğin zamanla, kademeli olarak gelir. Bu yazı, o ilk günlerde işini kolaylaştıracak.",
      },
      { type: "h2", text: "Aday sürücü olduğunu unutma" },
      {
        type: "p",
        text: "İlk kez ehliyet alan sürücüler belirli bir süre 'aday sürücü' olarak kabul edilir. Bu dönemde belirli kurallara özellikle dikkat etmen gerekir; çünkü ihlaller aday sürücüler için daha ağır sonuçlar doğurabilir. Bu dönemi bir kısıtlama değil, güvenli alışkanlıklar edinmen için verilmiş bir alıştırma süresi olarak gör.",
      },
      {
        type: "warning",
        text: "Aday sürücülük dönemindeki kurallar ve ihlallerin sonuçları düzenlemelere göre belirlenir. Kendi durumun için güncel bilgiyi resmî kaynaklardan teyit et.",
      },
      { type: "h2", text: "İlk sürüşler için öneriler" },
      {
        type: "steps",
        items: [
          "İlk günlerde tanıdık, sakin ve az trafikli yollarda pratik yap; kendine güven kazan.",
          "Mümkünse ilk sürüşlerini yoğun saatler dışında, gündüz ve iyi hava koşullarında yap.",
          "Yanında deneyimli bir sürücü olması, hem güven verir hem de küçük ipuçları edinmeni sağlar.",
          "Park etme ve geri manevra gibi zorlandığın konuları boş bir alanda tekrar et.",
          "Kendini hazır hissettikçe kademeli olarak daha yoğun yollara ve gece sürüşüne geç.",
        ],
      },
      { type: "h2", text: "Güvenli alışkanlıkları baştan kur" },
      {
        type: "p",
        text: "İlk edindiğin alışkanlıklar yıllarca sürecek. Bu yüzden en baştan doğrusunu yerleştir: her binişte kemeri tak, harekete geçmeden aynaları ve kör noktayı kontrol et, takip mesafesini koru, telefonu kullanma. Bu davranışlar başta bilinçli çaba ister ama kısa sürede refleks hâline gelir.",
      },
      {
        type: "list",
        items: [
          "Telefonu sürüş sırasında hiç ele alma; navigasyon gerekiyorsa önceden ayarla.",
          "Takip mesafesini koru; acele, kazaların en yaygın sebebidir.",
          "Hava ve yol koşullarına göre hızını ayarla, sınırların altında kalmaktan çekinme.",
          "Yorgun veya uykusuzken direksiyona geçme.",
          "Alkollüyken asla araç kullanma.",
        ],
      },
      { type: "h2", text: "Öz güven zamanla gelir" },
      {
        type: "p",
        text: "İlk haftalarda tedirgin olman son derece normal. Her deneyimli sürücü bir zamanlar bu noktadaydı. Kendine karşı sabırlı ol, küçük başarıları kutla ve her sürüşün seni biraz daha ustalaştırdığını unutma. Acele etmeden, güvenliği merkeze alarak kazandığın deneyim, seni yıllar boyu güvende tutacak sağlam bir temel oluşturur.",
      },
      {
        type: "quote",
        text: "İyi sürücü, hiç hata yapmayan değil; her sürüşten bir şey öğrenen ve güvenliği asla ikinci plana atmayan sürücüdür.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Ehliyeti aldım ama araç kullanmaya korkuyorum, normal mi?",
            a: "Tamamen normal. Sakin yollarda kısa ve sık pratikler yaparak güven kazanabilirsin. Deneyim arttıkça korku yerini rahatlığa bırakır.",
          },
          {
            q: "İlk sürüşlerimi nerede yapmalıyım?",
            a: "Tanıdık, az trafikli ve sakin yollarda, tercihen gündüz ve iyi havada. Kendine güvendikçe kademeli olarak daha zorlu koşullara geçebilirsin.",
          },
        ],
      },
    ],
    related: [
      "ehliyet-sinavinda-basarisiz-olanlarin-ortak-hatalari",
      "direksiyon-sinavina-girmeden-once-bilmeniz-gereken-her-sey",
      "trafik-kurallarini-ezberlemeden-ogrenmenin-yollari",
    ],
  },
];
