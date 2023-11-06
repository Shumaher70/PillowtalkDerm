import Burger from './components/burger/Burger';
import Search from './components/search/Search';
import Cart from './components/Cart';
import Info from './components/Info';
import Login from './components/Login';
import Logo from './components/Logo';

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
         top-0
         "
      >
         <nav className="flex flex-between w-full">
            <div className="flex justify-start gap-3 w-full">
               <Info className="hidden lg:flex" />
               <Burger className="lg:hidden" />
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
