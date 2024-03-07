"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"

import {
   recommendAction,
   refreshAction,
   stepAction,
} from "@/redux/features/commentSlice"
import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { reviewForm } from "@/redux/features/sidebarSlice"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"

const Recommend = () => {
   const [test, setTest] = useState("submit")
   const [checked, setChecked] = useState(true)
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const commentSlice = useAppSelector((state) => state.commentSlice.review)
   const dispatch = useAppDispatch()

   const handleUserPost = async () => {
      return await axios
         .post("/api/user", {
            first_name: commentSlice.name,
            last_name: commentSlice.name,
            email: commentSlice.email,
            img: "",
         })
         .then((response) => response.data)
   }

   const handleReviewPost = async () => {
      return await axios
         .post("/api/reviews", {
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
         .then((response) => response.data)
   }

   const {
      mutate: mutateUser,
      isPending: isPendingUser,
      isSuccess: isSuccessUser,
   } = useMutation({
      mutationFn: handleUserPost,
      mutationKey: [commentSlice],
   })

   const {
      mutate: mutateReview,
      isPending: isPendingReview,
      isSuccess: isSuccessReview,
   } = useMutation({
      mutationFn: handleReviewPost,
      mutationKey: [commentSlice],
   })

   useEffect(() => {
      const handleUserKeyPress = async (event: { key: any; keyCode: any }) => {
         const { key } = event

         if (key === "Enter" && stepSlice === 7) {
            dispatch(recommendAction(checked))
            mutateUser()
            mutateReview()
         }
         if (key === "Escape" && stepSlice === 7) {
            dispatch(stepAction(6))
         }
      }

      window.addEventListener("keydown", handleUserKeyPress)
      return () => {
         window.removeEventListener("keydown", handleUserKeyPress)
      }
   }, [checked, dispatch, mutateReview, mutateUser, stepSlice])

   useEffect(() => {
      if (isPendingUser && isPendingReview) {
         setTest("sending...")
      } else if (isSuccessUser && isSuccessReview) {
         setTest("success")
      }
      dispatch(recommendAction(checked))
   }, [
      checked,
      dispatch,
      isPendingReview,
      isPendingUser,
      isSuccessReview,
      isSuccessUser,
   ])

   const handlerCheck = () => {
      setChecked((previous) => !previous)
   }

   if (isSuccessUser && isSuccessReview) {
      setTimeout(() => {
         dispatch(refreshAction())
         dispatch(reviewForm(false))
      }, 1000)
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
         >
            <div className="flex-center relative flex h-[20px] w-[20px] bg-white outline outline-1 outline-gray-100">
               <div
                  className={`checkShadow absolute right-0 top-0 z-10 h-[20px] w-[20px] rounded-[2px] opacity-0 shadow-2xl transition-all duration-[250ms] hover:opacity-[1]`}
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
            disabled={
               (isPendingUser && isPendingReview) ||
               (isSuccessUser && isSuccessReview)
            }
            onClick={() => {
               dispatch(recommendAction(checked))
               mutateUser()
               mutateReview()
            }}
            className={`mt-5 cursor-pointer rounded-full px-[16px] py-[8px] uppercase text-white ${
               (isPendingUser && isPendingReview) ||
               (isSuccessUser && isSuccessReview)
                  ? "opacity-50"
                  : "opacity-1"
            } ${
               isSuccessUser && isSuccessReview
                  ? "!bg-green-500"
                  : "bg-purple-700"
            }`}
         >
            {test}
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
