const WIDTH = 480;
const ROPE_HEIGHT = 14;
const ROW_GAP = 64;
const LEFT = 40;
const RIGHT = WIDTH - 40;
const AXIS_Y = 150;

function timeToX(minutes: number) {
  return LEFT + (minutes / 60) * (RIGHT - LEFT);
}

function Flame({ x, y }: { x: number; y: number }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize={14}
      fill="var(--color-signal)"
    >
      ▲
    </text>
  );
}

export function RopeBurnDiagram() {
  const ropeAY = 30;
  const ropeBY = ropeAY + ROW_GAP;

  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox={`0 0 ${WIDTH} 180`}
        width="100%"
        style={{ maxWidth: 480 }}
        role="img"
        aria-label="Timeline diagram: Rope A lit at both ends finishes at 30 minutes; Rope B lit at one end at t=0 and its other end at t=30 finishes at 45 minutes"
      >
        {/* Rope A: both ends lit at t=0, gone by t=30 */}
        <rect
          x={LEFT}
          y={ropeAY}
          width={timeToX(30) - LEFT}
          height={ROPE_HEIGHT}
          fill="var(--color-muted)"
          fillOpacity={0.55}
          stroke="var(--color-line)"
        />
        <Flame x={LEFT} y={ropeAY - 6} />
        <Flame x={timeToX(30)} y={ropeAY - 6} />
        <text
          x={(LEFT + timeToX(30)) / 2}
          y={ropeAY + ROPE_HEIGHT + 16}
          textAnchor="middle"
          fontSize={11}
          fill="var(--color-fg)"
        >
          Rope A — lit both ends at t=0, gone at t=30
        </text>

        {/* Rope B: one end lit at t=0, other end lit at t=30, gone by t=45 */}
        <rect
          x={LEFT}
          y={ropeBY}
          width={timeToX(45) - LEFT}
          height={ROPE_HEIGHT}
          fill="var(--color-surface)"
          stroke="var(--color-line)"
        />
        <rect
          x={LEFT}
          y={ropeBY}
          width={timeToX(30) - LEFT}
          height={ROPE_HEIGHT}
          fill="var(--color-muted)"
          fillOpacity={0.3}
        />
        <Flame x={LEFT} y={ropeBY - 6} />
        <Flame x={timeToX(30)} y={ropeBY - 6} />
        <text
          x={timeToX(30)}
          y={ropeBY - 16}
          textAnchor="middle"
          fontSize={10}
          fill="var(--color-signal)"
        >
          light this end at t=30
        </text>
        <text
          x={(LEFT + timeToX(45)) / 2}
          y={ropeBY + ROPE_HEIGHT + 16}
          textAnchor="middle"
          fontSize={11}
          fill="var(--color-fg)"
        >
          Rope B — lit one end at t=0, other end at t=30, gone at t=45
        </text>

        {/* time axis */}
        <line
          x1={LEFT}
          y1={AXIS_Y}
          x2={RIGHT}
          y2={AXIS_Y}
          stroke="var(--color-line)"
        />
        {[0, 15, 30, 45, 60].map((m) => (
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
              y={AXIS_Y + 18}
              textAnchor="middle"
              fontSize={11}
              fill={
                m === 30 || m === 45
                  ? "var(--color-signal)"
                  : "var(--color-muted)"
              }
              fontWeight={m === 30 || m === 45 ? "bold" : "normal"}
            >
              {m}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
