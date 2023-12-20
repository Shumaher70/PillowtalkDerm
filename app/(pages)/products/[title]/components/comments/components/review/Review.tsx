import React from "react"
import Total from "./components/total/Total"
import ReviewForm from "./components/reviewForm/ReviewForm"
import { Review as ReviewType } from "@prisma/client"

const Review = ({ reviews }: { reviews: ReviewType[] }) => {
   return (
      <div className="flex w-full flex-col items-center justify-center gap-5 border-b-[1px] border-[#cfb6e2] pb-[20px] lg:flex-row lg:justify-between">
         <Total reviews={reviews} />
         <ReviewForm />
      </div>
   )
}

export default Review
