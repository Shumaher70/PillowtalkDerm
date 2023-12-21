import { BiSolidLike } from "react-icons/bi"
import { BiSolidDislike } from "react-icons/bi"

const Likes = () => {
   return (
      <div className="flex w-full items-center gap-2">
         <span className="text-[14px]">Was this review helpful?</span>

         <div className="flex items-center gap-1">
            <BiSolidLike />
            <span className="text-[14px]">0</span>
         </div>

         <div className="flex items-center gap-1">
            <BiSolidDislike />
            <span className="text-[14px]">0</span>
         </div>
      </div>
   )
}

export default Likes
