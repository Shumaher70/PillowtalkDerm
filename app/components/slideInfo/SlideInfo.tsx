'use client';

import SearchDesktop from '../navbar/components/search/SearchDesktop';
import Shop from '../navbar/components/info/components/Shop';
import SkinNerdAcademy from '../navbar/components/info/components/SkinNerdAcademy';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { motion } from 'framer-motion';
import { slideShop, slideSkinNerdAcademy } from '@/redux/features/sidebarSlice';
import { useEffect, useState } from 'react';
import { BlogType, ProductType } from '@/types';

const SlideInfo = () => {
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

   const sidebarSlice = useAppSelector((state) => state.sidebarReducer);
   const dispatch = useAppDispatch();

   const [screenLg, setScreenLg] = useState(false);

   useEffect(() => {
      const screen = () => {
         if (window.innerWidth > 1024) {
            setScreenLg(true);
         } else {
            setScreenLg(false);
         }
      };
      screen();
      window.addEventListener('resize', screen);
      return () => {
         return window.removeEventListener('resize', screen);
      };
   }, []);

   const displaySearch = {
      trigger: {
         transition: {
            duration: 0.4,
         },
         y: sidebarSlice.slideSearch ? 0 : '-100%',
      },

      opacity: {
         transition: {
            duration: sidebarSlice.slideSearch ? 0.4 : 0,
            delay: sidebarSlice.slideSearch ? 0.4 : 0,
         },
         opacity: sidebarSlice.slideSearch ? 1 : 0,
      },
   };

   const displayShop = {
      trigger: {
         transition: {
            duration: 0.4,
         },
         y: sidebarSlice.slideShop ? 0 : '-100%',
      },

      opacity: {
         transition: {
            duration: sidebarSlice.slideShop ? 0.4 : 0,
            delay: sidebarSlice.slideShop ? 0.4 : 0,
         },
         opacity: sidebarSlice.slideShop ? 1 : 0,
      },
   };

   const displaySkin = {
      trigger: {
         transition: {
            duration: 0.4,
         },
         y: sidebarSlice.slideSkinNerdAcademy ? 0 : '-100%',
      },

      opacity: {
         transition: {
            duration: sidebarSlice.slideSkinNerdAcademy ? 0.4 : 0,
            delay: sidebarSlice.slideSkinNerdAcademy ? 0.4 : 0,
         },
         opacity: sidebarSlice.slideSkinNerdAcademy ? 1 : 0,
      },
   };

   const moveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target && sidebarSlice.slideShop) {
         dispatch(slideShop(true));
      } else if (e.target && sidebarSlice.slideSkinNerdAcademy) {
         dispatch(slideSkinNerdAcademy(true));
      }
   };

   const blurHandler = () => {
      dispatch(slideShop(false));
      dispatch(slideSkinNerdAcademy(false));
   };

   return (
      <>
         {screenLg && (
            <div
               onMouseEnter={moveHandler}
               onMouseLeave={blurHandler}
               className="w-full z-10"
            >
               <motion.div
                  className="fixed z-10 bg-accent container-rounded-b container-px h-full w-full"
                  variants={displaySearch}
                  initial={{ y: '-100%' }}
                  animate={'trigger'}
               >
                  <motion.div
                     className="w-full"
                     variants={displaySearch}
                     initial={{ opacity: 0 }}
                     animate={'opacity'}
                  >
                     <SearchDesktop products={products} blogs={blogs} />
                  </motion.div>
               </motion.div>

               <motion.div
                  className="fixed z-10 top-[60px] bg-accent container-rounded-b container-px w-full"
                  variants={displayShop}
                  initial={{ y: '-100%' }}
                  animate={'trigger'}
               >
                  <motion.div
                     variants={displayShop}
                     initial={{ opacity: 1 }}
                     animate="opacity"
                  >
                     <Shop products={products} />
                  </motion.div>
               </motion.div>

               <motion.div
                  className="fixed z-10 top-[60px] bg-accent container-rounded-b container-px w-full"
                  variants={displaySkin}
                  initial={{ y: '-100%' }}
                  animate={'trigger'}
               >
                  <motion.div
                     variants={displaySkin}
                     initial={{ opacity: 1 }}
                     animate="opacity"
                  >
                     <SkinNerdAcademy blogs={blogs} />
                  </motion.div>
               </motion.div>
            </div>
         )}
      </>
   );
};

export default SlideInfo;
