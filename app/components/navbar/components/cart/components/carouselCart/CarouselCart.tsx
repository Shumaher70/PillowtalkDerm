import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CartType, ProductType } from '@/types';
import bestSellers from '@/utils/bestSellers';
import pairItWith from '@/utils/pairItWith';
import CartInCarousel from './CartInCarousel';

interface CarouselCartProps {
   carts: CartType[];
   products: ProductType[];
}

const CarouselCart = ({ carts, products }: CarouselCartProps) => {
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
            } w-[8px] h-[8px] border-1 border-purple-300 rounded-full m-1 mr-3`}
            onClick={() => onClick()}
         ></button>
      );
   };

   return (
      <>
         {pairItWith(carts, products).length > 0 && (
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
               dotListClass="block w-max h-[15px] absolute top-0 !left-[calc(100%-16px)]  -translate-x-full"
               itemClass="p-2"
               className="overflow-visible select-none !static"
               customDot={
                  pairItWith(carts, products).length > 1 ||
                  pairItWith(carts, products).length === 0 ? (
                     <CustomDot onClick={() => {}} active={false} />
                  ) : (
                     <></>
                  )
               }
            >
               {pairItWith(carts, products).length > 0 &&
                  pairItWith(carts, products).map((cart) => (
                     <CartInCarousel
                        key={cart.id}
                        image={cart.images[0]}
                        title={cart.title}
                        reviews={cart.reviews}
                        soldOut={cart.soldOut}
                        stars
                        readme="More details"
                        button
                        price={cart.price}
                        pair={cart.pair}
                        sold={cart.sold}
                        id={cart.id}
                     />
                  ))}
            </Carousel>
         )}

         {pairItWith(carts, products).length === 0 && (
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
               dotListClass="block w-max h-[15px] absolute top-0 !left-[calc(100%-16px)]  -translate-x-full"
               itemClass="p-2"
               className="overflow-visible select-none !static"
               customDot={
                  pairItWith(carts, products).length > 1 ||
                  pairItWith(carts, products).length === 0 ? (
                     <CustomDot onClick={() => {}} active={false} />
                  ) : (
                     <></>
                  )
               }
            >
               {bestSellers(products).map((product) => (
                  <CartInCarousel
                     key={product.id}
                     image={product.images[0]}
                     title={product.title}
                     reviews={product.reviews}
                     soldOut={product.soldOut}
                     stars
                     readme="More details"
                     button
                     price={product.price}
                     pair={product.pair}
                     sold={product.sold}
                     id={product.id}
                  />
               ))}
            </Carousel>
         )}
      </>
   );
};

export default CarouselCart;
