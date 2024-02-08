"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

interface PagesProps {
   params: {
      slug: string
   }
   searchParams: {
      page: string
   }
   numberOfBlogs: number
}

const Pages = ({ params, searchParams, numberOfBlogs }: PagesProps) => {
   const route = useRouter()
   const [index, setIndex] = useState(
      searchParams.page === undefined ? 1 : Number(searchParams.page)
   )

   const number = Array.from(Array(Math.ceil(numberOfBlogs / 9)).keys())

   useEffect(() => {
      if (searchParams.page === undefined) {
         setIndex(1)
      }
   }, [searchParams.page])

   useEffect(() => {
      if (params.slug) {
         route.push(`/blogs/news/tagged/${params.slug}?page=${index}`)
      } else {
         route.push(`/blogs/news?page=${index}`)
      }
   }, [index, params.slug, route])

   return (
      <div className="flex-center flex w-full gap-2">
         {index !== 1 ? (
            <FaChevronLeft
               className="cursor-pointer text-purple-700"
               onClick={() => {
                  setIndex(index - 1)
               }}
            />
         ) : (
            <div />
         )}
         {number.length !== 0 && number.length > 1 && (
            <div className={`rounded-full bg-purple-700 px-5 py-3 text-white `}>
               {index}
            </div>
         )}
         {index !== Math.ceil(numberOfBlogs / 9) ? (
            <FaChevronRight
               className="cursor-pointer text-purple-700"
               onClick={() => {
                  setIndex(index + 1)
               }}
            />
         ) : (
            <div />
         )}
      </div>
   )
}

export default Pages
