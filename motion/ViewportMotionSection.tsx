import React from 'react';
import { MotionSection } from './MotionSection';

const ViewportMotion = ({ children }: { children: React.ReactNode }) => {
   return (
      <MotionSection
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.3 }}
      >
         {children}
      </MotionSection>
   );
};

export default ViewportMotion;
