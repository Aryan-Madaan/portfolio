type Node = { id: string; label: string; x: number; y: number; degree: number };

const NODES: Node[] = [
  { id: "N", label: "North bank", x: 190, y: 40, degree: 3 },
  { id: "S", label: "South bank", x: 190, y: 260, degree: 3 },
  { id: "K", label: "Kneiphof (island)", x: 190, y: 150, degree: 5 },
  { id: "E", label: "East bank", x: 380, y: 150, degree: 3 },
];

function node(id: string) {
  return NODES.find((n) => n.id === id)!;
}

// Each pair is one bridge; N-K and S-K each have two bridges (drawn as parallel lines).
const SINGLE_EDGES: [string, string][] = [
  ["N", "E"],
  ["S", "E"],
  ["K", "E"],
];
const DOUBLE_EDGES: [string, string][] = [
  ["N", "K"],
  ["S", "K"],
];

function offset(x1: number, y1: number, x2: number, y2: number, amount: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return { ox: (-dy / len) * amount, oy: (dx / len) * amount };
}

export function KonigsbergDiagram() {
  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox="0 0 460 300"
        width="100%"
        style={{ maxWidth: 460 }}
        role="img"
        aria-label="Graph of the four Königsberg landmasses joined by seven bridges: North bank and South bank each connect to the island by two bridges, and North bank, South bank, and the island each connect to the East bank by one bridge. North, South, and East bank each have degree three; the island has degree five — all four are odd."
      >
        {DOUBLE_EDGES.map(([a, b]) => {
          const na = node(a);
          const nb = node(b);
          const { ox, oy } = offset(na.x, na.y, nb.x, nb.y, 6);
          return (
            <g key={a + b} stroke="var(--color-line)" strokeWidth={2} fill="none">
              <line x1={na.x + ox} y1={na.y + oy} x2={nb.x + ox} y2={nb.y + oy} />
              <line x1={na.x - ox} y1={na.y - oy} x2={nb.x - ox} y2={nb.y - oy} />
            </g>
          );
        })}
        {SINGLE_EDGES.map(([a, b]) => {
          const na = node(a);
          const nb = node(b);
          return (
            <line
              key={a + b}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="var(--color-line)"
              strokeWidth={2}
            />
          );
        })}
        {NODES.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={22}
              fill="var(--color-surface)"
              stroke="var(--color-signal)"
              strokeWidth={2}
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize={13}
              fontWeight="bold"
              fill="var(--color-signal)"
            >
              {n.degree}
            </text>
            <text
              x={n.x}
              y={n.y + (n.id === "S" ? 40 : n.id === "E" ? 40 : -32)}
              textAnchor="middle"
              fontSize={11}
              fill="var(--color-muted)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
