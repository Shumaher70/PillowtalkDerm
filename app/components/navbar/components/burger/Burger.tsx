'use client';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import Sidebar from '../../Sidebar';
import ButtonGroup from './components/ButtonGroup';
import Card from '../../../card/Card';
import Button from '../../../Button';
import { Review } from '@prisma/client';
import BlogCard from '@/app/components/blogCard/BlogCard';

interface BurgerProps {
   className?: string;
   products: {
      id: string;
      images: string[];
      title: string;
      price: number;
      reviews: Review[];
   }[];

   blogs: {
      id: string;
      images: string[];
      title: string;
   }[];
}

const Burger = ({ className, products, blogs }: BurgerProps) => {
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
                     {products.slice(0, 5).map((product) => (
                        <Card product={product} key={product.id} />
                     ))}
                     <div className="w-full h-full flex flex-center">
                        <Button size="sm" uppercase bg text="shop all" />
                     </div>
                  </>
               )}

               {blog && (
                  <>
                     {blogs.map((blog) => (
                        <BlogCard blog={blog} extra={'Read me'} key={blog.id} />
                     ))}

                     <div className="min-h-[100px] w-full relative">
                        <Button
                           size="sm"
                           uppercase
                           bg
                           text="view all"
                           className="absolute bottom-2/4 right-0 translate-x-2/4 translate-y-2/4"
                        />
                     </div>
                     <div className="min-h-[100px] w-full" />
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
