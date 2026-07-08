export type Province = {
  slug: string;
  name: string;
  plate: string;
  region: string;
  districts: string[];
};

// Nüfus ve arama hacmine göre öne çıkan iller. Yeni il eklemek için
// listeye bir kayıt eklemek yeterli — sayfa otomatik oluşur.
export const provinces: Province[] = [
  { slug: "istanbul", name: "İstanbul", plate: "34", region: "Marmara", districts: ["Kadıköy", "Beşiktaş", "Üsküdar"] },
  { slug: "ankara", name: "Ankara", plate: "06", region: "İç Anadolu", districts: ["Çankaya", "Keçiören", "Yenimahalle"] },
  { slug: "izmir", name: "İzmir", plate: "35", region: "Ege", districts: ["Karşıyaka", "Bornova", "Konak"] },
  { slug: "bursa", name: "Bursa", plate: "16", region: "Marmara", districts: ["Nilüfer", "Osmangazi", "Yıldırım"] },
  { slug: "antalya", name: "Antalya", plate: "07", region: "Akdeniz", districts: ["Muratpaşa", "Kepez", "Alanya"] },
  { slug: "adana", name: "Adana", plate: "01", region: "Akdeniz", districts: ["Seyhan", "Çukurova", "Yüreğir"] },
  { slug: "konya", name: "Konya", plate: "42", region: "İç Anadolu", districts: ["Selçuklu", "Meram", "Karatay"] },
  { slug: "gaziantep", name: "Gaziantep", plate: "27", region: "Güneydoğu Anadolu", districts: ["Şahinbey", "Şehitkamil", "Nizip"] },
  { slug: "sanliurfa", name: "Şanlıurfa", plate: "63", region: "Güneydoğu Anadolu", districts: ["Haliliye", "Eyyübiye", "Siverek"] },
  { slug: "kocaeli", name: "Kocaeli", plate: "41", region: "Marmara", districts: ["İzmit", "Gebze", "Darıca"] },
  { slug: "mersin", name: "Mersin", plate: "33", region: "Akdeniz", districts: ["Yenişehir", "Toroslar", "Tarsus"] },
  { slug: "diyarbakir", name: "Diyarbakır", plate: "21", region: "Güneydoğu Anadolu", districts: ["Bağlar", "Kayapınar", "Sur"] },
  { slug: "hatay", name: "Hatay", plate: "31", region: "Akdeniz", districts: ["Antakya", "İskenderun", "Defne"] },
  { slug: "manisa", name: "Manisa", plate: "45", region: "Ege", districts: ["Yunusemre", "Şehzadeler", "Akhisar"] },
  { slug: "kayseri", name: "Kayseri", plate: "38", region: "İç Anadolu", districts: ["Melikgazi", "Kocasinan", "Talas"] },
  { slug: "samsun", name: "Samsun", plate: "55", region: "Karadeniz", districts: ["İlkadım", "Atakum", "Canik"] },
  { slug: "balikesir", name: "Balıkesir", plate: "10", region: "Marmara", districts: ["Altıeylül", "Karesi", "Edremit"] },
  { slug: "kahramanmaras", name: "Kahramanmaraş", plate: "46", region: "Akdeniz", districts: ["Onikişubat", "Dulkadiroğlu", "Elbistan"] },
  { slug: "van", name: "Van", plate: "65", region: "Doğu Anadolu", districts: ["İpekyolu", "Edremit", "Erciş"] },
  { slug: "aydin", name: "Aydın", plate: "09", region: "Ege", districts: ["Efeler", "Nazilli", "Söke"] },
  { slug: "tekirdag", name: "Tekirdağ", plate: "59", region: "Marmara", districts: ["Süleymanpaşa", "Çorlu", "Çerkezköy"] },
  { slug: "sakarya", name: "Sakarya", plate: "54", region: "Marmara", districts: ["Adapazarı", "Serdivan", "Erenler"] },
  { slug: "denizli", name: "Denizli", plate: "20", region: "Ege", districts: ["Pamukkale", "Merkezefendi", "Çivril"] },
  { slug: "mugla", name: "Muğla", plate: "48", region: "Ege", districts: ["Menteşe", "Bodrum", "Fethiye"] },
  { slug: "eskisehir", name: "Eskişehir", plate: "26", region: "İç Anadolu", districts: ["Odunpazarı", "Tepebaşı", "Sivrihisar"] },
  { slug: "mardin", name: "Mardin", plate: "47", region: "Güneydoğu Anadolu", districts: ["Artuklu", "Kızıltepe", "Midyat"] },
  { slug: "trabzon", name: "Trabzon", plate: "61", region: "Karadeniz", districts: ["Ortahisar", "Akçaabat", "Of"] },
  { slug: "malatya", name: "Malatya", plate: "44", region: "Doğu Anadolu", districts: ["Battalgazi", "Yeşilyurt", "Doğanşehir"] },
  { slug: "erzurum", name: "Erzurum", plate: "25", region: "Doğu Anadolu", districts: ["Yakutiye", "Palandöken", "Aziziye"] },
  { slug: "ordu", name: "Ordu", plate: "52", region: "Karadeniz", districts: ["Altınordu", "Ünye", "Fatsa"] },
];

const URL_SUFFIX = "-ehliyet-sinavi";

/** İl sayfası için tam URL yolu, örn. /rehber/il/gaziantep-ehliyet-sinavi */
export function provincePath(p: Province): string {
  return `/rehber/il/${p.slug}${URL_SUFFIX}`;
}

/** generateStaticParams için kullanılacak URL slug'ı (örn. "gaziantep-ehliyet-sinavi") */
export function provinceUrlSlug(p: Province): string {
  return `${p.slug}${URL_SUFFIX}`;
}

/**
 * Route parametresinden (yeni "gaziantep-ehliyet-sinavi" ya da eski "gaziantep"
 * biçiminde olabilir) ilgili ili bulur.
 */
export function getProvince(routeParam: string): Province | undefined {
  const base = routeParam.endsWith(URL_SUFFIX)
    ? routeParam.slice(0, -URL_SUFFIX.length)
    : routeParam;
  return provinces.find((p) => p.slug === base);
}

/** Aynı coğrafi bölgeden diğer iller (iç linkleme için) */
export function relatedProvinces(p: Province, limit = 4): Province[] {
  return provinces.filter((x) => x.region === p.region && x.slug !== p.slug).slice(0, limit);
}
