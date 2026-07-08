export type Province = {
  slug: string;
  name: string;
  plate: string;
  region: string;
  districts: string[];
};

// Türkiye'deki 81 ilin tamamı; plaka kodu, coğrafi bölge ve öne çıkan
// ilçeleriyle birlikte. Sayfalar bu listeden otomatik üretilir.
export const provinces: Province[] = [
  { slug: "adana", name: "Adana", plate: "01", region: "Akdeniz", districts: ["Seyhan", "Çukurova", "Yüreğir"] },
  { slug: "adiyaman", name: "Adıyaman", plate: "02", region: "Güneydoğu Anadolu", districts: ["Merkez", "Kahta", "Besni"] },
  { slug: "afyonkarahisar", name: "Afyonkarahisar", plate: "03", region: "Ege", districts: ["Merkez", "Sandıklı", "Dinar"] },
  { slug: "agri", name: "Ağrı", plate: "04", region: "Doğu Anadolu", districts: ["Merkez", "Doğubayazıt", "Patnos"] },
  { slug: "amasya", name: "Amasya", plate: "05", region: "Karadeniz", districts: ["Merkez", "Merzifon", "Suluova"] },
  { slug: "ankara", name: "Ankara", plate: "06", region: "İç Anadolu", districts: ["Çankaya", "Keçiören", "Yenimahalle"] },
  { slug: "antalya", name: "Antalya", plate: "07", region: "Akdeniz", districts: ["Muratpaşa", "Kepez", "Alanya"] },
  { slug: "artvin", name: "Artvin", plate: "08", region: "Karadeniz", districts: ["Merkez", "Hopa", "Borçka"] },
  { slug: "aydin", name: "Aydın", plate: "09", region: "Ege", districts: ["Efeler", "Nazilli", "Söke"] },
  { slug: "balikesir", name: "Balıkesir", plate: "10", region: "Marmara", districts: ["Altıeylül", "Karesi", "Edremit"] },
  { slug: "bilecik", name: "Bilecik", plate: "11", region: "Marmara", districts: ["Merkez", "Bozüyük", "Söğüt"] },
  { slug: "bingol", name: "Bingöl", plate: "12", region: "Doğu Anadolu", districts: ["Merkez", "Genç", "Solhan"] },
  { slug: "bitlis", name: "Bitlis", plate: "13", region: "Doğu Anadolu", districts: ["Merkez", "Tatvan", "Ahlat"] },
  { slug: "bolu", name: "Bolu", plate: "14", region: "Karadeniz", districts: ["Merkez", "Gerede", "Mudurnu"] },
  { slug: "burdur", name: "Burdur", plate: "15", region: "Akdeniz", districts: ["Merkez", "Bucak", "Gölhisar"] },
  { slug: "bursa", name: "Bursa", plate: "16", region: "Marmara", districts: ["Nilüfer", "Osmangazi", "Yıldırım"] },
  { slug: "canakkale", name: "Çanakkale", plate: "17", region: "Marmara", districts: ["Merkez", "Biga", "Gelibolu"] },
  { slug: "cankiri", name: "Çankırı", plate: "18", region: "Karadeniz", districts: ["Merkez", "Çerkeş", "Ilgaz"] },
  { slug: "corum", name: "Çorum", plate: "19", region: "Karadeniz", districts: ["Merkez", "Sungurlu", "Osmancık"] },
  { slug: "denizli", name: "Denizli", plate: "20", region: "Ege", districts: ["Pamukkale", "Merkezefendi", "Çivril"] },
  { slug: "diyarbakir", name: "Diyarbakır", plate: "21", region: "Güneydoğu Anadolu", districts: ["Bağlar", "Kayapınar", "Sur"] },
  { slug: "edirne", name: "Edirne", plate: "22", region: "Marmara", districts: ["Merkez", "Keşan", "Uzunköprü"] },
  { slug: "elazig", name: "Elazığ", plate: "23", region: "Doğu Anadolu", districts: ["Merkez", "Kovancılar", "Karakoçan"] },
  { slug: "erzincan", name: "Erzincan", plate: "24", region: "Doğu Anadolu", districts: ["Merkez", "Tercan", "Üzümlü"] },
  { slug: "erzurum", name: "Erzurum", plate: "25", region: "Doğu Anadolu", districts: ["Yakutiye", "Palandöken", "Aziziye"] },
  { slug: "eskisehir", name: "Eskişehir", plate: "26", region: "İç Anadolu", districts: ["Odunpazarı", "Tepebaşı", "Sivrihisar"] },
  { slug: "gaziantep", name: "Gaziantep", plate: "27", region: "Güneydoğu Anadolu", districts: ["Şahinbey", "Şehitkamil", "Nizip"] },
  { slug: "giresun", name: "Giresun", plate: "28", region: "Karadeniz", districts: ["Merkez", "Bulancak", "Espiye"] },
  { slug: "gumushane", name: "Gümüşhane", plate: "29", region: "Karadeniz", districts: ["Merkez", "Kelkit", "Şiran"] },
  { slug: "hakkari", name: "Hakkari", plate: "30", region: "Doğu Anadolu", districts: ["Merkez", "Yüksekova", "Çukurca"] },
  { slug: "hatay", name: "Hatay", plate: "31", region: "Akdeniz", districts: ["Antakya", "İskenderun", "Defne"] },
  { slug: "isparta", name: "Isparta", plate: "32", region: "Akdeniz", districts: ["Merkez", "Yalvaç", "Eğirdir"] },
  { slug: "mersin", name: "Mersin", plate: "33", region: "Akdeniz", districts: ["Yenişehir", "Toroslar", "Tarsus"] },
  { slug: "istanbul", name: "İstanbul", plate: "34", region: "Marmara", districts: ["Kadıköy", "Beşiktaş", "Üsküdar"] },
  { slug: "izmir", name: "İzmir", plate: "35", region: "Ege", districts: ["Karşıyaka", "Bornova", "Konak"] },
  { slug: "kars", name: "Kars", plate: "36", region: "Doğu Anadolu", districts: ["Merkez", "Sarıkamış", "Kağızman"] },
  { slug: "kastamonu", name: "Kastamonu", plate: "37", region: "Karadeniz", districts: ["Merkez", "Tosya", "İnebolu"] },
  { slug: "kayseri", name: "Kayseri", plate: "38", region: "İç Anadolu", districts: ["Melikgazi", "Kocasinan", "Talas"] },
  { slug: "kirklareli", name: "Kırklareli", plate: "39", region: "Marmara", districts: ["Merkez", "Lüleburgaz", "Babaeski"] },
  { slug: "kirsehir", name: "Kırşehir", plate: "40", region: "İç Anadolu", districts: ["Merkez", "Kaman", "Mucur"] },
  { slug: "kocaeli", name: "Kocaeli", plate: "41", region: "Marmara", districts: ["İzmit", "Gebze", "Darıca"] },
  { slug: "konya", name: "Konya", plate: "42", region: "İç Anadolu", districts: ["Selçuklu", "Meram", "Karatay"] },
  { slug: "kutahya", name: "Kütahya", plate: "43", region: "Ege", districts: ["Merkez", "Tavşanlı", "Simav"] },
  { slug: "malatya", name: "Malatya", plate: "44", region: "Doğu Anadolu", districts: ["Battalgazi", "Yeşilyurt", "Doğanşehir"] },
  { slug: "manisa", name: "Manisa", plate: "45", region: "Ege", districts: ["Yunusemre", "Şehzadeler", "Akhisar"] },
  { slug: "kahramanmaras", name: "Kahramanmaraş", plate: "46", region: "Akdeniz", districts: ["Onikişubat", "Dulkadiroğlu", "Elbistan"] },
  { slug: "mardin", name: "Mardin", plate: "47", region: "Güneydoğu Anadolu", districts: ["Artuklu", "Kızıltepe", "Midyat"] },
  { slug: "mugla", name: "Muğla", plate: "48", region: "Ege", districts: ["Menteşe", "Bodrum", "Fethiye"] },
  { slug: "mus", name: "Muş", plate: "49", region: "Doğu Anadolu", districts: ["Merkez", "Bulanık", "Malazgirt"] },
  { slug: "nevsehir", name: "Nevşehir", plate: "50", region: "İç Anadolu", districts: ["Merkez", "Ürgüp", "Avanos"] },
  { slug: "nigde", name: "Niğde", plate: "51", region: "İç Anadolu", districts: ["Merkez", "Bor", "Çiftlik"] },
  { slug: "ordu", name: "Ordu", plate: "52", region: "Karadeniz", districts: ["Altınordu", "Ünye", "Fatsa"] },
  { slug: "rize", name: "Rize", plate: "53", region: "Karadeniz", districts: ["Merkez", "Çayeli", "Ardeşen"] },
  { slug: "sakarya", name: "Sakarya", plate: "54", region: "Marmara", districts: ["Adapazarı", "Serdivan", "Erenler"] },
  { slug: "samsun", name: "Samsun", plate: "55", region: "Karadeniz", districts: ["İlkadım", "Atakum", "Canik"] },
  { slug: "siirt", name: "Siirt", plate: "56", region: "Güneydoğu Anadolu", districts: ["Merkez", "Kurtalan", "Pervari"] },
  { slug: "sinop", name: "Sinop", plate: "57", region: "Karadeniz", districts: ["Merkez", "Boyabat", "Gerze"] },
  { slug: "sivas", name: "Sivas", plate: "58", region: "İç Anadolu", districts: ["Merkez", "Şarkışla", "Suşehri"] },
  { slug: "tekirdag", name: "Tekirdağ", plate: "59", region: "Marmara", districts: ["Süleymanpaşa", "Çorlu", "Çerkezköy"] },
  { slug: "tokat", name: "Tokat", plate: "60", region: "Karadeniz", districts: ["Merkez", "Erbaa", "Turhal"] },
  { slug: "trabzon", name: "Trabzon", plate: "61", region: "Karadeniz", districts: ["Ortahisar", "Akçaabat", "Of"] },
  { slug: "tunceli", name: "Tunceli", plate: "62", region: "Doğu Anadolu", districts: ["Merkez", "Pertek", "Ovacık"] },
  { slug: "sanliurfa", name: "Şanlıurfa", plate: "63", region: "Güneydoğu Anadolu", districts: ["Haliliye", "Eyyübiye", "Siverek"] },
  { slug: "usak", name: "Uşak", plate: "64", region: "Ege", districts: ["Merkez", "Banaz", "Eşme"] },
  { slug: "van", name: "Van", plate: "65", region: "Doğu Anadolu", districts: ["İpekyolu", "Edremit", "Erciş"] },
  { slug: "yozgat", name: "Yozgat", plate: "66", region: "İç Anadolu", districts: ["Merkez", "Sorgun", "Boğazlıyan"] },
  { slug: "zonguldak", name: "Zonguldak", plate: "67", region: "Karadeniz", districts: ["Merkez", "Ereğli", "Çaycuma"] },
  { slug: "aksaray", name: "Aksaray", plate: "68", region: "İç Anadolu", districts: ["Merkez", "Ortaköy", "Eskil"] },
  { slug: "bayburt", name: "Bayburt", plate: "69", region: "Karadeniz", districts: ["Merkez", "Demirözü", "Aydıntepe"] },
  { slug: "karaman", name: "Karaman", plate: "70", region: "İç Anadolu", districts: ["Merkez", "Ermenek", "Sarıveliler"] },
  { slug: "kirikkale", name: "Kırıkkale", plate: "71", region: "İç Anadolu", districts: ["Merkez", "Keskin", "Delice"] },
  { slug: "batman", name: "Batman", plate: "72", region: "Güneydoğu Anadolu", districts: ["Merkez", "Kozluk", "Sason"] },
  { slug: "sirnak", name: "Şırnak", plate: "73", region: "Güneydoğu Anadolu", districts: ["Merkez", "Cizre", "Silopi"] },
  { slug: "bartin", name: "Bartın", plate: "74", region: "Karadeniz", districts: ["Merkez", "Ulus", "Amasra"] },
  { slug: "ardahan", name: "Ardahan", plate: "75", region: "Doğu Anadolu", districts: ["Merkez", "Göle", "Çıldır"] },
  { slug: "igdir", name: "Iğdır", plate: "76", region: "Doğu Anadolu", districts: ["Merkez", "Tuzluca", "Aralık"] },
  { slug: "yalova", name: "Yalova", plate: "77", region: "Marmara", districts: ["Merkez", "Çınarcık", "Termal"] },
  { slug: "karabuk", name: "Karabük", plate: "78", region: "Karadeniz", districts: ["Merkez", "Safranbolu", "Eskipazar"] },
  { slug: "kilis", name: "Kilis", plate: "79", region: "Güneydoğu Anadolu", districts: ["Merkez", "Musabeyli", "Elbeyli"] },
  { slug: "osmaniye", name: "Osmaniye", plate: "80", region: "Akdeniz", districts: ["Merkez", "Kadirli", "Düziçi"] },
  { slug: "duzce", name: "Düzce", plate: "81", region: "Karadeniz", districts: ["Merkez", "Akçakoca", "Gölyaka"] },
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
