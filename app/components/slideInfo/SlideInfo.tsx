"use client"

import SearchDesktop from "../navbar/components/search/SearchDesktop"
import Shop from "../navbar/components/info/components/Shop"
import SkinNerdAcademy from "../navbar/components/info/components/SkinNerdAcademy"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import { slideShop, slideSkinNerdAcademy } from "@/redux/features/sidebarSlice"
import { useEffect, useState } from "react"
import { BlogType, ProductType } from "@/types"

const SlideInfo = ({
   products,
   blogs,
}: {
   products: ProductType[] | undefined
   blogs: BlogType[] | undefined
}) => {
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)
   const dispatch = useAppDispatch()

   const displaySearch = {
      trigger: {
         transition: {
            duration: 0.4,
         },
         y: sidebarSlice.slideSearch ? 0 : "-100%",
      },

      opacity: {
         transition: {
            duration: sidebarSlice.slideSearch ? 0.4 : 0,
            delay: sidebarSlice.slideSearch ? 0.4 : 0,
         },
         opacity: sidebarSlice.slideSearch ? 1 : 0,
      },
   }

   const displayShop = {
      trigger: {
         transition: {
            duration: 0.4,
         },
         y: sidebarSlice.slideShop ? 0 : "-100%",
      },

      opacity: {
         transition: {
            duration: sidebarSlice.slideShop ? 0.4 : 0,
            delay: sidebarSlice.slideShop ? 0.4 : 0,
         },
         opacity: sidebarSlice.slideShop ? 1 : 0,
      },
   }

   const displaySkin = {
      trigger: {
         transition: {
            duration: 0.4,
         },
         y: sidebarSlice.slideSkinNerdAcademy ? 0 : "-100%",
      },

      opacity: {
         transition: {
            duration: sidebarSlice.slideSkinNerdAcademy ? 0.4 : 0,
            delay: sidebarSlice.slideSkinNerdAcademy ? 0.4 : 0,
         },
         opacity: sidebarSlice.slideSkinNerdAcademy ? 1 : 0,
      },
   }

   const moveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target && sidebarSlice.slideShop) {
         dispatch(slideShop(true))
      } else if (e.target && sidebarSlice.slideSkinNerdAcademy) {
         dispatch(slideSkinNerdAcademy(true))
      }
   }

   const blurHandler = () => {
      dispatch(slideShop(false))
      dispatch(slideSkinNerdAcademy(false))
   }

   return (
      <div
         onMouseEnter={moveHandler}
         onMouseLeave={blurHandler}
         className="z-10 w-full"
      >
         <motion.div
            className="bg-accent container-rounded-b container-px fixed z-10 h-full w-full"
            variants={displaySearch}
            initial={{ y: "-100%" }}
            animate={"trigger"}
         >
            <motion.div
               className="w-full"
               variants={displaySearch}
               initial={{ opacity: 0 }}
               animate={"opacity"}
            >
               <SearchDesktop />
            </motion.div>
         </motion.div>

         <motion.div
            className="bg-accent container-rounded-b container-px fixed top-[60px] z-10 w-full"
            variants={displayShop}
            initial={{ y: "-100%" }}
            animate={"trigger"}
         >
            <motion.div
               variants={displayShop}
               initial={{ opacity: 1 }}
               animate="opacity"
            >
               <Shop products={products} />
            </motion.div>
         </motion.div>

         <motion.div
            className="bg-accent container-rounded-b container-px fixed top-[60px] z-10 w-full"
            variants={displaySkin}
            initial={{ y: "-100%" }}
            animate={"trigger"}
         >
            <motion.div
               variants={displaySkin}
               initial={{ opacity: 1 }}
               animate="opacity"
            >
               {sidebarSlice.slideSkinNerdAcademy && (
                  <SkinNerdAcademy blogs={blogs} />
               )}
            </motion.div>
         </motion.div>
      </div>
   )
}

export default SlideInfo
