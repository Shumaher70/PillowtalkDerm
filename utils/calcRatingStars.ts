import { Review } from "@prisma/client"

const calcRatingStars = (TotalQuantity: number, totalStars: Review[]) => {
   const ratingStars = totalStars.map((review) => review.rating)

   const totalRatingStars = ratingStars.reduce((acc, sum) => acc + sum, 0)

   const rating =
      totalRatingStars !== 0
         ? +totalRatingStars / TotalQuantity
         : +totalRatingStars

   return Number(rating).toFixed(2)
}

export default calcRatingStars
