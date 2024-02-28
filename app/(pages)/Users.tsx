"use client"

import { UserType } from "@/types"
import { useUser } from "@clerk/nextjs"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

const getUser = async () => {
   const user: UserType[] = await axios
      .get("/api/user")
      .then((response) => response.data)
   return user
}

const postUser = async (user: {
   id: string
   first_name: string
   last_name: string
   email: string
   img: string
}) => {
   await axios.post("/api/user", user)
}

const Users = () => {
   const [usersPrisma, setUsersPrisma] = useState<UserType[]>([])
   const { isSignedIn, user } = useUser()

   const { data, isSuccess } = useQuery({
      queryKey: ["user"],
      queryFn: getUser,
   })

   const { mutate } = useMutation({
      mutationFn: postUser,
   })

   useEffect(() => {
      const createUserIfNotExist = async () => {
         if (isSuccess) {
            if (data.length > 0 && isSignedIn) {
               const userExist = data.some((item) => item.id === user.id)

               if (!userExist) {
                  mutate({
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
                  })
               }
            }
         }
      }

      createUserIfNotExist()
   }, [usersPrisma])

   return null
}

export default Users
