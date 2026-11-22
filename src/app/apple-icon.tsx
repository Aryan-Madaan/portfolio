import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              color: "#e8e6e1",
              fontSize: 100,
              fontWeight: 700,
              letterSpacing: "-2px",
            }}
          >
            A
          </span>
          <span
            style={{
              color: "#f0a63a",
              fontSize: 100,
              fontWeight: 700,
              marginLeft: 2,
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
