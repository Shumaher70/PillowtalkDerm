"use client"

import { useAppSelector } from "@/redux/hooks"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useRouter } from "next/navigation"

interface CheckOutProps {
   totalPrice: number
}

const CheckOut = ({ totalPrice }: CheckOutProps) => {
   const cardSlice = useAppSelector((state) => state.cartReducer.carts)

   const { isSignedIn } = useUser()

   const route = useRouter()

   return (
      <div className="flex justify-between rounded-t-[8px] bg-white p-[16px] shadow-[0_-1px_10px_rgba(0,0,0,0.26)]">
         <div>
            <p className="text-p text-bold font-sans">Estimated Total</p>
            <p>Taxes and shipping calculated at checkout</p>
            <button
               onClick={async () => {
                  if (isSignedIn) {
                     axios
                        .post("http://localhost:3000/api/checkout", {
                           products: cardSlice,
                        })
                        .then((response) => {
                           if (response.data) {
                              route.push(response.data.url)
                           }
                        })
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
