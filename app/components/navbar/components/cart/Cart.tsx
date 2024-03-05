"use client"

import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { sidebarCart } from "@/redux/features/sidebarSlice"

import ProgressBar from "./components/ProgressBar"
import ProductInCart from "./components/productInCart/ProductInCart"
import Button from "@/app/components/button/Button"
import CheckOut from "./components/checkOut/CheckOut"
import CarouselCart from "./components/carouselCart/CarouselCart"

import CloseSidebar from "./components/CloseSidebar"
import Sidebar from "../../Sidebar"
import CartIcon from "./CartIcon"

import { CartType, ProductType } from "@/types"

const Cart = ({
   products,
   userId,
}: {
   products: ProductType[] | undefined
   userId?: string
}) => {
   const dispatch = useAppDispatch()
   const { carts, totalPrice, totalQuantity } = useAppSelector(
      (state) => state.cartReducer
   )
   const [SSR, setSSR] = useState(false)

   const cartSlice = useAppSelector((state) => state.sidebarReducer)

   const [heightCheckOut, setHeightCheckOut] = useState(0)
   const checkOutRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const heightCheckOutHandler = () => {
         if (checkOutRef.current?.offsetHeight)
            setHeightCheckOut(checkOutRef.current?.offsetHeight)
      }
      heightCheckOutHandler()
      window.addEventListener("resize", heightCheckOutHandler)

      return () => window.removeEventListener("resize", heightCheckOutHandler)
   }, [checkOutRef.current?.offsetHeight])

   useEffect(() => {
      setSSR(true)
   }, [])

   return (
      <>
         {SSR ? (
            <>
               <CartIcon />
               {products && (
                  <Sidebar
                     triggerSidebar={cartSlice.sidebarCart}
                     className="bg-secondary !z-20 h-full flex-col justify-between lg:w-2/6"
                     left
                  >
                     <div className="flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden">
                        <div>
                           <div className="flex-between flex w-full p-[16px]">
                              <div className="flex-center flex gap-1">
                                 <CartIcon />
                                 <p className="text-[12px] text-black">
                                    Your Cart
                                 </p>
                              </div>

                              <CloseSidebar />
                           </div>

                           <div className="p-[16px] pt-0">
                              <ProgressBar
                                 totalPrice={totalPrice}
                                 freeShipping={135}
                              />
                           </div>

                           <div className="flex flex-col justify-between">
                              <div className="grid grid-cols-1 gap-5 p-[16px]">
                                 {carts.length > 0 ? (
                                    carts.map((cart: CartType) => (
                                       <ProductInCart
                                          key={cart.id}
                                          id={cart.id}
                                          image={cart.image}
                                          title={cart.title}
                                          price={cart.price}
                                          reviews={cart.reviews}
                                          totalPrice={cart.totalPrice}
                                          soldOut={cart.soldOut}
                                          pair={cart.pair}
                                          sold={cart.sold}
                                          stars
                                          countProduct
                                          remove
                                       />
                                    ))
                                 ) : (
                                    <p className="text-p text-center text-black">
                                       Your cart is empty (for now).
                                    </p>
                                 )}
                              </div>
                           </div>
                        </div>

                        <>
                           <div className="relative p-[16px] pt-0">
                              <CarouselCart carts={carts} products={products} />
                           </div>

                           {carts.length === 0 && (
                              <Button
                                 onClick={() => dispatch(sidebarCart(false))}
                                 text={"continue shopping"}
                                 size={"lg"}
                                 className="bg-purple m-[16px] bg-purple-800 uppercase"
                                 classText="text-p"
                                 load={false}
                              />
                           )}
                        </>

                        {carts.length > 0 && (
                           <div
                              style={{ paddingBottom: `${heightCheckOut}px` }}
                              className="w-full"
                           >
                              <div
                                 ref={checkOutRef}
                                 className="fixed bottom-0 w-full"
                              >
                                 <CheckOut
                                    totalPrice={totalPrice}
                                    userId={userId}
                                 />
                              </div>
                           </div>
                        )}
                     </div>
                  </Sidebar>
               )}
            </>
         ) : (
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
               0
            </div>
         )}
      </>
   )
}

export default Cart
