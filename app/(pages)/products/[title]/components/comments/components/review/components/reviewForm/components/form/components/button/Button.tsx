const Button = ({
   children,
   onClick,
}: {
   children: React.ReactNode
   onClick?: () => void
}) => {
   return (
      <button
         onClick={onClick}
         className="mt-5 cursor-pointer rounded-full bg-purple-700 px-[16px] py-[8px] uppercase text-white"
      >
         {children}
      </button>
   )
}

export default Button
