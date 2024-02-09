"use client"
import { schnyderMlightFont } from "@/app/layout"
import Image from "next/image"
import Carousel from "react-multi-carousel"
import { IngredientsCarouselDummy } from "./IngredientsCarouselDummy"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const IngredientsCarousel = () => {
   const route = useRouter()
   const [slide, setSlide] = useState({
      showSlide: 0,
      currentSlide: 0,
   })
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 1,
      },
      laptop: {
         breakpoint: { max: 1024, min: 768 },
         items: 2,
         slidesToSlide: 2,
      },
      mobile: {
         breakpoint: { max: 768, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   }

   const handleResize = useCallback(() => {
      if (window.innerWidth <= 768) {
         setSlide({ showSlide: 1, currentSlide: 0 })
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
         setSlide({ showSlide: 2, currentSlide: 0 })
      } else {
         setSlide({ showSlide: 3, currentSlide: 0 })
      }
   }, [])

   useEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
   }, [handleResize])

   const CustomDot = ({
      onClick,
      active,
   }: {
      onClick: () => void
      active: boolean
   }) => {
      return (
         <button
            className={`${
               active
                  ? "border-pink-600 bg-gradient-to-t from-pink-400 to-pink-600"
                  : "inactive"
            } border-1 mr-2 h-[8px] w-[8px] rounded-full border-purple-300`}
            onClick={() => onClick()}
         />
      )
   }

   const handlerOpacityElementStyle = (index: number) => {
      let opacity
      if (slide.currentSlide === 0 && slide.showSlide === 3 && index === 3) {
         opacity = "opacity-50"
      } else if (
         slide.currentSlide === 1 &&
         slide.showSlide === 3 &&
         index === 0
      ) {
         opacity = "opacity-50"
      } else if (
         slide.currentSlide === 0 &&
         slide.showSlide === 2 &&
         index >= 2
      ) {
         opacity = "opacity-50"
      } else if (
         slide.currentSlide === 2 &&
         slide.showSlide === 2 &&
         index <= 1
      ) {
         opacity = "opacity-50"
      } else if (slide.currentSlide !== index && slide.showSlide === 1) {
         opacity = "opacity-50"
      }

      return opacity
   }

   return (
      <>
         <div
            draggable="false"
            className="bg-secondary container-rounded flex flex-col items-center justify-center px-3 py-2 text-center md:px-5 lg:flex-row lg:items-center lg:justify-between"
         >
            <h1 className={`${schnyderMlightFont.className} text-section`}>
               Ingredients Glossary
            </h1>
            <button className="mt-2 h-min w-full max-w-[300px] rounded-full border-[1px] border-purple-700 bg-purple-700 px-[10px] py-[10px] text-[14px] uppercase text-white transition-all hover:border-pink-500 hover:bg-pink-500 md:px-[20px] md:py-[10px] md:text-[16px] lg:w-fit">
               learn more
            </button>
         </div>
         <div className="relative mt-5">
            <Carousel
               beforeChange={(slide, ref) =>
                  setSlide({
                     showSlide: ref.slidesToShow,
                     currentSlide: slide,
                  })
               }
               rewindWithAnimation={false}
               rtl={false}
               rewind={false}
               partialVisible
               focusOnSelect={false}
               containerClass="container-carousel overflow-visible  select-none"
               itemClass="p-2"
               additionalTransfrom={0}
               centerMode={false}
               swipeable={true}
               minimumTouchDrag={1}
               arrows={false}
               draggable={true}
               showDots={true}
               renderDotsOutside
               responsive={responsive}
               ssr={true}
               infinite={false}
               keyBoardControl={true}
               transitionDuration={10}
               dotListClass="w-full "
               customDot={<CustomDot onClick={() => {}} active={false} />}
            >
               {IngredientsCarouselDummy.map((i, index) => (
                  <div
                     onClick={() =>
                        route.push("/blogs/news/ingredients-glossary")
                     }
                     key={index}
                     className={`flex h-full cursor-pointer flex-col ${handlerOpacityElementStyle(
                        index
                     )} transition-all duration-500`}
                  >
                     <div className="container-rounded-t relative overflow-hidden pt-[80%] ">
                        <Image
                           draggable="false"
                           width={0}
                           height={0}
                           sizes="100vh"
                           className="absolute right-0 top-0 h-full w-full object-cover brightness-[0.8]"
                           src={i.image}
                           alt={`slider-${index + 1}`}
                        />
                        <h3 className="absolute bottom-7 left-3 text-[20px] font-medium leading-[20px] text-white md:bottom-8 md:text-[32px] md:leading-[32px] lg:bottom-10 lg:left-5 lg:text-[35px] lg:leading-[35px]">
                           {i.title}
                        </h3>
                     </div>
                     <div className="bg-secondary container-rounded text-p relative bottom-5 h-full overflow-hidden p-2 md:p-3 lg:p-5 lg:text-[20px] ">
                        <p>{i.description}</p>
                     </div>
                  </div>
               ))}
            </Carousel>
         </div>
      </>
   )
}

export default IngredientsCarousel
