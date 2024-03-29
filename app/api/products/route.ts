import { prisma } from "@/lib/prisma"
import { ProductType } from "@/types"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
   const products: ProductType[] = await prisma.product.findMany({
      take: 6,
      include: {
         reviews: true,
         carts: true,
         productDescription: true,
      },
   })

   return NextResponse.json(products)
}

export async function POST(request: Request) {
   try {
      const json = await request.json()

      const product = await prisma.product.create({
         data: json,
      })

      return new NextResponse(JSON.stringify(product), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      })
   } catch (error: any) {
      if (error.code === "P2002") {
         return new NextResponse("product with email already exists", {
            status: 409,
         })
      }
      return new NextResponse(error.message, { status: 500 })
   }
}
