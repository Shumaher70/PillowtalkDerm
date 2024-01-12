"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"

import { recommendAction, refreshAction } from "@/redux/features/commentSlice"
import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { reviewForm } from "@/redux/features/sidebarSlice"
import axios from "axios"

const Recommend = () => {
   const [text, setText] = useState("submit")
   const [checked, setChecked] = useState(true)
   const [checkedEnter, setCheckedEnter] = useState(false)

   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const commentSlice = useAppSelector((state) => state.commentSlice.review)
   const dispatch = useAppDispatch()

   const leaveHandler = () => {
      setCheckedEnter(false)
   }
   const handlerCheck = () => {
      setChecked((previous) => !previous)
      setCheckedEnter(true)
   }

   useEffect(() => {
      dispatch(recommendAction(checked))
   }, [checked, dispatch])

   const handlerTextSubmit = () => {
      setText("loading...")

      setTimeout(() => {
         setText("success!")
      }, 1900)
      setTimeout(() => {
         dispatch(reviewForm(false))
         dispatch(refreshAction())
      }, 2000)
   }

   return (
      <motion.div
         initial={{
            opacity: 0,
            right: "-700%",
         }}
         animate={{
            opacity: stepSlice === 7 ? 1 : 0,
            right: `${stepSlice * 100 - 700}%`,
         }}
         className=" flex-center absolute top-2/4 flex h-[170px] min-w-full -translate-y-2/4 flex-col"
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
         <button
            onClick={async () => {
               dispatch(recommendAction(checked))

               handlerTextSubmit()

               await axios.post("/api/user", {
                  first_name: commentSlice.name,
                  last_name: commentSlice.name,
                  email: commentSlice.email,
                  img: "",
               })

               await axios.post("/api/reviews", {
                  rating: commentSlice.stars,
                  title: commentSlice.titleReview,
                  comment: commentSlice.review,
                  images: commentSlice.imageUrl,
                  imagesKey: commentSlice.imageKey,
                  name: commentSlice.name,
                  productId: commentSlice.productId,
                  recommend: commentSlice.recommend,
                  email: commentSlice.email,
               })
            }}
            className="mt-5 cursor-pointer rounded-full bg-purple-700 px-[16px] py-[8px] uppercase text-white"
         >
            {text}
         </button>

         <div className="absolute -bottom-[20px] mt-10 w-full max-w-[470px] text-center text-[13px] text-gray-700">
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
