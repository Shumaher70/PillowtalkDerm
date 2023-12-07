import CarouseSection from './CarouseSection';
import Button from '../../button/Button';
import { schnyderMlightFont } from '@/app/layout';
import ViewportMotionDiv from '@/motion/ViewPortMotionDiv';

const GetNerdyWithUsSection = () => {
   return (
      <section className="w-full max-h-full bg-accent">
         <ViewportMotionDiv>
            <div className="relative -bottom-[20px]">
               <div className="w-full container-px flex gap-5 flex-col justify-center items-center lg:flex-row lg:justify-between p-[16px]">
                  <h2
                     className={`text-section leading-[50px] text-center lg:text-start ${schnyderMlightFont.className}`}
                  >
                     Get Nerdy with Us
                  </h2>

                  <div className="flex flex-center gap-2 md:gap-5">
                     <Button
                        className="uppercase bg-purple-700 text-white w-full md:w-auto whitespace-nowrap"
                        text={'tik tok'}
                        size={'lg'}
                        load={false}
                     />
                     <Button
                        className="uppercase bg-purple-700 text-white w-full md:w-auto whitespace-nowrap"
                        text={'instagram'}
                        size={'lg'}
                        load={false}
                     />
                     <Button
                        className="uppercase bg-purple-700 text-white w-full md:w-auto whitespace-nowrap"
                        text={'youtube'}
                        size={'lg'}
                        load={false}
                     />
                  </div>
               </div>
               <CarouseSection />
            </div>
         </ViewportMotionDiv>
      </section>
   );
};

export default GetNerdyWithUsSection;
