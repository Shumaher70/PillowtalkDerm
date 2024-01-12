"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { BiSolidLike } from "react-icons/bi"
import { BiSolidDislike } from "react-icons/bi"

interface LikesProps {
   like: number
   dislike: number
   id: string
}

const Likes = ({ like, dislike, id }: LikesProps) => {
   const [vote, setVote] = useState({
      voteUpStyle: false,
      voteDownStyle: false,
      voteUp: 0,
      voteDown: 0,
   })

   useEffect(() => {
      const getLocalStorage = localStorage.getItem(id)

      if (getLocalStorage !== null) {
         try {
            const voteStorage = JSON.parse(getLocalStorage)

            setVote(voteStorage)
         } catch (error) {
            console.error("Error parsing JSON from localStorage:", error)
         }
      }
   }, [id])

   useEffect(() => {
      const putVote = async () => {
         await axios.put("/api/reviews", {
            id: id,
            like: like + vote.voteUp,
            dislike: dislike + vote.voteDown,
         })
      }

      if (!vote.voteDown && !vote.voteUp) {
         putVote()
      }
   }, [dislike, id, like, vote.voteDown, vote.voteUp])

   useEffect(() => {
      if (vote.voteUpStyle || vote.voteDownStyle) {
         localStorage.setItem(id, JSON.stringify(vote))
      }
   }, [id, vote])

   return (
      <div className="flex w-full items-center gap-2">
         <span className="text-[14px]">Was this review helpful?</span>

         <div className="flex items-center gap-1">
            <BiSolidLike
               className={`cursor-pointer ${
                  vote.voteUpStyle ? "text-[#F92672]" : "text-black"
               } transition-all duration-1000`}
               onClick={() => {
                  localStorage.setItem(id, JSON.stringify(vote))
                  {
                     setVote({
                        voteUpStyle: true,
                        voteDownStyle: false,
                        voteUp: 1,
                        voteDown: 0,
                     })
                  }
               }}
            />
            <span className="text-[14px]">{like + vote.voteUp}</span>
         </div>

         <div className="flex items-center gap-1">
            <BiSolidDislike
               className={`cursor-pointer ${
                  vote.voteDownStyle ? "text-[#F92672]" : "text-black"
               } transition-all duration-500`}
               onClick={() => {
                  localStorage.setItem(id, JSON.stringify(vote))
                  setVote({
                     voteUpStyle: false,
                     voteDownStyle: true,
                     voteUp: 0,
                     voteDown: 1,
                  })
               }}
            />
            <span className="text-[14px]">{dislike + vote.voteDown}</span>
         </div>
      </div>
   )
}

export default Likes
