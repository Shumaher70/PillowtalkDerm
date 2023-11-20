import { ProductType } from '@/types';

const bestSellers = (product: ProductType[]) => {
   const sorToSortBy = product.sort((a, b) => b.sold - a.sold).slice(0, 4);

   return sorToSortBy;
};

export default bestSellers;
