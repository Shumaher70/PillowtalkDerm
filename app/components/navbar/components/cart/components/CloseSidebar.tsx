import { sidebarCart } from '@/redux/features/cartSidebarSlice';
import { useAppDispatch } from '@/redux/hooks';
import { AiOutlineClose } from 'react-icons/ai';

const CloseSidebar = () => {
   const dispatch = useAppDispatch();

   return (
      <AiOutlineClose
         className="text-black text-[15px] cursor-pointer"
         onClick={() => dispatch(sidebarCart(false))}
      />
   );
};

export default CloseSidebar;
