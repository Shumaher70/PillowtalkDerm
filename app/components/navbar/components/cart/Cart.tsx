"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { sidebarCart } from "@/redux/features/sidebarSlice"

import Sidebar from "../../Sidebar"
import ProgressBar from "./components/ProgressBar"
import ProductInCart from "./components/productInCart/ProductInCart"
import Button from "@/app/components/button/Button"
import CheckOut from "./components/checkOut/CheckOut"
import CarouselCart from "./components/carouselCart/CarouselCart"
import CartIcon from "./CartIcon"
import CloseSidebar from "./components/CloseSidebar"
import { CartType, ProductType } from "@/types"
import { useEffect, useRef, useState } from "react"

const Cart = () => {
   const getProduct = async () => {
      const products = await fetch("http://localhost:3000/api/products")
      if (products.ok) {
         const data = await products.json()
         return setProducts(data)
      }
      throw new Error("blogs data did not respond")
   }

   const dispatch = useAppDispatch()
   const { carts, totalPrice } = useAppSelector((state) => state.cartReducer)
   const cartSlice = useAppSelector((state) => state.sidebarReducer)

   const [products, setProducts] = useState<ProductType[]>([])
   const [heightCheckOut, setHeightCheckOut] = useState(0)
   const checkOutRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      getProduct()
   }, [])

   useEffect(() => {
      const heightCheckOutHandler = () => {
         if (checkOutRef.current?.offsetHeight)
            setHeightCheckOut(checkOutRef.current?.offsetHeight)
      }
      heightCheckOutHandler()
      window.addEventListener("resize", heightCheckOutHandler)

      return () => window.removeEventListener("resize", heightCheckOutHandler)
   }, [checkOutRef.current?.offsetHeight])

   return (
      <>
         <CartIcon />
         {products.length > 0 && (
            <div>
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

                     <div>
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
                     </div>

                     {carts.length > 0 && (
                        <div
                           style={{ paddingBottom: `${heightCheckOut}px` }}
                           className="w-full"
                        >
                           <div
                              ref={checkOutRef}
                              className="fixed bottom-0 w-full"
                           >
                              <CheckOut totalPrice={totalPrice} />
                           </div>
                        </div>
                     )}
                  </div>
               </Sidebar>
            </div>
         )}
      </>
   )
}

export default Cart
