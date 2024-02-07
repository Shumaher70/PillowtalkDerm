import { prisma } from "@/lib/prisma"
import BlogCard from "@/app/components/blogCard/BlogCard"
import ViewportMotionDivArr from "@/motion/ViewPortMotionDivArr"
import { schnyderMlightFont } from "@/app/layout"
import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import NerdAcademy from "./components/NerdAcademy"

const page = async () => {
   const blogs = await prisma.blog.findMany()

   return (
      <main className="w-full">
         <section className="container-px bg-secondary mt-[45px] w-full md:mt-[80px]">
            <NerdAcademy />

            <ViewportMotionDiv className="mt-5 grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
               {blogs.map((b, i) => (
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
         </section>
         <section></section>
      </main>
   )
}

export default page
