"use client"

import { reviewForm } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { IoCloseCircle } from "react-icons/io5"
import { IoArrowBackCircleOutline } from "react-icons/io5"

import { motion } from "framer-motion"

import Stars from "./components/Stars"
import { refreshAction, stepAction } from "@/redux/features/commentSlice"

const Form = () => {
   const formSlice = useAppSelector((state) => state.sidebarReducer.reviewForm)
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const dispatch = useAppDispatch()

   return (
      <>
         {formSlice && (
            <div className="flex-center fixed z-20 flex h-full w-full">
               <div className="container-rounded  flex-center relative flex h-[90vh] w-full  max-w-[678px] bg-white">
                  <div className="flex w-full max-w-[550px] px-[30px]">
                     <motion.div
                        initial={{ opacity: 1, translateX: 0 }}
                        animate={{
                           opacity: stepSlice > 1 ? 0 : 1,
                           translateX: stepSlice > 1 ? "-100%" : 0,
                        }}
                        transition={{ delay: 0.5 }}
                        className="h-full w-full"
                     >
                        <h1 className="mb-[10px] text-[26px] font-bold">
                           Select a rating:
                        </h1>
                        <Stars />
                     </motion.div>
                  </div>

                  <div
                     className="absolute right-[10px] top-[10px] md:-right-[13px] md:-top-[13px]"
                     onClick={() => {
                        dispatch(reviewForm(false))
                        dispatch(refreshAction())
                     }}
                  >
                     <IoCloseCircle className="h-[40px] w-[40px] cursor-pointer text-black/50" />
                  </div>

                  {stepSlice > 1 && (
                     <div
                        className="absolute left-[10px] top-[10px] md:-left-[13px] md:-top-[13px]"
                        onClick={() => {
                           dispatch(stepAction(stepSlice - 1))
                        }}
                     >
                        <IoArrowBackCircleOutline className="h-[40px] w-[40px] cursor-pointer text-black/50" />
                     </div>
                  )}
               </div>
            </div>
         )}
      </>
   )
}

export default Form
