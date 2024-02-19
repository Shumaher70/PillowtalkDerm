import ViewportMotionSection from "@/motion/ViewportMotionSection"
import React from "react"
import Button from "../../button/Button"
import { schnyderMlightFont } from "@/app/layout"
import ImageSection from "./ImageSection"

const DoctorOrderSection = () => {
   return (
      <ViewportMotionSection>
         <div
            className={`container-rounded-b container-p relative h-[80vh] w-full overflow-hidden`}
         >
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 text-center md:items-start md:justify-between md:text-start">
               <div>
                  <h1
                     className={`text-hero pb-2 leading-[1] text-white ${schnyderMlightFont.className}`}
                  >
                     {`Doctor's Orders`}
                  </h1>

                  <h3 className="text-white">{`Dr. Idriss' Even Skin Routine`}</h3>
               </div>

               <Button
                  href="/products/major-fade-solution-system"
                  text={"shop major fade"}
                  className="w-max bg-gradient-to-r from-pink-400 to-pink-600  uppercase"
                  size={"lg"}
                  load={false}
               />
            </div>

            <ImageSection />
         </div>
      </ViewportMotionSection>
   )
}

export default DoctorOrderSection
