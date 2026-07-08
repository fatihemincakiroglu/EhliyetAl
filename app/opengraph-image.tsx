import { ImageResponse } from "next/og";

export const alt = "EhliyetAl — Ehliyet Sınavı Soruları 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0e2340",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(217,102,11,0.22), transparent 60%)",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ef8324",
            marginBottom: 24,
          }}
        >
          Sınav Hazırlık
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#fffdf8",
            marginBottom: 16,
          }}
        >
          Ehliyet<span style={{ color: "#ef8324" }}>Al</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#b7c1d6",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          Ehliyet Sınavı Soruları (2026) — Trafik, Motor, İlk Yardım ve Çevre
        </div>
      </div>
    ),
    { ...size }
  );
}
