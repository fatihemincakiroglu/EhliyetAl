import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'rc-slider/assets/index.css'
import ThemeProvider from './theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Vinç Burada',
    default: 'Kiralık Vinç Çeşitleri ve Vinç Kiralama | Vinç Burada',
  },
  description:
    "İhtiyacınıza uygun kiralık vinç çeşitlerini Vinç Burada'da keşfedin. Güvenilir, uygun fiyatlı ve hızlı vinç kiralama hizmeti için hemen teklif alın.",
  keywords: ['vinç kiralama', 'kiralık vinç', 'sepetli vinç', 'kule vinç', 'mobil vinç', 'Vinç Burada'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
