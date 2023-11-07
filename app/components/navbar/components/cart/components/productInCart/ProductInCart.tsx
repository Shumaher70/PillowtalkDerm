import Stars from '@/app/components/card/components/Stars';

import TitleCart from './components/TitleCart';
import ReadMe from '@/app/components/card/components/ReadMe';
import ImageCard from '@/app/components/card/components/ImageCard';

const ProductInCart = () => {
   return (
      <div className="bg-white flex flex-between rounded-[8px] p-[16px]">
         <div className="flex gap-3 items-center">
            <div className="min-w-[65px]">
               <ImageCard
                  image={
                     'https://pillowtalkderm.com/cdn/shop/files/FlashMask.png?v=1689700581&width=352'
                  }
                  title={''}
               />
            </div>

            <div className="flex flex-col gap-2 max-w-[150px]">
               <Stars />
               <TitleCart title="Major Fade Active Seal Moisturizer" />
               <ReadMe />
               <p>$123</p>
            </div>
         </div>

         <div className="flex flex-col gap-3"></div>
      </div>
   );
};

export default ProductInCart;
