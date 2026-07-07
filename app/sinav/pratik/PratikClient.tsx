"use client";

import { useMemo } from "react";
import { getExamQuestions } from "@/lib/questions";
import ExamIntroStart from "@/components/ExamIntroStart";

export default function PratikClient() {
  const questions = useMemo(() => getExamQuestions(50), []);

  return (
    <ExamIntroStart
      eyebrow="Sınırsız Pratik"
      title="Karışık Sorularla Sınırsız Pratik Yap"
      description="Bu test her başlattığında trafik, motor, ilk yardım ve çevre konularından yeniden karıştırılmış 50 soru sunar. İstediğin kadar tekrar çözebilirsin; süre geri sayımı gerçek sınavdaki gibi otomatik başlar."
      questions={questions}
      quizTitle="Sınırsız Pratik"
      quizSubtitle="Karışık"
      distributionLabel="Karışık"
      backHref="/sinav"
    />
  );
}
