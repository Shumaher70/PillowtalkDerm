'use client';
import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import ButtonGroup from './components/ButtonGroup';
import Button from '../../Button';
import Card from './components/Card';

interface SideBarInfoProps {
   triggerSideBar: boolean;
   triggerSideBarHandler: () => void;
}

const sideBar = {
   open: { x: '100%' },
   closed: { x: '0' },
};

const SideBarInfo = ({
   triggerSideBar,
   triggerSideBarHandler,
}: SideBarInfoProps) => {
   const [shop, setShop] = useState(true);
   const [blog, setBlog] = useState(false);

   const shopHandler = () => {
      setShop(true);
      setBlog(false);
   };
   const blogHandler = () => {
      setBlog(true);
      setShop(false);
   };

   return (
      <LazyMotion features={domAnimation}>
         <m.div
            animate={triggerSideBar ? 'open' : 'closed'}
            transition={{ duration: 0.5 }}
            variants={sideBar}
            className="
            w-full 
            h-full 
            overflow-hidden
            flex
            flex-col
            bg-accent 
            z-10
            fixed
            top-0
            right-[100%]
            lg:hidden
         "
         >
            <div
               className="
               p-[16px] 
               flex 
               justify-between 
               items-center 
               w-full
               "
            >
               <div className="flex flex-wrap gap-3 z-10">
                  <ButtonGroup
                     shop={shop}
                     blog={blog}
                     shopHandler={shopHandler}
                     blogHandler={blogHandler}
                  />
               </div>

               <AiOutlineClose
                  onClick={triggerSideBarHandler}
                  className="w-[15px] h-[15px] cursor-pointer"
               />
            </div>
            <div
               className="
               w-full 
               px-[16px] 
               pb-[16px] 
               pt-0 
               grid 
               grid-cols-2 
               md:grid-cols-3 
               overflow-auto
               "
            >
               {shop && (
                  <>
                     {Array.from({ length: 5 }).map((_, index) => (
                        <Card href="" key={index} />
                     ))}
                     <div className="w-full h-full flex flex-center">
                        <Button size="sm" uppercase bg text="shop all" />
                     </div>
                  </>
               )}

               {blog && (
                  <>
                     {Array.from({ length: 4 }).map((_, index) => (
                        <Card href="" extra key={index} />
                     ))}
                  </>
               )}
            </div>
         </m.div>
      </LazyMotion>
   );
};

export default SideBarInfo;
