"use client"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

import { BlogType, ProductType } from "@/types"

import Input from "./components/Input"
import TopSearches from "./components/TopSearches"
import Card from "@/app/components/card/Card"
import BlogCard from "@/app/components/blogCard/BlogCard"
import { useAppDispatch } from "@/redux/hooks"
import { slideSearch } from "@/redux/features/sidebarSlice"
import { schnyderMlightFont } from "@/app/layout"
import axios from "axios"
interface SearchProps {
   className?: string
}

const SearchDesktop = ({ className }: SearchProps) => {
   const dispatch = useAppDispatch()
   const [input, setInput] = useState("")
   const [postInput, setPostInput] = useState("")
   const [heightCard, setHeightCard] = useState(0)
   const [changeColumns, setChangeColumns] = useState(false)

   const [data, setData] = useState<{
      products: ProductType[]
      blogs: BlogType[]
   }>()

   const { products, blogs } = data || { products: [], blogs: [] }

   const searchRef = useRef<HTMLDivElement>(null)
   const trendingRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const heightCardHandler = () => {
         const searchHeight = searchRef.current?.offsetHeight || 0
         const trendingHeight = trendingRef.current?.offsetHeight || 0
         setHeightCard(searchHeight + trendingHeight)
      }
      heightCardHandler()
   }, [])

   useEffect(() => {
      setChangeColumns(input.length > 0)
   }, [input.length])

   useEffect(() => {
      let subscribe = true
      const fetchData = () => {
         axios
            .get(
               `http://localhost:3000/api/productsFilter?filter=${
                  input || postInput
               }`
            )
            .then((data) => {
               setData(data.data)
            })
      }

      if (subscribe) {
         fetchData()
      }
      return () => {
         subscribe = false
      }
   }, [input, postInput])

   const getInput = useCallback((event: string) => {
      setInput(event)
   }, [])

   const getTopSearch = useCallback((event: string) => {
      setPostInput(event)
   }, [])
   return (
      <div className="pt-[98px]">
         <div className="col-span-2">
            <div className="flex flex-col gap-3">
               <div className="flex-center flex gap-3" ref={searchRef}>
                  <Input getInput={getInput} postInput={postInput} />
                  <div className="rounded-full bg-white p-3">
                     <AiOutlineClose
                        className="h-[20px] w-[20px] cursor-pointer"
                        onClick={() => dispatch(slideSearch(false))}
                     />
                  </div>
               </div>

               {input.length > 0 && (
                  <div className="w-full">
                     {input.length > 0 && (products.length || blogs.length) ? (
                        <p className="text-p">
                           {blogs.length + products.length} result
                           {blogs.length + products.length > 1 ? "s" : ""}
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
                     <div className="grid grid-cols-4 gap-2">
                        {products.map((product) => (
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

                        {blogs.map((blog) => (
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
   )
}

export default SearchDesktop
