"use client"
import { FaCheck } from "react-icons/fa6"

import { useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { mediaAction } from "@/redux/features/commentFilterSlice"

const CheckBox = () => {
   const [showCheck, setShowCheck] = useState(false)
   const [checkEnter, setCheckEnter] = useState(false)
   const dispatch = useAppDispatch()

   const leaveHandler = () => {
      setCheckEnter(false)
   }
   const clickHandler = () => {
      setShowCheck((previous) => !previous)
      setCheckEnter(true)
   }

   useEffect(() => {
      dispatch(mediaAction(showCheck))
   }, [dispatch, showCheck])

   return (
      <div
         className="flex min-w-max cursor-pointer items-center gap-2"
         onClick={clickHandler}
         onMouseLeave={leaveHandler}
      >
         <div className="relative h-[20px] w-[20px] bg-white">
            <div
               className={`checkShadow shadow-2xl] absolute right-0 top-0 h-[20px] w-[20px] rounded-[2px] bg-white transition-all duration-[250ms] ${
                  checkEnter ? "opacity-1" : "opacity-0"
               }`}
            />
            <FaCheck
               className={`bg-accent relative z-[2] h-full w-full !bg-[#F92672] p-[2px] text-white ${
                  showCheck ? "opacity-1" : "opacity-0"
               } transition-all duration-[250ms]`}
            />
         </div>
         <p>With media</p>
      </div>
   )
}

export default CheckBox
