import { ImageResponse } from "next/og";
import { provinces, getProvince, provinceUrlSlug } from "@/lib/provinces";

export const alt = "Ehliyet Sınavına Hazırlık Rehberi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return provinces.map((p) => ({ il: provinceUrlSlug(p) }));
}

export default async function ProvinceOpengraphImage({
  params,
}: {
  params: Promise<{ il: string }>;
}) {
  const { il: slug } = await params;
  const province = getProvince(slug);
  const name = province?.name ?? "İl";
  const plate = province?.plate ?? "";

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
              "radial-gradient(circle at 20% 20%, rgba(169,131,47,0.25), transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              color: "#0e2340",
              background: "#ef8324",
              borderRadius: 999,
              padding: "6px 22px",
            }}
          >
            {plate}
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#ef8324",
            }}
          >
            Sınav Hazırlık Rehberi
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#fffdf8",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#b7c1d6",
            textAlign: "center",
            maxWidth: 860,
          }}
        >
          Ehliyet Sınavına Hazırlık — Ücretsiz Sorular ve Deneme Sınavı
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#ef8324",
            marginTop: 28,
            fontWeight: 700,
          }}
        >
          Ehliyet<span style={{ color: "#fffdf8" }}>Al</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
