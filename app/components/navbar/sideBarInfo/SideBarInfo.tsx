'use client';
import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../../Button';

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
            flex
            flex-col
            bg-accent 
            z-10
            overflow-y-auto
            fixed
            top-0
            right-[100%]
            lg:hidden
         "
         >
            <div className="p-[16px] flex justify-between items-center">
               <div className="flex flex-wrap gap-3 z-10">
                  <Button
                     text="shop"
                     size="sm"
                     className={`${
                        shop ? 'text-white bg-gradient' : 'text-black bg-white'
                     }`}
                     onClick={shopHandler}
                  />
                  <Button
                     text="skin nerd academy"
                     size="sm"
                     className={`${
                        blog ? 'text-white bg-gradient' : 'text-black bg-white'
                     }`}
                     onClick={blogHandler}
                  />
                  <Button
                     text="about"
                     size="sm"
                     className="bg-white text-black"
                  />
               </div>

               <AiOutlineClose
                  onClick={triggerSideBarHandler}
                  className="w-[15px] h-[15px] cursor-pointer"
               />
            </div>
         </m.div>
      </LazyMotion>
   );
};

export default SideBarInfo;
