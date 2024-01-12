"use client"
import Image from "next/image"
import { useState } from "react"

interface CommentProps {
   title: string
   comment: string
   media: string[]
}

const Comment = ({ title, comment, media }: CommentProps) => {
   const [extraTitleHeight, setExtraTitleHeight] = useState(false)
   const [extraCommentHeight, setExtraCommentHeight] = useState(false)

   return (
      <div className="flex w-full flex-col gap-2">
         <h3
            className={`overflow-hidden 
               text-[20px] font-bold`}
         >
            <>
               {!extraTitleHeight && title.trim().slice(0, 70)}
               {extraTitleHeight && title}
               {title.length >= 70 && !extraTitleHeight && (
                  <span
                     onClick={() => setExtraTitleHeight(true)}
                     className="inline-block cursor-pointer text-[20px] font-bold text-[#F92672]"
                  >
                     ...
                  </span>
               )}
            </>
         </h3>

         {extraCommentHeight && (
            <>
               <p className="text-p">{comment}</p>
               {media.length > 0 && (
                  <div className="flex w-full flex-wrap gap-2">
                     {media?.map((image) => (
                        <div key={image}>
                           <Image
                              width={100}
                              height={100}
                              alt="comment image"
                              className="h-[75px] w-[75px] cursor-pointer object-cover"
                              src={image}
                           />
                        </div>
                     ))}
                  </div>
               )}
            </>
         )}

         {!extraCommentHeight && (
            <>
               <p className="text-p">
                  {comment.slice(0, 400)}

                  {title.length >= 400 && !extraCommentHeight && (
                     <span
                        onClick={() => setExtraCommentHeight(true)}
                        className="inline-block cursor-pointer text-[16px] font-bold text-[#F92672]"
                     >
                        ...
                     </span>
                  )}
               </p>
               {media.length > 0 && (
                  <div className="flex w-full flex-wrap gap-2">
                     {media?.map((image) => (
                        <div key={image}>
                           <Image
                              width={100}
                              height={100}
                              alt="comment image"
                              className="h-[75px] w-[75px] cursor-pointer object-cover"
                              src={image}
                           />
                        </div>
                     ))}
                  </div>
               )}
            </>
         )}
      </div>
   )
}

export default Comment
