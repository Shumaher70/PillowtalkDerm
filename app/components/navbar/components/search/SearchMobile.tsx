"use client"
import { useCallback, useEffect, useMemo, useState, useTransition } from "react"
import { AiOutlineClose } from "react-icons/ai"
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
interface SearchProps {
   className?: string
}

const Search = ({ className }: SearchProps) => {
   const dispatch = useAppDispatch()
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)

   const [input, setInput] = useState("")
   const [postInput, setPostInput] = useState("")
   const [load, setLoad] = useState(false)

   const [data, setData] = useState<{
      products: ProductType[]
      blogs: BlogType[]
   }>()
   const { products, blogs } = data || { products: [], blogs: [] }

   useEffect(() => {
      const loadHandler = () => {
         if (window.innerWidth < 1024) {
            setLoad(true)
         } else {
            setLoad(false)
         }
      }
      loadHandler()
      window.addEventListener("resize", loadHandler)
      return () => window.removeEventListener("resize", loadHandler)
   }, [])

   useEffect(() => {
      let subscribe = true
      const fetchData = () => {
         axios
            .get(
               `http://localhost:3000/api/productsFilter?filter=${
                  input || postInput
               }`
            )
            .then((data) => setData(data.data))
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
      <>
         {load && (
            <>
               <Sidebar triggerSidebar={sidebarSlice.sidebarSearch}>
                  <div className="flex flex-col gap-3 p-[16px]">
                     <div className="flex-center flex w-full gap-3">
                        <Input getInput={getInput} postInput={postInput} />
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
                           (products.length || blogs.length) ? (
                              <p className="text-p">
                                 {blogs.length + products.length} result
                                 {blogs.length + products.length > 1 ? "s" : ""}
                                 {` "${input}"`}
                              </p>
                           ) : (
                              <p className="text-p">
                                 No results found for “{input}”. Maybe these
                                 will interest you...
                              </p>
                           )}
                        </div>
                     )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 overflow-auto px-[16px] pb-[16px]">
                     {products.map((product) => {
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
               </Sidebar>
            </>
         )}
         <CiSearch
            onClick={() => dispatch(sidebarSearch(true))}
            className={`cursor-pointer text-[30px] ${className}`}
         />
      </>
   )
}

export default Search
