import PageTransitionAnimate from "@/components/animation/PageTransitionAnimate"
import PageHeading from "../parts/PageHeading"

const ProductsPage = () => {
  return (
    <PageTransitionAnimate>
      <PageHeading title="制作物" />
      <h1>Products Page</h1>
    </PageTransitionAnimate>
  )
}

export default ProductsPage