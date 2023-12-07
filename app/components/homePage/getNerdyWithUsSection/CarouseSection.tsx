'use client';

import { nanoid } from '@reduxjs/toolkit';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

const CarouseSection = () => {
   const images = [
      '/imagesHomePage/imagesGetWithUsSection/1.webp',
      '/imagesHomePage/imagesGetWithUsSection/2.webp',
      '/imagesHomePage/imagesGetWithUsSection/3.webp',
      '/imagesHomePage/imagesGetWithUsSection/4.webp',
      '/imagesHomePage/imagesGetWithUsSection/5.webp',
   ];

   const responsive = {
      mobile: {
         breakpoint: { max: 768, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
      laptop: {
         breakpoint: { max: 3000, min: 768 },
         items: 5,
         slidesToSlide: 1,
      },
   };

   return (
      <div className="md:mt-[20px] !overflow-hidden">
         <Carousel
            swipeable={true}
            arrows={false}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={10}
            autoPlay
            autoPlaySpeed={2000}
            containerClass="carousel-container mr-[10%] md:mr-0 "
            itemClass=""
            className="select-none !overflow-visible"
         >
            {images.map((image) => (
               <div key={nanoid()} className="pt-[100%] relative">
                  <Image
                     src={image}
                     alt={image}
                     width={0}
                     height={0}
                     sizes="100vh"
                     className="h-full w-full object-cover absolute top-0"
                     draggable="false"
                     loading="lazy"
                  />
               </div>
            ))}
         </Carousel>
      </div>
   );
};

export default CarouseSection;
