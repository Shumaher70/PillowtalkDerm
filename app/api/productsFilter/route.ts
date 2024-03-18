import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
   const query = request.nextUrl.searchParams.get("filter") || ""

   try {
      let productsFilter, blogFilter

      if (query.length > 0) {
         productsFilter = await prisma.product.findMany({
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

         blogFilter = await prisma.blog.findMany({
            where: {
               title: {
                  mode: "insensitive",
                  contains: query,
               },
            },
         })
      } else {
         productsFilter = await prisma.product.findMany({
            take: 3,
            include: {
               reviews: true,
               carts: true,
               productDescription: true,
            },
         })

         blogFilter = await prisma.blog.findMany({
            take: 1,
         })
      }

      return new NextResponse(
         JSON.stringify({ products: productsFilter, blogs: blogFilter }),
         {
            status: 200,
            headers: { "Content-Type": "application/json" },
         }
      )
   } catch (error) {
      console.error("Error occurred while fetching data:", error)
      return new NextResponse("Something went wrong", {
         status: 500,
      })
   }
}
