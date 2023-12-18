interface RatingProps {
   rating: number
}

const Rating = ({ rating }: RatingProps) => {
   return (
      <p className="text-[12px] text-[#6A1BA6] md:text-[16px] ">({rating})</p>
   )
}

export default Rating
