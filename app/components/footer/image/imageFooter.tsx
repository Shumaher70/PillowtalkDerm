import Image from 'next/image';

const imageFooter = () => {
   return (
      <Image
         src="/imagesFooter/footer.webp"
         alt="footer"
         className="w-full h-full object-cover"
         sizes="50vw"
         width={0}
         height={0}
         loading="lazy"
         draggable="false"
      />
   );
};

export default imageFooter;
