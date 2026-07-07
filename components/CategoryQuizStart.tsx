"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ListChecks, FileDown } from "lucide-react";
import type { Category, Difficulty } from "@/lib/questions";
import QuizRunner from "@/components/QuizRunner";

const difficultyOptions: { value: Difficulty | "hepsi"; label: string }[] = [
  { value: "hepsi", label: "Hepsi" },
  { value: "kolay", label: "Kolay" },
  { value: "orta", label: "Orta" },
  { value: "zor", label: "Zor" },
];

export default function CategoryQuizStart({ category }: { category: Category }) {
  const [difficulty, setDifficulty] = useState<Difficulty | "hepsi">("hepsi");
  const [started, setStarted] = useState(false);

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

  if (started) {
    return (
      <QuizRunner
        questions={filteredQuestions}
        title={category.name}
        subtitle={category.shortName}
        mode="category"
        categorySlug={category.slug}
        backHref="/"
      />
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Ana sayfaya dön
        </Link>

        <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8">
          <p className="font-data text-xs uppercase tracking-wider text-gold mb-2">
            {category.shortName}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink mb-3">
            {category.name}
          </h1>
          <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
            {category.description}. İstersen zorluk seviyesine göre filtreleyip
            sadece belirli soruları çalışabilirsin.
          </p>

          <p className="font-data text-[11px] uppercase tracking-wider text-ink-soft mb-3">
            Zorluk Seviyesi
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {difficultyOptions.map((opt) => {
              const count =
                opt.value === "hepsi"
                  ? category.questions.length
                  : category.questions.filter((q) => q.difficulty === opt.value)
                      .length;
              const active = difficulty === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setDifficulty(opt.value)}
                  disabled={count === 0}
                  className={`px-4 py-2 rounded-full text-sm font-body border transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                    active
                      ? "gold-gradient text-ink border-gold"
                      : "border-line text-ink-soft hover:border-gold-soft hover:text-ink"
                  }`}
                >
                  {opt.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4 mb-6">
            <ListChecks size={20} className="text-gold shrink-0" />
            <div>
              <p className="font-display text-lg text-ink">
                {filteredQuestions.length} soru
              </p>
              <p className="text-[11px] text-ink-soft font-data uppercase">
                Bu turda çözeceksin
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setStarted(true)}
              disabled={filteredQuestions.length === 0}
              className="font-display text-sm tracking-wide uppercase rounded-full gold-gradient text-ink px-8 py-3.5 hover:bg-gold-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Çözmeye Başla
            </button>
            <button
              type="button"
              onClick={handleDownloadSheet}
              disabled={filteredQuestions.length === 0}
              className="flex items-center justify-center gap-2 font-display text-sm tracking-wide uppercase btn-hard-outline rounded-full border-2 border-ink text-ink bg-surface px-6 py-3.5 hover:bg-gold-wash hover:border-gold-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FileDown size={16} />
              Yazdırılabilir Föy İndir
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
