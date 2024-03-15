"use client"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"

interface InputProps {
   getInput?: (event: string) => void
   postInput?: string
   cleanInput: () => void
}

const Input = ({ getInput, postInput, cleanInput }: InputProps) => {
   let post = postInput || ""

   const [outline, setOutline] = useState(false)
   const [input, setInput] = useState("")

   const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
   }

   useEffect(() => {
      const timer = setTimeout(() => {
         if (getInput) {
            getInput(input.toLowerCase().trim())
         }
      }, 300)

      return () => clearTimeout(timer)
   }, [getInput, input])

   useEffect(() => {
      setInput(post)
   }, [post])

   const onFocus = () => setOutline(true)
   const onBlur = () => setOutline(false)

   return (
      <div
         data-testid="root"
         className={`
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
      `}
      >
         {outline && (
            <div
               data-testid="outline"
               className={`
               pointer-events-none 
               absolute 
               right-[-7px]
               top-[-7] 
               h-[calc(100%_+_14px)] 
               w-[calc(100%_+_14px)]
               rounded-full 
               border-2
               border-[#cfb6e2]
            `}
            />
         )}

         <CiSearch className={`cursor-pointer text-[20px]`} />
         <input
            data-testid="input"
            value={input}
            type="text"
            placeholder="Search"
            className="w-full bg-inherit text-[12px] outline-none"
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={inputHandler}
         />

         {input.length > 0 && (
            <p
               className="mr-[7px] cursor-pointer"
               onClick={() => {
                  cleanInput()
                  setInput("")
               }}
               data-testid="cleanup"
            >
               Clear
            </p>
         )}
      </div>
   )
}

export default Input
