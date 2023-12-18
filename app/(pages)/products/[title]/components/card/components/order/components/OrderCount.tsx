import Button from "@/app/components/button/Button"
import { addCart, addOrder, updateCart } from "@/redux/features/cartSlice"
import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ProductType } from "@/types"
import { useEffect, useState } from "react"
import { RxMinus, RxPlus } from "react-icons/rx"

const OrderCount = ({ product }: { product: ProductType }) => {
   const [quantity, setQuantity] = useState(1)
   const [load, setLoad] = useState(false)

   const cartSlice = useAppSelector((state) => state.cartReducer.carts)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (quantity < 1) {
         setQuantity(1)
      }
   }, [quantity])

   const clickHandler = () => {
      if (cartSlice.length === 0) {
         dispatch(
            addCart({
               id: product.id,
               title: product.title,
               image: product.images[0],
               price: product.price,
               reviews: product.reviews,
               totalPrice: product.price,
               soldOut: product.soldOut!,
               quantity: quantity,
               sold: product.sold,
               pair: product.pair,
            })
         )
         setLoad(true)
         return setTimeout(() => {
            setLoad(false)
            dispatch(sidebarCart(true))
         }, 500)
      }

      if (cartSlice.find((c) => c.id === product.id)) {
         dispatch(addOrder({ id: product.id, quantity }))
         setLoad(true)
         setTimeout(() => {
            setLoad(false)
            dispatch(sidebarCart(true))
         }, 500)
      } else {
         dispatch(
            addCart({
               id: product.id,
               title: product.title,
               image: product.images[0],
               price: product.price,
               reviews: product.reviews,
               totalPrice: product.price,
               soldOut: product.soldOut!,
               quantity: quantity,
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
   }

   const increase = () => {
      setQuantity((previous) => previous + 1)
   }

   const decrease = () => {
      if (quantity > 1) {
         setQuantity((previous) => previous - 1)
      }
   }

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(+event.target.value.replace(/\D/g, ""))
   }

   return (
      <div className="flex w-full items-center gap-3">
         <div
            className={`
            border-1 flex
            h-[36px] 
            items-center 
            justify-around
            gap-2
            rounded-full
            border-[#6a1ba6]
            px-[16px]
            text-[#6a1ba6]
           md:h-[44px]
          `}
         >
            <RxMinus
               className={`text-p cursor-pointer ${
                  quantity === 1 && "opacity-50"
               }`}
               onClick={decrease}
            />
            <input
               type="text"
               className="
               h-full 
               w-full
               max-w-[40px]
               bg-transparent
               text-center 
               text-[14px] 
               text-[#6a1ba6]
               outline-1
               outline-[#f0e8f6]"
               value={quantity}
               onChange={changeHandler}
            />
            <RxPlus className="text-p cursor-pointer" onClick={increase} />
         </div>

         <Button
            onClick={clickHandler}
            className="w-full max-w-[400px] bg-purple-700"
            text={`ADD TO CART - $${product.price.toString()} `}
            size={"sm"}
            load={load}
         />
      </div>
   )
}

export default OrderCount
