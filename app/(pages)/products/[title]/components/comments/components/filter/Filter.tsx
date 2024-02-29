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
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"

const Filter = ({ id }: { id: string }) => {
   const filterSlice = useAppSelector((state) => state.commentFilterReducer)

   const [show, setShow] = useState(true)
   const dispatch = useAppDispatch()

   const getFilter = async () => {
      await axios
         .get(
            `/api/reviewsFilter?sort=${filterSlice.sort}&media=${filterSlice.media}&stars=${filterSlice.stars}&take=${filterSlice.take}&id=${id}`
         )
         .then((response) => {
            dispatch(dataReviewAction(response.data))
         })
   }

   const { isLoading } = useQuery({
      queryKey: [
         filterSlice.sort,
         filterSlice.media,
         filterSlice.stars,
         filterSlice.take,
      ],
      queryFn: getFilter,
   })

   return (
      <>
         {filterSlice.review?.length! > 0 && (
            <>
               <div className="flex flex-col gap-5">
                  <div
                     onClick={() => setShow((previous) => !previous)}
                     className="flex cursor-pointer items-center gap-1"
                  >
                     <div className="text-p text-[#6a1ba6]">Sort & Filter</div>
                     <IoIosArrowUp
                        className={`text-p text-[#6a1ba6] ${
                           !show && "rotate-180"
                        }`}
                     />
                  </div>

                  <div className={`filter ${show ? "flex" : "!hidden"} gap-5`}>
                     <Sort />
                     <Rating />
                     <CheckBox />
                  </div>
               </div>

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
                  {filterSlice.review?.length! > 4 && (
                     <div className="flex-center flex w-full">
                        <button
                           className="rounded-full bg-purple-700 px-[20px] py-[5px] uppercase text-white"
                           onClick={() => dispatch(takeAction())}
                        >
                           see more reviews
                        </button>
                     </div>
                  )}
               </div>
            </>
         )}

         {filterSlice.review?.length === 0 && (
            <>
               <div className="flex-center mt-10 flex w-full">
                  <Image
                     width={0}
                     height={0}
                     sizes="100vw"
                     src={"/imagesNoComment/noComment.png"}
                     alt="waiting"
                     className="w-[30%] object-cover"
                  />
               </div>
            </>
         )}
      </>
   )
}

export default Filter
