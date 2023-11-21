'use client';

import Link from 'next/link';

import { Review } from '@prisma/client';

import { addCart, sidebarCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';

import ImageCard from './components/ImageCard';
import TitleCard from './components/TitleCard';
import ReadMe from './components/ReadMe';
import Stars from './components/Stars';
import Rating from './components/Rating';
import Button from '@/app/components/button/Button';
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
      sold: number;
      pair: string[];
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

   const clickHandler = () => {
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
            sold: product.sold,
            pair: product.pair,
         })
      );
      setLoad(true);
      setTimeout(() => {
         setLoad(false);
         dispatch(sidebarCart(true));
      }, 500);
   };

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
                     load={load}
                     uppercase
                     className="bg-purple-800 uppercase active:bg-gradient-to-r from-pink-400 to-pink-600 "
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
