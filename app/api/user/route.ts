import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
   const user = await prisma.user.findMany()

   return NextResponse.json(user)
}

export const POST = async (request: Request) => {
   try {
      const json = await request.json()

      const user = await prisma.user.create({
         data: json,
      })

      return new NextResponse(JSON.stringify(user), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      return new NextResponse(error.message, { status: 500 })
   }
}
