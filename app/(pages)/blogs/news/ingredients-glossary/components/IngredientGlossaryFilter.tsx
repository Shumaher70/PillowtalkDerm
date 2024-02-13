"use client"

import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import ViewportMotionDivArr from "@/motion/ViewPortMotionDivArr"
import { useState } from "react"
import IngredientCard from "./IngredientCard"
import { ingredientData } from "./ingredientData"

const alphabet = [
   "all",
   "#",
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "z",
]

const IngredientGlossaryFilter = () => {
   const [index, setIndex] = useState(1)
   const [content, setContent] = useState("all")

   return (
      <>
         <ul className="flex gap-2 overflow-x-auto uppercase">
            {alphabet.map((chart, i) => {
               return (
                  <li key={chart}>
                     <button
                        className={`flex-center flex h-[26px] w-[26px] cursor-pointer rounded-full border-[1px] border-purple-300 px-[25px] py-[25px] font-medium uppercase transition-all hover:border-[#f0e8f6] hover:bg-[#f0e8f6] ${
                           i + 1 === index && "bg-accent !border-[#f0e8f6]"
                        }`}
                        onClick={(e) => {
                           setContent(e.currentTarget.textContent as string)
                           setIndex(i + 1)
                        }}
                     >
                        {chart}
                     </button>
                  </li>
               )
            })}
         </ul>

         <ViewportMotionDiv className="mt-5 grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {ingredientData.map(({ title, details, studies }) => (
               <ViewportMotionDivArr key={title}>
                  <IngredientCard
                     title={title}
                     details={details}
                     studies={studies}
                  />
               </ViewportMotionDivArr>
            ))}
         </ViewportMotionDiv>
      </>
   )
}

export default IngredientGlossaryFilter
