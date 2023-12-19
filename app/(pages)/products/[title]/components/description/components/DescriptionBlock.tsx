import { ProductDescription } from "@prisma/client"
import { nanoid } from "@reduxjs/toolkit"
import React from "react"

const DescriptionBlock = ({
   description,
   title,
}: {
   description: ProductDescription
   title: string
}) => {
   return (
      <div className="flex flex-col p-[16px] md:p-[24px]">
         <h2 className="text-p rounded-full bg-white px-[24px] py-[10px] text-center uppercase">
            {title}
         </h2>

         <ul className="mt-5 text-[14px] ">
            {description.title.map((item, index) => (
               <li
                  key={nanoid()}
                  className="border-[#cfb6e2] pb-3 font-bold lg:mt-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-b-[1px] lg:pb-0"
               >
                  {item}
                  <div className="border-b-[1px] border-[#cfb6e2] py-2 font-normal lg:border-0">
                     {description.discription[index]}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default DescriptionBlock
