"use client"
import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const CartIcon = () => {
   const dispatch = useAppDispatch()

   const cartReducer = useAppSelector((state) => state.cartReducer)

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
         {cartReducer.totalQuantity ? cartReducer.totalQuantity : 0}
      </div>
   )
}

export default CartIcon
