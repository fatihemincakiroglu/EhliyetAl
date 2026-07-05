export type ReviewEntry = {
  questionId: string;
  intervalIndex: number;
  nextReviewAt: string;
  lastResult: "correct" | "wrong";
};

const SPACED_KEY = "ehliyetal:spaced:v1";
const INTERVAL_DAYS = [1, 3, 7, 14, 30];

function isBrowser() {
  return typeof window !== "undefined";
}

function getAll(): Record<string, ReviewEntry> {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(SPACED_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveAll(entries: Record<string, ReviewEntry>) {
  if (!isBrowser()) return;
  window.localStorage.setItem(SPACED_KEY, JSON.stringify(entries));
}

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function recordOutcome(questionId: string, correct: boolean) {
  const entries = getAll();
  const existing = entries[questionId];
  const currentIndex = existing?.intervalIndex ?? -1;

  let nextIndex: number;
  if (correct) {
    nextIndex = Math.min(currentIndex + 1, INTERVAL_DAYS.length - 1);
  } else {
    nextIndex = 0;
  }

  const days = INTERVAL_DAYS[Math.max(nextIndex, 0)];
  entries[questionId] = {
    questionId,
    intervalIndex: nextIndex,
    nextReviewAt: addDays(new Date(), days).toISOString(),
    lastResult: correct ? "correct" : "wrong",
  };
  saveAll(entries);
}

export function getDueQuestionIds(): string[] {
  const entries = getAll();
  const now = new Date();
  return Object.values(entries)
    .filter((e) => e.lastResult === "wrong" && new Date(e.nextReviewAt) <= now)
    .sort((a, b) => new Date(a.nextReviewAt).getTime() - new Date(b.nextReviewAt).getTime())
    .map((e) => e.questionId);
}

export function getUpcomingReviewCount(): number {
  const entries = getAll();
  const now = new Date();
  return Object.values(entries).filter(
    (e) => e.lastResult === "wrong" && new Date(e.nextReviewAt) > now
  ).length;
}

export function getNextUpcomingDate(): Date | null {
  const entries = getAll();
  const now = new Date();
  const upcoming = Object.values(entries)
    .filter((e) => e.lastResult === "wrong" && new Date(e.nextReviewAt) > now)
    .map((e) => new Date(e.nextReviewAt))
    .sort((a, b) => a.getTime() - b.getTime());
  return upcoming[0] ?? null;
}
