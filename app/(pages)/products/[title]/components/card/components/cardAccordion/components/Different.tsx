"use client"

import React, { useRef, useState } from "react"
import { RxMinus, RxPlus } from "react-icons/rx"

import { sanitize } from "isomorphic-dompurify"
import AnimateHeight from "react-animate-height"

const Different = ({ different }: { different: string }) => {
   const sanitizedHtmlDifferent = sanitize(different)

   const [differentTrigger, setDifferentTrigger] = useState(true)
   const [height, setHeight] = useState<string | number>("auto")
   const wrapperDiv = useRef<HTMLDivElement | null>(null)

   return (
      <div className="h-full w-full ">
         <div
            onClick={() => {
               setDifferentTrigger((previous) => !previous)
               setHeight(height === 0 ? "auto" : 0)
            }}
            className="flex w-full cursor-pointer justify-between  py-3"
         >
            <button className="text-[14px] font-bold uppercase md:text-[16px]">
               {`why it's different`}
            </button>

            {!differentTrigger && (
               <RxPlus className="bg-accent h-[20px] w-[20px] rounded-full p-[2px] text-purple-700" />
            )}

            {differentTrigger && (
               <RxMinus className="bg-accent h-[20px] w-[20px] rounded-full p-[2px] text-purple-700" />
            )}
         </div>
         <AnimateHeight
            ref={wrapperDiv}
            duration={500}
            height={height as number}
            className="border-b-[1px] border-purple-700"
         >
            <div
               dangerouslySetInnerHTML={{ __html: sanitizedHtmlDifferent }}
               className={`different flex  flex-col gap-1 `}
            ></div>
         </AnimateHeight>
      </div>
   )
}

export default Different
