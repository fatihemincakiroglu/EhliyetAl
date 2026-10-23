// İlerleme + oyunlaştırma veri katmanı (tamamı tarayıcıda, localStorage).
//
// - Günlük kayıt: her gün kaç soru çözüldü, kaç doğru, kaç XP kazanıldı
// - XP ve seviye
// - Günlük hedef
// - Seri (art arda çalışılan gün) + haftada 1 "seri kurtarıcı"
// - Kategori bazlı ilerleme / isabet, zayıf konu önerisi
// - Hazırlık durumu (son deneme puanı)
//
// Sunucuda çağrılırsa boş/sıfır değer döner.

import { getHistory } from "@/lib/storage";
import { categories, getQuestionCategorySlug } from "@/lib/questions";
import { notifyStoreChange, readJSON, writeJSON } from "@/lib/clientStore";
import { celebrate } from "@/lib/celebrate";

export const PASS_MARK = 70;

const ACTIVITY_KEY = "ehliyetal:activity:v1"; // eski: yalnızca gün listesi
const DAILY_KEY = "ehliyetal:daily:v1";
const XP_KEY = "ehliyetal:xp:v1";
const GOAL_KEY = "ehliyetal:goal:v1";
const SPACED_KEY = "ehliyetal:spaced:v1";

export const GOAL_OPTIONS = [10, 20, 30, 50] as const;
const DEFAULT_GOAL = 20;

/* ------------------------------------------------------------------ */
/* Tarih yardımcıları                                                  */
/* ------------------------------------------------------------------ */

export function dayKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftDay(date: Date, delta: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + delta);
  return d;
}

/** Pazartesi başlangıçlı hafta anahtarı */
function weekKey(date: Date) {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // Pzt=0
  d.setDate(d.getDate() - day);
  return dayKey(d);
}

/* ------------------------------------------------------------------ */
/* Günlük kayıt                                                        */
/* ------------------------------------------------------------------ */

export type DayStat = { answered: number; correct: number; xp: number };
type DailyLog = Record<string, DayStat>;

function readDaily(): DailyLog {
  const log = readJSON<DailyLog>(DAILY_KEY, {});
  return log && typeof log === "object" ? log : {};
}

function writeDaily(log: DailyLog) {
  const keys = Object.keys(log).sort().reverse().slice(0, 400);
  const trimmed: DailyLog = {};
  for (const k of keys) trimmed[k] = log[k];
  writeJSON(DAILY_KEY, trimmed);
}

export function getToday(): DayStat {
  return readDaily()[dayKey(new Date())] ?? { answered: 0, correct: 0, xp: 0 };
}

/** Son `days` günün kaydı, eskiden yeniye. */
export function getRecentDays(days = 7): { day: string; stat: DayStat }[] {
  const log = readDaily();
  const out: { day: string; stat: DayStat }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const key = dayKey(shiftDay(new Date(), -i));
    out.push({ day: key, stat: log[key] ?? { answered: 0, correct: 0, xp: 0 } });
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* XP + seviye                                                         */
/* ------------------------------------------------------------------ */

export const XP_RULES = {
  correct: 10,
  wrong: 2,
  comboEvery: 5,
  comboBonus: 5,
  examFinished: 50,
  examPassed: 50,
};

const LEVELS = [
  { min: 0, name: "Acemi Sürücü" },
  { min: 100, name: "Stajyer Sürücü" },
  { min: 300, name: "Aday Sürücü" },
  { min: 600, name: "Dikkatli Sürücü" },
  { min: 1000, name: "Bilinçli Sürücü" },
  { min: 1600, name: "Usta Sürücü" },
  { min: 2500, name: "Trafik Uzmanı" },
  { min: 4000, name: "Yol Efsanesi" },
];

export type LevelInfo = {
  level: number; // 1'den başlar
  name: string;
  xp: number;
  currentMin: number;
  nextMin: number | null;
  /** seviye içi ilerleme 0–100 */
  percent: number;
};

export function levelFor(xp: number): LevelInfo {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) idx = i;
  const currentMin = LEVELS[idx].min;
  const nextMin = idx + 1 < LEVELS.length ? LEVELS[idx + 1].min : null;
  const percent =
    nextMin === null ? 100 : Math.round(((xp - currentMin) / (nextMin - currentMin)) * 100);
  return { level: idx + 1, name: LEVELS[idx].name, xp, currentMin, nextMin, percent };
}

export function getXp(): number {
  const v = readJSON<number>(XP_KEY, 0);
  return typeof v === "number" && v >= 0 ? v : 0;
}

export function getLevel(): LevelInfo {
  return levelFor(getXp());
}

/* ------------------------------------------------------------------ */
/* Günlük hedef                                                        */
/* ------------------------------------------------------------------ */

export function getDailyGoal(): number {
  const v = readJSON<number>(GOAL_KEY, DEFAULT_GOAL);
  return typeof v === "number" && v > 0 ? v : DEFAULT_GOAL;
}

export function setDailyGoal(goal: number) {
  writeJSON(GOAL_KEY, goal);
  notifyStoreChange();
}

/* ------------------------------------------------------------------ */
/* Cevap kaydı (XP + günlük + kutlamalar)                              */
/* ------------------------------------------------------------------ */

type AnswerInput = { correct: boolean; combo?: number };

/**
 * Bir veya birden fazla cevabı kaydeder. XP ekler, günlük sayacı artırır,
 * hedef tamamlanır ya da seviye atlanırsa kutlama tetikler.
 * `combo`: bu cevapla birlikte üst üste doğru sayısı (yalnızca anlık modda).
 */
export function recordAnswers(answers: AnswerInput[], extraXp = 0): number {
  if (typeof window === "undefined" || (answers.length === 0 && extraXp === 0)) return 0;

  const today = dayKey(new Date());
  const log = readDaily();
  const before = log[today] ?? { answered: 0, correct: 0, xp: 0 };
  const goal = getDailyGoal();
  const xpBefore = getXp();

  let gained = extraXp;
  let correct = 0;
  let comboHit = 0;
  for (const a of answers) {
    if (a.correct) {
      correct++;
      gained += XP_RULES.correct;
      if (a.combo && a.combo % XP_RULES.comboEvery === 0) {
        gained += XP_RULES.comboBonus;
        comboHit = a.combo;
      }
    } else {
      gained += XP_RULES.wrong;
    }
  }

  const after: DayStat = {
    answered: before.answered + answers.length,
    correct: before.correct + correct,
    xp: before.xp + gained,
  };
  log[today] = after;
  writeDaily(log);
  writeJSON(XP_KEY, xpBefore + gained);

  // Kutlamalar (en önemlisi en son: üstte görünür)
  if (comboHit) {
    celebrate({
      kind: "combo",
      title: `${comboHit} doğru üst üste!`,
      subtitle: `+${XP_RULES.comboBonus} XP bonus`,
    });
  }
  if (before.answered < goal && after.answered >= goal) {
    celebrate({
      kind: "goal",
      title: "Günlük hedef tamam!",
      subtitle: `Bugün ${after.answered} soru çözdün`,
    });
  }
  if (before.answered === 0 && answers.length > 0) {
    // Günün ilk cevabı: seri bir gün uzadı
    const streak = getStreakInfo().streak;
    if (streak >= 2) {
      const milestone = [3, 7, 14, 30, 50, 100, 200, 365].includes(streak);
      celebrate({
        kind: milestone ? "streak" : "info",
        title: `${streak} günlük seri!`,
        subtitle: milestone ? "Harika bir alışkanlık kazanıyorsun" : "Serini devam ettirdin",
      });
    }
  }
  const lvBefore = levelFor(xpBefore);
  const lvAfter = levelFor(xpBefore + gained);
  if (lvAfter.level > lvBefore.level) {
    celebrate({
      kind: "level",
      title: `Seviye ${lvAfter.level}: ${lvAfter.name}`,
      subtitle: "Yeni seviyeye ulaştın!",
    });
  }

  notifyStoreChange();
  return gained;
}

/** Deneme sınavı bitince ek XP. */
export function recordExamFinished(passed: boolean): number {
  const bonus = XP_RULES.examFinished + (passed ? XP_RULES.examPassed : 0);
  return recordAnswers([], bonus);
}

/* ------------------------------------------------------------------ */
/* Seri + seri kurtarıcı                                               */
/* ------------------------------------------------------------------ */

function activeDays(): Set<string> {
  const days = new Set<string>();
  const legacy = readJSON<string[]>(ACTIVITY_KEY, []);
  if (Array.isArray(legacy)) legacy.forEach((d) => days.add(d));
  const log = readDaily();
  for (const [d, s] of Object.entries(log)) if (s.answered > 0) days.add(d);
  for (const a of getHistory()) days.add(dayKey(new Date(a.date)));
  return days;
}

export type StreakInfo = {
  streak: number;
  todayDone: boolean;
  /** Seri kurtarıcıyla kurtarılan günler */
  frozenDays: string[];
  /** Bu hafta seri kurtarıcı hâlâ kullanılabilir mi */
  freezeAvailable: boolean;
};

/**
 * Art arda çalışılan gün sayısı. Bugün henüz çalışılmadıysa dünden geriye
 * sayar. Her takvim haftasında (Pzt–Paz) tek bir kaçırılan gün "seri
 * kurtarıcı" ile köprülenir; iki gün üst üste kaçırılırsa seri biter.
 */
export function getStreakInfo(): StreakInfo {
  const days = activeDays();
  const now = new Date();
  const todayDone = days.has(dayKey(now));
  const usedWeeks = new Set<string>();
  const frozenDays: string[] = [];

  let cursor = todayDone ? now : shiftDay(now, -1);
  let streak = 0;
  for (let guard = 0; guard < 800; guard++) {
    const key = dayKey(cursor);
    if (days.has(key)) {
      streak++;
      cursor = shiftDay(cursor, -1);
      continue;
    }
    const wk = weekKey(cursor);
    const prev = shiftDay(cursor, -1);
    if (!usedWeeks.has(wk) && days.has(dayKey(prev))) {
      usedWeeks.add(wk);
      frozenDays.push(key);
      cursor = prev;
      continue;
    }
    break;
  }
  if (streak === 0) frozenDays.length = 0;

  return {
    streak,
    todayDone,
    frozenDays,
    freezeAvailable: !usedWeeks.has(weekKey(now)),
  };
}

export function getStreak(): number {
  return getStreakInfo().streak;
}

/* ------------------------------------------------------------------ */
/* Kategori ilerlemesi + zayıf konu                                    */
/* ------------------------------------------------------------------ */

type SpacedEntry = { questionId: string; lastResult: "correct" | "wrong" };

function readSpaced(): Record<string, SpacedEntry> {
  const v = readJSON<Record<string, SpacedEntry>>(SPACED_KEY, {});
  return v && typeof v === "object" ? v : {};
}

export type CategoryProgressStat = {
  slug: string;
  total: number;
  /** en az bir kez çözülen benzersiz soru */
  seen: number;
  /** son cevabı doğru olan */
  correct: number;
  /** son cevabı yanlış olan */
  wrong: number;
  /** isabet (son cevaplara göre), seen=0 ise null */
  accuracy: number | null;
};

export function getCategoryProgress(): Record<string, CategoryProgressStat> {
  const result: Record<string, CategoryProgressStat> = {};
  for (const c of categories) {
    result[c.slug] = { slug: c.slug, total: c.questions.length, seen: 0, correct: 0, wrong: 0, accuracy: null };
  }
  for (const e of Object.values(readSpaced())) {
    const slug = getQuestionCategorySlug(e.questionId);
    if (!slug || !result[slug]) continue;
    result[slug].seen++;
    if (e.lastResult === "correct") result[slug].correct++;
    else result[slug].wrong++;
  }
  for (const s of Object.values(result)) {
    s.accuracy = s.seen > 0 ? Math.round((s.correct / s.seen) * 100) : null;
  }
  return result;
}

/** Geriye dönük uyumluluk: kategori başına çözülen benzersiz soru. */
export function getSolvedByCategory(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [slug, s] of Object.entries(getCategoryProgress())) out[slug] = s.seen;
  return out;
}

/** Son cevabı yanlış olan sorular (Yanlışlarım kutusu). */
export function getWrongBoxIds(): string[] {
  return Object.values(readSpaced())
    .filter((e) => e.lastResult === "wrong")
    .map((e) => e.questionId);
}

export type WeakSuggestion =
  | { kind: "weak"; slug: string; accuracy: number; wrong: number }
  | { kind: "unseen"; slug: string; seen: number; total: number };

/**
 * Önerilecek konu: en az 5 soru çözülmüş ve isabeti %80'in altında olan
 * en zayıf kategori; yoksa en az keşfedilmiş kategori. Hiç veri yoksa null.
 */
export function getWeakSuggestion(): WeakSuggestion | null {
  const stats = Object.values(getCategoryProgress());
  const totalSeen = stats.reduce((a, s) => a + s.seen, 0);
  if (totalSeen < 5) return null;

  const weak = stats
    .filter((s) => s.seen >= 5 && s.accuracy !== null && s.accuracy < 80)
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))[0];
  if (weak) return { kind: "weak", slug: weak.slug, accuracy: weak.accuracy ?? 0, wrong: weak.wrong };

  const least = stats
    .filter((s) => s.seen < s.total)
    .sort((a, b) => a.seen / a.total - b.seen / b.total)[0];
  if (least) return { kind: "unseen", slug: least.slug, seen: least.seen, total: least.total };
  return null;
}

/* ------------------------------------------------------------------ */
/* Hazırlık durumu                                                     */
/* ------------------------------------------------------------------ */

export type Readiness =
  | { kind: "exam"; lastScore: number; pointsToPass: number; examCount: number }
  | { kind: "none" };

export function getReadiness(): Readiness {
  const exams = getHistory().filter((a) => a.mode === "exam" && a.total > 0);
  if (exams.length === 0) return { kind: "none" };
  const last = exams[0];
  const lastScore = Math.round((last.correct / last.total) * 100);
  return {
    kind: "exam",
    lastScore,
    pointsToPass: Math.max(0, PASS_MARK - lastScore),
    examCount: exams.length,
  };
}

/* ------------------------------------------------------------------ */
/* Hızlı tur seçimi                                                    */
/* ------------------------------------------------------------------ */

/**
 * Bir kategoriden `count` soruluk odaklı tur: önce son cevabı yanlış olanlar,
 * sonra hiç çözülmemişler, en son doğru cevaplananlar (her grup karışık).
 */
export function pickQuickRound<T extends { id: string }>(questions: T[], count = 10): T[] {
  const spaced = readSpaced();
  const shuffle = <U,>(arr: U[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const wrong = shuffle(questions.filter((q) => spaced[q.id]?.lastResult === "wrong"));
  const unseen = shuffle(questions.filter((q) => !spaced[q.id]));
  const right = shuffle(questions.filter((q) => spaced[q.id]?.lastResult === "correct"));
  return [...wrong, ...unseen, ...right].slice(0, count);
}
