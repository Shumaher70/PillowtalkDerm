"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { stepAction, titleReviewAction } from "@/redux/features/commentSlice"
import { useCallback, useEffect, useRef, useState } from "react"
import useStepFocus from "@/app/hooks/useStepFocus"

const ReviewTitle = () => {
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()
   const [value, setValue] = useState("")
   const [valid, setValid] = useState(false)
   const refInput = useRef<HTMLInputElement>(null)
   const closeFormSlice = useAppSelector(
      (state) => state.sidebarReducer.reviewForm
   )

   const handleUserKeyPress = useCallback(
      (event: { key: any; keyCode: any }) => {
         const { key } = event

         if (key === "Enter" && stepSlice === 3) {
            if (value.trim().length > 0) {
               dispatch(stepAction(4))
               dispatch(titleReviewAction(value.trim()))
            }
            setValid(value.trim().length === 0 ? true : false)
         }
         if (key === "Escape" && stepSlice === 3) {
            dispatch(stepAction(2))
         }
      },
      [dispatch, stepSlice, value]
   )
   useStepFocus(stepSlice, 3, refInput, 600)

   useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress)
      return () => {
         window.removeEventListener("keydown", handleUserKeyPress)
      }
   }, [handleUserKeyPress])

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
               ref={refInput}
               type="text"
               className={`w-full border-b-[1px] border-gray-300 bg-transparent p-3 outline-none ${
                  valid && "border-[1px] border-red-500"
               }`}
               placeholder="Type your title here..."
               onChange={changeHandler}
               value={value}
               maxLength={100}
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
