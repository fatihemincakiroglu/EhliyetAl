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

const faqItems = [
  {
    q: "Ehliyet sınavı başvurusu için hangi belgeler gerekir?",
    a: "Genel olarak kimlik belgesi, sağlık raporu ve kursun istediği fotoğraf gibi belgeler istenir. Kesin belge listesi kayıt olacağın sürücü kursuna göre küçük farklar gösterebilir.",
  },
  {
    q: "Sürücü kursuna kayıt olmadan sınava girebilir miyim?",
    a: "Hayır. Ehliyet sınavına girebilmek için önce resmî bir sürücü kursuna kayıt olup teorik eğitimi tamamlamış olman gerekir.",
  },
  {
    q: "Başvuru süreci ne kadar sürer?",
    a: "Süre; kursun eğitim takvimine, teorik ve direksiyon derslerinin tamamlanma hızına ve il/ilçe millî eğitim müdürlüğünün sınav planlamasına göre değişir.",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-10 sm:pt-8">
        <Link
          href="/rehber"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-soft hover:text-ink transition-colors mb-6 min-h-11"
        >
          <ArrowLeft size={16} />
          Rehbere dön
        </Link>

        <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink mb-4">
          Ehliyet Sınavı Başvurusu Nasıl Yapılır?
        </h1>
        <p className="text-ink font-medium text-[16px] sm:text-[17px] leading-[1.75] mb-8">
          Ehliyet almak, teorik bilgiyi öğrenmenin yanında birkaç idari
          adımdan geçmeyi de gerektirir. İşte genel süreç:
        </p>

        <ol className="flex flex-col gap-3 mb-10">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 bg-surface border-2 border-line rounded-2xl p-4 sm:p-5"
            >
              <span className="w-9 h-9 rounded-xl bg-primary text-white font-display font-black text-base flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="font-display font-extrabold text-[16px] text-ink mb-1">
                  {step.title}
                </p>
                <p className="text-[15px] font-medium text-ink-soft leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-primary-wash rounded-2xl p-4 sm:p-5 mb-10 flex gap-3">
          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
          <p className="text-[15px] font-semibold text-ink leading-relaxed">
            Başvuru tarihleri, gerekli belgeler ve kurs seçimiyle ilgili en
            güncel ve kesin bilgiyi il/ilçe millî eğitim müdürlüğünden veya
            e-Devlet üzerinden teyit etmeni öneririz; süreçler zaman zaman
            güncellenebilir.
          </p>
        </div>

        <Link
          href="/quiz/trafik"
          className="btn-soft inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-ink mb-10"
        >
          Teorik sınav sorularını çözmeye başla →
        </Link>

        <h2 className="font-display font-black text-xl text-ink mb-4">Sıkça Sorulan Sorular</h2>
        <div className="flex flex-col gap-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group bg-surface border-2 border-line rounded-2xl open:border-primary-soft"
            >
              <summary className="cursor-pointer font-display font-extrabold text-[16px] text-ink list-none flex items-center justify-between gap-3 p-4 min-h-14 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="w-8 h-8 rounded-lg bg-surface-alt text-primary flex items-center justify-center shrink-0 transition-transform group-open:rotate-45 font-display font-black text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-[15px] font-medium text-ink-soft leading-relaxed px-4 pb-4 -mt-1">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
