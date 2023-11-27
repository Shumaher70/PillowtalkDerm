'use client';

import { useQueries } from '@tanstack/react-query';

import Burger from './components/burger/Burger';
import Search from './components/search/Search';
import Cart from './components/cart/Cart';
import Info from './components/info/Info';
import Login from './components/Login';
import Logo from './components/Logo';

const getProduct = async () => {
   const data = await fetch('http://localhost:3000/api/products');
   const product = await data.json();
   return product;
};

const getBlog = async () => {
   const data = await fetch('http://localhost:3000/api/blog');
   const blog = await data.json();
   return blog;
};

const Navbar = () => {
   const [products, blogs] = useQueries({
      queries: [
         { queryKey: ['product'], queryFn: getProduct },
         {
            queryKey: ['blog'],
            queryFn: getBlog,
         },
      ],
   });

   return (
      <>
         <header
            className="
            w-full
            md:px-[40px]  
            lg:px-[80px] 
            px-[16px] 
            py-[8px] 
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
                  <Burger
                     className="lg:hidden"
                     products={products.data}
                     blogs={blogs.data}
                  />
                  <Search
                     className="block lg:hidden"
                     products={products.data}
                     blogs={blogs.data}
                  />
               </div>

               <div className="flex flex-center w-full">
                  <Logo />
               </div>

               <div className="flex justify-end items-center gap-3 w-full">
                  <Search
                     className="hidden lg:block"
                     products={products.data}
                     blogs={blogs.data}
                  />
                  <Login />
                  <Cart />
               </div>
            </nav>

            <div>
               {/* <Shop products={products} /> */}
               {/* <SkinNerdAcademy blogs={blogs} /> */}
            </div>
         </header>
      </>
   );
};

export default Navbar;
