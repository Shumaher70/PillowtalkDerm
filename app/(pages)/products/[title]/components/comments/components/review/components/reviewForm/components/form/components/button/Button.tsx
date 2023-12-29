const Button = ({
   children,
   onClick,
   className,
}: {
   children: React.ReactNode
   onClick?: () => void
   className?: string
}) => {
   return (
      <button
         onClick={onClick}
         className={`mt-5 cursor-pointer rounded-full bg-purple-700 px-[16px] py-[8px] uppercase text-white ${className}`}
      >
         {children}
      </button>
   )
}

export default Button
