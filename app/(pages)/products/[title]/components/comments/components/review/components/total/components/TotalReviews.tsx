import { Review } from "@prisma/client"

const TotalReviews = ({ reviews }: { reviews: Review[] }) => {
   const review = reviews.length > 0 ? "Reviews" : "Review"

   return (
      <div className="text-[14px] text-[#6a1ba6] lg:text-[16px]">
         {reviews.length} {review}
      </div>
   )
}

export default TotalReviews
