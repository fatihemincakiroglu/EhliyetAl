"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff } from "lucide-react";

const REMINDER_KEY = "ehliyetal:reminder:v1";
const LAST_SHOWN_KEY = "ehliyetal:reminder-last-shown:v1";

function isBrowser() {
  return typeof window !== "undefined";
}

export default function StudyReminder() {
  const [enabled, setEnabled] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">(
    "default"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isBrowser() || !("Notification" in window)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission);
    setEnabled(window.localStorage.getItem(REMINDER_KEY) === "true");

    if (
      Notification.permission === "granted" &&
      window.localStorage.getItem(REMINDER_KEY) === "true"
    ) {
      const today = new Date().toDateString();
      const lastShown = window.localStorage.getItem(LAST_SHOWN_KEY);
      if (lastShown !== today) {
        new Notification("EhliyetAl", {
          body: "Bugün birkaç soru çözmeye ne dersin? 🚗",
          icon: "/icon.png",
        });
        window.localStorage.setItem(LAST_SHOWN_KEY, today);
      }
    }
  }, []);

  async function handleToggle() {
    if (!isBrowser() || !("Notification" in window)) return;

    if (enabled) {
      setEnabled(false);
      window.localStorage.setItem(REMINDER_KEY, "false");
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === "granted") {
      setEnabled(true);
      window.localStorage.setItem(REMINDER_KEY, "true");
      new Notification("EhliyetAl", {
        body: "Hatırlatıcı açıldı! Siteyi her ziyaret ettiğinde günlük bir hatırlatma göreceksin.",
        icon: "/icon.png",
      });
    }
  }

  if (!mounted || permission === "unsupported") return null;

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={permission === "denied"}
      title={
        permission === "denied"
          ? "Bildirim izni tarayıcı ayarlarından engellenmiş"
          : undefined
      }
      className="flex items-center gap-1.5 text-xs text-ink-soft hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {enabled ? <Bell size={14} className="text-gold" /> : <BellOff size={14} />}
      {enabled ? "Hatırlatıcı açık" : "Çalışma hatırlatıcısı kur"}
    </button>
  );
}
