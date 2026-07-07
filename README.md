# EhliyetAl

Türkiye ehliyet sınavına hazırlık için soru-cevap (quiz) uygulaması. Next.js (App Router) + TypeScript + Tailwind CSS ile yazıldı.

## Özellikler

- 5 kategori: Trafik, Motor, İlk Yardım, Çevre, İşaretler
- Her kategori için gerçek sınav formatında sorular
- İl bazlı ehliyet sınavına hazırlık rehber sayfaları
- Cevap sonrası anlık açıklama
- Yol temalı ilerleme çubuğu
- Sonuç ekranında puan ve yanlış cevap özeti (%70 geçme barajı)

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Build

```bash
npm run build
npm start
```

## Yeni soru eklemek

Sorular `lib/questions_data/` klasöründe kategoriye göre ayrı dosyalarda tutulur (`trafik.ts`, `motor.ts`, `ilkyardim.ts`, `cevre.ts`, `isaretler.ts`). Yeni bir soru eklemek için ilgili kategorinin dosyasındaki `questions` dizisine aynı formatta bir obje eklemen yeterli; `lib/questions.ts` bu dosyaları otomatik olarak birleştirir.

## Yeni il rehberi sayfası eklemek

İl bazlı rehber sayfaları `lib/provinces.ts` dosyasındaki listeden otomatik üretilir. Yeni bir il eklemek için listeye `{ slug: "...", name: "..." }` eklemen yeterli; sayfa ve sitemap girdisi otomatik oluşur.

## Vercel'e deploy

Bu proje Vercel'de sıfır ek ayarla çalışacak şekilde yapılandırılmıştır (standart Next.js projesi).
