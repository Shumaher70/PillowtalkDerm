"use client"

import Link from "next/link"

import { Review } from "@prisma/client"

import { addCart } from "@/redux/features/cartSlice"
import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch } from "@/redux/hooks"

import ImageCard from "./components/ImageCard"
import TitleCard from "./components/TitleCard"
import ReadMe from "./components/ReadMe"
import Stars from "./components/Stars"
import Rating from "./components/Rating"
import Button from "@/app/components/button/Button"
import AwardWining from "./components/AwardWinning"
import calcRatingStars from "@/utils/calcRatingStars"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface CardProps {
   product: {
      id: string
      images: string[]
      title: string
      price: number
      reviews: Review[]
      soldOut?: boolean
      sold: number
      pair: string[]
   }
   extra?: string
   btn?: boolean
   win?: boolean
   stars?: boolean
   rating?: boolean
   imageAnimated?: boolean
   className?: string
}

const Card = ({
   btn,
   win,
   product,
   extra,
   stars,
   rating,
   imageAnimated,
   className,
}: CardProps) => {
   const dispatch = useAppDispatch()

   const ratingStars = calcRatingStars(product.reviews.length, product.reviews)
   const [load, setLoad] = useState(false)
   const route = useRouter()

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
      <div
         onClick={() =>
            route.push(
               `/products/${product.title
                  .split("")
                  .map((item) => item.replace(" ", "-"))
                  .join("")
                  .toLowerCase()}`
            )
         }
         className={`relative cursor-pointer rounded-[8px] p-[8px] md:p-[16px] ${className}`}
      >
         <div className="h-full rounded-[5px] ">
            <div className="flex h-full flex-col justify-between">
               <ImageCard
                  image={product.images[0]}
                  title={product.title}
                  imageAnimated={imageAnimated}
               />
               {stars && (
                  <div className="flex-center flex gap-1">
                     <Stars stars={ratingStars} />
                  </div>
               )}
               {rating && (
                  <div className="flex-center flex">
                     <Rating rating={product.reviews.length} />
                  </div>
               )}
               <div className="pt-[8px] text-center">
                  <TitleCard title={product.title} />
               </div>
               {extra && (
                  <div className="pt-[8px] text-center">
                     <ReadMe text={extra} src="" />
                  </div>
               )}
               {btn && (
                  <div className="flex-center flex w-full pt-[8px]">
                     <Button
                        text={`add - $${product.price}`}
                        size="sm"
                        load={load}
                        className="w-full bg-purple-800 uppercase 
                     "
                        soldOut={product.soldOut}
                        onClick={clickHandler}
                     />
                  </div>
               )}
            </div>
         </div>

         {win && (
            <div className="absolute left-3 top-3">
               <AwardWining />
            </div>
         )}
      </div>
   )
}

export default Card
