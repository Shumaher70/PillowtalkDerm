import { prisma } from "@/lib/prisma"
import BlogCard from "@/app/components/blogCard/BlogCard"
import ViewportMotionDivArr from "@/motion/ViewPortMotionDivArr"
import { schnyderMlightFont } from "@/app/layout"
import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import NerdAcademy from "./components/NerdAcademy"
import Pages from "./components/Pages"
import IngredientsCarousel from "./ingredients-glossary/components/IngredientsCarousel"

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
         <section className="container-px bg-secondary mt-[45px] w-full md:mt-[80px]">
            <NerdAcademy searchParams={searchParams} />

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
         <section className="container-px mt-[45px] w-full md:mt-[80px]">
            <IngredientsCarousel />
         </section>
      </main>
   )
}

export default page
