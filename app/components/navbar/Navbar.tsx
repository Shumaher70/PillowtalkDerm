import Burger from './components/burger/Burger';
import Search from './components/search/Search';
import Cart from './components/cart/Cart';
import Info from './components/Info';
import Login from './components/Login';
import Logo from './components/Logo';
import { prisma } from '@/lib/prisma';

const Navbar = async () => {
   const products = await prisma.product.findMany({
      select: {
         id: true,
         images: true,
         title: true,
         price: true,
         reviews: true,
         soldOut: true,
      },
   });

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
               <Burger className="lg:hidden" products={products} />
               <Search className="block lg:hidden" products={products} />
            </div>

            <div className="flex flex-center w-full">
               <Logo />
            </div>

            <div className="flex justify-end items-center gap-3 w-full">
               <Search className="hidden lg:block" products={products} />
               <Login />
               <Cart data={['1', '1']} />
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
