"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { stepAction, titleReviewAction } from "@/redux/features/commentSlice"
import { useEffect, useState } from "react"

const ReviewTitle = () => {
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()
   const [value, setValue] = useState("")
   const [valid, setValid] = useState(false)
   const closeFormSlice = useAppSelector(
      (state) => state.sidebarReducer.reviewForm
   )
   useEffect(() => {
      if (!closeFormSlice) setValue("")
   }, [closeFormSlice])

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }

   return (
      <motion.div
         initial={{
            opacity: 0,
            right: "-100%",
         }}
         animate={{
            opacity: stepSlice === 3 ? 1 : 0,
            right: `${stepSlice * 100 - 300}%`,
         }}
         transition={{ duration: 0.5 }}
         className="absolute top-2/4  min-w-full -translate-y-2/4"
      >
         <h1 className="mb-[10px] text-[22px] font-bold">
            Enter a title for your review:
         </h1>
         <div>
            <input
               type="text"
               className={`w-full border-b-[1px] border-gray-300 bg-transparent p-3 outline-none ${
                  valid && "border-[1px] border-red-500"
               }`}
               placeholder="Type your title here..."
               onChange={changeHandler}
               value={value}
            />
         </div>
         <Button
            onClick={() => {
               if (value.trim().length > 0) {
                  dispatch(stepAction(4))
                  dispatch(titleReviewAction(value.trim()))
               }
               setValid(value.trim().length === 0 ? true : false)
            }}
         >
            Continue
         </Button>
      </motion.div>
   )
}

export default ReviewTitle
