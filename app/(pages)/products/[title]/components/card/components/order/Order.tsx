"use client"
import { ProductType } from "@/types"
import Steps from "./components/Steps"
import Title from "./components/Title"
import Rating from "@/app/components/card/components/Rating"
import Stars from "@/app/components/card/components/Stars"
import calcRatingStars from "@/utils/calcRatingStars"
import Subtitle from "./components/Subtitle"
import OrderCount from "./components/OrderCount"
import { useUser } from "@clerk/nextjs"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { productIdAction } from "@/redux/features/commentSlice"

const Order = ({ product }: { product: ProductType }) => {
   const ratingStars = calcRatingStars(product.reviews.length, product.reviews)
   const dispatch = useAppDispatch()
   const { user } = useUser()

   useEffect(() => {
      dispatch(productIdAction(product.id))
   }, [dispatch, product.id])

   return (
      <div className="box-p bg-secondary container-rounded flex w-full flex-col gap-3">
         {product.steps && <Steps steps={product.steps} />}

         <div>
            <Title title={product.title} />

            <div className="mt-2 flex items-center gap-2">
               <Stars stars={ratingStars} />
               <Rating rating={product.reviews.length} />
            </div>
         </div>

         <Subtitle subTitle={product.subTitle} />

         <OrderCount product={product} />
      </div>
   )
}

export default Order
