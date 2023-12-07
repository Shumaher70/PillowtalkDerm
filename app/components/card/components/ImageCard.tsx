import Image from 'next/image';

const ImageCard = ({
   image,
   title,
   imageAnimated,
   size = 100,
}: {
   image: string;
   title: string;
   imageAnimated?: boolean;
   size?: number;
}) => {
   return (
      <div className={`relative pt-[${size}%] overflow-hidden`}>
         <Image
            src={image}
            alt={title}
            className={`w-full h-full object-cover top-0 absolute transition-all ${
               imageAnimated && 'hover:-translate-y-[20px]'
            }`}
            sizes="100vw"
            width={0}
            height={0}
            loading="lazy"
            draggable="false"
         />
      </div>
   );
};

export default ImageCard;
