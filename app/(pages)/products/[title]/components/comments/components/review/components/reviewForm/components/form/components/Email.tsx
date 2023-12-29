"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { emailAction, stepAction } from "@/redux/features/commentSlice"
import { useState } from "react"

const Email = () => {
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
            right: "-500%",
         }}
         animate={{
            opacity: stepSlice === 5 ? 1 : 0,
            right: `${stepSlice * 100 - 500}%`,
         }}
         transition={{ delay: stepSlice === 2 ? 0.5 : 0, duration: 0.5 }}
         className="absolute top-2/4  min-w-full -translate-y-2/4"
      >
         <h1 className="mb-[10px] text-[22px] font-bold">Enter your Email:</h1>
         <div>
            <input
               className="w-full border-b-[1px] border-gray-300 bg-transparent p-3"
               placeholder="Type your emile here..."
               onChange={changeHandler}
               type="email"
               value={value}
            />
         </div>
         <Button
            onClick={() => {
               dispatch(stepAction(6))
               dispatch(emailAction(value))
            }}
         >
            Continue
         </Button>
      </motion.div>
   )
}

export default Email
