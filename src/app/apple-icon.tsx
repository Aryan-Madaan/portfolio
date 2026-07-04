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
          background: "#12151a",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              color: "#f1f0ec",
              fontSize: 100,
              fontWeight: 700,
              letterSpacing: "-2px",
            }}
          >
            A
          </span>
          <span
            style={{
              color: "#ff6a2e",
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
