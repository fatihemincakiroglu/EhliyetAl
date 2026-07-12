"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from "lucide-react";

/* Animasyonlu tepeden görünüm kavşak şemaları.
 * Her şema, önceliği olan aracı vurgular ve kısa kuralı anlatır. */

const GRASS = "#e8ede4";
const ROAD = "#3a3f52";
const LINE = "#f4c430";

function Base({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-auto">
      <rect width="300" height="300" fill={GRASS} />
      <rect x="0" y="110" width="300" height="80" fill={ROAD} />
      <rect x="110" y="0" width="80" height="300" fill={ROAD} />
      <line x1="0" y1="150" x2="95" y2="150" stroke={LINE} strokeWidth="2" strokeDasharray="10 8" />
      <line x1="205" y1="150" x2="300" y2="150" stroke={LINE} strokeWidth="2" strokeDasharray="10 8" />
      <line x1="150" y1="0" x2="150" y2="95" stroke={LINE} strokeWidth="2" strokeDasharray="10 8" />
      <line x1="150" y1="205" x2="150" y2="300" stroke={LINE} strokeWidth="2" strokeDasharray="10 8" />
      {children}
    </svg>
  );
}

function AnimCar({
  color,
  path,
  dur = 3,
  label,
  priority = false,
}: {
  color: string;
  path: string;
  dur?: number;
  label?: string;
  priority?: boolean;
}) {
  return (
    <g>
      {priority && (
        <circle r="20" fill="none" stroke={color} strokeWidth="2" opacity="0.5">
          <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={path} />
        </circle>
      )}
      <g>
        <rect x="-10" y="-15" width="20" height="30" rx="4" fill={color} />
        <rect x="-7" y="-12" width="14" height="7" rx="2" fill="#fff" opacity="0.85" />
        {label && (
          <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
            {label}
          </text>
        )}
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={path} rotate="auto" />
      </g>
    </g>
  );
}

type Schema = {
  title: string;
  rule: string;
  detail: string;
  scene: React.ReactNode;
};

const CAR_A = "#c1272d";
const CAR_B = "#1a5fb4";

const schemas: Schema[] = [
  {
    title: "Kontrolsüz Kavşak: Sağdan Gelen Geçer",
    rule: "Işık ve levha yoksa, sağdaki aracın geçiş üstünlüğü vardır.",
    detail:
      "En temel kuraldır. Kavşağa aynı anda gelen araçlardan sağda olan önce geçer. Soldaki araç durup yol verir. Bu yüzden 'sağ senin dostundur' denir.",
    scene: (
      <Base>
        {/* B sağdan gelir ve düz geçer (öncelikli) */}
        <AnimCar color={CAR_B} label="B" priority path="M 235 150 L 65 150" dur={3} />
        {/* A soldan/aşağıdan gelir, kavşak öncesi bekler gibi yavaş */}
        <AnimCar color={CAR_A} label="A" path="M 165 300 L 165 205 L 165 205 L 165 300" dur={3} />
      </Base>
    ),
  },
  {
    title: "Düz Giden, Sola Dönene Üstündür",
    rule: "Karşılıklı yönde, düz giden araç sola dönen araçtan önce geçer.",
    detail:
      "Siz (A) düz giderken, karşıdan gelen araç (B) sola dönmek isterse önce siz geçersiniz. Sola dönen araç, karşıdan düz geleni beklemek zorundadır.",
    scene: (
      <Base>
        {/* A düz gider (öncelikli) */}
        <AnimCar color={CAR_A} label="A" priority path="M 165 300 L 165 0" dur={3} />
        {/* B karşıdan gelir sola döner (bekler) */}
        <AnimCar color={CAR_B} label="B" path="M 135 0 L 135 120 Q 135 150 95 150" dur={4} />
      </Base>
    ),
  },
  {
    title: "Anayol, Tali Yola Üstündür",
    rule: "Anayoldaki araç, tali (yan) yoldan gelen araçtan önce geçer.",
    detail:
      "'Yol Ver' veya 'Dur' levhası olan tali yoldaki araç, anayoldan gelen araca yol vermek zorundadır. Levha hangi kolun tali olduğunu gösterir.",
    scene: (
      <Base>
        {/* Anayol yatay: B öncelikli */}
        <AnimCar color={CAR_B} label="B" priority path="M -20 150 L 320 150" dur={3} />
        {/* Tali koldan A bekler */}
        <AnimCar color={CAR_A} label="A" path="M 165 300 L 165 210 L 165 300" dur={3} />
        {/* Yol ver üçgeni */}
        <g transform="translate(150,215)">
          <polygon points="0,-9 9,7 -9,7" fill="#fff" stroke="#c1272d" strokeWidth="2.5" />
        </g>
      </Base>
    ),
  },
  {
    title: "Dönel Kavşak: İçerideki Geçer",
    rule: "Ada etrafında dönen araç, kavşağa girecek araçtan önceliklidir.",
    detail:
      "Dönel (göbekli) kavşaklarda ada içinde dönmekte olan araç önce geçer. Girmek isteyen araç, soldan gelen ada içi trafiğe yol verir.",
    scene: (
      <Base>
        <circle cx="150" cy="150" r="34" fill={GRASS} stroke={LINE} strokeWidth="2" />
        {/* B ada içinde döner (öncelikli) */}
        <AnimCar
          color={CAR_B}
          label="B"
          priority
          path="M 150 108 A 42 42 0 1 1 108 150 A 42 42 0 0 1 150 108"
          dur={5}
        />
        {/* A girmeyi bekler */}
        <AnimCar color={CAR_A} label="A" path="M 165 300 L 165 200 L 165 300" dur={3} />
      </Base>
    ),
  },
  {
    title: "Yaya Her Zaman Önceliklidir",
    rule: "Yaya geçidindeki yayaya her koşulda yol verilir.",
    detail:
      "Yaya geçidine girmiş ya da girmek üzere olan yaya için araç tamamen durur. Dönüş yaparken karşılaştığınız yayalara da öncelik verilir.",
    scene: (
      <Base>
        {[118, 130, 142, 154, 166, 178].map((cx) => (
          <rect key={cx} x={cx} y={100} width="7" height="18" fill="#fff" />
        ))}
        {/* yaya geçer (öncelikli) */}
        <g>
          <circle cx="0" cy="0" r="6" fill="#12182b" />
          <rect x="-3" y="3" width="6" height="10" rx="2" fill="#12182b" />
          <animateMotion dur="4s" repeatCount="indefinite" path="M 120 109 L 180 109" />
        </g>
        {/* A bekler */}
        <AnimCar color={CAR_A} label="A" path="M 165 300 L 165 135 L 165 300" dur={4} />
      </Base>
    ),
  },
];

export default function RightOfWayClient() {
  const [i, setI] = useState(0);
  const s = schemas[i];

  return (
    <div className="min-h-screen bg-paper">
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-6 sm:py-10">
        <Link
          href="/pratik-oyunlar"
          className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Oyunlara dön
        </Link>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-wash px-3 py-1 text-xs font-medium text-gold mb-3">
          <Play size={13} /> Animasyonlu Şema
        </span>
        <h1 className="font-display text-2xl sm:text-3xl text-ink mb-2">
          Geçiş Hakkı Kuralları
        </h1>
        <p className="text-ink-soft text-sm mb-6">
          Sınavda en çok yanılınan öncelik kurallarını hareketli şemalarla
          öğren. Öncelikli aracın etrafında halka döner.
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-display text-ink">
            {i + 1} / {schemas.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setI((v) => Math.max(0, v - 1))}
              disabled={i === 0}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line bg-surface text-ink disabled:opacity-40 hover:bg-gold-wash transition"
              aria-label="Önceki"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setI((v) => Math.min(schemas.length - 1, v + 1))}
              disabled={i === schemas.length - 1}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line bg-surface text-ink disabled:opacity-40 hover:bg-gold-wash transition"
              aria-label="Sonraki"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-4 mb-5 max-w-sm mx-auto">
          {s.scene}
        </div>

        <h2 className="font-display text-lg text-ink mb-2">{s.title}</h2>
        <div className="rounded-xl border border-gold-soft bg-gold-wash p-4 mb-4">
          <p className="text-sm font-medium text-ink">{s.rule}</p>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed mb-8">{s.detail}</p>

        {/* Alt gezinme noktaları */}
        <div className="flex items-center justify-center gap-2">
          {schemas.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-gold" : "w-2 bg-line"
              }`}
              aria-label={`Şema ${idx + 1}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
