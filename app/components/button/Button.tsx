import { spin } from './Spin';

interface ButtonProps {
   text: string;
   uppercase?: boolean;
   bg?: boolean;
   size: 'sm' | 'lg';
   onClick?: (e: React.MouseEvent) => void;
   className?: string;
   soldOut?: boolean;
   children?: React.ReactNode;
   load: boolean;
}

const Button = ({
   text = 'button',
   size = 'sm',
   className,
   onClick,
   soldOut,
   load,
}: ButtonProps) => {
   return (
      <button
         onClick={onClick}
         disabled={soldOut || load ? true : false}
         className={`
         ${size === 'lg' && 'lg:px-[24px] lg:py-[12px] px-[24px] py-[10px]'}
         ${size === 'sm' && 'px-[16px] py-[8px]'}
         relative
         p-[10px]
         rounded-full
         cursor-pointer
         w-max
         h-max
         flex-center
         text-white
         ${
            load &&
            '!cursor-not-allowed !bg-gradient-to-r from-pink-400 to-pink-600 '
         }
         ${soldOut ? '!cursor-not-allowed !bg-gray-300' : ''}
         ${className}
         `}
      >
         {soldOut ? (
            'sold out'
         ) : (
            <>
               <div
                  className={`absolute left-2/4 top-2/4 -translate-x-1/4 -translate-y-2/4 opacity-0 ${
                     load && 'opacity-100'
                  }`}
               >
                  {spin}
               </div>
               <span
                  className={`text-[14px] lg:text-[16px] opacity-100 ${
                     load && 'opacity-[0]'
                  }`}
               >
                  {text}
               </span>
            </>
         )}
      </button>
   );
};

export default Button;
