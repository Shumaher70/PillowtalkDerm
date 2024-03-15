import { prisma } from "@/lib/prisma"
import BlogCard from "@/app/components/blogCard/BlogCard"
import ViewportMotionDivArr from "@/app/components/motion/ViewPortMotionDivArr"
import { schnyderMlightFont } from "@/app/layout"
import ViewportMotionDiv from "@/app/components/motion/ViewPortMotionDiv"
import NerdAcademy from "./components/NerdAcademy"
import Pages from "./components/Pages"
import IngredientsCarousel from "./ingredients-glossary/components/IngredientsCarousel"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: "Skin Nerd Academy blog - PillowTalkDerm",
   description:
      "Dr. Idriss is a collection of fact-based, science-backed skincare solutions by Dr. Shereene Idriss.",
}

const page = async (query: {
   params: { slug: string }
   searchParams: { page: string }
}) => {
   const { params, searchParams } = query

   const blogsData = await prisma.blog.findMany()

   const blogs = blogsData.slice(
      searchParams.page === undefined || Number(searchParams.page) === 1
         ? 0
         : Number(searchParams.page),
      searchParams.page === undefined || Number(searchParams.page) === 1
         ? 9
         : Number(searchParams.page) * 2
   )

   return (
      <main className="w-full overflow-hidden">
         <section className="container-px bg-secondary w-full">
            <div className="section-pt">
               <NerdAcademy searchParams={searchParams} />
            </div>

            <ViewportMotionDiv className="mt-5 grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
               {blogs.map((b) => (
                  <ViewportMotionDivArr key={b.id}>
                     <BlogCard
                        id={b.id}
                        images={b.images}
                        title={b.title}
                        tags={b.tags}
                        sizeImage={75}
                        rounded="container-rounded"
                        classText={`text-[20px] md:text-[32px] leading-[25px] md:leading-[35px] ${schnyderMlightFont.className} !font-[0] `}
                     />
                  </ViewportMotionDivArr>
               ))}
            </ViewportMotionDiv>
            <div className="mt-5">
               <Pages
                  params={params}
                  numberOfBlogs={blogsData.length}
                  searchParams={searchParams}
               />
            </div>
         </section>
         <section className="container-px section-pt w-full pb-10">
            <IngredientsCarousel />
         </section>
      </main>
   )
}

export default page
