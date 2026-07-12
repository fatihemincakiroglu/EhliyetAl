import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Mobil Vinç Kiralama',
  description: 'Hızlı konumlandırma ve esneklik sunan mobil vinç kiralama hizmetlerini Vinç Burada’da bulun.',
}

const Page = () => {
  return (
    <ProductPageLayout
      title="Mobil Vinç"
      subHeading="Sahalar arası hızlı taşınabilirlik gerektiren işleriniz için mobil vinç kiralama."
    />
  )
}

export default Page
