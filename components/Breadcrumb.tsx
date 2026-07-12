"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { TR_MONTHS } from "@/lib/monthlyExams";

const SITE_URL = "https://ehliyetal.net";

// URL segment'i -> görünen etiket eşlemesi (statik yollar için)
const LABELS: Record<string, string> = {
  sinav: "Sınav Simülasyonu",
  pratik: "Sınırsız Pratik",
  "aylik-sinavlar": "Aylık Sınavlar",
  istatistik: "İstatistikler",
  ara: "Soru Ara",
  sozluk: "Sözlük",
  rehber: "Hazırlık Rehberi",
  iletisim: "İletişim",
  isaretler: "Trafik İşaretleri",
  quiz: "Konu Testleri",
  tekrar: "Tekrar",
  menu: "Daha Fazla",
  il: "İllere Göre",
  "ehliyet-sinavi-ucretleri-2026": "Ehliyet Sınavı Ücretleri 2026",
  "ehliyet-sinavi-basvurusu-nasil-yapilir": "Ehliyet Sınavı Başvurusu",
  "ehliyet-sinavi-sonuc-sorgulama": "Sınav Sonuç Sorgulama",
  "ehliyet-sinavi-tarihleri-2026": "Ehliyet Sınavı Tarihleri 2026",
  "trafik-isaretleri-nasil-calisilir": "Trafik İşaretleri Nasıl Çalışılır",
  "ilk-yardim-sik-yapilan-hatalar": "İlk Yardımda Sık Yapılan Hatalar",
  trafik: "Trafik ve Çevre",
  motor: "Motor Bilgisi",
  ilkyardim: "İlk Yardım",
  cevre: "Çevre Bilgisi",
};

const MONTH_SLUGS = [
  "ocak",
  "subat",
  "mart",
  "nisan",
  "mayis",
  "haziran",
  "temmuz",
  "agustos",
  "eylul",
  "ekim",
  "kasim",
  "aralik",
];

// Breadcrumb'un hiç gösterilmeyeceği yollar
const HIDDEN_PATHS = new Set(["/", "/menu"]);

// Bu sayfalar kendi (daha spesifik isimli) JSON-LD BreadcrumbList schema'sını
// içerdiği için, çift schema olmasın diye burada JSON-LD üretmeyiz; sadece
// görsel breadcrumb gösteririz. Prefix eşleşmesi yapılır.
const SKIP_SCHEMA_PREFIXES = [
  "/sinav/",
  "/quiz/",
  "/aylik-sinavlar/",
  "/rehber/il/",
  "/rehber/trafik-isaretleri-nasil-calisilir",
  "/rehber/ehliyet-sinavi-tarihleri-2026",
  "/rehber/ehliyet-sinavi-sonuc-sorgulama",
  "/rehber/ilk-yardim-sik-yapilan-hatalar",
];

function pathHasOwnSchema(pathname: string): boolean {
  return SKIP_SCHEMA_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p)
  );
}

function humanize(segment: string): string {
  // Bilinen etiket varsa onu kullan
  if (LABELS[segment]) return LABELS[segment];

  // Ay slug'ı ise Türkçe ay adı
  const monthIdx = MONTH_SLUGS.indexOf(segment.toLowerCase());
  if (monthIdx >= 0) return TR_MONTHS[monthIdx];

  // Sadece sayı ise (deneme sınavı no) -> "Deneme Sınavı N"
  if (/^\d+$/.test(segment) && segment.length <= 2) {
    return `Deneme Sınavı ${segment}`;
  }

  // Yıl ise olduğu gibi
  if (/^\d{4}$/.test(segment)) return segment;

  // İl slug'ı gibi "adana-ehliyet-sinavi" -> "Adana"
  const cleaned = segment.replace(/-ehliyet-sinavi$/, "");

  // tire -> boşluk, her kelimenin baş harfi büyük
  return cleaned
    .split("-")
    .map((w) => (w ? w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1) : w))
    .join(" ");
}

export default function Breadcrumb() {
  const pathname = usePathname();

  if (!pathname || HIDDEN_PATHS.has(pathname)) return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  // Kırıntıları oluştur
  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    return { label: humanize(decodeURIComponent(seg)), href };
  });

  // JSON-LD schema (Ana Sayfa + tüm kırıntılar). Kendi schema'sı olan
  // sayfalarda çift olmaması için atlanır.
  const emitSchema = !pathHasOwnSchema(pathname);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: `${SITE_URL}/`,
      },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        item: `${SITE_URL}${c.href}`,
      })),
    ],
  };

  return (
    <>
      {emitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <nav
        aria-label="Sayfa yolu"
        className="bg-paper border-b border-line"
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-2.5">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-soft">
            <li className="flex items-center gap-1">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-gold transition-colors"
              >
                <Home size={13} />
                <span className="sr-only sm:not-sr-only">Ana Sayfa</span>
              </Link>
            </li>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1">
                  <ChevronRight size={12} className="text-line shrink-0" />
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-medium text-ink truncate max-w-[60vw] sm:max-w-none"
                    >
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="hover:text-gold transition-colors truncate max-w-[40vw] sm:max-w-none"
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
