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
        <span className="font-data font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] text-gold">
          %{Math.round(percent)}
        </span>
      </div>

      {/* Rota: kesikli yol çizgisi üzerinde ilerleyen duraklar */}
      <div className="relative h-5 flex items-center">
        <div
          className="absolute left-0 right-0 h-[3px] rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-line) 0, var(--color-line) 6px, transparent 6px, transparent 12px)",
          }}
        />
        <div
          className="absolute left-0 h-[3px] rounded-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
        <div className="relative w-full flex justify-between">
          {Array.from({ length: total }).map((_, i) => {
            const isDone = i < current;
            const isCurrent = i === current;
            return (
              <span
                key={i}
                className={`block rounded-full border-2 border-ink transition-all duration-300 ${
                  isDone
                    ? "w-2.5 h-2.5 bg-gold"
                    : isCurrent
                      ? "w-3.5 h-3.5 bg-sun animate-pulse"
                      : "w-2.5 h-2.5 bg-surface"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
