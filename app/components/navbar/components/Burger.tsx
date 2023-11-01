import { Dispatch, SetStateAction } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface BurgerProps {
   className?: string;
   setTriggerSideBar: Dispatch<SetStateAction<boolean>>;
}

const Burger = ({ className, setTriggerSideBar }: BurgerProps) => {
   return (
      <div onClick={() => setTriggerSideBar(true)}>
         <RxHamburgerMenu
            className={`text-[30px] cursor-pointer ${className}`}
         />
      </div>
   );
};

export default Burger;
