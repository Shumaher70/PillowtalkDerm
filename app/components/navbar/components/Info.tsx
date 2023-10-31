import Link from 'next/link';
import React from 'react';

const infoControl = [
   {
      title: 'home',
      src: '',
   },
   {
      title: 'shop',
      src: '',
   },
   {
      title: 'skin nerd academy',
      src: '',
   },
   {
      title: 'about',
      src: '',
   },
];

const Info = ({ className }: { className?: string }) => {
   return (
      <div className={`flex gap-3 ${className}`}>
         {infoControl.map(({ title, src }, index) => (
            <>
               <Link
                  key={index}
                  href={src}
                  className="
                     capitalize 
                     text-p 
                     cursor-pointer 
                     whitespace-nowrap 
                     px-[10px] 
                     py-[5px]
                     rounded-[20px]
                     hover:bg-white
                     "
               >
                  {title}
               </Link>
            </>
         ))}
      </div>
   );
};

export default Info;
