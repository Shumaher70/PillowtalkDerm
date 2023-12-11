import { ProductType } from '@/types';
import CarouselProduct from './components/carousel/CarouselProduct';

const Card = ({ products }: { products: ProductType }) => {
   return (
      <div className="container-px pt-[80px] md:pt-[110px] pb-[16px] flex flex-col gap-2">
         <CarouselProduct images={products.images} video={products.video} />
      </div>
   );
};

export default Card;
