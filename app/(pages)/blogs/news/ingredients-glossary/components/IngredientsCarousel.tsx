"use client"
import { schnyderMlightFont } from "@/app/layout"
import Carousel from "react-multi-carousel"

const IngredientsCarousel = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   }

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
         ></button>
      )
   }

   return (
      <>
         <div className="bg-secondary container-rounded flex flex-col items-center justify-center px-3 py-2 text-center md:px-5 lg:flex-row lg:items-center lg:justify-between">
            <h1 className={`${schnyderMlightFont.className} text-section`}>
               Ingredients Glossary
            </h1>
            <button className="mt-2 h-min w-full max-w-[300px] rounded-full border-[1px] border-purple-700 bg-purple-700 px-[10px] py-[10px] text-[14px] uppercase text-white transition-all hover:border-pink-500 hover:bg-pink-500 md:px-[20px] md:py-[10px] md:text-[16px] lg:w-fit">
               learn more
            </button>
         </div>
         <div className=" mt-5">
            <Carousel
               swipeable={true}
               arrows={false}
               draggable={true}
               showDots={true}
               responsive={responsive}
               ssr={true}
               infinite={false}
               keyBoardControl={true}
               transitionDuration={10}
               containerClass="carousel-container"
               dotListClass="block w-max h-[15px] absolute top-0 !left-[calc(100%-16px)] -translate-x-full"
               itemClass="p-2"
               className="!static select-none overflow-visible"
               customDot={<CustomDot onClick={() => {}} active={false} />}
            >
               <div className="bg-black">hello</div>
               <div className="bg-red-500">hello</div>
            </Carousel>
         </div>
      </>
   )
}

export default IngredientsCarousel
