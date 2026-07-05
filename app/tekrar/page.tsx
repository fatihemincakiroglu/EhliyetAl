"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import { getAllQuestions, type Question } from "@/lib/questions";
import { getWrongQuestionIds } from "@/lib/storage";
import QuizRunner from "@/components/QuizRunner";

export default function TekrarPage() {
  const [ready, setReady] = useState(false);
  const [reviewQuestions, setReviewQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const ids = getWrongQuestionIds();
    const all = getAllQuestions();
    const map = new Map(all.map((q) => [q.id, q]));
    const list = ids.map((id) => map.get(id)).filter((q): q is Question => Boolean(q));
    setReviewQuestions(list);
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <p className="text-ink-soft text-sm font-data">Yükleniyor...</p>
      </div>
    );
  }

  if (reviewQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-paper">
        <main className="max-w-2xl mx-auto px-5 sm:px-6 py-14 text-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8 justify-center"
          >
            <ArrowLeft size={16} />
            Ana sayfaya dön
          </Link>
          <div className="bg-surface border border-line rounded-2xl p-8">
            <RefreshCcw size={28} className="mx-auto mb-4 text-gold" />
            <h1 className="font-display text-xl text-ink mb-2">
              Henüz tekrar edilecek soru yok
            </h1>
            <p className="text-ink-soft text-sm">
              Bir kategoriyi veya sınav simülasyonunu çözdüğünde yanlış yaptığın sorular
              burada birikir ve tekrar çalışabilirsin.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <QuizRunner
      questions={reviewQuestions}
      title="Yanlışlarını Tekrar Çöz"
      subtitle="Tekrar Modu"
      mode="review"
      backHref="/"
    />
  );
}
