import { sidebar } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';

const CartIcon = () => {
   const dispatch = useAppDispatch();

   const { totalQuantity } = useAppSelector((state) => state.cartReducer);
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
         onClick={() => dispatch(sidebar(true))}
      >
         {totalQuantity}
      </div>
   );
};

export default CartIcon;
