import { prisma } from '@/lib/prisma';
import Card from './components/card/Card';
import { ProductType } from '@/types';

const Product = async ({ params }: { params: { id: string } }) => {
   const { id } = params;

   const products: ProductType[] = await prisma.product.findMany({
      where: {
         id: id,
      },
      include: {
         reviews: true,
      },
   });

   return (
      <>
         {products.length > 0 && (
            <>
               <Card products={products[0]} />
            </>
         )}
      </>
   );
};

export default Product;
