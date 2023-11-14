import Link from 'next/link';
import ImageCard from './components/ImageCard';
import TitleCard from './components/TitleCard';
import ReadMe from './components/ReadMe';
import Stars from './components/Stars';
import Rating from './components/Rating';
import Button from '@/app/components/Button';
import AwardWining from './components/AwardWinning';
import { Review } from '@prisma/client';
import calcRatingStars from '@/utils/calcRatingStars';

interface CardProps {
   product: {
      id: string;
      images: string[];
      title: string;
      price: number;
      reviews: Review[];
      soldOut?: boolean;
   };
   extra?: string;
   btn?: boolean;
   win?: boolean;
   stars?: boolean;
   rating?: boolean;
}

const Card = ({ btn, win, product, extra, stars, rating }: CardProps) => {
   if (!product) return;

   const ratingStars = calcRatingStars(product.reviews.length, product.reviews);

   return (
      <Link href={''} className="relative bg-white rounded-[8px] m-2">
         <div className="m-[10px] rounded-[5px]">
            <ImageCard image={product.images[0]} title={product.title} />

            {stars && (
               <div className="flex flex-center gap-1">
                  <Stars stars={ratingStars} />
               </div>
            )}

            {rating && (
               <div className="flex flex-center">
                  <Rating rating={product.reviews.length} />
               </div>
            )}

            <div className="pt-[8px] text-center">
               <TitleCard title={product.title} />
            </div>

            {extra && (
               <div className="text-center pt-[8px]">
                  <ReadMe text={extra} src="" />
               </div>
            )}

            {btn && (
               <div className="flex w-full flex-center pt-[8px]">
                  <Button
                     text={`add - $${product.price}`}
                     size="sm"
                     uppercase
                     className="bg-purple !w-full"
                     soldOut={product.soldOut}
                  />
               </div>
            )}
         </div>

         {win && (
            <div className="absolute top-3 left-3">
               <AwardWining />
            </div>
         )}
      </Link>
   );
};

export default Card;
