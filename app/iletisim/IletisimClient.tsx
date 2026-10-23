"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const CONTACT_EMAIL = "iletisim@ehliyetal.net";

const topics = [
  { value: "soru-hatasi", label: "Bir soruda hata var" },
  { value: "oneri", label: "Öneri / fikir" },
  { value: "teknik-sorun", label: "Teknik bir sorun yaşıyorum" },
  { value: "diger", label: "Diğer" },
];

export default function IletisimClient() {
  const [topic, setTopic] = useState(topics[0].value);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const topicLabel = topics.find((t) => t.value === topic)?.label ?? "Geri Bildirim";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`EhliyetAl — ${topicLabel}`);
    const body = encodeURIComponent(
      `Konu: ${topicLabel}\nAd: ${name || "Belirtilmedi"}\n\nMesaj:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="bg-paper">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-10">
        <div className="flex items-center gap-4 mb-3">
          <span className="w-14 h-14 rounded-2xl bg-primary-wash text-primary flex items-center justify-center shrink-0">
            <Mail size={28} strokeWidth={2.4} />
          </span>
          <h1 className="font-display font-black text-[28px] sm:text-4xl leading-tight text-ink">İletişim</h1>
        </div>
        <p className="text-ink-soft font-semibold leading-relaxed mb-6">
          Bir soruda hata bulduysan, bir önerin varsa veya teknik bir sorun
          yaşıyorsan aşağıdaki formu doldur. Gönder&apos;e bastığında e-posta
          uygulaman, hazır doldurulmuş bir mesajla açılacak.
        </p>

        <form
          onSubmit={handleSubmit}
          className="card bg-surface border-2 border-line rounded-3xl p-5 sm:p-7 flex flex-col gap-5"
        >
          <fieldset>
            <legend className="block text-[13px] font-extrabold text-ink mb-2.5">Konu</legend>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTopic(t.value)}
                  aria-pressed={topic === t.value}
                  className={`px-4 min-h-11 rounded-full text-sm font-extrabold border-2 cursor-pointer transition-colors ${
                    topic === t.value
                      ? "bg-primary border-primary text-white"
                      : "bg-surface border-line text-ink-soft hover:border-primary-soft hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="name" className="block text-[13px] font-extrabold text-ink mb-2">
              Adın (isteğe bağlı)
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 rounded-2xl border-2 border-line bg-surface px-4 font-bold text-ink placeholder:text-ink-soft/70 placeholder:font-semibold outline-none focus:border-primary transition-colors"
              placeholder="Adın"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[13px] font-extrabold text-ink mb-2">
              Mesajın
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full rounded-2xl border-2 border-line bg-surface px-4 py-3 font-bold text-ink placeholder:text-ink-soft/70 placeholder:font-semibold outline-none focus:border-primary transition-colors resize-none"
              placeholder="Hangi soruda, ne gibi bir hata olduğunu ya da önerini yazabilirsin..."
            />
          </div>

          <button
            type="submit"
            className="btn-primary rounded-2xl h-14 flex items-center justify-center gap-2 text-[16px] tracking-wide cursor-pointer"
          >
            <Send size={18} strokeWidth={2.6} />
            GÖNDER
          </button>
        </form>

        <p className="text-sm font-semibold text-ink-soft mt-6">
          Doğrudan e-posta göndermek istersen:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-extrabold text-primary hover:underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
        </p>
      </main>
    </div>
  );
}
