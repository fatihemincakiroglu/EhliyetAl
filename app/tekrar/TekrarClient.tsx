"use client";

import { useMemo } from "react";
import { RefreshCcw, Clock } from "lucide-react";
import QuestionSetPage from "@/components/QuestionSetPage";
import { useStoreVersion } from "@/lib/clientStore";
import { getDueQuestionIds, getUpcomingReviewCount, getNextUpcomingDate } from "@/lib/spacedRepetition";

function UpcomingInfo() {
  const v = useStoreVersion();
  const info = useMemo(
    () => (v === 0 ? null : { count: getUpcomingReviewCount(), next: getNextUpcomingDate() }),
    [v]
  );
  if (!info || info.count === 0 || !info.next) return null;
  return (
    <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-success-ink bg-surface rounded-full px-3.5 py-2">
      <Clock size={14} strokeWidth={2.6} />
      {info.count} soru sırada · sıradaki tekrar {info.next.toLocaleDateString("tr-TR")}
    </p>
  );
}

export default function TekrarClient() {
  return (
    <QuestionSetPage
      readIds={getDueQuestionIds}
      title="Aralıklı Tekrar"
      description="Yanlış yaptığın sorular 1, 3, 7, 14 ve 30 gün aralıklarla tekrar karşına çıkar; böylece unutmadan önce pekiştirirsin."
      icon={RefreshCcw}
      tone={{ bg: "var(--color-tangerine-wash)", fg: "var(--color-tangerine-ink)", solid: "var(--color-tangerine)" }}
      quizTitle="Aralıklı Tekrar"
      mode="review"
      emptyTitle="Bugünlük tekrar yok"
      emptyText="Tekrar zamanı gelen soru yok. Yanlış yaptıkların zamanı gelince burada olacak."
      emptyExtra={<UpcomingInfo />}
      startLabel="TEKRARA BAŞLA"
    />
  );
}
