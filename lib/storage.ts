export type AttemptMode = "category" | "exam" | "review";

export type Attempt = {
  id: string;
  mode: AttemptMode;
  categorySlug?: string;
  date: string;
  total: number;
  correct: number;
  wrongQuestionIds: string[];
};

const HISTORY_KEY = "ehliyetal:history:v1";
const THEME_KEY = "ehliyetal:theme:v1";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getHistory(): Attempt[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function addAttempt(attempt: Omit<Attempt, "id" | "date">) {
  if (!isBrowser()) return;
  const history = getHistory();
  const newAttempt: Attempt = {
    ...attempt,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    date: new Date().toISOString(),
  };
  const updated = [newAttempt, ...history].slice(0, 200);
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  return newAttempt;
}

export function clearHistory() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(HISTORY_KEY);
}

export function getWrongQuestionIds(): string[] {
  const history = getHistory();
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const attempt of history) {
    for (const id of attempt.wrongQuestionIds) {
      if (!seen.has(id)) {
        seen.add(id);
        ordered.push(id);
      }
    }
  }
  return ordered;
}

export type CategoryStat = {
  slug: string;
  attempts: number;
  bestPercent: number;
  lastPercent: number;
};

export function getCategoryStats(slugs: string[]): Record<string, CategoryStat> {
  const history = getHistory().filter((a) => a.mode === "category" && a.categorySlug);
  const result: Record<string, CategoryStat> = {};
  for (const slug of slugs) {
    const attempts = history.filter((a) => a.categorySlug === slug);
    if (attempts.length === 0) {
      result[slug] = { slug, attempts: 0, bestPercent: 0, lastPercent: 0 };
      continue;
    }
    const percents = attempts.map((a) => Math.round((a.correct / a.total) * 100));
    result[slug] = {
      slug,
      attempts: attempts.length,
      bestPercent: Math.max(...percents),
      lastPercent: percents[0],
    };
  }
  return result;
}

export type OverallStats = {
  totalAttempts: number;
  totalQuestionsSolved: number;
  totalCorrect: number;
  averagePercent: number;
  weakestCategorySlug: string | null;
};

export function getOverallStats(categorySlugs: string[]): OverallStats {
  const history = getHistory();
  const totalAttempts = history.length;
  const totalQuestionsSolved = history.reduce((sum, a) => sum + a.total, 0);
  const totalCorrect = history.reduce((sum, a) => sum + a.correct, 0);
  const averagePercent =
    totalQuestionsSolved > 0 ? Math.round((totalCorrect / totalQuestionsSolved) * 100) : 0;

  const catStats = getCategoryStats(categorySlugs);
  let weakestCategorySlug: string | null = null;
  let weakestPercent = 101;
  for (const slug of categorySlugs) {
    const stat = catStats[slug];
    if (stat.attempts > 0 && stat.bestPercent < weakestPercent) {
      weakestPercent = stat.bestPercent;
      weakestCategorySlug = slug;
    }
  }

  return {
    totalAttempts,
    totalQuestionsSolved,
    totalCorrect,
    averagePercent,
    weakestCategorySlug,
  };
}

export function getTheme(): "light" | "dark" {
  if (!isBrowser()) return "light";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function setTheme(theme: "light" | "dark") {
  if (!isBrowser()) return;
  window.localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
}
