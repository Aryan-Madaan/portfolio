export function ChessboardDiagram() {
  const size = 8;
  const cell = 36;
  const total = size * cell;

  const squares = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const isRemoved =
        (row === 0 && col === 0) || (row === size - 1 && col === size - 1);
      const isDark = (row + col) % 2 === 1;
      squares.push(
        <rect
          key={`${row}-${col}`}
          x={col * cell}
          y={row * cell}
          width={cell}
          height={cell}
          fill={
            isRemoved
              ? "var(--color-signal)"
              : isDark
                ? "var(--color-muted)"
                : "var(--color-surface)"
          }
          fillOpacity={isRemoved ? 0.25 : isDark ? 0.55 : 1}
          stroke="var(--color-line)"
          strokeWidth={1}
        />
      );
      if (isRemoved) {
        squares.push(
          <text
            key={`${row}-${col}-x`}
            x={col * cell + cell / 2}
            y={row * cell + cell / 2 + 5}
            textAnchor="middle"
            fontSize={18}
            fontWeight="bold"
            fill="var(--color-signal)"
          >
            ×
          </text>
        );
      }
    }
  }

  return (
    <div className="my-8 flex justify-center">
      <svg
        viewBox={`0 0 ${total} ${total}`}
        width="100%"
        style={{ maxWidth: 320 }}
        role="img"
        aria-label="8x8 chessboard with the top-left and bottom-right corner squares removed, marked with an X"
      >
        {squares}
      </svg>
    </div>
  );
}
