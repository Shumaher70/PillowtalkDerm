import ImageCard from "../card/components/ImageCard"
import TitleCard from "../card/components/TitleCard"
import ReadMe from "../card/components/ReadMe"
import { nanoid } from "@reduxjs/toolkit"

interface BlogCardProps {
   id: string
   images: string[]
   title: string
   extra?: string
   tags?: String[]
   classText?: string
   rounded?: string
   sizeImage?: number
}

const BlogCard = ({
   id,
   images,
   title,
   extra,
   tags,
   classText,
   rounded = "rounded-[8px]",
   sizeImage,
}: BlogCardProps) => {
   if (images)
      return (
         <div
            className={`flex h-full flex-col gap-2 bg-white p-[8px] md:p-[16px] ${rounded}`}
         >
            <div className={`${rounded} overflow-hidden`}>
               <ImageCard size={sizeImage} image={images[0]} title={title} />
            </div>

            <div className="flex flex-grow flex-col items-center text-center">
               {tags && (
                  <div className="flex-center my-[10px] flex flex-wrap gap-2">
                     {tags?.map((t) => {
                        let bg
                        const tag = t.trim().toLocaleLowerCase()

                        if (tag === "ingredients") {
                           bg = "bg-pink-500"
                        } else if (tag === "products") {
                           bg = "bg-green-700"
                        } else if (tag === "lifestyle") {
                           bg = "bg-pink-400"
                        } else if (tag === "skin concerns") {
                           bg = "bg-purple-700"
                        } else if (tag === "routines") {
                           bg = "bg-yellow-500"
                        }

                        return (
                           <div
                              key={nanoid()}
                              className={`flex items-center rounded-full px-[10px] py-[5px] text-[11px] uppercase text-white ${bg}`}
                           >
                              <span>{tag}</span>
                           </div>
                        )
                     })}
                  </div>
               )}
               <TitleCard title={title} className={classText} />
            </div>

            <div className="text-center">
               <ReadMe text={extra} src="" />
            </div>
         </div>
      )
}

export default BlogCard
