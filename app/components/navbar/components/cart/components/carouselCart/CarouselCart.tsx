"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { CartType, ProductType } from "@/types"
import bestSellers from "@/utils/bestSellers"
import pairItWith from "@/utils/pairItWith"
import CartInCarousel from "./CartInCarousel"
import { useMemo } from "react"

interface CarouselCartProps {
   carts: CartType[]
   products: ProductType[]
}

const CarouselCart = ({ carts, products }: CarouselCartProps) => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   }

   const cartsMemo = useMemo(() => carts, [carts])
   const productsMemo = useMemo(() => products, [products])

   const CustomDot = ({
      onClick,
      active,
   }: {
      onClick: () => void
      active: boolean
   }) => {
      return (
         <button
            className={`${
               active
                  ? "border-pink-600 bg-gradient-to-t from-pink-400 to-pink-600"
                  : "inactive"
            } border-1 mr-2 h-[8px] w-[8px] rounded-full border-purple-300`}
            onClick={() => onClick()}
         ></button>
      )
   }

   return (
      <>
         {(pairItWith(cartsMemo, productsMemo).length > 0 ||
            carts.length === 0) && (
            <p className="text-p font-semibold">
               {cartsMemo.length > 0 ? "PAIR IT WITH" : "BEST SELLERS"}
            </p>
         )}
         {pairItWith(cartsMemo, productsMemo).length > 0 && (
            <Carousel
               swipeable={true}
               arrows={false}
               draggable={true}
               showDots={true}
               responsive={responsive}
               ssr={true}
               infinite={false}
               keyBoardControl={true}
               transitionDuration={10}
               containerClass="carousel-container"
               dotListClass="block w-max h-[15px] absolute top-0 !left-[calc(100%-16px)]  -translate-x-full"
               itemClass="p-2"
               className="!static select-none overflow-visible"
               customDot={
                  pairItWith(cartsMemo, productsMemo).length > 1 ||
                  pairItWith(cartsMemo, productsMemo).length === 0 ? (
                     <CustomDot onClick={() => {}} active={false} />
                  ) : (
                     <></>
                  )
               }
            >
               {pairItWith(cartsMemo, productsMemo).length > 0 &&
                  pairItWith(cartsMemo, productsMemo).map((cart) => (
                     <CartInCarousel
                        key={cart.id}
                        image={cart.images[0]}
                        title={cart.title}
                        reviews={cart.reviews}
                        soldOut={cart.soldOut}
                        stars
                        readme="More details"
                        button
                        price={cart.price}
                        pair={cart.pair}
                        sold={cart.sold}
                        id={cart.id}
                     />
                  ))}
            </Carousel>
         )}

         {pairItWith(cartsMemo, productsMemo).length === 0 &&
            carts.length === 0 && (
               <Carousel
                  swipeable={true}
                  arrows={false}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  ssr={true}
                  infinite={false}
                  keyBoardControl={true}
                  transitionDuration={10}
                  containerClass="carousel-container"
                  dotListClass="block w-max h-[15px] absolute top-0 !left-[calc(100%-16px)]  -translate-x-full"
                  itemClass="p-2"
                  className="!static select-none overflow-visible"
                  customDot={
                     pairItWith(cartsMemo, productsMemo).length > 1 ||
                     pairItWith(cartsMemo, productsMemo).length === 0 ? (
                        <CustomDot onClick={() => {}} active={false} />
                     ) : (
                        <></>
                     )
                  }
               >
                  {bestSellers(productsMemo).map((product) => (
                     <CartInCarousel
                        key={product.id}
                        image={product.images[0]}
                        title={product.title}
                        reviews={product.reviews}
                        soldOut={product.soldOut}
                        stars
                        readme="More details"
                        button
                        price={product.price}
                        pair={product.pair}
                        sold={product.sold}
                        id={product.id}
                     />
                  ))}
               </Carousel>
            )}
      </>
   )
}

export default CarouselCart
