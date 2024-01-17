"use client"

import { UserType } from "@/types"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

const Users = () => {
   const [usersPrisma, setUsersPrisma] = useState<UserType[]>([])
   const { isSignedIn, user } = useUser()

   const fetchUsers: () => void = async () => {
      try {
         const user = await fetch("/api/user")
         if (user.ok) {
            const data = await user.json()
            setUsersPrisma(data)
         } else {
            throw new Error("user data did not respond")
         }
      } catch (error) {
         console.error("Error fetching user data:", error)
      }
   }

   useEffect(() => {
      fetchUsers()
   }, [])

   useEffect(() => {
      const createUserIfNotExist = async () => {
         if (usersPrisma.length > 0 && isSignedIn) {
            const userExist =
               usersPrisma.filter(
                  (item) => item.email === user?.emailAddresses[0].emailAddress
               ).length > 0
            if (!userExist) {
               await fetch("/api/user", {
                  method: "POST",
                  body: JSON.stringify({
                     id: user?.id,
                     first_name:
                        user?.firstName === null
                           ? "without a first name"
                           : user?.firstName,
                     last_name:
                        user?.lastName === null
                           ? "without a last name"
                           : user?.lastName,
                     email: user?.emailAddresses[0].emailAddress,
                     img: user?.imageUrl,
                  }),
                  headers: {
                     "Content-type": "application/json; charset=UTF-8",
                  },
               })
            }
         }
      }

      createUserIfNotExist()
   }, [
      isSignedIn,
      user?.emailAddresses,
      user?.firstName,
      user?.id,
      user?.imageUrl,
      user?.lastName,
      usersPrisma,
   ])

   return null
}

export default Users
