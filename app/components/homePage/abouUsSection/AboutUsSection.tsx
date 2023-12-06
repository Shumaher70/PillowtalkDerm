import ViewportMotionSection from '@/motion/ViewportMotionSection';
import Button from '../../button/Button';
import { schnyderMlightFont } from '@/app/layout';

const AboutUsSection = () => {
   return (
      <ViewportMotionSection>
         <div className="h-[80%] container-px py-[16px] my-[16px] md:my-0 ">
            <div className="flex flex-col gap-10 w-full h-full p-[16px] md:p-[24px] bg-accent container-rounded">
               <h1
                  className={`text-[40px] md:text-[50px] md:leading-[60px] leading-[45px] ${schnyderMlightFont.className}`}
               >
                  PillowtalkDerm is on a mission to stop the B.S. and
                  misinformation surrounding skincare. Our science-backed
                  solutions put formulation first and are created by
                  board-certified dermatologist Dr. Shereene Idriss.
               </h1>

               <div>
                  <Button
                     className="uppercase bg-purple-700 "
                     text={'about us'}
                     size={'lg'}
                     load={false}
                  />
               </div>
            </div>
         </div>
      </ViewportMotionSection>
   );
};

export default AboutUsSection;
