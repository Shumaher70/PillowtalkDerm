import { ProductType } from "@/types"
import CarouselProduct from "./components/carousel/CarouselProduct"
import Order from "./components/order/Order"
import CardAccordion from "./components/cardAccordion/CardAccordion"
import Pair from "./components/pair/Pair"

const Card = ({ product }: { product: ProductType }) => {
   return (
      <div className="container-px flex  flex-col gap-3 pb-[16px] pt-[80px] md:pt-[110px] lg:flex-row">
         <div className="lg:w-2/4">
            <div className="sticky top-[110px]">
               <CarouselProduct
                  images={product.images}
                  videos={product.video}
               />
            </div>
         </div>

         <div className="lg:w-2/4">
            <Order product={product} />

            {product.different ||
            product.howToUse ||
            product.refills ||
            product.awards ? (
               <div className="mt-[12px]">
                  <CardAccordion product={product} />
               </div>
            ) : null}

            {product.pair.length > 0 && (
               <div className="mt-[12px]">
                  <Pair pair={product.pair} />
               </div>
            )}
         </div>
      </div>
   )
}

export default Card
