import { ProductType } from "@/types"

import Review from "./components/review/Review"
import Filter from "./components/filter/Filter"
import Comment from "./components/comment/Comment"
import { prisma } from "@/lib/prisma"

const Comments = async ({ product }: { product: ProductType }) => {
   const review = await prisma.review.findMany({
      where: {
         productId: product.id,
      },
   })

   return (
      <div className="bg-accent flex w-full flex-col px-[16px] py-[32px] pb-[46px] md:px-[80px] lg:px-[200px]">
         <Review reviews={product.reviews} />
         <div className="mt-5">
            <Filter />
         </div>

         {review.length > 0 && (
            <div className="mt-5 flex flex-col gap-5">
               {review.map((comment) => (
                  <div key={comment.id}>
                     <Comment review={comment} />
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default Comments
