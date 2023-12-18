const TitleCard = ({
   title,
   className,
}: {
   title: string
   className?: string
}) => {
   return (
      <p
         className={`
         font-sans 
            text-[13px]
            font-[500]
            leading-[16px] 
            text-black
            md:text-[16px]
            ${className}
         `}
      >
         {title}
      </p>
   )
}

export default TitleCard
