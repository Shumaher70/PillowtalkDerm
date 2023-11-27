import Home from './components/Home';
import SkinNerdAcademy from './components/SkinNerdAcademy';
import About from './components/About';
import Shop from './components/Shop';
import { BlogType, ProductType } from '@/types';

interface InfoProps {
   className?: string;
}

const Info = ({ className }: InfoProps) => {
   return (
      <div className={`flex gap-3 ${className}`}>
         <Home href="" />
         <p
            className={`
           capitalize 
           text-p 
           cursor-pointer 
           whitespace-nowrap 
           px-[10px] 
           py-[5px]
           rounded-[20px]
           hover:bg-white
         `}
         >
            shop
         </p>

         <p
            className={`
               capitalize 
               text-p 
               cursor-pointer 
               whitespace-nowrap 
               px-[10px] 
               py-[5px]
               rounded-[20px]
               hover:bg-white
            `}
         >
            SkinNerdAcademy
         </p>
         <About />
      </div>
   );
};

export default Info;
