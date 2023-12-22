"use client"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Page = () => {
   const { isSignedIn } = useUser()
   const route = useRouter()
   useEffect(() => {
      if (!isSignedIn) {
         route.push("/")
      }
   }, [isSignedIn, route])
   return (
      <div className="flex-center flex h-full w-full text-[100px]">Account</div>
   )
}

export default Page
