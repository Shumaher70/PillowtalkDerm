import { AiOutlineUser } from 'react-icons/ai';

import logo from '../../../public/logo.svg';
import Image from 'next/image';
import Burger from './components/Burger';
import Search from './components/Search';
import Cart from './components/Cart';
import Info from './components/Info';

const Navbar = () => {
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
         top-0"
      >
         <nav className="flex flex-between w-full">
            <div className="flex justify-start gap-3 w-full">
               <Info className="hidden lg:flex" />
               <Burger className="lg:hidden" />
               <Search className="block lg:hidden" />
            </div>

            <div className="flex flex-center w-full">
               <Image
                  width={0}
                  height={0}
                  src={logo}
                  alt="logo"
                  className="lg:w-[200px] w-[135px]"
               />
            </div>

            <div className="flex justify-end items-center gap-3 w-full">
               <Search className="hidden lg:block" />
               <AiOutlineUser className="text-[30px] " />
               <Cart />
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
