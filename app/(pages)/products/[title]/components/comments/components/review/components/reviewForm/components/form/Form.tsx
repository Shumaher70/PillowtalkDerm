"use client"

import { useAppSelector } from "@/redux/hooks"

import Stars from "./components/Stars"
import Review from "./components/Review"
import ButtonClose from "./components/button/ButtonClose"
import ButtonPrevious from "./components/button/ButtonPrevious"
import ReviewTitle from "./components/ReviewTitle"
import Multimedia from "./components/Multimedia"
import Email from "./components/Email"
import Recommend from "./components/Recommend"

const Form = () => {
   const formSlice = useAppSelector((state) => state.sidebarReducer.reviewForm)
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)

   return (
      <>
         {formSlice && (
            <div className="flex-center fixed z-20 flex h-full w-full">
               <div className="container-rounded  flex-center relative flex h-[80vh] w-full  max-w-[678px] bg-white px-[30px]">
                  <div className="relative flex h-full w-full max-w-[550px] overflow-hidden">
                     <Stars />
                     <Review />
                     <ReviewTitle />
                     <Multimedia />
                     <Email />
                     <Recommend />
                  </div>

                  <ButtonClose />
                  {stepSlice > 1 && <ButtonPrevious />}
               </div>
            </div>
         )}
      </>
   )
}

export default Form
