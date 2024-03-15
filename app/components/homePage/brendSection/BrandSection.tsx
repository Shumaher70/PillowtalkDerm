"use client"
import RunningLine from "@/app/components/motion/RunningLine"
import ViewportMotionSection from "@/app/components/motion/ViewportMotionSection"
import { nanoid } from "@reduxjs/toolkit"

import Image from "next/image"

const images = [
   "/imagesHomePage/imagesBrandSection/vogue.webp",
   "/imagesHomePage/imagesBrandSection/byrdie.webp",
   "/imagesHomePage/imagesBrandSection/allure.webp",
   "/imagesHomePage/imagesBrandSection/bazaar.webp",
   "/imagesHomePage/imagesBrandSection/newYorkTimes.webp",
]

const BrandSection = () => {
   return (
      <ViewportMotionSection>
         <RunningLine baseVelocity={20}>
            <div className="flex min-w-[650px] justify-between pl-[60px] md:min-w-[1100px] md:pl-[120px]">
               {images.map((imag) => (
                  <Image
                     width={100}
                     height={26}
                     sizes="33vw"
                     className="w-[70px] object-contain md:w-[100px]"
                     key={nanoid()}
                     src={imag}
                     alt={imag}
                     loading="lazy"
                  />
               ))}
            </div>
         </RunningLine>
      </ViewportMotionSection>
   )
}

export default BrandSection
