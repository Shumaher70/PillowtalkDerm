import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
   try {
      const query = request.nextUrl.searchParams.get("filter") as string

      if (query.length > 0) {
         const productsFilter = await prisma.product.findMany({
            where: {
               title: {
                  mode: "insensitive",
                  contains: query,
               },
            },
            include: {
               reviews: true,
               carts: true,
               productDescription: true,
            },
         })

         const blogFilter = await prisma.blog.findMany({
            where: {
               title: {
                  mode: "insensitive",
                  contains: query,
               },
            },
         })

         return new NextResponse(
            JSON.stringify({ products: productsFilter, blogs: blogFilter }),
            {
               status: 201,
               headers: { "Content-Type": "application/json" },
            }
         )
      } else {
         const productsFilter = await prisma.product.findMany({
            take: 3,
            include: {
               reviews: true,
               carts: true,
               productDescription: true,
            },
         })

         const blogFilter = await prisma.blog.findMany({
            take: 1,
         })

         return new NextResponse(
            JSON.stringify({ products: productsFilter, blogs: blogFilter }),
            {
               status: 201,
               headers: { "Content-Type": "application/json" },
            }
         )
      }
   } catch (error) {
      return new NextResponse("Something with the product filter ", {
         status: 500,
      })
   }
}
