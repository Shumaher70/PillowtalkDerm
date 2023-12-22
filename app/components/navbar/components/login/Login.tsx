"use client"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

import { AiOutlineUser } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { loginMenu } from "@/redux/features/sidebarSlice"
import { useEffect } from "react"

const Login = () => {
   const { isSignedIn, user } = useUser()
   const menuSlice = useAppSelector((state) => state.sidebarReducer.loginMenu)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (!isSignedIn) {
         dispatch(loginMenu(false))
      }
   }, [dispatch, isSignedIn])

   const route = useRouter()

   const icon = isSignedIn ? (
      <Image
         width={32}
         height={32}
         src={user?.imageUrl}
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
            if (!isSignedIn) {
               route.push("/sign-in")
            }
         }}
      >
         {icon}
      </div>
   )
}

export default Login
