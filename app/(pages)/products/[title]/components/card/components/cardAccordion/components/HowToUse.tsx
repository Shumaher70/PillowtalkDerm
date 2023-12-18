"use client"

import React, { useRef, useState } from "react"
import { RxMinus, RxPlus } from "react-icons/rx"

import { sanitize } from "isomorphic-dompurify"
import AnimateHeight from "react-animate-height"

const HowToUse = ({ howToUse }: { howToUse: string }) => {
   const sanitizedHtmlHowToUse = sanitize(howToUse)
   const [howToUseTrigger, setHowToUseTrigger] = useState(false)
   const [height, setHeight] = useState<string | number>(0)
   const wrapperDiv = useRef<HTMLDivElement | null>(null)

   return (
      <div className="h-full w-full">
         <div
            onClick={() => {
               setHowToUseTrigger((previous) => !previous)
               setHeight(height === 0 ? "auto" : 0)
            }}
            className="flex w-full cursor-pointer  justify-between py-3"
         >
            <button className="text-[14px] font-bold uppercase md:text-[16px]">
               {`how to use`}
            </button>

            {!howToUseTrigger && (
               <RxPlus className="bg-accent h-[20px] w-[20px] rounded-full p-[2px] text-purple-700" />
            )}

            {howToUseTrigger && (
               <RxMinus className="bg-accent h-[20px] w-[20px] rounded-full p-[2px] text-purple-700" />
            )}
         </div>

         <AnimateHeight
            duration={500}
            height={height as number}
            className="border-b-[1px] border-purple-700"
         >
            <div
               ref={wrapperDiv}
               className={`howToUse } flex flex-col
            gap-1`}
            >
               <ul
                  dangerouslySetInnerHTML={{ __html: sanitizedHtmlHowToUse }}
                  className="list-disc pl-10 "
               ></ul>
            </div>
         </AnimateHeight>
      </div>
   )
}

export default HowToUse
