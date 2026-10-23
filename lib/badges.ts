import { getHistory } from "./storage";
import { categories } from "./questions";
import { getCategoryProgress, getLevel, getStreakInfo } from "./progress";

export type BadgeGroup = "konu" | "sinav" | "azim";

export type Badge = {
  id: string;
  title: string;
  description: string;
  earned: boolean;
  group: BadgeGroup;
  /** Kazanılmadıysa ilerleme 0–100 */
  progress: number;
};

function pct(value: number, target: number) {
  return Math.max(0, Math.min(100, Math.round((value / target) * 100)));
}

export function computeBadges(): Badge[] {
  const history = getHistory();
  const catProgress = getCategoryProgress();
  const streak = getStreakInfo().streak;
  const level = getLevel();
  const badges: Badge[] = [];

  // Konu rozetleri: kategori pratiğinde %70+ puan
  let passedCategories = 0;
  for (const c of categories) {
    const attempts = history.filter((a) => a.mode === "category" && a.categorySlug === c.slug && a.total > 0);
    const best = attempts.length ? Math.max(...attempts.map((a) => Math.round((a.correct / a.total) * 100))) : 0;
    if (best >= 70) passedCategories++;
    badges.push({
      id: `category-${c.slug}`,
      title: `${c.shortName} Ustası`,
      description: `${c.shortName} konusunda bir testte %70 ve üzeri al.`,
      earned: best >= 70,
      group: "konu",
      progress: pct(best, 70),
    });
  }
  badges.push({
    id: "all-categories",
    title: "Tam Donanımlı Sürücü",
    description: "Tüm konularda en az bir kez %70 ve üzeri al.",
    earned: passedCategories === categories.length,
    group: "konu",
    progress: pct(passedCategories, categories.length),
  });

  const totalSeen = Object.values(catProgress).reduce((a, s) => a + s.seen, 0);
  const totalQuestions = categories.reduce((a, c) => a + c.questions.length, 0);
  badges.push({
    id: "explorer",
    title: "Kâşif",
    description: "Soru bankasındaki tüm soruları en az bir kez çöz.",
    earned: totalSeen >= totalQuestions,
    group: "konu",
    progress: pct(totalSeen, totalQuestions),
  });

  // Sınav rozetleri
  const exams = history.filter((a) => a.mode === "exam" && a.total > 0);
  const examScores = exams.map((a) => Math.round((a.correct / a.total) * 100));
  const bestExam = examScores.length ? Math.max(...examScores) : 0;
  badges.push({
    id: "first-exam",
    title: "İlk Adım",
    description: "İlk deneme sınavını tamamla.",
    earned: exams.length >= 1,
    group: "sinav",
    progress: pct(exams.length, 1),
  });
  badges.push({
    id: "exam-pass",
    title: "Sınava Hazır",
    description: "Bir deneme sınavında 70 ve üzeri al.",
    earned: bestExam >= 70,
    group: "sinav",
    progress: pct(bestExam, 70),
  });
  badges.push({
    id: "exam-90",
    title: "Yüksek Puan",
    description: "Bir deneme sınavında 90 ve üzeri al.",
    earned: bestExam >= 90,
    group: "sinav",
    progress: pct(bestExam, 90),
  });
  const passedExams = examScores.filter((s) => s >= 70).length;
  badges.push({
    id: "exam-5-pass",
    title: "İstikrarlı",
    description: "5 deneme sınavını geç.",
    earned: passedExams >= 5,
    group: "sinav",
    progress: pct(passedExams, 5),
  });

  // Azim rozetleri
  const solved = history.reduce((sum, a) => sum + a.total, 0);
  badges.push({
    id: "fifty-solved",
    title: "Azimli Öğrenci",
    description: "Toplamda 50 soru çöz.",
    earned: solved >= 50,
    group: "azim",
    progress: pct(solved, 50),
  });
  badges.push({
    id: "five-hundred",
    title: "Soru Canavarı",
    description: "Toplamda 500 soru çöz.",
    earned: solved >= 500,
    group: "azim",
    progress: pct(solved, 500),
  });
  badges.push({
    id: "streak-7",
    title: "Bir Haftalık Seri",
    description: "7 gün art arda çalış.",
    earned: streak >= 7,
    group: "azim",
    progress: pct(streak, 7),
  });
  badges.push({
    id: "streak-30",
    title: "Alışkanlık Ustası",
    description: "30 gün art arda çalış.",
    earned: streak >= 30,
    group: "azim",
    progress: pct(streak, 30),
  });
  badges.push({
    id: "level-5",
    title: "Bilinçli Sürücü",
    description: "5. seviyeye ulaş.",
    earned: level.level >= 5,
    group: "azim",
    progress: pct(level.level, 5),
  });

  return badges;
}
