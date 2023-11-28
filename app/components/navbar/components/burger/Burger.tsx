'use client';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import Sidebar from '../../Sidebar';
import ButtonGroup from './components/ButtonGroup';
import Card from '../../../card/Card';
import Button from '../../../button/Button';
import BlogCard from '@/app/components/blogCard/BlogCard';
import { BlogType, ProductType } from '@/types';

interface BurgerProps {
   className?: string;
   products: ProductType[];
   blogs: BlogType[];
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

   if (blogs && products)
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
                           <Button
                              size="lg"
                              className="uppercase bg-gradient-to-r from-pink-400 to-pink-600"
                              classText="text-p"
                              text="shop all"
                              load={false}
                           />
                        </div>
                     </>
                  )}

                  {blog && (
                     <>
                        {blogs.map(({ id, images, title }) => {
                           return (
                              <BlogCard
                                 extra={'Read me'}
                                 key={id}
                                 id={id}
                                 images={images}
                                 title={title}
                              />
                           );
                        })}

                        <div className="min-h-[100px] flex justify-end items-center">
                           <Button
                              size="sm"
                              text="view all"
                              className="uppercase translate-x-2/4 bg-gradient-to-r from-pink-400 to-pink-600"
                              classText="text-p"
                              load={false}
                           />
                        </div>
                        <div className="min-h-[100px]" />
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
