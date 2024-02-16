"use client"

import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import { useMemo, useState } from "react"
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

   const chartData = useMemo(
      () =>
         ingredientData.map((item) => item.title.charAt(0).toLocaleLowerCase()),
      []
   )

   const filterDate = useMemo(() => {
      if (content === "all") return ingredientData
      if (content === "#")
         return ingredientData.filter((item) => /\d/.test(item.title[0]))
      return ingredientData.filter(
         (item) => item.title[0].toLowerCase() === content
      )
   }, [content])

   const uniqChartData = chartData.filter(function (x, i, a) {
      return a.indexOf(x) == i
   })

   const handleClick = (chart: string, i: number) => {
      setContent(chart)
      setIndex(i + 1)
   }

   return (
      <>
         <ul className="flex gap-2 overflow-x-auto py-2 uppercase">
            {alphabet.map((chart, i) => {
               return (
                  <li
                     key={chart}
                     className={`${
                        !uniqChartData.includes(chart) &&
                        i !== 0 &&
                        i !== 1 &&
                        "pointer-events-none opacity-50"
                     }`}
                  >
                     <button
                        className={`flex-center flex h-[26px] w-[26px] cursor-pointer rounded-full border-[1px] border-purple-300 px-[25px] py-[25px] font-medium uppercase transition-all hover:border-[#f0e8f6] hover:bg-[#f0e8f6] ${
                           i + 1 === index && "bg-accent !border-[#f0e8f6]"
                        }`}
                        onClick={() => handleClick(chart, i)}
                     >
                        {chart}
                     </button>
                  </li>
               )
            })}
         </ul>

         <ViewportMotionDiv className="mt-5 grid h-full w-full grid-cols-1 gap-3 md:gap-5 lg:grid-cols-3">
            {filterDate.map(({ title, details, studies }) => (
               <div key={title}>
                  <IngredientCard
                     title={title}
                     details={details}
                     studies={studies}
                  />
               </div>
            ))}
         </ViewportMotionDiv>
      </>
   )
}

export default IngredientGlossaryFilter
