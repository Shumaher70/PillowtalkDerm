import Stars from '@/app/components/card/components/Stars';

import TitleCart from './components/TitleCart';
import ReadMe from '@/app/components/card/components/ReadMe';
import ImageCard from '@/app/components/card/components/ImageCard';
import CountProduct from './components/CountProduct';
import Button from '@/app/components/Button';
import { AiOutlineClose } from 'react-icons/ai';

interface ProductInCartProps {
   image: string;
   stars?: string[];
   title: string;
   readme?: string;
   price?: number;
   totalPrice?: number;
   countProduct?: boolean;
   button?: boolean;
   remove?: boolean;
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
}: ProductInCartProps) => {
   return (
      <div className="bg-white flex items-center rounded-[8px] p-[16px] relative">
         <div className="flex gap-3 items-center">
            <div className="min-w-[65px]">
               <ImageCard image={image} title={title} />
            </div>

            <div className="flex flex-col gap-2 max-w-[150px] mr-[250px]">
               {stars && <Stars stars={stars} />}
               <TitleCart title={title} />
               {readme && <ReadMe text={readme} />}
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
               soldOut
               bg
               uppercase
               text={`add - $${price}`}
               size={'sm'}
               className="text-[9px] absolute right-[20px] bottom-[20px]"
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
