import { ProductType } from "@/types"

import Review from "./components/review/Review"
import Filter from "./components/filter/Filter"

const Comments = async ({ product }: { product: ProductType }) => {
   return (
      <div className="bg-accent flex w-full flex-col px-[16px] py-[32px] pb-[46px] md:px-[80px] lg:px-[200px]">
         <Review reviews={product.reviews} />
         <div className="mt-5">
            <Filter id={product.id} />
         </div>
      </div>
   )
}

export default Comments
