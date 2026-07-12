import { Home, ListChecks, BarChart3, Search, BookOpen, GraduationCap, Mail, CalendarDays, Gamepad2, Newspaper } from "lucide-react";

export const navItems = [
  { href: "/", label: "Ana Sayfa", icon: Home },
  { href: "/sinav", label: "Sınav Simülasyonu", icon: ListChecks },
  { href: "/istatistik", label: "İstatistikler", icon: BarChart3 },
];

export const moreItems = [
  { href: "/pratik-oyunlar", label: "Pratik Oyunlar", icon: Gamepad2 },
  { href: "/aylik-sinavlar", label: "Aylık Sınavlar", icon: CalendarDays },
  { href: "/ara", label: "Soru Ara", icon: Search },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/sozluk", label: "Sözlük", icon: BookOpen },
  { href: "/rehber", label: "Hazırlık Rehberi", icon: GraduationCap },
  { href: "/iletisim", label: "İletişim", icon: Mail },
];
