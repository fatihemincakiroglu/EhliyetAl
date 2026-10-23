# EhliyetAl

Türkiye ehliyet sınavına hazırlık için soru-cevap (quiz) uygulaması. Next.js (App Router) + TypeScript + Tailwind CSS ile yazıldı.

## Özellikler

- 5 kategori: Trafik, Motor, İlk Yardım, Çevre, İşaretler
- Her kategori için gerçek sınav formatında sorular
- İl bazlı ehliyet sınavına hazırlık rehber sayfaları
- Cevap sonrası anlık açıklama
- Yol temalı ilerleme çubuğu
- Sonuç ekranında puan, konu bazlı analiz ve tüm cevapların incelemesi (%70 geçme barajı)
- Gerçek sınav modu (cevaplar sonda açıklanır) ve öğrenme modu (anında geri bildirim)
- Oyunlaştırma: XP ve seviyeler, günlük hedef, günlük seri + haftada bir seri kurtarıcı, rozetler, kutlama animasyonları
- Yanlışlarım kutusu, aralıklı tekrar ve zayıf konuya göre 10 soruluk hızlı tur
- Paylaşılabilir sonuç görseli (story boyutu) ve PDF
- İlerlemeyi dosya olarak yedekleme / geri yükleme (veriler yalnızca tarayıcıda, localStorage)

## Kod yapısı (öne çıkanlar)

- `app/globals.css`: renk/tipografi tokenları, açık-koyu tema, ortak buton ve kart sınıfları
- `lib/progress.ts`: XP, seviye, günlük hedef, seri, kategori ilerlemesi, zayıf konu önerisi
- `lib/clientStore.ts`: localStorage verisini React'e bağlayan `useStoreVersion()` kancası
- `lib/celebrate.ts` + `components/Celebrations.tsx`: kutlama olayları (toast + konfeti)
- `components/QuizRunner.tsx`, `QuestionCard.tsx`, `QuizResult.tsx`: soru çözme akışı

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
