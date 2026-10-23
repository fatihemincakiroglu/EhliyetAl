"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileDown, Play, Sparkles } from "lucide-react";
import type { Category, Difficulty, Question } from "@/lib/questions";
import QuizRunner from "@/components/QuizRunner";
import { getCategoryTheme } from "@/components/categoryTheme";
import { pickQuickRound } from "@/lib/progress";

const difficultyOptions: { value: Difficulty | "hepsi"; label: string }[] = [
  { value: "hepsi", label: "Hepsi" },
  { value: "kolay", label: "Kolay" },
  { value: "orta", label: "Orta" },
  { value: "zor", label: "Zor" },
];

const QUICK_COUNT = 10;

/** ?tur=hizli parametresini okuyan sarmalayıcı (Suspense içinde kullanılır). */
export function CategoryQuizStartWithParams({ category }: { category: Category }) {
  const params = useSearchParams();
  return <CategoryQuizStart category={category} quick={params.get("tur") === "hizli"} />;
}

export default function CategoryQuizStart({ category, quick = false }: { category: Category; quick?: boolean }) {
  const [difficulty, setDifficulty] = useState<Difficulty | "hepsi">("hepsi");
  // Hızlı tur linkiyle gelindiyse doğrudan başla
  const [round, setRound] = useState<{ questions: Question[]; title: string } | null>(() =>
    quick && typeof window !== "undefined"
      ? { questions: pickQuickRound(category.questions, QUICK_COUNT), title: `${category.shortName} · Hızlı tur` }
      : null
  );
  const theme = getCategoryTheme(category.slug);
  const Icon = theme.icon;

  const filteredQuestions = useMemo(() => {
    if (difficulty === "hepsi") return category.questions;
    return category.questions.filter((q) => q.difficulty === difficulty);
  }, [category.questions, difficulty]);

  async function handleDownloadSheet() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const marginX = 20;
    let y = 20;

    doc.setFontSize(16);
    doc.text(`EhliyetAl - ${category.name}`, marginX, y);
    y += 8;
    doc.setFontSize(10);
    doc.text(`Calisma Foyu (${filteredQuestions.length} soru)`, marginX, y);
    y += 12;

    filteredQuestions.forEach((q, i) => {
      if (y > 265) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(11);
      const qLines: string[] = doc.splitTextToSize(`${i + 1}. ${q.text}`, 170);
      qLines.forEach((line) => {
        if (y > 275) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, marginX, y);
        y += 6;
      });

      doc.setFontSize(9);
      q.options.forEach((opt, oi) => {
        const prefix = oi === q.correctIndex ? "✓ " : "  ";
        const label = `${String.fromCharCode(65 + oi)}) `;
        const lines: string[] = doc.splitTextToSize(`${prefix}${label}${opt}`, 165);
        lines.forEach((line) => {
          if (y > 278) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, marginX + 4, y);
          y += 5;
        });
      });
      y += 4;
    });

    doc.save(`ehliyetal-${category.slug}-calisma-foyu.pdf`);
  }

  if (round) {
    return (
      <QuizRunner
        key={round.title + round.questions.length}
        questions={round.questions}
        title={round.title}
        subtitle={category.shortName}
        mode="category"
        categorySlug={category.slug}
        backHref="/"
      />
    );
  }

  return (
    <div className="bg-paper">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-8 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-5"
        >
          <ArrowLeft size={16} strokeWidth={2.6} />
          Ana sayfa
        </Link>

        <section className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-7">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: theme.wash, color: theme.color }}
            >
              <Icon size={28} strokeWidth={2.3} />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-extrabold" style={{ color: theme.color }}>
                {category.questions.length} soru
              </p>
              <h1 className="font-display font-black text-2xl sm:text-3xl leading-tight text-ink">{category.name}</h1>
            </div>
          </div>
          <p className="text-ink-soft font-semibold leading-relaxed mb-6">{category.description}.</p>

          <p className="text-[13px] font-extrabold text-ink mb-2.5">Zorluk seviyesi</p>
          <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Zorluk seviyesi">
            {difficultyOptions.map((opt) => {
              const count =
                opt.value === "hepsi"
                  ? category.questions.length
                  : category.questions.filter((q) => q.difficulty === opt.value).length;
              const active = difficulty === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setDifficulty(opt.value)}
                  disabled={count === 0}
                  aria-pressed={active}
                  className={`px-4 py-2 rounded-full text-sm font-extrabold border-2 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                    active
                      ? "bg-primary border-primary text-white"
                      : "bg-surface border-line text-ink-soft hover:border-primary-soft hover:text-ink"
                  }`}
                >
                  {opt.label} <span className="opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setRound({ questions: filteredQuestions, title: category.name })}
              disabled={filteredQuestions.length === 0}
              className="btn-primary rounded-2xl h-14 flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Play size={18} fill="currentColor" strokeWidth={0} />
              {filteredQuestions.length} SORUYU ÇÖZ
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setRound({
                    questions: pickQuickRound(category.questions, QUICK_COUNT),
                    title: `${category.shortName} · Hızlı tur`,
                  })
                }
                className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px] cursor-pointer"
              >
                <Sparkles size={17} strokeWidth={2.6} className="text-primary" />
                Hızlı tur ({QUICK_COUNT} soru)
              </button>
              <button
                type="button"
                onClick={handleDownloadSheet}
                disabled={filteredQuestions.length === 0}
                className="btn-soft rounded-2xl h-12 flex items-center justify-center gap-2 text-ink text-[15px] cursor-pointer disabled:opacity-40"
              >
                <FileDown size={17} strokeWidth={2.6} />
                Çalışma föyü (PDF)
              </button>
            </div>
            <p className="text-xs font-semibold text-ink-soft text-center">
              Hızlı tur önce yanlış yaptığın, sonra hiç çözmediğin soruları getirir.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
