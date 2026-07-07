import { ImageResponse } from "next/og";
import { getPuzzle } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puzzle = getPuzzle(slug);

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
            fontSize: 20,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#ff6a2e",
            fontFamily: "monospace",
          }}
        >
          Aryan Madaan · Puzzles
          {puzzle?.category ? ` · ${puzzle.category}` : ""}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 700,
            color: "#f1f0ec",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {puzzle?.title ?? "Aryan Madaan"}
        </div>
      </div>
    ),
    { ...size }
  );
}
