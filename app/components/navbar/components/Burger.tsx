'use client';

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import SideBarInfo from '../sideBarInfo/SideBarInfo';

interface BurgerProps {
   className?: string;
}

const Burger = ({ className }: BurgerProps) => {
   const [triggerSideBar, setTriggerSideBar] = useState(false);
   const triggerSideBarHandler = () =>
      setTriggerSideBar((previous) => !previous);

   return (
      <div>
         <SideBarInfo
            triggerSideBarHandler={triggerSideBarHandler}
            triggerSideBar={triggerSideBar}
         />
         <div onClick={triggerSideBarHandler}>
            <RxHamburgerMenu
               className={`text-[30px] cursor-pointer ${className}`}
            />
         </div>
      </div>
   );
};

export default Burger;
