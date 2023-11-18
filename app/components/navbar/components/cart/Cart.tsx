'use client';

import Sidebar from '../../Sidebar';
import ProgressBar from './components/ProgressBar';
import ProductInCart from './components/productInCart/ProductInCart';
import Button from '@/app/components/Button';
import CheckOut from './components/checkOut/CheckOut';
import CarouselCart from './components/carouselCart/CarouselCart';

import { useAppSelector } from '@/redux/hooks';

import CartIcon from './CartIcon';
import CloseSidebar from './components/CloseSidebar';
import { useQuery } from '@tanstack/react-query';
import { CartType, ProductType } from '@/types';

const getProduct = async () => {
   const data = await fetch('http://localhost:3000/api/products');

   const product = await data.json();
   return product;
};

const Cart = () => {
   const { data: product, isSuccess } = useQuery({
      queryKey: ['products'],
      queryFn: getProduct,
   });

   const products: ProductType[] = product;

   const { carts, totalPrice, sidebar } = useAppSelector(
      (state) => state.cartReducer
   );

   return (
      <>
         <CartIcon />

         {isSuccess && (
            <div>
               <Sidebar
                  triggerSidebar={sidebar}
                  className="bg-secondary flex-col justify-between h-full"
                  left
               >
                  <div className=" overflow-y-auto overflow-x-hidden h-full flex flex-col justify-between">
                     <div>
                        <div className="p-[16px] w-full flex flex-between">
                           <div className="flex flex-center gap-1">
                              <CartIcon />
                              <p className="text-black text-[12px]">
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
                                       image={cart.image}
                                       title={cart.title}
                                       price={cart.price}
                                       reviews={cart.reviews}
                                       totalPrice={cart.totalPrice}
                                       soldOut={cart.soldOut}
                                       stars
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
                        <CarouselCart carts={carts} products={products} />
                     </div>

                     {carts.length === 0 && (
                        <Button
                           text={'continue shopping'}
                           size={'sm'}
                           uppercase
                           className="bg-purple p-[16px] m-[16px]"
                        />
                     )}
                  </div>

                  {carts.length > 0 && (
                     <div className="w-full">
                        <CheckOut totalPrice={totalPrice} />
                     </div>
                  )}
               </Sidebar>
            </div>
         )}
      </>
   );
};

export default Cart;
