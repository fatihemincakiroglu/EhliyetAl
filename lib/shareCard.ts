// Sınav sonucunu Instagram story boyutunda (1080×1920) bir görsele çevirir ve
// paylaşır. Paylaşım menüsü dosya desteklemiyorsa görsel indirilir.

type ResultCard = {
  title: string;
  score: number;
  passed: boolean;
  correct: number;
  wrong: number;
  blank: number;
};

const W = 1080;
const H = 1920;
const BLUE = "#2f5bea";
const BLUE_DEEP = "#1c3fb8";
const INK = "#17213a";
const SOFT = "#5a6681";
const GREEN = "#14915a";
const GREEN_WASH = "#e3f7ee";
const RED = "#d92d4b";
const RED_WASH = "#ffe9ec";
const FONT = "Nunito, ui-rounded, system-ui, sans-serif";

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawWheel(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  const s = size / 24;
  ctx.save();
  ctx.translate(cx - size / 2, cy - size / 2);
  ctx.scale(s, s);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2.4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(12, 12, 9, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(12, 12, 2.5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(12, 3);
  ctx.lineTo(12, 9.5);
  ctx.moveTo(4.5, 15.5);
  ctx.lineTo(9.8, 13.3);
  ctx.moveTo(19.5, 15.5);
  ctx.lineTo(14.2, 13.3);
  ctx.stroke();
  ctx.restore();
}

function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, weight: number, size: number) {
  let s = size;
  ctx.font = `${weight} ${s}px ${FONT}`;
  while (ctx.measureText(text).width > maxWidth && s > 24) {
    s -= 2;
    ctx.font = `${weight} ${s}px ${FONT}`;
  }
}

export async function renderResultCard(r: ResultCard): Promise<Blob | null> {
  if (typeof document === "undefined") return null;
  try {
    await Promise.all([document.fonts.load(`900 120px Nunito`), document.fonts.load(`700 40px Nunito`)]);
  } catch {
    // font yüklenemezse sistem fontuyla devam
  }

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Zemin
  ctx.fillStyle = BLUE;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.arc(W * 0.85, H * 0.12, 160 + i * 140, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255,255,255,0.07)";
    ctx.stroke();
  }

  // Logo
  ctx.fillStyle = BLUE_DEEP;
  roundRect(ctx, 96, 150, 112, 112, 34);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  roundRect(ctx, 96, 140, 112, 112, 34);
  ctx.fill();
  drawWheel(ctx, 152, 196, 68);
  ctx.fillStyle = "#fff";
  ctx.font = `900 64px ${FONT}`;
  ctx.textBaseline = "middle";
  ctx.fillText("EhliyetAl", 236, 198);

  // Kart (alt gölgeli)
  const cx = 72;
  const cy = 360;
  const cw = W - 144;
  const ch = 1220;
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  roundRect(ctx, cx, cy + 18, cw, ch, 64);
  ctx.fill();
  ctx.fillStyle = "#fff";
  roundRect(ctx, cx, cy, cw, ch, 64);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.fillStyle = SOFT;
  fitText(ctx, r.title, cw - 120, 800, 44);
  ctx.fillText(r.title, W / 2, cy + 110);

  // Puan dairesi
  const circleY = cy + 470;
  ctx.fillStyle = r.passed ? GREEN_WASH : RED_WASH;
  ctx.beginPath();
  ctx.arc(W / 2, circleY, 270, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = r.passed ? GREEN : RED;
  ctx.font = `900 250px ${FONT}`;
  ctx.fillText(String(r.score), W / 2, circleY - 10);
  ctx.font = `800 54px ${FONT}`;
  ctx.fillText("/ 100", W / 2, circleY + 150);

  ctx.fillStyle = INK;
  ctx.font = `900 84px ${FONT}`;
  ctx.fillText(r.passed ? "Geçtim!" : "Çalışmaya devam!", W / 2, cy + 860);

  // Doğru / yanlış / boş
  const boxes = [
    { label: "Doğru", value: r.correct, bg: GREEN_WASH, fg: GREEN },
    { label: "Yanlış", value: r.wrong, bg: RED_WASH, fg: RED },
    { label: "Boş", value: r.blank, bg: "#eef1f7", fg: SOFT },
  ];
  const bw = (cw - 120 - 2 * 32) / 3;
  boxes.forEach((b, i) => {
    const bx = cx + 60 + i * (bw + 32);
    const by = cy + 960;
    ctx.fillStyle = b.bg;
    roundRect(ctx, bx, by, bw, 190, 40);
    ctx.fill();
    ctx.fillStyle = b.fg;
    ctx.font = `900 84px ${FONT}`;
    ctx.fillText(String(b.value), bx + bw / 2, by + 82);
    ctx.font = `800 38px ${FONT}`;
    ctx.fillText(b.label, bx + bw / 2, by + 150);
  });

  // Alt yazı
  ctx.fillStyle = "#fff";
  ctx.font = `900 60px ${FONT}`;
  ctx.fillText("Sen de dene", W / 2, 1720);
  ctx.font = `800 48px ${FONT}`;
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.fillText("ehliyetal.net", W / 2, 1800);

  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
}

/** Görseli paylaşır; olmazsa indirir; o da olmazsa metni kopyalar. */
export async function shareResultImage(r: ResultCard): Promise<"shared" | "downloaded" | "copied" | "failed"> {
  const text = `EhliyetAl'da "${r.title}" testinde ${r.score} puan aldım! (${r.correct} doğru) ehliyetal.net`;
  const blob = await renderResultCard(r);

  if (blob) {
    const file = new File([blob], "ehliyetal-sonuc.png", { type: "image/png" });
    if (typeof navigator !== "undefined" && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text });
        return "shared";
      } catch (e) {
        if ((e as Error)?.name === "AbortError") return "failed";
      }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ehliyetal-sonuc.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return "downloaded";
  }

  try {
    await navigator.clipboard.writeText(text);
    return "copied";
  } catch {
    return "failed";
  }
}
