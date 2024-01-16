import { IoMdStar, IoMdStarOutline } from "react-icons/io"

interface StarsProps {
   stars: number
}

const Stars = ({ stars }: StarsProps) => {
   return (
      <div className="flex w-min items-center gap-4">
         <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
               let star
               if (stars >= index + 1) {
                  star = (
                     <IoMdStar
                        key={index}
                        className="text-[20px] text-[#F92672]"
                     />
                  )
               } else {
                  star = (
                     <IoMdStarOutline
                        key={index}
                        className="text-[20px] text-[#F92672]"
                     />
                  )
               }
               return star
            })}
         </div>
      </div>
   )
}

export default Stars
