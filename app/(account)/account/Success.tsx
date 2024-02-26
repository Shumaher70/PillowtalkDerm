"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Order } from "@prisma/client"
import axios from "axios"
import { useEffect, useState } from "react"

const Success = ({ userId }: { userId?: string }) => {
   const [orders, setOrders] = useState<Order[]>([])
   const cartsSlice = useAppSelector((state) => state.cartReducer.carts)
   const dispatch = useAppDispatch()

   useEffect(() => {
      const getOrders = async () => {
         await axios
            .get("http://localhost:3000/api/order")
            .then((response) => setOrders(response.data))
      }

      getOrders()
   }, [])

   useEffect(() => {
      const postOrders = async () => {
         await axios
            .post("http://localhost:3000/api/order", cartsSlice)
            .then((response) => {
               if (response.data) {
                  // dispatch(refreshCarts())
               }
            })
      }
      if (userId) {
         postOrders()
      }
   }, [cartsSlice, userId])

   return <div>Success</div>
}

export default Success
