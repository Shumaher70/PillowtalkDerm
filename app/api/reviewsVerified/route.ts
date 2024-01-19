import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
   const reviews = await prisma.review.findMany()

   return NextResponse.json(reviews)
}

export const PUT = async (request: Request) => {
   try {
      const json = await request.json()

      const reviewUnique = await prisma.user.findUnique({
         where: {
            email: json.email,
         },
      })

      if (reviewUnique!.img?.length! > 0) {
         await prisma.review.updateMany({
            where: {
               email: json.email,
            },
            data: {
               verified: true,
            },
         })
      } else {
         await prisma.review.updateMany({
            where: {
               email: json.email,
            },
            data: {
               verified: false,
            },
         })
      }

      return new NextResponse(JSON.stringify(reviewUnique), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
