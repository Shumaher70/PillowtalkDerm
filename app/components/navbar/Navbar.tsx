'use client';

import { useQueries, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Burger from './components/burger/Burger';
import Search from './components/search/Search';
import Cart from './components/cart/Cart';
import Info from './components/info/Info';
import Login from './components/Login';
import Logo from './components/Logo';
import Shop from './components/info/components/Shop';
import SkinNerdAcademy from './components/info/components/SkinNerdAcademy';
import { slideShop, slideSkinNerdAcademy } from '@/redux/features/sidebarSlice';

const getProduct = async () => {
   const data = await fetch('http://localhost:3000/api/products');
   const product = await data.json();
   return product;
};

const getBlog = async () => {
   const data = await fetch('http://localhost:3000/api/blog');
   const blog = await data.json();
   return blog;
};

const Navbar = () => {
   const slideSlice = useAppSelector((state) => state.sidebarReducer);
   const dispatch = useDispatch();

   const [screen, setScreen] = useState(false);

   useEffect(() => {
      const screenWidth = () => {
         if (window.innerWidth > 768) {
            setScreen(true);
         } else {
            setScreen(false);
         }
      };
      screenWidth();

      window.addEventListener('resize', screenWidth);

      return () => window.removeEventListener('resize', screenWidth);
   }, []);

   const [products, blogs] = useQueries({
      queries: [
         { queryKey: ['product'], queryFn: getProduct },
         {
            queryKey: ['blog'],
            queryFn: getBlog,
         },
      ],
   });

   const displayShop = {
      display: {
         transition: { duration: 0.3 },
         opacity: slideSlice.slideShop ? 1 : 0,
         display: slideSlice.slideShop ? 'block' : 'none',
      },
   };

   const displaySkin = {
      display: {
         transition: { duration: 0.3 },
         opacity: slideSlice.slideSkinNerdAcademy ? 1 : 0,
         display: slideSlice.slideSkinNerdAcademy ? 'block' : 'none',
      },
   };

   const displayHeight = {
      shop: {
         transition: { duration: 0.3 },
         height: slideSlice.slideShop ? 440 : screen ? 88 : 45,
      },
      skin: {
         transition: { duration: 0.3 },
         height: slideSlice.slideSkinNerdAcademy ? 540 : screen ? 88 : 45,
      },

      close: {
         transition: { duration: 0.3 },
         height: screen ? 88 : 45,
      },
   };

   const height = () => {
      if (slideSlice.slideShop) {
         return 'shop';
      } else if (slideSlice.slideSkinNerdAcademy) {
         return 'skin';
      } else {
         return 'close';
      }
   };

   return (
      <>
         {products.isSuccess && blogs.isSuccess && (
            <motion.header
               onMouseLeave={() => {
                  dispatch(slideShop(false));
                  dispatch(slideSkinNerdAcademy(false));
               }}
               variants={displayHeight}
               initial={{ height: `${screen ? '88px' : '35px'}` }}
               animate={height()}
               className={`
               w-full
               container-px
               py-[8px] 
               container-rounded-b
               bg-accent
               fixed 
               top-0
               overflow-hidden
               `}
            >
               <nav className="flex flex-between  md:h-[72px] w-full">
                  <div className="flex justify-start gap-3 w-full">
                     <Info className="hidden lg:flex" />
                     <Burger
                        className="lg:hidden"
                        products={products.data}
                        blogs={blogs.data}
                     />
                     <Search
                        className="block lg:hidden"
                        products={products.data}
                        blogs={blogs.data}
                     />
                  </div>

                  <div className="flex flex-center w-full">
                     <Logo />
                  </div>

                  <div className="flex justify-end items-center gap-3 w-full">
                     <Search
                        className="hidden lg:block"
                        products={products.data}
                        blogs={blogs.data}
                     />
                     <Login />
                     <Cart />
                  </div>
               </nav>

               <div>
                  <motion.div variants={displayShop} animate="display">
                     <Shop products={products.data} />
                  </motion.div>

                  <motion.div variants={displaySkin} animate="display">
                     <SkinNerdAcademy blogs={blogs.data} />
                  </motion.div>
               </div>
            </motion.header>
         )}
      </>
   );
};

export default Navbar;
