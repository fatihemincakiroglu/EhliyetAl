"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, X, Minus, RotateCcw, Share2, Download, ChevronDown, XCircle } from "lucide-react";
import { categories, getQuestionCategorySlug, type Question } from "@/lib/questions";
import type { AttemptMode } from "@/lib/storage";
import { PASS_MARK } from "@/lib/progress";
import { getCategoryTheme } from "@/components/categoryTheme";
import { BoltIcon } from "@/components/StreakBadge";
import { shareResultImage } from "@/lib/shareCard";

export type QuizAnswer = { selectedIndex: number; correct: boolean };
export type EndReason = "completed" | "timeout" | "manual";

type Filter = "all" | "wrong" | "blank";

const endReasonLabel: Record<EndReason, string> = {
  completed: "Tüm sorular tamamlandı",
  timeout: "Süre doldu",
  manual: "Erken bitirildi",
};

export default function QuizResult({
  title,
  mode,
  questions,
  answers,
  scorePercent,
  endReason,
  xpGained,
  onRestart,
  backHref,
}: {
  title: string;
  mode: AttemptMode;
  questions: Question[];
  answers: (QuizAnswer | null)[];
  scorePercent: number;
  endReason: EndReason;
  xpGained: number;
  onRestart: () => void;
  backHref: string;
}) {
  const passed = scorePercent >= PASS_MARK;
  const correctCount = answers.filter((a) => a?.correct).length;
  const answeredCount = answers.filter((a) => a !== null).length;
  const wrongCount = answeredCount - correctCount;
  const blankCount = questions.length - answeredCount;
  const [filter, setFilter] = useState<Filter>(wrongCount > 0 ? "wrong" : "all");
  const [shareState, setShareState] = useState<"idle" | "working" | "done" | "copied">("idle");

  // Konu bazlı analiz
  const byCategory = useMemo(() => {
    const map = new Map<string, { total: number; correct: number }>();
    questions.forEach((q, i) => {
      const slug = getQuestionCategorySlug(q.id) ?? "trafik";
      const row = map.get(slug) ?? { total: 0, correct: 0 };
      row.total++;
      if (answers[i]?.correct) row.correct++;
      map.set(slug, row);
    });
    return categories
      .filter((c) => map.has(c.slug))
      .map((c) => ({ slug: c.slug, name: c.shortName, ...map.get(c.slug)! }));
  }, [questions, answers]);

  const reviewItems = questions
    .map((q, i) => ({ q, i, a: answers[i] }))
    .filter(({ a }) => (filter === "wrong" ? a && !a.correct : filter === "blank" ? !a : true));

  async function handleShare() {
    setShareState("working");
    const result = await shareResultImage({
      title,
      score: scorePercent,
      passed,
      correct: correctCount,
      wrong: wrongCount,
      blank: blankCount,
    });
    setShareState(result === "copied" ? "copied" : "done");
    setTimeout(() => setShareState("idle"), 2500);
  }

  async function handleDownloadPdf() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const dateStr = new Date().toLocaleDateString("tr-TR");
    // jsPDF'in varsayılan fontu Türkçe karakterleri desteklemediği için sadeleştirilir
    const plain = (t: string) =>
      t
        .replace(/ı/g, "i").replace(/İ/g, "I").replace(/ş/g, "s").replace(/Ş/g, "S")
        .replace(/ğ/g, "g").replace(/Ğ/g, "G").replace(/ü/g, "u").replace(/Ü/g, "U")
        .replace(/ö/g, "o").replace(/Ö/g, "O").replace(/ç/g, "c").replace(/Ç/g, "C");

    doc.setFontSize(18);
    doc.text("EhliyetAl - Sinav Sonucu", 20, 20);
    doc.setFontSize(11);
    doc.text(plain(`Test: ${title}`), 20, 32);
    doc.text(`Tarih: ${dateStr}`, 20, 39);
    doc.text(`Puan: ${scorePercent} / 100`, 20, 46);
    doc.text(`Dogru: ${correctCount}  Yanlis: ${wrongCount}  Bos: ${blankCount}`, 20, 53);
    doc.text(`Sonuc: ${passed ? "Gectin" : "Gecemedin, tekrar dene"}`, 20, 60);

    let y = 74;
    const wrongQs = questions.filter((_, i) => answers[i] && !answers[i]!.correct);
    if (wrongQs.length > 0) {
      doc.setFontSize(13);
      doc.text("Tekrar gozden gecirilecek sorular:", 20, y);
      y += 8;
      doc.setFontSize(10);
      for (const q of wrongQs) {
        const lines: string[] = doc.splitTextToSize(plain(`- ${q.text}`), 170);
        const answerLine: string[] = doc.splitTextToSize(plain(`  Dogru cevap: ${q.options[q.correctIndex]}`), 165);
        for (const line of [...lines, ...answerLine]) {
          if (y > 280) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, 20, y);
          y += 6;
        }
        y += 2;
      }
    }
    doc.setFontSize(9);
    doc.text("ehliyetal.net", 20, 290);
    doc.save(`ehliyetal-sonuc-${dateStr.replace(/\./g, "-")}.pdf`);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Puan */}
      <section className="card bg-surface border-2 border-line rounded-3xl p-6 sm:p-8 text-center">
        <p className="text-[13px] font-extrabold text-ink-soft mb-4">{title}</p>
        <div
          className={`mx-auto w-36 h-36 rounded-full flex flex-col items-center justify-center mb-4 animate-pop ${
            passed ? "bg-success-wash" : "bg-danger-wash"
          }`}
        >
          <span className={`font-display font-black text-5xl leading-none ${passed ? "text-success-ink" : "text-danger-ink"}`}>
            {scorePercent}
          </span>
          <span className={`text-sm font-extrabold mt-1 ${passed ? "text-success-ink" : "text-danger-ink"}`}>/ 100</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-ink mb-1">
          {passed ? (mode === "exam" ? "Geçtin, tebrikler!" : "Çok iyi gidiyorsun!") : "Bu sefer olmadı"}
        </h2>
        <p className="text-ink-soft font-semibold">
          {endReasonLabel[endReason]} ·{" "}
          {passed ? `Baraj ${PASS_MARK}, sen geçtin.` : `Baraja ${PASS_MARK - scorePercent} puan kaldı.`}
        </p>
        {xpGained > 0 && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-wash text-primary font-extrabold text-sm px-3 py-1.5">
            <BoltIcon />+{xpGained} XP kazandın
          </span>
        )}

        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="rounded-2xl bg-success-wash p-3">
            <p className="font-display font-black text-2xl text-success-ink">{correctCount}</p>
            <p className="text-xs font-extrabold text-success-ink mt-0.5">Doğru</p>
          </div>
          <div className="rounded-2xl bg-danger-wash p-3">
            <p className="font-display font-black text-2xl text-danger-ink">{wrongCount}</p>
            <p className="text-xs font-extrabold text-danger-ink mt-0.5">Yanlış</p>
          </div>
          <div className="rounded-2xl bg-surface-alt p-3">
            <p className="font-display font-black text-2xl text-ink-soft">{blankCount}</p>
            <p className="text-xs font-extrabold text-ink-soft mt-0.5">Boş</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onRestart}
            className="btn-primary rounded-2xl h-[52px] flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
          >
            <RotateCcw size={18} strokeWidth={2.8} />
            TEKRAR ÇÖZ
          </button>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={handleShare}
              disabled={shareState === "working"}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-sm cursor-pointer disabled:opacity-60"
            >
              <Share2 size={16} strokeWidth={2.6} />
              {shareState === "working"
                ? "Hazırlanıyor"
                : shareState === "copied"
                  ? "Kopyalandı"
                  : shareState === "done"
                    ? "Hazır"
                    : "Paylaş"}
            </button>
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-sm cursor-pointer"
            >
              <Download size={16} strokeWidth={2.6} />
              PDF
            </button>
            <Link href={backHref} className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-sm">
              Çıkış
            </Link>
          </div>
        </div>
      </section>

      {/* Konu analizi */}
      {byCategory.length > 1 && (
        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6">
          <h3 className="font-display font-black text-lg text-ink mb-4">Konu bazlı sonuç</h3>
          <ul className="flex flex-col gap-3.5">
            {byCategory.map((row) => {
              const theme = getCategoryTheme(row.slug);
              const Icon = theme.icon;
              const pct = Math.round((row.correct / row.total) * 100);
              return (
                <li key={row.slug} className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: theme.wash, color: theme.color }}
                  >
                    <Icon size={18} strokeWidth={2.3} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex justify-between gap-2 text-sm font-extrabold text-ink mb-1">
                      <span className="truncate">{row.name}</span>
                      <span className="tabular-nums shrink-0">
                        {row.correct}/{row.total}
                      </span>
                    </span>
                    <span className="block h-2.5 rounded-full bg-surface-alt overflow-hidden">
                      <span
                        className="block h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background: pct >= PASS_MARK ? "var(--color-success)" : "var(--color-danger)",
                        }}
                      />
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
          {(() => {
            const weakest = [...byCategory].sort((a, b) => a.correct / a.total - b.correct / b.total)[0];
            if (!weakest || weakest.correct / weakest.total >= PASS_MARK / 100) return null;
            return (
              <Link
                href={`/quiz/${weakest.slug}?tur=hizli`}
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-primary-wash text-primary font-extrabold text-[15px] py-3 hover:brightness-[0.98]"
              >
                {weakest.name} için hızlı tur çöz
              </Link>
            );
          })()}
        </section>
      )}

      {/* Cevapları incele */}
      <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
          <h3 className="font-display font-black text-lg text-ink">Cevapları incele</h3>
          <div className="flex gap-1.5" role="group" aria-label="Filtre">
            {(
              [
                ["all", `Tümü ${questions.length}`],
                ["wrong", `Yanlış ${wrongCount}`],
                ["blank", `Boş ${blankCount}`],
              ] as [Filter, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`rounded-full px-3 py-1.5 text-xs font-extrabold border-2 cursor-pointer transition-colors ${
                  filter === key ? "bg-ink border-ink text-paper" : "bg-surface border-line text-ink-soft hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {reviewItems.length === 0 ? (
          <p className="text-sm font-semibold text-ink-soft py-4 text-center">Bu filtrede soru yok.</p>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {reviewItems.map(({ q, i, a }) => {
              const status = !a ? "blank" : a.correct ? "correct" : "wrong";
              return (
                <li key={q.id}>
                  <details className="group rounded-2xl border-2 border-line bg-surface open:bg-paper">
                    <summary className="flex items-start gap-3 p-3.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          status === "correct"
                            ? "bg-success text-[var(--color-on-success)]"
                            : status === "wrong"
                              ? "bg-danger text-[var(--color-on-danger)]"
                              : "bg-surface-alt text-ink-soft"
                        }`}
                        aria-label={status === "correct" ? "Doğru" : status === "wrong" ? "Yanlış" : "Boş"}
                      >
                        {status === "correct" ? (
                          <Check size={15} strokeWidth={3.2} />
                        ) : status === "wrong" ? (
                          <X size={15} strokeWidth={3.2} />
                        ) : (
                          <Minus size={15} strokeWidth={3.2} />
                        )}
                      </span>
                      <span className="flex-1 text-[15px] font-bold text-ink leading-snug">
                        <span className="text-ink-soft tabular-nums">{i + 1}. </span>
                        {q.text}
                      </span>
                      <ChevronDown
                        size={18}
                        strokeWidth={2.6}
                        className="text-ink-soft shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="px-3.5 pb-4 pt-1">
                      <ul className="flex flex-col gap-1.5 mb-3">
                        {q.options.map((opt, oi) => {
                          const isCorrect = oi === q.correctIndex;
                          const isMine = a?.selectedIndex === oi;
                          return (
                            <li
                              key={oi}
                              className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-bold ${
                                isCorrect
                                  ? "bg-success-wash text-success-ink"
                                  : isMine
                                    ? "bg-danger-wash text-danger-ink"
                                    : "text-ink-soft"
                              }`}
                            >
                              <span className="font-black w-4 shrink-0">{String.fromCharCode(65 + oi)}</span>
                              <span className="flex-1">{opt}</span>
                              {isCorrect && <span className="text-xs font-extrabold shrink-0">Doğru cevap</span>}
                              {isMine && !isCorrect && <span className="text-xs font-extrabold shrink-0">Senin cevabın</span>}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="text-sm font-semibold text-ink-soft leading-relaxed">{q.explanation}</p>
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        )}

        {wrongCount > 0 && (
          <Link
            href="/yanlislarim"
            className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-danger-wash text-danger-ink font-extrabold text-[15px] py-3 hover:brightness-[0.98]"
          >
            <XCircle size={18} strokeWidth={2.6} />
            Yanlışlarım kutusuna git
          </Link>
        )}
      </section>
    </div>
  );
}
