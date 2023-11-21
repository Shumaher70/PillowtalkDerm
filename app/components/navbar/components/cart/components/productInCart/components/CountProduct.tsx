'use client';

import {
   decreaseCart,
   increaseCart,
   removeCart,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { RxMinus, RxPlus } from 'react-icons/rx';

interface CountProductProps {
   className?: string;
   cartId: string;
}

const CountProduct = ({ className, cartId }: CountProductProps) => {
   const carts = useAppSelector((action) => action.cartReducer.carts);
   const dispatch = useAppDispatch();

   const quantity = carts.filter((cart) => cart.id === cartId)[0].quantity;

   const [count, setCount] = useState(quantity);

   useEffect(() => {
      setCount(quantity);
      dispatch(increaseCart({ id: cartId, quantity: count }));
      if (count < 1) {
         dispatch(removeCart(cartId));
      }
   }, [cartId, count, dispatch, quantity]);

   const decrease = () => {
      setCount((previous) => (previous -= 1));
      dispatch(decreaseCart({ id: cartId, quantity: count }));
   };

   const increase = () => {
      setCount((previous) => (previous += 1));
      dispatch(increaseCart({ id: cartId, quantity: count }));
   };

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(increaseCart({ id: cartId, quantity: count }));
      dispatch(decreaseCart({ id: cartId, quantity: count }));
      setCount(+event.target.value);
   };
   return (
      <div
         className={`
         px-[8px]
         py-[5px]
         w-[90px]
         rounded-full 
         border-1 
         border-[#6a1ba6]
         text-[#6a1ba6]
         flex
         flex-between
         gap-2
         ${className}
         `}
      >
         <RxMinus className="text-p cursor-pointer" onClick={decrease} />
         <input
            type="number"
            className="
               absolute 
               top-[-30%] 
               right-2/4 
               translate-x-2/4 
               text-[14px] 
               w-[40px] 
               h-[40px] 
               text-[#6a1ba6] 
               bg-transparent 
               text-center"
            value={count}
            onChange={changeHandler}
         />
         <RxPlus className="text-p cursor-pointer" onClick={increase} />
      </div>
   );
};

export default CountProduct;
