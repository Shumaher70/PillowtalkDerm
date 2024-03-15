"use client"

import Home from "./components/Home"
import About from "./components/About"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from "@/redux/features/sidebarSlice"
import { useRouter } from "next/navigation"

interface InfoProps {
   className?: string
}

const Info = ({ className }: InfoProps) => {
   const dispatch = useAppDispatch()
   const sliderSlice = useAppSelector((state) => state.sidebarReducer)
   const route = useRouter()

   return (
      <div className={`flex gap-3 ${className}`}>
         <Home />
         <p
            className={`
           text-p 
           cursor-pointer 
           whitespace-nowrap 
           rounded-[20px] 
           px-[10px] 
           py-[5px]
           capitalize
           ${sliderSlice.slideShop && "bg-white"}
         `}
            onMouseEnter={() => {
               dispatch(slideShop(true))
               dispatch(slideSkinNerdAcademy(false))
               dispatch(slideSearch(false))
            }}
            onClick={() => route.push("/shop")}
         >
            shop
         </p>

         <p
            className={`
               text-p 
               cursor-pointer 
               whitespace-nowrap 
               rounded-[20px] 
               px-[10px] 
               py-[5px]
               capitalize
               ${sliderSlice.slideSkinNerdAcademy && "bg-white"}
            `}
            onMouseEnter={() => {
               dispatch(slideSkinNerdAcademy(true))
               dispatch(slideShop(false))
               dispatch(slideSearch(false))
            }}
            onClick={() => route.push("/blogs/news")}
         >
            SkinNerdAcademy
         </p>
         <About />
      </div>
   )
}

export default Info
