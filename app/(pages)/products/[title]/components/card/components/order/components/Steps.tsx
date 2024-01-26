"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

interface StepsProps {
   steps: string | null
}

const Steps = ({ steps }: StepsProps) => {
   const [active, setActive] = useState({
      one: steps === "1",
      two: steps === "2",
      three: steps === "3",
   })
   const route = useRouter()

   return (
      <div className="flex w-full gap-2">
         <div
            className={`flex-center flex cursor-pointer rounded-full border-2 border-[#f0e8f6] px-[16px] py-[8px] md:py-[11px] ${
               active.one ? "w-full bg-[#f0e8f6]" : "w-auto bg-transparent"
            }`}
            onClick={() => {
               route.push("/products/major-fade-flash-mask")
            }}
         >
            {`${active.one ? "STEP 1" : 1}`}
         </div>

         <div
            className={`flex-center flex cursor-pointer rounded-full border-2 border-[#f0e8f6] px-[16px] py-[8px] md:py-[11px] ${
               active.two ? "w-full bg-[#f0e8f6]" : "w-auto bg-transparent"
            }`}
            onClick={() => {
               route.push("/products/major-fade-hyper-serum")
            }}
         >
            {`${active.two ? "STEP 2" : 2}`}
         </div>

         <div
            className={`flex-center flex cursor-pointer rounded-full border-2 border-[#f0e8f6] px-[16px] py-[8px] md:py-[11px] ${
               active.three ? "w-full bg-[#f0e8f6]" : "w-auto bg-transparent"
            }`}
            onClick={() => {
               route.push("/products/major-fade-active-seal-moisturizer")
            }}
         >
            {`${active.three ? "STEP 3" : 3}`}
         </div>
      </div>
   )
}

export default Steps
