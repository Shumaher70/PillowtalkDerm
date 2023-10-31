import { RxHamburgerMenu } from 'react-icons/rx';

const Burger = ({ className }: { className?: string }) => {
   return (
      <>
         <RxHamburgerMenu
            className={`text-[30px] cursor-pointer ${className}`}
         />
      </>
   );
};

export default Burger;
