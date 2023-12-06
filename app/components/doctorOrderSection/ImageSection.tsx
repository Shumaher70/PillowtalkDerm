'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ImageSection = () => {
   const [imageSize, setImageSize] = useState(false);

   useEffect(() => {
      const imageHandler = () => {
         if (window.innerWidth > 768) {
            setImageSize(true);
         } else {
            setImageSize(false);
         }
      };
      imageHandler();
      window.addEventListener('resize', imageHandler);

      return () => window.removeEventListener('resize', imageHandler);
   });

   const image = imageSize
      ? '/imagesHomePage/imagesDoctorOrderSection/banner_image_shereene.webp'
      : '/imagesHomePage/imagesDoctorOrderSection/Banner_Image_Mobile_Shereene_small.webp';

   return (
      <Image
         src={image}
         alt="home"
         width={0}
         height={0}
         sizes="100vw"
         className="absolute w-full object-cover h-full right-0 top-0 z-[-1]
   lazy"
      />
   );
};

export default ImageSection;
