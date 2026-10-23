// Kutlama olayları: herhangi bir yerden tetiklenir, layout'taki
// <Celebrations /> bileşeni dinleyip toast + konfeti gösterir.

export type CelebrationKind = "combo" | "goal" | "level" | "pass" | "streak" | "info";

export type Celebration = {
  kind: CelebrationKind;
  title: string;
  subtitle?: string;
};

export const CELEBRATE_EVENT = "ehliyetal:celebrate";

export function celebrate(c: Celebration) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<Celebration>(CELEBRATE_EVENT, { detail: c }));
}

/** Konfeti gerektiren (büyük) kutlamalar */
export function isBigCelebration(kind: CelebrationKind) {
  return kind === "goal" || kind === "level" || kind === "pass" || kind === "streak";
}
