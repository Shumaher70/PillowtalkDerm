import { CartType, ProductType } from '@/types';

const pairItWith = (carts: CartType[], products: ProductType[]) => {
   const pairs = carts.map((item) => item.pair).flatMap((pair) => pair);

   let pairItwithArr: ProductType[] = [];

   for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < pairs.length; j++) {
         if (products[i].id === pairs[j]) {
            pairItwithArr.push(products[i]);
         }
      }
   }

   return pairItwithArr;
};

export default pairItWith;
