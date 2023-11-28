'use client';

import Home from './components/Home';
import About from './components/About';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { slideShop, slideSkinNerdAcademy } from '@/redux/features/sidebarSlice';

interface InfoProps {
   className?: string;
}

const Info = ({ className }: InfoProps) => {
   const dispatch = useAppDispatch();
   const sliderSlice = useAppSelector((state) => state.sidebarReducer);

   return (
      <div className={`flex gap-3 ${className}`}>
         <Home href="" />
         <p
            className={`
           capitalize 
           text-p 
           cursor-pointer 
           whitespace-nowrap 
           px-[10px] 
           py-[5px]
           rounded-[20px]
           ${sliderSlice.slideShop && 'bg-white'}
         `}
            onMouseEnter={() => {
               dispatch(slideShop(true));
               dispatch(slideSkinNerdAcademy(false));
            }}
         >
            shop
         </p>

         <p
            className={`
               capitalize 
               text-p 
               cursor-pointer 
               whitespace-nowrap 
               px-[10px] 
               py-[5px]
               rounded-[20px]
               ${sliderSlice.slideSkinNerdAcademy && 'bg-white'}
            `}
            onMouseEnter={() => {
               dispatch(slideSkinNerdAcademy(true));
               dispatch(slideShop(false));
            }}
         >
            SkinNerdAcademy
         </p>
         <About />
      </div>
   );
};

export default Info;
