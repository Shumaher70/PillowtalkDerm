import { AiOutlineUser } from 'react-icons/ai';

import logo from '../../../public/logo.svg';
import Image from 'next/image';
import Burger from './components/Burger';
import Search from './components/Search';
import Cart from './components/Cart';

const Navbar = () => {
   return (
      <header className="lg:h-[88px] md:px-[40px] lg:px-[80px] px-[16px] py-[8px] flex flex-center rounded-b-[10px] lg:rounded-b-[30px] lg:bg-transparent bg-accent">
         <nav className="flex flex-between w-full">
            <div className="flex flex-center gap-3">
               <Burger />
               <Search className="block lg:hidden" />
            </div>
            <div className="flex flex-center">
               <Image
                  width={0}
                  height={0}
                  src={logo}
                  alt="logo"
                  className="lg:w-[200px] w-[135px]"
               />
            </div>
            <div className="flex flex-center gap-3">
               <Search className="hidden lg:block" />
               <AiOutlineUser className="text-[30px] " />
               <Cart />
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
