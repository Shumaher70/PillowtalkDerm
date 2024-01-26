"use client"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const Page = () => {
   const { isSignedIn } = useUser()
   const route = useRouter()

   if (!isSignedIn) {
      route.push("/")
   }

   return (
      <div className="flex-center flex h-full w-full text-[100px]">Account</div>
   )
}

export default Page
