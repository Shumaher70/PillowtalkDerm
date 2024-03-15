import { schnyderMlightFont } from "@/app/layout"
import Button from "../../button/Button"
import Image from "next/image"
import ViewportMotionSection from "@/app/components/motion/ViewportMotionSection"

const HeroSection = () => {
   return (
      <ViewportMotionSection>
         <div
            className={`container-rounded-b container-p relative h-[80vh] w-full overflow-hidden`}
         >
            <div className="flex h-full w-full flex-col items-center justify-end gap-5 text-center md:items-start md:pt-[250px] md:text-start">
               <div>
                  <h1 className={`text-hero ${schnyderMlightFont.className}`}>
                     The Depuffer
                  </h1>

                  <h3 className="">
                     The Award-Winning Depuffer is Back in Stock
                  </h3>
               </div>

               <Button
                  href="/shop"
                  text={"shop now"}
                  className="w-max bg-gradient-to-r from-pink-400 to-pink-600  uppercase"
                  size={"lg"}
                  load={false}
               />
            </div>

            <Image
               src="/imagesHomePage/imagesHome/heroSection.webp"
               alt="home"
               width={0}
               height={0}
               sizes="100vw"
               className="absolute right-0 top-0 z-[-1] h-full w-full object-cover
               "
            />
         </div>
      </ViewportMotionSection>
   )
}

export default HeroSection
