import { Home, ListChecks, BarChart3, Search, BookOpen, GraduationCap, Mail, CalendarDays } from "lucide-react";

export const navItems = [
  { href: "/", label: "Ana Sayfa", icon: Home },
  { href: "/sinav", label: "Sınav Simülasyonu", icon: ListChecks },
  { href: "/istatistik", label: "İstatistikler", icon: BarChart3 },
];

export const moreItems = [
  { href: "/aylik-sinavlar", label: "Aylık Sınavlar", icon: CalendarDays },
  { href: "/ara", label: "Soru Ara", icon: Search },
  { href: "/sozluk", label: "Sözlük", icon: BookOpen },
  { href: "/rehber", label: "Hazırlık Rehberi", icon: GraduationCap },
  { href: "/iletisim", label: "İletişim", icon: Mail },
];
