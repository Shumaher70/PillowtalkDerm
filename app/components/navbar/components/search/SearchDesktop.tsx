'use client';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { BlogType, ProductType } from '@/types';

import Input from './components/Input';
import TopSearches from './components/TopSearches';
import Card from '@/app/components/card/Card';
import BlogCard from '@/app/components/blogCard/BlogCard';
import { useAppDispatch } from '@/redux/hooks';
import { slideSearch } from '@/redux/features/sidebarSlice';
import { schnyderMlightFont } from '@/app/layout';
interface SearchProps {
   className?: string;
   products: ProductType[];
   blogs: BlogType[];
}

const SearchDesktop = ({ className, products, blogs }: SearchProps) => {
   const dispatch = useAppDispatch();

   const [input, setInput] = useState('');
   const [postInput, setPostInput] = useState('');
   const [heightCard, setHeightCart] = useState(0);
   const [changeColumns, setChangeColumns] = useState(false);

   const searchRef = useRef<HTMLDivElement>(null);
   const trendingRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const heightCardHandler = () => {
         if (
            searchRef.current?.offsetHeight &&
            trendingRef.current?.offsetHeight
         ) {
            return setHeightCart(
               searchRef.current?.offsetHeight +
                  trendingRef.current?.offsetHeight
            );
         } else if (
            searchRef.current?.offsetHeight &&
            !trendingRef.current?.offsetHeight
         ) {
            return setHeightCart(searchRef.current?.offsetHeight);
         }
      };

      heightCardHandler();
   }, []);

   useEffect(() => {
      input.length > 0 ? setChangeColumns(true) : setChangeColumns(false);
   }, [input.length]);

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
      <div className={`pt-[98px] ${!changeColumns && 'grid grid-cols-3'}`}>
         <div className="col-span-2">
            <div className="flex flex-col gap-3">
               <div className="flex flex-center gap-3" ref={searchRef}>
                  <Input getInput={getInput} postInput={postInput} />
                  <div className="p-3 bg-white rounded-full">
                     <AiOutlineClose
                        className="w-[20px] h-[20px] cursor-pointer"
                        onClick={() => dispatch(slideSearch(false))}
                     />
                  </div>
               </div>

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

            <div className={`flex justify-between h-full w-full gap-10 pt-10`}>
               {input.length === 0 && (
                  <div className="min-w-max">
                     <TopSearches
                        className="grid !grid-cols-1"
                        getTopSearch={getTopSearch}
                     />
                  </div>
               )}
               <div>
                  {!changeColumns && (
                     <p
                        className={`${schnyderMlightFont.className} text-title !font-[300]`}
                        ref={trendingRef}
                     >
                        Trending
                     </p>
                  )}
                  <div
                     style={{
                        height: `calc(100vh - ${heightCard + 98 + 50}px)`,
                     }}
                     className={`overflow-auto`}
                  >
                     <div
                        className={`grid ${
                           changeColumns ? 'grid-cols-4' : 'grid-cols-2'
                        }`}
                     >
                        {(filterProducts.length === 0 &&
                           filterBlogs.length === 0) ||
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
                                   />
                                );
                             })}

                        {(filterProducts.length === 0 &&
                           filterBlogs.length === 0) ||
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SearchDesktop;
