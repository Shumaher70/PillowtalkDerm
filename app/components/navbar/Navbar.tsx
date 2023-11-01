'use client';
import { useState } from 'react';

import Burger from './components/Burger';
import Search from './components/Search';
import Cart from './components/Cart';
import Info from './components/Info';
import Login from './components/Login';
import Logo from './components/Logo';
import SideBarInfo from './sideBarInfo/SideBarInfo';

const Navbar = () => {
   const [triggerSideBar, setTriggerSideBar] = useState(false);
   const triggerSideBarHandler = () => {
      setTriggerSideBar(false);
   };

   return (
      <header
         className="
         w-full
         md:h-[88px] 
         md:px-[40px]  
         lg:px-[80px] 
         px-[16px] 
         py-[8px] 
         flex 
         flex-center 
         rounded-b-[10px] 
         lg:rounded-b-[30px] 
         bg-accent
         fixed 
         top-0
         "
      >
         <nav className="flex flex-between w-full">
            <SideBarInfo
               triggerSideBar={triggerSideBar}
               triggerSideBarHandler={triggerSideBarHandler}
            />

            <div className="flex justify-start gap-3 w-full">
               <Info className="hidden lg:flex" />
               <Burger
                  className="lg:hidden"
                  setTriggerSideBar={setTriggerSideBar}
               />
               <Search className="block lg:hidden" />
            </div>

            <div className="flex flex-center w-full">
               <Logo />
            </div>

            <div className="flex justify-end items-center gap-3 w-full">
               <Search className="hidden lg:block" />
               <Login />
               <Cart />
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
