"use client"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"

interface InputProps {
   getInput?: (event: string) => void
   postInput?: string
}

const Input = ({ getInput, postInput }: InputProps) => {
   const post = postInput || ""

   const [outline, setOutline] = useState(false)
   const [input, setInput] = useState(post)

   const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
   }

   useEffect(() => {
      if (getInput) {
         const timer = setTimeout(() => {
            getInput(input.toLowerCase().trim())
         }, 300)
         return () => clearTimeout(timer)
      }
   }, [getInput, input])

   useEffect(() => {
      if (post) return setInput(post)
   }, [post])

   const onFocus = () => setOutline(true)
   const onBlur = () => setOutline(false)

   return (
      <div
         className="
         flex-center 
         border-1 
         relative 
         flex 
         w-full 
         gap-2 
         rounded-full 
         border-[#cfb6e2] 
         bg-white 
         py-[6px] 
         pl-[16px]
         pr-[6px]
         "
      >
         {outline && (
            <div
               className="
               pointer-events-none 
               absolute 
               right-[-7px]
               top-[-7] 
               h-[calc(100%_+_14px)] 
               w-[calc(100%_+_14px)]
               rounded-full 
               border-2
               border-[#cfb6e2]
               "
            />
         )}

         <CiSearch className={`cursor-pointer text-[20px] `} />
         <input
            value={input}
            type="text"
            placeholder="Search"
            className="w-full bg-inherit text-[12px] outline-none"
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={inputHandler}
         />

         {input.length > 0 && (
            <p className="mr-[7px] cursor-pointer" onClick={() => setInput("")}>
               Clear
            </p>
         )}
      </div>
   )
}

export default Input
