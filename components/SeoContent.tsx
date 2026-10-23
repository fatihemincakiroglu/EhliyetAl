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
  ChevronDown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { DurSign, YayaGecidiSign, GirisYokSign } from "@/components/TrafficSigns";
import { faqItems, faqSchema } from "@/lib/faq";

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

/* ---------------- Yapı taşları ---------------- */

type Tone = { color: string; wash: string };
const TONES: Record<string, Tone> = {
  trafik: { color: "var(--color-cat-trafik)", wash: "var(--color-cat-trafik-wash)" },
  ilkyardim: { color: "var(--color-cat-ilkyardim)", wash: "var(--color-cat-ilkyardim-wash)" },
  motor: { color: "var(--color-cat-motor)", wash: "var(--color-cat-motor-wash)" },
  cevre: { color: "var(--color-cat-cevre)", wash: "var(--color-cat-cevre-wash)" },
  primary: { color: "var(--color-primary)", wash: "var(--color-primary-wash)" },
  sun: { color: "var(--color-tangerine)", wash: "var(--color-tangerine-wash)" },
};

function Section({
  icon: Icon,
  tone,
  title,
  intro,
  children,
  cta,
}: {
  icon: LucideIcon;
  tone: Tone;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-7">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: tone.wash, color: tone.color }}
        >
          <Icon size={22} strokeWidth={2.3} />
        </span>
        <h2 className="font-display font-black text-xl sm:text-2xl leading-tight text-ink">{title}</h2>
      </div>
      {intro && <p className="text-ink-soft font-semibold leading-relaxed mb-5">{intro}</p>}
      {children}
      {cta && (
        <Link
          href={cta.href}
          className="mt-5 inline-flex items-center gap-2 min-h-11 rounded-2xl px-4 font-extrabold text-[15px] transition hover:brightness-[0.97]"
          style={{ background: tone.wash, color: tone.color }}
        >
          {cta.label}
          <ArrowRight size={17} strokeWidth={2.6} />
        </Link>
      )}
    </section>
  );
}

function Sub({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-paper p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-2.5">
        <Icon size={17} strokeWidth={2.4} className="text-ink-soft shrink-0" />
        <h3 className="font-display font-extrabold text-[17px] leading-tight text-ink">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="text-[15px] font-semibold text-ink-soft space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-ink-soft/50 shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-line bg-surface">
      <table className="w-full text-[15px] border-collapse">
        <thead>
          <tr className="text-left bg-surface-alt">
            {head.map((h) => (
              <th key={h} className="py-2.5 px-4 font-extrabold text-ink-soft text-[13px] whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-ink font-bold">
          {rows.map((r, i) => (
            <tr key={i} className="border-t-2 border-line">
              {r.map((c, j) => (
                <td key={j} className={`py-2.5 px-4 ${j > 0 ? "whitespace-nowrap tabular-nums" : ""}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inlineLink = "font-extrabold text-primary hover:underline underline-offset-2";

/* ---------------- İçerik ---------------- */

export default function SeoContent() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-16 flex flex-col gap-5">
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

      <Section
        icon={Signpost}
        tone={TONES.trafik}
        title="Trafik ve Çevre Bilgisi Soruları"
        intro="Ehliyet sınavının en kapsamlı bölümü trafik ve çevre bilgisidir. İşaretlerin anlamlarından hız sınırlarına, şerit kurallarından ceza puanlarına kadar geniş bir konu yelpazesini kapsar."
        cta={{ href: "/quiz/trafik", label: "Trafik ve Çevre sorularını çöz" }}
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <Sub icon={Gauge} title="Trafik İşaretleri Soruları" className="lg:col-span-2">
            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex gap-4 shrink-0">
                <DurSign size={64} />
                <YayaGecidiSign size={64} />
                <GirisYokSign size={64} />
              </div>
              <ul className="flex-1 min-w-[220px] text-[15px] font-semibold text-ink-soft space-y-2">
                <li className="flex gap-2"><CheckCircle2 size={17} strokeWidth={2.4} className="text-success shrink-0 mt-0.5" /> Tehlike uyarı işaretleri (üçgen, sarı/kırmızı kenarlı)</li>
                <li className="flex gap-2"><CheckCircle2 size={17} strokeWidth={2.4} className="text-success shrink-0 mt-0.5" /> Trafik tanzim işaretleri (dur, yol ver, girişi olmayan yol)</li>
                <li className="flex gap-2"><CheckCircle2 size={17} strokeWidth={2.4} className="text-success shrink-0 mt-0.5" /> Bilgi işaretleri (otopark, hastane, durak)</li>
                <li className="flex gap-2"><CheckCircle2 size={17} strokeWidth={2.4} className="text-success shrink-0 mt-0.5" /> Yatay işaretlemeler (şerit çizgileri, yaya geçidi)</li>
              </ul>
            </div>
          </Sub>
          <Sub icon={AlertTriangle} title="Trafik Kuralları ve Cezalar">
            <Bullets
              items={[
                "Kırmızı ışık ve dur işareti ihlallerinin sonuçları",
                "Ceza puanı sistemi ve sürücü belgesinin geri alınması",
                "Alkollü veya uyuşturucu etkisinde araç kullanmanın yaptırımları",
                "Emniyet kemeri ve çocuk koltuğu zorunlulukları",
              ]}
            />
          </Sub>
          <Sub icon={Signpost} title="Şerit ve Geçiş Kuralları">
            <Bullets
              items={[
                "Şerit değiştirmeden önce sinyal verme zorunluluğu",
                "Sollama (geçme) yapılabilecek ve yapılamayacak durumlar",
                "Kavşaklarda ve dönel kavşaklarda geçiş önceliği",
              ]}
            />
          </Sub>
          <Sub icon={Timer} title="Hız Sınırları ve Takip Mesafesi" className="lg:col-span-2">
            <Table
              head={["Yol Türü", "Otomobil Azami Hız"]}
              rows={[
                ["Yerleşim yeri içi", "50 km/sa"],
                ["Yerleşim yeri dışı (bölünmüş olmayan)", "90 km/sa"],
                ["Bölünmüş kara yolu", "110 km/sa"],
                ["Otoyol", "120 km/sa"],
              ]}
            />
          </Sub>
        </div>
      </Section>

      <Section
        icon={HeartPulse}
        tone={TONES.ilkyardim}
        title="İlk Yardım Soruları"
        intro="İlk yardım bilgisi, bir trafik kazası anında hayat kurtarabilecek en kritik bölümlerden biridir. Temel yaşam desteğinden yara müdahalesine kadar birçok konuyu kapsar."
        cta={{ href: "/quiz/ilkyardim", label: "İlk Yardım sorularını çöz" }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Sub icon={Siren} title="Temel Yaşam Desteği">
            <Bullets
              items={[
                "Bilinç ve solunum kontrolü nasıl yapılır",
                "Kalp masajı ve suni solunum oranları",
                "Koma pozisyonu ve ne zaman uygulanır",
              ]}
            />
          </Sub>
          <Sub icon={Bandage} title="Kanama ve Yara Müdahalesi">
            <Bullets
              items={[
                "Atardamar, toplardamar ve kılcal damar kanamalarının farkları",
                "Kanama durdurma teknikleri ve basınç uygulama",
                "Açık yaralarda yapılması ve yapılmaması gerekenler",
              ]}
            />
          </Sub>
          <Sub icon={Bone} title="Kırık, Çıkık, Burkulma">
            <Bullets
              items={[
                "Şüpheli bölgeyi sabitleme ve hareket ettirmeme kuralı",
                "Açık ve kapalı kırıkların ayırt edilmesi",
                "Burkulmalarda soğuk uygulama ve tespit yöntemleri",
              ]}
            />
          </Sub>
          <Sub icon={AlertTriangle} title="Trafik Kazalarında İlk Yardım">
            <Bullets
              items={[
                "Olay yeri güvenliğinin sağlanması",
                "112'yi arama ve doğru bilgi verme",
                "Kazazedeyi araçtan çıkarma gereken/gerekmeyen durumlar",
              ]}
            />
          </Sub>
        </div>
      </Section>

      <Section
        icon={Wrench}
        tone={TONES.motor}
        title="Motor ve Araç Tekniği Soruları"
        intro="Aracın nasıl çalıştığını, temel bakım kurallarını ve arıza belirtilerini anlamak hem sınav hem de güvenli sürüş için önemlidir."
        cta={{ href: "/quiz/motor", label: "Motor ve Araç Tekniği sorularını çöz" }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Sub icon={Fuel} title="Motor Sistemleri">
            <Bullets
              items={[
                "Yağlama, soğutma ve yakıt sistemlerinin görevleri",
                "Triger kayışı, şanzıman ve debriyaj gibi temel parçalar",
              ]}
            />
          </Sub>
          <Sub icon={CircleDot} title="Fren ve Süspansiyon Sistemi">
            <Bullets items={["Fren hidroliği ve ABS sisteminin işlevi", "Süspansiyonun yol tutuşuna etkisi"]} />
          </Sub>
          <Sub icon={Battery} title="Akü, Elektrik ve Aydınlatma">
            <Bullets
              items={[
                "Akü bakımı ve sülfatlaşma belirtileri",
                "Sigorta sisteminin görevi",
                "Far ayarı ve doğru ışık kullanımı",
              ]}
            />
          </Sub>
          <Sub icon={CircleDot} title="Lastik ve Tekerlek Bilgisi">
            <Bullets
              items={["Asgari diş derinliği ve lastik değişim zamanı", "Hava basıncının yol tutuşuna etkisi"]}
            />
          </Sub>
        </div>
      </Section>

      <Section
        icon={Users}
        tone={TONES.cevre}
        title="Trafik Adabı Soruları"
        intro="Trafik adabı, kuralların ötesinde bir sorumluluk ve saygı bilincidir. Sınavda da güvenli sürüş kültürünün bir parçası olarak sorulur."
        cta={{ href: "/quiz/cevre", label: "Trafik Adabı ve Çevre sorularını çöz" }}
      >
        <div className="grid gap-3 lg:grid-cols-3">
          <Sub icon={Users} title="Sürücü Davranışları">
            <Bullets
              items={[
                "Sorumluluk duygusu ve davranışların sonuçlarını düşünme",
                "Öfke kontrolü ve agresif sürüşten kaçınma",
              ]}
            />
          </Sub>
          <Sub icon={Users} title="Yaya ve Diğer Sürücülere Saygı">
            <Bullets items={["Yaya geçitlerinde öncelik verme", "Sinyal verme ve şerit nezaketi"]} />
          </Sub>
          <Sub icon={Leaf} title="Çevre Bilinci ve Sürdürülebilirlik">
            <Bullets
              items={[
                "Egzoz emisyonları ve hava kirliliği",
                "Atık motor yağı gibi zararlı maddelerin bertarafı",
                "Toplu taşıma ve elektrikli araçların çevresel etkisi",
              ]}
            />
          </Sub>
        </div>
      </Section>

      <Section
        icon={ClipboardList}
        tone={TONES.primary}
        title="Deneme Sınavları"
        intro="Konuları tek tek çalıştıktan sonra kendini gerçek sınav koşullarında test etmek, hazır olup olmadığını anlamanın en iyi yoludur."
      >
        <div className="grid gap-3 lg:grid-cols-3">
          <Sub icon={Target} title="2026 Ehliyet Deneme Sınavı">
            <p className="text-[15px] font-semibold text-ink-soft leading-relaxed">
              EhliyetAl&apos;ın sınav simülasyonu; trafik, motor, ilk yardım ve çevre
              konularından karışık 50 soru ve 60 dakikalık süreyle gerçek sınav
              temposunu deneyimletir. %70 ve üzeri puan alman geçme sınırıdır.
            </p>
          </Sub>
          <Sub icon={ClipboardList} title="Konulara Göre Mini Testler">
            <Bullets
              items={[
                <><Link href="/quiz/trafik" className={inlineLink}>Trafik ve Çevre Bilgisi</Link> mini testi</>,
                <><Link href="/quiz/ilkyardim" className={inlineLink}>İlk Yardım</Link> mini testi</>,
                <><Link href="/quiz/motor" className={inlineLink}>Motor ve Araç Bilgisi</Link> mini testi</>,
                <><Link href="/quiz/cevre" className={inlineLink}>Trafik Adabı ve Çevre Bilinci</Link> mini testi</>,
              ]}
            />
          </Sub>
          <Sub icon={BookOpen} title="Çıkmış Sorular">
            <p className="text-[15px] font-semibold text-ink-soft leading-relaxed">
              EhliyetAl&apos;daki tüm sorular, gerçek sınavlarla aynı konuları kapsayan
              özgün alıştırma sorularıdır; resmi soru kitapçıklarının birebir
              kopyası değildir. Gerçek çıkmış sınav kitapçıklarına ulaşmak istersen
              Millî Eğitim Bakanlığı&apos;nın resmi kaynaklarını incelemeni öneririz.
            </p>
          </Sub>
        </div>
      </Section>

      <Section icon={BookOpen} tone={TONES.sun} title="Sınava Hazırlık Rehberi">
        <div className="grid gap-3 lg:grid-cols-2">
          <Sub icon={ClipboardList} title="Sınav Formatı ve Puanlama" className="lg:col-span-2">
            <Table
              head={["Ders", "Soru Sayısı", "Geçme Puanı"]}
              rows={[
                ["İlk Yardım Bilgisi", "30 soru", "70 / 100"],
                ["Trafik ve Çevre Bilgisi", "40 soru", "70 / 100"],
                ["Motor ve Araç Tekniği Bilgisi", "30 soru", "70 / 100"],
              ]}
            />
          </Sub>
          <Sub icon={AlertTriangle} title="Sık Yapılan Hatalar">
            <Bullets
              items={[
                "Soruyu hızlıca okuyup \"değildir\" gibi olumsuz ifadeleri atlamak",
                "İşaretlerin renk ve şekil ayrımını (üçgen/daire, kırmızı/mavi) karıştırmak",
                "İlk yardım pozisyonlarını mantığını anlamadan ezberlemek",
                "Motor sorularında günlük hayat tecrübesiyle teorik bilgiyi karıştırmak",
                "Çalışmayı sınavdan bir gece öncesine bırakmak",
              ]}
            />
          </Sub>
          <Sub icon={Timer} title="Çalışma Programı Önerileri">
            <Bullets
              items={[
                "1. hafta: Trafik ve Çevre Bilgisi konularına odaklan",
                "2. hafta: İlk Yardım ve Motor bilgisi konularını çalış",
                "3. hafta: Trafik adabı konularını tamamla, tüm kategorilerde tekrar yap",
                "Sınavdan önceki hafta: Düzenli olarak sınav simülasyonu çöz ve yanlışlarını tekrar et",
              ]}
            />
          </Sub>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/sozluk"
            className="btn-soft rounded-2xl min-h-11 px-4 inline-flex items-center gap-2 text-[15px] text-ink"
          >
            Trafik Terimleri Sözlüğü
            <ArrowRight size={17} strokeWidth={2.6} />
          </Link>
          <Link
            href="/rehber"
            className="btn-soft rounded-2xl min-h-11 px-4 inline-flex items-center gap-2 text-[15px] text-ink"
          >
            Başvuru ve ücretler rehberi
            <ArrowRight size={17} strokeWidth={2.6} />
          </Link>
        </div>
      </Section>

      <Section icon={CheckCircle2} tone={TONES.primary} title="Sıkça Sorulan Sorular">
        <div className="flex flex-col gap-2.5">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border-2 border-line bg-surface open:bg-paper"
            >
              <summary className="flex items-center justify-between gap-3 p-4 min-h-14 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-extrabold text-[15px] sm:text-base text-ink leading-snug">
                {item.q}
                <ChevronDown
                  size={20}
                  strokeWidth={2.6}
                  className="text-ink-soft shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="px-4 pb-4 -mt-1 text-[15px] font-semibold text-ink-soft leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
        <Link
          href="/sss"
          className="mt-5 inline-flex items-center gap-2 min-h-11 font-extrabold text-[15px] text-primary hover:underline underline-offset-2"
        >
          Tüm sıkça sorulan sorular
          <ArrowRight size={17} strokeWidth={2.6} />
        </Link>
      </Section>
    </div>
  );
}
