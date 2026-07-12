import { getCategory, type Category, type Question } from "@/lib/questions";

/**
 * Ay bazlı deneme sınavları.
 *
 * Her yıl-ay kombinasyonu, kendine özgü bir "seed" ile üretilen benzersiz bir
 * soru dizilimine sahiptir. Böylece "2026 Ocak Ehliyet Sınavı" her açıldığında
 * aynı sorularla karşılaşılır (sonuçlar karşılaştırılabilir), ama her ay
 * birbirinden farklı bir set/sıralama sunar.
 */

export const TR_MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
] as const;

export type MonthlyExam = {
  year: number;
  /** 1-12 */
  month: number;
  monthName: string;
  /** Temiz ay slug'ı, ör. "temmuz" */
  monthSlug: string;
  /** URL'de kullanılan slug, ör. "temmuz-ehliyet-sinavi" */
  urlSlug: string;
  label: string; // "2026 Temmuz Ehliyet Sınavı"
  href: string; // "/aylik-sinavlar/2026/temmuz-ehliyet-sinavi"
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
] as const;

/**
 * Yayınlanacak sınavların üst sınırı. Bu tarihe kadar (dahil) olan tüm aylar
 * için sınav listelenir. Yeni ay eklemek için sadece bu değeri güncelle.
 */
const LATEST_YEAR = 2026;
const LATEST_MONTH = 12; // 2026 Aralık

/** Sınavların başladığı ilk ay. */
const START_YEAR = 2020;
const START_MONTH = 1; // 2020 Ocak

function monthSlugToIndex(slug: string): number {
  // Hem "temmuz" hem "temmuz-ehliyet-sinavi" formatını kabul et
  const clean = slug.toLowerCase().replace(/-ehliyet-sinavi$/, "");
  return MONTH_SLUGS.indexOf(clean as (typeof MONTH_SLUGS)[number]);
}

function buildExam(year: number, month: number): MonthlyExam {
  const idx = month - 1;
  const monthName = TR_MONTHS[idx];
  const monthSlug = MONTH_SLUGS[idx];
  const urlSlug = `${monthSlug}-ehliyet-sinavi`;
  return {
    year,
    month,
    monthName,
    monthSlug,
    urlSlug,
    label: `${year} ${monthName} Ehliyet Sınavı`,
    href: `/aylik-sinavlar/${year}/${urlSlug}`,
  };
}

/** Tüm yayınlanmış aylık sınavlar (en yeniden en eskiye). */
export function getAllMonthlyExams(): MonthlyExam[] {
  const exams: MonthlyExam[] = [];
  for (let year = START_YEAR; year <= LATEST_YEAR; year++) {
    const from = year === START_YEAR ? START_MONTH : 1;
    const to = year === LATEST_YEAR ? LATEST_MONTH : 12;
    for (let month = from; month <= to; month++) {
      exams.push(buildExam(year, month));
    }
  }
  // En yeni ay en üstte
  return exams.reverse();
}

/** Yıllara göre gruplanmış sınavlar (en yeni yıl en üstte). */
export function getMonthlyExamsByYear(): { year: number; exams: MonthlyExam[] }[] {
  const all = getAllMonthlyExams();
  const years = Array.from(new Set(all.map((e) => e.year))).sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    exams: all.filter((e) => e.year === year),
  }));
}

/** Verilen yıl/ay slug'ı geçerli ve yayınlanmış mı? */
export function getMonthlyExam(year: number, monthSlug: string): MonthlyExam | null {
  const idx = monthSlugToIndex(monthSlug);
  if (idx < 0) return null;
  const month = idx + 1;
  return (
    getAllMonthlyExams().find((e) => e.year === year && e.month === month) ?? null
  );
}

// --- Deterministik soru seçimi -------------------------------------------

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Her yıl-ay için benzersiz, sabit bir seed üretir. */
function examSeed(year: number, month: number): number {
  return year * 100 + month;
}

function stratifiedSelection(
  examSlugs: string[],
  totalCount: number,
  seed: number
): Question[] {
  const pools = examSlugs
    .map((slug) => getCategory(slug))
    .filter((c): c is Category => Boolean(c));

  const baseQuota = Math.floor(totalCount / pools.length);
  let remainder = totalCount - baseQuota * pools.length;

  const selected: Question[] = [];
  for (const pool of pools) {
    const quota = baseQuota + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder -= 1;
    // Her havuz + her ay için farklı bir sıralama
    const shuffled = seededShuffle(pool.questions, seed + pool.questions.length);
    selected.push(...shuffled.slice(0, Math.min(quota, shuffled.length)));
  }

  return seededShuffle(selected, seed);
}

/**
 * Belirli bir yıl-ay için sabit içerikli deneme sınavı sorularını döndürür.
 * Aynı ay her zaman aynı soru setini (aynı sırada) verir; her ay farklıdır.
 */
export function getMonthlyExamQuestions(
  year: number,
  month: number,
  totalCount = 50
): Question[] {
  const seed = examSeed(year, month) * 7 + totalCount;
  return stratifiedSelection(["trafik", "motor", "ilkyardim", "cevre"], totalCount, seed);
}
