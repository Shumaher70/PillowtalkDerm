"use client"

import { MotionDiv } from "@/motion/MotionDiv"
import { sidebarCart } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

interface SidebarProps {
   triggerSidebar: boolean
   children: React.ReactNode
   left?: boolean
   className?: string
}

const Sidebar = ({
   triggerSidebar,
   children,
   left,
   className,
}: SidebarProps) => {
   const sideBar = {
      open: left ? { x: "-100%" } : { x: "100%" },
      closed: { x: "0" },
   }

   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)
   const dispatch = useAppDispatch()

   return (
      <>
         <MotionDiv
            animate={triggerSidebar ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            variants={sideBar}
            className={`
            bg-accent 
            fixed 
            top-0
            z-[10]
            flex
            h-full 
            w-full
            flex-col
            overflow-hidden
            ${left ? "left-[100%]" : "right-[100%]"}
            lg:hidden
            ${className}
         `}
         >
            {children}
         </MotionDiv>

         {sidebarSlice.sidebarCart && (
            <div
               className="fixed right-0 top-0 z-[9] h-full w-full cursor-pointer bg-black/20"
               onClick={() => dispatch(sidebarCart(false))}
            />
         )}
      </>
   )
}

export default Sidebar
