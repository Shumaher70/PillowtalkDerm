import { Review } from '@prisma/client';

const calcRatingStars = (TotalQuantity: number, totalStars: Review[]) => {
   const ratingStars = totalStars.map((review) => review.rating);
   const totalRatingStars = ratingStars.reduce((acc, sum) => acc + sum, 0);

   return +totalRatingStars.toFixed(2) / TotalQuantity;
};

export default calcRatingStars;
