import Image from "next/image"
import { OurPhilosophySectionDummyData } from "./OurPhilosophySectionDummyData"

const OurPhilosophySection = () => {
   return (
      <div className="container-px h-full w-full py-[15px]">
         <div className="container-rounded bg-secondary flex h-full w-full flex-col overflow-hidden md:flex-row">
            <div className="relative h-auto w-full grow">
               <div className="h-full min-h-[300px]">
                  <Image
                     src="/imagesOurStory/ourPhilosophy.webp"
                     alt="our-philosophy"
                     height={0}
                     width={0}
                     sizes="100vw"
                     className="container-rounded absolute right-0 top-0 h-full w-full object-cover md:static"
                  />
               </div>
            </div>

            <div className="h-full w-full grow flex-col p-[15px] md:p-[24px]">
               <h1 className="text-title pb-5 md:pb-10">Our Philosophy</h1>

               <div className="flex flex-col gap-4">
                  {OurPhilosophySectionDummyData.map(
                     ({ image, title, subtitle }, index) => (
                        <div
                           key={index}
                           className="container-rounded flex items-center gap-3 bg-white p-3 "
                        >
                           <div className="flex-center flex rounded-full bg-gradient-to-r from-pink-400 to-pink-600 p-3">
                              {image}
                           </div>
                           <div className="text-[16px] font-medium md:text-[18px]">
                              <h5 className="uppercase">{title}</h5>
                              <p>{subtitle}</p>
                           </div>
                        </div>
                     )
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurPhilosophySection
