import type { NextConfig } from "next";
import { provinces, provincePath } from "./lib/provinces";

const nextConfig: NextConfig = {
  async redirects() {
    // Eski /rehber/il/<il> URL'lerini yeni /rehber/il/<il>-ehliyet-sinavi
    // adreslerine kalıcı (301) olarak yönlendirir. Böylece mevcut
    // paylaşımlar, geri linkler ve arama motoru indeksleri korunur.
    return provinces.map((province) => ({
      source: `/rehber/il/${province.slug}`,
      destination: provincePath(province),
      permanent: true,
    }));
  },
};

export default nextConfig;
