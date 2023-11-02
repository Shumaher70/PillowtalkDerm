interface ButtonProps {
   text: string;
   uppercase?: boolean;
   bg?: boolean;
   size: 'sm' | 'lg';
   onClick?: () => void;
   className?: string;
}

const Button = ({
   text = 'button',
   uppercase,
   bg,
   size = 'sm',
   className,
   onClick,
}: ButtonProps) => {
   return (
      <button
         onClick={onClick}
         className={`
            ${size === 'lg' && 'lg:px-[24px] lg:py-[12px] px-[24px] py-[10px]'}
            ${size === 'sm' && 'px-[16px] py-[8px]'}
            p-[10px]
            text-[14px]
            lg:text-[16px]
            rounded-full
            w-max
            h-max
            text-white
            ${bg ? 'bg-gradient' : ''}
            ${uppercase ? 'uppercase' : 'capitalize'}
            ${className}
         `}
      >
         {text}
      </button>
   );
};

export default Button;
