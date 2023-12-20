import { schnyderMlightFont } from "@/app/layout"
import { Review } from "@prisma/client"
import calcRatingStars from "@/utils/calcRatingStars"

const Rating = ({ reviews }: { reviews: Review[] }) => {
   const ratingStars = calcRatingStars(reviews.length, reviews)

   return (
      <div
         className={`text-[24px] lg:text-[56px] ${schnyderMlightFont.className}`}
      >
         {ratingStars}
      </div>
   )
}

export default Rating
