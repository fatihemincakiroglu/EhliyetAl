// Tarayıcı depolamasını (localStorage) React'e bağlayan küçük katman.
//
// Bileşenler veriyi useEffect + setState ile değil, `useStoreVersion()` ile
// okur: sunucuda ve hidrasyon sırasında 0 döner (boş/varsayılan veri), ardından
// istemcide gerçek veriye geçer. Herhangi bir kayıt yazıldığında
// `notifyStoreChange()` çağrılır; açık olan tüm göstergeler (header'daki seri,
// XP, ana sayfa kartları…) anında güncellenir. Başka sekmedeki değişiklikler
// de `storage` olayıyla yakalanır.

import { useSyncExternalStore } from "react";

const EVENT = "ehliyetal:store";
let version = 1;

function subscribe(onChange: () => void) {
  function handler() {
    version++;
    onChange();
  }
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

const getSnapshot = () => version;
const getServerSnapshot = () => 0;

/** 0 = sunucu/hidrasyon (veri yok), >0 = istemci verisi okunabilir. */
export function useStoreVersion(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Depoya yazan her fonksiyon sonunda çağırır. */
export function notifyStoreChange() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT));
}

/** localStorage'dan güvenli JSON okuma. */
export function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** localStorage'a güvenli JSON yazma (kota dolu / gizli mod hatalarını yutar). */
export function writeJSON(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // yazılamadı: uygulama çalışmaya devam eder
  }
}
