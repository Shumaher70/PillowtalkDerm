"use client"

import ImageCard from "@/app/components/card/components/ImageCard"
import Image from "next/image"
import React from "react"
import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import ReactPlayer from "react-player"

const CarouselProduct = ({
   images,
   videos,
}: {
   images: string[]
   videos: string | null
}) => {
   const [dots, setDots] = useState(false)
   const [playVideo, setPlayVideo] = useState(true)

   const video = videos ?? ""

   useEffect(() => {
      const widthHandler = () => {
         if (window.innerWidth >= 1024) {
            setDots(true)
         } else {
            setDots(false)
         }
      }
      widthHandler()
      window.addEventListener("resize", widthHandler)

      return () => window.removeEventListener("resize", widthHandler)
   })

   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   }

   const imagesCarouselDots =
      images.length > 1
         ? images.slice(0, images.length).map((item) => item)
         : images.map((item) => item)

   const imagesCarousel =
      images.length > 1
         ? images.slice(0, images.length - 1).map((item) => item)
         : images.map((item) => item)

   const CustomDot = ({
      onClick,
      active,
      index,
   }: {
      onClick: () => void
      active: boolean
      index: number
   }) => {
      return (
         <Image
            width={0}
            height={0}
            sizes="100vw"
            src={imagesCarouselDots[index]}
            alt={imagesCarouselDots[index]}
            className={`${
               active ? "border-2 border-[#f0e8f6]" : "inactive"
            } h-[58px] w-[58px] cursor-pointer rounded-full object-cover object-center`}
            onClick={() => onClick()}
         />
      )
   }

   return (
      <div className="relative !overflow-hidden">
         {video.length > 0 ? (
            <Carousel
               swipeable={true}
               arrows={false}
               draggable={true}
               showDots={dots}
               responsive={responsive}
               ssr={true}
               infinite={false}
               keyBoardControl={true}
               transitionDuration={10}
               containerClass="carousel-container"
               dotListClass="flex !justify-start gap-4"
               itemClass="p-1 lg:p-0"
               className="mr-[10%] select-none !overflow-visible pb-[20px] lg:mr-0 lg:pb-[70px]"
               customDot={
                  <CustomDot onClick={() => {}} active={false} index={0} />
               }
            >
               {imagesCarousel.map((item, index) => (
                  <div
                     className="bg-accent container-rounded overflow-hidden"
                     key={index}
                  >
                     <ImageCard image={item} title={item} />
                  </div>
               ))}
               {
                  <div className="container-rounded relative h-full w-full overflow-hidden">
                     <div
                        onClick={() => setPlayVideo(false)}
                        className={`absolute right-2/4 top-2/4 z-[3] h-[30px] w-[30px] -translate-y-2/4 translate-x-2/4 cursor-pointer transition-all hover:scale-[1.5] lg:h-[60px] lg:w-[60px]  ${
                           playVideo ? "opacity-100" : "opacity-0"
                        } transition-all duration-1000 ${
                           playVideo ? " z-[3]" : "pointer-events-none"
                        }`}
                     >
                        <svg
                           className="h-full w-full"
                           aria-hidden="true"
                           fill="none"
                           focusable="false"
                           viewBox="0 0 10 14"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              clipRule="evenodd"
                              d="M1.48177 0.814643C0.81532 0.448245 0 0.930414 0 1.69094V12.2081C0 12.991 0.858787 13.4702 1.52503 13.0592L10.5398 7.49813C11.1918 7.09588 11.1679 6.13985 10.4965 5.77075L1.48177 0.814643Z"
                              fillRule="evenodd"
                              fill="white"
                           ></path>
                        </svg>
                     </div>
                     <Image
                        draggable={false}
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={images[images.length - 1]}
                        alt={images[images.length - 1]}
                        onClick={() => setPlayVideo(false)}
                        className={`absolute h-full w-full ${
                           playVideo ? "opacity-100" : "opacity-0"
                        } transition-all duration-1000 ${
                           playVideo ? "z-[2]" : "z-[-2]"
                        }`}
                     />

                     <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        url={video}
                        controls
                        onPause={() => setPlayVideo(true)}
                        playing={!playVideo}
                     />
                  </div>
               }
            </Carousel>
         ) : (
            <Carousel
               swipeable={true}
               arrows={false}
               draggable={true}
               showDots={dots}
               responsive={responsive}
               ssr={true}
               infinite={false}
               keyBoardControl={true}
               transitionDuration={10}
               containerClass="carousel-container"
               dotListClass="flex !justify-start gap-4"
               itemClass="p-1 lg:p-0"
               className="mr-[10%] select-none !overflow-visible pb-[20px] lg:mr-0 lg:pb-[70px]"
               customDot={
                  <CustomDot onClick={() => {}} active={false} index={0} />
               }
            >
               {imagesCarousel.map((item, index) => (
                  <div
                     className="bg-accent container-rounded overflow-hidden"
                     key={index}
                  >
                     <ImageCard image={item} title={item} />
                  </div>
               ))}
            </Carousel>
         )}
      </div>
   )
}

export default CarouselProduct
