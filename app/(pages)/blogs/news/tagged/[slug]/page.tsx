import { prisma } from "@/lib/prisma"
import BlogCard from "@/app/components/blogCard/BlogCard"
import ViewportMotionDivArr from "@/app/components/motion/ViewPortMotionDivArr"
import { schnyderMlightFont } from "@/app/layout"
import ViewportMotionDiv from "@/app/components/motion/ViewPortMotionDiv"
import NerdAcademy from "../../components/NerdAcademy"
import Pages from "../../components/Pages"
import IngredientsCarousel from "../../ingredients-glossary/components/IngredientsCarousel"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
   { params, searchParams }: Props,
   parent: ResolvingMetadata
): Promise<Metadata> {
   // read route params

   const metaTitle = params.slug.includes("-")
      ? params.slug
           .replace(/%|2|B|0/g, " ")
           .split(" ")
           .map((item) =>
              item
                 .split("")
                 .map((innerItem) => innerItem.replace("-", " "))
                 .join("")
           )
           .filter((item) => item !== "")
           .join(", ")
      : params.slug
           .replace(/%|2|B|0/g, " ")
           .split(" ")
           .filter((item) => item !== "")
           .join(", ")

   return {
      title: `Skin Nerd Academy Blog - tagged "${metaTitle}" - PillowTalkDerm`,
      description:
         "Dr. Idriss is a collection of fact-based, science-backed skincare solutions by Dr. Shereene Idriss.",
   }
}

const page = async (query: {
   params: { slug: string }
   searchParams: { page: string }
}) => {
   const { params, searchParams } = query

   const q = params.slug.includes("-")
      ? params.slug
           .replace(/%|2|B|0/g, " ")
           .split(" ")
           .map((item) =>
              item
                 .split("")
                 .map((innerItem) => innerItem.replace("-", " "))
                 .join("")
           )
           .filter((item) => item !== "")
      : params.slug
           .replace(/%|2|B|0/g, " ")
           .split(" ")
           .filter((item) => item !== "")

   const blogsData = await prisma.blog.findMany({
      where: {
         OR: q.map((tag) => ({ tags: { hasSome: [tag.toUpperCase()] } })),
      },
   })

   const blogs = blogsData.slice(
      searchParams.page === undefined || Number(searchParams.page) === 1
         ? 0
         : Number(searchParams.page),
      searchParams.page === undefined || Number(searchParams.page) === 1
         ? 9
         : Number(searchParams.page) * 2
   )

   return (
      <main className="w-full">
         <section className="container-px bg-secondary w-full">
            <div className="section-pt">
               <NerdAcademy searchParams={searchParams} params={params} />
            </div>

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
