# EhliyetAl

Türkiye ehliyet sınavına hazırlık için soru-cevap (quiz) uygulaması. Next.js (App Router) + TypeScript + Tailwind CSS ile yazıldı.

## Özellikler

- 4 kategori: Trafik, Motor, İlk Yardım, Çevre
- Her kategori için gerçek sınav formatında sorular
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

Sorular `lib/questions.ts` dosyasında tutulur. Yeni bir soru eklemek için ilgili kategorinin `questions` dizisine aynı formatta bir obje eklemen yeterli.

## Vercel'e deploy

Bu proje Vercel'de sıfır ek ayarla çalışacak şekilde yapılandırılmıştır (standart Next.js projesi).
