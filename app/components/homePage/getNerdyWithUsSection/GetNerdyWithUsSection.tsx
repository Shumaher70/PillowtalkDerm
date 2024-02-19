import CarouseSection from "./CarouseSection"
import Button from "../../button/Button"
import { schnyderMlightFont } from "@/app/layout"
import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"

const GetNerdyWithUsSection = () => {
   return (
      <section className="bg-accent max-h-full w-full">
         <ViewportMotionDiv>
            <div className="relative -bottom-[20px]">
               <div className="container-px flex w-full flex-col items-center justify-center gap-5 p-[16px] lg:flex-row lg:justify-between">
                  <h2
                     className={`text-section text-center leading-[50px] lg:text-start ${schnyderMlightFont.className}`}
                  >
                     Get Nerdy with Us
                  </h2>

                  <div className="flex-center flex gap-2 md:gap-5">
                     <Button
                        href="https://www.tiktok.com/@shereeneidriss?lang=en"
                        className="w-full whitespace-nowrap bg-purple-700 uppercase text-white md:w-auto"
                        text={"tik tok"}
                        size={"lg"}
                        load={false}
                     />
                     <Button
                        href="https://www.instagram.com/pillowtalkderm/?hl=en"
                        className="w-full whitespace-nowrap bg-purple-700 uppercase text-white md:w-auto"
                        text={"instagram"}
                        size={"lg"}
                        load={false}
                     />
                     <Button
                        href="https://www.youtube.com/@shereeneidriss"
                        className="w-full whitespace-nowrap bg-purple-700 uppercase text-white md:w-auto"
                        text={"youtube"}
                        size={"lg"}
                        load={false}
                     />
                  </div>
               </div>
               <CarouseSection />
            </div>
         </ViewportMotionDiv>
      </section>
   )
}

export default GetNerdyWithUsSection
