import { schnyderMlightFont } from '@/app/layout';
import { prisma } from '@/lib/prisma';
import ViewportMotionSection from '@/motion/ViewportMotionSection';
import { ProductType } from '@/types';
import bestSellers from '@/utils/bestSellers';
import React from 'react';
import Card from '../card/Card';
import ViewportMotionDiv from '@/motion/ViewPortMotionDiv';
import ViewportMotionDivArr from '@/motion/ViewPortMotionDivArr';

const BestSellersSection = async () => {
   const products: ProductType[] = await prisma.product.findMany({
      include: {
         reviews: true,
      },
   });

   const bestSellersFilter = bestSellers(products);

   return (
      <section
         className={`w-full h-[80%] container-px py-[16px] relative overflow-hidden`}
      >
         <ViewportMotionDiv>
            <div className="container-rounded bg-secondary container-px w-full flex flex-col items-center py-[16px]">
               <h2 className={`text-section ${schnyderMlightFont.className}`}>
                  Best Sellers
               </h2>
               <h3>{`Skin is complex. Skincare doesn't have to be.`}</h3>
            </div>
         </ViewportMotionDiv>

         <ViewportMotionDiv>
            <div className="grid py-[16px] grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-4">
               {bestSellersFilter.map((card) => (
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
                        className="bg-[#f4f3ef] container-rounded m-0 hover:bg-[#f0e8f6] !transition-all "
                     />
                  </ViewportMotionDivArr>
               ))}
            </div>
         </ViewportMotionDiv>
      </section>
   );
};

export default BestSellersSection;
