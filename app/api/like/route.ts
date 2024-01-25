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

      const like = await prisma.review.update({
         where: {
            id: json.id,
         },
         data: {
            like: uniqueReview?.like! + json.like,
            dislike:
               uniqueReview?.dislike! <= 0
                  ? 0
                  : uniqueReview?.dislike! - json.dislike,
         },
      })

      return new NextResponse(JSON.stringify(like), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
