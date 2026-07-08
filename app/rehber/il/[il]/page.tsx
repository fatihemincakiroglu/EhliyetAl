import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle2,
  IdCard,
  Compass,
  ClipboardList,
  Car,
  Search,
} from "lucide-react";
import {
  provinces,
  getProvince,
  provincePath,
  provinceUrlSlug,
  relatedProvinces,
  type Province,
} from "@/lib/provinces";
import { categories } from "@/lib/questions";

const SITE_URL = "https://ehliyetal.net";

export function generateStaticParams() {
  return provinces.map((p) => ({ il: provinceUrlSlug(p) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ il: string }>;
}): Promise<Metadata> {
  const { il: slug } = await params;
  const province = getProvince(slug);
  if (!province) return {};

  const title = `${province.name} Ehliyet Sınavı Rehberi (${province.plate}) | EhliyetAl`;
  const description = `${province.name} ilinde ehliyet sınavına hazırlanan adaylar için başvuru süreci, sürücü kursu seçimi, sınav sonucu öğrenme ve ücretsiz deneme sınavlarıyla çalışma rehberi.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${provincePath(province)}`,
    },
  };
}

function faqFor(province: Province) {
  return [
    {
      q: `${province.name} ilinde ehliyet sınavına nereden başvurulur?`,
      a: `${province.name} il/ilçe millî eğitim müdürlüğüne bağlı, resmî izinli bir sürücü kursuna kayıt olarak başvuru sürecin başlar. Kurs, teorik ve direksiyon eğitimini tamamladıktan sonra seni sınav başvurusuna yönlendirir.`,
    },
    {
      q: `${province.name} ilinde teorik sınav sonucu nasıl öğrenilir?`,
      a: `Teorik sınav sonuçları genellikle e-Devlet üzerinden veya kayıtlı olduğun sürücü kursu aracılığıyla öğrenilir. Kesin sonuç açıklama tarihi ${province.name} il/ilçe millî eğitim müdürlüğü tarafından duyurulur.`,
    },
    {
      q: `${province.name} ilindeki sürücü kursları arasında fark var mı?`,
      a: `Müfredat ve sınav standardı Türkiye genelinde aynıdır; ${province.districts[0]}, ${province.districts[1]} gibi ilçelerdeki kurslar arasındaki fark genellikle eğitim kalitesi, sınıf mevcudu ve direksiyon araç/pist imkanlarıyla ilgilidir.`,
    },
    {
      q: `${province.name} için EhliyetAl'da ücretsiz çalışabilir miyim?`,
      a: `Evet. EhliyetAl'daki tüm sorular ve deneme sınavları ücretsizdir; ${province.name} dahil hangi ilde sınava gireceğin fark etmeksizin aynı soru havuzuyla çalışabilirsin.`,
    },
  ];
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ il: string }>;
}) {
  const { il: slug } = await params;
  const province = getProvince(slug);
  if (!province) notFound();

  const canonicalUrl = `${SITE_URL}${provincePath(province)}`;
  const faqItems = faqFor(province);
  const related = relatedProvinces(province);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: "İle Göre Rehber", item: `${SITE_URL}/rehber/il` },
      {
        "@type": "ListItem",
        position: 4,
        name: `${province.name} Ehliyet Sınavı Rehberi`,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/rehber/il"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Tüm illere dön
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <MapPin size={18} />
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-ink">
            {province.name} Ehliyet Sınavına Hazırlık Rehberi
          </h1>
        </div>

        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-5">
          {province.name} ilinde ehliyet almak isteyen sürücü adayları da
          Türkiye genelindeki standart süreci takip eder: sürücü kursuna
          kayıt, teorik eğitim, teorik sınav ve ardından direksiyon eğitimiyle
          uygulamalı sınav. EhliyetAl&apos;daki ücretsiz sorularla, {province.name}{" "}
          ilindeki teorik sınava hangi kurstan girersen gir aynı şekilde
          hazırlanabilirsin.
        </p>

        <div className="grid grid-cols-3 gap-2.5 mb-8">
          <div className="rounded-xl border border-line bg-surface px-3 py-3 text-center">
            <IdCard size={16} className="text-gold mx-auto mb-1.5" />
            <span className="block text-[11px] text-ink-soft uppercase tracking-wide">Plaka</span>
            <span className="block font-display text-sm text-ink">{province.plate}</span>
          </div>
          <div className="rounded-xl border border-line bg-surface px-3 py-3 text-center">
            <Compass size={16} className="text-gold mx-auto mb-1.5" />
            <span className="block text-[11px] text-ink-soft uppercase tracking-wide">Bölge</span>
            <span className="block font-display text-sm text-ink">{province.region}</span>
          </div>
          <div className="rounded-xl border border-line bg-surface px-3 py-3 text-center">
            <ClipboardList size={16} className="text-gold mx-auto mb-1.5" />
            <span className="block text-[11px] text-ink-soft uppercase tracking-wide">Sınav Dersi</span>
            <span className="block font-display text-sm text-ink">3 Ders</span>
          </div>
        </div>

        <h2 className="font-display text-lg text-ink mb-3">
          {province.name} İlinde Süreç Nasıl İşler?
        </h2>
        <ul className="text-sm text-ink-soft space-y-2 mb-8 list-disc list-inside">
          <li>
            Kayıt, {province.name} il/ilçe millî eğitim müdürlüğüne bağlı
            izinli bir sürücü kursu üzerinden yapılır.
          </li>
          <li>
            Teorik eğitim; ilk yardım, trafik ve çevre bilgisi, motor ve araç
            tekniği bilgisi derslerini kapsar.
          </li>
          <li>
            Teorik sınavda her dersten ayrı ayrı en az %70 almak gerekir.
          </li>
          <li>
            Sınav tarihleri, ücretler ve kontenjanlar {province.name} il/ilçe
            millî eğitim müdürlüğü tarafından duyurulur ve zamanla
            güncellenebilir.
          </li>
        </ul>

        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <Car size={16} />
          </span>
          <h2 className="font-display text-lg text-ink">
            {province.name}&apos;de Sürücü Kursu Seçerken Nelere Dikkat Edilir?
          </h2>
        </div>
        <ul className="text-sm text-ink-soft space-y-2 mb-8 list-disc list-inside">
          <li>
            Kursun Millî Eğitim Bakanlığı&apos;na bağlı resmî bir sürücü
            kursu belgesine sahip olduğunu teyit et.
          </li>
          <li>
            {province.districts[0]}, {province.districts[1]} ve{" "}
            {province.districts[2]} gibi merkezi ilçelerdeki kurslarda genelde
            direksiyon eğitimi için daha fazla araç/pist seçeneği bulunur.
          </li>
          <li>
            Teorik ders saatleri, derslik mevcudu ve direksiyon eğitmeni
            sayısı hakkında önceden bilgi al.
          </li>
          <li>
            Ücret ve taksit seçeneklerini yazılı sözleşmeyle netleştir; sözlü
            anlaşmalara güvenme.
          </li>
        </ul>

        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <Search size={16} />
          </span>
          <h2 className="font-display text-lg text-ink">
            Teorik Sınav Sonucu Nasıl Öğrenilir?
          </h2>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed mb-8">
          {province.name} ilinde girdiğin teorik sınavın sonucunu e-Devlet
          üzerinden ilgili başvuru ekranından ya da kayıtlı olduğun sürücü
          kursu üzerinden takip edebilirsin. Sonuç açıklama süresi sınav
          dönemine göre değişebileceğinden, kesin tarih için kursunla iletişimde
          kalman en sağlıklısı.
        </p>

        <div className="bg-gold-wash border border-gold-soft/40 rounded-2xl p-5 mb-8 flex gap-3">
          <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            {province.name} ilindeki güncel başvuru tarihleri, belge listesi
            ve ücret kalemleri için kayıtlı olduğun sürücü kursunu veya
            e-Devlet üzerinden il/ilçe millî eğitim müdürlüğünü teyit et —
            bu bilgiler ilden ile değil zamana göre değişir.
          </p>
        </div>

        <h2 className="font-display text-lg text-ink mb-3">
          Teorik Sınava Konu Bazında Çalış
        </h2>
        <div className="flex flex-col gap-2.5 mb-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/quiz/${category.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 hover:border-gold-soft hover:bg-gold-wash transition-colors"
            >
              <span className="min-w-0">
                <span className="block font-display text-sm text-ink">
                  {category.name}
                </span>
                <span className="block text-xs text-ink-soft">
                  {category.questions.length} soru
                </span>
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-gold"
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Link
            href="/sinav"
            className="font-display text-sm tracking-wide uppercase rounded-full gold-gradient text-white px-6 py-3 text-center hover:bg-gold-soft transition-colors"
          >
            Deneme Sınavı Çöz
          </Link>
          <Link
            href="/rehber/ehliyet-sinavi-basvurusu-nasil-yapilir"
            className="font-display text-sm tracking-wide uppercase btn-hard-outline rounded-xl border border-line text-ink bg-surface px-6 py-3 text-center hover:bg-gold-wash hover:border-gold-soft transition-colors"
          >
            Başvuru Rehberini Oku
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/rehber/ehliyet-sinavi-ucretleri-2026"
            className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
          >
            Ehliyet Ücretleri Rehberi →
          </Link>
          <Link
            href="/sozluk"
            className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
          >
            Trafik Terimleri Sözlüğü →
          </Link>
          <Link
            href="/isaretler"
            className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
          >
            Trafik İşaretleri →
          </Link>
        </div>

        <h2 className="font-display text-lg text-ink mb-4">
          {province.name} İline Özel Sıkça Sorulan Sorular
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group bg-surface border border-line rounded-xl p-4 open:border-gold-soft"
            >
              <summary className="cursor-pointer font-display text-sm text-ink list-none flex items-center justify-between gap-3">
                {item.q}
                <span className="text-gold shrink-0 transition-transform group-open:rotate-45 font-display text-xl">
                  +
                </span>
              </summary>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">{item.a}</p>
            </details>
          ))}
        </div>

        {related.length > 0 && (
          <>
            <h2 className="font-display text-lg text-ink mb-3">
              {province.region} Bölgesi&apos;nden Diğer İller
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={provincePath(r)}
                  className="text-sm rounded-full border border-line bg-surface px-4 py-2 text-ink hover:border-gold-soft hover:bg-gold-wash transition-colors"
                >
                  {r.name}
                </Link>
              ))}
            </div>
          </>
        )}

        <p className="text-xs text-ink-soft/70 leading-relaxed">
          Bu sayfadaki bilgiler genel bir yönlendirmedir; {province.name}{" "}
          ilindeki resmi süreç, ücret ve tarih bilgileri için il/ilçe millî
          eğitim müdürlüğünün veya e-Devlet&apos;in güncel duyurularını esas al.
        </p>
      </main>
    </div>
  );
}
