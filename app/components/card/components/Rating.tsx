interface RatingProps {
   rating: number;
}

const Rating = ({ rating }: RatingProps) => {
   return <p className="text-p text-[#6A1BA6] ">({rating})</p>;
};

export default Rating;
