import { IoCheckmarkCircle } from "react-icons/io5"

const Customer = () => {
   return (
      <div className="flex w-full items-center gap-2">
         <div className="flex-center flex h-[60px] w-[60px] rounded-full bg-black text-[30px] uppercase text-white">
            vc
         </div>

         <div className="flex flex-col">
            <span className="text-[16px] capitalize">Vicki C</span>

            <div className="flex items-center gap-[2px]">
               <IoCheckmarkCircle className="text-[20px] text-[#F92672]" />
               <span className="text-[16px]">Verified Buyer</span>
            </div>
         </div>
      </div>
   )
}

export default Customer
