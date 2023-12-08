import { prisma } from '@/lib/prisma';

const Product = async ({ params }: { params: { id: string } }) => {
   const { id } = params;

   const products = await prisma.product.findUnique({
      where: {
         id: id,
      },
   });

   return <div>page</div>;
};

export default Product;
