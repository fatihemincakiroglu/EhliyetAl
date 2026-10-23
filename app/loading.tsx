export default function Loading() {
  return (
    <div className="bg-paper flex items-center justify-center min-h-[60vh]" aria-busy="true">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-4 border-surface-alt border-t-primary animate-spin" />
        <p className="text-sm font-bold text-ink-soft">Yükleniyor</p>
      </div>
    </div>
  );
}
