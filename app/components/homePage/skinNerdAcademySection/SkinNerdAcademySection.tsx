import { schnyderMlightFont } from '@/app/layout';
import ViewportMotionDiv from '@/motion/ViewPortMotionDiv';
import React from 'react';
import Button from '../../button/Button';

const SkinNerdAcademySection = () => {
   return (
      <section className="w-full h-full bg-secondary">
         <ViewportMotionDiv>
            <div className="w-full flex items-center gap-5 justify-between">
               <h2 className={`text-section ${schnyderMlightFont.className}`}>
                  Skin Nerd Academy
               </h2>

               <Button
                  className="uppercase bg-purple-700 text-white"
                  text={'learn more'}
                  size={'lg'}
                  load={false}
               />
            </div>
         </ViewportMotionDiv>
      </section>
   );
};

export default SkinNerdAcademySection;
