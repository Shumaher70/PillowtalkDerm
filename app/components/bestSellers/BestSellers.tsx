import { schnyderMlightFont } from '@/app/layout';
import { prisma } from '@/lib/prisma';
import ViewportMotion from '@/motion/ViewportMotion';
import { ProductType } from '@/types';
import bestSellers from '@/utils/bestSellers';
import React from 'react';
import Card from '../card/Card';

const BestSellers = async () => {
   const products: ProductType[] = await prisma.product.findMany({
      include: {
         reviews: true,
      },
   });

   const bestSellersFilter = bestSellers(products);

   return (
      <>
         <ViewportMotion>
            <div
               className={`w-full h-[80%] container-px py-[16px] relative overflow-hidden`}
            >
               <div className="container-rounded bg-secondary container-px w-full flex flex-col items-center py-[16px]">
                  <h2
                     className={`text-section ${schnyderMlightFont.className}`}
                  >
                     Best Sellers
                  </h2>
                  <h3>{`Skin is complex. Skincare doesn't have to be.`}</h3>
               </div>

               <div className="grid py-[16px] grid-cols-2 lg:grid-cols-4 gap-5">
                  {bestSellersFilter.map((card) => (
                     <Card
                        key={card.id}
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
                        className="bg-[#f4f3ef] container-rounded px-[16px] py-[8px] m-0 hover:bg-[#f0e8f6] !transition-all "
                     />
                  ))}
               </div>
            </div>
         </ViewportMotion>
      </>
   );
};

export default BestSellers;
