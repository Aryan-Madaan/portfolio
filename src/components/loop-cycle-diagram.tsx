const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 130;
const NODE_R = 42;

const NODES = [
  { label: "Discover", angle: -90 },
  { label: "Plan", angle: 0 },
  { label: "Execute", angle: 90 },
  { label: "Verify", angle: 180 },
];

function pos(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export function LoopCycleDiagram() {
  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE * 0.72}`}
        width="100%"
        style={{ maxWidth: 420 }}
        role="img"
        aria-label="Discover, plan, execute, verify cycle; verify branches to continue the loop, stop when the condition is met, or escalate to a human"
      >
        {/* the four cycle nodes, connected in sequence */}
        {NODES.map((node, i) => {
          const from = pos(node.angle, RADIUS);
          const nextAngle = NODES[(i + 1) % NODES.length].angle;
          const to = pos(nextAngle, RADIUS);
          const isVerifyToDiscover = i === NODES.length - 1;
          return (
            <g key={`edge-${node.label}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--color-line)"
                strokeWidth={1.5}
                markerEnd="url(#loop-arrow)"
                strokeDasharray={isVerifyToDiscover ? "4 3" : undefined}
              />
            </g>
          );
        })}

        {NODES.map((node) => {
          const { x, y } = pos(node.angle, RADIUS);
          const isVerify = node.label === "Verify";
          return (
            <g key={node.label}>
              <circle
                cx={x}
                cy={y}
                r={NODE_R}
                fill="var(--color-surface)"
                stroke={isVerify ? "var(--color-signal)" : "var(--color-line)"}
                strokeWidth={isVerify ? 2 : 1.5}
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fontSize={13}
                fontWeight="bold"
                fill="var(--color-fg)"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* branches out of Verify: stop / escalate */}
        {(() => {
          const verifyPos = pos(180, RADIUS);
          const stopPos = { x: verifyPos.x - 90, y: verifyPos.y + 55 };
          const escalatePos = { x: verifyPos.x - 90, y: verifyPos.y - 55 };
          return (
            <>
              <line
                x1={verifyPos.x}
                y1={verifyPos.y}
                x2={stopPos.x}
                y2={stopPos.y}
                stroke="var(--color-muted)"
                strokeWidth={1.5}
                markerEnd="url(#loop-arrow-muted)"
              />
              <text
                x={(verifyPos.x + stopPos.x) / 2 - 6}
                y={(verifyPos.y + stopPos.y) / 2 + 14}
                textAnchor="middle"
                fontSize={10.5}
                fill="var(--color-muted)"
              >
                stop condition met
              </text>

              <line
                x1={verifyPos.x}
                y1={verifyPos.y}
                x2={escalatePos.x}
                y2={escalatePos.y}
                stroke="var(--color-signal)"
                strokeWidth={1.5}
                markerEnd="url(#loop-arrow-signal)"
              />
              <text
                x={(verifyPos.x + escalatePos.x) / 2 - 6}
                y={(verifyPos.y + escalatePos.y) / 2 - 10}
                textAnchor="middle"
                fontSize={10.5}
                fill="var(--color-signal)"
              >
                cap hit / escalate to human
              </text>
            </>
          );
        })()}

        <defs>
          <marker
            id="loop-arrow"
            markerWidth={8}
            markerHeight={8}
            refX={7}
            refY={4}
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-line)" />
          </marker>
          <marker
            id="loop-arrow-muted"
            markerWidth={8}
            markerHeight={8}
            refX={7}
            refY={4}
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-muted)" />
          </marker>
          <marker
            id="loop-arrow-signal"
            markerWidth={8}
            markerHeight={8}
            refX={7}
            refY={4}
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-signal)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
