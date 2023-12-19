"use client"

import { useState } from "react"

import { useAppDispatch } from "@/redux/hooks"
import { addCart } from "@/redux/features/cartSlice"

import calcRatingStars from "@/utils/calcRatingStars"

import { Review } from "@prisma/client"

import ImageCard from "@/app/components/card/components/ImageCard"
import Stars from "@/app/components/card/components/Stars"
import TitleCart from "../productInCart/components/TitleCart"
import ReadMe from "@/app/components/card/components/ReadMe"
import Button from "@/app/components/button/Button"
import { sidebarCart } from "@/redux/features/sidebarSlice"

interface CartInCarouselProps {
   id: string
   stars?: boolean
   image: string
   reviews: Review[]
   title: string
   readme?: string
   price?: number
   button?: boolean
   remove?: boolean
   soldOut: boolean
   pair: string[]
   sold: number
   classButton?: string
}

const CartInCarousel = ({
   id,
   image,
   stars,
   title,
   readme,
   price,
   button,
   reviews,
   soldOut,
   pair,
   sold,
   classButton,
}: CartInCarouselProps) => {
   const [load, setLoad] = useState(false)

   const dispatch = useAppDispatch()

   const clickHandler = () => {
      setLoad(true)
      setTimeout(() => {
         dispatch(sidebarCart(true))
         setLoad(false)
         dispatch(
            addCart({
               id: id,
               title: title,
               image: image,
               price: price!,
               reviews: reviews,
               totalPrice: price!,
               soldOut: soldOut,
               quantity: 1,
               sold: sold,
               pair: pair,
            })
         )
      }, 500)
   }

   return (
      <div className="flex-between relative flex h-full gap-2 rounded-[8px] bg-white p-[16px]">
         <div className="mr-[150px] flex items-center gap-3">
            <div className="min-w-[65px]">
               <ImageCard image={image} title={title} />
            </div>

            <div className="flex h-full flex-col justify-between gap-2">
               {stars && (
                  <Stars stars={calcRatingStars(reviews.length, reviews)} />
               )}
               <TitleCart title={title} />
               {readme && <ReadMe text={readme} src={""} />}
            </div>
         </div>

         {button && (
            <div className="absolute bottom-[20px] right-[20px]">
               <Button
                  onClick={clickHandler}
                  soldOut={soldOut}
                  load={load}
                  text={`add - $${price}`}
                  size={"sm"}
                  className={`w-full bg-gradient-to-r from-pink-400  to-pink-600 text-[10px] uppercase ${classButton}`}
               />
            </div>
         )}
      </div>
   )
}

export default CartInCarousel
