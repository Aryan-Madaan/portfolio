const WIDTH = 460;
const BOX_HEIGHT = 44;
const GAP = 10;
const LEFT = 20;
const BOX_WIDTH = WIDTH - LEFT * 2;

const LAYERS = [
  { label: "Tool orchestration", note: "what it can touch, in what order" },
  { label: "Verification loops", note: "an independent check, not a second look" },
  { label: "Context & memory", note: "what survives, on purpose" },
  { label: "Guardrails", note: "enforced in code, not in a prompt" },
  { label: "Observability", note: "where, exactly, it went wrong" },
];

export function HarnessStackDiagram() {
  const totalHeight = LAYERS.length * (BOX_HEIGHT + GAP) - GAP + 40;

  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox={`0 0 ${WIDTH} ${totalHeight}`}
        width="100%"
        style={{ maxWidth: 460 }}
        role="img"
        aria-label="Five stacked harness layers: tool orchestration, verification loops, context and memory, guardrails, observability — a mistake has to pass through each layer to reach a user"
      >
        <text
          x={WIDTH / 2}
          y={20}
          textAnchor="middle"
          fontSize={11}
          fill="var(--color-muted)"
        >
          a mistake, working its way outward
        </text>

        {LAYERS.map((layer, i) => {
          const y = 34 + i * (BOX_HEIGHT + GAP);
          return (
            <g key={layer.label}>
              <rect
                x={LEFT}
                y={y}
                width={BOX_WIDTH}
                height={BOX_HEIGHT}
                fill="var(--color-surface)"
                stroke="var(--color-line)"
                strokeWidth={1}
              />
              <rect
                x={LEFT}
                y={y}
                width={4}
                height={BOX_HEIGHT}
                fill="var(--color-signal)"
                fillOpacity={0.7}
              />
              <text
                x={LEFT + 16}
                y={y + 18}
                fontSize={13}
                fontWeight="bold"
                fill="var(--color-fg)"
              >
                {layer.label}
              </text>
              <text
                x={LEFT + 16}
                y={y + 34}
                fontSize={10.5}
                fill="var(--color-muted)"
              >
                {layer.note}
              </text>
              {i < LAYERS.length - 1 && (
                <text
                  x={WIDTH / 2}
                  y={y + BOX_HEIGHT + GAP / 2 + 4}
                  textAnchor="middle"
                  fontSize={12}
                  fill="var(--color-muted)"
                >
                  ↓
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
