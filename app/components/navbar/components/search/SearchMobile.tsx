'use client';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

import { BlogType, ProductType } from '@/types';

import Sidebar from '../../Sidebar';
import Input from './components/Input';
import TopSearches from './components/TopSearches';
import Card from '@/app/components/card/Card';
import BlogCard from '@/app/components/blogCard/BlogCard';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sidebarSearch } from '@/redux/features/sidebarSlice';
interface SearchProps {
   className?: string;
   products: ProductType[];
   blogs: BlogType[];
}

const Search = ({ className, products, blogs }: SearchProps) => {
   const dispatch = useAppDispatch();
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer);

   const [input, setInput] = useState('');
   const [postInput, setPostInput] = useState('');

   const getInput = (event: string) => {
      setInput(event);
   };

   const getTopSearch = (event: string) => {
      setPostInput(event);
   };

   const filterBlogs = blogs.filter((blog) =>
      blog.title.trim().includes(input)
   );

   const filterProducts = products.filter((product) =>
      product.title.trim().includes(input)
   );

   return (
      <>
         <Sidebar triggerSidebar={sidebarSlice.sidebarSearch}>
            <div className="flex flex-col p-[16px] gap-3">
               <div className="flex flex-center gap-3 w-full">
                  <Input getInput={getInput} postInput={postInput} />
                  <AiOutlineClose
                     onClick={() => dispatch(sidebarSearch(false))}
                     className="w-[15px] h-[15px] cursor-pointer"
                  />
               </div>

               {input.length === 0 && (
                  <div className="w-full">
                     <TopSearches
                        className="mt-3"
                        getTopSearch={getTopSearch}
                     />
                  </div>
               )}

               {input.length > 0 && (
                  <div>
                     {input.length > 0 &&
                     (filterProducts.length || filterBlogs.length) ? (
                        <p className="text-p">
                           {filterBlogs.length + filterProducts.length} result
                           {filterBlogs.length + filterProducts.length > 1
                              ? 's'
                              : ''}
                           {` "${input}"`}
                        </p>
                     ) : (
                        <p className="text-p">
                           No results found for “{input}”. Maybe these will
                           interest you...
                        </p>
                     )}
                  </div>
               )}
            </div>

            <div className="grid grid-cols-2 px-[16px] pb-[16px] gap-4 overflow-auto">
               {(filterProducts.length === 0 && filterBlogs.length === 0) ||
               input.length === 0
                  ? products.slice(0, 3).map((product) => {
                       return (
                          <Card
                             key={product.id}
                             btn
                             win
                             stars
                             rating
                             product={product}
                             imageAnimated
                             className="bg-white"
                          />
                       );
                    })
                  : filterProducts.map((product) => {
                       return (
                          <Card
                             key={product.id}
                             btn
                             win
                             stars
                             rating
                             product={product}
                             imageAnimated
                             className="bg-white"
                          />
                       );
                    })}

               {(filterProducts.length === 0 && filterBlogs.length === 0) ||
               input.length === 0
                  ? blogs
                       .slice(0, 1)
                       .map((blog) => (
                          <BlogCard
                             key={blog.id}
                             extra="Read Me"
                             id={blog.id}
                             images={blog.images}
                             title={blog.title}
                          />
                       ))
                  : filterBlogs.map((blog) => (
                       <BlogCard
                          key={blog.id}
                          extra="Read Me"
                          id={blog.id}
                          images={blog.images}
                          title={blog.title}
                       />
                    ))}
            </div>
         </Sidebar>

         <CiSearch
            onClick={() => dispatch(sidebarSearch(true))}
            className={`text-[30px] cursor-pointer ${className}`}
         />
      </>
   );
};

export default Search;
