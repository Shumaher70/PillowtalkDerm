import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs"
import { Order } from "@prisma/client"

import { NextResponse } from "next/server"

export async function GET(request: Request) {
   const { userId } = auth()

   try {
      const orders: Order[] = await prisma.order.findMany({
         where: {
            userId: userId as string,
         },
      })

      return NextResponse.json(orders)
   } catch (error: any) {
      if (error.code === "P2002") {
         return new NextResponse("can't get orders", {
            status: 409,
         })
      }
      return new NextResponse(error.message, { status: 500 })
   }
}

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

      return new NextResponse(JSON.stringify(users), {
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
