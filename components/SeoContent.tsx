import Link from "next/link";
import {
  Signpost,
  Gauge,
  HeartPulse,
  Wrench,
  Users,
  ClipboardList,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Fuel,
  Battery,
  CircleDot,
  Siren,
  Bandage,
  Bone,
  Leaf,
  Timer,
  Target,
} from "lucide-react";
import { DurSign, YayaGecidiSign, GirisYokSign } from "@/components/TrafficSigns";

function SectionIcon({
  icon: Icon,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2 shrink-0">
      <Icon size={18} />
    </span>
  );
}

const faqItems = [
  {
    q: "Ehliyet sınavında kaç soru sorulur ve geçme puanı kaçtır?",
    a: "Sürücü adayları sınavı; İlk Yardım, Trafik ve Çevre Bilgisi, Motor ve Araç Tekniği Bilgisi olmak üzere üç dersten oluşur. Her ders kendi içinde 100 puan üzerinden değerlendirilir ve başarılı sayılmak için her dersten ayrı ayrı en az 70 puan almak gerekir.",
  },
  {
    q: "Ehliyet sınavı süresi ne kadardır?",
    a: "Sınav süresi sertifika türüne göre değişmekle birlikte genellikle 130 dakika civarındadır. EhliyetAl'daki sınav simülasyonu ise pratik yapman için 50 soru ve 60 dakikalık kısaltılmış bir formatta sunulur.",
  },
  {
    q: "Yanlış cevaplar doğru cevabı götürür mü?",
    a: "Hayır. Ehliyet sınavında yanlış cevaplar dikkate alınmaz, sadece doğru cevaplarınız üzerinden puanlama yapılır. Bu yüzden boş bırakmaktansa mantıklı bir tahminde bulunmak her zaman daha avantajlıdır.",
  },
  {
    q: "2026 ehliyet sınavı sorularında değişiklik var mı?",
    a: "Sınav konuları yıllar içinde büyük ölçüde benzer kalır; trafik kuralları, ilk yardım ve motor bilgisi temel çerçeveyi oluşturur. Güncel mevzuat değişikliklerini takip etmek için resmi kaynakları kontrol etmeni öneririz.",
  },
  {
    q: "Ehliyet sınavına nasıl çalışılmalı?",
    a: "Konuları ezberlemek yerine mantığını anlayarak çalışmak, düzenli aralıklarla mini testler çözmek ve yanlış yaptığın soruları tekrar etmek en etkili yöntemdir. EhliyetAl'daki 'Tekrar Çöz' modu tam olarak bunun için tasarlandı.",
  },
  {
    q: "EhliyetAl'daki sorular gerçek sınavda çıkan sorularla birebir aynı mı?",
    a: "Hayır. EhliyetAl'daki sorular, gerçek sınavla aynı konuları ve zorluk seviyesini kapsayan, sitemize özel hazırlanmış özgün alıştırma sorularıdır. Gerçek sınavda karşılaşacağın sorular farklı olacaktır; amacımız seni konulara aşina hâle getirmektir.",
  },
];

const faqSchema = {
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EhliyetAl",
  url: "https://ehliyetal.net/",
  description:
    "2026 ehliyet sınavı sorularını ve çıkmış ehliyet sınavlarını ücretsiz çöz.",
  author: {
    "@type": "Person",
    name: "Fatih Emin Çakıroğlu",
    url: "https://fatihemincakiroglu.com/",
  },
  publisher: {
    "@type": "Person",
    name: "Fatih Emin Çakıroğlu",
    url: "https://fatihemincakiroglu.com/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://ehliyetal.net/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ehliyet Sınavı Soruları (2026)",
      item: "https://ehliyetal.net/",
    },
  ],
};

export default function SeoContent() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-6 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex items-center gap-3 mb-4 mt-4">
        <SectionIcon icon={Signpost} />
        <h2 className="font-display text-2xl text-ink">
          Trafik ve Çevre Bilgisi Soruları
        </h2>
      </div>
      <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
        Ehliyet sınavının en kapsamlı bölümü trafik ve çevre bilgisidir.
        İşaretlerin anlamlarından hız sınırlarına, şerit kurallarından ceza
        puanlarına kadar geniş bir konu yelpazesini kapsar.
      </p>

      <div className="flex items-center gap-2 mb-3">
        <Gauge size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Trafik İşaretleri Soruları</h3>
      </div>
      <div className="flex flex-wrap gap-6 items-center mb-4 bg-surface border border-line rounded-2xl p-5">
        <DurSign size={64} />
        <YayaGecidiSign size={64} />
        <GirisYokSign size={64} />
        <ul className="flex-1 min-w-[200px] text-sm text-ink-soft space-y-2">
          <li className="flex gap-2"><CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> Tehlike uyarı işaretleri (üçgen, sarı/kırmızı kenarlı)</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> Trafik tanzim işaretleri (dur, yol ver, girişi olmayan yol)</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> Bilgi işaretleri (otopark, hastane, durak)</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> Yatay işaretlemeler (şerit çizgileri, yaya geçidi)</li>
        </ul>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Trafik Kuralları ve Cezalar</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Kırmızı ışık ve dur işareti ihlallerinin sonuçları</li>
        <li>Ceza puanı sistemi ve sürücü belgesinin geri alınması</li>
        <li>Alkollü veya uyuşturucu etkisinde araç kullanmanın yaptırımları</li>
        <li>Emniyet kemeri ve çocuk koltuğu zorunlulukları</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Timer size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Hız Sınırları ve Takip Mesafesi</h3>
      </div>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-ink-soft border-b border-line">
              <th className="py-2 pr-4 font-body font-medium">Yol Türü</th>
              <th className="py-2 font-body font-medium">Otomobil Azami Hız</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-line">
              <td className="py-2 pr-4">Yerleşim yeri içi</td>
              <td className="py-2">50 km/sa</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">Yerleşim yeri dışı (bölünmüş olmayan)</td>
              <td className="py-2">90 km/sa</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">Bölünmüş kara yolu</td>
              <td className="py-2">110 km/sa</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Otoyol</td>
              <td className="py-2">120 km/sa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Signpost size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Şerit ve Geçiş Kuralları</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Şerit değiştirmeden önce sinyal verme zorunluluğu</li>
        <li>Sollama (geçme) yapılabilecek ve yapılamayacak durumlar</li>
        <li>Kavşaklarda ve dönel kavşaklarda geçiş önceliği</li>
      </ul>
      <Link
        href="/quiz/trafik"
        className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors mb-12"
      >
        Trafik ve Çevre sorularını çöz →
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <SectionIcon icon={HeartPulse} />
        <h2 className="font-display text-2xl text-ink">İlk Yardım Soruları</h2>
      </div>
      <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
        İlk yardım bilgisi, bir trafik kazası anında hayat kurtarabilecek en
        kritik bölümlerden biridir. Temel yaşam desteğinden yara müdahalesine
        kadar birçok konuyu kapsar.
      </p>

      <div className="flex items-center gap-2 mb-3">
        <Siren size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Temel Yaşam Desteği</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Bilinç ve solunum kontrolü nasıl yapılır</li>
        <li>Kalp masajı ve suni solunum oranları</li>
        <li>Koma pozisyonu ve ne zaman uygulanır</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Bandage size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Kanama ve Yara Müdahalesi</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Atardamar, toplardamar ve kılcal damar kanamalarının farkları</li>
        <li>Kanama durdurma teknikleri ve basınç uygulama</li>
        <li>Açık yaralarda yapılması ve yapılmaması gerekenler</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Bone size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Kırık, Çıkık, Burkulma</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Şüpheli bölgeyi sabitleme ve hareket ettirmeme kuralı</li>
        <li>Açık ve kapalı kırıkların ayırt edilmesi</li>
        <li>Burkulmalarda soğuk uygulama ve tespit yöntemleri</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Trafik Kazalarında İlk Yardım</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Olay yeri güvenliğinin sağlanması</li>
        <li>112'yi arama ve doğru bilgi verme</li>
        <li>Kazazedeyi araçtan çıkarma gereken/gerekmeyen durumlar</li>
      </ul>
      <Link
        href="/quiz/ilkyardim"
        className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors mb-12"
      >
        İlk Yardım sorularını çöz →
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <SectionIcon icon={Wrench} />
        <h2 className="font-display text-2xl text-ink">Motor ve Araç Tekniği Soruları</h2>
      </div>
      <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
        Aracın nasıl çalıştığını, temel bakım kurallarını ve arıza belirtilerini
        anlamak hem sınav hem de güvenli sürüş için önemlidir.
      </p>

      <div className="flex items-center gap-2 mb-3">
        <Fuel size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Motor Sistemleri</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Yağlama, soğutma ve yakıt sistemlerinin görevleri</li>
        <li>Triger kayışı, şanzıman ve debriyaj gibi temel parçalar</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <CircleDot size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Fren ve Süspansiyon Sistemi</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Fren hidroliği ve ABS sisteminin işlevi</li>
        <li>Süspansiyonun yol tutuşuna etkisi</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Battery size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Akü, Elektrik ve Aydınlatma</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Akü bakımı ve sülfatlaşma belirtileri</li>
        <li>Sigorta sisteminin görevi</li>
        <li>Far ayarı ve doğru ışık kullanımı</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <CircleDot size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Lastik ve Tekerlek Bilgisi</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Asgari diş derinliği ve lastik değişim zamanı</li>
        <li>Hava basıncının yol tutuşuna etkisi</li>
      </ul>
      <Link
        href="/quiz/motor"
        className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors mb-12"
      >
        Motor ve Araç Tekniği sorularını çöz →
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <SectionIcon icon={Users} />
        <h2 className="font-display text-2xl text-ink">Trafik Adabı Soruları</h2>
      </div>
      <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
        Trafik adabı, kuralların ötesinde bir sorumluluk ve saygı bilincidir.
        Sınavda da güvenli sürüş kültürünün bir parçası olarak sorulur.
      </p>

      <div className="flex items-center gap-2 mb-3">
        <Users size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Sürücü Davranışları</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Sorumluluk duygusu ve davranışların sonuçlarını düşünme</li>
        <li>Öfke kontrolü ve agresif sürüşten kaçınma</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Users size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Yaya ve Diğer Sürücülere Saygı</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Yaya geçitlerinde öncelik verme</li>
        <li>Sinyal verme ve şerit nezaketi</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Leaf size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Çevre Bilinci ve Sürdürülebilirlik</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Egzoz emisyonları ve hava kirliliği</li>
        <li>Atık motor yağı gibi zararlı maddelerin bertarafı</li>
        <li>Toplu taşıma ve elektrikli araçların çevresel etkisi</li>
      </ul>
      <Link
        href="/quiz/cevre"
        className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors mb-12"
      >
        Trafik Adabı ve Çevre sorularını çöz →
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <SectionIcon icon={ClipboardList} />
        <h2 className="font-display text-2xl text-ink">Deneme Sınavları</h2>
      </div>
      <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
        Konuları tek tek çalıştıktan sonra kendini gerçek sınav koşullarında
        test etmek, hazır olup olmadığını anlamanın en iyi yoludur.
      </p>

      <div className="flex items-center gap-2 mb-3">
        <Target size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">2026 Ehliyet Deneme Sınavı</h3>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mb-6">
        EhliyetAl'ın sınav simülasyonu; trafik, motor, ilk yardım ve çevre
        konularından karışık 50 soru ve 60 dakikalık süreyle gerçek sınav
        temposunu deneyimletir. %70 ve üzeri puan alman geçme sınırıdır.
      </p>

      <div className="flex items-center gap-2 mb-3">
        <ClipboardList size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Konulara Göre Mini Testler</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li><Link href="/quiz/trafik" className="text-gold hover:underline">Trafik ve Çevre Bilgisi</Link> mini testi</li>
        <li><Link href="/quiz/ilkyardim" className="text-gold hover:underline">İlk Yardım</Link> mini testi</li>
        <li><Link href="/quiz/motor" className="text-gold hover:underline">Motor ve Araç Bilgisi</Link> mini testi</li>
        <li><Link href="/quiz/cevre" className="text-gold hover:underline">Trafik Adabı ve Çevre Bilinci</Link> mini testi</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <BookOpen size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Çıkmış Sorular</h3>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mb-12">
        EhliyetAl'daki tüm sorular, gerçek sınavlarla aynı konuları kapsayan
        özgün alıştırma sorularıdır; resmi soru kitapçıklarının birebir
        kopyası değildir. Gerçek çıkmış sınav kitapçıklarına ulaşmak istersen
        Millî Eğitim Bakanlığı'nın resmi kaynaklarını incelemeni öneririz.
      </p>

      <div className="flex items-center gap-3 mb-4">
        <SectionIcon icon={BookOpen} />
        <h2 className="font-display text-2xl text-ink">Sınava Hazırlık Rehberi</h2>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <ClipboardList size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Sınav Formatı ve Puanlama</h3>
      </div>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-ink-soft border-b border-line">
              <th className="py-2 pr-4 font-body font-medium">Ders</th>
              <th className="py-2 pr-4 font-body font-medium">Soru Sayısı</th>
              <th className="py-2 font-body font-medium">Geçme Puanı</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-b border-line">
              <td className="py-2 pr-4">İlk Yardım Bilgisi</td>
              <td className="py-2 pr-4">30 soru</td>
              <td className="py-2">70 / 100</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">Trafik ve Çevre Bilgisi</td>
              <td className="py-2 pr-4">40 soru</td>
              <td className="py-2">70 / 100</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Motor ve Araç Tekniği Bilgisi</td>
              <td className="py-2 pr-4">30 soru</td>
              <td className="py-2">70 / 100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Sık Yapılan Hatalar</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-6 list-disc list-inside">
        <li>Soruyu hızlıca okuyup "değildir" gibi olumsuz ifadeleri atlamak</li>
        <li>İşaretlerin renk ve şekil ayrımını (üçgen/daire, kırmızı/mavi) karıştırmak</li>
        <li>İlk yardım pozisyonlarını mantığını anlamadan ezberlemek</li>
        <li>Motor sorularında günlük hayat tecrübesiyle teorik bilgiyi karıştırmak</li>
        <li>Çalışmayı sınavdan bir gece öncesine bırakmak</li>
      </ul>

      <div className="flex items-center gap-2 mb-3">
        <Timer size={16} className="text-gold" />
        <h3 className="font-display text-lg text-ink">Çalışma Programı Önerileri</h3>
      </div>
      <ul className="text-sm text-ink-soft space-y-2 mb-12 list-disc list-inside">
        <li>1. hafta: Trafik ve Çevre Bilgisi konularına odaklan</li>
        <li>2. hafta: İlk Yardım ve Motor bilgisi konularını çalış</li>
        <li>3. hafta: Trafik adabı konularını tamamla, tüm kategorilerde tekrar yap</li>
        <li>Sınavdan önceki hafta: Düzenli olarak sınav simülasyonu çöz ve yanlışlarını tekrar et</li>
      </ul>

      <div className="flex items-center gap-3 mb-6">
        <SectionIcon icon={CheckCircle2} />
        <h2 className="font-display text-2xl text-ink">Sıkça Sorulan Sorular</h2>
      </div>
      <div className="flex flex-col gap-3 mb-4">
        {faqItems.map((item) => (
          <details
            key={item.q}
            className="group bg-surface border border-line rounded-xl p-4 open:border-gold-soft"
          >
            <summary className="cursor-pointer font-display text-base text-ink list-none flex items-center justify-between gap-3">
              {item.q}
              <span className="text-gold shrink-0 transition-transform group-open:rotate-45 font-display text-xl">
                +
              </span>
            </summary>
            <p className="text-sm text-ink-soft leading-relaxed mt-3">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
