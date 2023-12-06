import { useEffect, useRef, useState } from 'react';
import {
   motion,
   useScroll,
   useSpring,
   useTransform,
   useMotionValue,
   useVelocity,
   useAnimationFrame,
   wrap,
} from 'framer-motion';

interface ParallaxProps {
   children: React.ReactNode;
   baseVelocity: number;
}

const RunningLine = ({ children, baseVelocity = 100 }: ParallaxProps) => {
   const [widthSmScreen, setWidthSmScreen] = useState(0);

   useEffect(() => {
      const screenHandler = () => {
         if (window.innerWidth > 768) {
            setWidthSmScreen(1100);
         } else {
            setWidthSmScreen(650);
         }
      };
      screenHandler();
      window.addEventListener('resize', screenHandler);
      return () => window.removeEventListener('resize', screenHandler);
   }, []);

   const baseX = useMotionValue(0);
   const { scrollY } = useScroll();
   const scrollVelocity = useVelocity(scrollY);
   const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
   });
   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
   });

   const x = useTransform(baseX, (v) => `${wrap(-widthSmScreen, 0, v)}px`);

   const directionFactor = useRef<number>(1);
   useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
         directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
         directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
   });

   return (
      <div className="overflow-hidden w-full running-py">
         <motion.div className="flex w-full h-full" style={{ x }}>
            {children}
            {children}
         </motion.div>
      </div>
   );
};

export default RunningLine;
