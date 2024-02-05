import ImageCard from "@/app/components/card/components/ImageCard"
import SkinNerdAcademySection from "@/app/components/homePage/skinNerdAcademySection/SkinNerdAcademySection"
import { schnyderMlightFont } from "@/app/layout"
import { prisma } from "@/lib/prisma"

import React from "react"

interface ContentItem {
   text: string
   type: string
   className: string
   content?: ContentItem[]
   items?: string[]
}

const BlogPage = async ({ params }: { params: { blog: string } }) => {
   const blogs = await prisma.blog.findMany({
      where: {
         title: {
            mode: "insensitive",
            contains: params.blog
               .split("")
               .map((chart) => chart.replace("-", " "))
               .join("")
               .slice(0, params.blog.length / 5),
         },
      },
   })

   const dataCreateBlog = () => {
      return blogs[0].createdAt
         .toISOString()
         .split("")
         .slice(0, 10)
         .map((chart) => chart.replace("-", "."))
         .join("")
   }

   const backgroundTag = (tag: string) => {
      let bgTag
      const t = tag.trim().toLocaleLowerCase()

      if (t === "ingredients") {
         bgTag = "bg-pink-500"
      } else if (t === "products") {
         bgTag = "bg-green-700"
      } else if (t === "lifestyle") {
         bgTag = "bg-pink-400"
      } else if (t === "skin concerns") {
         bgTag = "bg-purple-700"
      } else if (t === "routines") {
         bgTag = "bg-yellow-500"
      }
      return bgTag
   }

   if (blogs[0].content === null) {
      return (
         <div className="flex-center text-section flex h-full w-full">
            Add content
         </div>
      )
   }

   const content = JSON.parse(JSON.stringify(blogs[0].content)).content

   const convertJsonToTsx = (content: ContentItem[]): React.ReactNode[] => {
      return content.map((item, index) => {
         const { type, className, text, items, content: innerContent } = item

         const key = (keyIndex: number) => `${type}_${keyIndex}`

         switch (type) {
            case "p":
               if (innerContent && innerContent.length > 0) {
                  return innerContent.map((insertedContent, insertedIndex) => {
                     return (
                        <React.Fragment key={key(insertedIndex)}>
                           {convertJsonToTsx([insertedContent])}
                        </React.Fragment>
                     )
                  })
               } else {
                  return React.createElement(
                     type as React.ElementType,
                     { key: key(index), className },
                     text
                  )
               }
            case "text":
            case "strong":
            case "h2":
               return React.createElement(
                  type as React.ElementType,
                  { key: key(index), className },
                  text
               )

            case "br":
               return React.createElement("br", { key: key(index) })

            case "i":
               return React.createElement(
                  "i",
                  { key: key(index), className },
                  text
               )

            case "ul":
               if (items && items.length > 0) {
                  return React.createElement(
                     "ul",
                     { key: key(index), className },
                     items.map((li, liIndex) =>
                        React.createElement("li", { key: key(liIndex) }, li)
                     )
                  )
               }
               break

            case "div":
               if (innerContent && innerContent.length > 0) {
                  return innerContent.map((insertedContent, insertedIndex) => (
                     <React.Fragment key={key(insertedIndex)}>
                        {convertJsonToTsx([insertedContent])}
                     </React.Fragment>
                  ))
               }
               break

            default:
               return null
         }
      })
   }

   return (
      <main>
         <div className="container-p relative flex w-full flex-col items-center overflow-hidden py-[16px]">
            <div className="flex w-full max-w-[1000px] flex-col items-center">
               <div className="flex flex-col items-center py-[16px] pt-[50px] text-center md:px-[60px] md:pt-[30px] lg:px-[80px]">
                  <div className="flex-center flex flex-wrap gap-2">
                     {blogs[0].tags.map((tag) => {
                        return (
                           <div
                              key={tag}
                              className={`flex items-center rounded-full px-[15px] py-[7px] text-[14px] uppercase text-white ${backgroundTag(
                                 tag
                              )}`}
                           >
                              {tag}
                           </div>
                        )
                     })}
                     <div className="flex items-center rounded-full border-[1px] border-purple-700 px-[15px] py-[7px] text-[14px] uppercase text-purple-700">
                        {dataCreateBlog()}
                     </div>
                  </div>

                  <h2
                     className={`text-title py-1 md:py-5 md:!leading-[40px] lg:!leading-[45px] ${schnyderMlightFont.className}`}
                  >
                     {blogs[0].title}
                  </h2>
               </div>

               <div className="container-rounded-t container-rounded-b h-full w-full overflow-hidden">
                  <ImageCard
                     image={blogs[0].images[0]}
                     title={"blog images"}
                     size={70}
                  />
               </div>

               <div className="mt-5 flex flex-col gap-y-2 md:gap-y-5">
                  {convertJsonToTsx(content)}
               </div>
            </div>
         </div>

         <div className="relative -bottom-5">
            <SkinNerdAcademySection />
         </div>
      </main>
   )
}

export default BlogPage

{
   /* 
   <p className="text-[18px]"></p>
                  <i className="text-[18px] "></i>
                  <ul className="list-decimal pl-[50px] text-[18px]">
                     <li></li>
                  </ul>
                  <p className="text-[18px] uppercase"></p>
                  <h2 className="text-section leading-[45px] md:leading-[60px]"></h2>
                  */
}
