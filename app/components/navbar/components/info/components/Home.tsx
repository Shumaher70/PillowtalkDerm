import {
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from '@/redux/features/sidebarSlice';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link';

interface HomeProps {
   className?: string;
}

const Home = ({ className }: HomeProps) => {
   const dispatch = useAppDispatch();
   return (
      <Link
         onMouseEnter={() => {
            dispatch(slideShop(false));
            dispatch(slideSkinNerdAcademy(false));
            dispatch(slideSearch(false));
         }}
         href="/"
         className={`
            capitalize 
            text-p 
            cursor-pointer 
            whitespace-nowrap 
            px-[10px] 
            py-[5px]
            rounded-[20px]
            hover:bg-white
            ${className}
            `}
      >
         Home
      </Link>
   );
};

export default Home;
