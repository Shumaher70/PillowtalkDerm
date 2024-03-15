"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { AiOutlineUser } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { loginMenu } from "@/redux/features/sidebarSlice"
import { useEffect } from "react"

interface LoginProps {
   userImage?: string
   userId?: string
}

const Login = ({ userImage, userId }: LoginProps) => {
   const menuSlice = useAppSelector((state) => state.sidebarReducer.loginMenu)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (userId) {
         dispatch(loginMenu(false))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [userId])

   const route = useRouter()

   const icon = userId ? (
      <Image
         width={32}
         height={32}
         src={userImage!}
         alt="user icon"
         className="bg-accent cursor-pointer rounded-full"
         onClick={() => {
            dispatch(loginMenu(true))
            if (menuSlice) {
               dispatch(loginMenu(false))
            }
         }}
      />
   ) : (
      <AiOutlineUser className="cursor-pointer text-[30px]" />
   )

   return (
      <div
         onClick={() => {
            if (!userId) {
               route.push("/sign-in")
            }
         }}
      >
         {icon}
      </div>
   )
}

export default Login
