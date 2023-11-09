import { Children } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProductInCart from '../productInCart/ProductInCart';

const CarouselCart = ({ data }: { data: string[] }) => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 0 },
         items: 1.07,
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
               active ? 'bg-gradient' : 'inactive'
            } w-[8px] h-[8px] border-1 border-[#F32E79] rounded-full m-1`}
            onClick={() => onClick()}
         ></button>
      );
   };

   return (
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
         dotListClass="block w-max absolute -top-[19px] left-[100%] -translate-x-full"
         itemClass="p-2"
         className="overflow-visible"
         customDot={
            data.length > 1 ? (
               <CustomDot onClick={() => {}} active={false} />
            ) : (
               <></>
            )
         }
      >
         {data.map((item, index) => (
            <ProductInCart
               key={index}
               image="https://pillowtalkderm.com/cdn/shop/files/FlashMask.png?v=1689700581&width=352"
               title="Major Fade Active Seal Moisturizer"
               stars={data}
               readme="More details"
               button
            />
         ))}
      </Carousel>
   );
};

export default CarouselCart;
