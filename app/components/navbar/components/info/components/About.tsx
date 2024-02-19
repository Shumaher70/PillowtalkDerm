"use client"
import {
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from "@/redux/features/sidebarSlice"
import { useAppDispatch } from "@/redux/hooks"
import Link from "next/link"
import React from "react"

const About = () => {
   const dispatch = useAppDispatch()
   return (
      <Link
         href="/our-story"
         onMouseEnter={() => {
            dispatch(slideShop(false))
            dispatch(slideSkinNerdAcademy(false))
            dispatch(slideSearch(false))
         }}
         className="
           text-p 
           cursor-pointer 
           whitespace-nowrap 
           rounded-[20px] 
           px-[10px] 
           py-[5px]
           capitalize
           hover:bg-white
         "
      >
         about
      </Link>
   )
}

export default About
