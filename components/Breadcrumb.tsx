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
  "pratik-oyunlar": "Pratik Oyunlar",
  "isaret-tanima": "İşaret Tanıma Oyunu",
  senaryolar: "Trafik Senaryoları",
  "gecis-hakki": "Geçiş Hakkı Şemaları",
  istatistik: "İstatistikler",
  ara: "Soru Ara",
  sozluk: "Sözlük",
  rehber: "Hazırlık Rehberi",
  iletisim: "İletişim",
  isaretler: "Trafik İşaretleri",
  quiz: "Konu Testleri",
  yanlislarim: "Yanlışlarım",
  blog: "Blog",
  sss: "Sıkça Sorulan Sorular",
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

// Sitedeki geçerli üst seviye bölümler. Bunların dışındaki bir yol (404
// sayfası) için breadcrumb çizilmez: 404 sayfası sunucuda farklı bir yolla
// önceden üretildiği için aksi halde hidrasyon uyuşmazlığı oluşur.
const KNOWN_ROOTS = new Set([
  "sinav", "aylik-sinavlar", "pratik-oyunlar", "istatistik", "ara", "sozluk", "rehber",
  "iletisim", "isaretler", "quiz", "tekrar", "yanlislarim", "blog", "sss",
]);

// Kendi sayfası olmayan ara bölümler: kırıntıda bağlantı yerine düz metin
function hasOwnPage(segments: string[], index: number): boolean {
  if (segments[0] === "quiz" && index === 0) return false;
  if (segments[0] === "aylik-sinavlar" && index === 1) return false;
  return true;
}

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

  // Ay slug'ı ise Türkçe ay adı ("temmuz" veya "temmuz-ehliyet-sinavi")
  const monthCandidate = segment.toLowerCase().replace(/-ehliyet-sinavi$/, "");
  const monthIdx = MONTH_SLUGS.indexOf(monthCandidate);
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
  if (segments.length === 0 || !KNOWN_ROOTS.has(segments[0])) return null;

  // Kırıntıları oluştur
  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    return { label: humanize(decodeURIComponent(seg)), href, linkable: hasOwnPage(segments, i) };
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
        className="app-breadcrumb bg-paper"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-1">
          <ol className="flex flex-wrap items-center gap-1 text-[13px] font-bold text-ink-soft">
            <li className="flex items-center gap-1">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Home size={13} />
                <span className="sr-only sm:not-sr-only">Ana Sayfa</span>
              </Link>
            </li>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1">
                  <ChevronRight size={13} strokeWidth={2.5} className="text-ink-soft/50 shrink-0" />
                  {isLast || !c.linkable ? (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={`truncate ${isLast ? "font-extrabold text-ink max-w-[60vw]" : "max-w-[40vw]"} sm:max-w-none`}
                    >
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="hover:text-primary transition-colors truncate max-w-[40vw] sm:max-w-none"
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
