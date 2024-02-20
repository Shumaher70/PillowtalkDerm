"use client"
import { useLayoutEffect, useRef, useState } from "react"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"

interface FaqAccordionProps {
   title: string
   description: string
   className?: string
}

const FaqAccordion = ({
   title,
   description,
   className = "border-t-[1px]",
}: FaqAccordionProps) => {
   const [click, setClick] = useState(false)
   const [height, setHeight] = useState(0)
   const handlerClick = () => {
      setClick((e) => !e)
   }

   const refHeight = useRef<HTMLParagraphElement>(null)

   useLayoutEffect(() => {
      setHeight(refHeight.current?.clientHeight as number)
   }, [])

   return (
      <div className={`${className} border-purple-700 py-2`}>
         <div
            className="flex w-full cursor-pointer justify-between"
            onClick={handlerClick}
         >
            <button className="flex w-full text-left text-[12px] font-medium uppercase md:text-[16px]	">
               {title}
            </button>
            {click && (
               <AiFillMinusCircle className="flex-center flex rounded-full text-[30px] text-purple-700" />
            )}

            {!click && (
               <AiFillPlusCircle className="flex-center flex rounded-full text-[30px] text-purple-700" />
            )}
         </div>

         <div
            style={{ maxHeight: `${click ? `${height}px` : 0}` }}
            className={`mt-2 overflow-hidden transition-all duration-300 ease-linear`}
         >
            <p ref={refHeight} className="font-medium lg:text-[18px]">
               {description}
            </p>
         </div>
      </div>
   )
}

export default FaqAccordion
