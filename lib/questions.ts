import trafik from "./questions_data/trafik";
import motor from "./questions_data/motor";
import ilkyardim from "./questions_data/ilkyardim";
import cevre from "./questions_data/cevre";
import isaretler from "./questions_data/isaretler";

export type Difficulty = "kolay" | "orta" | "zor";

export type Question = {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
  visualId?: string;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  questions: Question[];
};

export const categories: Category[] = [trafik, motor, ilkyardim, cevre, isaretler];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getAllQuestions(): Question[] {
  return categories.flatMap((c) => c.questions);
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Basit, deterministik bir sözde-rastgele sayı üreteci (mulberry32).
// Aynı seed her zaman aynı diziliş sırasını üretir; böylece "Deneme Sınavı 3"
// her ziyarette aynı sorulardan oluşur.
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

function stratifiedSelection(
  examSlugs: string[],
  totalCount: number,
  shuffleFn: <T>(arr: T[]) => T[]
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
    const shuffled = shuffleFn(pool.questions);
    selected.push(...shuffled.slice(0, Math.min(quota, shuffled.length)));
  }

  return shuffleFn(selected);
}

/**
 * Gerçek sınav simülasyonu için, ilan edilen dört ana konudan (trafik, motor,
 * ilk yardım, çevre) dengeli bir şekilde soru seçer. "isaretler" kategorisi
 * ayrı bir alıştırma alanı olduğu için bu karışık sınav havuzuna dahil
 * edilmez — böylece sınav sayfasındaki "trafik, motor, ilk yardım ve çevre
 * konularından karışık" açıklaması gerçek soru dağılımıyla tutarlı olur.
 */
export function getExamQuestions(totalCount = 50): Question[] {
  return stratifiedSelection(
    ["trafik", "motor", "ilkyardim", "cevre"],
    totalCount,
    shuffleArray
  );
}

export const FIXED_EXAM_COUNT = 18;

/**
 * Numaralı, sabit içerikli deneme sınavları için soru seçer. Aynı examNumber
 * her zaman aynı 50 soruyu (aynı sırada) döndürür — kullanıcı "Deneme Sınavı
 * 3"ü her çözdüğünde aynı testle karşılaşır, bu da sonuçların karşılaştırılabilir
 * ve paylaşılabilir olmasını sağlar.
 */
export function getFixedExamQuestions(examNumber: number, totalCount = 50): Question[] {
  const seed = 1000 * examNumber + totalCount;
  return stratifiedSelection(
    ["trafik", "motor", "ilkyardim", "cevre"],
    totalCount,
    (arr) => seededShuffle(arr, seed + arr.length)
  );
}

export function getQuestionCategorySlug(questionId: string): string | undefined {
  return categories.find((c) => c.questions.some((q) => q.id === questionId))?.slug;
}
