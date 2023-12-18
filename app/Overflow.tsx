"use client"
import { MotionDiv } from "@/motion/MotionDiv"
import { useAppSelector } from "@/redux/hooks"
import React, { useEffect, useState } from "react"

const Overflow = () => {
   const [overflow, setOverflow] = useState(true)
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)

   useEffect(() => {
      if (typeof document !== "undefined")
         if (
            sidebarSlice.sidebarBurger ||
            sidebarSlice.sidebarCart ||
            sidebarSlice.sidebarSearch ||
            sidebarSlice.slideSearch ||
            sidebarSlice.slideShop ||
            sidebarSlice.slideSkinNerdAcademy
         ) {
            setOverflow(false)
         } else {
            setOverflow(true)
         }

      document.body.style.overflow = overflow ? "visible" : "hidden"
   }, [
      overflow,
      sidebarSlice.sidebarBurger,
      sidebarSlice.sidebarCart,
      sidebarSlice.sidebarSearch,
      sidebarSlice.slideSearch,
      sidebarSlice.slideShop,
      sidebarSlice.slideSkinNerdAcademy,
   ])

   return (
      <MotionDiv
         initial={{ y: "-100%" }}
         transition={{ duration: 0 }}
         animate={{ y: `${overflow ? "-100%" : 0}` }}
         className="fixed top-0 z-[5] h-full w-full bg-black/30"
      ></MotionDiv>
   )
}

export default Overflow
