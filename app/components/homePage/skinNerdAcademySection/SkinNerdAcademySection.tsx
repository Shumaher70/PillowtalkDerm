import { schnyderMlightFont } from "@/app/layout"
import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import React from "react"
import Button from "../../button/Button"
import CarouseSection from "./CarouseSection"
import { prisma } from "@/lib/prisma"

const SkinNerdAcademySection = async () => {
   const blogs = await prisma.blog.findMany()

   return (
      <section className="bg-secondary max-h-full w-full py-[32px]">
         <ViewportMotionDiv>
            <div className="container-px flex w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
               <h2
                  className={`text-section leading-[50px] ${schnyderMlightFont.className}`}
               >
                  Skin Nerd Academy
               </h2>

               <Button
                  href="/blogs/news"
                  className="w-full whitespace-nowrap bg-purple-700 uppercase text-white md:w-auto"
                  text={"learn more"}
                  size={"lg"}
                  load={false}
               />
            </div>
         </ViewportMotionDiv>

         <ViewportMotionDiv>
            <CarouseSection blogs={blogs} />
         </ViewportMotionDiv>
      </section>
   )
}

export default SkinNerdAcademySection
