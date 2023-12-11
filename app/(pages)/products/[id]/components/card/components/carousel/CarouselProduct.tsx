'use client';

import ImageCard from '@/app/components/card/components/ImageCard';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import ReactPlayer from 'react-player';

const CarouselProduct = ({
   images,
   video,
}: {
   images: string[];
   video: string;
}) => {
   const [dots, setDots] = useState(false);
   const [playVideo, setPlayVideo] = useState(true);

   useEffect(() => {
      const widthHandler = () => {
         if (window.innerWidth >= 1024) {
            setDots(true);
         } else {
            setDots(false);
         }
      };
      widthHandler();
      window.addEventListener('resize', widthHandler);

      return () => window.removeEventListener('resize', widthHandler);
   });

   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };
   const CustomDot = ({
      onClick,
      active,
   }: {
      onClick: () => void;
      active: boolean;
   }) => {
      return (
         <button
            className={`${
               active
                  ? 'bg-gradient-to-t from-pink-400 to-pink-600 border-pink-600'
                  : 'inactive'
            } w-[8px] h-[8px] border-1 border-purple-300 rounded-full mr-2`}
            onClick={() => onClick()}
         ></button>
      );
   };

   return (
      <div className="relative !overflow-hidden">
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
            dotListClass=""
            itemClass="p-1 lg:p-0"
            className="select-none mr-[10%] lg:mr-0 !overflow-visible pb-[20px] "
            customDot={<CustomDot onClick={() => {}} active={false} />}
         >
            {images.map((item) => (
               <div
                  className="bg-accent overflow-hidden container-rounded"
                  key={nanoid()}
               >
                  <ImageCard image={item} title={item} />
               </div>
            ))}
            <div className="relative overflow-hidden h-full w-full container-rounded">
               {playVideo && (
                  <div
                     onClick={() => setPlayVideo(false)}
                     className="absolute w-full h-full z-[2] bg-black/20"
                  />
               )}
               <ReactPlayer
                  width={'100%'}
                  height={'100%'}
                  url={video}
                  controls
                  onPause={() => setPlayVideo(true)}
                  playing={!playVideo}
               />
            </div>
         </Carousel>
      </div>
   );
};

export default CarouselProduct;
