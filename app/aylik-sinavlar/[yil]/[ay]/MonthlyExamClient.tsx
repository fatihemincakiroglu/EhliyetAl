"use client";

import { useMemo } from "react";
import { getMonthlyExamQuestions } from "@/lib/monthlyExams";
import ExamIntroStart from "@/components/ExamIntroStart";

export default function MonthlyExamClient({
  year,
  month,
  monthName,
}: {
  year: number;
  month: number;
  monthName: string;
}) {
  const questions = useMemo(
    () => getMonthlyExamQuestions(year, month, 50),
    [year, month]
  );

  const label = `${year} ${monthName} Ehliyet Sınavı`;

  return (
    <ExamIntroStart
      eyebrow={`${monthName} ${year}`}
      title={label}
      description={`${label}, bu aya özel sabit bir soru setinden oluşur; her çözdüğünde aynı sorularla karşılaşırsın. Böylece sonuçlarını takip edebilir, gerçek sınav formatında kendini deneyebilirsin.`}
      questions={questions}
      quizTitle={label}
      quizSubtitle="Aylık Sınav"
      distributionLabel="Sabit"
      backHref="/aylik-sinavlar"
    />
  );
}
