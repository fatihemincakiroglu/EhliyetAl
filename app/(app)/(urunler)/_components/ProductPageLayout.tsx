import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { ReactNode } from 'react'

interface Props {
  title: string
  subHeading: string
  children?: ReactNode
}

const ProductPageLayout = ({ title, subHeading, children }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container flex flex-col gap-y-16 py-16 lg:gap-y-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-6 text-base text-neutral-500 sm:text-lg dark:text-neutral-400">{subHeading}</p>
          <div className="mt-8 flex justify-center gap-x-4">
            <ButtonPrimary href="/contact">Teklif Al</ButtonPrimary>
          </div>
        </div>

        <Divider />

        <div className="mx-auto w-full max-w-4xl">
          {children ?? (
            <div className="rounded-3xl border border-dashed border-neutral-300 p-10 text-center text-neutral-400 dark:border-neutral-700">
              Bu ürün sayfasının içeriği yakında eklenecektir.
            </div>
          )}
        </div>

        <div className="relative py-10 text-center">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading="Aklınızdaki soruları yanıtlamaktan memnuniyet duyarız">
            İhtiyacınıza uygun teklif için hemen iletişime geçin
          </HeadingWithSub>
          <ButtonPrimary href="/contact" className="mt-8">
            İletişime Geç
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default ProductPageLayout
