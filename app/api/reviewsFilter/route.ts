import { prisma } from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
   try {
      const IdQuery = request.nextUrl.searchParams.get("id") as string
      const sortQuery = request.nextUrl.searchParams.get("sort") as string
      const mediaQuery = request.nextUrl.searchParams.get("media") as string
      const starsQuery = request.nextUrl.searchParams.get("stars") as string
      const takeQuery = request.nextUrl.searchParams.get("take") as string

      let filter

      if (mediaQuery === "true") {
         filter = await prisma.review.findMany({
            take: Number(takeQuery),
            where: {
               productId: IdQuery,
               NOT: {
                  images: {
                     isEmpty: true,
                  },
               },
               rating: Number(starsQuery) === 0 ? {} : Number(starsQuery),
            },
            orderBy: {
               ...(sortQuery === "most-recent" && { createdAt: "desc" }),
               ...(sortQuery === "oldest" && { createdAt: "asc" }),
               ...(sortQuery === "highest-rated" && { rating: "desc" }),
               ...(sortQuery === "lowest-rated" && { rating: "asc" }),
               ...(sortQuery === "most-helpful" && { like: "desc" }),
            },
         })
      } else {
         filter = await prisma.review.findMany({
            take: Number(takeQuery),
            where: {
               productId: IdQuery,
               rating: Number(starsQuery) === 0 ? {} : Number(starsQuery),
            },
            orderBy: {
               ...(sortQuery === "most-recent" && { createdAt: "desc" }),
               ...(sortQuery === "oldest" && { createdAt: "asc" }),
               ...(sortQuery === "highest-rated" && { rating: "desc" }),
               ...(sortQuery === "lowest-rated" && { rating: "asc" }),
               ...(sortQuery === "most-helpful" && { like: "desc" }),
            },
         })
      }

      return new NextResponse(JSON.stringify(filter), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
