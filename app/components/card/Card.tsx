import Link from 'next/link';
import ImageCard from './components/ImageCard';
import TitleCard from './components/TitleCard';
import ReadMe from './components/ReadMe';
import Stars from './components/Stars';
import Rating from './components/Rating';
import Button from '@/app/components/Button';
import AwardWining from './components/AwardWinning';

interface CardProps {
   href: string;
   extra?: boolean;
   title: string;
   image: string;
   stars?: string[];
   rating?: number;
   btn?: boolean;
   win?: boolean;
   price?: number;
}

const Card = ({
   href,
   stars,
   rating,
   btn,
   win,
   extra,
   title,
   image,
   price = 0,
}: CardProps) => {
   return (
      <Link href={href} className="relative bg-white rounded-[8px] m-2">
         <div className="m-[10px] rounded-[5px]">
            <ImageCard image={image} title={title} />

            {stars && (
               <div className="flex flex-center gap-1">
                  {Array.from({ length: 5 }).map(() => (
                     <>{<Stars />}</>
                  ))}
               </div>
            )}

            {rating && (
               <div className="flex flex-center">
                  <Rating rating={rating} />
               </div>
            )}

            <div className="pt-[8px] text-center">
               <TitleCard title={title} />
            </div>

            {extra && (
               <div className="text-center pt-[8px]">
                  <ReadMe extra={extra} />
               </div>
            )}

            {btn && (
               <div className="flex w-full flex-center pt-[8px]">
                  <Button
                     text={`add - $${price}`}
                     size="sm"
                     uppercase
                     className="bg-purple !w-full"
                  />
               </div>
            )}
         </div>

         {win && (
            <div className="absolute top-3 left-3">
               <AwardWining />
            </div>
         )}
      </Link>
   );
};

export default Card;
