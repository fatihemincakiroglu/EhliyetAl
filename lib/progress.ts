// Ana sayfadaki ilerleme göstergeleri için tarayıcı tarafı veri katmanı.
// Tüm veri localStorage'da; sunucuda çağrılırsa boş/sıfır değer döner.

import { getHistory } from "@/lib/storage";
import { getQuestionCategorySlug } from "@/lib/questions";

const ACTIVITY_KEY = "ehliyetal:activity:v1";
const SPACED_KEY = "ehliyetal:spaced:v1";
const PASS_MARK = 70;

function isBrowser() {
  return typeof window !== "undefined";
}

function dayKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function readActivityDays(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(ACTIVITY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Bugün çalışıldığını işaretler (her cevapta çağrılır, günde bir kayıt). */
export function markActiveToday() {
  if (!isBrowser()) return;
  try {
    const today = dayKey(new Date());
    const days = readActivityDays();
    if (days[0] === today) return;
    const next = [today, ...days.filter((d) => d !== today)].slice(0, 400);
    window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(next));
  } catch {
    // depolama dolu / kapalı: seri sayacı çalışmaz, uygulama çalışmaya devam eder
  }
}

/**
 * Art arda çalışılan gün sayısı. Bugün henüz çalışılmadıysa dünden geriye
 * sayar; böylece seri gün içinde "sıfırlanmış" görünmez.
 */
export function getStreak(): number {
  const days = new Set(readActivityDays());
  for (const a of getHistory()) {
    days.add(dayKey(new Date(a.date)));
  }
  if (days.size === 0) return 0;

  const cursor = new Date();
  if (!days.has(dayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let streak = 0;
  while (days.has(dayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/** Kategori başına en az bir kez cevaplanmış benzersiz soru sayısı. */
export function getSolvedByCategory(): Record<string, number> {
  const result: Record<string, number> = {};
  if (!isBrowser()) return result;
  try {
    const raw = window.localStorage.getItem(SPACED_KEY);
    const entries: Record<string, unknown> = raw ? JSON.parse(raw) : {};
    for (const id of Object.keys(entries)) {
      const slug = getQuestionCategorySlug(id);
      if (slug) result[slug] = (result[slug] ?? 0) + 1;
    }
  } catch {
    // bozuk veri: boş say
  }
  return result;
}

export type Readiness =
  | { kind: "exam"; lastScore: number; pointsToPass: number; examCount: number }
  | { kind: "none" };

/** Son deneme sınavı puanına göre hazırlık durumu. */
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
