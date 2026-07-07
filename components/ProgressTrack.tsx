type ProgressTrackProps = {
  current: number;
  total: number;
};

export default function ProgressTrack({ current, total }: ProgressTrackProps) {
  const step = Math.min(current + 1, total);
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2.5">
        <span className="font-data text-[11px] sm:text-xs uppercase tracking-[0.1em] text-ink-soft">
          Soru {step} / {total}
        </span>
        <span className="font-data font-semibold text-[11px] sm:text-xs uppercase tracking-[0.1em] text-gold">
          %{Math.round(percent)}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
        <div
          className="h-full rounded-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
