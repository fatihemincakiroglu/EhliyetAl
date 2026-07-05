type SignProps = { size?: number };

const RED = "#c1272d";
const BLUE = "#1a5fb4";
const INK = "#12182b";
const WHITE = "#ffffff";

function WarningTriangle({
  size = 96,
  label,
  children,
}: SignProps & { label: string; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label={label}>
      <polygon points="50,6 94,90 6,90" fill={WHITE} stroke={RED} strokeWidth="7" />
      <g transform="translate(50,62)">{children}</g>
    </svg>
  );
}

function ProhibitionCircle({
  size = 96,
  label,
  children,
}: SignProps & { label: string; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label={label}>
      <circle cx="50" cy="50" r="46" fill={WHITE} stroke={RED} strokeWidth="7" />
      <g transform="translate(50,50)">{children}</g>
    </svg>
  );
}

function MandatoryCircle({
  size = 96,
  label,
  children,
}: SignProps & { label: string; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label={label}>
      <circle cx="50" cy="50" r="46" fill={BLUE} stroke={WHITE} strokeWidth="2" />
      <g transform="translate(50,50)">{children}</g>
    </svg>
  );
}

function InfoSquare({
  size = 96,
  label,
  children,
}: SignProps & { label: string; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label={label}>
      <rect x="6" y="6" width="88" height="88" rx="4" fill={BLUE} />
      <g transform="translate(50,50)">{children}</g>
    </svg>
  );
}

/* ---------- Tehlike Uyarı İşaretleri ---------- */

export function DurSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Dur işareti">
      <polygon
        points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30"
        fill={RED}
        stroke={WHITE}
        strokeWidth="3"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill={WHITE}
        letterSpacing="2"
      >
        DUR
      </text>
    </svg>
  );
}

export function YayaGecidiSign({ size = 96 }: SignProps) {
  return (
    <WarningTriangle size={size} label="Yaya geçidi uyarı işareti (T-11)">
      <circle cx="0" cy="-18" r="5" fill={INK} />
      <path d="M -8 -8 L 8 -8 L 6 16 L 2 16 L 0 0 L -2 16 L -6 16 Z" fill={INK} />
    </WarningTriangle>
  );
}

export function OkulGecidiUyariSign({ size = 96 }: SignProps) {
  return (
    <WarningTriangle size={size} label="Okul geçidi uyarı işareti (T-12)">
      <circle cx="-8" cy="-18" r="4.5" fill={INK} />
      <circle cx="8" cy="-14" r="4" fill={INK} />
      <path d="M -14 -9 L -2 -9 L -3 14 L -6 14 L -8 0 L -10 14 L -13 14 Z" fill={INK} />
      <path d="M 3 -6 L 14 -6 L 13 14 L 10 14 L 8 2 L 6 14 L 3 14 Z" fill={INK} />
    </WarningTriangle>
  );
}

export function KontrolsuzKavsakSign({ size = 96 }: SignProps) {
  return (
    <WarningTriangle size={size} label="Kontrolsüz kavşak uyarı işareti (T-21)">
      <line x1="-16" y1="-16" x2="16" y2="16" stroke={INK} strokeWidth="5" />
      <line x1="16" y1="-16" x2="-16" y2="16" stroke={INK} strokeWidth="5" />
    </WarningTriangle>
  );
}

export function DonelKavsakUyariSign({ size = 96 }: SignProps) {
  return (
    <WarningTriangle size={size} label="Dönel kavşak uyarı işareti (T-24)">
      <circle cx="0" cy="0" r="15" fill="none" stroke={INK} strokeWidth="5" />
      <path d="M 13 -8 L 20 -3 L 11 2 Z" fill={INK} />
    </WarningTriangle>
  );
}

export function KayganYolSign({ size = 96 }: SignProps) {
  return (
    <WarningTriangle size={size} label="Kaygan yol uyarı işareti (T-8)">
      <path
        d="M -18 4 C -10 -8 10 12 18 -2"
        fill="none"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </WarningTriangle>
  );
}

export function TehlikeliVirajSagSign({ size = 96 }: SignProps) {
  return (
    <WarningTriangle size={size} label="Sağa tehlikeli viraj uyarı işareti (T-1a)">
      <path
        d="M -16 16 C -16 -10 16 -10 16 10"
        fill="none"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M 8 4 L 20 10 L 10 18 Z" fill={INK} />
    </WarningTriangle>
  );
}

/* ---------- Trafik Tanzim İşaretleri ---------- */

export function YolVerSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Yol ver işareti (TT-1)">
      <polygon points="6,10 94,10 50,94" fill={WHITE} stroke={RED} strokeWidth="7" />
    </svg>
  );
}

export function GirisYokSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Girişi olmayan yol işareti (TT-4)">
      <circle cx="50" cy="50" r="46" fill={RED} stroke={INK} strokeWidth="2" />
      <rect x="20" y="42" width="60" height="16" rx="2" fill={WHITE} />
    </svg>
  );
}

export function TasitGiremezSign({ size = 96 }: SignProps) {
  return (
    <ProhibitionCircle size={size} label="Taşıt giremez işareti (TT-19)">
      <circle cx="0" cy="0" r="24" fill={WHITE} />
    </ProhibitionCircle>
  );
}

export function SagaDonulmezSign({ size = 96 }: SignProps) {
  return (
    <ProhibitionCircle size={size} label="Sağa dönülmez işareti (TT-26a)">
      <path
        d="M -16 -12 C 2 -12 14 -4 14 10"
        fill="none"
        stroke={INK}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M 6 3 L 20 10 L 8 18 Z" fill={INK} />
      <line x1="-28" y1="28" x2="28" y2="-28" stroke={RED} strokeWidth="7" />
    </ProhibitionCircle>
  );
}

export function OndekiTasitiGecmekYasakSign({ size = 96 }: SignProps) {
  return (
    <ProhibitionCircle size={size} label="Öndeki taşıtı geçmek yasağı işareti (TT-27)">
      <circle cx="-8" cy="-4" r="7" fill={INK} />
      <rect x="-16" y="2" width="16" height="9" rx="2" fill={INK} />
      <circle cx="10" cy="6" r="9" fill={RED} />
      <rect x="0" y="14" width="20" height="11" rx="2" fill={RED} />
    </ProhibitionCircle>
  );
}

export function AzamiHizSign({ size = 96, value = 50 }: SignProps & { value?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label={`Azami hız sınırlaması işareti (TT-29a): ${value}`}>
      <circle cx="50" cy="50" r="46" fill={WHITE} stroke={RED} strokeWidth="8" />
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="34"
        fill={INK}
      >
        {value}
      </text>
    </svg>
  );
}

export function TumYasaklarSonuSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Bütün yasaklama ve kısıtlamaların sonu işareti (TT-32)">
      <circle cx="50" cy="50" r="46" fill={WHITE} stroke="#8a8f99" strokeWidth="3" />
      {[-20, 0, 20].map((offset) => (
        <line
          key={offset}
          x1={30 + offset * 0.3}
          y1={78}
          x2={70 + offset * 0.3}
          y2={22}
          stroke="#8a8f99"
          strokeWidth="4"
        />
      ))}
    </svg>
  );
}

export function SagaMecburiYonSign({ size = 96 }: SignProps) {
  return (
    <MandatoryCircle size={size} label="Sağa mecburi yön işareti (TT-35a)">
      <line x1="-16" y1="0" x2="14" y2="0" stroke={WHITE} strokeWidth="6" />
      <path d="M 6 -12 L 24 0 L 6 12 Z" fill={WHITE} />
    </MandatoryCircle>
  );
}

export function MecburiBisikletYoluSign({ size = 96 }: SignProps) {
  return (
    <MandatoryCircle size={size} label="Mecburi bisiklet yolu işareti (TT-38a)">
      <circle cx="-12" cy="10" r="7" fill="none" stroke={WHITE} strokeWidth="3.5" />
      <circle cx="12" cy="10" r="7" fill="none" stroke={WHITE} strokeWidth="3.5" />
      <path
        d="M -12 10 L -2 -10 L 8 -10 M -2 -10 L 12 10 M -4 -2 L 6 -2"
        fill="none"
        stroke={WHITE}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </MandatoryCircle>
  );
}

/* ---------- Bilgi İşaretleri ---------- */

export function BilgiYayaGecidiSign({ size = 96 }: SignProps) {
  return (
    <InfoSquare size={size} label="Yaya geçidi bilgi işareti (B-14a)">
      <circle cx="0" cy="-18" r="5" fill={WHITE} />
      <path d="M -8 -8 L 8 -8 L 6 16 L 2 16 L 0 0 L -2 16 L -6 16 Z" fill={WHITE} />
    </InfoSquare>
  );
}

export function HastaneSign({ size = 96 }: SignProps) {
  return (
    <InfoSquare size={size} label="Hastane bilgi işareti (B-15)">
      <rect x="-4" y="-18" width="8" height="36" fill={WHITE} />
      <rect x="-18" y="-4" width="36" height="8" fill={WHITE} />
    </InfoSquare>
  );
}

export function OtoyolBaslangicSign({ size = 96 }: SignProps) {
  return (
    <InfoSquare size={size} label="Otoyol başlangıcı bilgi işareti (B-18)">
      <path
        d="M -22 14 L -6 -14 L 6 -14 L 22 14 M -14 6 L 14 6"
        fill="none"
        stroke={WHITE}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </InfoSquare>
  );
}

export function DurakSign({ size = 96 }: SignProps) {
  return (
    <InfoSquare size={size} label="Durak bilgi işareti (B-22)">
      <rect x="-20" y="-10" width="40" height="20" rx="3" fill={WHITE} />
      <circle cx="-10" cy="14" r="5" fill={BLUE} />
      <circle cx="10" cy="14" r="5" fill={BLUE} />
    </InfoSquare>
  );
}

export function TekYonluYolSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Tek yönlü yol bilgi işareti (B-16a)">
      <rect x="4" y="30" width="92" height="40" fill={BLUE} rx="3" />
      <path d="M 20 50 L 76 50 M 58 36 L 80 50 L 58 64" fill="none" stroke={WHITE} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Durma ve Park Etme İşaretleri ---------- */

export function ParkYeriSign({ size = 96 }: SignProps) {
  return (
    <InfoSquare size={size} label="Park yeri işareti (P-3a)">
      <text
        x="0"
        y="14"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="42"
        fill={WHITE}
      >
        P
      </text>
    </InfoSquare>
  );
}

export function ParkYasakSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Park etmek yasaktır işareti (P-1)">
      <circle cx="50" cy="50" r="46" fill={BLUE} stroke={RED} strokeWidth="7" />
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="38"
        fill={WHITE}
      >
        P
      </text>
      <line x1="18" y1="82" x2="82" y2="18" stroke={RED} strokeWidth="7" />
    </svg>
  );
}

export function DuraklamaParkYasakSign({ size = 96 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Duraklamak ve park etmek yasaktır işareti (P-2)">
      <circle cx="50" cy="50" r="46" fill={BLUE} stroke={RED} strokeWidth="7" />
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="38"
        fill={WHITE}
      >
        P
      </text>
      <line x1="18" y1="82" x2="82" y2="18" stroke={RED} strokeWidth="7" />
      <line x1="18" y1="18" x2="82" y2="82" stroke={RED} strokeWidth="7" />
    </svg>
  );
}

/* ---------- Senaryo ---------- */

export function KavsakSenaryo({ size = 220 }: SignProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-label="Kavşak senaryosu">
      <circle cx="100" cy="100" r="95" fill="#eef0f3" />
      <rect x="0" y="80" width="200" height="40" fill="#c9ccd3" />
      <rect x="80" y="0" width="40" height="200" fill="#c9ccd3" />
      <circle cx="100" cy="100" r="34" fill="#a9832f" opacity="0.25" />
      <circle cx="100" cy="100" r="34" fill="none" stroke="#a9832f" strokeWidth="3" strokeDasharray="6 6" />
      <g fill={INK}>
        <rect x="150" y="88" width="26" height="14" rx="3" />
        <rect x="24" y="98" width="26" height="14" rx="3" transform="rotate(180 37 105)" />
        <rect x="88" y="150" width="14" height="26" rx="3" />
      </g>
      <text x="100" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#565f75">
        Dönel kavşak
      </text>
    </svg>
  );
}

export const signRegistry: Record<string, React.ComponentType<SignProps>> = {
  dur: DurSign,
  yayaGecidi: YayaGecidiSign,
  okulGecidiUyari: OkulGecidiUyariSign,
  kontrolsuzKavsak: KontrolsuzKavsakSign,
  donelKavsakUyari: DonelKavsakUyariSign,
  kayganYol: KayganYolSign,
  tehlikeliVirajSag: TehlikeliVirajSagSign,
  yolVer: YolVerSign,
  girisYok: GirisYokSign,
  tasitGiremez: TasitGiremezSign,
  sagaDonulmez: SagaDonulmezSign,
  ondekiTasitiGecmekYasak: OndekiTasitiGecmekYasakSign,
  azamiHiz: AzamiHizSign,
  tumYasaklarSonu: TumYasaklarSonuSign,
  sagaMecburiYon: SagaMecburiYonSign,
  mecburiBisikletYolu: MecburiBisikletYoluSign,
  bilgiYayaGecidi: BilgiYayaGecidiSign,
  hastane: HastaneSign,
  otoyolBaslangic: OtoyolBaslangicSign,
  durak: DurakSign,
  tekYonluYol: TekYonluYolSign,
  parkYeri: ParkYeriSign,
  parkYasak: ParkYasakSign,
  duraklamaParkYasak: DuraklamaParkYasakSign,
  kavsakSenaryo: KavsakSenaryo,
};
