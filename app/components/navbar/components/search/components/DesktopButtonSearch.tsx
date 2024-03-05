"use client"

import {
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from "@/redux/features/sidebarSlice"
import { useAppDispatch } from "@/redux/hooks"
import { CiSearch } from "react-icons/ci"

const DesktopButtonSearch = () => {
   const dispatch = useAppDispatch()

   return (
      <CiSearch
         className="hidden cursor-pointer text-[30px] lg:block"
         onClick={() => {
            dispatch(slideSearch(true))
            dispatch(slideShop(false))
            dispatch(slideSkinNerdAcademy(false))
         }}
      />
   )
}

export default DesktopButtonSearch
