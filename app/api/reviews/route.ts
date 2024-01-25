import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
   const reviews = await prisma.review.findMany()

   return NextResponse.json(reviews)
}

export const POST = async (request: Request) => {
   try {
      const json = await request.json()

      const reviews = await prisma.review.create({
         data: json,
      })

      return new NextResponse(JSON.stringify(reviews), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
