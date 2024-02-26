import { CartType } from "@/types"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const getActiveProducts = async () => {
   const checkProducts = await stripe.products.list()

   const availableProducts = await checkProducts.data.filter(
      (product: any) => product.active === true
   )

   return availableProducts
}

export const POST = async (request: NextResponse) => {
   const { products } = await request.json()
   const { userId } = auth()

   const data: CartType[] = products

   let activeProducts = await getActiveProducts()

   try {
      for (const product of data) {
         const stripeProduct = activeProducts?.find(
            (stripeProduct: any) =>
               stripeProduct?.name?.toLowerCase() ===
               product?.title?.toLowerCase()
         )

         if (stripeProduct === undefined) {
            const prod = await stripe.products.create({
               name: product.title,
               default_price_data: {
                  unit_amount: product.price * 100,
                  currency: "usd",
               },
            })
         }
      }
   } catch (error) {
      console.error("Error creating a new product", error)
      throw error
   }

   activeProducts = await getActiveProducts()

   let stripeItems = []

   for (const product of data) {
      const stripeProduct = activeProducts?.find(
         (prod: any) =>
            prod?.name?.toLowerCase() === product?.title?.toLowerCase()
      )

      if (stripeProduct) {
         stripeItems.push({
            price: stripeProduct?.default_price,
            quantity: product?.quantity,
         })
      }
   }

   const session = await stripe.checkout.sessions.create({
      line_items: stripeItems,
      mode: "payment",
      success_url: `http://localhost:3000/account?userid=${userId}`,
      cancel_url: "http://localhost:3000/cancel",
      automatic_tax: { enabled: true },
      metadata: {
         id: userId,
      },
   })

   return NextResponse.json(session)
}
