"use client"

import { useState } from "react"

const Sort = () => {
   const [select, setSelect] = useState("Most recent")

   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelect(event.currentTarget.value)
   }

   return (
      <div className="relative w-full">
         <select
            onChange={changeHandler}
            className="relative w-full rounded-[10px] bg-white p-1 pt-[20px]"
         >
            <option value="Most recent">Most recent</option>
            <option value="Oldest">Oldest</option>
            <option value="Highest rated">Highest rated</option>
            <option value="Lowest rated">Lowest rated</option>
            <option value="Most helpful">Most helpful</option>
         </select>
         <div className="absolute left-2 top-[2px] text-[14px]">Sort by</div>
      </div>
   )
}

export default Sort
