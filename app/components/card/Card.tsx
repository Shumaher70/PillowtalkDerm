'use client';

import Link from 'next/link';

import { Review } from '@prisma/client';

import { addCart, sidebar } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';

import ImageCard from './components/ImageCard';
import TitleCard from './components/TitleCard';
import ReadMe from './components/ReadMe';
import Stars from './components/Stars';
import Rating from './components/Rating';
import Button from '@/app/components/Button';
import AwardWining from './components/AwardWinning';
import calcRatingStars from '@/utils/calcRatingStars';
import { useState } from 'react';

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
   const dispatch = useAppDispatch();

   const ratingStars = calcRatingStars(product.reviews.length, product.reviews);
   const [load, setLoad] = useState(false);

   const clickHandler = (event: React.MouseEvent) => {
      dispatch(
         addCart({
            id: product.id,
            title: product.title,
            image: product.images[0],
            price: product.price,
            reviews: product.reviews,
            totalPrice: product.price,
            soldOut: product.soldOut!,
            quantity: 1,
         })
      );
      setLoad(true);
      setTimeout(() => {
         setLoad(false);
      }, 500);
      dispatch(sidebar(true));
   };

   const spin = (
      <>
         <svg
            className="animate-spin -ml-1 mr-3 h-[21px] w-[21px] text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
         >
            <circle
               className="opacity-25"
               cx="12"
               cy="12"
               r="10"
               stroke="currentColor"
               strokeWidth="4"
            ></circle>
            <path
               className="opacity-75"
               fill="currentColor"
               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
         </svg>
      </>
   );

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
                     text={load ? spin : `add - $${product.price}`}
                     disabled={load ? true : false}
                     size="sm"
                     uppercase
                     className="bg-purple-800 !w-full uppercase active:bg-gradient-to-r from-pink-400 to-pink-600 "
                     soldOut={product.soldOut}
                     onClick={clickHandler}
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
