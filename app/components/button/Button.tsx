import { spin } from './spin';

interface ButtonProps {
   text: string;
   size: 'sm' | 'lg';
   onClick?: (e: React.MouseEvent) => void;
   className?: string;
   soldOut?: boolean;
   children?: React.ReactNode;
   load: boolean;
   classText?: string;
}

const Button = ({
   text = 'button',
   size = 'sm',
   className,
   onClick,
   soldOut,
   load,
   classText,
}: ButtonProps) => {
   return (
      <button
         onClick={onClick}
         disabled={soldOut || load ? true : false}
         className={`
         ${size === 'lg' && 'lg:px-[24px] lg:py-[12px] px-[24px] py-[14px]'}
         ${size === 'sm' && 'px-[16px] py-[10px]'}
         relative
         rounded-full
         cursor-pointer
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
            <p className="text-[11px] md:text-[16px]">sold out</p>
         ) : (
            <>
               <div
                  className={`absolute left-2/4 top-2/4 -translate-x-1/4 -translate-y-2/4 hidden ${
                     load && '!block'
                  }`}
               >
                  {spin}
               </div>

               <span
                  className={`opacity-100 flex items-center justify-center text-[11px] md:text-[16px] ${classText} ${
                     load && 'opacity-0'
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
