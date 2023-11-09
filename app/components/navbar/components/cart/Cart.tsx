'use client';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Sidebar from '../../Sidebar';
import ProgressBar from './components/ProgressBar';
import ProductInCart from './components/productInCart/ProductInCart';
import Button from '@/app/components/Button';
import CheckOut from './components/checkOut/CheckOut';
import CarouselCart from './components/carouselCart/CarouselCart';

interface CartProps {
   data: string[];
}

const Cart = ({ data }: CartProps) => {
   const [triggerSidebar, setTriggerSidebar] = useState(false);

   return (
      <>
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
               cursor-pointer
               relative
               "
            onClick={() => setTriggerSidebar(true)}
         />

         <div>
            <Sidebar
               className="bg-secondary flex-col justify-between h-full"
               triggerSidebar={triggerSidebar}
               left
            >
               <div className=" overflow-y-auto overflow-x-hidden h-full flex flex-col justify-between">
                  <div>
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

                     <div className="p-[16px] pt-0">
                        <ProgressBar totalPrice={32} freeShipping={135} />
                     </div>

                     <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-1 gap-5 p-[16px]">
                           {data.length > 0 ? (
                              data.map((card, index) => (
                                 <ProductInCart
                                    key={index}
                                    image="https://pillowtalkderm.com/cdn/shop/files/FlashMask.png?v=1689700581&width=352"
                                    title="Major Fade Active Seal Moisturizer"
                                    price={127}
                                    totalPrice={127}
                                    countProduct
                                    remove
                                 />
                              ))
                           ) : (
                              <p className="text-black text-p text-center">
                                 Your cart is empty (for now).
                              </p>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="p-[16px] pt-0 relative">
                     <p className="text-p font-semibold">PAIR IT WITH</p>
                     <CarouselCart data={data} />
                  </div>

                  {data.length === 0 && (
                     <Button
                        text={'continue shopping'}
                        size={'sm'}
                        uppercase
                        className="bg-purple p-[16px]"
                     />
                  )}
               </div>

               {data.length > 0 && (
                  <div className="w-full">
                     <CheckOut totalPrice="127" />
                  </div>
               )}
            </Sidebar>
         </div>
      </>
   );
};

export default Cart;
