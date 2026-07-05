type ProgressTrackProps = {
  current: number;
  total: number;
};

export default function ProgressTrack({ current, total }: ProgressTrackProps) {
  const step = Math.min(current + 1, total);
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="font-data text-[11px] sm:text-xs uppercase tracking-[0.15em] text-ink-soft">
          Soru {step} / {total}
        </span>
        <span className="font-data text-[11px] sm:text-xs uppercase tracking-[0.15em] text-gold">
          %{Math.round(percent)}
        </span>
      </div>

      <div className="h-1 rounded-full bg-surface-alt overflow-hidden">
        <div
          className="h-full rounded-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex gap-1.5 sm:gap-2 mt-3">
        {Array.from({ length: total }).map((_, i) => {
          const isDone = i < current;
          const isCurrent = i === current;
          return (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                isDone
                  ? "bg-gold"
                  : isCurrent
                    ? "bg-gold-soft"
                    : "bg-surface-alt"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
