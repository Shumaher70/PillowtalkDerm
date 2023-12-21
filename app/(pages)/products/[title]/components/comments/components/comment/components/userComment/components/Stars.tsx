import { IoMdStar } from "react-icons/io"

const Stars = () => {
   return (
      <div className="flex w-full items-center gap-4">
         <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
               <IoMdStar key={index} className="text-[14px] text-[#F92672]" />
            ))}
         </div>
         <span className="text-[14px]">12 hours ago</span>
      </div>
   )
}

export default Stars
