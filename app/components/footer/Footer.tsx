"use client"
import { visibilityAction } from "@/redux/features/cartMotionSlice"
import ImageFooter from "./image/imageFooter"
import LegalSection from "./legal/LegalSection"
import Menu from "./menu/Menu"
import Subscribe from "./subscribe/Subscribe"
import { useEffect, useRef } from "react"
import useIsInViewport from "@/app/hooks/useIsInViewport"
import { useAppDispatch } from "@/redux/hooks"

const Footer = () => {
   const dispatch = useAppDispatch()
   const refPage = useRef<HTMLDivElement>(null)

   const page = useIsInViewport(refPage)

   useEffect(() => {
      dispatch(visibilityAction(page))
   }, [page])
   return (
      <footer
         className="container-rounded-t container-p bg-secondary relative flex w-full flex-col !pb-0 !pt-[48px]"
         ref={refPage}
      >
         <div className="container-rounded flex w-full flex-col items-center justify-between gap-10 bg-white p-[20px] pb-[40px] lg:flex-row lg:p-[40px]">
            <div className="max-w-[250px]">
               <ImageFooter />
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
               <div className="w-full pt-10 lg:order-1 lg:pt-0">
                  <Subscribe />
               </div>

               <div className="w-full pt-10 lg:max-w-[300px] lg:pt-0">
                  <Menu />
               </div>
            </div>
         </div>

         <div className="flex w-full flex-col items-center gap-2 p-[20px] pb-[40px] text-center md:text-start lg:flex-row lg:justify-between">
            <p className="text-[12px]">
               © Copyright 2023 Dr. Shereene Idriss / PillowtalkDerm
            </p>

            <LegalSection />
         </div>
      </footer>
   )
}

export default Footer
