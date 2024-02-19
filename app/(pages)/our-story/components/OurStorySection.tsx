import { schnyderMlightFont } from "@/app/layout"
import Image from "next/image"

const OurStorySection = () => {
   return (
      <div className="container-rounded-b relative flex h-screen w-full items-start justify-center overflow-hidden md:items-center md:justify-end">
         <h1
            className={`text-hero ${schnyderMlightFont.className} container-p !pt-[50px] text-white md:pt-0`}
         >
            Our Story
         </h1>

         <Image
            src="/imagesOurStory/ourStoryDesktop.webp"
            alt="our-story"
            className="absolute -z-10 hidden h-full w-full object-cover md:block"
            width={0}
            height={0}
            sizes="100vw"
         />

         <Image
            src="/imagesOurStory/ourStoryMobile.webp"
            alt="our-story"
            className="absolute -z-10 h-full w-full object-cover md:hidden"
            width={0}
            height={0}
            sizes="100vw"
         />
      </div>
   )
}

export default OurStorySection
