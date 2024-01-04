"use client"

import { useAppDispatch } from "@/redux/hooks"
import { reviewForm } from "@/redux/features/sidebarSlice"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"

const ButtonForm = () => {
   const dispatch = useAppDispatch()
   const router = useRouter()
   const { isSignedIn } = useUser()

   return (
      <button
         className="text-p w-full max-w-[600px] rounded-full bg-purple-700 px-[16px] py-[8px] uppercase text-white active:bg-purple-700/90 lg:w-[200px]"
         onClick={() => {
            if (isSignedIn) {
               dispatch(reviewForm(true))
            } else {
               router.push("/sign-in")
            }
         }}
      >
         write a review
      </button>
   )
}

export default ButtonForm
