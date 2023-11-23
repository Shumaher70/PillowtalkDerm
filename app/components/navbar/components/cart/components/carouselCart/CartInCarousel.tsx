import { useState } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { addCart } from '@/redux/features/cartSlice';

import calcRatingStars from '@/utils/calcRatingStars';

import { Review } from '@prisma/client';

import ImageCard from '@/app/components/card/components/ImageCard';
import Stars from '@/app/components/card/components/Stars';
import TitleCart from '../productInCart/components/TitleCart';
import ReadMe from '@/app/components/card/components/ReadMe';
import Button from '@/app/components/button/Button';

interface CartInCarouselProps {
   id: string;
   stars?: boolean;
   image: string;
   reviews: Review[];
   title: string;
   readme?: string;
   price?: number;
   button?: boolean;
   remove?: boolean;
   soldOut: boolean;
   pair: string[];
   sold: number;
}

const CartInCarousel = ({
   id,
   image,
   stars,
   title,
   readme,
   price,
   button,
   reviews,
   soldOut,
   pair,
   sold,
}: CartInCarouselProps) => {
   const [load, setLoad] = useState(false);

   const dispatch = useAppDispatch();

   const clickHandler = () => {
      setLoad(true);
      setTimeout(() => {
         setLoad(false);
         dispatch(
            addCart({
               id: id,
               title: title,
               image: image,
               price: price!,
               reviews: reviews,
               totalPrice: price!,
               soldOut: soldOut,
               quantity: 1,
               sold: sold,
               pair: pair,
            })
         );
      }, 500);
   };

   return (
      <div className="bg-white flex gap-2 flex-between h-full rounded-[8px] p-[16px] relative">
         <div className="flex gap-3 mr-[150px] items-center">
            <div className="min-w-[65px]">
               <ImageCard image={image} title={title} />
            </div>

            <div className="flex flex-col h-full justify-between gap-2">
               {stars && (
                  <Stars stars={calcRatingStars(reviews.length, reviews)} />
               )}
               <TitleCart title={title} />
               {readme && <ReadMe text={readme} src={''} />}
            </div>
         </div>

         {button && (
            <div className="absolute right-[20px] bottom-[20px]">
               <Button
                  onClick={clickHandler}
                  soldOut={soldOut}
                  load={load}
                  text={`add - $${price}`}
                  size={'sm'}
                  className="text-[10px] w-full uppercase  bg-gradient-to-r from-pink-400 to-pink-600 "
               />
            </div>
         )}
      </div>
   );
};

export default CartInCarousel;
