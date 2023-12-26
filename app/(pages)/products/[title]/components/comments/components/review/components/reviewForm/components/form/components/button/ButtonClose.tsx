"use client"

import { refreshAction } from "@/redux/features/commentSlice"
import { reviewForm } from "@/redux/features/sidebarSlice"
import { useAppDispatch } from "@/redux/hooks"
import { IoCloseCircle } from "react-icons/io5"

const ButtonClose = () => {
   const dispatch = useAppDispatch()

   return (
      <div
         className="absolute right-[10px] top-[10px] md:-right-[13px] md:-top-[13px]"
         onClick={() => {
            dispatch(reviewForm(false))
            dispatch(refreshAction())
         }}
      >
         <IoCloseCircle className="h-[40px] w-[40px] cursor-pointer text-black/50" />
      </div>
   )
}

export default ButtonClose
