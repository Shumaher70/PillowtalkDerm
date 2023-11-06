import { LazyMotion, domAnimation, m } from 'framer-motion';

interface SidebarProps {
   triggerSidebar: boolean;
   children: React.ReactNode;
}

const sideBar = {
   open: { x: '100%' },
   closed: { x: '0' },
};

const Sidebar = ({ triggerSidebar, children }: SidebarProps) => {
   return (
      <LazyMotion features={domAnimation}>
         <m.div
            animate={triggerSidebar ? 'open' : 'closed'}
            transition={{ duration: 0.5 }}
            variants={sideBar}
            className="
            w-full 
            h-full 
            overflow-hidden
            flex
            flex-col
            bg-accent 
            z-10
            fixed
            top-0
            right-[100%]
            lg:hidden
         "
         >
            {children}
         </m.div>
      </LazyMotion>
   );
};

export default Sidebar;
