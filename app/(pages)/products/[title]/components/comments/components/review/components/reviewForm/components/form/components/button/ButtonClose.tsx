"use client"

import { refreshAction } from "@/redux/features/commentSlice"
import { reviewForm } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useCallback, useEffect } from "react"
import { IoCloseCircle } from "react-icons/io5"

const handleDelete = async (imagesKey: string[]) => {
   await await axios.delete("/api/uploadthing", {
      data: {
         url: imagesKey,
      },
   })
}

const ButtonClose = () => {
   const dispatch = useAppDispatch()
   const imagesKeySlice = useAppSelector(
      (state) => state.commentSlice.review.imageKey as string[]
   )

   const { mutate } = useMutation({
      mutationFn: handleDelete,
   })

   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const handleUserKeyPress = useCallback(
      (event: { key: any; keyCode: any }) => {
         const { key } = event

         if (key === "Escape" && stepSlice === 1) {
            dispatch(reviewForm(false))
            dispatch(refreshAction())
            if (imagesKeySlice.length > 0) {
               mutate(imagesKeySlice)
            }
         }
      },
      [dispatch, imagesKeySlice, mutate, stepSlice]
   )

   useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress)
      return () => {
         window.removeEventListener("keydown", handleUserKeyPress)
      }
   }, [handleUserKeyPress])

   return (
      <div
         className="absolute right-[10px] top-[10px] md:-right-[13px] md:-top-[13px]"
         onClick={() => {
            dispatch(reviewForm(false))
            dispatch(refreshAction())
            if (imagesKeySlice.length > 0) {
               mutate(imagesKeySlice)
            }
         }}
      >
         <IoCloseCircle className="h-[40px] w-[40px] cursor-pointer text-black/50" />
      </div>
   )
}

export default ButtonClose
