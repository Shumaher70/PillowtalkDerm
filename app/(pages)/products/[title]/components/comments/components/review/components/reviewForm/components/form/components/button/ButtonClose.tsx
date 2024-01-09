"use client"

import { refreshAction } from "@/redux/features/commentSlice"
import { reviewForm } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import axios from "axios"
import { IoCloseCircle } from "react-icons/io5"

const ButtonClose = () => {
   const dispatch = useAppDispatch()
   const imagesKeySlice = useAppSelector(
      (state) => state.commentSlice.review.imageKey as string[]
   )

   return (
      <div
         className="absolute right-[10px] top-[10px] md:-right-[13px] md:-top-[13px]"
         onClick={async () => {
            dispatch(reviewForm(false))
            dispatch(refreshAction())
            if (imagesKeySlice.length > 0) {
               await axios.delete("http://localhost:3000/api/uploadthing", {
                  data: {
                     url: imagesKeySlice,
                  },
               })
            }
         }}
      >
         <IoCloseCircle className="h-[40px] w-[40px] cursor-pointer text-black/50" />
      </div>
   )
}

export default ButtonClose
