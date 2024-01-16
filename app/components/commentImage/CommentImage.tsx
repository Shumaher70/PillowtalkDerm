"use client"

import Image from "next/image"

import {
   commentAction,
   imageBackAction,
   imageForwardAction,
   imageRefreshAction,
} from "@/redux/features/commentImagesSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { IoClose } from "react-icons/io5"
import UserImage from "./components/userImage/UserImage"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const CommentImage = () => {
   const commentImagesSlice = useAppSelector(
      (state) => state.commentImagesReducer
   )
   const dispatch = useAppDispatch()

   return (
      <>
         {commentImagesSlice.commentImages && (
            <div className="fixed right-1/2 top-1/2 z-[99] h-full max-h-[95%] w-full max-w-[1024px] -translate-y-1/2 translate-x-1/2 px-5 md:max-h-[85%]">
               <div className="flex h-full max-h-[95%] w-full max-w-[1024px]">
                  <div className="flex h-full w-full rounded-[10px] bg-white">
                     <div className="flex-center relative flex h-full w-full flex-1 px-[30px]">
                        {commentImagesSlice.imageUrl!.length > 1 && (
                           <div
                              className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-[40px] text-black hover:bg-white/60"
                              onClick={() => dispatch(imageForwardAction())}
                           >
                              <IoIosArrowForward />
                           </div>
                        )}
                        <div className="flex h-full w-full justify-center">
                           <Image
                              width={0}
                              height={0}
                              sizes="100vh"
                              src={
                                 commentImagesSlice.imageUrl![
                                    commentImagesSlice.indexImage!
                                 ]
                              }
                              alt="photo"
                              className="min-h-full w-full object-contain "
                           />
                        </div>
                        {commentImagesSlice.imageUrl!.length > 1 && (
                           <div
                              className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-[40px] text-black hover:bg-white/60"
                              onClick={() => dispatch(imageBackAction())}
                           >
                              <IoIosArrowBack />
                           </div>
                        )}
                     </div>

                     <div className="hidden flex-1 flex-col justify-center border-l-[1px] border-gray-300  md:flex">
                        <div className="flex min-h-full w-full flex-col items-center justify-center px-5">
                           <UserImage user={commentImagesSlice} />
                        </div>
                     </div>
                  </div>
               </div>

               <div
                  className="absolute right-5 top-0 z-[99] rounded-full bg-white hover:bg-white/50 md:right-[5px] md:top-[-14px]"
                  onClick={() => dispatch(imageRefreshAction())}
               >
                  <IoClose className="z-[99] h-[20px] w-[20px] cursor-pointer" />
               </div>
            </div>
         )}

         {commentImagesSlice.commentImages && (
            <div
               className="fixed z-[90] h-full w-full cursor-pointer bg-black/40"
               onClick={() => dispatch(imageRefreshAction())}
            />
         )}
      </>
   )
}

export default CommentImage
