import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const PUT = async (request: Request) => {
   try {
      const json = await request.json()

      const uniqueReview = await prisma.review.findUnique({
         where: {
            id: json.id,
         },
      })

      const dislike = await prisma.review.update({
         where: {
            id: json.id,
         },
         data: {
            dislike: uniqueReview?.dislike + json.dislike,
            like:
               uniqueReview?.like! <= 0 ? 0 : uniqueReview?.like! - json.like,
         },
      })

      return new NextResponse(JSON.stringify(dislike), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
