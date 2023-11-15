import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (response: Request) => {
   const carts = await prisma.cart.findMany();
   return NextResponse.json(carts);
};

export const POST = async (request: NextRequest) => {
   try {
      const body = await request.json();

      const productId = await prisma.cart.findMany({
         where: {
            productId: body.productId,
         },
      });

      if (productId.length > 0) {
         const quantity = (productId[0].quantity += 1);
         const carts = await prisma.cart.update({
            where: {
               id: productId[0].id,
            },
            data: {
               quantity: quantity,
            },
         });

         return new NextResponse(JSON.stringify(carts), {
            status: 200,
         });
      } else {
         const carts = await prisma.cart.create({
            data: body,
         });

         return new NextResponse(JSON.stringify(carts), {
            status: 200,
         });
      }
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 });
   }
};
