import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProductInCart from '../productInCart/ProductInCart';

import { CartType, ProductType } from '@/types';

const CarouselCart = ({
   carts,
   products,
}: {
   carts?: CartType[];
   products?: ProductType[];
}) => {
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
            carts!.length > 1 || products!.length > 1 ? (
               <CustomDot onClick={() => {}} active={false} />
            ) : (
               <></>
            )
         }
      >
         {carts &&
            carts.map((cart) => (
               <ProductInCart
                  key={cart.id}
                  image={cart.image}
                  title={cart.title}
                  reviews={cart.reviews}
                  soldOut={cart.soldOut}
                  stars
                  readme="More details"
                  button
                  buttonPrice={cart.price}
               />
            ))}

         {products &&
            products.map((product) => (
               <ProductInCart
                  key={product.id}
                  image={product.images[0]}
                  title={product.title}
                  reviews={product.reviews}
                  soldOut={product.soldOut}
                  stars
                  readme="More details"
                  button
                  buttonPrice={product.price}
               />
            ))}
      </Carousel>
   );
};

export default CarouselCart;
