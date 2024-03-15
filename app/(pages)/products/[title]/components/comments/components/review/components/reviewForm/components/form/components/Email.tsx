"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { emailAction, stepAction } from "@/redux/features/commentSlice"
import { useCallback, useEffect, useRef, useState } from "react"
import useStepFocus from "@/app/hooks/useStepFocus"
import { z } from "zod"

const Email = () => {
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()
   const [validation, setValidation] = useState(true)
   const [value, setValue] = useState("")

   const refInput = useRef<HTMLInputElement>(null)
   const closeFormSlice = useAppSelector(
      (state) => state.sidebarReducer.reviewForm
   )

   const emailSchema = z
      .string()
      .min(2, "Password must be at least 2 characters long")
      .email("Invalid e-mail format")

   const handleUserKeyPress = useCallback(
      (event: { key: any; keyCode: any }) => {
         const { key } = event

         if (key === "Enter" && stepSlice === 6) {
            if (validation) {
               dispatch(stepAction(7))
               dispatch(emailAction(value))
            }
         }
         if (key === "Escape" && stepSlice === 6) {
            dispatch(stepAction(5))
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch, stepSlice, value]
   )

   useStepFocus(stepSlice, 6, refInput, 600)

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
      setValidation(emailSchema.safeParse(e.currentTarget.value).success)
   }

   return (
      <motion.div
         initial={{
            opacity: 0,
            right: "-600%",
         }}
         animate={{
            opacity: stepSlice === 6 ? 1 : 0,
            right: `${stepSlice * 100 - 600}%`,
         }}
         transition={{ duration: 0.5 }}
         className="absolute top-2/4  min-w-full -translate-y-2/4"
      >
         <h1 className="mb-[10px] text-[22px] font-bold">Enter your Email:</h1>
         <div className="relative">
            <input
               ref={refInput}
               type="email"
               className={`w-full border-b-[1px] border-gray-300 bg-transparent p-3 outline-none ${
                  !validation && "border-[1px] border-red-500"
               }`}
               placeholder="Type your title here..."
               onChange={changeHandler}
               value={value}
               maxLength={50}
            />
         </div>
         <Button
            onClick={() => {
               if (validation) {
                  dispatch(stepAction(7))
                  dispatch(emailAction(value.trim()))

                  setValidation(emailSchema.safeParse(value).success)
               }
            }}
         >
            Continue
         </Button>
      </motion.div>
   )
}

export default Email
