import ImageCard from "@/app/components/card/components/ImageCard"
import SkinNerdAcademySection from "@/app/components/homePage/skinNerdAcademySection/SkinNerdAcademySection"
import { schnyderMlightFont } from "@/app/layout"
import { prisma } from "@/lib/prisma"
import backgroundTag from "@/utils/backgroundTag"
import convertJsonToTsx from "@/utils/convertJsonToTsx"
import dataCreateBlog from "@/utils/dataCreateBlog"

import React from "react"

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

   if (blogs[0].content === null) {
      return (
         <div className="flex-center text-section flex h-full w-full">
            Add content
         </div>
      )
   }

   const content = JSON.parse(JSON.stringify(blogs[0].content)).content

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
                        {dataCreateBlog(blogs[0].createdAt)}
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
