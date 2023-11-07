'use client';

import { schnyderMlightFont } from '@/app/layout';

interface TopSearchesProps {
   className?: string;
   getTopSearch?: (event: string) => void;
}

const topSearches = ['major fade', 'ingredients', 'skincare', 'lightweight'];

const TopSearches = ({ className, getTopSearch }: TopSearchesProps) => {
   const clickHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
      getTopSearch?.(event.currentTarget.innerText);
   };

   return (
      <div className={`${className}`}>
         <h4
            className={`${schnyderMlightFont.className} text-title !font-[300]`}
         >
            Top Searches
         </h4>

         <div className="grid grid-cols-2 space-y-2 mt-3">
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
      </div>
   );
};

export default TopSearches;
