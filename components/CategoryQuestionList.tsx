import type { Question } from "@/lib/questions";

export default function CategoryQuestionList({
  questions,
  categoryName,
}: {
  questions: Question[];
  categoryName: string;
}) {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-6 pb-14">
      <h2 className="font-display text-xl sm:text-2xl text-ink mb-2">
        {categoryName} — Tüm Sorular ve Açıklamaları
      </h2>
      <p className="text-ink-soft text-sm mb-6 leading-relaxed">
        Yukarıdaki testi çözmeden önce veya çözdükten sonra, bu kategorideki
        tüm soruları ve doğru cevap açıklamalarını buradan tek tek
        inceleyebilirsin.
      </p>
      <div className="flex flex-col gap-2.5">
        {questions.map((q, i) => (
          <details
            key={q.id}
            className="group bg-surface border border-line rounded-xl p-4 open:border-gold-soft"
          >
            <summary className="cursor-pointer flex items-start justify-between gap-3 list-none">
              <span className="min-w-0 flex items-start gap-2">
                <span className="font-data text-xs text-ink-soft shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="font-display text-base text-ink">{q.text}</span>
              </span>
              <span className="text-gold shrink-0 transition-transform group-open:rotate-45 font-display text-xl">
                +
              </span>
            </summary>
            <div className="mt-3 pt-3 border-t border-line pl-6">
              <ul className="text-sm text-ink-soft mb-2 flex flex-col gap-1">
                {q.options.map((opt, oi) => (
                  <li
                    key={oi}
                    className={oi === q.correctIndex ? "text-success font-medium" : ""}
                  >
                    {String.fromCharCode(65 + oi)}) {opt}
                    {oi === q.correctIndex ? " ✓" : ""}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ink-soft leading-relaxed">
                <strong className="text-ink">Açıklama: </strong>
                {q.explanation}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
