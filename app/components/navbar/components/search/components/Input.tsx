'use client';
import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface InputProps {
   getInput?: (event: string) => void;
   postInput?: string;
}

const Input = ({ getInput, postInput }: InputProps) => {
   const post = postInput || '';

   const [outline, setOutline] = useState(false);
   const [input, setInput] = useState(post);

   const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   useEffect(() => {
      if (getInput) {
         const timer = setTimeout(() => {
            getInput(input.toLowerCase().trim());
         }, 300);
         return () => clearTimeout(timer);
      }
   }, [getInput, input]);

   useEffect(() => {
      if (post) return setInput(post);
   }, [post]);

   const onFocus = () => setOutline(true);
   const onBlur = () => setOutline(false);

   return (
      <div
         className="
         w-full 
         flex 
         flex-center 
         rounded-full 
         bg-white 
         border-1 
         border-[#cfb6e2] 
         py-[6px] 
         pr-[6px] 
         pl-[16px] 
         gap-4 
         relative
         "
      >
         {outline && (
            <div
               className="
               absolute 
               top-[-7] 
               right-[-7px]
               w-[calc(100%_+_14px)] 
               h-[calc(100%_+_14px)] 
               rounded-full
               border-2 
               border-[#cfb6e2]
               pointer-events-none
               "
            />
         )}

         <CiSearch className={`text-[20px] cursor-pointer `} />
         <input
            value={input}
            type="text"
            placeholder="Search"
            className="w-full bg-inherit outline-none text-[12px]"
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={inputHandler}
         />

         {input.length > 0 && (
            <p className="mr-[7px] cursor-pointer" onClick={() => setInput('')}>
               Clear
            </p>
         )}
      </div>
   );
};

export default Input;
