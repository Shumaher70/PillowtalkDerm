'use client';

import { BlogType } from '@/types';
import Carousel from 'react-multi-carousel';
import BlogCard from '../../blogCard/BlogCard';
import { schnyderMlightFont } from '@/app/layout';
import { useEffect, useState } from 'react';
import ViewportMotionDivArr from '@/motion/ViewPortMotionDivArr';

const CarouseSection = ({ blogs }: { blogs: BlogType[] }) => {
   const [dots, setDots] = useState(true);

   useEffect(() => {
      const widthHandler = () => {
         if (window.innerWidth > 1024) {
            setDots(false);
         } else {
            setDots(true);
         }
      };
      widthHandler();
      window.addEventListener('resize', widthHandler);

      return () => window.removeEventListener('resize', widthHandler);
   });

   const responsive = {
      mobile: {
         breakpoint: { max: 768, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
      laptop: {
         breakpoint: { max: 1024, min: 768 },
         items: 2,
         slidesToSlide: 2,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 3,
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
      <div className="relative mt-[10px] md:mt-[20px] !overflow-hidden">
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
            itemClass="p-1 "
            className="select-none mx-[20px] mr-[10%] lg:mx-[80px] !overflow-visible pb-[20px] "
            customDot={<CustomDot onClick={() => {}} active={false} />}
         >
            {blogs
               .slice(4)
               .reverse()
               .map((blog) => (
                  <ViewportMotionDivArr key={blog.id}>
                     <BlogCard
                        id={blog.id}
                        images={blog.images}
                        title={blog.title}
                        tags={blog.tags}
                        sizeImage={75}
                        rounded="container-rounded"
                        classText={`text-[20px] md:text-[32px] leading-[25px] md:leading-[35px] ${schnyderMlightFont.className} !font-[0] `}
                     />
                  </ViewportMotionDivArr>
               ))}
         </Carousel>
      </div>
   );
};

export default CarouseSection;
