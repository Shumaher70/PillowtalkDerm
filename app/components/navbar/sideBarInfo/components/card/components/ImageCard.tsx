import Image from 'next/image';

const ImageCard = ({ image, title }: { image: string; title: string }) => {
   return (
      <div className="relative pt-[100%] rounded-[10px] overflow-hidden">
         <Image
            src={image}
            alt="pillow"
            className="w-full h-full object-cover top-0 absolute"
            sizes="100vw"
            width={0}
            height={0}
            loading="lazy"
         />
      </div>
   );
};

export default ImageCard;
