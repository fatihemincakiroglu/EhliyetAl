"use client";

import StudyReminder from "@/components/StudyReminder";
import GlobalCounter from "@/components/GlobalCounter";

/**
 * Hatırlatıcı ve topluluk sayacını tek, sade bir satırda toplar.
 * İkisi de kendi içinde koşullu render edildiği için (izin yoksa /
 * sayaç kapalıysa null döner), satır çoğu zaman tek öğe ya da boş kalır;
 * bu da anasayfanın sadeliğini korur.
 */
export default function HomeStatusBar() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
      <StudyReminder />
      <GlobalCounter />
    </div>
  );
}
