"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCcw, Clock } from "lucide-react";
import { getAllQuestions, type Question } from "@/lib/questions";
import {
  getDueQuestionIds,
  getUpcomingReviewCount,
  getNextUpcomingDate,
} from "@/lib/spacedRepetition";
import QuizRunner from "@/components/QuizRunner";

export default function TekrarClient() {
  const [ready, setReady] = useState(false);
  const [reviewQuestions, setReviewQuestions] = useState<Question[]>([]);
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [nextDate, setNextDate] = useState<Date | null>(null);

  useEffect(() => {
    const ids = getDueQuestionIds();
    const all = getAllQuestions();
    const map = new Map(all.map((q) => [q.id, q]));
    const list = ids.map((id) => map.get(id)).filter((q): q is Question => Boolean(q));
    setReviewQuestions(list);
    setUpcomingCount(getUpcomingReviewCount());
    setNextDate(getNextUpcomingDate());
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
              Şu an tekrar edilecek soru yok
            </h1>
            <p className="text-ink-soft text-sm mb-4">
              Yanlış yaptığın sorular, aralıklı tekrar sistemiyle birkaç gün
              sonra otomatik olarak burada karşına çıkar — böylece unutmadan
              önce tekrar edersin.
            </p>
            {upcomingCount > 0 && nextDate && (
              <div className="inline-flex items-center gap-2 text-xs text-ink-soft bg-paper border border-line rounded-full px-4 py-2">
                <Clock size={14} className="text-gold" />
                {upcomingCount} soru sırada — sıradaki tekrar{" "}
                {nextDate.toLocaleDateString("tr-TR")} tarihinde
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <QuizRunner
      questions={reviewQuestions}
      title="Aralıklı Tekrar"
      subtitle={`${reviewQuestions.length} soru hazır`}
      mode="review"
      backHref="/"
    />
  );
}
