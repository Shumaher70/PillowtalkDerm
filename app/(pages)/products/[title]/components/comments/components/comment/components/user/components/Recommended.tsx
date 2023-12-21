import { FaCheck } from "react-icons/fa6"

const Recommended = () => {
   return (
      <div className="flex items-center gap-1">
         <FaCheck className="text-[15px] text-[#F92672]" />
         <span className="text-[14px]">I recommended this product</span>
      </div>
   )
}

export default Recommended
