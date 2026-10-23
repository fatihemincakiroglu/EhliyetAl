import { ChevronDown } from "lucide-react";
import type { Question } from "@/lib/questions";

export default function CategoryQuestionList({
  questions,
  categoryName,
}: {
  questions: Question[];
  categoryName: string;
}) {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-14">
      <h2 className="font-display font-black text-xl sm:text-2xl leading-tight text-ink mb-2">
        {categoryName} — Tüm Sorular ve Açıklamaları
      </h2>
      <p className="text-ink-soft font-semibold mb-5 leading-relaxed">
        Yukarıdaki testi çözmeden önce veya çözdükten sonra, bu kategorideki
        tüm soruları ve doğru cevap açıklamalarını buradan tek tek
        inceleyebilirsin.
      </p>
      <div className="flex flex-col gap-2.5">
        {questions.map((q, i) => (
          <details
            key={q.id}
            className="group rounded-2xl border-2 border-line bg-surface open:bg-paper"
          >
            <summary className="flex items-start gap-3 p-3.5 min-h-12 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="text-[13px] font-extrabold text-ink-soft tabular-nums shrink-0 mt-0.5 w-6">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="flex-1 text-[15px] font-bold text-ink leading-snug">{q.text}</span>
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
                  return (
                    <li
                      key={oi}
                      className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-bold ${
                        isCorrect ? "bg-success-wash text-success-ink" : "text-ink-soft"
                      }`}
                    >
                      <span className="font-black w-4 shrink-0">{String.fromCharCode(65 + oi)}</span>
                      <span className="flex-1">{opt}</span>
                      {isCorrect && <span className="text-xs font-extrabold shrink-0">Doğru cevap ✓</span>}
                    </li>
                  );
                })}
              </ul>
              <p className="text-sm font-semibold text-ink-soft leading-relaxed">
                <strong className="font-extrabold text-ink">Açıklama: </strong>
                {q.explanation}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
