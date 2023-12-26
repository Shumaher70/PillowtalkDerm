"use client"

import { stepAction } from "@/redux/features/commentSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { IoArrowBackCircleOutline } from "react-icons/io5"

const ButtonPrevious = () => {
   const dispatch = useAppDispatch()
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)

   return (
      <div
         className="absolute left-[10px] top-[10px]"
         onClick={() => {
            dispatch(stepAction(stepSlice - 1))
         }}
      >
         <IoArrowBackCircleOutline className="h-[40px] w-[40px] cursor-pointer text-black/50" />
      </div>
   )
}

export default ButtonPrevious
