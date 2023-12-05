const TitleCard = ({ title }: { title: string }) => {
   return (
      <p
         className="
            text-black 
            md:text-[16px]
            text-[13px]
            font-[500] 
            font-sans
            capitalize 
            leading-[16px]	
          "
      >
         {title}
      </p>
   );
};

export default TitleCard;
