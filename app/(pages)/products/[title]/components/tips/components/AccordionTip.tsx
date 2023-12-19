"use client"
import { schnyderMlightFont } from "@/app/layout"
import React, { useState } from "react"

const AccordionTip = ({ tips }: { tips: string[] }) => {
   const [elementIndex, setElementIndex] = useState(1)

   return (
      <div className="flex h-full flex-col justify-between gap-5 p-[16px]">
         <h1 className={`${schnyderMlightFont.className} text-title`}>
            Tips from Dr. Idriss
         </h1>
         <div className="min-h-[200px] flex-col rounded-[8px] bg-white p-[16px]">
            <ul className="mb-[30px] flex h-[40px] items-center gap-3 md:h-[60px]">
               {tips.map((_, index) => {
                  return (
                     <li
                        onMouseEnter={() => setElementIndex(index)}
                        key={index}
                        className="h-[40px] md:h-[60px]"
                     >
                        <button
                           className={`flex-center border-1 bg-accent/10 inline-block h-[40px] w-[40px] cursor-pointer rounded-full border-[#cfb6e2] text-center text-[14px] transition-all !duration-[250ms] md:h-[60px] md:w-[60px]
                        md:text-[16px] ${
                           elementIndex === index &&
                           "bg-accent h-[60px] border-none md:h-[80px]"
                        }`}
                        >
                           {index + 1}
                        </button>
                     </li>
                  )
               })}
            </ul>

            <p className="text-[14px] md:text-[16px]">{tips[elementIndex]}</p>
         </div>
      </div>
   )
}

export default AccordionTip
