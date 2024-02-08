"use client"

import { schnyderMlightFont } from "@/app/layout"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface NerdAcademyProps {
   params?: {
      slug: string
   }
   searchParams?: {
      page: string
   }
}

const tags = [
   "ALL",
   "INGREDIENTS",
   "LIFESTYLE",
   "PRODUCTS",
   "ROUTINES",
   "SKIN CONCERNS",
]

const tagColors: { [key: string]: { bg: string; activeBg: string } } = {
   ingredients: {
      bg: "hover:text-white hover:bg-pink-500 border-[1px] border-pink-500 text-pink-500",
      activeBg: "bg-pink-500 text-white",
   },
   products: {
      bg: "hover:text-white hover:bg-green-700 border-[1px] border-green-700 text-green-700",
      activeBg: "bg-green-700 text-white",
   },
   lifestyle: {
      bg: "hover:text-white hover:bg-pink-400 border-[1px] border-pink-400 text-pink-400",
      activeBg: "bg-pink-400 text-white",
   },
   "skin-concerns": {
      bg: "hover:text-white hover:bg-purple-700 border-[1px] border-purple-700 text-purple-700",
      activeBg: "bg-purple-700 text-white",
   },
   routines: {
      bg: "hover:text-white hover:bg-yellow-500 border-[1px] border-yellow-500 text-yellow-500",
      activeBg: "bg-yellow-500 !text-white",
   },
   all: {
      bg: "hover:text-white hover:bg-purple-700 border-[1px] border-purple-700 text-purple-700",
      activeBg: "",
   },
}

const NerdAcademy = ({ params, searchParams }: NerdAcademyProps) => {
   const query = () => {
      if (params === undefined) {
         return []
      }

      const slug = params.slug || ""
      if (slug.includes("%")) {
         return slug
            .replace(/%|2|B|0/g, " ")
            .split(" ")
            .filter((item) => item !== "")
      } else {
         return [slug]
      }
   }

   const [tag, setTag] = useState<string[]>(query())

   const route = useRouter()

   useEffect(() => {
      if (tag.length > 0 && searchParams?.page !== undefined) {
         const query = tag.join("+")
         route.push(`/blogs/news/tagged/${query}?page=${searchParams.page}`)
      } else if (tag.length > 0 && searchParams?.page === undefined) {
         const query = tag.join("+")
         route.push(`/blogs/news/tagged/${query}`)
      } else if (tag.length === 0 && searchParams?.page === undefined) {
         route.push(`/blogs/news`)
      } else if (tag.length === 0 && searchParams?.page !== undefined) {
         route.push(`/blogs/news?page=${searchParams?.page}`)
      }
   }, [route, searchParams?.page, tag])

   const handleTagClick = (clickedTag: string) => {
      if (clickedTag === "all") {
         route.push(`/blogs/news`)
         return
      }

      const normalizedTag = clickedTag.replace(/\s+/g, "-")
      const index = tag.indexOf(normalizedTag)

      if (index === -1) {
         setTag([...tag, normalizedTag])
      } else {
         const newTags = [...tag]
         newTags.splice(index, 1)
         setTag(newTags)
      }
   }

   return (
      <>
         <h1 className={`${schnyderMlightFont.className} text-section`}>
            Nerd Academy
         </h1>
         {
            <div className="w-content mt-2 flex flex-wrap items-center gap-2">
               {tags.map((t, i) => {
                  const tagLowerCase = t
                     .trim()
                     .toLowerCase()
                     .split(" ")
                     .join("-")

                  const { bg, activeBg } =
                     tagColors[tagLowerCase] || tagColors.all

                  return (
                     <button
                        onClick={() => {
                           handleTagClick(tagLowerCase)
                        }}
                        className={`${bg} ${
                           tag.some(
                              (item) => item.toLowerCase() === tagLowerCase
                           ) && activeBg
                        } rounded-full px-[10px] py-[5px] text-[14px] transition-all md:px-[20px] md:py-[10px] md:text-[16px]`}
                        key={i}
                     >
                        {t}
                     </button>
                  )
               })}
            </div>
         }
      </>
   )
}

export default NerdAcademy
