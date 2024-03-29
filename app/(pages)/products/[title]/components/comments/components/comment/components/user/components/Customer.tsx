import { IoCheckmarkCircle } from "react-icons/io5"

interface CustomerProps {
   name: string
   verified: boolean
}

const Customer = ({ name: nameProps, verified }: CustomerProps) => {
   const nameIcon = (name: string) => {
      if (name.split(" ").length === 1) {
         const first = name.slice(0, 1).toUpperCase()
         const last = name.slice(-1).toUpperCase()
         return first + last
      } else {
         const first = name
            .split(" ")
            .slice(0, 1)
            .map((latter) => latter.slice(0, 1))
            .join("")
            .toUpperCase()

         const last = name
            .split(" ")
            .slice(-1)
            .map((latter) => latter.slice(0, 1))
            .join("")
            .toUpperCase()

         return first + last
      }
   }

   const name = (name: string) => {
      if (name.length > 20) {
         return name.substr(0, 20) + "..."
      } else {
         return name
      }
   }

   return (
      <div className="items flex w-full gap-2">
         <div className="flex-center flex h-[60px] w-[60px] rounded-full bg-black text-[30px] uppercase text-white">
            {nameIcon(nameProps)}
         </div>

         <div className="flex flex-col">
            <span className="text-[16px] capitalize">{name(nameProps)}</span>
            {verified && (
               <div className="flex items-center gap-[2px]">
                  <IoCheckmarkCircle className="text-[20px] text-[#F92672]" />
                  <span className="text-[16px]">Verified Buyer</span>
               </div>
            )}
         </div>
      </div>
   )
}

export default Customer
