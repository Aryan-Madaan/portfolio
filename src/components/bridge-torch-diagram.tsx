const WIDTH = 520;
const LEFT = 50;
const RIGHT = WIDTH - 20;
const AXIS_Y = 40;
const TOTAL = 17;

type Step = {
  from: number;
  to: number;
  label: string;
  direction: "forward" | "back";
};

const STEPS: Step[] = [
  { from: 0, to: 2, label: "1 & 2 cross", direction: "forward" },
  { from: 2, to: 3, label: "1 returns", direction: "back" },
  { from: 3, to: 13, label: "5 & 10 cross", direction: "forward" },
  { from: 13, to: 15, label: "2 returns", direction: "back" },
  { from: 15, to: 17, label: "1 & 2 cross", direction: "forward" },
];

function timeToX(minutes: number) {
  return LEFT + (minutes / TOTAL) * (RIGHT - LEFT);
}

export function BridgeTorchDiagram() {
  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox={`0 0 ${WIDTH} 230`}
        width="100%"
        style={{ maxWidth: 520 }}
        role="img"
        aria-label="Timeline of the five bridge crossings totaling 17 minutes: 1 and 2 cross, 1 returns, 5 and 10 cross, 2 returns, 1 and 2 cross"
      >
        <line
          x1={LEFT}
          y1={AXIS_Y}
          x2={RIGHT}
          y2={AXIS_Y}
          stroke="var(--color-line)"
        />
        {[0, 2, 3, 13, 15, 17].map((m) => (
          <g key={m}>
            <line
              x1={timeToX(m)}
              y1={AXIS_Y - 4}
              x2={timeToX(m)}
              y2={AXIS_Y + 4}
              stroke="var(--color-line)"
            />
            <text
              x={timeToX(m)}
              y={AXIS_Y - 10}
              textAnchor="middle"
              fontSize={10}
              fill={m === 17 ? "var(--color-signal)" : "var(--color-muted)"}
              fontWeight={m === 17 ? "bold" : "normal"}
            >
              {m}
            </text>
          </g>
        ))}

        {STEPS.map((step, i) => {
          const y = AXIS_Y + 28 + i * 34;
          const x1 = timeToX(step.from);
          const x2 = timeToX(step.to);
          const isForward = step.direction === "forward";
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke={
                  isForward ? "var(--color-signal)" : "var(--color-muted)"
                }
                strokeWidth={3}
                markerEnd={isForward ? "url(#arrow-fwd)" : "url(#arrow-back)"}
              />
              <text
                x={(x1 + x2) / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize={11}
                fill="var(--color-fg)"
              >
                {step.label}
              </text>
              <text
                x={RIGHT + 0}
                y={y + 4}
                textAnchor="end"
                fontSize={10}
                fill="var(--color-muted)"
              >
                {step.direction === "forward" ? "→ far side" : "← near side"}
              </text>
            </g>
          );
        })}

        <defs>
          <marker
            id="arrow-fwd"
            markerWidth={8}
            markerHeight={8}
            refX={6}
            refY={4}
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-signal)" />
          </marker>
          <marker
            id="arrow-back"
            markerWidth={8}
            markerHeight={8}
            refX={6}
            refY={4}
            orient="auto"
          >
            <path d="M8,0 L0,4 L8,8 Z" fill="var(--color-muted)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
