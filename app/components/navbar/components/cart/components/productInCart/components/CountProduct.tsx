"use client"

import { removeCart, updateCart } from "@/redux/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { RxMinus, RxPlus } from "react-icons/rx"

interface CountProductProps {
   className?: string
   cartId: string
}

const CountProduct = ({ className, cartId }: CountProductProps) => {
   const carts = useAppSelector((action) => action.cartReducer.carts)
   const dispatch = useAppDispatch()
   const [isFocused, setIsFocused] = useState(false)

   const quantity = carts.filter((cart) => cart.id === cartId)[0].quantity

   useEffect(() => {
      dispatch(updateCart({ id: cartId, quantity: quantity }))
      if (!isFocused) {
         if (quantity < 1) {
            dispatch(removeCart(cartId))
         }
      }
   }, [cartId, dispatch, isFocused, quantity])

   const increase = () => {
      dispatch(updateCart({ id: cartId, quantity: quantity + 1 }))
   }

   const decrease = () => {
      dispatch(updateCart({ id: cartId, quantity: quantity - 1 }))
   }

   const handleFocus = () => {
      setIsFocused(true)
   }

   const handleBlur = () => {
      setIsFocused(false)
   }

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
         updateCart({
            id: cartId,
            quantity: +event.target.value.replace(/\D/g, ""),
         })
      )
   }
   return (
      <div
         className={`
         border-1
         flex-between
         flex
         w-[90px] 
         gap-2 
         rounded-full
         border-[#6a1ba6]
         px-[8px]
         py-[5px]
         text-[#6a1ba6]
         ${className}
         `}
      >
         <RxMinus className="text-p cursor-pointer" onClick={decrease} />
         <input
            type="text"
            className="
               absolute 
               right-2/4 
               top-[-30%] 
               h-[40px] 
               w-[40px] 
               translate-x-2/4 
               bg-transparent 
               text-center 
               text-[14px] 
               text-[#6a1ba6]"
            value={quantity}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={changeHandler}
         />
         <RxPlus className="text-p cursor-pointer" onClick={increase} />
      </div>
   )
}

export default CountProduct
