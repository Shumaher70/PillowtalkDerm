'use client';
import { sidebarCart } from '@/redux/features/sidebarSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect, useState } from 'react';

const CartIcon = () => {
   const dispatch = useAppDispatch();

   const [totalQuantity, setTotalQuantity] = useState(0);

   const cartReducer = useAppSelector((state) => state.cartReducer);
   useEffect(() => {
      setTotalQuantity(cartReducer.totalQuantity);
   }, [cartReducer.totalQuantity]);
   return (
      <div
         className="
      w-[30px] 
      h-[30px] 
      flex 
      flex-center 
      rounded-full 
      bg-gradient-to-r from-pink-400 to-pink-600
      text-white 
      text-p 
      cursor-pointer
      relative
      "
         onClick={() => dispatch(sidebarCart(true))}
      >
         {totalQuantity}
      </div>
   );
};

export default CartIcon;
