"use client"
import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import React, { useEffect, useState } from "react"

const CartIcon = () => {
   const dispatch = useAppDispatch()

   const [totalQuantity, setTotalQuantity] = useState(0)

   const cartReducer = useAppSelector((state) => state.cartReducer)
   useEffect(() => {
      setTotalQuantity(cartReducer.totalQuantity)
   }, [cartReducer.totalQuantity])
   return (
      <div
         className="
      flex-center 
      text-p
      relative 
      flex 
      cursor-pointer 
      rounded-full bg-gradient-to-r from-pink-400
      to-pink-600 
      p-[4px] 
      px-[11px]
      text-white
      "
         onClick={() => dispatch(sidebarCart(true))}
      >
         {totalQuantity}
      </div>
   )
}

export default CartIcon
