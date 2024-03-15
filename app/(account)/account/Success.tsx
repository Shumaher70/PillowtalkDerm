"use client"

import Button from "@/app/components/button/Button"
import cartSlice, { refreshCarts } from "@/redux/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { CartType } from "@/types"
import { useUser } from "@clerk/nextjs"
import { Order } from "@prisma/client"

import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

const getOrders = async () => {
   const orders: Order[] = await axios
      .get("/api/order")
      .then((response) => response.data)

   return orders
}

const postOrders = async (orders: CartType[]) => {
   await axios.post("/api/order", orders)
}

const Success = ({ userId }: { userId?: string }) => {
   const cartsSlice = useAppSelector((state) => state.cartReducer.carts)
   const dispatch = useAppDispatch()
   const { user } = useUser()
   const route = useRouter()

   const { data, isLoading, isSuccess } = useQuery({
      queryKey: ["getOrders"],
      queryFn: getOrders,
   })

   const { mutate } = useMutation({
      mutationFn: postOrders,
      onSuccess: () => {
         dispatch(refreshCarts())
      },
   })

   useEffect(() => {
      if (userId === user?.id && cartsSlice.length > 0) {
         mutate(cartsSlice)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user?.id, userId])

   return (
      <>
         {isSuccess && (
            <>
               {data.length > 0 ? (
                  <div className="flex h-[80vh] w-full flex-col gap-5 overflow-auto">
                     {data?.map((order) => (
                        <div
                           key={order.id}
                           className="container-rounded w-full gap-5 shadow-lg"
                        >
                           <div className="container-rounded-t flex flex-wrap gap-4 bg-gray-100 p-5">
                              <div className="flex flex-col">
                                 <h3 className="text-[20px] font-bold">
                                    Order from{" "}
                                    {new Date(order.updatedAt)
                                       .toISOString()
                                       .slice(0, 10)}
                                 </h3>
                                 <p className="text-[14px]">{order.id}</p>
                              </div>

                              <div className="ml-auto flex items-baseline p-0">
                                 <span className="text-[13px]">paid for</span>
                                 <span className="text-[20px] font-bold">
                                    {`${order.price}.00 $`}
                                 </span>
                              </div>
                           </div>

                           <div className="flex w-full flex-wrap p-5">
                              <div className="flex-col">
                                 <div className="flex items-center gap-2">
                                    <p className="font-medium">
                                       Delivery to the pick-up point:
                                    </p>
                                    <div className="flex rounded-full bg-gray-300 px-2 py-1 text-center text-[10px] uppercase">
                                       On the way
                                    </div>
                                 </div>

                                 <div className="flex gap-1">
                                    <p>Delivery date:</p> <p>in processing</p>
                                 </div>
                              </div>

                              <div className="m-auto flex">
                                 <Image
                                    onClick={(e) => {
                                       route.push(
                                          `/products/${order.title
                                             .split("")
                                             .map((item) =>
                                                item.replace(" ", "-")
                                             )
                                             .join("")
                                             .toLowerCase()}`
                                       )
                                    }}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    src={order.image}
                                    alt={order.title}
                                    className="h-[100px] w-[100px] cursor-pointer object-cover"
                                 />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className=" flex-center flex h-full w-full flex-col">
                     <div className="flex items-center">
                        <p className=" whitespace-nowrap">{`You don't have any orders`}</p>
                        <div className="relative p-[100%]">
                           <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              src="/imagesNoComment/noComment.png"
                              alt="no orders"
                              className="absolute right-0 top-0 h-full w-full object-cover"
                           />
                        </div>
                     </div>
                     <Button
                        text={"to shop"}
                        size={"lg"}
                        load={false}
                        className="mt-5 bg-purple-700 uppercase"
                        href="/shop"
                     />
                  </div>
               )}
            </>
         )}

         {isLoading && (
            <div className="flex-center flex">
               <AiOutlineLoading3Quarters className="animate-spin text-[50px] text-pink-600 md:text-[100px] lg:text-[150px]" />
            </div>
         )}
      </>
   )
}

export default Success
