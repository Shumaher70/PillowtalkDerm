import ViewportMotionSection from "@/app/components/motion/ViewportMotionSection"
import Button from "../../button/Button"
import { schnyderMlightFont } from "@/app/layout"

const AboutUsSection = () => {
   return (
      <ViewportMotionSection>
         <div className="container-px my-[16px] h-[80%] py-[16px] md:my-0 ">
            <div className="bg-accent container-rounded flex h-full w-full flex-col gap-10 p-[16px] md:p-[24px]">
               <h1
                  className={`text-[28px] leading-[30px] md:text-[50px] md:leading-[60px] ${schnyderMlightFont.className}`}
               >
                  At Dr. Idriss, an educated nerd is an empowered nerd. We
                  eliminate the B.S. and fearmongering, creating science backed,
                  clinically proven, high performance formulas for you.
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
