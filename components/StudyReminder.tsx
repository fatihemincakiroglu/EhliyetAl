"use client";

import { useEffect, useMemo } from "react";
import { Bell, BellOff } from "lucide-react";
import { notifyStoreChange, useStoreVersion } from "@/lib/clientStore";

const REMINDER_KEY = "ehliyetal:reminder:v1";
const LAST_SHOWN_KEY = "ehliyetal:reminder-last-shown:v1";

function readReminder(): boolean {
  try {
    return window.localStorage.getItem(REMINDER_KEY) === "true";
  } catch {
    return false;
  }
}

function writeReminder(value: boolean) {
  try {
    window.localStorage.setItem(REMINDER_KEY, value ? "true" : "false");
  } catch {
    // depolama kapalı
  }
  notifyStoreChange();
}

export default function StudyReminder() {
  const v = useStoreVersion();

  const state = useMemo(() => {
    if (v === 0) return null;
    if (!("Notification" in window)) return { permission: "unsupported" as const, enabled: false };
    return { permission: Notification.permission, enabled: readReminder() };
  }, [v]);

  // Günde bir kez hatırlatma göster (izin ve tercih açıksa)
  useEffect(() => {
    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted" || !readReminder()) return;
    try {
      const today = new Date().toDateString();
      if (window.localStorage.getItem(LAST_SHOWN_KEY) !== today) {
        new Notification("EhliyetAl", {
          body: "Bugün birkaç soru çözmeye ne dersin? 🚗",
          icon: "/icon.png",
        });
        window.localStorage.setItem(LAST_SHOWN_KEY, today);
      }
    } catch {
      // bildirim gösterilemedi
    }
  }, []);

  async function handleToggle() {
    if (!("Notification" in window)) return;

    if (state?.enabled) {
      writeReminder(false);
      return;
    }

    const result = await Notification.requestPermission();
    if (result === "granted") {
      writeReminder(true);
      new Notification("EhliyetAl", {
        body: "Hatırlatıcı açıldı! Siteyi her ziyaret ettiğinde günlük bir hatırlatma göreceksin.",
        icon: "/icon.png",
      });
    } else {
      notifyStoreChange();
    }
  }

  if (!state || state.permission === "unsupported") return null;

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={state.permission === "denied"}
      title={state.permission === "denied" ? "Bildirim izni tarayıcı ayarlarından engellenmiş" : undefined}
      className={`inline-flex items-center gap-2 min-h-11 rounded-full border-2 px-4 text-[13px] font-extrabold cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
        state.enabled
          ? "border-primary bg-primary-wash text-primary"
          : "border-line bg-surface text-ink-soft hover:text-primary hover:border-primary-soft"
      }`}
    >
      {state.enabled ? <Bell size={15} strokeWidth={2.6} /> : <BellOff size={15} strokeWidth={2.6} />}
      {state.enabled ? "Hatırlatıcı açık" : "Çalışma hatırlatıcısı kur"}
    </button>
  );
}
