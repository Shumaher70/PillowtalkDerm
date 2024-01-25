"use client"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
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

   const refPreviousClick = useRef({
      voteUpStyle: false,
      voteDownStyle: false,
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
      if (vote.voteUpStyle || vote.voteDownStyle) {
         localStorage.setItem(
            id,
            JSON.stringify({
               voteUpStyle: vote.voteUpStyle,
               voteDownStyle: vote.voteDownStyle,
               voteUp: 0,
               voteDown: 0,
            })
         )
      }
   }, [id, vote])

   useEffect(() => {
      refPreviousClick.current = vote
   }, [vote])

   const putLike = async () => {
      await axios.put("/api/like", {
         id: id,
         like: 1,
         dislike:
            !refPreviousClick.current.voteUpStyle &&
            !refPreviousClick.current.voteDownStyle
               ? 0
               : 1,
      })
   }

   const putDislike = async () => {
      await axios.put("/api/dislike", {
         id: id,
         like:
            !refPreviousClick.current.voteUpStyle &&
            !refPreviousClick.current.voteDownStyle
               ? 0
               : 1,
         dislike: 1,
      })
   }

   return (
      <div className="flex w-full items-center gap-2">
         <span className="text-[14px]">Was this review helpful?</span>

         <div className="flex items-center gap-1">
            <button
               disabled={vote.voteUpStyle}
               onClick={() => {
                  putLike()
                  setVote((priv) => {
                     return {
                        voteUpStyle: true,
                        voteDownStyle: false,
                        voteUp: priv.voteUp + 1,
                        voteDown:
                           !refPreviousClick.current.voteDownStyle &&
                           !refPreviousClick.current.voteUpStyle
                              ? 0
                              : priv.voteDown - 1,
                     }
                  })
               }}
            >
               <BiSolidLike
                  className={`cursor-pointer ${
                     vote.voteUpStyle ? "text-[#F92672]" : "text-black"
                  } transition-all duration-1000`}
               />
            </button>
            <span className="text-[14px]">{like + vote.voteUp}</span>
         </div>

         <div className="flex items-center gap-1">
            <button
               disabled={vote.voteDownStyle}
               onClick={() => {
                  putDislike()
                  setVote((priv) => {
                     return {
                        voteUpStyle: false,
                        voteDownStyle: true,
                        voteUp:
                           !refPreviousClick.current.voteDownStyle &&
                           !refPreviousClick.current.voteUpStyle
                              ? 0
                              : priv.voteUp - 1,
                        voteDown: priv.voteDown + 1,
                     }
                  })
               }}
            >
               <BiSolidDislike
                  className={`cursor-pointer ${
                     vote.voteDownStyle ? "text-[#F92672]" : "text-black"
                  } transition-all duration-500`}
               />
            </button>
            <span className="text-[14px]">{dislike + vote.voteDown}</span>
         </div>
      </div>
   )
}

export default Likes
