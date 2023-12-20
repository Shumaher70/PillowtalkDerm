"use client"
import { IoIosArrowUp } from "react-icons/io"

import { useState } from "react"
import Sort from "./components/Sort"
import Rating from "./components/Rating"
import CheckBox from "./components/CheckBox"

const Filter = () => {
   const [show, setShow] = useState(true)

   return (
      <div className="mt-5 flex flex-col gap-5">
         <div
            onClick={() => setShow((previous) => !previous)}
            className="flex cursor-pointer items-center gap-1"
         >
            <div className="text-p text-[#6a1ba6]">Sort & Filter</div>
            <IoIosArrowUp
               className={`text-p text-[#6a1ba6] ${!show && "rotate-180"}`}
            />
         </div>

         <div className={`filter ${show ? "flex" : "!hidden"} gap-5`}>
            <Sort />
            <Rating />
            <CheckBox />
         </div>
      </div>
   )
}

export default Filter
