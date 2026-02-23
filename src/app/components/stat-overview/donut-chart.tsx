'use client';

interface DonutSegment {
  value: number;
  color: string;
  label: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string | number;
}

const VIEWBOX = 200;
const CENTER = VIEWBOX / 2;

export default function DonutChart({
  segments,
  size = 220,
  strokeWidth = 28,
  centerLabel,
  centerValue,
}: DonutChartProps) {
  const radius = (VIEWBOX - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, s) => sum + s.value, 0);

  const arcs = segments.map((segment, i) => {
    const segmentLength = (segment.value / total) * circumference;
    const preceding = segments
      .slice(0, i)
      .reduce((sum, s) => sum + (s.value / total) * circumference, 0);
    return {
      label: segment.label,
      color: segment.color,
      dashArray: `${segmentLength} ${circumference - segmentLength}`,
      dashOffset: -preceding,
    };
  });

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        width={size}
        height={size}
        className=""
      >
        {arcs.map((arc) => (
          <circle
            key={arc.label}
            cx={CENTER}
            cy={CENTER}
            r={radius}
            fill="none"
            stroke={arc.color}
            strokeWidth={strokeWidth}
            strokeDasharray={arc.dashArray}
            strokeDashoffset={arc.dashOffset}
            strokeLinecap="round"
          />
        ))}
      </svg>

      {(centerValue !== undefined || centerLabel) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerValue !== undefined && (
            <span className="text-foreground-secondary text-4xl font-bold">
              {centerValue}
            </span>
          )}
          {centerLabel && (
            <span className="text-muted-foreground text-sm">{centerLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}

export type { DonutSegment, DonutChartProps };
