"use client"

import { useState } from "react"

const Rating = () => {
   const [select, setSelect] = useState("All")

   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelect(event.currentTarget.value)
   }

   return (
      <div className="relative w-full">
         <select
            onChange={changeHandler}
            className="relative w-full rounded-[10px] bg-white p-1 pt-[20px]"
         >
            <option value="All">All</option>
            <option value="1 star">1 star</option>
            <option value="2 stars">2 stars</option>
            <option value="3 stars">3 stars</option>
            <option value="4 stars">4 stars</option>
            <option value="5 stars">5 stars</option>
         </select>
         <div className="absolute left-2 top-[2px] text-[14px]">Rating</div>
      </div>
   )
}

export default Rating
