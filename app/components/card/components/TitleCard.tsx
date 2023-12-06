const TitleCard = ({
   title,
   className,
}: {
   title: string;
   className?: string;
}) => {
   return (
      <p
         className={`
         text-black 
            md:text-[16px]
            text-[13px]
            font-[500] 
            font-sans
            leading-[16px]
            ${className}
         `}
      >
         {title}
      </p>
   );
};

export default TitleCard;
