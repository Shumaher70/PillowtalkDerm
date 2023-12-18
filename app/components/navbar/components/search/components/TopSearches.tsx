"use client"

import { schnyderMlightFont } from "@/app/layout"

interface TopSearchesProps {
   className?: string
   getTopSearch?: (event: string) => void
}

const topSearches = ["major fade", "ingredients", "skincare", "lightweight"]

const TopSearches = ({ className, getTopSearch }: TopSearchesProps) => {
   const clickHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
      getTopSearch?.(event.currentTarget.innerText)
   }

   return (
      <>
         <h4
            className={`${schnyderMlightFont.className} text-title !font-[300]`}
         >
            Top Searches
         </h4>

         <div className={`mt-3 grid grid-cols-2 gap-2 ${className}`}>
            {topSearches.map((search, index) => (
               <p
                  key={index}
                  className="text-p cursor-pointer"
                  onClick={clickHandler}
               >
                  {search}
               </p>
            ))}
         </div>
      </>
   )
}

export default TopSearches
