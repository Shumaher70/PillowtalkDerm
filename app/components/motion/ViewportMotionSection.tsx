import React from 'react';
import { MotionSection } from './MotionSection';

const ViewportMotionSection = ({ children }: { children: React.ReactNode }) => {
   const container = {
      hidden: { opacity: 0, y: 100 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
         },
      },
   };

   return (
      <MotionSection
         variants={container}
         initial={'hidden'}
         whileInView={'visible'}
         viewport={{ once: true }}
      >
         {children}
      </MotionSection>
   );
};

export default ViewportMotionSection;
