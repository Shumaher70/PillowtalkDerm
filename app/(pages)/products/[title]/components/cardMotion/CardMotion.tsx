"use client"

import Button from "@/app/components/button/Button"
import Rating from "@/app/components/card/components/Rating"
import Stars from "@/app/components/card/components/Stars"
import { MotionDiv } from "@/app/components/motion/MotionDiv"
import { addCart } from "@/redux/features/cartSlice"
import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ProductType } from "@/types"
import calcRatingStars from "@/utils/calcRatingStars"
import { useState } from "react"

const CardMotion = ({ product }: { product: ProductType }) => {
   const cardMotionSlice = useAppSelector(
      (state) => state.cartMotionReducer.visibility
   )

   const [load, setLoad] = useState(false)
   const dispatch = useAppDispatch()
   const ratingStars = calcRatingStars(product.reviews.length, product.reviews)

   const clickHandler = () => {
      dispatch(
         addCart({
            id: product.id,
            title: product.title,
            image: product.images[0],
            price: product.price,
            reviews: product.reviews,
            totalPrice: product.price,
            soldOut: product.soldOut!,
            quantity: 1,
            sold: product.sold,
            pair: product.pair,
         })
      )
      setLoad(true)
      setTimeout(() => {
         setLoad(false)
         dispatch(sidebarCart(true))
      }, 500)
   }

   return (
      <MotionDiv
         initial={{ y: "110px" }}
         animate={{
            opacity: `${cardMotionSlice ? 0 : 1}`,
            y: `${cardMotionSlice ? "110px" : "0"}`,
         }}
         className="container-px container-rounded-t bg-accent fixed bottom-0 flex h-[110px] w-full flex-col justify-between overflow-hidden py-[8px] transition-all duration-300 md:flex-row md:items-center md:justify-between md:!px-[40px]"
      >
         <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold uppercase text-black md:text-[16px]">
               {product.title}
            </h1>
            <div className="flex items-center gap-1">
               <Stars stars={ratingStars} />
               <Rating rating={product.reviews.length} />
            </div>
         </div>
         <div className="w-full md:w-fit">
            <Button
               text={`add to cart - $${product.price}`}
               size="sm"
               load={load}
               className="w-full bg-purple-800 uppercase"
               soldOut={product.soldOut}
               onClick={clickHandler}
            />
         </div>
      </MotionDiv>
   )
}

export default CardMotion
