"use client"
import { starsAction, stepAction } from "@/redux/features/commentSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { IoMdStarOutline } from "react-icons/io"
import { IoMdStar } from "react-icons/io"

const Stars = () => {
   const dispatch = useAppDispatch()
   const starsSlice = useAppSelector((state) => state.commentSlice.review.stars)
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step)

   let stars = []

   for (let i = 0; i < 5; i++) {
      if (i < starsSlice!) {
         stars.push(<IoMdStar className="h-full w-full text-[#F92672]" />)
      } else {
         stars.push(
            <IoMdStarOutline className="h-full w-full text-[#F92672]" />
         )
      }
   }

   return (
      <div className="flex h-full w-full justify-between">
         {stars.map((star, index) => (
            <div
               onClick={() => {
                  dispatch(starsAction(index + 1))
                  dispatch(stepAction(2))
               }}
               key={index}
               className={`flex w-full max-w-[80px] flex-col items-center gap-2 ${
                  index < starsSlice! && stepSlice! > 1 ? "stars-pulse" : ""
               } ${
                  index + 1 === starsSlice && stepSlice! > 1 ? "blur-[2px]" : ""
               }`}
            >
               {star}
               {
                  <div
                     className={`flex-center hidden w-[15px] text-[12px] ring-[1px] ring-gray-200 md:flex `}
                  >
                     {index + 1}
                  </div>
               }
            </div>
         ))}
      </div>
   )
}

export default Stars
