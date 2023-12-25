"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reviewForm } from "@/redux/features/sidebarSlice"

const ButtonForm = () => {
   const dispatch = useAppDispatch()

   return (
      <button
         className="text-p w-full max-w-[600px] rounded-full bg-purple-700 px-[16px] py-[8px] uppercase text-white active:bg-purple-700/90 lg:w-[200px]"
         onClick={() => dispatch(reviewForm(true))}
      >
         write a review
      </button>
   )
}

export default ButtonForm
