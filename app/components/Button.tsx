interface ButtonProps {
   text: string | JSX.Element;
   uppercase?: boolean;
   bg?: boolean;
   size: 'sm' | 'lg';
   onClick?: (e: React.MouseEvent) => void;
   className?: string;
   soldOut?: boolean;
   children?: React.ReactNode;
   disabled?: boolean;
}

const Button = ({
   text = 'button',
   uppercase,
   bg,
   size = 'sm',
   className,
   onClick,
   soldOut,
   disabled,
}: ButtonProps) => {
   return (
      <button
         onClick={onClick}
         disabled={soldOut || disabled ? true : false}
         className={`
         ${size === 'lg' && 'lg:px-[24px] lg:py-[12px] px-[24px] py-[10px]'}
         ${size === 'sm' && 'px-[16px] py-[8px]'}
         p-[10px]
         text-[14px]
         lg:text-[16px]
         rounded-full
         w-max
         h-max
         flex
         flex-center
         text-white
         ${disabled ? 'opacity-50' : ''}
         ${bg ? 'bg-gradient' : ''}
         ${uppercase ? 'uppercase' : 'capitalize'}
         ${soldOut && 'cursor-not-allowed'}
         ${disabled && 'cursor-not-allowed'}
         ${className}   
         `}
      >
         {!soldOut ? text : 'sold out'}
      </button>
   );
};

export default Button;
