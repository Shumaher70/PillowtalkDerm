import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
   const user = await prisma.user.findMany()
   const reviews = await prisma.review.findMany()

   const userFilter = user.filter(
      (user) => user.img?.length !== 0 && user.img?.length !== undefined
   )

   userFilter.forEach(async (user) => {
      await prisma.user.updateMany({
         where: {
            id: user.id,
         },
         data: {
            verified: true,
         },
      })
   })

   userFilter.forEach((users) => {
      users.email
      reviews.forEach(async (review) => {
         if (review.email === users.email) {
            await prisma.review.updateMany({
               where: {
                  email: review.email,
               },
               data: { verified: true },
            })
         }
      })
   })

   return NextResponse.json(user)
}

export const POST = async (request: Request) => {
   try {
      const json = await request.json()

      const uniqueEmail = await prisma.user.findUnique({
         where: {
            email: json.email,
         },
      })

      if (!uniqueEmail) {
         const user = await prisma.user.create({
            data: json,
         })
         return new NextResponse(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
         })
      }
      return new NextResponse(JSON.stringify(""), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
