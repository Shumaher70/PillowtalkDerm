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

   return (
      <Carousel
         swipeable={true}
         draggable={true}
         showDots={true}
         responsive={responsive}
         ssr={true}
         infinite={false}
         keyBoardControl={true}
         transitionDuration={10}
         containerClass="carousel-container"
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
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
