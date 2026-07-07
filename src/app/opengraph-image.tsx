import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#12151a",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#ff6a2e",
            fontFamily: "monospace",
          }}
        >
          Enterprise AI Architect
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            color: "#f1f0ec",
            letterSpacing: "-2px",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#9a9890",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
