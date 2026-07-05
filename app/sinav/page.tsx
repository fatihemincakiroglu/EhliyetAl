"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, ListChecks, Target, Shuffle } from "lucide-react";
import { getAllQuestions } from "@/lib/questions";
import QuizRunner from "@/components/QuizRunner";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SinavPage() {
  const [started, setStarted] = useState(false);

  const questions = useMemo(() => {
    const all = getAllQuestions();
    return shuffle(all).slice(0, Math.min(50, all.length));
  }, []);

  if (!started) {
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

          <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8">
            <p className="font-data text-xs uppercase tracking-wider text-gold mb-2">
              Sınav Simülasyonu
            </p>
            <h1 className="font-display text-2xl sm:text-3xl text-ink mb-3">
              Gerçek Sınav Simülasyonuna Başlıyorsun
            </h1>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              Bu test; trafik, motor, ilk yardım ve çevre konularından karışık
              olarak seçilmiş sorulardan oluşur. Başladıktan sonra süre geri
              sayımı otomatik başlar ve durdurulamaz — tıpkı gerçek sınavda
              olduğu gibi.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4">
                <ListChecks size={20} className="text-gold shrink-0" />
                <div>
                  <p className="font-display text-lg text-ink">{questions.length}</p>
                  <p className="text-[11px] text-ink-soft font-data uppercase">Soru</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4">
                <Clock size={20} className="text-gold shrink-0" />
                <div>
                  <p className="font-display text-lg text-ink">60 dakika</p>
                  <p className="text-[11px] text-ink-soft font-data uppercase">Süre</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4">
                <Target size={20} className="text-gold shrink-0" />
                <div>
                  <p className="font-display text-lg text-ink">%70</p>
                  <p className="text-[11px] text-ink-soft font-data uppercase">Geçme Puanı</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4">
                <Shuffle size={20} className="text-gold shrink-0" />
                <div>
                  <p className="font-display text-lg text-ink">Karışık</p>
                  <p className="text-[11px] text-ink-soft font-data uppercase">Konu Dağılımı</p>
                </div>
              </div>
            </div>

            <ul className="text-sm text-ink-soft space-y-2 mb-8 list-disc list-inside">
              <li>Her soruda 4 seçenek vardır, sadece biri doğrudur.</li>
              <li>Cevapladıktan sonra doğru cevap ve kısa açıklama gösterilir.</li>
              <li>Süre dolduğunda test otomatik olarak biter ve puanın hesaplanır.</li>
              <li>Sonuç ekranında yanlış yaptığın sorular listelenir, dilersen sonra "Tekrar Çöz" ile çalışabilirsin.</li>
            </ul>

            <button
              type="button"
              onClick={() => setStarted(true)}
              className="w-full sm:w-auto font-display text-sm tracking-wide uppercase rounded-full bg-gold text-ink px-8 py-3.5 hover:bg-gold-soft transition-colors"
            >
              Sınavı Başlat
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <QuizRunner
      questions={questions}
      title="Gerçek Sınav Simülasyonu"
      subtitle="Karışık"
      mode="exam"
      timeLimitSeconds={60 * 60}
      backHref="/"
    />
  );
}
