import { Review } from "@prisma/client"
import Rating from "./components/Rating"

import TotalReviews from "./components/TotalReviews"
import Stars from "@/app/components/card/components/Stars"
import calcRatingStars from "@/utils/calcRatingStars"

const Total = ({ reviews }: { reviews: Review[] }) => {
   return (
      <div className="flex flex-col items-center gap-2">
         <Rating reviews={reviews} />
         <div className="flex flex-col items-center gap-2 lg:flex-row">
            <Stars stars={calcRatingStars(reviews.length, reviews)} />
            <TotalReviews reviews={reviews} />
         </div>
      </div>
   )
}

export default Total
