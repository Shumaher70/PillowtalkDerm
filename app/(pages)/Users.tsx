"use client"

import { UserType } from "@/types"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useEffect, useState } from "react"

const Users = () => {
   const [usersPrisma, setUsersPrisma] = useState<UserType[]>([])
   const { isSignedIn, user } = useUser()

   useEffect(() => {
      const getUser = async () => {
         await axios
            .get("/api/user")
            .then((response) => setUsersPrisma(response.data))
      }
      if (isSignedIn) {
         getUser()
      }
   }, [isSignedIn])

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

      createUserIfNotExist()
   }, [usersPrisma])

   return null
}

export default Users
