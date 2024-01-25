"use client"
import { IoIosArrowUp } from "react-icons/io"

import { useCallback, useEffect, useState } from "react"
import Sort from "./components/Sort"
import Rating from "./components/Rating"
import CheckBox from "./components/CheckBox"

import Comment from "../comment/Comment"
import { Review } from "@prisma/client"
import { useAppSelector } from "@/redux/hooks"

const Filter = ({ review }: { review: Review[] }) => {
   const [show, setShow] = useState(true)
   const filterSlice = useAppSelector((state) => state.commentFilterReducer)
   const [filterStars, setFilterStars] = useState<Review[]>([])

   useEffect(() => {
      let filteredReviews = [...review]

      switch (filterSlice.stars) {
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
            filteredReviews = filteredReviews.filter(
               (stars) => stars.rating === filterSlice.stars
            )
            break
         default:
            filteredReviews = filteredReviews.filter((stars) => stars.rating)
      }

      if (filterSlice.mostRecent) {
         filteredReviews.sort(
            (a, b) =>
               new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
         )
      } else if (filterSlice.oldest) {
         filteredReviews.sort(
            (a, b) =>
               new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
         )
      } else if (filterSlice.highestRecent) {
         filteredReviews.sort((a, b) => b.rating - a.rating)
      } else if (filterSlice.lowestRecent) {
         filteredReviews.sort((a, b) => a.rating - b.rating)
      } else if (filterSlice.mostHelpful) {
         filteredReviews.sort((a, b) => b.like - a.like)
      }

      setFilterStars(filteredReviews)
   }, [filterSlice, review])

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

         {filterStars.length > 0 && (
            <div className="mt-5 flex flex-col gap-5">
               {filterStars.map((comment) => (
                  <div key={comment.id}>
                     <Comment review={comment} />
                  </div>
               ))}
            </div>
         )}
      </>
   )
}

export default Filter
