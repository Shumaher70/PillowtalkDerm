"use client"
import { useEffect, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import { BlogType, ProductType } from "@/types"

import Input from "./components/Input"
import TopSearches from "./components/TopSearches"
import Card from "@/app/components/card/Card"
import BlogCard from "@/app/components/blogCard/BlogCard"

import { useAppDispatch } from "@/redux/hooks"
import { slideSearch } from "@/redux/features/sidebarSlice"

import { schnyderMlightFont } from "@/app/layout"

import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const SearchDesktop = () => {
   const dispatch = useAppDispatch()
   const [input, setInput] = useState("")
   const [postInput, setPostInput] = useState("")
   const [heightCard, setHeightCard] = useState(0)
   const [changeColumns, setChangeColumns] = useState(false)
   const [emptyFilterData, setEmptyFilterData] = useState<{
      products: ProductType[]
      blogs: BlogType[]
   }>()

   const searchRef = useRef<HTMLDivElement>(null)
   const trendingRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const searchHeight = searchRef.current?.offsetHeight || 0
      const trendingHeight = trendingRef.current?.offsetHeight || 0

      setHeightCard(searchHeight + trendingHeight)
   }, [])

   useEffect(() => {
      setChangeColumns(input.length > 0)
   }, [input.length])

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

   const getInput = (event: string) => {
      setInput(event)
   }

   const getTopSearch = (event: string) => {
      setPostInput(event)
   }

   const cleanInput = () => {
      setInput("")
      setPostInput("")
   }

   return (
      <div className="pt-[98px]">
         <div className="col-span-2">
            <div className="flex flex-col gap-3">
               <div className="flex-center flex gap-3" ref={searchRef}>
                  <Input
                     getInput={getInput}
                     postInput={postInput}
                     cleanInput={cleanInput}
                  />
                  <div className="rounded-full bg-white p-3">
                     <AiOutlineClose
                        className="h-[20px] w-[20px] cursor-pointer"
                        onClick={() => dispatch(slideSearch(false))}
                     />
                  </div>
               </div>

               {input.length > 0 && (
                  <div className="w-full">
                     {input.length > 0 &&
                     (data?.products.length || data?.blogs.length) ? (
                        <p className="text-p">
                           {data?.blogs.length + data?.products.length} result
                           {data?.blogs.length + data?.products.length > 1
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

            <div className={`flex h-full w-full justify-between gap-10 pt-10`}>
               {input.length === 0 && (
                  <div className="min-w-max">
                     <TopSearches
                        className="grid !grid-cols-1"
                        getTopSearch={getTopSearch}
                     />
                  </div>
               )}

               <div className="w-full">
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
                     className={`mt-3 overflow-auto`}
                  >
                     {isSuccess && (
                        <>
                           {data.blogs.length > 0 &&
                           data.products.length > 0 ? (
                              <div
                                 className="grid grid-cols-4 gap-2"
                                 onClick={() => {
                                    dispatch(slideSearch(false))
                                 }}
                              >
                                 {data.products.map((product) => (
                                    <Card
                                       key={product.id}
                                       btn
                                       win
                                       stars
                                       rating
                                       product={product}
                                       imageAnimated
                                       className={"bg-white"}
                                    />
                                 ))}

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
                                 className="grid grid-cols-4 gap-2"
                                 onClick={() => {
                                    dispatch(slideSearch(false))
                                 }}
                              >
                                 {emptyFilterData?.products.map((product) => (
                                    <Card
                                       key={product.id}
                                       btn
                                       win
                                       stars
                                       rating
                                       product={product}
                                       imageAnimated
                                       className={"bg-white"}
                                    />
                                 ))}

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
                        <div className="flex-center flex w-full">
                           <AiOutlineLoading3Quarters className="animate-spin text-[80px] text-pink-600" />
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SearchDesktop
