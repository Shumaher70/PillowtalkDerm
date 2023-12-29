"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { reviewAction, stepAction } from "@/redux/features/commentSlice"
import { useState } from "react"

const Review = () => {
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()
   const [value, setValue] = useState("")

   const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.currentTarget.value)
   }

   return (
      <motion.div
         initial={{
            opacity: 0,
            right: "-100%",
         }}
         animate={{
            opacity: stepSlice === 2 ? 1 : 0,
            right: `${stepSlice * 100 - 200}%`,
         }}
         transition={{ delay: stepSlice === 2 ? 0.5 : 0, duration: 0.5 }}
         className="absolute top-2/4  min-w-full -translate-y-2/4"
      >
         <h1 className="mb-[10px] text-[22px] font-bold">Enter your review:</h1>
         <div>
            <textarea
               className="h-[150px] w-full border-b-[1px] border-gray-300 bg-transparent p-3"
               placeholder="Type your review here..."
               onChange={changeHandler}
               value={value}
            />
         </div>
         <Button
            onClick={() => {
               dispatch(stepAction(3))
               dispatch(reviewAction(value))
            }}
         >
            Continue
         </Button>
      </motion.div>
   )
}

export default Review
