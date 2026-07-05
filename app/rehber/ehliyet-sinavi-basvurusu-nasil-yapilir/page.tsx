import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ehliyet Sınavı Başvurusu Nasıl Yapılır? | EhliyetAl",
  description:
    "Sürücü kursuna kayıttan sınav sonucuna kadar ehliyet sınavı başvuru sürecinin adımları.",
  alternates: {
    canonical: "https://ehliyetal.net/rehber/ehliyet-sinavi-basvurusu-nasil-yapilir",
  },
};

const steps = [
  {
    title: "Sürücü kursuna kayıt",
    text: "İl/ilçe millî eğitim müdürlüğüne bağlı, izinli bir sürücü kursuna kimlik belgesi ve gerekli sağlık raporuyla kayıt yaptırılır. Kurs, sürücü adayının yaş ve eğitim şartlarını taşıyıp taşımadığını kontrol eder.",
  },
  {
    title: "Teorik eğitim",
    text: "İlk yardım, trafik ve çevre bilgisi, motor ve araç tekniği bilgisi derslerini kapsayan teorik eğitim tamamlanır. Bu dersler tam da EhliyetAl'daki kategorilerle örtüşür.",
  },
  {
    title: "Sınav başvurusu",
    text: "Teorik eğitimi tamamlayan aday, kursun yönlendirmesiyle sınav başvurusunu yapar. Başvuru süreci ve tarihler il/ilçe millî eğitim müdürlüğü tarafından duyurulur; güncel takvimi kursundan veya resmi kaynaklardan takip etmen gerekir.",
  },
  {
    title: "Teorik sınav",
    text: "İlk Yardım, Trafik ve Çevre Bilgisi, Motor ve Araç Tekniği Bilgisi derslerinden oluşan çoktan seçmeli sınava girilir. Her dersten ayrı ayrı en az 70 puan almak gerekir.",
  },
  {
    title: "Direksiyon (uygulamalı) eğitimi ve sınavı",
    text: "Teorik sınavı geçen aday, direksiyon eğitimine başlar. Belirlenen ders saatleri tamamlandıktan sonra uygulamalı sınava girilir.",
  },
  {
    title: "Sürücü belgesinin teslimi",
    text: "Tüm aşamalar başarıyla tamamlandığında sürücü belgesi (ehliyet) düzenlenerek adaya teslim edilir.",
  },
];

export default function BasvuruRehberi() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Ehliyet Sınavı Başvurusu Nasıl Yapılır?",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };

  return (
    <div className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/rehber"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <h1 className="font-display text-3xl text-ink mb-4">
          Ehliyet Sınavı Başvurusu Nasıl Yapılır?
        </h1>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          Ehliyet almak, teorik bilgiyi öğrenmenin yanında birkaç idari
          adımdan geçmeyi de gerektirir. İşte genel süreç:
        </p>

        <ol className="flex flex-col gap-4 mb-10">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 bg-surface border border-line rounded-xl p-4"
            >
              <span className="font-display text-xl text-gold shrink-0 w-8">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-base text-ink mb-1">
                  {step.title}
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-gold-wash border border-gold-soft/40 rounded-2xl p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            Başvuru tarihleri, gerekli belgeler ve kurs seçimiyle ilgili en
            güncel ve kesin bilgiyi il/ilçe millî eğitim müdürlüğünden veya
            e-Devlet üzerinden teyit etmeni öneririz; süreçler zaman zaman
            güncellenebilir.
          </p>
        </div>

        <Link
          href="/quiz/trafik"
          className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide text-gold hover:text-gold-soft transition-colors"
        >
          Teorik sınav sorularını çözmeye başla →
        </Link>
      </main>
    </div>
  );
}
