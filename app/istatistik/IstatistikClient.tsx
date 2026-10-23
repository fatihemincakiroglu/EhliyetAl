"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Award,
  Download,
  Upload,
  Trash2,
  Target,
  CheckCircle2,
  ListChecks,
  Sparkles,
  Lock,
  BookOpen,
  GraduationCap,
  Flame,
} from "lucide-react";
import { categories } from "@/lib/questions";
import { getHistory } from "@/lib/storage";
import { useStoreVersion } from "@/lib/clientStore";
import {
  getCategoryProgress,
  getDailyGoal,
  getLevel,
  getRecentDays,
  getStreakInfo,
  PASS_MARK,
} from "@/lib/progress";
import { computeBadges, type BadgeGroup } from "@/lib/badges";
import { exportProgress, importProgress, resetProgress } from "@/lib/backup";
import { getCategoryTheme } from "@/components/categoryTheme";
import { FlameIcon, BoltIcon } from "@/components/StreakBadge";

const WEEKDAY = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

const BADGE_GROUPS: { key: BadgeGroup; label: string; icon: typeof Award }[] = [
  { key: "konu", label: "Konu", icon: BookOpen },
  { key: "sinav", label: "Sınav", icon: GraduationCap },
  { key: "azim", label: "Azim", icon: Flame },
];

export default function IstatistikClient() {
  const v = useStoreVersion();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const data = useMemo(() => {
    if (v === 0) return null;
    const progress = getCategoryProgress();
    const seen = Object.values(progress).reduce((a, s) => a + s.seen, 0);
    const correct = Object.values(progress).reduce((a, s) => a + s.correct, 0);
    const exams = getHistory()
      .filter((a) => a.mode === "exam" && a.total > 0)
      .map((a) => ({ id: a.id, date: new Date(a.date), score: Math.round((a.correct / a.total) * 100) }));
    return {
      level: getLevel(),
      streak: getStreakInfo(),
      days: getRecentDays(7),
      goal: getDailyGoal(),
      progress,
      seen,
      accuracy: seen > 0 ? Math.round((correct / seen) * 100) : null,
      exams,
      badges: computeBadges(),
    };
  }, [v]);

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!window.confirm("Yedek yüklenince bu cihazdaki mevcut ilerlemenin üzerine yazılır. Devam edilsin mi?")) return;
    const result = await importProgress(file);
    setMessage(result.ok ? { ok: true, text: "Yedek yüklendi. İlerlemen geri geldi!" } : { ok: false, text: result.error });
  }

  function handleReset() {
    if (window.confirm("Tüm ilerlemen (XP, seri, istatistikler, rozetler) silinsin mi? Bu geri alınamaz.")) {
      resetProgress();
      setMessage({ ok: true, text: "İlerleme sıfırlandı." });
    }
  }

  if (!data) {
    return <div className="min-h-[60vh] bg-paper" aria-busy="true" />;
  }

  const { level, streak, days, goal, progress, seen, accuracy, exams, badges } = data;
  const maxDay = Math.max(goal, ...days.map((d) => d.stat.answered), 1);
  const earnedCount = badges.filter((b) => b.earned).length;
  const bestExam = exams.length ? Math.max(...exams.map((e) => e.score)) : null;

  return (
    <div className="bg-paper">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <h1 className="font-display font-black text-[28px] sm:text-4xl text-ink">İlerlemen</h1>
        <p className="text-ink-soft font-semibold mb-6">Verilerin yalnızca bu cihazda saklanır.</p>

        {/* Seviye */}
        <section className="bg-primary text-white rounded-3xl p-5 sm:p-6 mb-4" style={{ boxShadow: "0 4px 0 0 var(--color-primary-deep)" }}>
          <div className="flex items-center gap-4">
            <span className="w-16 h-16 rounded-2xl bg-white/20 flex flex-col items-center justify-center shrink-0">
              <span className="text-[11px] font-extrabold opacity-90 leading-none">SEVİYE</span>
              <span className="font-display font-black text-3xl leading-none mt-0.5">{level.level}</span>
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display font-black text-2xl leading-tight">{level.name}</p>
              <p className="text-sm font-bold opacity-90">
                {level.nextMin != null ? `Sonraki seviyeye ${level.nextMin - level.xp} XP` : "En yüksek seviyedesin!"}
              </p>
            </div>
          </div>
          <div className="mt-4 h-3 rounded-full bg-white/25 overflow-hidden">
            <div className="h-full rounded-full bg-white transition-[width] duration-500" style={{ width: `${level.percent}%` }} />
          </div>
          <p className="mt-1.5 text-xs font-bold opacity-90 text-right tabular-nums">
            {level.xp} XP{level.nextMin != null ? ` / ${level.nextMin}` : ""}
          </p>
        </section>

        {/* Özet kutuları */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <StatTile icon={<FlameIcon size={20} />} value={`${streak.streak}`} label="Günlük seri" />
          <StatTile
            icon={<ListChecks size={20} strokeWidth={2.4} className="text-primary" />}
            value={`${seen}`}
            label="Farklı soru"
          />
          <StatTile
            icon={<CheckCircle2 size={20} strokeWidth={2.4} className="text-success" />}
            value={accuracy === null ? "–" : `%${accuracy}`}
            label="İsabet"
          />
          <StatTile
            icon={<Target size={20} strokeWidth={2.4} className="text-danger" />}
            value={bestExam === null ? "–" : `${bestExam}`}
            label="En iyi deneme"
          />
        </div>

        {/* Son 7 gün */}
        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6 mb-4">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display font-black text-lg text-ink">Son 7 gün</h2>
            <span className="text-xs font-bold text-ink-soft">Hedef: günde {goal} soru</span>
          </div>
          <div className="relative h-36 flex items-end gap-2 sm:gap-3">
            <div
              className="absolute inset-x-0 border-t-2 border-dashed border-tangerine/60 pointer-events-none"
              style={{ bottom: `calc(${(goal / maxDay) * 100}% * 0.82 + 22px)` }}
              aria-hidden="true"
            />
            {days.map(({ day, stat }) => {
              const d = new Date(day + "T12:00:00");
              const isToday = day === days[days.length - 1].day;
              const h = stat.answered > 0 ? Math.max(6, (stat.answered / maxDay) * 82) : 0;
              const done = stat.answered >= goal;
              return (
                <div key={day} className="flex-1 h-full flex flex-col items-center justify-end gap-1.5 min-w-0">
                  <span className="text-[11px] font-extrabold text-ink-soft tabular-nums">
                    {stat.answered > 0 ? stat.answered : ""}
                  </span>
                  <div
                    className="w-full max-w-10 rounded-lg transition-[height] duration-500"
                    style={{
                      height: `${h}%`,
                      background: done ? "var(--color-success)" : stat.answered > 0 ? "var(--color-primary)" : "transparent",
                    }}
                    title={`${d.toLocaleDateString("tr-TR")}: ${stat.answered} soru, ${stat.xp} XP`}
                  />
                  {stat.answered === 0 && <div className="w-full max-w-10 h-1.5 rounded-full bg-surface-alt" />}
                  <span className={`text-xs font-extrabold ${isToday ? "text-primary" : "text-ink-soft"}`}>
                    {isToday ? "Bugün" : WEEKDAY[d.getDay()]}
                  </span>
                </div>
              );
            })}
          </div>
          {streak.frozenDays.length > 0 && (
            <p className="mt-4 text-xs font-bold text-ink-soft">
              Seri kurtarıcı {streak.frozenDays.length} gün serini korudu.
            </p>
          )}
        </section>

        {/* Konular */}
        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6 mb-4">
          <h2 className="font-display font-black text-lg text-ink mb-4">Konular</h2>
          <ul className="flex flex-col gap-4">
            {categories.map((c) => {
              const s = progress[c.slug];
              const theme = getCategoryTheme(c.slug);
              const Icon = theme.icon;
              const pct = Math.round((s.seen / s.total) * 100);
              return (
                <li key={c.slug} className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: theme.wash, color: theme.color }}
                  >
                    <Icon size={20} strokeWidth={2.3} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="font-extrabold text-[15px] text-ink truncate">{c.shortName}</span>
                      <span className="text-xs font-bold text-ink-soft shrink-0 tabular-nums">
                        {s.seen}/{s.total}
                        {s.accuracy !== null && (
                          <span className={s.accuracy >= PASS_MARK ? "text-success" : "text-danger"}> · %{s.accuracy}</span>
                        )}
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-surface-alt overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: theme.color }} />
                    </div>
                  </div>
                  <Link
                    href={`/quiz/${c.slug}?tur=hizli`}
                    aria-label={`${c.shortName} hızlı tur`}
                    className="w-10 h-10 rounded-xl bg-surface-alt text-ink-soft hover:text-primary hover:bg-primary-wash flex items-center justify-center shrink-0 transition-colors"
                  >
                    <Sparkles size={17} strokeWidth={2.4} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Deneme geçmişi */}
        {exams.length > 0 && (
          <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6 mb-4">
            <h2 className="font-display font-black text-lg text-ink mb-4">Deneme geçmişi</h2>
            <div className="flex items-end gap-1.5 h-24 mb-3" aria-hidden="true">
              {[...exams].slice(0, 15).reverse().map((e) => (
                <div
                  key={e.id}
                  className="flex-1 max-w-8 rounded-md"
                  style={{
                    height: `${Math.max(6, e.score)}%`,
                    background: e.score >= PASS_MARK ? "var(--color-success)" : "var(--color-danger)",
                  }}
                />
              ))}
            </div>
            <ul className="flex flex-col divide-y-2 divide-line">
              {exams.slice(0, 5).map((e) => (
                <li key={e.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="font-bold text-ink-soft">
                    {e.date.toLocaleDateString("tr-TR", { day: "numeric", month: "long" })}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-display font-black text-ink tabular-nums">{e.score}</span>
                    <span
                      className={`text-xs font-extrabold rounded-full px-2 py-0.5 ${
                        e.score >= PASS_MARK ? "bg-success-wash text-success-ink" : "bg-danger-wash text-danger-ink"
                      }`}
                    >
                      {e.score >= PASS_MARK ? "Geçti" : "Kaldı"}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Rozetler */}
        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6 mb-4">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display font-black text-lg text-ink flex items-center gap-2">
              <Award size={20} strokeWidth={2.4} className="text-sun" />
              Rozetler
            </h2>
            <span className="text-xs font-bold text-ink-soft">
              {earnedCount}/{badges.length} kazanıldı
            </span>
          </div>
          {BADGE_GROUPS.map((g) => (
            <div key={g.key} className="mb-5 last:mb-0">
              <p className="text-xs font-extrabold text-ink-soft mb-2 flex items-center gap-1.5">
                <g.icon size={14} strokeWidth={2.6} />
                {g.label}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {badges
                  .filter((b) => b.group === g.key)
                  .map((b) => (
                    <div
                      key={b.id}
                      className={`rounded-2xl p-3.5 border-2 ${
                        b.earned ? "border-sun bg-sun-wash" : "border-line bg-surface"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className={`font-extrabold text-sm leading-tight ${b.earned ? "text-ink" : "text-ink-soft"}`}>
                          {b.title}
                        </p>
                        {b.earned ? (
                          <Award size={18} strokeWidth={2.4} className="text-sun shrink-0" />
                        ) : (
                          <Lock size={15} strokeWidth={2.4} className="text-ink-soft/60 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs font-semibold text-ink-soft leading-snug">{b.description}</p>
                      {!b.earned && b.progress > 0 && (
                        <div className="mt-2 h-1.5 rounded-full bg-surface-alt overflow-hidden">
                          <div className="h-full rounded-full bg-sun" style={{ width: `${b.progress}%` }} />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* Yedek */}
        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6">
          <h2 className="font-display font-black text-lg text-ink mb-1">Yedekle ve taşı</h2>
          <p className="text-sm font-semibold text-ink-soft mb-4">
            Telefon ya da tarayıcı değiştirirken ilerlemeni dosya olarak al, yeni cihazda geri yükle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={exportProgress}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px] cursor-pointer"
            >
              <Download size={17} strokeWidth={2.6} />
              Yedeği indir
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px] cursor-pointer"
            >
              <Upload size={17} strokeWidth={2.6} />
              Yedeği yükle
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              onChange={handleImport}
              className="sr-only"
              aria-label="Yedek dosyası seç"
            />
          </div>
          {message && (
            <p
              role="status"
              className={`mt-3 rounded-xl px-3 py-2 text-sm font-bold ${
                message.ok ? "bg-success-wash text-success-ink" : "bg-danger-wash text-danger-ink"
              }`}
            >
              {message.text}
            </p>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-ink-soft hover:text-danger transition-colors cursor-pointer"
          >
            <Trash2 size={14} strokeWidth={2.4} />
            Tüm ilerlemeyi sıfırla
          </button>
        </section>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-bold text-ink-soft">
          <BoltIcon size={13} /> Doğru cevap +10 XP · yanlış +2 XP · 5&apos;li seri +5 · deneme +50 (geçersen +50)
        </p>
      </main>
    </div>
  );
}

function StatTile({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="card bg-surface border-2 border-line rounded-2xl p-4">
      {icon}
      <p className="font-display font-black text-2xl text-ink mt-1.5 leading-none tabular-nums">{value}</p>
      <p className="text-xs font-bold text-ink-soft mt-1">{label}</p>
    </div>
  );
}
