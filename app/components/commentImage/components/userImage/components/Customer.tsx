"use client"
import { IoCheckmarkCircle } from "react-icons/io5"

const Customer = ({
   name: nameProps,
   verified,
}: {
   name: string
   email: string
   verified: boolean
}) => {
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
      <div className=" flex w-full items-center gap-2">
         <div className="flex-center relative flex h-[32px] w-[32px] rounded-full bg-black text-[16px] uppercase text-white">
            {nameIcon(nameProps)}
            {verified && (
               <div className="absolute bottom-0 right-[-11px] flex items-center gap-[2px]">
                  <IoCheckmarkCircle className="text-[14px] text-[#F92672]" />
               </div>
            )}
         </div>

         <div className=" flex flex-col">
            <span className="text-[16px] capitalize">{name(nameProps)}</span>
         </div>
      </div>
   )
}

export default Customer
