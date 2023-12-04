'use client';

import { sidebarCart } from '@/redux/features/sidebarSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface SidebarProps {
   triggerSidebar: boolean;
   children: React.ReactNode;
   left?: boolean;
   className?: string;
}

const Sidebar = ({
   triggerSidebar,
   children,
   left,
   className,
}: SidebarProps) => {
   const sideBar = {
      open: left ? { x: '-100%' } : { x: '100%' },
      closed: { x: '0' },
   };

   const sidebarSlice = useAppSelector((state) => state.sidebarReducer);
   const dispatch = useAppDispatch();

   return (
      <LazyMotion features={domAnimation}>
         <m.div
            animate={triggerSidebar ? 'open' : 'closed'}
            transition={{ duration: 0.5 }}
            variants={sideBar}
            className={`
            w-full 
            h-full 
            overflow-hidden
            flex
            flex-col
            bg-accent 
            z-[10]
            fixed
            top-0
            ${left ? 'left-[100%]' : 'right-[100%]'}
            lg:hidden
            ${className}
         `}
         >
            {children}
         </m.div>
         {sidebarSlice.sidebarCart && (
            <div
               className="w-full h-full top-0 right-0 fixed z-[9] bg-black/20 cursor-pointer"
               onClick={() => dispatch(sidebarCart(false))}
            />
         )}
      </LazyMotion>
   );
};

export default Sidebar;
