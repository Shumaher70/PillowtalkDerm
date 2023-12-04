'use client';

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
import { useEffect, useState } from 'react';
import { BlogType, ProductType } from '@/types';

const Navbar = () => {
   const dispatch = useDispatch();
   const [products, setProducts] = useState<ProductType[]>([]);
   const [blogs, setBlogs] = useState<BlogType[]>([]);

   const getProduct = async () => {
      const products = await fetch('http://localhost:3000/api/products');
      if (products.ok) {
         const data = await products.json();
         return setProducts(data);
      }
      throw new Error('blogs data did not respond');
   };

   const getBlog = async () => {
      const blogs = await fetch('http://localhost:3000/api/blog');
      if (blogs.ok) {
         const data = await blogs.json();
         return setBlogs(data);
      }
      throw new Error('blogs data did not respond');
   };

   useEffect(() => {
      getProduct();
      getBlog();
   }, []);
   return (
      <>
         {
            <motion.header
               onMouseLeave={() => {
                  dispatch(slideShop(false));
                  dispatch(slideSkinNerdAcademy(false));
               }}
               className={`
               z-10
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
                        products={products}
                        blogs={blogs}
                     />
                     <SearchMobile
                        className="block lg:hidden"
                        products={products}
                        blogs={blogs}
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
         }
      </>
   );
};

export default Navbar;
