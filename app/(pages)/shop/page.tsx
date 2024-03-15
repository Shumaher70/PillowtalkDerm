import { Metadata } from "next"

import ViewportMotionDiv from "@/app/components/motion/ViewPortMotionDiv"
import ViewportMotionDivArr from "@/app/components/motion/ViewPortMotionDivArr"

import { schnyderMlightFont } from "@/app/layout"
import { prisma } from "@/lib/prisma"
import { ProductType } from "@/types"
import Card from "@/app/components/card/Card"

export const metadata: Metadata = {
   title: "Shop - PillowTalkDerm",
   description:
      "Dr. Idriss is a collection of fact-based, science-backed skincare solutions by Dr. Shereene Idriss.",
}

const ShopPage = async () => {
   const products: ProductType[] = await prisma.product.findMany({
      include: {
         reviews: true,
         carts: true,
         productDescription: true,
      },
   })
   return (
      <section
         className={`container-px relative  w-full overflow-hidden py-[16px]`}
      >
         <ViewportMotionDiv>
            <div className="container-rounded bg-secondary container-px mt-[50px] flex w-full flex-col items-center py-[16px] md:mt-[100px]">
               <h2 className={`text-section ${schnyderMlightFont.className}`}>
                  Shop
               </h2>
            </div>
         </ViewportMotionDiv>

         <ViewportMotionDiv>
            <div className="grid grid-cols-2 gap-2 py-[16px] lg:grid-cols-3 lg:gap-5">
               {products.map((card) => (
                  <ViewportMotionDivArr key={card.id}>
                     <Card
                        product={{
                           id: card.id,
                           images: card.images,
                           title: card.title,
                           price: card.price,
                           reviews: card.reviews,
                           soldOut: card.soldOut,
                           sold: card.sold,
                           pair: card.pair,
                        }}
                        btn
                        stars
                        rating
                        imageAnimated
                        win
                        className="container-rounded m-0 h-full bg-[#f4f3ef] !transition-all hover:bg-[#f0e8f6] "
                     />
                  </ViewportMotionDivArr>
               ))}
            </div>
         </ViewportMotionDiv>
      </section>
   )
}

export default ShopPage
