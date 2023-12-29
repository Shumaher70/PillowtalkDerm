"use client"
import { loginMenu } from "@/redux/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { useRouter } from "next/navigation"

import { CiLogout } from "react-icons/ci"
import { MdManageAccounts } from "react-icons/md"

import dynamic from "next/dynamic"

const LoginMenu = () => {
   const menuSelector = useAppSelector(
      (state) => state.sidebarReducer.loginMenu
   )
   const route = useRouter()
   const dispatch = useAppDispatch()

   const SignOutButton = dynamic(
      () => import("@clerk/nextjs").then((mod) => mod.SignOutButton),
      {
         ssr: false,
      }
   )

   return (
      <div
         className={`flex-center right-[69px] top-[50px] z-[11] flex flex-col gap-3 rounded-b-[16px] transition-all duration-500 md:right-[90px] md:top-[90px] ${
            menuSelector ? "fixed" : "hidden"
         }`}
      >
         <div
            className="flex-center flex h-[36px] cursor-pointer gap-2 rounded-full bg-white px-[16px]"
            onClick={() => {
               dispatch(loginMenu(false))
               route.push("/account")
            }}
         >
            <MdManageAccounts />
            Account
         </div>
         <div
            className="flex-center flex h-[36px] cursor-pointer gap-2 rounded-full bg-white  px-[16px]"
            onClick={() => dispatch(loginMenu(false))}
         >
            <CiLogout />
            <SignOutButton />
         </div>
      </div>
   )
}

export default LoginMenu
