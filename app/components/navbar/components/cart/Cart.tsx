'use client';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Sidebar from '../../Sidebar';
import ProgressBar from './components/ProgressBar';
import ProductInCart from './components/productInCart/ProductInCart';

interface CartProps {
   data?: string[];
}

const Cart = ({ data }: CartProps) => {
   const [triggerSidebar, setTriggerSidebar] = useState(false);

   return (
      <>
         <div>
            <Sidebar
               className="bg-secondary"
               triggerSidebar={triggerSidebar}
               left
            >
               <div className="p-[16px] w-full flex flex-between">
                  <div className="flex flex-center gap-1">
                     <div className="w-[25px] h-[25px] rounded-full flex flex-center bg-gradient ">
                        <p className="text-[12px] text-white">0</p>
                     </div>
                     <p className="text-black text-[12px]">Your Cart</p>
                  </div>

                  <AiOutlineClose
                     className="text-black text-[15px] cursor-pointer"
                     onClick={() => setTriggerSidebar(false)}
                  />
               </div>

               <div className="p-[16px]">
                  <ProgressBar totalPrice={32} freeShipping={135} />
               </div>

               <div className="grid grid-cols-1 p-[16px] overflow-auto">
                  {data ? (
                     data.map((card, index) => <ProductInCart key={index} />)
                  ) : (
                     <p className="text-black text-p text-center">
                        Your cart is empty (for now).
                     </p>
                  )}
               </div>
            </Sidebar>
         </div>

         <div
            className="
               w-[30px] 
               h-[30px] 
               flex 
               flex-center 
               rounded-full 
               bg-gradient 
               text-white 
               text-p 
               cursor-pointer"
            onClick={() => setTriggerSidebar(true)}
         ></div>
      </>
   );
};

export default Cart;
