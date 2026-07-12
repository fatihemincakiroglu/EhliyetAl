import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Elektrikli Vinç Kiralama',
  description: 'Çevre dostu ve sessiz çalışma imkanı sunan elektrikli vinç kiralama seçeneklerini keşfedin.',
}

const Page = () => {
  return (
    <ProductPageLayout
      title="Elektrikli Vinç"
      subHeading="Kapalı alan ve düşük emisyon gerektiren işleriniz için elektrikli vinç kiralama."
    />
  )
}

export default Page
