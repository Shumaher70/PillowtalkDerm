import BlogCard from "@/app/components/blogCard/BlogCard"
import Button from "@/app/components/button/Button"
import { BlogType } from "@/types"
interface SkinNerdAcademyProps {
   blogs: BlogType[]
}
const SkinNerdAcademy = ({ blogs }: SkinNerdAcademyProps) => {
   return (
      <div className="py-[30px]">
         <div className="grid grid-cols-4 gap-2">
            {blogs.slice(3).map(({ id, images, title }) => (
               <BlogCard key={id} id={id} images={images} title={title} />
            ))}
         </div>
         <div className="flex-center mt-10 flex w-full">
            <Button
               text="view all"
               className="bg-purple-700 uppercase"
               size={"lg"}
               load={false}
            />
         </div>
      </div>
   )
}

export default SkinNerdAcademy
