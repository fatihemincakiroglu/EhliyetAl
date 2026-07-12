import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Sepetli Vinç Kiralama',
  description: 'Yükseklik çalışmalarınız için sepetli vinç kiralama seçeneklerini Vinç Burada’da keşfedin.',
}

const Page = () => {
  return (
    <ProductPageLayout
      title="Sepetli Vinç"
      subHeading="Yüksekte çalışma gerektiren projeleriniz için güvenli sepetli vinç kiralama."
    />
  )
}

export default Page
