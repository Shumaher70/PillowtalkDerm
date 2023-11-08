'use client';

import { useState } from 'react';
import { RxMinus, RxPlus } from 'react-icons/rx';

interface CountProductProps {
   className?: string;
}

const CountProduct = ({ className }: CountProductProps) => {
   const [count, setCount] = useState(1);

   const decrease = () => setCount((previous) => (previous -= 1));
   const increase = () => setCount((previous) => (previous += 1));
   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCount(+event.target.value);
   };
   return (
      <div
         className={`
         px-[8px]
         py-[5px]
         w-[90px]
         rounded-full 
         border-1 
         border-[#6a1ba6]
         text-[#6a1ba6]
         flex
         flex-between
         gap-2
         ${className}
         `}
      >
         <RxMinus className="text-p cursor-pointer" onClick={decrease} />
         <input
            type="number"
            className="
               absolute 
               top-[-30%] 
               right-2/4 
               translate-x-2/4 
               text-[14px] 
               w-[40px] 
               h-[40px] 
               text-[#6a1ba6] 
               bg-transparent 
               text-center"
            value={count}
            onChange={changeHandler}
         />
         <RxPlus className="text-p cursor-pointer" onClick={increase} />
      </div>
   );
};

export default CountProduct;
