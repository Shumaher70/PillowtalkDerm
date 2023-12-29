"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import Button from "./button/Button"
import { recommendAction, stepAction } from "@/redux/features/commentSlice"
import { useState } from "react"
import { FaCheck } from "react-icons/fa6"

const Recommend = () => {
   const [checked, setChecked] = useState(true)
   const [checkedEnter, setCheckedEnter] = useState(false)

   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()

   const leaveHandler = () => {
      setCheckedEnter(false)
   }
   const handlerCheck = () => {
      setChecked((previous) => !previous)
      setCheckedEnter(true)
   }

   return (
      <motion.div
         initial={{
            opacity: 0,
            right: "-600%",
         }}
         animate={{
            opacity: stepSlice === 5 ? 1 : 0,
            right: `${stepSlice * 100 - 500}%`,
         }}
         transition={{ delay: stepSlice === 6 ? 2 : 0, duration: 0.5 }}
         className="flex-center absolute  top-2/4 flex  min-w-full -translate-y-2/4 flex-col"
      >
         <div
            className="flex min-w-max cursor-pointer items-center justify-center gap-2"
            onClick={handlerCheck}
            onMouseLeave={leaveHandler}
         >
            <div className="flex-center relative flex h-[20px] w-[20px] bg-white outline outline-1 outline-gray-100">
               <div
                  className={`checkShadow shadow-2xl] absolute right-0 top-0 h-[20px] w-[20px] rounded-[2px] bg-white transition-all duration-[250ms] ${
                     checkedEnter ? "opacity-1" : "opacity-0"
                  }`}
               />
               <FaCheck
                  className={`bg-accent relative z-[2] h-full w-full !bg-[#F92672] p-[2px] text-white ${
                     checked ? "opacity-1" : "opacity-0"
                  } transition-all duration-[250ms]`}
               />
            </div>
            <p>i recommend this product</p>
         </div>
         <Button
            onClick={() => {
               dispatch(stepAction(7))
               dispatch(recommendAction(checked))
            }}
         >
            submit
         </Button>

         <div className="mt-5 text-center text-[13px] text-gray-700">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
               onClick={() =>
                  window.open("https://policies.google.com/privacy")
               }
               className="cursor-pointer underline"
            >
               Privacy Policy
            </a>{" "}
            and{" "}
            <a
               onClick={() => window.open("https://policies.google.com/terms")}
               className="cursor-pointer underline"
            >
               Terms of Service
            </a>{" "}
            apply.
         </div>
      </motion.div>
   )
}

export default Recommend
