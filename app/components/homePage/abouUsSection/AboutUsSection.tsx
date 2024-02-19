import ViewportMotionSection from "@/motion/ViewportMotionSection"
import Button from "../../button/Button"
import { schnyderMlightFont } from "@/app/layout"

const AboutUsSection = () => {
   return (
      <ViewportMotionSection>
         <div className="container-px my-[16px] h-[80%] py-[16px] md:my-0 ">
            <div className="bg-accent container-rounded flex h-full w-full flex-col gap-10 p-[16px] md:p-[24px]">
               <h1
                  className={`text-[40px] leading-[45px] md:text-[50px] md:leading-[60px] ${schnyderMlightFont.className}`}
               >
                  PillowtalkDerm is on a mission to stop the B.S. and
                  misinformation surrounding skincare. Our science-backed
                  solutions put formulation first and are created by
                  board-certified dermatologist Dr. Shereene Idriss.
               </h1>

               <div>
                  <Button
                     href="/our-story"
                     className="bg-purple-700 uppercase "
                     text={"about us"}
                     size={"lg"}
                     load={false}
                  />
               </div>
            </div>
         </div>
      </ViewportMotionSection>
   )
}

export default AboutUsSection
