"use client"

import { useAppSelector } from "@/redux/hooks"
import { useUser } from "@clerk/nextjs"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useRouter } from "next/navigation"

const ButtonRepeatPayment = () => {
   const cardSlice = useAppSelector((state) => state.cartReducer.carts)

   const { isSignedIn } = useUser()

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
      <button
         onClick={async () => {
            if (isSignedIn) {
               await handleClick()
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
         Try again
      </button>
   )
}

export default ButtonRepeatPayment
