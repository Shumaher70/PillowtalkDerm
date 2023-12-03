'use client';
import { useAppSelector } from '@/redux/hooks';
import React, { useEffect, useState } from 'react';

const Overflow = () => {
   const [overflow, setOverflow] = useState(true);
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer);

   useEffect(() => {
      if (typeof document !== 'undefined')
         if (
            sidebarSlice.sidebarBurger ||
            sidebarSlice.sidebarCart ||
            sidebarSlice.sidebarSearch ||
            sidebarSlice.slideSearch ||
            sidebarSlice.slideShop ||
            sidebarSlice.slideSkinNerdAcademy
         ) {
            setOverflow(false);
         }
      document.body.style.overflow = overflow ? 'visible' : 'hidden';
   }, [
      overflow,
      sidebarSlice.sidebarBurger,
      sidebarSlice.sidebarCart,
      sidebarSlice.sidebarSearch,
      sidebarSlice.slideSearch,
      sidebarSlice.slideShop,
      sidebarSlice.slideSkinNerdAcademy,
   ]);

   return <></>;
};

export default Overflow;
