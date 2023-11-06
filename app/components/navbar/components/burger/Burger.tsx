'use client';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import Sidebar from '../../Sidebar';
import ButtonGroup from './components/ButtonGroup';
import Card from '../../../card/Card';
import Button from '../../../Button';

interface BurgerProps {
   className?: string;
}

const Burger = ({ className }: BurgerProps) => {
   const [triggerSideBar, setTriggerSideBar] = useState(false);
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

   const triggerSideBarHandler = () =>
      setTriggerSideBar((previous) => !previous);

   return (
      <div>
         <Sidebar triggerSidebar={triggerSideBar}>
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
                        <Card
                           href=""
                           title="Major Fade Hyper Serum"
                           image="https://pillowtalkderm.com/cdn/shop/files/Serum_cb2ae4fe-88df-40f1-8175-cf1ff50fe747.png?v=1689700596&width=352"
                           key={index}
                        />
                     ))}
                     <div className="w-full h-full flex flex-center">
                        <Button size="sm" uppercase bg text="shop all" />
                     </div>
                  </>
               )}

               {blog && (
                  <>
                     {Array.from({ length: 4 }).map((_, index) => (
                        <Card
                           href=""
                           title="Why is Your Face Puffy? 10 Reasons Why, According to Our Founder"
                           image="https://pillowtalkderm.com/cdn/shop/articles/Screenshot_2023-09-18_at_1.45.07_PM.png?v=1695059121&width=832"
                           extra
                           key={index}
                        />
                     ))}
                  </>
               )}
            </div>
         </Sidebar>
         <div onClick={triggerSideBarHandler}>
            <RxHamburgerMenu
               className={`text-[30px] cursor-pointer ${className}`}
            />
         </div>
      </div>
   );
};

export default Burger;
