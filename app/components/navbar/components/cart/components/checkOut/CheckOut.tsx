"use client"

import { useAppSelector } from "@/redux/hooks"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useRouter } from "next/navigation"

interface CheckOutProps {
   totalPrice: number
   userId: string | undefined
}

const CheckOut = ({ totalPrice, userId }: CheckOutProps) => {
   const cardSlice = useAppSelector((state) => state.cartReducer.carts)

   const route = useRouter()

   const handleClick = async () => {
      const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      const stripe = await loadStripe(STRIPE_PK)

      const data = await axios
         .post("/api/checkout", {
            products: cardSlice,
         })
         .then((response) => response.data)

      const sessionId = data.id

      stripe?.redirectToCheckout({ sessionId })
   }

   return (
      <div className="flex justify-between rounded-t-[8px] bg-white p-[16px] shadow-[0_-1px_10px_rgba(0,0,0,0.26)]">
         <div>
            <p className="text-p text-bold font-sans">Estimated Total</p>
            <p>Taxes and shipping calculated at checkout</p>
            <button
               onClick={async () => {
                  if (userId) {
                     handleClick()
                  } else {
                     route.push("sign-in")
                  }
               }}
               className="flex-center !duration-250
               relative
               mt-4
               cursor-pointer
               rounded-full
               bg-purple-800
               px-[16px]
               py-[10px]
               uppercase
               text-white transition-all hover:bg-pink-600
               "
            >
               checkout
            </button>
         </div>

         <p className="text-p text-bold font-sans">${totalPrice}</p>
      </div>
   )
}

export default CheckOut
