import Order from "@/app/(pages)/products/[title]/components/card/components/order/Order"
import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs"

import { NextResponse } from "next/server"

export async function POST(request: Request) {
   const { userId } = auth()

   try {
      const json = await request.json()

      const users = json.map(
         async (order: any) =>
            await prisma.order.create({
               data: {
                  userId: userId as string,
                  image: order.image,
                  title: order.title,
                  quantity: order.quantity,
                  price: order.price,
               },
            })
      )

      return new NextResponse(JSON.stringify(true), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      if (error.code === "P2002") {
         return new NextResponse("order not added", {
            status: 409,
         })
      }
      return new NextResponse(error.message, { status: 500 })
   }
}
