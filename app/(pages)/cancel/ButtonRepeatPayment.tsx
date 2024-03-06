"use client"

import { useRouter } from "next/navigation"

const ButtonRepeatPayment = () => {
   const route = useRouter()

   return (
      <button
         onClick={async () => {
            route.back()
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
