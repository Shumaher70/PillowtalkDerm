import React from 'react';
import { MotionDiv } from './MotionDiv';

const ViewportMotionDivArr = ({ children }: { children: React.ReactNode }) => {
   const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
      },
   };

   return (
      <MotionDiv className="h-full" variants={item} viewport={{ once: true }}>
         {children}
      </MotionDiv>
   );
};

export default ViewportMotionDivArr;
