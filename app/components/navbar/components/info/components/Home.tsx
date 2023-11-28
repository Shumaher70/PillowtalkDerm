import { slideShop, slideSkinNerdAcademy } from '@/redux/features/sidebarSlice';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link';

interface HomeProps {
   href: string;
   className?: string;
}

const Home = ({ href, className }: HomeProps) => {
   const dispatch = useAppDispatch();
   return (
      <Link
         onMouseEnter={() => {
            dispatch(slideShop(false));
            dispatch(slideSkinNerdAcademy(false));
         }}
         href={href}
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
