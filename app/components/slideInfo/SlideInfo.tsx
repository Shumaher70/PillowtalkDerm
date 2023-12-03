'use client';

import { useQueries } from '@tanstack/react-query';
import SearchDesktop from '../navbar/components/search/SearchDesktop';
import Shop from '../navbar/components/info/components/Shop';
import SkinNerdAcademy from '../navbar/components/info/components/SkinNerdAcademy';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { motion } from 'framer-motion';
import { slideShop, slideSkinNerdAcademy } from '@/redux/features/sidebarSlice';
import { useEffect, useState } from 'react';

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

const SlideInfo = () => {
   const [products, blogs] = useQueries({
      queries: [
         { queryKey: ['product'], queryFn: getProduct },
         {
            queryKey: ['blog'],
            queryFn: getBlog,
         },
      ],
   });

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
         {blogs.isSuccess && products.isSuccess && (
            <>
               {screenLg && (
                  <div
                     onMouseEnter={moveHandler}
                     onMouseLeave={blurHandler}
                     className="w-full"
                  >
                     <motion.div
                        className="absolute bg-accent container-rounded-b container-px h-full w-full"
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
                           <SearchDesktop
                              products={products.data}
                              blogs={blogs.data}
                           />
                        </motion.div>
                     </motion.div>

                     <motion.div
                        className="absolute top-[70px] bg-accent container-rounded-b container-px w-full"
                        variants={displayShop}
                        initial={{ y: '-100%' }}
                        animate={'trigger'}
                     >
                        <motion.div
                           variants={displayShop}
                           initial={{ opacity: 1 }}
                           animate="opacity"
                        >
                           <Shop products={products.data} />
                        </motion.div>
                     </motion.div>

                     <motion.div
                        className="absolute top-[70px] bg-accent container-rounded-b container-px w-full"
                        variants={displaySkin}
                        initial={{ y: '-100%' }}
                        animate={'trigger'}
                     >
                        <motion.div
                           variants={displaySkin}
                           initial={{ opacity: 1 }}
                           animate="opacity"
                        >
                           <SkinNerdAcademy blogs={blogs.data} />
                        </motion.div>
                     </motion.div>
                  </div>
               )}
            </>
         )}
      </>
   );
};

export default SlideInfo;
