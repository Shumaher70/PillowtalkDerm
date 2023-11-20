import Stars from '@/app/components/card/components/Stars';

import TitleCart from './components/TitleCart';
import ReadMe from '@/app/components/card/components/ReadMe';
import ImageCard from '@/app/components/card/components/ImageCard';
import CountProduct from './components/CountProduct';
import Button from '@/app/components/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { Review } from '@prisma/client';
import calcRatingStars from '@/utils/calcRatingStars';

interface ProductInCartProps {
   stars?: boolean;
   image: string;
   reviews: Review[];
   title: string;
   readme?: string;
   price?: number;
   buttonPrice?: number;
   totalPrice?: number;
   countProduct?: boolean;
   button?: boolean;
   remove?: boolean;
   soldOut: boolean;
}

const ProductInCart = ({
   image,
   stars,
   title,
   readme,
   price,
   totalPrice,
   countProduct,
   button,
   remove,
   reviews,
   soldOut,
   buttonPrice,
}: ProductInCartProps) => {
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
               {price && <p>${price}</p>}
            </div>
         </div>

         {totalPrice && (
            <span className="absolute top-[20px] right-[20px] text-p font-sans font-bold">
               ${totalPrice}
            </span>
         )}

         {countProduct && (
            <CountProduct className="absolute right-[20px] bottom-[20px]" />
         )}
         {button && (
            <Button
               soldOut={soldOut}
               text={`add - $${buttonPrice}`}
               size={'sm'}
               className="text-[10px] uppercase absolute right-[20px] bottom-[20px] bg-gradient-to-r from-pink-400 to-pink-600 "
            />
         )}

         {remove && (
            <div className="bg-white absolute left-[-10px] top-[-10px] rounded-full p-2">
               <AiOutlineClose className="text-[14px] cursor-pointer " />
            </div>
         )}
      </div>
   );
};

export default ProductInCart;
