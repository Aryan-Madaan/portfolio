// Ground-truth hats for persons 1 (rear, sees everyone) through 10 (front, sees no one).
// Among persons 2-10 there are 4 black hats (positions 3,4,6,9) — an even count —
// so under the "black if odd, white if even" convention, person 1 announces "white."
const HATS: ("black" | "white")[] = [
  "black",
  "white",
  "black",
  "black",
  "white",
  "black",
  "white",
  "white",
  "black",
  "white",
];

const WIDTH = 560;
const GAP = 50;
const START_X = 40;
const Y = 70;
const R = 18;

export function PrisonerHatDiagram() {
  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox={`0 0 ${WIDTH} 140`}
        width="100%"
        style={{ maxWidth: WIDTH }}
        role="img"
        aria-label="Ten prisoners in a line with black or white hats. Person 1, at the rear, sees all nine other hats — four black, an even count — and announces white under the odd-means-black convention. Every later prisoner combines that announcement with the guesses spoken before their own turn to deduce their own hat with certainty."
      >
        {HATS.map((color, i) => {
          const x = START_X + i * GAP;
          const isAnnouncer = i === 0;
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={Y}
                r={R}
                fill={color === "black" ? "var(--color-fg)" : "var(--color-surface)"}
                stroke={isAnnouncer ? "var(--color-signal)" : "var(--color-line)"}
                strokeWidth={isAnnouncer ? 3 : 1.5}
              />
              <text
                x={x}
                y={Y + R + 16}
                textAnchor="middle"
                fontSize={10}
                fill="var(--color-muted)"
              >
                {i + 1}
              </text>
              {isAnnouncer && (
                <text
                  x={x}
                  y={Y - R - 10}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight="bold"
                  fill="var(--color-signal)"
                >
                  announces &quot;white&quot;
                </text>
              )}
            </g>
          );
        })}
        <text
          x={WIDTH / 2}
          y={128}
          textAnchor="middle"
          fontSize={11}
          fill="var(--color-muted)"
        >
          Rear (sees all 9 others) → Front (sees no one) · 4 black hats among 2–10 is even → &quot;white&quot;
        </text>
      </svg>
    </div>
  );
}
