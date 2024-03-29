"use client"
import { useRouter } from "next/navigation"
import { spin } from "./spin"
import { useAppDispatch } from "@/redux/hooks"
import { sidebarBurger } from "@/redux/features/sidebarSlice"

interface ButtonProps {
   text: string
   size: "sm" | "lg"
   onClick?: (e: React.MouseEvent) => void
   className?: string
   soldOut?: boolean
   children?: React.ReactNode
   load: boolean
   classText?: string
   href?: string
}

const Button = ({
   href,
   text = "button",
   size = "sm",
   className,
   onClick,
   soldOut,
   load,
   classText,
}: ButtonProps) => {
   const route = useRouter()

   const dispatch = useAppDispatch()

   return (
      <button
         onClick={(e) => {
            onClick?.(e)
            if (href) {
               route.push(`${href}`)
               dispatch(sidebarBurger(false))
            }
         }}
         disabled={soldOut || load ? true : false}
         className={`
         ${size === "lg" && "px-[24px] py-[14px] lg:px-[24px] lg:py-[12px]"}
         ${size === "sm" && "px-[16px] py-[10px]"}
         flex-center
         !duration-250
         relative
         cursor-pointer
         rounded-full
         text-white
         transition-all
         hover:bg-pink-600
         ${
            load &&
            "!cursor-not-allowed !bg-gradient-to-r from-pink-400 to-pink-600 "
         }
         ${soldOut ? "!cursor-not-allowed !bg-gray-300" : ""}
         ${className}
         `}
      >
         {soldOut ? (
            <p className="text-[11px] md:text-[16px]">sold out</p>
         ) : (
            <>
               <div
                  className={`absolute left-2/4 top-2/4 hidden -translate-x-1/4 -translate-y-2/4 ${
                     load && "!block"
                  }`}
               >
                  {spin}
               </div>

               <span
                  className={`flex items-center justify-center  text-[11px] opacity-100 md:text-[16px] ${classText} ${
                     load && "opacity-0"
                  }`}
               >
                  {text}
               </span>
            </>
         )}
      </button>
   )
}

export default Button
