type ProgressTrackProps = {
  /** Cevaplanan / geçilen soru sayısı */
  done: number;
  total: number;
};

/** Kalın, yuvarlak ilerleme çubuğu (soru ekranı üst barı). */
export default function ProgressTrack({ done, total }: ProgressTrackProps) {
  const percent = total > 0 ? Math.min(100, (done / total) * 100) : 0;

  return (
    <div
      className="flex-1 h-4 rounded-full bg-surface-alt overflow-hidden"
      role="progressbar"
      aria-label="Sınav ilerlemesi"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
    >
      <div
        className="relative h-full rounded-full bg-success transition-[width] duration-500 ease-out"
        style={{ width: `${percent}%`, minWidth: percent > 0 ? "1rem" : 0 }}
      >
        {/* üstteki parlak şerit: "tok" görünüm */}
        <span className="absolute left-2 right-2 top-[3px] h-[3px] rounded-full bg-white/35" />
      </div>
    </div>
  );
}
