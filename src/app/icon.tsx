import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#0e1115",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              color: "#e8e6e1",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            A
          </span>
          <span
            style={{
              color: "#f0a63a",
              fontSize: 40,
              fontWeight: 700,
              marginLeft: 1,
            }}
          >
            .
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
