import { Attempt, getHistory } from "./storage";

export type Badge = {
  id: string;
  title: string;
  description: string;
  earned: boolean;
};

function bestPercentFor(history: Attempt[], categorySlug: string): number {
  const attempts = history.filter(
    (a) => a.mode === "category" && a.categorySlug === categorySlug
  );
  if (attempts.length === 0) return 0;
  return Math.max(...attempts.map((a) => Math.round((a.correct / a.total) * 100)));
}

export function computeBadges(categorySlugs: string[]): Badge[] {
  const history = getHistory();
  const badges: Badge[] = [];

  const categoryLabels: Record<string, string> = {
    trafik: "Trafik",
    motor: "Motor",
    ilkyardim: "İlk Yardım",
    cevre: "Çevre",
  };

  for (const slug of categorySlugs) {
    const percent = bestPercentFor(history, slug);
    badges.push({
      id: `category-${slug}`,
      title: `${categoryLabels[slug] ?? slug} Ustası`,
      description: `${categoryLabels[slug] ?? slug} kategorisinde %70 ve üzeri puan al.`,
      earned: percent >= 70,
    });
  }

  const allPassed = categorySlugs.every((slug) => bestPercentFor(history, slug) >= 70);
  badges.push({
    id: "all-categories",
    title: "Tam Donanımlı Sürücü",
    description: "Dört kategorinin de en az birinde %70 üzeri puan al.",
    earned: allPassed,
  });

  const examPassed = history.some(
    (a) => a.mode === "exam" && Math.round((a.correct / a.total) * 100) >= 70
  );
  badges.push({
    id: "exam-pass",
    title: "Sınava Hazır",
    description: "Sınav simülasyonunda %70 ve üzeri puan al.",
    earned: examPassed,
  });

  const solvedFifty = history.reduce((sum, a) => sum + a.total, 0) >= 50;
  badges.push({
    id: "fifty-solved",
    title: "Azimli Öğrenci",
    description: "Toplamda en az 50 soru çöz.",
    earned: solvedFifty,
  });

  return badges;
}
