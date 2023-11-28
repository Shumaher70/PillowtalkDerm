import Button from '@/app/components/button/Button';
import Card from '@/app/components/card/Card';
import { ProductType } from '@/types';

interface ShopProps {
   products: ProductType[];

   className?: string;
}

const Shop = ({ products }: ShopProps) => {
   return (
      <div className="py-[30px]">
         <div className="grid grid-cols-6">
            {products
               .slice(0, 6)
               .map(
                  ({
                     id,
                     images,
                     title,
                     price,
                     reviews,
                     soldOut,
                     sold,
                     pair,
                  }) => (
                     <Card
                        key={id}
                        product={{
                           id: id,
                           images: images,
                           title: title,
                           price: price,
                           reviews: reviews,
                           soldOut: soldOut,
                           sold: sold,
                           pair: pair,
                        }}
                     />
                  )
               )}
         </div>
         <div className="w-full flex flex-center mt-10">
            <Button
               text="shop all"
               className="uppercase bg-gradient-to-r from-pink-400 to-pink-600"
               size={'lg'}
               load={false}
            />
         </div>
      </div>
   );
};

export default Shop;
