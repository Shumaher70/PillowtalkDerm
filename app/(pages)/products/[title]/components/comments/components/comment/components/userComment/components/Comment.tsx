"use client"
import { useAppDispatch } from "@/redux/hooks"
import Image from "next/image"
import { useState } from "react"
import { commentAction } from "@/redux/features/commentImagesSlice"
import { Review } from "@prisma/client"

interface CommentProps {
   comment: Review
}

const Comment = ({ comment }: CommentProps) => {
   const dispatch = useAppDispatch()
   const [extraTitleHeight, setExtraTitleHeight] = useState(false)
   const [extraCommentHeight, setExtraCommentHeight] = useState(false)

   return (
      <div className="flex w-full flex-col gap-2">
         <h3
            className={`overflow-hidden 
               text-[20px] font-bold`}
         >
            <>
               {!extraTitleHeight && comment.title.trim().slice(0, 70)}
               {extraTitleHeight && comment.title}
               {comment.title.length >= 70 && !extraTitleHeight && (
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
               <p className="text-p">{comment.comment}</p>
               {comment.images.length > 0 && (
                  <div className="flex w-full flex-wrap gap-2">
                     {comment.images?.map((image, index) => (
                        <div
                           key={image}
                           onClick={() => {
                              dispatch(
                                 commentAction({
                                    recommend: comment.recommend,
                                    createdAt: comment.createdAt,
                                    titleReview: comment.title,
                                    verified: comment.verified,
                                    dislike: comment.dislike,
                                    imageUrl: comment.images,
                                    review: comment.comment,
                                    stars: comment.rating,
                                    email: comment.email,
                                    commentImages: true,
                                    name: comment.name,
                                    indexImage: index,
                                    like: comment.like,
                                    id: comment.id,
                                 })
                              )
                           }}
                        >
                           <Image
                              width={100}
                              height={100}
                              alt="comment image"
                              className="h-[100px] w-[100px] cursor-pointer object-cover"
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
                  {comment.comment.slice(0, 400)}

                  {comment.title.length >= 400 && !extraCommentHeight && (
                     <span
                        onClick={() => setExtraCommentHeight(true)}
                        className="inline-block cursor-pointer text-[16px] font-bold text-[#F92672]"
                     >
                        ...
                     </span>
                  )}
               </p>
               {comment.images.length > 0 && (
                  <div className="flex w-full flex-wrap gap-2">
                     {comment.images?.map((image, index) => (
                        <div
                           key={image}
                           onClick={() => {
                              dispatch(
                                 commentAction({
                                    recommend: comment.recommend,
                                    createdAt: comment.createdAt,
                                    titleReview: comment.title,
                                    verified: comment.verified,
                                    dislike: comment.dislike,
                                    imageUrl: comment.images,
                                    review: comment.comment,
                                    stars: comment.rating,
                                    email: comment.email,
                                    commentImages: true,
                                    name: comment.name,
                                    indexImage: index,
                                    like: comment.like,
                                    id: comment.id,
                                 })
                              )
                           }}
                        >
                           <Image
                              width={100}
                              height={100}
                              alt="comment image"
                              className="h-[100px] w-[100px] cursor-pointer object-cover"
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
