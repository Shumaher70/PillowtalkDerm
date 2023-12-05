interface RatingProps {
   rating: number;
}

const Rating = ({ rating }: RatingProps) => {
   return (
      <p className="md:text-[16px] text-[12px] text-[#6A1BA6] ">({rating})</p>
   );
};

export default Rating;
