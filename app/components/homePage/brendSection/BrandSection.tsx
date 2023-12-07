'use client';
import RunningLine from '@/motion/RunningLine';
import ViewportMotionSection from '@/motion/ViewportMotionSection';
import { nanoid } from '@reduxjs/toolkit';

import Image from 'next/image';

const images = [
   '/imagesHomePage/imagesBrandSection/vogue.webp',
   '/imagesHomePage/imagesBrandSection/byrdie.webp',
   '/imagesHomePage/imagesBrandSection/allure.webp',
   '/imagesHomePage/imagesBrandSection/bazaar.webp',
   '/imagesHomePage/imagesBrandSection/newYorkTimes.webp',
];

const BrandSection = () => {
   return (
      <ViewportMotionSection>
         <RunningLine baseVelocity={20}>
            <div className="flex justify-between md:pl-[120px] md:min-w-[1100px] min-w-[650px] pl-[60px]">
               {images.map((imag) => (
                  <Image
                     width={100}
                     height={26}
                     sizes="33vw"
                     className="object-contain w-[70px] md:w-[100px]"
                     key={nanoid()}
                     src={imag}
                     alt={imag}
                     loading="lazy"
                  />
               ))}
            </div>
         </RunningLine>
      </ViewportMotionSection>
   );
};

export default BrandSection;
