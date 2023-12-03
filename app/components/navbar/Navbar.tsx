'use client';

import { useQueries } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';

import Burger from './components/burger/Burger';
import SearchMobile from './components/search/SearchMobile';
import Cart from './components/cart/Cart';
import Info from './components/info/Info';
import Login from './components/Login';
import Logo from './components/Logo';

import {
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from '@/redux/features/sidebarSlice';

import { CiSearch } from 'react-icons/ci';

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
   const dispatch = useDispatch();

   const [products, blogs] = useQueries({
      queries: [
         { queryKey: ['product'], queryFn: getProduct },
         {
            queryKey: ['blog'],
            queryFn: getBlog,
         },
      ],
   });

   return (
      <>
         {products.isSuccess && blogs.isSuccess && (
            <motion.header
               onMouseLeave={() => {
                  dispatch(slideShop(false));
                  dispatch(slideSkinNerdAcademy(false));
               }}
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
               <nav className="flex flex-between md:h-[72px] w-full">
                  <div className="flex justify-start gap-3 w-full">
                     <Info className="hidden lg:flex" />
                     <Burger
                        className="lg:hidden"
                        products={products.data}
                        blogs={blogs.data}
                     />
                     <SearchMobile
                        className="block lg:hidden"
                        products={products.data}
                        blogs={blogs.data}
                     />
                  </div>

                  <div className="flex flex-center w-full">
                     <Logo />
                  </div>

                  <div className="flex justify-end items-center gap-3 w-full">
                     <div className="hidden lg:block">
                        <CiSearch
                           className={`text-[30px] cursor-pointer `}
                           onClick={() => {
                              dispatch(slideSearch(true));
                              dispatch(slideShop(false));
                              dispatch(slideSkinNerdAcademy(false));
                           }}
                        />
                     </div>
                     <Login />
                     <Cart />
                  </div>
               </nav>
            </motion.header>
         )}
      </>
   );
};

export default Navbar;
