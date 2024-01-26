"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { reviewAction, stepAction } from "@/redux/features/commentSlice"
import { useCallback, useEffect, useRef, useState } from "react"
import useStepFocus from "@/app/hooks/useStepFocus"

const Review = () => {
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()
   const closeFormSlice = useAppSelector(
      (state) => state.sidebarReducer.reviewForm
   )
   const [value, setValue] = useState("")
   const [valid, setValid] = useState(false)
   const refInput = useRef<HTMLTextAreaElement>(null)

   const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.currentTarget.value)
   }
   useStepFocus(stepSlice, 2, refInput, 600)

   const handleUserKeyPress = useCallback(
      (event: { key: any; keyCode: any }) => {
         const { key } = event

         if (key === "Enter" && stepSlice === 2) {
            if (value.trim().length > 0) {
               dispatch(stepAction(3))
               dispatch(reviewAction(value.trim()))
            }
            setValid(value.trim().length === 0 ? true : false)
         }
         if (key === "Escape" && stepSlice === 2) {
            dispatch(stepAction(1))
         }
      },
      [dispatch, stepSlice, value]
   )

   useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress)
      return () => {
         window.removeEventListener("keydown", handleUserKeyPress)
      }
   }, [handleUserKeyPress])

   useEffect(() => {
      if (!closeFormSlice) setValue("")
   }, [closeFormSlice])

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
               ref={refInput}
               className={`h-[150px] w-full border-b-[1px] border-gray-300 bg-transparent p-3 outline-none ${
                  valid && "border-[1px] border-red-500"
               }`}
               placeholder="Type your review here..."
               onChange={changeHandler}
               value={value}
               maxLength={500}
            />
         </div>
         <Button
            onClick={() => {
               if (value.trim().length > 0) {
                  dispatch(stepAction(3))
                  dispatch(reviewAction(value.trim()))
               }

               setValid(value.trim().length === 0 ? true : false)
            }}
         >
            Continue
         </Button>
      </motion.div>
   )
}

export default Review
