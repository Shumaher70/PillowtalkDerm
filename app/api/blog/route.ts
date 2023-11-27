import { prisma } from '@/lib/prisma';
import { BlogType } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (response: Request) => {
   const blogs: BlogType[] = await prisma.blog.findMany();
   return NextResponse.json(blogs);
};

export const POST = async (request: NextRequest) => {
   try {
      const body = await request.json();

      return new NextResponse(JSON.stringify(body), {
         status: 200,
      });
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 });
   }
};
