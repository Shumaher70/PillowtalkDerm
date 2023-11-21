import { CartType, ProductType } from '@/types';

const pairItWith = (carts: CartType[], products: ProductType[]) => {
   const pairs = carts.map((item) => item.pair).flatMap((pair) => pair);

   let pairItWithArr: ProductType[] = [];

   for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < pairs.length; j++) {
         if (products[i].id === pairs[j]) {
            pairItWithArr.push(products[i]);
         }
      }
   }

   const cartIp = Array.from(new Set(carts.map((obj) => obj.id)));
   pairItWithArr = Array.from(
      new Set(pairItWithArr.filter((obj) => !cartIp.includes(obj.id)))
   );

   return pairItWithArr;
};

export default pairItWith;
