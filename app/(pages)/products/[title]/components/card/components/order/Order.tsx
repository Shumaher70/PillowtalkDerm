"use client"
import { ProductType } from "@/types"
import Steps from "./components/Steps"
import Title from "./components/Title"
import Rating from "@/app/components/card/components/Rating"
import Stars from "@/app/components/card/components/Stars"
import calcRatingStars from "@/utils/calcRatingStars"
import Subtitle from "./components/Subtitle"
import OrderCount from "./components/OrderCount"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect, useRef } from "react"
import { productIdAction } from "@/redux/features/commentSlice"
import useIsInViewport from "@/app/hooks/useIsInViewport"
import { visibilityAction } from "@/redux/features/cartMotionSlice"

const Order = ({ product }: { product: ProductType }) => {
   const ratingStars = calcRatingStars(product.reviews.length, product.reviews)
   const dispatch = useAppDispatch()

   const refPage = useRef<HTMLDivElement>(null)
   const page = useIsInViewport(refPage)

   useEffect(() => {
      dispatch(visibilityAction(page))
   }, [page])

   useEffect(() => {
      dispatch(productIdAction(product.id))
   }, [dispatch, product.id])

   return (
      <div
         className="box-p bg-secondary container-rounded flex w-full flex-col gap-3"
         ref={refPage}
      >
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
