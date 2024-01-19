"use client"

import axios from "axios"
import { useEffect } from "react"

const Verified = ({ email }: { email: string }) => {
   useEffect(() => {
      const fetchVerified = async () => {
         await axios.put("/api/reviewsVerified", {
            email,
         })
      }
      fetchVerified()
   }, [email])
   return null
}

export default Verified
