import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Kule Vinç Kiralama',
  description: 'İnşaat projeleriniz için kule vinç kiralama hizmetlerini Vinç Burada’da inceleyin.',
}

const Page = () => {
  return (
    <ProductPageLayout
      title="Kule Vinç"
      subHeading="Büyük ölçekli inşaat projeleriniz için kule vinç kiralama çözümleri."
    />
  )
}

export default Page
