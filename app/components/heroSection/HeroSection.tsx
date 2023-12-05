import { schnyderMlightFont } from '@/app/layout';
import Button from '../button/Button';
import Image from 'next/image';
import ViewportMotion from '@/motion/ViewportMotion';

const HeroSection = () => {
   return (
      <ViewportMotion>
         <div
            className={`w-full h-[80vh] container-rounded-b container-p relative overflow-hidden`}
         >
            <div className="w-full h-full flex flex-col gap-5 justify-end md:items-start items-center md:pt-[250px]">
               <h1 className={`text-hero ${schnyderMlightFont.className}`}>
                  The Depuffer
               </h1>

               <h3 className="">The Award-Winning Depuffer is Back in Stock</h3>

               <Button
                  text={'shop now'}
                  className="bg-gradient-to-r from-pink-400 to-pink-600 uppercase  w-max"
                  size={'lg'}
                  load={false}
               />
            </div>

            <Image
               src="/imagesHome/heroSection.webp"
               alt="home"
               width={0}
               height={0}
               sizes="100vw"
               className="absolute w-full object-cover h-full right-0 top-0 z-[-1]
               lazy"
            />
         </div>
      </ViewportMotion>
   );
};

export default HeroSection;