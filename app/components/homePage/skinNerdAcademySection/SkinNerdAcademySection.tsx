import { schnyderMlightFont } from '@/app/layout';
import ViewportMotionDiv from '@/motion/ViewPortMotionDiv';
import React from 'react';
import Button from '../../button/Button';
import CarouseSection from './CarouseSection';
import { prisma } from '@/lib/prisma';

const SkinNerdAcademySection = async () => {
   const blogs = await prisma.blog.findMany();

   return (
      <section className="w-full max-h-full bg-secondary py-[32px]">
         <ViewportMotionDiv>
            <div className="w-full container-px flex gap-5 flex-col justify-center items-center md:flex-row md:justify-between">
               <h2
                  className={`text-section leading-[50px] ${schnyderMlightFont.className}`}
               >
                  Skin Nerd Academy
               </h2>

               <Button
                  className="uppercase bg-purple-700 text-white w-full md:w-auto whitespace-nowrap"
                  text={'learn more'}
                  size={'lg'}
                  load={false}
               />
            </div>
         </ViewportMotionDiv>

         <ViewportMotionDiv>
            <CarouseSection blogs={blogs} />
         </ViewportMotionDiv>
      </section>
   );
};

export default SkinNerdAcademySection;
