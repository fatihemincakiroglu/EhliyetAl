import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e2340",
          borderRadius: 6,
          border: "2px solid #d9660b",
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#d9660b",
          }}
        >
          EA
        </div>
      </div>
    ),
    { ...size }
  );
}
