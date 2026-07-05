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
          background: "#12182b",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(169,131,47,0.25), transparent 60%)",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d9b45c",
            marginBottom: 24,
          }}
        >
          Sınav Hazırlık
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#f3f4f7",
            fontStyle: "italic",
            marginBottom: 16,
          }}
        >
          Ehliyet<span style={{ color: "#d9b45c" }}>Al</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#c7cad4",
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
