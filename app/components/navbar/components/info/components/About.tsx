import {
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from '@/redux/features/sidebarSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';

const About = () => {
   const dispatch = useAppDispatch();
   return (
      <p
         onMouseEnter={() => {
            dispatch(slideShop(false));
            dispatch(slideSkinNerdAcademy(false));
            dispatch(slideSearch(false));
         }}
         className="
           capitalize 
           text-p 
           cursor-pointer 
           whitespace-nowrap 
           px-[10px] 
           py-[5px]
           rounded-[20px]
           hover:bg-white
         "
      >
         about
      </p>
   );
};

export default About;
