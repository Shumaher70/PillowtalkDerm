import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (response: Request) => {
   const carts = await prisma.cart.findMany();
   return NextResponse.json(carts);
};

export const POST = async (request: NextRequest) => {
   try {
      const body = await request.json();

      const cart = await prisma.cart.create({
         data: body,
      });
      return new NextResponse(JSON.stringify(cart), {
         status: 200,
      });
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 });
   }
};
