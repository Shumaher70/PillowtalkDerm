"use client"

import { UserType } from "@/types"
import { useUser } from "@clerk/nextjs"
import { useCallback, useEffect, useState } from "react"

const Users = () => {
   const [usersPrisma, setUsersPrisma] = useState<UserType[]>([])
   const { isSignedIn, user } = useUser()

   const fetchUsers = useCallback(async () => {
      try {
         const response = await fetch("/api/user")
         if (response.ok) {
            const data = await response.json()
            setUsersPrisma(data)
         } else {
            throw new Error("user data did not respond")
         }
      } catch (error) {
         console.error("Error fetching user data:", error)
      }
   }, [])

   useEffect(() => {
      const createUserIfNotExist = async () => {
         if (usersPrisma.length > 0 && isSignedIn) {
            const userExist = usersPrisma.some(
               (item) => item.email === user?.emailAddresses[0].emailAddress
            )

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
      fetchUsers()
      createUserIfNotExist()
   }, [
      fetchUsers,
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
