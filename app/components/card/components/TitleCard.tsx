const TitleCard = ({ title }: { title: string }) => {
   return (
      <p
         className="
            text-black 
            text-p 
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
