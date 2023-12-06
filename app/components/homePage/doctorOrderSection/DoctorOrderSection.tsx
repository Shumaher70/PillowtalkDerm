import ViewportMotionSection from '@/motion/ViewportMotionSection';
import React from 'react';
import Button from '../../button/Button';
import { schnyderMlightFont } from '@/app/layout';
import Image from 'next/image';
import ImageSection from './ImageSection';

const DoctorOrderSection = () => {
   return (
      <ViewportMotionSection>
         <div
            className={`w-full h-[80vh] container-rounded-b container-p relative overflow-hidden`}
         >
            <div className="w-full h-full flex flex-col text-center md:text-start justify-center items-center md:items-start md:justify-between gap-5">
               <div>
                  <h1
                     className={`text-hero text-white pb-2 leading-[1] ${schnyderMlightFont.className}`}
                  >
                     {`Doctor's Orders`}
                  </h1>

                  <h3 className="text-white">{`Dr. Idriss' Even Skin Routine`}</h3>
               </div>

               <Button
                  text={'shop major fade'}
                  className="bg-gradient-to-r from-pink-400 to-pink-600 uppercase  w-max"
                  size={'lg'}
                  load={false}
               />
            </div>

            <ImageSection />
         </div>
      </ViewportMotionSection>
   );
};

export default DoctorOrderSection;
