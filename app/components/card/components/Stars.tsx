import { IoIosStarHalf, IoIosStarOutline, IoMdStar } from 'react-icons/io';

interface StarsProps {
   stars: number;
}

const Stars = ({ stars }: StarsProps) => {
   const starts = [];
   for (let i = 0; i < 5; i++) {
      const difference = parseFloat((stars - i).toFixed(1));
      if (difference >= 1)
         starts.push(<IoMdStar className="text-pink-700 w-5 h-5" />);
      else if (difference < 1 && difference > 0) {
         if (difference <= 0.2)
            starts.push(<IoIosStarOutline className="text-pink-700 w-5 h-5" />);
         else if (difference > 0.2 && difference <= 0.6)
            starts.push(<IoIosStarHalf className="text-pink-700 w-5 h-5" />);
         else starts.push(<IoMdStar className="text-pink-700 w-5 h-5" />);
      } else
         starts.push(<IoIosStarOutline className="text-pink-700 w-5 h-5" />);
   }

   return (
      <div className="flex gap-1">
         {starts.map((star, index) => {
            return star;
         })}
      </div>
   );
};

export default Stars;
