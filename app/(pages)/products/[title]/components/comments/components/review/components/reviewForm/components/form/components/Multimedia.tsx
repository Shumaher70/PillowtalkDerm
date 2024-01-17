"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
   imageKeyAction,
   imageUrlAction,
   stepAction,
} from "@/redux/features/commentSlice"

import axios from "axios"

import { motion } from "framer-motion"

import { ImSpinner8 } from "react-icons/im"
import { IoMdCloseCircle } from "react-icons/io"
import { PiPlusThin } from "react-icons/pi"

import { UploadDropzone } from "@/utils/uploadthing"
import { UploadFileResponse } from "uploadthing/client"

import Button from "./button/Button"

const Multimedia = () => {
   const dispatch = useAppDispatch()
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)

   const [uploaded, setUploaded] = useState(false)
   const [progress, setProgress] = useState(0)
   const closeFormSlice = useAppSelector(
      (state) => state.sidebarReducer.reviewForm
   )
   const [images, setImages] = useState<
      UploadFileResponse<{
         uploadedBy: string
      }>[]
   >([])

   const handleUserKeyPress = useCallback(
      (event: { key: any; keyCode: any }) => {
         const { key } = event

         if (key === "Enter" && stepSlice === 4) {
            dispatch(stepAction(5))
         }
         if (key === "Escape" && stepSlice === 4) {
            dispatch(stepAction(3))
         }
      },
      [dispatch, stepSlice]
   )

   useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress)
      return () => {
         window.removeEventListener("keydown", handleUserKeyPress)
      }
   }, [handleUserKeyPress])

   useEffect(() => {
      if (!closeFormSlice) setImages([])
   }, [closeFormSlice])

   useEffect(() => {
      dispatch(imageUrlAction(images.map((image) => image.url)))

      dispatch(imageKeyAction(images.map((image) => image.key)))
   }, [dispatch, images])

   const imageUrlSlice = useAppSelector(
      (state) => state.commentSlice.review.imageUrl as string[]
   )

   const filterRemoveMedia = (urlForRemove: string) => {
      setImages(images.filter((image) => image.url !== urlForRemove))
   }

   return (
      <motion.div
         animate={{
            opacity: stepSlice === 4 ? 1 : 0,
            right: `${stepSlice * 100 - 400}%`,
         }}
         transition={{ duration: 0.5 }}
         className="absolute top-2/4  min-w-full -translate-y-2/4"
      >
         <h1 className="mb-[10px] text-[22px] font-bold">
            Attach a photo or video:
         </h1>

         <div
            className={`relative flex h-[170px] w-full overflow-x-hidden overflow-y-scroll rounded-none border border-dashed border-gray-900/25 p-2`}
         >
            {!uploaded && (
               <div
                  style={{
                     width: `${progress}%`,
                  }}
                  className={`w-[${progress}%] absolute 
                  left-0 top-0 h-[170px] bg-[#F92672] transition-all`}
               />
            )}

            {!uploaded && progress !== 0 && (
               <p
                  className={`absolute right-2/4 top-2/4 flex -translate-y-2/4 translate-x-2/4 items-center gap-1 text-[20px] ${
                     progress === 100 ? "text-white" : "text-black"
                  }`}
               >
                  {progress === 100 ? (
                     <>
                        Uploading <ImSpinner8 className="animate-spin" />{" "}
                     </>
                  ) : (
                     `progress ${progress}%`
                  )}
               </p>
            )}

            {!uploaded && progress === 0 && (
               <div className="h-full w-full">
                  <div
                     className={`${
                        images.length > 0
                           ? "grid w-full grid-cols-3 gap-2 p-3 md:grid-cols-4 md:gap-3 md:p-5"
                           : "h-full w-full"
                     }`}
                  >
                     <div className="relative h-full w-full">
                        <UploadDropzone
                           endpoint="mediaPost"
                           onUploadProgress={(res) => setProgress(res)}
                           onClientUploadComplete={(res) => {
                              setUploaded(true)
                              setTimeout(() => {
                                 setUploaded(false)
                                 setProgress(0)
                              }, 100)

                              setImages((prev: any) => [
                                 ...prev,
                                 ...(Array.isArray(res) ? res : [res]),
                              ])
                           }}
                           onUploadError={(error: Error) => {
                              alert(`ERROR! ${error.message}`)
                           }}
                           config={{
                              mode: "auto",
                           }}
                           appearance={{
                              container: `p-0 m-0 cursor-pointer ${
                                 images.length === 0
                                    ? "rounded-none min-w-full border-none h-full relative"
                                    : "relative block min-h-[75px] w-full rounded-[10px] border-2 border-dashed border-black/50 md:h-[100px]"
                              }`,
                              uploadIcon: `w-[100px] h-[100px] ${
                                 images.length > 0 || progress > 0
                                    ? "hidden"
                                    : ""
                              }`,
                              label: "hidden",
                              allowedContent: `text-[16px] ${
                                 images.length > 0 || progress > 0
                                    ? "hidden"
                                    : ""
                              }`,
                              button: "hidden",
                           }}
                        />
                        {images.length > 0 && (
                           <PiPlusThin className="absolute right-2/4 top-2/4 h-10 w-10 -translate-y-2/4 translate-x-2/4 text-black/50" />
                        )}
                     </div>

                     {images.length > 0 &&
                        images.map((item) => {
                           return (
                              <div className="relative" key={item.key}>
                                 <Image
                                    id={item.key}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    src={item.url}
                                    alt={item.name}
                                    className="min-h-[75px] w-full rounded-[10px] object-cover md:h-[100px]"
                                 />

                                 <div
                                    className="absolute right-[-10px] top-[-10px] md:right-[-17px] md:top-[-17px]"
                                    onClick={async () => {
                                       filterRemoveMedia(item.url)
                                       await axios.delete(
                                          "http://localhost:3000/api/uploadthing",
                                          {
                                             data: {
                                                url: item.url,
                                             },
                                          }
                                       )
                                    }}
                                 >
                                    <IoMdCloseCircle className="h-[20px] w-[20px] cursor-pointer text-black/50 md:h-[30px] md:w-[30px]" />
                                 </div>
                              </div>
                           )
                        })}
                  </div>
               </div>
            )}
         </div>

         <div
            className={`${
               imageUrlSlice.length > 0 ? "flex-start" : "flex-center"
            } mt-3 flex w-full`}
         >
            {imageUrlSlice.length === 0 && progress === 0 && (
               <span
                  onClick={() => {
                     dispatch(stepAction(5))
                  }}
                  className="text-p cursor-pointer text-[#F92672] underline"
               >
                  Skip
               </span>
            )}

            {imageUrlSlice.length > 0 && (
               <Button
                  onClick={() => dispatch(stepAction(5))}
                  className="!mt-0"
               >
                  continue
               </Button>
            )}
         </div>
      </motion.div>
   )
}

export default Multimedia
