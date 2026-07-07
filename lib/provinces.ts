export type Province = {
  slug: string;
  name: string;
};

// Nüfus ve arama hacmine göre öne çıkan iller. Yeni il eklemek için
// listeye slug/name çifti eklemek yeterli — sayfa otomatik oluşur.
export const provinces: Province[] = [
  { slug: "istanbul", name: "İstanbul" },
  { slug: "ankara", name: "Ankara" },
  { slug: "izmir", name: "İzmir" },
  { slug: "bursa", name: "Bursa" },
  { slug: "antalya", name: "Antalya" },
  { slug: "adana", name: "Adana" },
  { slug: "konya", name: "Konya" },
  { slug: "gaziantep", name: "Gaziantep" },
  { slug: "sanliurfa", name: "Şanlıurfa" },
  { slug: "kocaeli", name: "Kocaeli" },
  { slug: "mersin", name: "Mersin" },
  { slug: "diyarbakir", name: "Diyarbakır" },
  { slug: "hatay", name: "Hatay" },
  { slug: "manisa", name: "Manisa" },
  { slug: "kayseri", name: "Kayseri" },
  { slug: "samsun", name: "Samsun" },
  { slug: "balikesir", name: "Balıkesir" },
  { slug: "kahramanmaras", name: "Kahramanmaraş" },
  { slug: "van", name: "Van" },
  { slug: "aydin", name: "Aydın" },
  { slug: "tekirdag", name: "Tekirdağ" },
  { slug: "sakarya", name: "Sakarya" },
  { slug: "denizli", name: "Denizli" },
  { slug: "mugla", name: "Muğla" },
  { slug: "eskisehir", name: "Eskişehir" },
  { slug: "mardin", name: "Mardin" },
  { slug: "trabzon", name: "Trabzon" },
  { slug: "malatya", name: "Malatya" },
  { slug: "erzurum", name: "Erzurum" },
  { slug: "ordu", name: "Ordu" },
];

export function getProvince(slug: string): Province | undefined {
  return provinces.find((p) => p.slug === slug);
}
