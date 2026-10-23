"use client";

import { XCircle } from "lucide-react";
import QuestionSetPage from "@/components/QuestionSetPage";
import { getWrongBoxIds } from "@/lib/progress";

export default function YanlislarimClient() {
  return (
    <QuestionSetPage
      readIds={getWrongBoxIds}
      title="Yanlışlarım"
      description="Son cevabın yanlış olan tüm sorular burada. Bir soruyu doğru cevapladığında listeden kendiliğinden çıkar."
      icon={XCircle}
      tone={{ bg: "var(--color-danger-wash)", fg: "var(--color-danger-ink)", solid: "var(--color-danger)" }}
      quizTitle="Yanlışlarım"
      mode="review"
      emptyTitle="Yanlışın yok!"
      emptyText="Şu an yanlış cevapladığın bir soru bulunmuyor. Yeni sorular çözmeye devam et."
      startLabel="YANLIŞLARI ÇÖZ"
    />
  );
}
