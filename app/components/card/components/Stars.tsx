import { AiFillStar } from 'react-icons/ai';

interface StarsProps {
   stars: string[];
}

const Stars = ({ stars }: StarsProps) => {
   return (
      <div className="flex gap-1">
         {stars &&
            stars.map((_, index) => (
               <AiFillStar key={index} className="text-pink-700 w-4 h-4" />
            ))}
      </div>
   );
};

export default Stars;
