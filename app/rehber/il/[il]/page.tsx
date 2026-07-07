import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { provinces, getProvince } from "@/lib/provinces";
import { categories } from "@/lib/questions";

export function generateStaticParams() {
  return provinces.map((p) => ({ il: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ il: string }>;
}): Promise<Metadata> {
  const { il: slug } = await params;
  const province = getProvince(slug);
  if (!province) return {};

  const title = `${province.name} Ehliyet Sınavına Hazırlık Rehberi | EhliyetAl`;
  const description = `${province.name} ilinde ehliyet sınavına hazırlanan adaylar için başvuru süreci, sürücü kursu adımları ve ücretsiz deneme sınavlarıyla çalışma rehberi.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ehliyetal.net/rehber/il/${province.slug}`,
    },
  };
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ il: string }>;
}) {
  const { il: slug } = await params;
  const province = getProvince(slug);
  if (!province) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://ehliyetal.net/" },
      { "@type": "ListItem", position: 2, name: "Rehber", item: "https://ehliyetal.net/rehber" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${province.name} Ehliyet Rehberi`,
        item: `https://ehliyetal.net/rehber/il/${province.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          {province.name} ilinde ehliyet almak isteyen sürücü adayları da
          Türkiye genelindeki standart süreci takip eder: sürücü kursuna
          kayıt, teorik eğitim, teorik sınav ve ardından direksiyon eğitimiyle
          uygulamalı sınav. EhliyetAl&apos;daki ücretsiz sorularla, {province.name}{" "}
          ilindeki teorik sınava hangi kurstan girersen gir aynı şekilde
          hazırlanabilirsin.
        </p>

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

        <div className="bg-gold-wash border border-gold-soft/40 rounded-2xl p-5 mb-8 flex gap-3">
          <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            {province.name} ilindeki güncel başvuru tarihleri, belge listesi
            ve ücret kalemleri için kayıtlı olduğun sürücü kursunu veya
            e-Devlet üzerinden il/ilçe millî eğitim müdürlüğünü teyit et —
            bu bilgiler ile ilden ile değil zamana göre değişir.
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

        <p className="text-xs text-ink-soft/70 leading-relaxed">
          Bu sayfadaki bilgiler genel bir yönlendirmedir; {province.name}{" "}
          ilindeki resmi süreç, ücret ve tarih bilgileri için il/ilçe millî
          eğitim müdürlüğünün veya e-Devlet&apos;in güncel duyurularını esas al.
        </p>
      </main>
    </div>
  );
}
