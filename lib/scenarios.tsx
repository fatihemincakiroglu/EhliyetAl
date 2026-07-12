import React from "react";

export type Scenario = {
  id: string;
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  rule: string;
  scene: React.ComponentType;
};

/* ----------------------------------------------------------------------
 * Basit, şematik trafik sahneleri (SVG). Kavşak tepeden görünümdür;
 * araçlar renkli kutucuklarla, geliş yönleri oklarla gösterilir.
 * -------------------------------------------------------------------- */

const ROAD = "#3a3f52";
const ROAD_LINE = "#f4c430";
const GRASS = "#e8ede4";
const CAR_A = "#c1272d"; // kırmızı — genelde "sen"
const CAR_B = "#1a5fb4"; // mavi — karşı araç
const CAR_C = "#2e7d32"; // yeşil — üçüncü araç

function IntersectionBase({ children }: { children?: React.ReactNode }) {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-auto" role="img">
      <rect x="0" y="0" width="300" height="300" fill={GRASS} />
      {/* Yatay yol */}
      <rect x="0" y="110" width="300" height="80" fill={ROAD} />
      {/* Dikey yol */}
      <rect x="110" y="0" width="80" height="300" fill={ROAD} />
      {/* Şerit çizgileri */}
      <line x1="0" y1="150" x2="95" y2="150" stroke={ROAD_LINE} strokeWidth="2" strokeDasharray="10 8" />
      <line x1="205" y1="150" x2="300" y2="150" stroke={ROAD_LINE} strokeWidth="2" strokeDasharray="10 8" />
      <line x1="150" y1="0" x2="150" y2="95" stroke={ROAD_LINE} strokeWidth="2" strokeDasharray="10 8" />
      <line x1="150" y1="205" x2="150" y2="300" stroke={ROAD_LINE} strokeWidth="2" strokeDasharray="10 8" />
      {children}
    </svg>
  );
}

function Car({
  x,
  y,
  color,
  dir = "up",
  label,
}: {
  x: number;
  y: number;
  color: string;
  dir?: "up" | "down" | "left" | "right";
  label?: string;
}) {
  const rot = { up: 0, right: 90, down: 180, left: 270 }[dir];
  return (
    <g transform={`translate(${x},${y}) rotate(${rot})`}>
      <rect x="-11" y="-16" width="22" height="32" rx="4" fill={color} />
      {/* ön cam */}
      <rect x="-8" y="-13" width="16" height="8" rx="2" fill="#ffffff" opacity="0.85" />
      {/* yön oku (aracın önünde) */}
      <polygon points="0,-26 -5,-19 5,-19" fill={color} />
      {label && (
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#ffffff"
          transform={`rotate(${-rot})`}
        >
          {label}
        </text>
      )}
    </g>
  );
}

function TrafficLight({
  x,
  y,
  active,
}: {
  x: number;
  y: number;
  active: "red" | "yellow" | "green";
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-7" y="-18" width="14" height="36" rx="3" fill="#12182b" />
      <circle cx="0" cy="-10" r="4" fill={active === "red" ? "#e53935" : "#5a1f1f"} />
      <circle cx="0" cy="0" r="4" fill={active === "yellow" ? "#fbc02d" : "#5a4a1f"} />
      <circle cx="0" cy="10" r="4" fill={active === "green" ? "#43a047" : "#1f4a24"} />
    </g>
  );
}

/* ---------- Sahneler ---------- */

// 1) Kontrolsüz kavşak — sağdaki araç
function SceneRightHandRule() {
  return (
    <IntersectionBase>
      <Car x={150} y={230} color={CAR_A} dir="up" label="A" />
      <Car x={230} y={150} color={CAR_B} dir="left" label="B" />
    </IntersectionBase>
  );
}

// 2) Işıklı kavşak — kırmızı ışık
function SceneRedLight() {
  return (
    <IntersectionBase>
      <Car x={150} y={230} color={CAR_A} dir="up" label="A" />
      <TrafficLight x={196} y={210} active="red" />
    </IntersectionBase>
  );
}

// 3) Anayol - tali yol (karşıdan gelen sola dönüyor)
function SceneOncomingLeftTurn() {
  return (
    <IntersectionBase>
      <Car x={165} y={230} color={CAR_A} dir="up" label="A" />
      <Car x={135} y={70} color={CAR_B} dir="down" label="B" />
      {/* B'nin sola dönüş oku */}
      <path d="M135 95 Q135 150 95 150" stroke={CAR_B} strokeWidth="3" fill="none" strokeDasharray="5 4" />
      <polygon points="95,150 103,145 103,155" fill={CAR_B} />
    </IntersectionBase>
  );
}

// 4) Yaya geçidi — yaya var
function ScenedPedestrian() {
  return (
    <IntersectionBase>
      <Car x={150} y={235} color={CAR_A} dir="up" label="A" />
      {/* yaya geçidi çizgileri */}
      {[118, 130, 142, 154, 166, 178].map((cx) => (
        <rect key={cx} x={cx} y={100} width="7" height="18" fill="#ffffff" />
      ))}
      {/* yaya */}
      <circle cx="150" cy="109" r="6" fill="#12182b" />
      <rect x="147" y="112" width="6" height="10" rx="2" fill="#12182b" />
    </IntersectionBase>
  );
}

// 5) Dönel kavşak (ada)
function SceneRoundabout() {
  return (
    <IntersectionBase>
      <circle cx="150" cy="150" r="34" fill={GRASS} stroke={ROAD_LINE} strokeWidth="2" />
      <Car x={150} y={230} color={CAR_A} dir="up" label="A" />
      <Car x={118} y={150} color={CAR_B} dir="right" label="B" />
    </IntersectionBase>
  );
}

// 6) Dur işareti olan kol
function SceneStopSign() {
  return (
    <IntersectionBase>
      <Car x={150} y={230} color={CAR_A} dir="up" label="A" />
      <Car x={70} y={135} color={CAR_B} dir="right" label="B" />
      {/* DUR işareti A tarafında */}
      <g transform="translate(196,215)">
        <polygon
          points="8,0 16,0 24,8 24,16 16,24 8,24 0,16 0,8"
          fill="#c1272d"
        />
        <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">
          DUR
        </text>
      </g>
    </IntersectionBase>
  );
}

export const scenarios: Scenario[] = [
  {
    id: "sag-kural",
    title: "Kontrolsüz Kavşak",
    question:
      "Işık ve levha bulunmayan bu kavşağa aynı anda geldiniz (A sizsiniz). Geçiş hakkı kimindir?",
    options: [
      "A (siz) — düz gittiğiniz için",
      "B (mavi araç) — sağınızdan geldiği için",
      "Kornaya basan geçer",
      "İkisi de aynı anda geçebilir",
    ],
    correctIndex: 1,
    explanation:
      "Kontrolsüz kavşaklarda (ışık ve levha yoksa) sağdan gelen aracın geçiş üstünlüğü vardır. B aracı sizin sağınızdan geldiği için önce o geçer; siz durup yol vermelisiniz.",
    rule: "Sağdaki aracın geçiş üstünlüğü",
    scene: SceneRightHandRule,
  },
  {
    id: "kirmizi-isik",
    title: "Işıklı Kavşak",
    question: "Kavşağa yaklaştığınızda ışık kırmızı yanıyor. Ne yaparsınız?",
    options: [
      "Yol boşsa geçerim",
      "Yavaşlayıp dikkatlice geçerim",
      "Durma çizgisinde tam olarak dururum",
      "Korna çalıp geçerim",
    ],
    correctIndex: 2,
    explanation:
      "Kırmızı ışıkta, yol boş olsa dahi durma çizgisinde tamamen durmak zorunludur. Işık yeşile dönene kadar beklenir. Kırmızı ışık ihlali hem tehlikeli hem cezalıdır.",
    rule: "Kırmızı ışıkta tam duruş",
    scene: SceneRedLight,
  },
  {
    id: "karsidan-sola-donen",
    title: "Karşıdan Gelen Sola Dönüyor",
    question:
      "Siz (A) düz gidiyorsunuz, karşıdan gelen B aracı sola dönmek istiyor. Geçiş hakkı kimindir?",
    options: [
      "B — dönüş yapan önce geçer",
      "A (siz) — karşı yönde düz giden öncelikli",
      "Önce gelen geçer",
      "Trafik yoğunluğuna göre değişir",
    ],
    correctIndex: 1,
    explanation:
      "Karşılıklı yönlerde, düz giden aracın sola dönen araca göre geçiş üstünlüğü vardır. Sola dönmek isteyen B aracı, karşıdan düz gelen sizi (A) beklemek zorundadır.",
    rule: "Düz gidenin sola dönene üstünlüğü",
    scene: SceneOncomingLeftTurn,
  },
  {
    id: "yaya-gecidi",
    title: "Yaya Geçidinde Yaya",
    question:
      "Yaya geçidine yaklaşıyorsunuz ve geçitte karşıya geçmekte olan bir yaya var. Ne yaparsınız?",
    options: [
      "Korna çalıp yayayı uyarırım",
      "Hızlanıp yaya geçmeden önce geçerim",
      "Durur, yaya geçişini tamamlayana kadar beklerim",
      "Yavaşlar ama durmam",
    ],
    correctIndex: 2,
    explanation:
      "Yaya geçidinde geçiş üstünlüğü her zaman yayanındır. Yaya geçidine girmiş veya girmek üzere olan yaya için araç tamamen durmalı ve geçiş tamamlanana kadar beklemelidir.",
    rule: "Yaya geçidinde yaya önceliği",
    scene: ScenedPedestrian,
  },
  {
    id: "donel-kavsak",
    title: "Dönel Kavşak (Ada)",
    question:
      "Göbekli (dönel) kavşağa girmek üzeresiniz (A). Adanın içinde dönmekte olan B aracı var. Kim geçer?",
    options: [
      "A — kavşağa giren öncelikli",
      "B — ada içinde dönen öncelikli",
      "Sağdan gelen her zaman geçer",
      "Büyük araç geçer",
    ],
    correctIndex: 1,
    explanation:
      "Dönel kavşaklarda ada etrafında dönmekte olan aracın geçiş üstünlüğü vardır. Kavşağa girmek isteyen (A), ada içindeki B aracına yol vermek zorundadır.",
    rule: "Dönel kavşakta içerideki araç önceliği",
    scene: SceneRoundabout,
  },
  {
    id: "dur-levhasi",
    title: "'DUR' Levhası Olan Kol",
    question:
      "Sizin (A) bulunduğunuz kolda 'DUR' levhası var. Yan koldan B aracı geliyor. Ne yaparsınız?",
    options: [
      "Yavaşlar, boşsa durmadan geçerim",
      "Tamamen durur, yol boşalınca geçerim",
      "B benden yavaşsa önce ben geçerim",
      "Sağdan geldiğim için ben geçerim",
    ],
    correctIndex: 1,
    explanation:
      "'DUR' levhası, yol boş olsa bile aracın tamamen durdurulmasını zorunlu kılar. Durduktan sonra diğer yoldaki araçlara (B) yol verilir; yol güvenli şekilde boşaldığında geçilir.",
    rule: "DUR levhasında zorunlu tam duruş",
    scene: SceneStopSign,
  },
];
