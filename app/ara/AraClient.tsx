"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X, ChevronDown, ArrowRight } from "lucide-react";
import { categories, getAllQuestions, type Question } from "@/lib/questions";
import { getCategoryTheme } from "@/components/categoryTheme";

const categoryLabel: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.slug, c.shortName])
);
const categorySlugByQuestionId = new Map<string, string>();
for (const c of categories) {
  for (const q of c.questions) {
    categorySlugByQuestionId.set(q.id, c.slug);
  }
}

const SUGGESTIONS = ["kavşak", "akü", "kanama", "öncelik", "sollama", "fren"];

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

/** Eşleşen kısımları <mark> ile vurgular (Türkçe karakter duyarsız). */
function Highlight({ text, query }: { text: string; query: string }) {
  const q = normalize(query.trim());
  const norm = normalize(text);
  // normalize karakter sayısını koruduğu sürece indeksler hizalı kalır
  if (q.length < 2 || norm.length !== text.length) return <>{text}</>;
  const parts: React.ReactNode[] = [];
  let i = 0;
  let idx = norm.indexOf(q);
  while (idx !== -1) {
    if (idx > i) parts.push(text.slice(i, idx));
    parts.push(
      <mark key={idx} className="bg-sun-wash text-ink rounded px-0.5">
        {text.slice(idx, idx + q.length)}
      </mark>
    );
    i = idx + q.length;
    idx = norm.indexOf(q, i);
  }
  if (i < text.length) parts.push(text.slice(i));
  return <>{parts}</>;
}

export default function AraClient() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const matches = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return [];
    return allQuestions.filter((question: Question) => {
      const haystack = normalize(
        `${question.text} ${question.options.join(" ")} ${question.explanation}`
      );
      return haystack.includes(q);
    });
  }, [query, allQuestions]);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const q of matches) {
      const slug = categorySlugByQuestionId.get(q.id) ?? "trafik";
      m[slug] = (m[slug] ?? 0) + 1;
    }
    return m;
  }, [matches]);

  const activeFilter = filter !== "all" && counts[filter] ? filter : "all";
  const results =
    activeFilter === "all"
      ? matches
      : matches.filter((q) => categorySlugByQuestionId.get(q.id) === activeFilter);
  const searching = query.trim().length >= 2;

  return (
    <div className="bg-paper">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-1.5">Soru Ara</h1>
        <p className="text-ink-soft font-semibold leading-relaxed mb-5">
          Aklına takılan bir konuyu veya kelimeyi yaz, ilgili soruları ve
          açıklamalarını hemen gör.
        </p>

        <label htmlFor="soru-ara" className="block text-[13px] font-extrabold text-ink mb-2">
          Aranacak kelime
        </label>
        <div className="relative mb-4">
          <Search
            size={20}
            strokeWidth={2.6}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none"
          />
          <input
            id="soru-ara"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Örn: kavşak, akü, kanama, öncelik..."
            className="w-full h-14 rounded-2xl border-2 border-line bg-surface pl-12 pr-12 text-base font-bold text-ink placeholder:text-ink-soft/70 placeholder:font-semibold outline-none focus:border-primary transition-colors [&::-webkit-search-cancel-button]:hidden"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Aramayı temizle"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-ink-soft hover:text-ink hover:bg-surface-alt cursor-pointer"
            >
              <X size={18} strokeWidth={2.6} />
            </button>
          )}
        </div>

        {!searching && (
          <div className="flex flex-wrap gap-2" aria-label="Öneriler">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="rounded-full border-2 border-line bg-surface px-4 min-h-11 text-sm font-extrabold text-ink-soft hover:text-primary hover:border-primary-soft cursor-pointer transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {searching && matches.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4" role="group" aria-label="Konu filtresi">
            <FilterChip active={activeFilter === "all"} onClick={() => setFilter("all")}>
              Tümü ({matches.length})
            </FilterChip>
            {categories
              .filter((c) => counts[c.slug])
              .map((c) => (
                <FilterChip key={c.slug} active={activeFilter === c.slug} onClick={() => setFilter(c.slug)}>
                  {c.shortName} ({counts[c.slug]})
                </FilterChip>
              ))}
          </div>
        )}

        {searching && (
          <p className="text-[13px] font-extrabold text-ink-soft mb-3" aria-live="polite">
            {results.length} sonuç bulundu
          </p>
        )}

        {searching && matches.length === 0 && (
          <div className="card bg-surface border-2 border-line rounded-3xl p-6 text-center">
            <p className="text-ink-soft font-semibold">
              &quot;{query}&quot; ile ilgili bir soru bulamadım. Farklı bir kelime
              deneyebilir veya{" "}
              <Link href="/sozluk" className="font-extrabold text-primary hover:underline underline-offset-2">
                sözlüğe
              </Link>{" "}
              göz atabilirsin.
            </p>
          </div>
        )}

        <ul className="flex flex-col gap-2.5">
          {results.map((question) => {
            const slug = categorySlugByQuestionId.get(question.id) ?? "trafik";
            const theme = getCategoryTheme(slug);
            const Icon = theme.icon;
            return (
              <li key={question.id}>
                <details className="group card rounded-2xl border-2 border-line bg-surface open:bg-paper">
                  <summary className="flex items-start gap-3 p-3.5 min-h-12 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: theme.wash, color: theme.color }}
                    >
                      <Icon size={16} strokeWidth={2.4} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-xs font-extrabold" style={{ color: theme.color }}>
                        {categoryLabel[slug]}
                      </span>
                      <span className="block text-[15px] font-bold text-ink leading-snug mt-0.5">
                        <Highlight text={question.text} query={query} />
                      </span>
                    </span>
                    <ChevronDown
                      size={18}
                      strokeWidth={2.6}
                      className="text-ink-soft shrink-0 mt-1 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-3.5 pb-4">
                    <p className="rounded-xl bg-success-wash text-success-ink text-sm font-bold px-3 py-2 mb-2">
                      <strong className="font-extrabold">Doğru cevap: </strong>
                      <Highlight text={question.options[question.correctIndex]} query={query} />
                    </p>
                    <p className="text-sm font-semibold text-ink-soft leading-relaxed">
                      <Highlight text={question.explanation} query={query} />
                    </p>
                    <Link
                      href={`/quiz/${slug}`}
                      className="inline-flex items-center gap-1.5 mt-3 min-h-11 text-sm font-extrabold text-primary hover:underline underline-offset-2"
                    >
                      Bu kategoriyi çöz
                      <ArrowRight size={16} strokeWidth={2.6} />
                    </Link>
                  </div>
                </details>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 min-h-10 text-sm font-extrabold border-2 cursor-pointer transition-colors ${
        active ? "bg-ink border-ink text-paper" : "bg-surface border-line text-ink-soft hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
