'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sidebarCart } from '@/redux/features/sidebarSlice';

import Sidebar from '../../Sidebar';
import ProgressBar from './components/ProgressBar';
import ProductInCart from './components/productInCart/ProductInCart';
import Button from '@/app/components/button/Button';
import CheckOut from './components/checkOut/CheckOut';
import CarouselCart from './components/carouselCart/CarouselCart';
import CartIcon from './CartIcon';
import CloseSidebar from './components/CloseSidebar';
import { CartType, ProductType } from '@/types';
import { useEffect, useState } from 'react';

const Cart = () => {
   const [products, setProducts] = useState<ProductType[]>([]);

   const getProduct = async () => {
      const products = await fetch('http://localhost:3000/api/products');
      if (products.ok) {
         const data = await products.json();
         return setProducts(data);
      }
      throw new Error('blogs data did not respond');
   };
   useEffect(() => {
      getProduct();
   }, []);

   const dispatch = useAppDispatch();
   const { carts, totalPrice } = useAppSelector((state) => state.cartReducer);
   const cartSlice = useAppSelector((state) => state.sidebarReducer);

   return (
      <>
         <CartIcon />
         {products.length && (
            <div>
               <Sidebar
                  triggerSidebar={cartSlice.sidebarCart}
                  className="bg-secondary flex-col justify-between h-full lg:w-2/6 z-20"
                  left
               >
                  <div className="overflow-y-auto overflow-x-hidden h-full flex flex-col justify-between">
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
                                       id={cart.id}
                                       image={cart.image}
                                       title={cart.title}
                                       price={cart.price}
                                       reviews={cart.reviews}
                                       totalPrice={cart.totalPrice}
                                       soldOut={cart.soldOut}
                                       pair={cart.pair}
                                       sold={cart.sold}
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

                     <div>
                        <div className="p-[16px] pt-0 relative">
                           <p className="text-p font-semibold">
                              {carts.length > 0
                                 ? 'PAIR IT WITH'
                                 : 'BEST SELLERS'}
                           </p>
                           <CarouselCart carts={carts} products={products} />
                        </div>

                        {carts.length === 0 && (
                           <Button
                              onClick={() => dispatch(sidebarCart(false))}
                              text={'continue shopping'}
                              size={'lg'}
                              className="bg-purple m-[16px] bg-purple-800 uppercase"
                              classText="text-p"
                              load={false}
                           />
                        )}
                     </div>
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
