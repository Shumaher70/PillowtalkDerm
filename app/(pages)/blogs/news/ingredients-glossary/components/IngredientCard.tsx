"use client"

import { MotionDiv } from "@/app/components/motion/MotionDiv"
import Link from "next/link"
import { useLayoutEffect, useRef, useState } from "react"

interface IngredientCardProps {
   title: string
   details?: string
   studies?: string[]
}

const IngredientCard = ({ title, details, studies }: IngredientCardProps) => {
   const detailsRef = useRef<HTMLDivElement>(null)
   const studiesRef = useRef<HTMLDivElement>(null)

   const [trigger, setTrigger] = useState({
      details: true,
      studies: false,
   })

   const [dimensions, setDimensions] = useState({
      detailsHeight: 0,
      studiosHeight: 0,
   })

   useLayoutEffect(() => {
      if (detailsRef.current && studiesRef.current) {
         setDimensions({
            detailsHeight: detailsRef.current.offsetHeight,
            studiosHeight: studiesRef.current.offsetHeight,
         })
      }
   }, [])

   return (
      <div className="container-rounded flex h-full min-h-[450px] flex-grow flex-col overflow-hidden">
         <div className="container-rounded-t bg-accent flex flex-1 flex-col justify-end p-5 text-[20px] md:text-[32px]">
            <h3 className="mb-2 leading-10 md:mb-2">{title}</h3>
         </div>

         <div className="container-rounded relative -top-5 flex-1 bg-white p-5">
            <div className="flex gap-2">
               {details && (
                  <button
                     onClick={() => {
                        setTrigger({
                           details: true,
                           studies: false,
                        })
                     }}
                     className={`flex-center flex rounded-full border-[1px] border-purple-300 px-4 py-2 text-[14px] uppercase ${
                        trigger.details && "!border-[#f0e8f6] bg-[#f0e8f6]"
                     }`}
                  >
                     details
                  </button>
               )}

               {studies && (
                  <button
                     onClick={() => {
                        setTrigger({
                           details: false,
                           studies: true,
                        })
                     }}
                     className={`flex-center flex rounded-full border-[1px] border-purple-300 px-4 py-2 text-[14px] uppercase ${
                        trigger.studies && "!border-[#f0e8f6] bg-[#f0e8f6]"
                     }`}
                  >
                     clinical studies
                  </button>
               )}
            </div>

            <MotionDiv
               className="relative mt-5 flex-col overflow-hidden"
               animate={{
                  height: `${
                     trigger.details
                        ? `${dimensions.detailsHeight}px`
                        : `${dimensions.studiosHeight}px`
                  }`,
               }}
            >
               <MotionDiv
                  className="absolute transition-all ease-out"
                  ref={detailsRef}
                  animate={{
                     opacity: `${trigger.details ? 1 : 0}`,
                     bottom: trigger.details
                        ? `${0}px`
                        : `${dimensions.detailsHeight}px`,
                  }}
               >
                  {details}
               </MotionDiv>

               <MotionDiv
                  ref={studiesRef}
                  animate={{
                     opacity: `${trigger.studies ? 1 : 0}`,
                     bottom: trigger.studies
                        ? "0px"
                        : `-${dimensions.studiosHeight}px`,
                  }}
                  className={`absolute flex w-full flex-col gap-1 break-words text-[18px] font-medium transition-all ease-out`}
               >
                  {studies?.map((item) => (
                     <Link
                        className="cursor-pointer underline hover:no-underline"
                        key={item}
                        href={`/${item}`}
                     >
                        {item}
                     </Link>
                  ))}
               </MotionDiv>
            </MotionDiv>
         </div>
      </div>
   )
}

export default IngredientCard
