"use client"

import React, { useRef, useState } from "react"
import { RxMinus, RxPlus } from "react-icons/rx"

import { sanitize } from "isomorphic-dompurify"
import AnimateHeight from "react-animate-height"

const Awards = ({ awards }: { awards: string }) => {
   const sanitizedHtmlAwards = sanitize(awards)

   const [awardsTrigger, setAwardsTrigger] = useState(false)
   const [height, setHeight] = useState<string | number>(0)
   const wrapperDiv = useRef<HTMLDivElement | null>(null)

   return (
      <div className="h-full w-full ">
         <div
            onClick={() => {
               setAwardsTrigger((previous) => !previous)
               setHeight(height === 0 ? "auto" : 0)
            }}
            className="flex w-full cursor-pointer justify-between py-3"
         >
            <button className="text-[14px] font-bold uppercase md:text-[16px]">
               {`Awards`}
            </button>

            {!awardsTrigger && (
               <RxPlus className="bg-accent h-[20px] w-[20px] rounded-full p-[2px] text-purple-700" />
            )}

            {awardsTrigger && (
               <RxMinus className="bg-accent h-[20px] w-[20px] rounded-full p-[2px] text-purple-700" />
            )}
         </div>

         <AnimateHeight
            duration={500}
            height={height as number}
            className="border-b-[1px] border-purple-700"
         >
            <div ref={wrapperDiv} className="awards flex flex-col gap-1">
               <ul
                  dangerouslySetInnerHTML={{ __html: sanitizedHtmlAwards }}
                  className="list-disc pl-10"
               ></ul>
            </div>
         </AnimateHeight>
      </div>
   )
}

export default Awards
