"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, X } from "lucide-react";
import { categories, getAllQuestions, type Question } from "@/lib/questions";

const categoryLabel: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.slug, c.shortName])
);
const categorySlugByQuestionId = new Map<string, string>();
for (const c of categories) {
  for (const q of c.questions) {
    categorySlugByQuestionId.set(q.id, c.slug);
  }
}

function normalize(text: string) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

export default function AraPage() {
  const [query, setQuery] = useState("");
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return [];
    return allQuestions.filter((question: Question) => {
      const haystack = normalize(
        `${question.text} ${question.options.join(" ")} ${question.explanation}`
      );
      return haystack.includes(q);
    });
  }, [query, allQuestions]);

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

        <h1 className="font-display text-3xl text-ink mb-2">Soru Ara</h1>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
          Aklına takılan bir konuyu veya kelimeyi yaz, ilgili soruları ve
          açıklamalarını hemen gör.
        </p>

        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Örn: kavşak, akü, kanama, öncelik..."
            className="w-full rounded-full border border-line bg-surface pl-11 pr-11 py-3.5 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-gold-soft"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Aramayı temizle"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {query.trim().length >= 2 && (
          <p className="font-data text-xs uppercase tracking-wider text-ink-soft mb-4">
            {results.length} sonuç bulundu
          </p>
        )}

        {query.trim().length >= 2 && results.length === 0 && (
          <div className="bg-surface border border-line rounded-2xl p-8 text-center">
            <p className="text-ink-soft text-sm">
              "{query}" ile ilgili bir soru bulamadım. Farklı bir kelime
              deneyebilir veya{" "}
              <Link href="/sozluk" className="text-gold hover:underline">
                sözlüğe
              </Link>{" "}
              göz atabilirsin.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {results.map((question) => {
            const slug = categorySlugByQuestionId.get(question.id) ?? "trafik";
            return (
              <details
                key={question.id}
                className="group bg-surface border border-line rounded-xl p-4 open:border-gold-soft"
              >
                <summary className="cursor-pointer flex items-start justify-between gap-3 list-none">
                  <div className="min-w-0">
                    <span className="font-data text-[10px] uppercase tracking-wide text-gold">
                      {categoryLabel[slug]}
                    </span>
                    <p className="font-display text-base text-ink mt-0.5">
                      {question.text}
                    </p>
                  </div>
                  <span className="text-gold shrink-0 transition-transform group-open:rotate-45 font-display text-xl">
                    +
                  </span>
                </summary>
                <div className="mt-3 pt-3 border-t border-line">
                  <p className="text-sm text-ink mb-2">
                    <strong className="text-success">Doğru cevap: </strong>
                    {question.options[question.correctIndex]}
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {question.explanation}
                  </p>
                  <Link
                    href={`/quiz/${slug}`}
                    className="inline-block mt-3 text-xs font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
                  >
                    Bu kategoriyi çöz →
                  </Link>
                </div>
              </details>
            );
          })}
        </div>
      </main>
    </div>
  );
}
