"use client"
import { useCallback, useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"

import Sidebar from "../../Sidebar"
import Input from "./components/Input"
import TopSearches from "./components/TopSearches"
import Card from "@/app/components/card/Card"
import BlogCard from "@/app/components/blogCard/BlogCard"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { sidebarSearch } from "@/redux/features/sidebarSlice"

import { BlogType, ProductType } from "@/types"

import axios from "axios"
import { useQuery } from "@tanstack/react-query"
interface SearchProps {
   className?: string
}

const Search = ({ className }: SearchProps) => {
   const dispatch = useAppDispatch()
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)

   const [input, setInput] = useState("")
   const [postInput, setPostInput] = useState("")
   const [emptyFilterData, setEmptyFilterData] = useState<{
      products: ProductType[]
      blogs: BlogType[]
   }>()

   const fetchData = async () => {
      return await axios
         .get(`http://localhost:3000/api/productsFilter?filter=${input}`)
         .then(
            (response) =>
               response.data as { products: ProductType[]; blogs: BlogType[] }
         )
   }

   const { data, isSuccess, isPending } = useQuery({
      queryKey: [input],
      queryFn: fetchData,
   })

   useEffect(() => {
      if (
         isSuccess &&
         data &&
         (data.products.length > 0 || data.blogs.length > 0)
      ) {
         setEmptyFilterData(data)
      }
   }, [isSuccess, data])

   const getInput = useCallback((event: string) => {
      setInput(event)
   }, [])

   const getTopSearch = useCallback((event: string) => {
      setPostInput(event)
   }, [])

   const cleanInput = () => {
      setInput("")
      setPostInput("")
   }

   return (
      <>
         <>
            <Sidebar triggerSidebar={sidebarSlice.sidebarSearch}>
               <div className="flex flex-col gap-3 p-[16px]">
                  <div className="flex-center flex w-full gap-3">
                     <Input
                        getInput={getInput}
                        postInput={postInput}
                        cleanInput={cleanInput}
                     />
                     <AiOutlineClose
                        onClick={() => dispatch(sidebarSearch(false))}
                        className="h-[15px] w-[15px] cursor-pointer"
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
                        (data?.products.length || data?.blogs.length) ? (
                           <p className="text-p">
                              {data?.products.length + data?.blogs.length}{" "}
                              result
                              {data?.products.length + data?.blogs.length > 1
                                 ? "s"
                                 : ""}
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

               {isSuccess && (
                  <>
                     {data.blogs.length > 0 && data.products.length > 0 ? (
                        <div
                           className="grid grid-cols-2 gap-4 overflow-auto px-[16px] pb-[16px]"
                           onClick={() => {
                              dispatch(sidebarSearch(false))
                           }}
                        >
                           {data.products.map((product) => {
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
                              )
                           })}

                           {data.blogs.map((blog) => (
                              <BlogCard
                                 key={blog.id}
                                 extra="Read Me"
                                 id={blog.id}
                                 images={blog.images}
                                 title={blog.title}
                              />
                           ))}
                        </div>
                     ) : (
                        <div
                           className="grid grid-cols-2 gap-4 overflow-auto px-[16px] pb-[16px]"
                           onClick={() => {
                              dispatch(sidebarSearch(false))
                           }}
                        >
                           {emptyFilterData?.products.map((product) => {
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
                              )
                           })}

                           {emptyFilterData?.blogs.map((blog) => (
                              <BlogCard
                                 key={blog.id}
                                 extra="Read Me"
                                 id={blog.id}
                                 images={blog.images}
                                 title={blog.title}
                              />
                           ))}
                        </div>
                     )}
                  </>
               )}
               {isPending && (
                  <div className="flex-center mt-[30%] flex w-full">
                     <AiOutlineLoading3Quarters className="animate-spin text-[40px] text-pink-600" />
                  </div>
               )}
            </Sidebar>
         </>
         <CiSearch
            onClick={() => dispatch(sidebarSearch(true))}
            className={`cursor-pointer text-[30px] ${className}`}
         />
      </>
   )
}

export default Search
