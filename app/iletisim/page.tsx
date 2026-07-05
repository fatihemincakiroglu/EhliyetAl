"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send } from "lucide-react";

const CONTACT_EMAIL = "iletisim@ehliyetal.net";

const topics = [
  { value: "soru-hatasi", label: "Bir soruda hata var" },
  { value: "oneri", label: "Öneri / fikir" },
  { value: "teknik-sorun", label: "Teknik bir sorun yaşıyorum" },
  { value: "diger", label: "Diğer" },
];

export default function IletisimPage() {
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
    <div className="min-h-screen bg-paper">
      <main className="max-w-xl mx-auto px-5 sm:px-6 py-8 sm:py-14">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Ana sayfaya dön
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-lg bg-gold-wash text-gold p-2">
            <Mail size={18} />
          </span>
          <h1 className="font-display text-3xl text-ink">İletişim</h1>
        </div>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8">
          Bir soruda hata bulduysan, bir önerin varsa veya teknik bir sorun
          yaşıyorsan aşağıdaki formu doldur. Gönder'e bastığında e-posta
          uygulaman, hazır doldurulmuş bir mesajla açılacak.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-data uppercase tracking-wide text-ink-soft mb-2">
              Konu
            </label>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTopic(t.value)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    topic === t.value
                      ? "bg-gold text-ink border-gold"
                      : "border-line text-ink-soft hover:border-gold-soft hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-xs font-data uppercase tracking-wide text-ink-soft mb-2"
            >
              Adın (isteğe bağlı)
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold-soft"
              placeholder="Adın"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-data uppercase tracking-wide text-ink-soft mb-2"
            >
              Mesajın
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold-soft resize-none"
              placeholder="Hangi soruda, ne gibi bir hata olduğunu ya da önerini yazabilirsin..."
            />
          </div>

          <button
            type="submit"
            className="self-start flex items-center gap-2 font-display text-sm tracking-wide uppercase rounded-full bg-gold text-ink px-6 py-3 hover:bg-gold-soft transition-colors"
          >
            <Send size={16} />
            Gönder
          </button>
        </form>

        <p className="text-xs text-ink-soft/70 mt-8">
          Doğrudan e-posta göndermek istersen:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </main>
    </div>
  );
}
