"use client"

import { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { multiMediaAction, stepAction } from "@/redux/features/commentSlice"

import Image from "next/image"

import { MdOutlinePermMedia } from "react-icons/md"
import { IoCloseCircle } from "react-icons/io5"
import { BiPlus } from "react-icons/bi"

import { motion } from "framer-motion"

import Button from "./button/Button"

const Multimedia = () => {
   const dispatch = useAppDispatch()
   const stepSlice = useAppSelector((state) => state.commentSlice.review.step!)
   const [styleDragOver, setStyleDragOver] = useState(false)
   const [selectedFiles, setSelectedFiles] = useState<
      { file: File; preview: string }[]
   >([])

   const multiMediaSlice = useAppSelector(
      (state) => state.commentSlice.review.multiMedia!
   )

   useEffect(() => {
      dispatch(multiMediaAction(selectedFiles))
   }, [dispatch, selectedFiles])

   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()

      const files = Array.from(event.dataTransfer.files)

      const mediaFiles = files.filter(
         (file) =>
            file.type.startsWith("image/") || file.type.startsWith("video/")
      )

      const filesWithPreviews = mediaFiles.map((file) => ({
         file,
         preview: URL.createObjectURL(file),
      }))

      setSelectedFiles((prevFiles) =>
         [...prevFiles, ...filesWithPreviews].slice(0, 5)
      )
   }

   const handleFileInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const files = Array.from(event.target.files || [])

      const mediaFiles = files.filter(
         (file) =>
            file.type.startsWith("image/") || file.type.startsWith("video/")
      )

      const filesWithPreviews = mediaFiles.map((file) => ({
         file,
         preview: URL.createObjectURL(file),
      }))

      setSelectedFiles((prevFiles) =>
         [...prevFiles, ...filesWithPreviews].slice(0, 5)
      )
   }

   const removeFile = (index: number) => {
      const newFiles = [...selectedFiles]
      newFiles.splice(index, 1)
      setSelectedFiles(newFiles)
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
            className={`relative flex h-[150px] w-full ${
               multiMediaSlice.length === 0
                  ? "flex-col items-center justify-center border-2 border-dashed border-gray-300"
                  : "flex-row border-2 border-gray-300 bg-gray-100"
            } gap-2 overflow-hidden overflow-y-scroll ${
               styleDragOver && multiMediaSlice.length === 0
                  ? "!bg-gray-100"
                  : "!bg-white"
            }`}
            onDrop={(e) => {
               if (multiMediaSlice.length === 0) {
                  handleDrop(e)
               }
            }}
            onDragOver={(e) => {
               e.preventDefault()
               setStyleDragOver(true)
            }}
            onMouseLeave={() => setStyleDragOver(false)}
         >
            {multiMediaSlice.length === 0 && (
               <>
                  <MdOutlinePermMedia className="text-[40px] text-gray-300" />
                  <button className="cursor-pointer rounded-full bg-purple-700 px-[16px] py-[8px] uppercase text-white">
                     add media
                  </button>
               </>
            )}

            {multiMediaSlice.length === 0 && (
               <div className={`absolute h-full w-full`}>
                  <label
                     htmlFor="fileInput"
                     className="block h-full w-full cursor-pointer"
                  ></label>
                  <input
                     type="file"
                     className={`hidden`}
                     onChange={handleFileInputChange}
                     accept="image/*,video/*"
                     multiple
                     id="fileInput"
                  />
               </div>
            )}

            {multiMediaSlice.length > 0 && (
               <div className="h-full w-full">
                  <div className="grid w-full grid-cols-3 gap-2 p-3 md:grid-cols-4 md:gap-3 md:p-5">
                     <div
                        className={`relative block min-h-[75px] rounded-[10px] border-2 border-dashed border-black/50 md:h-[100px]`}
                        onDrop={handleDrop}
                        onDragOver={(e) => {
                           e.preventDefault()
                           setStyleDragOver(true)
                        }}
                        onMouseLeave={() => setStyleDragOver(false)}
                     >
                        <BiPlus className="absolute right-2/4 top-2/4 h-full w-full -translate-y-2/4 translate-x-2/4 text-black/50" />
                        <input
                           type="file"
                           className={`hidden`}
                           accept="image/*,video/*"
                           onChange={handleFileInputChange}
                           multiple
                           id="fileInput"
                        />

                        <label
                           htmlFor="fileInput"
                           className="relative z-10 block h-full w-full cursor-pointer"
                        ></label>
                     </div>

                     {multiMediaSlice.map((file, index) => (
                        <div className="relative" key={index}>
                           <Image
                              loading="lazy"
                              width={0}
                              height={0}
                              sizes="100vw"
                              src={file.preview}
                              alt="image"
                              className="min-h-[75px] w-full rounded-[10px] object-cover md:h-[100px]"
                           />
                           <div
                              className="absolute right-[-10px] top-[-10px] md:right-[-17px] md:top-[-17px]"
                              onClick={() => removeFile(index)}
                           >
                              <IoCloseCircle className="h-[20px] w-[20px] cursor-pointer text-black/50 md:h-[30px] md:w-[30px]" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>

         <div
            className={`${
               multiMediaSlice.length === 0 ? "flex-center" : "flex-start"
            } mt-5 flex w-full`}
         >
            {multiMediaSlice.length === 0 && (
               <span
                  onClick={() => {
                     dispatch(stepAction(5))
                  }}
                  className="text-p cursor-pointer text-[#F92672] underline"
               >
                  Skip
               </span>
            )}
            {multiMediaSlice.length > 0 && (
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
