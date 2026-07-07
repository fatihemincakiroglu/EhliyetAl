"use client";

import { useMemo } from "react";
import { getFixedExamQuestions } from "@/lib/questions";
import ExamIntroStart from "@/components/ExamIntroStart";

export default function FixedExamClient({ examNumber }: { examNumber: number }) {
  const questions = useMemo(
    () => getFixedExamQuestions(examNumber, 50),
    [examNumber]
  );

  return (
    <ExamIntroStart
      eyebrow={`Deneme Sınavı ${examNumber}`}
      title={`Deneme Sınavı ${examNumber}`}
      description="Bu deneme sınavı sabit bir soru setinden oluşur; her çözdüğünde aynı sorularla karşılaşırsın. Böylece sonuçlarını önceki denemelerinle karşılaştırabilir, gelişimini net bir şekilde takip edebilirsin."
      questions={questions}
      quizTitle={`Deneme Sınavı ${examNumber}`}
      quizSubtitle="Sabit Set"
      distributionLabel="Sabit"
      backHref="/sinav"
    />
  );
}
