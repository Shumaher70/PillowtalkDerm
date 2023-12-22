"use client"
import { loginMenu } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { SignOutButton } from "@clerk/nextjs"
import Link from "next/link"

import { CiLogout } from "react-icons/ci"
import { MdManageAccounts } from "react-icons/md"

const LoginMenu = () => {
   const menuSelector = useAppSelector(
      (state) => state.sidebarReducer.loginMenu
   )
   const dispatch = useAppDispatch()

   return (
      <div
         className={`flex-center right-[69px] top-[50px] z-[11] flex flex-col gap-3 rounded-b-[16px] transition-all duration-500 md:right-[90px] md:top-[90px] ${
            menuSelector ? "fixed" : "hidden"
         }`}
      >
         <div
            className="flex-center flex cursor-pointer gap-2 rounded-full bg-white px-[16px] py-[4px]"
            onClick={() => dispatch(loginMenu(false))}
         >
            <MdManageAccounts />
            <Link href={"/account"}>Account</Link>
         </div>
         <div
            className="flex-center flex cursor-pointer gap-2 rounded-full bg-white px-[16px] py-[4px] pb-2"
            onClick={() => dispatch(loginMenu(false))}
         >
            <CiLogout />
            <SignOutButton />
         </div>
      </div>
   )
}

export default LoginMenu
