"use client"

import { starsAction } from "@/redux/features/commentFilterSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"

const Rating = () => {
   const dispatch = useAppDispatch()

   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(starsAction(Number(event.currentTarget.value)))
   }

   return (
      <div className="relative w-full">
         <select
            onChange={changeHandler}
            className="relative w-full rounded-[10px] bg-white p-1 pt-[20px]"
         >
            <option value="0">All</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
         </select>
         <div className="absolute left-2 top-[2px] text-[14px]">Rating</div>
      </div>
   )
}

export default Rating
