// İlerlemeyi JSON dosyası olarak yedekleme / geri yükleme.
// Hesap sistemi olmadığı için cihaz değiştirirken ilerlemeyi taşımanın yolu bu.

import { notifyStoreChange } from "@/lib/clientStore";

const PREFIX = "ehliyetal:";
const FORMAT = "ehliyetal-yedek";
const VERSION = 1;

type BackupFile = {
  format: typeof FORMAT;
  version: number;
  exportedAt: string;
  data: Record<string, string>;
};

export function exportProgress(): void {
  const data: Record<string, string> = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (key && key.startsWith(PREFIX)) {
      const value = window.localStorage.getItem(key);
      if (value !== null) data[key] = value;
    }
  }
  const file: BackupFile = { format: FORMAT, version: VERSION, exportedAt: new Date().toISOString(), data };
  const blob = new Blob([JSON.stringify(file, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `ehliyetal-yedek-${date}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export type ImportResult = { ok: true; keys: number } | { ok: false; error: string };

export async function importProgress(file: File): Promise<ImportResult> {
  if (file.size > 5 * 1024 * 1024) return { ok: false, error: "Dosya çok büyük." };
  let parsed: unknown;
  try {
    parsed = JSON.parse(await file.text());
  } catch {
    return { ok: false, error: "Dosya okunamadı. Geçerli bir EhliyetAl yedeği seç." };
  }
  const backup = parsed as Partial<BackupFile>;
  if (backup?.format !== FORMAT || typeof backup.data !== "object" || backup.data === null) {
    return { ok: false, error: "Bu dosya bir EhliyetAl yedeği değil." };
  }

  const entries = Object.entries(backup.data).filter(
    ([k, v]) => k.startsWith(PREFIX) && typeof v === "string"
  );
  // Her değerin geçerli JSON olduğunu kontrol et (tema gibi düz metinler hariç)
  for (const [k, v] of entries) {
    if (k.includes(":theme:")) continue;
    try {
      JSON.parse(v);
    } catch {
      return { ok: false, error: "Yedek dosyası bozuk görünüyor." };
    }
  }

  try {
    for (const [k, v] of entries) window.localStorage.setItem(k, v);
  } catch {
    return { ok: false, error: "Tarayıcı depolamasına yazılamadı." };
  }
  const theme = backup.data[`${PREFIX}theme:v1`];
  if (theme === "dark" || theme === "light") document.documentElement.setAttribute("data-theme", theme);
  notifyStoreChange();
  return { ok: true, keys: entries.length };
}

/** Tema dışındaki tüm ilerleme verisini siler. */
export function resetProgress(): void {
  const keys: string[] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (key && key.startsWith(PREFIX) && !key.includes(":theme:")) keys.push(key);
  }
  keys.forEach((k) => window.localStorage.removeItem(k));
  notifyStoreChange();
}
