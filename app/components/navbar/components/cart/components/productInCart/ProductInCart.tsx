"use client"

import Stars from "@/app/components/card/components/Stars"

import TitleCart from "./components/TitleCart"
import ReadMe from "@/app/components/card/components/ReadMe"
import ImageCard from "@/app/components/card/components/ImageCard"
import CountProduct from "./components/CountProduct"
import Button from "@/app/components/button/Button"
import { AiOutlineClose } from "react-icons/ai"
import { Review } from "@prisma/client"
import calcRatingStars from "@/utils/calcRatingStars"
import { useAppDispatch } from "@/redux/hooks"
import { addCart, removeCart } from "@/redux/features/cartSlice"
import { useState } from "react"

interface ProductInCartProps {
   id: string
   stars?: boolean
   image: string
   reviews: Review[]
   title: string
   readme?: string
   price?: number
   totalPrice?: number
   countProduct?: boolean
   button?: boolean
   remove?: boolean
   soldOut: boolean
   pair: string[]
   sold: number
}

const ProductInCart = ({
   id,
   image,
   stars,
   title,
   readme,
   price,
   totalPrice,
   countProduct,
   button,
   remove,
   reviews,
   soldOut,
   pair,
   sold,
}: ProductInCartProps) => {
   const [load, setLoad] = useState(false)

   const dispatch = useAppDispatch()

   const clickHandler = () => {
      setLoad(true)
      setTimeout(() => {
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

   const removeHandler = () => {
      dispatch(removeCart(id))
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
               {price && <p>${price}</p>}
            </div>
         </div>

         <span className="text-p absolute right-[20px] top-[20px] font-sans font-bold">
            ${totalPrice}
         </span>

         {countProduct && (
            <CountProduct
               className="absolute bottom-[20px] right-[20px]"
               cartId={id}
            />
         )}
         {button && (
            <div className="absolute bottom-[20px] right-[20px]">
               <Button
                  onClick={clickHandler}
                  soldOut={soldOut}
                  load={load}
                  text={`add - $${price}`}
                  size={"sm"}
                  className="w-full bg-gradient-to-r from-pink-400  to-pink-600 text-[10px] uppercase "
               />
            </div>
         )}
         {remove && (
            <div
               className="absolute left-[-10px] top-[-10px] rounded-full bg-white p-2"
               onClick={removeHandler}
            >
               <AiOutlineClose className="cursor-pointer text-[14px]" />
            </div>
         )}
      </div>
   )
}

export default ProductInCart
