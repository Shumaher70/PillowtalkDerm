import ImageCard from "@/app/components/card/components/ImageCard"
import { schnyderMlightFont } from "@/app/layout"
import { nanoid } from "@reduxjs/toolkit"
import Image from "next/image"

const results = [
   {
      percentage: "90%",
      description:
         "of users reported a reduction in the appearance of hyperpigmentation",
   },
   {
      percentage: "97%",
      description: "of users reported a more even skin tone",
   },
   {
      percentage: "100%",
      description: "of users reported brighter and more radiant skin",
   },
]

const Results = () => {
   return (
      <div className="container-px">
         <div className="bg-secondary container-rounded flex flex-col gap-2 p-[16px] lg:flex-row-reverse lg:gap-10">
            <div className="flex flex-col justify-between lg:flex-1">
               <div>
                  <h1 className={`${schnyderMlightFont.className} text-title`}>
                     Clinical Results
                  </h1>

                  <div className="mt-3 hidden flex-col gap-4 lg:flex ">
                     <p className="text-p">
                        Major Fade Solution System is clinically proven to
                        improve skin tone.*
                     </p>

                     <p className="text-p">
                        *Based on an independent clinical and consumer
                        perception study of 29 subjects after 8 weeks using the
                        Major Fade Solution System
                     </p>
                  </div>
               </div>

               <div className="mt-5 flex flex-col gap-2">
                  {results.map((result) => (
                     <div
                        className="container-rounded flex items-center gap-2 bg-white p-[8px] md:p-[16px]"
                        key={nanoid()}
                     >
                        <div className="flex-center flex h-[45px] w-[45px] rounded-lg bg-gradient-to-r from-pink-400 to-pink-600 px-[20px] text-[14px] text-white md:rounded-full md:text-[16px]">
                           <span>{result.percentage}</span>
                        </div>
                        <p className="text-[14px] md:text-[16px]">
                           {result.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 lg:mt-0 lg:flex-1">
               <div className="relative pt-[50%]">
                  <Image
                     height={0}
                     width={0}
                     sizes="100vw"
                     src="/imagesResults/one-week.webp"
                     alt="one-week"
                     className=" container-rounded absolute bottom-0 right-0 h-full w-full object-cover "
                  />

                  <div className="flex-center absolute bottom-[20px] right-[20px] flex rounded-full bg-white/70 px-[16px] py-[4px] text-[11px] uppercase text-purple-700 md:text-[16px]">
                     MAJOR FADE WEEK 1
                  </div>
               </div>

               <div className="relative pt-[50%]">
                  <Image
                     height={0}
                     width={0}
                     sizes="100vw"
                     src="/imagesResults/eight-weeks.webp"
                     alt="eight-weeks"
                     className=" container-rounded absolute bottom-0 right-0 h-full w-full object-cover "
                  />
                  <div className="flex-center absolute bottom-[20px] right-[20px]  flex rounded-full bg-white/70 px-[16px] py-[4px] text-[11px] uppercase text-purple-700 md:text-[16px]">
                     MAJOR FADE WEEK 8
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Results
