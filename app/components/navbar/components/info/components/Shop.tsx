"use client"

import Button from "@/app/components/button/Button"
import Card from "@/app/components/card/Card"
import { ProductType } from "@/types"
import { useRouter } from "next/navigation"
import { useMemo } from "react"

interface ShopProps {
   products: ProductType[] | undefined

   className?: string
}

const Shop = ({ products }: ShopProps) => {
   const productMemo = useMemo(() => products, [products])
   const route = useRouter()
   if (productMemo)
      return (
         <div className="py-[30px]">
            <div className="grid grid-cols-6 gap-2">
               {productMemo
                  .slice(0, 6)
                  .map(
                     ({
                        id,
                        images,
                        title,
                        price,
                        reviews,
                        soldOut,
                        sold,
                        pair,
                     }) => (
                        <Card
                           key={id}
                           className="bg-white"
                           product={{
                              id: id,
                              images: images,
                              title: title,
                              price: price,
                              reviews: reviews,
                              soldOut: soldOut,
                              sold: sold,
                              pair: pair,
                           }}
                        />
                     )
                  )}
            </div>
            <div className="flex-center mt-10 flex w-full">
               <Button
                  text="shop all"
                  className="bg-gradient-to-r from-pink-400 to-pink-600 uppercase"
                  size={"lg"}
                  load={false}
                  onClick={() => route.push("/shop")}
               />
            </div>
         </div>
      )
}

export default Shop
