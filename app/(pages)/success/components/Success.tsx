"use client"

import { refreshCarts } from "@/redux/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Success = () => {
   const orders = useAppSelector((state) => state.cartReducer.carts)
   const route = useRouter()

   const dispatch = useAppDispatch()

   useEffect(() => {
      console.log("hello")

      let subscription = true
      const handlerPost = async () => {
         await axios.post("/api/order", orders).then((response) => {
            if (response.data) {
               // route.push("/account")
            }
         })
      }
      if (subscription) {
         handlerPost()
      }
      return () => {
         subscription = false
      }
   }, [])

   return (
      <div
         className="flex-center flex h-screen w-full cursor-pointer"
         onClick={() => {
            dispatch(refreshCarts())
         }}
      >
         Success
      </div>
   )
}

export default Success
