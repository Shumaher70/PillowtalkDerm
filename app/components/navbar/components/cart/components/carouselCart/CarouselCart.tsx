import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProductInCart from '../productInCart/ProductInCart';

import { CartType, ProductType } from '@/types';
import bestSellers from '@/utils/bestSellers';
import pairItWith from '@/utils/pairItWith';

const CarouselCart = ({
   carts,
   products,
}: {
   carts: CartType[];
   products: ProductType[];
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
               active
                  ? 'bg-gradient-to-t from-pink-400 to-pink-600'
                  : 'inactive'
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
            pairItWith(carts, products).length > 1 ||
            pairItWith(carts, products).length === 0 ? (
               <CustomDot onClick={() => {}} active={false} />
            ) : (
               <></>
            )
         }
      >
         {pairItWith(carts, products).length > 0
            ? pairItWith(carts, products).map((cart) => (
                 <ProductInCart
                    key={cart.id}
                    image={cart.images[0]}
                    title={cart.title}
                    reviews={cart.reviews}
                    soldOut={cart.soldOut}
                    stars
                    readme="More details"
                    button
                    buttonPrice={cart.price}
                    pair={cart.pair}
                    sold={cart.sold}
                    id={cart.id}
                 />
              ))
            : bestSellers(products).map((product) => (
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
                    pair={product.pair}
                    sold={product.sold}
                    id={product.id}
                 />
              ))}
      </Carousel>
   );
};

export default CarouselCart;
