"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { stepAction, titleReviewAction } from "@/redux/features/commentSlice"
import { useState } from "react"

const ReviewTitle = () => {
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()
   const [value, setValue] = useState("")

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
         <h1 className="mb-[10px] text-[26px] font-bold">
            Enter a title for your review:
         </h1>
         <div>
            <input
               type="text"
               className=" w-full border-b-[1px] border-gray-300 bg-transparent p-3"
               placeholder="Type your title here..."
               onChange={changeHandler}
               value={value}
            />
         </div>
         <Button
            onClick={() => {
               dispatch(stepAction(4))
               dispatch(titleReviewAction(value))
            }}
         >
            Continue
         </Button>
      </motion.div>
   )
}

export default ReviewTitle
