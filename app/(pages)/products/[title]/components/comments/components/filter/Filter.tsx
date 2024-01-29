"use client"
import { IoIosArrowUp } from "react-icons/io"

import { useEffect, useState } from "react"
import Sort from "./components/Sort"
import Rating from "./components/Rating"
import CheckBox from "./components/CheckBox"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import axios from "axios"
import Comment from "../comment/Comment"
import {
   dataReviewAction,
   takeAction,
} from "@/redux/features/commentFilterSlice"

import { ImSpinner8 } from "react-icons/im"

const Filter = ({ id }: { id: string }) => {
   const filterSlice = useAppSelector((state) => state.commentFilterReducer)
   const [isLoading, setIsLoading] = useState(false)
   const [show, setShow] = useState(true)
   const dispatch = useAppDispatch()

   useEffect(() => {
      let subscribe = true
      const getFilter = async () => {
         setIsLoading(true)
         await axios
            .get(
               `http://localhost:3000/api/reviewsFilter?sort=${filterSlice.sort}&media=${filterSlice.media}&stars=${filterSlice.stars}&take=${filterSlice.take}&id=${id}`
            )
            .then((response) => {
               dispatch(dataReviewAction(response.data))
            })
            .catch(() => {
               throw new Error(
                  "something wrong with fetching data filter review"
               )
            })
            .finally(() => setIsLoading(false))
      }
      if (subscribe) {
         getFilter()
      }
      return () => {
         subscribe = false
      }
   }, [
      dispatch,
      filterSlice.media,
      filterSlice.sort,
      filterSlice.stars,
      filterSlice.take,
      id,
   ])

   return (
      <>
         <div className="flex flex-col gap-5">
            <div
               onClick={() => setShow((previous) => !previous)}
               className="flex cursor-pointer items-center gap-1"
            >
               <div className="text-p text-[#6a1ba6]">Sort & Filter</div>
               <IoIosArrowUp
                  className={`text-p text-[#6a1ba6] ${!show && "rotate-180"}`}
               />
            </div>

            <div className={`filter ${show ? "flex" : "!hidden"} gap-5`}>
               <Sort />
               <Rating />
               <CheckBox />
            </div>
         </div>

         {filterSlice.review?.length! > 0 && (
            <div className="mt-5 flex flex-col gap-5">
               {!isLoading && (
                  <>
                     {filterSlice.review?.map((comment) => (
                        <div key={comment.id}>
                           <Comment review={comment} />
                        </div>
                     ))}
                  </>
               )}
               {isLoading && (
                  <div className="flex-center flex w-full">
                     <div className="flex-center flex gap-x-2 bg-black/40 p-2 px-5">
                        <p className="text-[20px] text-white">Loading...</p>
                        <ImSpinner8 className="h-[20px] w-[20px] animate-spin text-white" />
                     </div>
                  </div>
               )}
               <div className="flex-center flex w-full">
                  <button
                     className="rounded-full bg-purple-700 px-[20px] py-[5px] uppercase text-white"
                     onClick={() => dispatch(takeAction())}
                  >
                     see more reviews
                  </button>
               </div>
            </div>
         )}
      </>
   )
}

export default Filter
